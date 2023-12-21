import csv
import time
import re
import subprocess
import json
from datetime import datetime
import requests
from pymongo import MongoClient

a = 0
client = MongoClient('mongodb://root:02OUXQd9Z@dds-bp1bd6b8bc0f3704-pub.mongodb.rds.aliyuncs.com:3717')
db = client['crawl_lab']  # 替换为你的数据库名称
collection = db['crawl_web_guanwang']  # 替换为你的集合名称
# 打开CSV文件
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
            location_data = {
                "longitude": 120.5516,
                "latitude": 30.5731,
                "distance": 20
            }

            # 将字典转换为 JSON 格式的字符串
            location_json = json.dumps(location_data)
            js_code = f'''const fs = require('fs');
            var e = require("../@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(exports, "__esModule", {{
                    value: !0
                }}),
                exports.default = function(e) {{
                    return l.apply(this, arguments)
                }}
                ;
                var r = e(require("../@babel/runtime/regenerator"))
                  , t = require("../@babel/runtime/helpers/typeof")
                  , n = require("../@babel/runtime/helpers/objectSpread2")
                  , a = require("../@babel/runtime/helpers/asyncToGenerator")
                  , i = e(require("../utils/wasm/rsa_sign"))
                  , u = e(require("../config/index"))
                  , p = ''||"pro"
                  , o = u.default[p]
                  , s = o.appId_weixin
                  , c = o.privateKey_weixin;
                function l(jwd) {{
                    return (l = a(r.default.mark((function e(a) {{
                        var u, p, o, l, f, b, d;
                        return r.default.wrap((function(e) {{
                            for (; ; )
                                switch (e.prev = e.next) {{
                                case 0:
                                    for (u = "",
                                    p = n(n({{}}, jwd), {{}}, {{
                                        t: Date.now() - (-4445),
                                        appId: s
                                    }}),
                                    o = Object.keys(p).sort(),
                                    l = 0; l < o.length; l++)
                                        f = o[l],
                                        p[f] || 0 === p[f] ? (b = "object" === t(p[f]) ? JSON.stringify(p[f]) : p[f],
                                        u += "".concat(l ? "&" : "").concat(f, "=").concat(b)) : "" !== p[f] && delete p[f];
                                    return e.next = 6,
                                    (0,i.default)(u, c);
                                case 6:
                                    return d = e.sent,
                                    e.abrupt("return", n(n({{}}, p), {{}}, {{
                                        sign: d.replace(/\//g, "_").replace(/\+/g, "-")
                                    }}));
                                case 8:
                                case "end":
                                    return e.stop()
                                }}
                        }}
                        ), e)
                    }}
                    )))).apply(this, arguments)
                }}
                async function getSign(jwd) {{
                    const result = await l(jwd);
                    console.log(result);
            }};
            getSign({location_json})
            '''

            url = 'https://mxsa.mxbc.net/api/v2/shopinfo/findNear'
            header = {
                'Host': 'mxsa.mxbc.net',
                'Content-Type': 'application/json',
                'xweb_xhr': '1',
                'Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3eG1pbmlfMTUzNzMzNjY5NDIxMzM0OTM3NyIsImlhdCI6MTcwMjYyOTg1Mn0.mUKKaRij1i3-1pFyFGQk21iA9eo-V2O-eW3BxV3ghrgzFrhGDZB9ZoCCWs-8DLYKKcbTtTw1jV3HeW7DvmsJjQ',                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8391',
                'version': '2.0.7',
                'Accept': '*/*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://servicewechat.com/wx7696c66d2245d107/80/page-frame.html',
            }
            output = subprocess.check_output(['node', '-e', js_code], text=True)


            def convert_string(input_str):
                # 使用正则表达式添加双引号引起来的键
                input_str = re.sub(r'(\w+):', r'"\1":', input_str)

                # 使用eval将输入字符串转换为Python对象
                input_obj = eval(input_str)

                # 使用json.dumps将Python对象转换为JSON格式的字符串，确保使用双引号作为键和字符串值的引号
                output_str = json.dumps(input_obj, ensure_ascii=False)

                return output_str


            output = convert_string(output)
            try:
                response = requests.post('https://mxsa.mxbc.net/api/v2/shopinfo/findNear', data=output, headers=header,verify=False).text
                rep = json.loads(response)
                a = a + 1
                for i in rep['data']:
                    datas = {
                        'address': i['shopAddress'],
                        'city': i['regionName'],
                        'shop_name': i['shopName'],
                        'latitude': i['latitude'],
                        'longitude': i['longitude'],
                        'province': '',
                        'day': datetime.now(),
                        'name': '蜜雪冰城',
                        "brand_name": '蜜雪冰城',
                        "brand_id": '34002',
                        "flag": "1",
                        'from': '小程序'
                    }
                    print(datas)
                    # collection.insert_one(shopdata)
                print(a)
            except:
                pass




