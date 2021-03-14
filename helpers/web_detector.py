import joblib

test_model = None

def load_model():
    global test_model
    test_model = test_model=joblib.load("./helpers/model3.pkl")
    if test_model is not None:
        print("ok")

def get_web_classification(url):
    #load model
    global test_model
    print('retrieving results')
    #test_model=joblib.load("./helpers/model2.pkl")
    result = test_model.predict(url)
    print(result[0])
    return result[0]

# testing
# url = ['https://joblib.readthedocs.io/en/latest/installing.html']
# result = get_web_classification(url)
# print(result)