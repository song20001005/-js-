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
file_path = os.path.join(script_path, '长城皮卡.js')
# 读取 JavaScript 文件内容
with open(file_path, 'r', encoding='utf-8') as js_file:
    js_code = js_file.read()
headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charse=UTF-8',
    'Origin': 'https://pickup.gwm.com.cn',
    'Referer': 'https://pickup.gwm.com.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'token': 'undefined',
}

# 创建 execjs 的运行时环境并执行 JavaScript 代码
ctx = execjs.compile(js_code)
data = {
    "dealer_type": 4,
    "city": "嘉兴市",
    "site_id": "aGKWkpZtZZ2UnMOflZNoZGGTmGaalJNwlmVoaZOcmJNtZpyUzJuW"
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
                'brand_name': '长城皮卡',
                'from': 'https://pickup.gwm.com.cn/tool-jxs.html',
                'flag':'-1'
            }
            print(dataa)
            # collection.insert_one(dataa)


