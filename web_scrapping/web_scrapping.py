import pandas as pd
import requests
import numpy as np
import json
from bs4 import BeautifulSoup

#header file to mimic as web browser
headers={'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win 64 ; x64) Apple WeKit /537.36(KHTML , like Gecko) Chrome/80.0.3987.162 Safari/537.36'}

#url to webscrap
url = 'https://www.hscap.kerala.gov.in/school.php'

school_code = []
school_details = []
school_type = []
school_name = []
phone = []
email = []
local_body = []
edu_dist = []
assembly_const = []
district = []



dist = ((1,'Thiruvanathapuram'),(2,"Kollam"),(3,'Pathanamthitta'),(4,'Alappuzha'),(5,'Kottayam'),(6,'Idukki'),(7,"Eranakulam"),
        (8,'Thrissur'),(9,"Palakkad"),(10,'Kozhikode'),(11,"Malappuram"),(12,'Wayanad'),(13, "Kannur"),(14,"Kasargode"))


for i in range(1,15):
    response = requests.post(url, data={'cmbdist': str(i)}, verify=False)
    soup = BeautifulSoup(response.text, 'lxml')
    #trim the data to eliminate unwanted messages
    trim = soup.find_all('td')[5:]
    for (numb, data) in enumerate(trim):
        if numb%9==0:
            school_code.append(data.text.strip())
            district.append(dist[i-1][1])
        if numb%9==1:
            school_details.append(data.text.strip())
        if numb%9==2:
            school_type.append(data.text.strip())
        if numb%9==3:
            local_body.append(data.text.strip())
        if numb%9==4:
            edu_dist.append(data.text.strip())
        if numb%9==5:
            assembly_const.append(data.text.strip())
        

for data in school_details:
    new_data = data.split(" ")
    email.append(new_data[-1])
    phone.append(new_data[-4])
    school_name.append(" ".join(new_data[0:-6]))
        


df=pd.DataFrame({'school code':school_code,
   'school Name':school_name,
    'Phone': phone,
    'email':email,
   'school Type':school_type,
   'Local body':local_body,
   'Educational District': edu_dist,
   'Assembly Constituancy': assembly_const,
    'District' : district
   })

json_df = df.to_json(orient ='table')
data = json.loads(json_df)
with open("School-data-kerala.json", 'w') as f:
    json.dump(data, f, indent=3)