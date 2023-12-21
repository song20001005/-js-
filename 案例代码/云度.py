import json
from datetime import datetime
import execjs
import requests
from pymongo import MongoClient
import os
client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_car']  # 替换为你的集合名称
script_path = os.path.dirname(os.path.abspath(__file__))  # 获取当前脚本所在的绝对路径
file_path = os.path.join(script_path, '云度.js')

with open(file_path, 'r',encoding='utf-8') as file:
    javascript_code = file.read()

context = execjs.compile(javascript_code)
result = context.eval("headers")

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,de;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json; charset=utf-8',
    'Referer': 'http://www.yudoauto.com/service.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'appKey': 'yudo-official-website',
    'random': result['random'],
    'secret': '0wp1u2ac-0149-r4nl-i1be-mu2fl3qw7q74',
    'sign': result['sign'],
    'timestamp': str(result['timestamp']),
}

params = (
    ('storeType', '1'),
)

response = requests.get('http://www.yudoauto.com/app-back/api/carStore/cityList', headers=headers, params=params, verify=False).text
rep = json.loads(response)
for i in rep['result']['list']:


    params = (
        ('pageSize', '100'),
        ('provinceName',i['province']),
        ('storeType', '1'),
    )
    with open(file_path, 'r', encoding='utf-8') as file:
        javascript_code = file.read()
    context = execjs.compile(javascript_code)
    result = context.eval("headers")
    header = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,de;q=0.8',
        'Connection': 'keep-alive',
        'Referer': 'https://tsp-2021.yujoy.com.cn:6660/portal/resources/official/service.html?725',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'appKey': 'yudo-official-website',
        'random': result['random'],
        'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'secret': '0wp1u2ac-0149-r4nl-i1be-mu2fl3qw7q74',
        'sign': result['sign'],
        'timestamp': str(result['timestamp']),
    }
    responses = requests.get('https://tsp-2021.yujoy.com.cn:6660/app-back/api/carStore/storeList', headers=header,params=params).text

    reps = json.loads(responses)
    try:
        for k in reps['result']['list']:
            datas = {
                'province': k['province'],
                'longitude': k['longitude'],
                'latitude': k['latitude'],
                'address': k['address'],
                'name': k['storeName'],
                'day': datetime.now(),
                'brand_name': '云度',
                'from': 'http://www.yudoauto.com/service.html',
                'flag': '-1'
            }
            collection.insert_one(datas)
    except:
        pass
