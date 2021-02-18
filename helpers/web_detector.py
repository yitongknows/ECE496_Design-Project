import joblib

def get_web_classification(url):
    #load model
    test_model=joblib.load("model2.pkl")
    result = test_model.predict(url)
    print(result[0])
    return result[0]

# testing
url = ['https://joblib.readthedocs.io/en/latest/installing.html']
result = get_web_classification(url)
print(result)