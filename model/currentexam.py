from init import db

class website(db.EmbeddedDocument):
    url = db.StringField(required=True)
    type = db.StringField()
    atime = db.StringField()
    risklevel = db.StringField()

class CurrentExam(db.Document):
    course = db.StringField(required=True)
    etype = db.StringField(required=True)
    uid = db.StringField(required=True)
    stime = db.StringField(required=True)
    etime = db.StringField(required=True)
    urls = db.ListField(db.EmbeddedDocumentField(website))



