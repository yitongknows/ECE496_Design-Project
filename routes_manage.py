# flask packages
from flask_restful import Api
# project resources
from api.authentication import SignUpApi
from api.add_courses import AddCourcesApi


def routes_creator(api: Api):
    api.add_resource(SignUpApi, '/users/register')
    api.add_resource(AddCourcesApi, '/addcourse')