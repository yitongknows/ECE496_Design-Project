from flask import Response, request, jsonify
from flask_restful import Resource

class CreateExamApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        username, password = body['email'], str(body['password'])
        user_info = Users.objects(email=username).first()
        if user_info is None:
            return jsonify({"status": 'fail', "message": "Username does not exist"})
        pw = user_info.password
        if password != pw:
            return jsonify({"status": 'fail', "message": "Password not matched"})
        return jsonify({"status": 'success', "message": "Successfully logged in"})


class DetectUrlApi(Resource):
    @staticmethod
    def post() -> Response:
        body = request.get_json()
        print(body)
        username, password, email = body['username'], str(body['password']), body["email"]
        firstname, lastname, year_study = body['firstname'], body['lastname'], int(body['year_of_study'])
        sid = int(body['sid'])
        user_info = Users.objects(username=username).first()

        if user_info is not None: # User already exists
            return jsonify({"status": 'fail', "message": "Username already exists"})

        update_user = Users(username=username, password=password, email=email, student_id=sid, firstname = firstname, lastname = lastname, year_study = year_study)
        update_user.save()
        return jsonify({"status": 'success', "message": "Successfully signed up"})