# flask packages
from flask_restful import Api
# project resources
from api.authentication import SignUpApi
from api.add_courses import AddCourcesApi
from api.webmonitor import CreateExamApi, ClassifyUrlApi, GetReportApi


def routes_creator(api: Api):
    api.add_resource(SignUpApi, '/users/register')
    api.add_resource(AddCourcesApi, '/addcourse')
    api.add_resource(CreateExamApi, '/createexam')
    api.add_resource(ClassifyUrlApi, '/classifyurl')
    api.add_resource(GetReportApi, '/getreport')