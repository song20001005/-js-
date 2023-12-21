import requests

cookies = {
    'xxl_sso_sessionid': '220946452#o5ZL84qyVO4KulWoGHT-Bvr4Muyc_44005513d9f54f409d67ef3365023cc4',
}

headers = {
    'Host': 'web.hknet-inc.com',
    'Connection': 'keep-alive',
    'sessionId': 'xxl_sso_sessionid=220946452#o5ZL84qyVO4KulWoGHT-Bvr4Muyc_44005513d9f54f409d67ef3365023cc4',
    'xweb_xhr': '1',
    # 'Cookie': 'xxl_sso_sessionid=220946452#o5ZL84qyVO4KulWoGHT-Bvr4Muyc_44005513d9f54f409d67ef3365023cc4',
    'appType': 'mini',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309071d)XWEB/8461',
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://servicewechat.com/wx0216dfe9e4024a5d/89/page-frame.html',
    # 'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

params = {
    'encryptType': '',
    'appType': 'mini',
    'appkey': '12610510',
    'sign': '8f580d0e541accc0418c1945e43ff9a8',
}
data = '{"@database":"MYSQL","[]":{"page":0,"query":2,"count":10,"shop":{"@schema":"shop","shop_status":2,"is_delete":0,"onboard_open":1,"company_id":10284,"city_name":"临汾市","shop_type<":10,"@order":"distance+","@column":"business_status,id,shop_name,detail_address,longitude,latitude,shop_logo,sellout_open,onboard_open,address,mobile,contact_tel;#ApijsonDistance(\"30.83074951171875\",\"120.92716217041016\",\"shop.latitude\",\"shop.longitude\")#:distance"},"shop_sell_out":{"@schema":"shop","shop_id@":"[]/shop/id","@column":"id:selloutId,do_time_type,common_send_time,extra_send_time,init_price"},"shop_do_day":{"@schema":"shop","business_data@":"[]/shop/id","type":1,"@column":"type,monday,tuesday,wednesday,thursday,friday,saturday,sunday"},"shop_reservation[]":{"page":0,"query":2,"count":10,"shop_reservation":{"@schema":"shop","shop_id@":"[]/shop/id","is_delete":0}},"shop_do_time[]":{"page":0,"query":2,"count":10,"shop_do_time":{"@schema":"shop","business_data@":"[]/shop/id","is_delete":0,"type":1,"@column":"type,start_time,end_time","@order":"start_time+"}}},"total@":"/[]/total"}'

response = requests.post('https://web.hknet-inc.com/queryport/get', params=params, cookies=cookies, headers=headers,data=data.encode('utf-8'), verify=False).text
print(response)