import csv
import json
from datetime import datetime

import execjs
import requests
from pymongo import MongoClient

client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_web_guanwang']  # 替换为你的集合名称
with open(r"C:\Users\DELL\Desktop\全国网格点位表.csv", mode='r') as file:
    # 创建CSV读取器
    csv_reader = csv.reader(file)

    # 遍历每一行
    for row in csv_reader:
        # 确保行至少有三列
        if len(row) >= 2:
            # 获取第二列和第三列（索引从0开始）
            longitude = row[1]
            latitude = row[2]
            data = f'{{"pageNo":1,"pageSize":200,"currentLongitude":{longitude},"currentLatitude":{latitude},"longitude":{longitude},"latitude":{latitude},"diameter":50000,"nonce":0.5873772608327363}}'
            json_data = json.loads(data)
            with open('星巴克.js', 'r', encoding='utf-8') as file:
                script_content = file.read()
            ctx = execjs.compile(script_content)
            sign = ctx.call("newSign", json_data, 'post')
            headers = {
                'Accept': '*/*',
                'Accept-Language': '*',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
                'Referer': 'https://servicewechat.com/wx3dcca19d0aa51755/167/page-frame.html',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309080f)XWEB/8501',
                'sbux-authorization': 'bearer a7426531ad6640549a886239bdf0d16e.cqEIyN9KKIl5yH3D3ZfEvQjcFTOKVsVC/rajxPIzGD8',
                'x-customer-level': '',
                'x-mini-version': '3.4.0',
                'x-wx-encrypt-openid': '5r2gy8d9ewZB/FJLKRMfw/YHwt9aBETE7pdy3NU8Srs=',
                'x-wxmem-sign': sign,
                'xweb_xhr': '1',
            }
            params = {
                'sign': sign,
            }
            try:
                response = requests.post('https://3pp.starbucks.com.cn/wxmem/mop/v2/store/list', params=params, headers=headers, data=data).json()
                for j in response['data']['nearby']:
                    data = {
                        'address': j['address'],
                        'city': j['city'],
                        'shop_name': j['name'],
                        'latitude': j['latitude'],
                        'longitude': j['longitude'],
                        'province': '',
                        'day': datetime.now(),
                        'name': '星巴克',
                        "brand_name": '星巴克',
                        "brand_id": '23219',
                        "flag": "1",
                        'from': '小程序'
                    }
                    print(data)
                    collection.insert_one(data)
            except:
                print('出错了')