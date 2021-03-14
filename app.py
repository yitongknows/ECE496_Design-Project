# flask packages
from flask_restful import Api
from flask_mongoengine import MongoEngine
# local packages
from flask import app, jsonify
from flask import Flask, render_template, session, redirect, url_for, flash
from flask_mongoengine import MongoEngine
from flask_cors import CORS
import routes_manage
from init import db
from helpers.web_detector import load_model

app = Flask(__name__)
CORS(app)
load_model()
# initialize flask and db

def create_app(config=None):

    if config is not None:
        app.config.from_object(config)

    db.init_app(app)

    @app.route('/')
    def index():
        return "Hello World!"

    # init api and routes
    api = Api(app=app)
    routes_manage.routes_creator(api=api)

    return app


create_app(config = 'config')

if __name__ == '__main__':

    #app.run(debug=True, host='0.0.0.0')
    app.run()
