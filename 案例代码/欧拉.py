import json
import time
from datetime import datetime
import requests
import os
import execjs
from pymongo import MongoClient

client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_car']  # 替换为你的集合名称

script_path = os.path.dirname(os.path.abspath(__file__))  # 获取当前脚本所在的绝对路径
file_path = os.path.join(script_path, '欧拉.js')
# 读取 JavaScript 文件内容
with open(file_path, 'r', encoding='utf-8') as js_file:
    js_code = js_file.read()
headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,de;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charse=UTF-8',
    'Origin': 'https://www.oraev.com',
    'Referer': 'https://www.oraev.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'token': 'undefined',
}
# 创建 execjs 的运行时环境并执行 JavaScript 代码
ctx = execjs.compile(js_code)
data = {
    "province": "浙江省",
    "city": "嘉兴市",
    "dealer_type": 3,
    "site_id": "aGKWkpZvaZvFbJrKl5RilmiTmGebmJKZaWNvmpaYxpNoaJmZmmtl"
}
# 调用 JavaScript 函数以获取变量值
aaa = ctx.call('createEncrypt', data)
bbb = ctx.call('createSign',{"t": int(time.time())})
datas = {
    "d": aaa,
    "t": int(time.time()),
    "sign": bbb
}

# 将data编码为JSON字符串
json_data = json.dumps(datas)

response = requests.post('https://cmsmanage-siteapi.gwm.com.cn/dealer/province-zh', headers=headers, data=json_data).text
rep = json.loads(response)
for i in rep['data']:
    data['province']=i['province']
    aaa = ctx.call('createEncrypt', data)
    bbb = ctx.call('createSign', {"t": int(time.time())})
    datas = {
        "d": aaa,
        "t": int(time.time()),
        "sign": bbb
    }
    # 将data编码为JSON字符串
    json_data = json.dumps(datas)
    responses = requests.post('https://cmsmanage-siteapi.gwm.com.cn/dealer/city-zh', headers=headers,data=json_data).text
    reps = json.loads(responses)
    for k in reps['data']:
        data['city'] = k['city']
        aaa = ctx.call('createEncrypt', data)
        bbb = ctx.call('createSign', {"t": int(time.time())})
        datas = {
            "d": aaa,
            "t": int(time.time()),
            "sign": bbb
        }
        # 将data编码为JSON字符串
        json_data = json.dumps(datas)
        responsess = requests.post('https://cmsmanage-siteapi.gwm.com.cn/dealer/dealer-zh', headers=headers,data=json_data).text
        repss = json.loads(responsess)

        for i in repss['data']:
            dataa = {
                'province': i['province'],
                'longitude': i['longitude'],
                'latitude': i['latitude'],
                'address': i['address'],
                'name': i['name'],
                'day': datetime.now(),
                'brand_name': '欧拉',
                'from': 'https://www.oraev.com/query-1/?_sasdk=dMTg5ODY3ZmE5YWZjZTYtMGMzMjdmNjcyYzJkM2ItMjYwMzFjNTEtMTQ0MDAwMC0xODk4NjdmYTliMDE4ZWE',
                'flag':'-1'
            }

            collection.insert_one(dataa)


