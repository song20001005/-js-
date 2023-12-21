import json
import time
from datetime import datetime
import csv
import requests
import execjs
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
            with open('瑞幸咖啡.js', 'r', encoding='utf-8') as file:
                script_content = file.read()

            # 执行JavaScript代码
            ctx = execjs.compile(script_content)
            eee = {
              "url": "/resource/m/shop/shopList",
              "data": {
                "channel": "GCJ-02",
                "longitude": longitude,
                "latitude": latitude,
                "offSet": 0,
                "pageSize": 100,
                "miniversion": "5158"
              }
            }
            eee = json.dumps(eee['data'])
            g = ctx.call('c.aes.en',eee,'xvNWTwAkKfQ9sEUpy6kC',True)
            u = "230101"
            d = "xvNWTwAkKfQ9sEUpy6kC"
            l = str(time.time() * 1000)
            v = "ba5cc9fe-e233-4a93-a391-d2b8f2be8f5b1698740207670"
            m = ["cid=" + u, "t=" + str(l), "dk=1", "q=" + g]
            m.append("uid=" + str(v))
            sign = ";".join(map(str, sorted(m))) + d
            sign = ctx.call('c.md5',sign)
            datass = {
                'cid': u,
                'q': g,
                'dk': '1',
                'sign': sign,
                't': l,
            }

            cookies = {
                'uid': 'ba5cc9fe-e233-4a93-a391-d2b8f2be8f5b1698740207670',
            }
            headers = {
                'Accept': '*/*',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': 'https://servicewechat.com/wx21c7506e98a2fe75/579/page-frame.html',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8447',
                'X-LK-CSID': 'df3e96fc-3f87-1e75-6952-87339ddf3c0d',
                'X-LK-SID': '380990',
                'xweb_xhr': '1',
            }
            response = requests.post('https://capi.lkcoffee.com/resource/m/shop/shopList', headers=headers, cookies=cookies, data=datass).text
            try:
                datas = ctx.call('c.aes.de',response,'xvNWTwAkKfQ9sEUpy6kC',True)
                dd = json.loads(datas)
                for i in dd['content']['otherShopList']:
                    datas = {
                    'address': i['address'],
                    'city': i['cityName'],
                    'shop_name': i['name'],
                    'latitude': i['latitude'],
                    'longitude': i['longitude'],
                    'province': '',
                    'day': datetime.now(),
                    'name': 'luckin coffee',
                    "brand_name": '瑞幸咖啡Luckincoffee',
                    "brand_id": '33728',
                    "flag": "1",
                    'from': '小程序'
                  }
                    collection.insert_one(datas)
                    print(datas)
            except:
                pass