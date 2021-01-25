from model.courses import Courses
from flask_restful import Resource
from flask import Response, request, jsonify


class AddCourcesApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        course = body['course_name']
        level = body['course_level']
        code = body['course_code']
        prof = body['professor']
        etype = body['exam_type']
        course_exist = Courses.objects(code=code).first()

        if course_exist is not None: # course already exists
            return jsonify({"status": 'fail', "message": "Course already exists"})

        add_course = Courses(course = course, code = code, level = level, prof = prof, etype = etype)
        add_course.save()
        return jsonify({"status": 'success', "message": "Successfully added course information"})

