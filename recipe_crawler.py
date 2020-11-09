from requests import get
from bs4 import BeautifulSoup
import bs4

# url = 'https://www.cnn.com/2020/11/08/politics/biden-first-day-executive-actions/index.html'
url = 'https://stackoverflow.com/questions/54546056/python-3-print-function'


import random

def crawler(url):
    response = get(url)    
    
    html_soup = BeautifulSoup(response.text, 'html.parser')
    
    div = html_soup.find_all('div')
    p = html_soup.find_all('p')
    content = []
    
    for i in div:
        
        paragraph = i.text
        content.append(paragraph)
        
    for j in p:
        
        paragraph = j.text
        content.append(paragraph)    
        
    ans = list(set(content))
   
    if ('' in ans):
        ans.remove('')
        
    if ('\n' in ans):
        ans.remove('\n')        
    
    print(ans)
    return ans
      

#execution
crawler(url)




# for x in recipes:
#     detail_url = x.a['href']

#     # get into each to detail
#     detail_html = get(detail_url)
#     detail_soup = BeautifulSoup(detail_html.text, 'html.parser')

#     title  = detail_soup.find("span", {"id": "content_1_lblRecipeTitle"})
#     # print(title.text)

#     img = detail_soup.find("img", {"id": "RecipeImage"})
#     # print('https://ww4.publix.com/'+img['src'])

#     serving = detail_soup.find("dd", {"id": "content_1_ddServings"})
#     # print(serving.text)

#     total_time = detail_soup.find("dd", {"id": "content_1_ddTotalTime"})
#     # print(total_time.text)

#     active_time = detail_soup.find("dd", {"id": "content_1_ddActiveTime"})
#     # print(active_time.text)

#     step_ingrediant = detail_soup.find("div", {"id": "recipe"})
#     ingrediant = []
#     steps = []
#     for s in step_ingrediant:
#         if isinstance(s, bs4.element.Tag):
#             # print(s)
#             pass
#         else:
#             text_ingrediant = str(s).strip()
#             if len(text_ingrediant) > 0:
#                 # print(text_ingrediant)
#                 # ingrediant.append(text_ingrediant)

#                 # if there is (xx-oz)
#                 if ')' in text_ingrediant:
#                     _,oz, d = tuple(text_ingrediant.split(' ', 2))
#                     name, notes = d, ''
#                     if ',' in d:
#                         name, notes = tuple(d.split(', ', 2))

#                     ingrediant.append({
#                         'quantity': oz[1:-1].replace('-', ' '),
#                         'name': name,
#                         'note': notes,
#                         'type':''
#                     })

#                 elif '/' in text_ingrediant:
#                     if text_ingrediant.index('/') == 3:
#                         _,fraction, d = tuple(text_ingrediant.split(' ', 2))
#                         name, notes = d, ''
#                         if ',' in d:
#                             name, notes = tuple(d.split(', ', 2))

#                         ingrediant.append({
#                             'quantity': fraction,
#                             'name': name,
#                             'note': notes,
#                             'type':''
#                         })

#                     elif text_ingrediant.index('/') == 1:
#                         fraction, d = tuple(text_ingrediant.split(' ', 1))
#                         name, notes = d, ''
#                         if ',' in d:
#                             name, notes = tuple(d.split(', ', 2))

#                         ingrediant.append({
#                             'quantity': fraction,
#                             'name': name,
#                             'note': notes,
#                             'type':''
#                         })

                    
#                 else:
#                     q, d = tuple(text_ingrediant.split(' ', 1))

#                     # some may not have any quantity
#                     try:
#                         int(q)

#                         name, notes = d, ''
#                         if ',' in d:
#                             name, notes = tuple(d.split(', ', 2))
#                         ingrediant.append({
#                             'quantity': q,
#                             'name': name,
#                             'note': notes,
#                             'type':''
#                         })

#                     except:
#                         name, notes = text_ingrediant, ''
#                         if ',' in text_ingrediant:
#                             name, notes = tuple(text_ingrediant.split(', ', 2))
#                         ingrediant.append({
#                             'quantity': 0 ,
#                             'name': name,
#                             'note': notes,
#                             'type':''
#                         })

#     for s in step_ingrediant.find_all('li'):
#         steps.append({
#             "description":s.text,
#             "mediaURL":[

#             ]
#         })

#     # print(ingrediant)
#     # print(steps)

#     nutrition = detail_soup.find("div", {"id": "nutrition"})
#     n_d = None
#     for n in nutrition:
#         if isinstance(n, bs4.element.NavigableString):
#             nutrition_detail = str(n).strip()
#             if len(nutrition_detail) > 0:
#                 # print(nutrition_detail)
#                 n_d = nutrition_detail
#                 break

#     # split
#     # print(n_d.split(";"))
#     nutritions = {}
#     serving_size = None
#     for n_ds in n_d.split("; "):
#         key, val = n_ds.rsplit(' ', 1)[0], n_ds.rsplit(' ', 1)[1]

#         # get serving size
#         if ' (' in key:
#             key, serving_size = tuple(key.split(' ('))
#             serving_size = serving_size[:-1]

#         nutritions.update({key: val})

#     recipe_detail = {
#        "title":title.text,
#        "tags":[],
#        "total time":total_time.text,
#        "servings":int(serving.text),
#        "difficulty":random.randint(2, 10),
#        "ingredients":ingrediant,
#        "instructions":steps,
#        "nutritional info":{
#             "serving size": serving_size,
#             "nutrition facts":nutritions
#        },
#        "mediaURL":{
#           "type":"image",
#           "url":'https://ww4.publix.com'+img['src']
#        },
#        "originalURL":detail_url
#     }

#     print(recipe_detail)

#     break