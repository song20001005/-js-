import requests
import execjs
with open('10086.js', 'r') as js_file:
    javascript_code = js_file.read()
# 使用execjs执行JavaScript代码
ctx = execjs.compile(javascript_code)
aa = ctx.eval('aa')
cookies = {
    'udata_lt_%40id%40': '1700189900754005646',
    'BSFIT_EXPIRATION': '1700215430521',
    'BSFIT_DEVICEID': 'OV6-YseGZRW4y9i5OtIt-GPAEJS0LyBrbiZvOA3T48M50TYvei_QjoMzEsrfDjrHdvE_t00E__ZRKOWzw94V78bdMlmo7HS9-GpMEQ-vHTMobDktk5P1K9LBcy8RNrjH-e7PIXL8a31accvD4YxF6Qmotkce6LuL',
    '_zw_kvani5r': '400ac156cd21175b03d6dc076f617b8065e296ff0601915d009d81e4eaf0d5a5f83007b2',
    'udata_s_%40id%40': '1700190343484909379',
    'WT_FPC': 'id=2c07d8c60fcc35f453b1700189900776:lv=1700200264592:ss=1700199438943',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://dev.coc.10086.cn',
    'Referer': 'https://dev.coc.10086.cn/coc3/gr/static-2c/rightsget/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'randomStr': aa[0],
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'signature': aa[2],
    'timestamp': str(aa[1]),
}
data = f'''
{{
  "preSign": "{aa[3]}",
  "frontOrderUrl": "https://dev.coc.10086.cn/coc3/gr/static-2c/rightsget/#/rightsbaw?from",
  "channelId": "",
  "from": ""
}}
'''

response = requests.post('https://dev.coc.10086.cn/coc3/gr/login/internetCertification/dataSign', headers=headers, cookies=cookies, data=data).text
print(response)