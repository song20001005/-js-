import subprocess

from datetime import datetime

import requests
from pymongo import MongoClient

with open('罗森.js', 'r', encoding='utf-8') as file:
    script_content = file.read()
client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_web_guanwang']  # 替换为你的集合名称
for i in range(200):
    output = subprocess.check_output(['node', '-e', script_content], text=True)
    headers = {
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/8.0.5.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat wechatdevtools/1.06.2308310 MicroMessenger/8.0.5 Language/zh_CN webview/',
        'Api-Access-Token': '25810559_AB7C03CBEDA74F4E877FA77D37B72811',
        'content-type': 'application/json',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://servicewechat.com/touristappid/devtools/page-frame.html',
    }
    nonce = 'nonce'
    timestamp = 'timestamp'
    signature = 'signature'
    dic = eval(output)
    if i < 10:
        # # 构建 URL 字符串
        url = f'https://lawsonapp.yorentown.com/modules/v1/waimai/shops?cityCode=00{i}&nonce={dic["nonce"]}&timestamp={dic["timestamp"]}&signature={dic["signature"]}'
    elif 10 <= i < 100:
        url = f'https://lawsonapp.yorentown.com/modules/v1/waimai/shops?cityCode=0{i}&nonce={dic["nonce"]}&timestamp={dic["timestamp"]}&signature={dic["signature"]}'
    elif i > 100:
        url = f'https://lawsonapp.yorentown.com/modules/v1/waimai/shops?cityCode={i}&nonce={dic["nonce"]}&timestamp={dic["timestamp"]}&signature={dic["signature"]}'
    try:
        response = requests.get(url=url, headers=headers).json()
        for j in response['data']['shops']:
            datas = {
                'address': j['addressDetail'],
                'city': '',
                'shop_name': j['storeName'],
                'latitude': j['latitude'],
                'longitude': j['longitude'],
                'province': '',
                'day': datetime.now(),
                'name': '罗森',
                "brand_name": '罗森',
                "brand_id": '35209',
                "flag": "1",
                'from': '小程序'
            }
            collection.insert_one(datas)
    except:
        print(i)
