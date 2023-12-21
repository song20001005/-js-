from datetime import datetime

import execjs
import requests
from pymongo import MongoClient

cookies = {
    'HWWAFSESID': '91b51736f4798781d0',
    'HWWAFSESTIME': '1700096996257',
    '_SID': '48548948635d04624cd08b2178b96fa5',
    'Hm_lvt_8e1f31faa8383ed7a42a8e58efe4a621': '1700096998',
    'Hm_lpvt_8e1f31faa8383ed7a42a8e58efe4a621': '1700106767',
}
headers = {
    'Host': 'www.fila.com.cn',
    'Connection': 'keep-alive',
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'Origin': 'https://www.fila.com.cn',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://www.fila.com.cn/cms/shop.html',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_web_guanwang']  # 替换为你的集合名称
# #

headers = {
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'Referer': 'https://www.fila.com.cn/',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.get('https://img01.fila.cn/theme_fl/pc/scripts/region.js', headers=headers).text.strip().replace('var areaData = ','').replace(';','')
id = 'id'
parentid ='parentid'
name = 'name'
data = 'data'
res = eval(response)
for j in res:
    if j['id'] < 405 and j['parentid'] != 0:
        with open('斐乐.js', 'r', encoding='utf-8') as file:
            script_content = file.read()

        # 执行JavaScript代码
        ctx = execjs.compile(script_content)
        a = ctx.eval("a")

        data = {
            'province': j['parentid'],
            'city': j['id'],
            'tag': '',
            'timestamp': a[0],
            'nonce': a[1],
            'sign': a[2]
        }
        responses = requests.post('https://www.fila.com.cn/fila/data.webpage/shopInfo', headers=headers, cookies=cookies,data=data).json()
        try:
            for i in responses['data']:
                datas = {
                    'address': i['addr'],
                    'city': '',
                    'shop_name': i['name'],
                    'latitude': i['lat'],
                    'longitude': i['lng'],
                    'province': '',
                    'day': datetime.now(),
                    'name': '斐乐',
                    "brand_name": 'FILA斐乐',
                    "brand_id": '33695',
                    "flag": "1",
                    'from': 'https://www.fila.com.cn/cms/shop.html'
                }
                collection.insert_one(datas)
        except:
            print(j)
