from flask import Response, request, jsonify
from model.currentexam import CurrentExam, website
from helpers.web_detector import get_web_classification
from flask_restful import Resource

class CreateExamApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        course = body['course_code']
        etype = body['course_type']
        uid = body['user_id']
        stime = body['start_time']
        
        exam_exist = CurrentExam.objects(course = course, uid = uid).first()
        if exam_exist is not None:
            return jsonify({"status": "fail, Exam already exist"})
        
        new_exam = CurrentExam(course = course, etype = etype, uid = uid, stime = stime)
        new_exam.save()
        return jsonify({"status": "Successfully created exam"})


class ClassifyUrlApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        uid = body['user_id']
        atime = body['access_time']
        url = body['website_url']

        user_info = CurrentExam.objects(uid=uid).first()

        if user_info is None: # User doesnot exists
            return jsonify({"status": "User is not found"})

        # get website type
        web_type = get_web_classification([url])
        print(web_type)
        # get risk level
        if web_type.lower() == user_info.etype.lower():
            risk = 'high'
        else:
            risk = 'low'

        new_url = website(url = url, type = web_type, atime = atime, risklevel = risk)

        user_info.urls.append(new_url)
        user_info.save()
        return jsonify({"web_class": web_type})

class GetReportApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        course = body['course_code']
        uid = body['user_id']
        etime = body['end_time']
        
        exam_exist = CurrentExam.objects(course = course, uid = uid).first()
        if exam_exist is None:
            return jsonify({"status": "fail, Exam or user not found"})

        return jsonify(exam_exist.urls)

class EndExamApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        course = body['course_code']
        uid = body['user_id']
        
        exam_exist = CurrentExam.objects(course = course, uid = uid).first()
        if exam_exist is None:
            return jsonify({"status": "fail, Exam or user not found"})
        exam_exist.delete()

        return jsonify({"status": "Exam deleted"})