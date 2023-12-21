from datetime import datetime
import requests
import execjs
from pymongo import MongoClient
import os
client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_car']  # 替换为你的集合名称
script_path = os.path.dirname(os.path.abspath(__file__))  # 获取当前脚本所在的绝对路径
file_path = os.path.join(script_path, '岚图汽车.js')
# 执行JavaScript文件
with open(file_path, 'r',encoding='utf-8') as file:
    javascript_code = file.read()

context = execjs.compile(javascript_code)
result = context.eval("n")
headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9,de;q=0.8',
    'Access-Token': 'null',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://www.voyah.com.cn',
    'Referer': 'https://www.voyah.com.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'platform': 'websitePc',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sign_encrypt': 'dvwDoKPOIRhvnTFrtWXCeY79nmugKJ67t5rgXZfD/V8V+DbMlMkbSxEcMKDeuBZtQPIIOa9/wPwZwfWCcDhzKMcTEcAQlzMXhMrOu6Z1ryYauJV80YKtVpA7vG10jkgoGTPFT7+kger9q1OABu457yx0s1TCva9E+udiUQ7g9NnawaUndT2uBwvD8vTCK5fUnC/wBc/Abc2UqlRZfbsEXwuRmBxaI8ofh+P6ieXmd0aIS63mj/3sqdRa1cUmZsCIncxBln/cRFWR3T2gtxapAV/vyZxo/C8ms4fyTMHyXNHLnbLuikvIFKj+pUm94sVkufUbvPj1jUjNJoTms2mWTQ==',
}

data = str(result)
responses = requests.post('https://clientapi.dsmp.voyah.com.cn/v1/official/website/V3/getCatList', headers=headers, data=data).text
results = context.call("crypto",responses)
for k in results['data']:
    province = k['province']
    for j in k['city']:
        for i in j['shopName']:
            data = {
                'province': province,
                'longitude': i['gcj02Longitude'],
                'latitude': i['gcj02Latitude'],
                'address': i['contactAddress'],
                'name': i['fullName'],
                'day': datetime.now(),
                'brand_name': '岚图汽车',
                'from': 'https://www.voyah.com.cn/service.html',
                'flag':'1'
            }
            collection.insert_one(data)

