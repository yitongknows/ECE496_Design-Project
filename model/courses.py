from init import db

class Courses(db.Document):
    course = db.StringField(required=True)
    code = db.StringField(required=True)
    level = db.IntField(required=True)
    prof = db.StringField()
    etype = db.StringField(required=True)
