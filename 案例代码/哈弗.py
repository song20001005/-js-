import json
import os
import time
from datetime import datetime

import execjs
import requests
from pymongo import MongoClient

client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_car']  # 替换为你的集合名称
headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://www.haval.com.cn',
    'Referer': 'https://www.haval.com.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
script_path = os.path.dirname(os.path.abspath(__file__))  # 获取当前脚本所在的绝对路径
file_path = os.path.join(script_path, '哈弗.js')
# 读取 JavaScript 文件内容
with open(file_path, 'r', encoding='utf-8') as js_file:
    js_code = js_file.read()
# 创建一个JavaScript上下文并加载外部文件
ctx = execjs.compile(js_code)
data1 = {
    "car_model_id": 0,
    "province": "",
    "city": "",
    "lat": '',
    "lon": '',
    "dealer_type": 1,
    "saleCarBrand": "新哈弗H5",
    "car_id": "2000035",
    "cooperation": 1,
    "is_release": 0,
    "site_id": "aGqZxcudmMbFb8eem5SXZWOalZafasRql2xpcpual8Zwlp0=",
    "storeId": "",
    "type": 2,
    "version_id": 1
}
# 访问JavaScript变量
d = ctx.call('createEncrypt', data1)
sign = ctx.call('createSign', data1)
newParam = {}
newParam['d'] = d
newParam['t'] = int(time.time())
newParam['sign'] = sign

response = requests.post('https://cmsmanage-siteapi.gwm.com.cn/dealer/province-list', headers=headers, data=json.dumps(newParam)).text
rep = json.loads(response)
for i in rep['data']:
    data2 = {
    "car_model_id": 0,
    "province": f'{i["text"]}',
    "city": "",
    "lat": 1.352083,
    "lon": 103.819836,
    "dealer_type": 1,
    "saleCarBrand": "新哈弗H5",
    "car_id": "2000035",
    "cooperation": 1,
    "is_release": 0,
    "site_id": "aGqZxcudmMbFb8eem5SXZWOalZafasRql2xpcpual8Zwlp0=",
    "storeId": "",
    "type": 2,
    "version_id": 1
}
    # 访问JavaScript变量
    d = ctx.call('createEncrypt', data2)
    sign = ctx.call('createSign', data2)
    newParam = {}
    newParam['d'] = d
    newParam['t'] = int(time.time())
    newParam['sign'] = sign
    responses = requests.post('https://cmsmanage-siteapi.gwm.com.cn/dealer/city-list', headers=headers, data=json.dumps(newParam)).text
    reps = json.loads(responses)
    for j in reps['data']:
        data3 = {
            "car_model_id": 0,
            "province": f'{i["text"]}',
            "city": f"{j['text']}",
            "lat": 1.352083,
            "lon": 103.819836,
            "dealer_type": 1,
            "saleCarBrand": "新哈弗H5",
            "car_id": "2000035",
            "cooperation": 1,
            "is_release": 0,
            "site_id": "aGqZxcudmMbFb8eem5SXZWOalZafasRql2xpcpual8Zwlp0=",
            "storeId": "",
            "type": 2,
            "version_id": 1
        }
        # 访问JavaScript变量
        d = ctx.call('createEncrypt', data3)
        sign = ctx.call('createSign', data3)
        newParam = {}
        newParam['d'] = d
        newParam['t'] = int(time.time())
        newParam['sign'] = sign
        responsess = requests.post('https://cmsmanage-siteapi.gwm.com.cn/dealer/get-dealer', headers=headers, data=json.dumps(newParam)).text
        repss = json.loads(responsess)
        for k in repss['data']:
            data = {
                'province': i["text"],
                'longitude': k['coordinate'].split(',')[0],
                'latitude': k['coordinate'].split(',')[1],
                'address': k['address'],
                'name': k['dealer_name'],
                'day': datetime.now(),
                'brand_name': '哈弗',
                'from': 'https://www.haval.com.cn/dealerpc/?_sasdk=dMThhODg5MjVhMzgxYmNjLTA3ZDdhZmE3MzlhOTU1NC0yNjAzMWY1MS0yMDczNjAwLTE4YTg4OTI1YTM5MWVmYw',
                'flag': '-1'
            }
            collection.insert_one(data)
