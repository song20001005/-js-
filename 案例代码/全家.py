import json
from datetime import datetime

import execjs
import requests
from pymongo import MongoClient

client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_web_guanwang']  # 替换为你的集合名称
city_list = ["东莞","北京","成都","无锡","深圳","上海","嘉兴","广州","杭州","苏州"]
t = '7226d3cba3573b1fef1482b327781a67.4a4beabe0b4bfaaafc2a0d23151be532'
for j in city_list:
    data = f'{{"city_name":"{j}","size":5000,"page":1}}'.encode()
    json_data = json.loads(data.decode('utf-8'))
    with open('全家.js', 'r', encoding='utf-8') as file:
        script_content = file.read()
    ctx = execjs.compile(script_content)
    sign = ctx.call("mksign", json_data, t)
    headers = {
        'Authorization-AppKey': '4c5541ac28af65c95d31d477ec5cfe4c',
        'Authorization-Sign': sign,
        'Authorization-Token': '7226d3cba3573b1fef1482b327781a67.4a4beabe0b4bfaaafc2a0d23151be532',
        'Content-Type': 'application/json',
        'Referer': 'https://servicewechat.com/wx3890aed192249fce/62/page-frame.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309080f)XWEB/8501',
    }
    response = requests.post('https://miniapp.chinafamilymart.com.cn/api/v1/lbs/store/list', headers=headers, data=data).json()
    for i in response['data']['list']:
        datas = {
            'address': i['store_addr'],
            'city': j,
            'shop_name': i['store_name'],
            'latitude': i['lat'],
            'longitude': i['lng'],
            'province': '',
            'day': datetime.now(),
            'name': '全家',
            "brand_name": '全家',
            "brand_id": '17059',
            "flag": "1",
            'from': '小程序'
        }
        collection.insert_one(datas)
