import json
from datetime import datetime

import requests
import execjs
from pymongo import MongoClient

with open('古茗.js', 'r', encoding='utf-8') as file:
    script_content = file.read()
key = {
        "type": "AES",
        "key": "e88c817cb2ef49b595d876a0cbec0bdf"
    }
# 执行JavaScript代码
ctx = execjs.compile(script_content)
# 连接MongoDB数据库
client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_web_guanwang']  # 替换为你的集合名称
headers = {
    'Accept': '*/*',
    'Accept-Language': '*',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtZW1iZXItY2VudGVyIiwiaWF0IjoxNzAyNjIyMjk1LCJqdGkiOiJmNzkwODY2OS04NTBhLTQ3ZjktODgyNy01ZDdlMWNmZTZjYmMiLCJwaG9uZSI6IjE1MzQ1NDcyMzU5IiwiY3JlYXRlVGltZSI6eyJkYXlPZldlZWsiOiJUSFVSU0RBWSIsImhvdXIiOjExLCJtb250aCI6IlNFUFRFTUJFUiIsInllYXIiOjIwMjMsImRheU9mWWVhciI6MjY0LCJkYXlPZk1vbnRoIjoyMSwibW9udGhWYWx1ZSI6OSwibmFubyI6MCwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifSwibWludXRlIjoxNSwic2Vjb25kIjo5fSwibG9naW5UeXBlIjoiNDEiLCJvcGVuX2lkIjoib016QXc1Y1pDaFpGSVNPblF5cm9aV3RleGNpYyIsInVzZXJfbmFtZSI6Im9NekF3NWNaQ2haRklTT25ReXJvWld0ZXhjaWMiLCJzY29wZSI6InV1Yzpwcm92aWRlciIsIm5pY2tuYW1lIjoi54ix6Iqd5aOr6IyJ6I6J55qE5aSn6IyX5pifIiwidXNlcklkIjoiMjAwMDAwMDAwMDA1NjIwNjkzNiIsImNsaWVudF9pZCI6IjEwMDAwNzEiLCJhY2NvdW50IjoiMTUzNDU0NzIzNTkiLCJleHAiOjE3MDMxMDQ2OTV9.d8Rp2qbHybNqIKaTkmzYANzDrkF8QtUQ0yDs5Ymi_kHYVBbwNx8QVW-o33J47VPOYMProg_P1jOJQ8IYHV_S6mPVBOZPPbn7_F688za5FTR1YfveeksrWqKYBYSzLGL6REg3DWyt7GKhIOJbfXSZGfj3U1QMXfHttOJEGabp69E',
    'Connection': 'keep-alive',
    'Content-Type': 'text/plain',
    'Referer': 'https://servicewechat.com/wx1736dcbd36f4c055/471/page-frame.html',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309080f)XWEB/8501',
    'gm-encrypt': 'default',
    'gm-origin-content-type': 'application/json',
    'gm-referer': 'pages/shopList/index',
    'user-exchange': '34',
    'ws_basicinfo': '{"brand":"microsoft","model":"microsoft","system":"Windows 11 x64","version":"3.9.8","platform":"windows","SDKVersion":"3.2.2","appVersion":""}',
    'ws_gps': '{"lat":30.83074951171875,"lon":120.92716217041016}',
    'ws_pid': 'gmapp-wechat',
    'ws_regionInfo': '%7B%22cityCode%22%3A%22330400%22%2C%22cityName%22%3A%22%E5%98%89%E5%85%B4%E5%B8%82%22%2C%22nationCode%22%3A%22156%22%2C%22completeCityCode%22%3A%22156330400%22%2C%22nation%22%3A%22%E4%B8%AD%E5%9B%BD%22%2C%22province%22%3A%22%E6%B5%99%E6%B1%9F%E7%9C%81%22%2C%22addressCode%22%3A%22330421%22%7D',
    'ws_timestamp': '1702628302219',
    'ws_userId': '2000000000056206936',
    'ws_uuId': '',
    'xweb_xhr': '1',
}
b = {
    "type": "AES",
    "key": "e88c817cb2ef49b595d876a0cbec0bdf"
}
citycode = [152800, 152900, 210100, 210200, 210300, 210400, 210500, 210600, 210700, 210800, 210900, 211000, 211100, 211200, 211300, 211400, 220100, 220200, 220300, 220400, 220500, 220600, 220700, 220800, 230100, 230200, 230300, 230400, 230500, 230600, 230700, 230800, 230900, 231000, 231100, 231200, 310000, 320100, 320200, 320300, 320400, 320500, 320600, 320700, 320800, 320900, 321000, 321100, 321200, 321300, 330100, 330200, 330300, 330400, 330500, 330600, 330700, 330800, 330900, 331000, 331100, 340100, 340200, 340300, 340400, 340500, 340600, 340700, 340800, 340900, 341000, 341100, 341200, 341300, 341400, 341500, 341600, 341700, 341800, 350100, 350200, 350300, 350400, 350500, 350600, 350700, 350800, 350900, 360100, 360200, 360300, 360400, 360500, 360600, 360700, 360800, 360900, 361000, 361100, 370100, 370200, 370300, 370400, 370500, 370600, 370700, 370800, 370900, 371000, 371100, 371200, 371300, 371400, 371500, 371600, 371700, 410100, 410200, 410300, 410400, 410500, 410600, 410700, 410800, 410900, 411000, 411100, 411200, 411300, 411400, 411500, 411600, 411700, 420100, 420200, 420300, 420400, 420500, 420600, 420700, 420800, 420900, 421000, 421100, 421200, 421300, 422800, 430100, 430200, 430300, 430400, 430500, 430600, 430700, ]
for i in citycode:
    a = f'{{"channelCode":20,"brandId":1,"latitude":40.83074951171875,"longitude":120.92716217041016,"cityCode":"{i}","page":{{"pageSize":500}}}}'

    result = ctx.call("get", a, b)
    data = result
    response = requests.post('https://newton.gumingnc.com/newton-buyer/newton/buyer/shopChannelV2/listToC/v1', headers=headers,data=data).text
    res = ctx.call("put", response, b)
    res = json.loads(res)
    if res['data']['data']:
        for j in res['data']['data']:
            data = {
                'address': j['detailAddress'],
                'city': '',
                'shop_name': j['shopName'],
                'latitude': j['latitude'],
                'longitude': j['longitude'],
                'province': '',
                'day': datetime.now(),
                'name': '古茗',
                "brand_name": '古茗',
                "brand_id": '88895',
                "flag": "0",
                'from': '古茗小程序'
            }
            print(data)
            # collection.insert_one(data)


