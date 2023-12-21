import random

import execjs
import requests
import time
import datetime
timestamp = int(time.time() * 1000)


timestamps = round(datetime.datetime.now().timestamp() / 1000)
string_timestamp = str(timestamps)

# 获取当前时间戳
timestampss = datetime.datetime.now().timestamp()
# 将时间戳转换为字符串
timestamp_str = str(timestampss)
# 生成随机数并四舍五入
random_num = round(999999 * random.random())
# 拼接字符串
result = timestamp_str + "" + str(random_num)


with open('麦当劳.js', 'r', encoding='utf-8') as file:
    script_content = file.read()

# 执行JavaScript代码
ctx = execjs.compile(script_content)

params = {
    'showType': '4',
    'latitude': '35.824881',
    'longitude': '120.927849',
}
X_B3_TraceId = ctx.call("T")
need_sign = {
    "url": "https://api.mcd.cn/bff/store/stores/vicinity",
    "data": {
        "latitude": 30.83074951171875,
        "longitude": 120.92716217041016,
        "distance": 10000,
        "keyword": "",
        "hotTagCode": "",
        "showType": 2,
        "beType": "",
        "orderMode": 0
    },
    "method": "GET",
    "header": {
        "content-type": "application/json",
        "ct": "31",
        "sid": "",
        "xid": "",
        "language": "zh",
        "v": "6.0.74.0",
        "tid": "00003TuL",
        "d": "Bf7OhC3gDB5YprhTtFdhF0ayZ9pAEv0DyKA0fahgtNIMEGqv++DTbe/xrV+ux1QUaYB/wCl23Z4wAih9eI1uNqA==",
        'X-B3-SpanId': X_B3_TraceId[0:16],
        'X-B3-TraceId': X_B3_TraceId,
        "request-timestamp": timestamp,
        "st": string_timestamp,
        "nonce": result,
        "sv": "v3",
        "meddyid": "",
        "biz_from": "1006",
        "biz_scenario": "103"
    },
    "timeout": 10000,
    "dataType": "json",
    "responseType": "text",
    "otherOption": {},
    "enableHttp2": True,
    "channel": "mini",
    "pathVars": []
}
sign = ctx.call("mksign", need_sign)


headers = {
    'Accept': '*/*',
    'Accept-Language': '*',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Referer': 'https://servicewechat.com/wx25f982a55e60a540/338/page-frame.html',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309080f)XWEB/8519',
    'X-B3-SpanId': X_B3_TraceId[0:16],
    'X-B3-TraceId': X_B3_TraceId,
    'biz_from': '1006',
    'biz_scenario': '103',
    'ct': '31',
    'd': 'Bf7OhC3gDB5YprhTtFdhF0ayZ9pAEv0DyKA0fahgtNIMEGqv++DTbe/xrV+ux1QUaYB/wCl23Z4wAih9eI1uNqA==',
    'language': 'zh',
    'meddyid': '',
    'nonce': result,
    'request-timestamp': str(timestamp),
    'sid': '',
    'sign': sign,
    'st': string_timestamp,
    'sv': 'v3',
    'tid': '00003TuL',
    'v': '6.0.74.0',
    'xid': '',
    'xweb_xhr': '1',
}
print(sign)
response = requests.get('https://api.mcd.cn/bff/store/stores/vicinity', params=params, headers=headers).json()
print(response)