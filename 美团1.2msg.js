setTimeout = function () {
};
setInterval = function () {
};
const {v1: uuidv1, v4: uuidv4} = require('uuid');

window = global;

document = window.document
XMLHttpRequest = window.XMLHttpRequest
location = {
    "ancestorOrigins": {},
    "href": "https://cactivityapi-sc.waimai.meituan.com/h5/package/shop-inner-search/shop-inner-search?poi_id=997967000163075&poi_id_str=eOaCifgMZgZOaYa0yvs8eAI&source_BU=&buz_type=0",
    "origin": "https://cactivityapi-sc.waimai.meituan.com",
    "protocol": "https:",
    "host": "cactivityapi-sc.waimai.meituan.com",
    "hostname": "cactivityapi-sc.waimai.meituan.com",
    "port": "",
    "pathname": "/h5/package/shop-inner-search/shop-inner-search",
    "search": "?poi_id=997967000163075&poi_id_str=eOaCifgMZgZOaYa0yvs8eAI&source_BU=&buz_type=0",
    "hash": ""
}
navigator = {
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    vendor: 'Google Inc.'
}
screen = {
    availHeight: 1040,
    availLeft: 0,
    availTopL: 0,
    availWidth: 1920,
    colorDepth: 24,
    height: 1080,
    isExtended: true,
    orientation: {
        type: "landscape-primary"
    },
    pixelDepth: 24,
    width: 1920
}
var env={
    "search_horn_mp_version": "1.0.0",
    "nib.general.medical_beauty/cityid20": "{\"pageName\":\"nib.general.medical_beauty/cityid20\",\"moduleList\":[{\"moduleName\":\"joyPrimeCache\",\"moduleData\":{\"uiModel\":{\"allData\":{\"moreCategoryUrl\":\"\",\"sceneNavList\":[],\"dotInfoVOs\":[],\"abReport\":{\"dz_ab_test\":\"\",\"abTest\":\"\",\"queryId\":\"\"},\"ocean\":{\"special\":{\"labs\":\"\",\"abtest\":\"\",\"category\":\"\",\"bidView\":\"\",\"bidClick\":\"\"},\"common\":{\"labs\":\"\",\"abtest\":\"\",\"category\":\"cosmetology\",\"bidView\":\"b_cosmetology_x70ygs06_mv\",\"bidClick\":\"b_cosmetology_x70ygs06_mc\"}},\"style\":5,\"showStyle\":{\"slipType\":0,\"secIconWidth\":40,\"secIconHeight\":40,\"mainIconHeight\":60,\"mainIconWidth\":60,\"bigLineNumber\":1,\"bigColumnsNumber\":5,\"barColor\":\"\",\"slipColor\":\"\",\"putAway\":{\"text\":\"\",\"picUrl\":\"\"},\"expand\":{\"text\":\"\",\"picUrl\":\"\"},\"columnsNumber\":5,\"lineNumber\":1,\"bgColor\":\"\"},\"secNavList\":[{\"type\":0,\"categoryId\":368,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛斑祛痣\",\"iconPic\":\"https://img.meituan.net/dpmobile/4a0e9e86e1293edfa05194398fe35b8462355.png\",\"iconTitle\":\"祛斑祛痣\"},{\"type\":0,\"categoryId\":62,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛斑祛痣\",\"iconPic\":\"https://img.meituan.net/dpmobile/d07dd2fd7d6024665e72e0e183b4406026100.png\",\"iconTitle\":\"冰点脱毛\"},{\"type\":0,\"categoryId\":1097,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=瘦脸轮廓\",\"iconPic\":\"https://img.meituan.net/dpmobile/e2c24035455a04bbd48f5d43ce2962dd55159.png.webp\",\"iconTitle\":\"瘦脸轮廓\"},{\"type\":0,\"categoryId\":4,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=玻尿酸\",\"iconPic\":\"https://img.meituan.net/dpmobile/80f2dacda44d5c918725a667e49d3c6227102.png.webp\",\"iconTitle\":\"玻尿酸\"},{\"type\":0,\"categoryId\":58,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=小气泡美肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/a85e0cc5b46dbe83f0ffba6c8638482925344.png.webp\",\"iconTitle\":\"小气泡美肤\"}],\"mainNavList\":[{\"type\":0,\"categoryId\":48,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=光子嫩肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/096a18e000c32a7a4dbc39e4727ef09d38478.png\",\"iconTitle\":\"光子嫩肤\"},{\"type\":0,\"categoryId\":54,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=水光针\",\"iconPic\":\"https://img.meituan.net/dpmobile/052234fc2843d923a13151172e130c9829903.png\",\"iconTitle\":\"水光补水\"},{\"type\":0,\"categoryId\":1098,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛痘清洁\",\"iconPic\":\"https://img.meituan.net/dpmobile/a76048f3841749bf688b179d92c620a655031.png.webp\",\"iconTitle\":\"祛痘清洁\"},{\"type\":0,\"categoryId\":1096,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=抗衰除皱\",\"iconPic\":\"https://img.meituan.net/dpmobile/82b4d06c6ae835d434cc594871fc1aca58200.png\",\"iconTitle\":\"抗衰除皱\"},{\"type\":0,\"categoryId\":367,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=美白嫩肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/46d5e83f539e87fc0b1ec95eec7630ab55119.png.webp\",\"iconTitle\":\"美白嫩肤\"}]},\"primeType\":5,\"abtest\":\"[]\",\"bigSize\":{\"width\":60,\"height\":60},\"mainPage\":1,\"mainNavigation\":[[{\"type\":0,\"categoryId\":48,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=光子嫩肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/096a18e000c32a7a4dbc39e4727ef09d38478.png\",\"iconTitle\":\"光子嫩肤\"},{\"type\":0,\"categoryId\":54,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=水光针\",\"iconPic\":\"https://img.meituan.net/dpmobile/052234fc2843d923a13151172e130c9829903.png\",\"iconTitle\":\"水光补水\"},{\"type\":0,\"categoryId\":1098,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛痘清洁\",\"iconPic\":\"https://img.meituan.net/dpmobile/a76048f3841749bf688b179d92c620a655031.png.webp\",\"iconTitle\":\"祛痘清洁\"},{\"type\":0,\"categoryId\":1096,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=抗衰除皱\",\"iconPic\":\"https://img.meituan.net/dpmobile/82b4d06c6ae835d434cc594871fc1aca58200.png\",\"iconTitle\":\"抗衰除皱\"},{\"type\":0,\"categoryId\":367,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=美白嫩肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/46d5e83f539e87fc0b1ec95eec7630ab55119.png.webp\",\"iconTitle\":\"美白嫩肤\"}]],\"smallSize\":{\"width\":40,\"height\":40},\"secPage\":1,\"secNavigation\":[[{\"type\":0,\"categoryId\":368,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛斑祛痣\",\"iconPic\":\"https://img.meituan.net/dpmobile/4a0e9e86e1293edfa05194398fe35b8462355.png\",\"iconTitle\":\"祛斑祛痣\"},{\"type\":0,\"categoryId\":62,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛斑祛痣\",\"iconPic\":\"https://img.meituan.net/dpmobile/d07dd2fd7d6024665e72e0e183b4406026100.png\",\"iconTitle\":\"冰点脱毛\"},{\"type\":0,\"categoryId\":1097,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=瘦脸轮廓\",\"iconPic\":\"https://img.meituan.net/dpmobile/e2c24035455a04bbd48f5d43ce2962dd55159.png.webp\",\"iconTitle\":\"瘦脸轮廓\"},{\"type\":0,\"categoryId\":4,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=玻尿酸\",\"iconPic\":\"https://img.meituan.net/dpmobile/80f2dacda44d5c918725a667e49d3c6227102.png.webp\",\"iconTitle\":\"玻尿酸\"},{\"type\":0,\"categoryId\":58,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=小气泡美肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/a85e0cc5b46dbe83f0ffba6c8638482925344.png.webp\",\"iconTitle\":\"小气泡美肤\"}]],\"partSecNavigation\":[{\"type\":0,\"categoryId\":368,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛斑祛痣\",\"iconPic\":\"https://img.meituan.net/dpmobile/4a0e9e86e1293edfa05194398fe35b8462355.png\",\"iconTitle\":\"祛斑祛痣\"},{\"type\":0,\"categoryId\":62,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=祛斑祛痣\",\"iconPic\":\"https://img.meituan.net/dpmobile/d07dd2fd7d6024665e72e0e183b4406026100.png\",\"iconTitle\":\"冰点脱毛\"},{\"type\":0,\"categoryId\":1097,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=瘦脸轮廓\",\"iconPic\":\"https://img.meituan.net/dpmobile/e2c24035455a04bbd48f5d43ce2962dd55159.png.webp\",\"iconTitle\":\"瘦脸轮廓\"},{\"type\":0,\"categoryId\":4,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=玻尿酸\",\"iconPic\":\"https://img.meituan.net/dpmobile/80f2dacda44d5c918725a667e49d3c6227102.png.webp\",\"iconTitle\":\"玻尿酸\"},{\"type\":0,\"categoryId\":58,\"subscript\":\"\",\"linkUrl\":\"/index/pages/search/search?cateId=22&subCate=20423&q=小气泡美肤\",\"iconPic\":\"https://img.meituan.net/dpmobile/a85e0cc5b46dbe83f0ffba6c8638482925344.png.webp\",\"iconTitle\":\"小气泡美肤\"}],\"moreLink\":\"\"}}}],\"cacheTime\":1719383022508}",
    "userInfo": {
        "openId": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "unionId": "oNQu9t1mtNmbtxbz1rOCrFp0viLc",
        "openIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADg8eOHToVLIb4SWjAqJHIH41SwyckRlQ/6aYsEfuzQWqbxH2nXKo3t5aIiMb3bq8vEEfgqBZRJoXQ==",
        "unionIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADhcXY4bUOc6XVhlVdoGBqzOOoGyoX4rm3SfhHFbSNXSLS3cmKtCXG34WcoA992X0pp9VoT5M5lZCQ==",
        "userId": 2298607377,
        "token": "AgEMIdHCJ_73t2fvr7OnvPyii4uNhx3j8hbMiHhbBB8thgvzI8I0dhDufE9BzYZav2sQodaiqqD7WgAAAAAMIQAAeG1LBesce1lyGfUPNaWuvrPfMjuB9EZIV98QgAil49jmjh0N3B1zkK8yQhktrfzK",
        "creatTime": 1719307499790,
        "code": "",
        "uuid": "18fe6b76ffec8-a2bf8c91d85460-0-0-18fe6b76ffe9d"
    },
    "__MTUC__authInfo": {
        "token": "AgEMIdHCJ_73t2fvr7OnvPyii4uNhx3j8hbMiHhbBB8thgvzI8I0dhDufE9BzYZav2sQodaiqqD7WgAAAAAMIQAAeG1LBesce1lyGfUPNaWuvrPfMjuB9EZIV98QgAil49jmjh0N3B1zkK8yQhktrfzK",
        "userId": 2298607377
    },
    "searchNlp-searchHistory-5286757511422186240": [
        {
            "query": "北京禾来美",
            "icon": "",
            "poiid": "",
            "showtype": "",
            "cate": -1,
            "type": "default"
        },
        {
            "query": "禾来美",
            "icon": "",
            "poiid": "",
            "showtype": "",
            "cate": -1,
            "type": "default"
        },
        {
            "query": "禾",
            "icon": "",
            "poiid": "",
            "showtype": "",
            "cate": -1,
            "type": "default"
        },
        {
            "query": "禾来",
            "icon": "",
            "poiid": "",
            "showtype": "",
            "cate": -1,
            "type": "default"
        },
        {
            "query": "美容",
            "icon": "",
            "poiid": "",
            "showtype": "",
            "cate": -1,
            "type": "default"
        },
        {
            "query": "美容院",
            "icon": "",
            "poiid": "",
            "showtype": "",
            "cate": -1,
            "type": "default"
        }
    ],
    "maicai-_": {
        "keys": [
            "_mall_isUpdateStorage"
        ],
        "timestamp": 1717585619382
    },
    "waimai-pub_session_list_info_success_time": 1719333493011,
    "youxuan-_mall_env": {
        "value": "production",
        "expires": 7776000,
        "timestamp": 1718529798639,
        "count": -1,
        "currentCount": 0
    },
    "waimai-UNIFIED": 1,
    "maicai-_lx_sdk_wxunionid": "18fe814a9b7c8-19d9a531105371-0-4bc94-18fe814a9b7c8",
    "$KGX_PROXY_pushToken": "wxxappqLC81hOd09ImLtZ23RCA_d_5s1Yv4ImU8x7_d9kQiH4",
    "maicai-WXOWLKEY-unionId": "18fe814a9b7c8-19d9a531105371-0-4bc94-18fe814a9b7c8",
    "waimai-im_session_list_info_success_time": 1719333493010,
    "waimai-last_login_success_uid": "1542860580",
    "$PIKE_LOADBALANCE_UNDEFINED": "{\"pop-meituan-wm\":{\"product\":{\"value\":[{\"domain\":\"wss://pikem1.sankuai.com\",\"ips\":[],\"duration\":157}],\"expires\":1719419994335}}}",
    "oneid_mp": {
        "oneid_localid": "18fe6b77050c8-2005818bf23df0-0-0-18fe6b77050c8",
        "oneid_openid": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "oneid_unionid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
    },
    "waimai-report_active_connect": "20246264.22.134",
    "add-to-mine-bubble": {
        "sub_drug/sub-drug-inner/channel-page/channel-page": [
            1717582580836
        ],
        "shangou/pages/channel-page/channel-page": [
            1717583084573
        ],
        "index/pages/mt/mt": [
            1719307566564
        ],
        "pages/index/index": [
            1717585436163
        ]
    },
    "waimai-wxloc-waimai": "{\"type\":\"gcj02\",\"errMsg\":\"getLocation:ok\",\"latitude\":23178790,\"longitude\":113486045,\"duration\":282,\"abStrategy\":\"wx_storage_\",\"expiration\":1719333619998}",
    "waimai-wx_scene": 1053,
    "waimai-oneid_mp": {
        "oneid_localid": "18fe811d2bcc8-1ad41cd15e4ce1-0-0-18fe811d2bcc8",
        "oneid_openid": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "oneid_unionid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc",
        "oneid_iswxid": true
    },
    "loginsdk-userInfo-mtInfo": {
        "id": 2298607377,
        "username": "jRZ832121619",
        "avatarurl": "",
        "mobile": "186****0627",
        "city": 0,
        "cityid": 0,
        "nickname": "jRZ832121619"
    },
    "waimai-wx_cold_boot_scene": 1053,
    "maicai-_mall_isUpdateStorage": {
        "value": true,
        "expires": 7776000,
        "timestamp": 1717585619381,
        "count": -1,
        "currentCount": 0
    },
    "maicai-maicai_uuid": "18fe814a9b7c8-19d9a531105371-0-4bc94-18fe814a9b7c8",
    "portm": "waimai_common",
    "youxuan-_mall_uuid": {
        "value": "190205b96f713-55baa095c4325-0-4b80a-190205b96f8c8",
        "expires": 9007199254740991,
        "timestamp": 1718529791736,
        "count": -1,
        "currentCount": 0
    },
    "youxuan-_mall_storageCleanupList": {
        "value": {
            "storageCleanup": {
                "gbc_": true
            }
        },
        "expires": 7776000,
        "timestamp": 1718529798686,
        "count": -1,
        "currentCount": 0
    },
    "_mt_privacy_status": {
        "privacySwitches": [
            {
                "type": 1,
                "status": 0
            },
            {
                "type": 2,
                "status": 0
            },
            {
                "type": 3,
                "status": 0
            },
            {
                "type": 4,
                "status": 0
            }
        ]
    },
    "_lx_sdk_data": {
        "lxcuid": "18fe6b76ffec8-a2bf8c91d85460-0-0-18fe6b76ffe9d",
        "wxid": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "wxunionid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
    },
    "wxuser": {
        "avatarUrl": "/avatar/t186f39f2eb540ac22377de4fcc4d1f9a8b08.jpg",
        "nickName": "旮旯之之",
        "uniqueid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
    },
    "nib.general.beauty_merge/cityid20": "{\"pageName\":\"nib.general.beauty_merge/cityid20\",\"moduleList\":[{\"moduleName\":\"joyPrimeCache\",\"moduleData\":{\"uiModel\":{\"allData\":{\"moreCategoryUrl\":\"\",\"sceneNavList\":[],\"dotInfoVOs\":[],\"abReport\":{\"dz_ab_test\":\"\",\"abTest\":\"\",\"queryId\":\"\"},\"ocean\":{\"special\":{\"labs\":\"\",\"abtest\":\"\",\"category\":\"\",\"bidView\":\"\",\"bidClick\":\"\"},\"common\":{\"labs\":\"\",\"abtest\":\"\",\"category\":\"\",\"bidView\":\"\",\"bidClick\":\"\"}},\"style\":5,\"showStyle\":{\"slipType\":0,\"secIconWidth\":40,\"secIconHeight\":40,\"mainIconHeight\":60,\"mainIconWidth\":60,\"bigLineNumber\":1,\"bigColumnsNumber\":5,\"barColor\":\"\",\"slipColor\":\"#FF4D8B\",\"putAway\":{\"text\":\"\",\"picUrl\":\"\"},\"expand\":{\"text\":\"\",\"picUrl\":\"\"},\"columnsNumber\":5,\"lineNumber\":1,\"bgColor\":\"\"},\"secNavList\":[{\"type\":0,\"categoryId\":20419,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20419&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/13ab6c7e0291504724430cdc5285cfdb78646.png\",\"iconTitle\":\"纹眉纹绣\"},{\"type\":0,\"categoryId\":220,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D220&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://img.meituan.net/dpmobile/2ce1a9dba7550d74ebd9e866f9a6997b37223.png.webp\",\"iconTitle\":\"舞蹈瑜伽\"},{\"type\":0,\"categoryId\":20425,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20425&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/04fba95f12b4235af39b999357af3a7f43373.png\",\"iconTitle\":\"脱毛\"},{\"type\":0,\"categoryId\":21394,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D21394&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/68cc7d24c5a037afe94f4cf67eeb11a240302.png\",\"iconTitle\":\"头疗\"},{\"type\":0,\"categoryId\":20421,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20421&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/69cb8fbf02747aa30e4643963e6a6ea839620.png\",\"iconTitle\":\"祛痘\"}],\"mainNavList\":[{\"type\":0,\"categoryId\":74,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D74&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/d47d617ecd15595c83cef10fe775c17d41031.png\",\"iconTitle\":\"美发\"},{\"type\":0,\"categoryId\":75,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D75&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/7f4cdeccb8c98347f23436f8dabc412a28644.png\",\"iconTitle\":\"美甲美睫\"},{\"type\":0,\"categoryId\":76,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D76&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/a7e5dbf4e17b14e8a28a23bb1a53ca7638209.png\",\"iconTitle\":\"美容SPA\"},{\"type\":0,\"categoryId\":20423,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20423&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/42c0d6bdddea9ec032aa937dcab5815e52678.png\",\"iconTitle\":\"医学美容\"},{\"type\":0,\"categoryId\":21004,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D21004&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/ac23b85c3b8a845810671e18b78867a135148.png\",\"iconTitle\":\"清洁补水\"}]},\"primeType\":5,\"abtest\":\"[]\",\"bigSize\":{\"width\":60,\"height\":60},\"mainPage\":1,\"mainNavigation\":[[{\"type\":0,\"categoryId\":74,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D74&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/d47d617ecd15595c83cef10fe775c17d41031.png\",\"iconTitle\":\"美发\"},{\"type\":0,\"categoryId\":75,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D75&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/7f4cdeccb8c98347f23436f8dabc412a28644.png\",\"iconTitle\":\"美甲美睫\"},{\"type\":0,\"categoryId\":76,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D76&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/a7e5dbf4e17b14e8a28a23bb1a53ca7638209.png\",\"iconTitle\":\"美容SPA\"},{\"type\":0,\"categoryId\":20423,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20423&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/42c0d6bdddea9ec032aa937dcab5815e52678.png\",\"iconTitle\":\"医学美容\"},{\"type\":0,\"categoryId\":21004,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D21004&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/ac23b85c3b8a845810671e18b78867a135148.png\",\"iconTitle\":\"清洁补水\"}]],\"smallSize\":{\"width\":40,\"height\":40},\"secPage\":1,\"secNavigation\":[[{\"type\":0,\"categoryId\":20419,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20419&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/13ab6c7e0291504724430cdc5285cfdb78646.png\",\"iconTitle\":\"纹眉纹绣\"},{\"type\":0,\"categoryId\":220,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D220&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://img.meituan.net/dpmobile/2ce1a9dba7550d74ebd9e866f9a6997b37223.png.webp\",\"iconTitle\":\"舞蹈瑜伽\"},{\"type\":0,\"categoryId\":20425,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20425&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/04fba95f12b4235af39b999357af3a7f43373.png\",\"iconTitle\":\"脱毛\"},{\"type\":0,\"categoryId\":21394,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D21394&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/68cc7d24c5a037afe94f4cf67eeb11a240302.png\",\"iconTitle\":\"头疗\"},{\"type\":0,\"categoryId\":20421,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20421&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/69cb8fbf02747aa30e4643963e6a6ea839620.png\",\"iconTitle\":\"祛痘\"}]],\"partSecNavigation\":[{\"type\":0,\"categoryId\":20419,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20419&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/13ab6c7e0291504724430cdc5285cfdb78646.png\",\"iconTitle\":\"纹眉纹绣\"},{\"type\":0,\"categoryId\":220,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D220&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://img.meituan.net/dpmobile/2ce1a9dba7550d74ebd9e866f9a6997b37223.png.webp\",\"iconTitle\":\"舞蹈瑜伽\"},{\"type\":0,\"categoryId\":20425,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20425&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/04fba95f12b4235af39b999357af3a7f43373.png\",\"iconTitle\":\"脱毛\"},{\"type\":0,\"categoryId\":21394,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D21394&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/68cc7d24c5a037afe94f4cf67eeb11a240302.png\",\"iconTitle\":\"头疗\"},{\"type\":0,\"categoryId\":20421,\"subscript\":\"\",\"linkUrl\":\"/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20421&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1\",\"iconPic\":\"https://p0.meituan.net/ingee/69cb8fbf02747aa30e4643963e6a6ea839620.png\",\"iconTitle\":\"祛痘\"}],\"moreLink\":\"\"}}}],\"cacheTime\":1719307608765}",
    "mtptTabsBadges": {},
    "waimai-userLocationAuthorAccept": true,
    "openId": "oJVP50EUlEn3Kh5MgU935L32VdL4",
    "shangou_ENV": "",
    "waimai-wx_set_info": "2298607377=1000440500,1717585433452",
    "$KGX_PROXY_uid": "ba2969d8-1803-4f58-bec1-6541247a2626",
    "_sdkHorn_perf-mp-sdk": {
        "exp": 1719383309220,
        "data": {
            "useNewSDK": true
        }
    },
    "shangou_UUID": "18fe6b76ffec8-a2bf8c91d85460-0-0-18fe6b76ffe9d",
    "WXOWLKEY-unionId": "oJVP50EUlEn3Kh5MgU935L32VdL4",
    "youxuan-WXOWLKEY-unionId": "190205b96f713-55baa095c4325-0-4b80a-190205b96f8c8",
    "youxuan-_DG_TIMEOUT_KEY_2_": 1718710551558.194,
    "youxuan-_mall_mtuser": {
        "value": {
            "id": 2298607377,
            "username": "jRZ832121619",
            "avatarurl": "",
            "mobile": "186****0627",
            "nickname": "jRZ832121619"
        },
        "expires": 7776000,
        "timestamp": 1718529792403,
        "count": -1,
        "currentCount": 0
    },
    "youxuan-_DG_KEY_2_": {
        "SocGrade": -1,
        "benchmarkLevelGrade": -1,
        "deviceModel": "microsoft",
        "benchmarkLevel": -1,
        "jsonBenchmarkLevel": -1
    },
    "youxuan-address_exhaustive_info": {
        "longitude": 113.48066711425781,
        "latitude": 23.1813907623291,
        "address": {
            "cityId": 4,
            "cityName": "广州",
            "districtId": 1549,
            "districtName": "黄埔区",
            "districtType": 3
        }
    },
    "$PIKE_DEVICEID": "{\"pop-meituan-wm\":{\"product\":{\"value\":\"pike-AeQKZ2pkMFzG0W9V8UTm7g==\"}}}",
    "youxuan-cb.app.$abStrategyCache": {
        "grocery_c_front_test_scene": [
            {
                "expId": 123857,
                "groupId": 107371,
                "expKey": "open",
                "groupKey": "grocery_c_front_test_scene_live_lottery",
                "groupName": "优选直播抽奖",
                "param": {}
            },
            {
                "expId": 129623,
                "groupId": 109180,
                "expKey": "a1",
                "groupKey": "grocery_c_front_cart_loading",
                "groupName": "购物车添加loading实验",
                "param": {}
            },
            {
                "expId": 129758,
                "groupId": 109232,
                "expKey": "a1",
                "groupKey": "grocery_c_front_cart_point",
                "groupName": "购物车锚点的实验",
                "param": {}
            },
            {
                "expId": 135597,
                "groupId": 110798,
                "expKey": "b1",
                "groupKey": "grocery_c_front_submit_cart",
                "groupName": " 二级购物车&普通购物车可直接提交订单",
                "param": {}
            },
            {
                "expId": 141153,
                "groupId": 112395,
                "expKey": "a",
                "groupKey": "grocery_c_front_invite_v4",
                "groupName": "邀请有礼v4实验",
                "param": {}
            },
            {
                "expId": 142506,
                "groupId": 112835,
                "expKey": "b",
                "groupKey": "grocery_c_front_invite_setData",
                "groupName": "邀请有礼v4-set 开关",
                "param": {}
            },
            {
                "expId": 144253,
                "groupId": 113364,
                "expKey": "b",
                "groupKey": "grocery_c_front_steps_setData",
                "groupName": "走路setData新旧方案开关（线上）",
                "param": {}
            },
            {
                "expId": 149413,
                "groupId": 115255,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group104",
                "groupName": "列表用户头像隐藏实验",
                "param": {}
            },
            {
                "expId": 149520,
                "groupId": 115294,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group107",
                "groupName": "购物车体验问题攻坚AB",
                "param": {}
            },
            {
                "expId": 150620,
                "groupId": 115763,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_seckill_double_skucard",
                "groupName": "秒杀落地页双排商卡实验",
                "param": {}
            },
            {
                "expId": 150907,
                "groupId": 115878,
                "expKey": "a",
                "groupKey": "lx_key_add_default_value",
                "groupName": "埋点参数兜底-999实验",
                "param": {}
            },
            {
                "expId": 151438,
                "groupId": 116101,
                "expKey": "b",
                "groupKey": "wn_img_blur",
                "groupName": "弱网下图片降级（新）",
                "param": {}
            },
            {
                "expId": 152184,
                "groupId": 116408,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_c_youxuan_mh4vwb5a",
                "groupName": "菜场落地页埋点实验",
                "param": {
                    "bids": "s7hyumm2_mv,a6jy1ypv_mv,a6jy1ypv_mc,city847u_mc,avj2m5b5_mv,hs6qadz9_mv,hs6qadz9_mc,xt95zouq_mc,j5byk4tj_mc,bau7xrll_mc,3ligke3u_mv,3ligke3u_mc,lazgftqx_mc,ksbuejfa_mv,ksbuejfa_mc,i5t0lxkt_mc,b5i5zt3x_mc"
                }
            },
            {
                "expId": 157354,
                "groupId": 116747,
                "expKey": "v3",
                "groupKey": "grocery_c_front_http_group",
                "groupName": "http重构",
                "param": {}
            },
            {
                "expId": 153842,
                "groupId": 117060,
                "expKey": "v2",
                "groupKey": "grocery_c_front_queue_concurrency",
                "groupName": "http queue容量控制",
                "param": {}
            },
            {
                "expId": 155393,
                "groupId": 117711,
                "expKey": "a",
                "groupKey": "grocery_c_front_gradient_navbar_use_sticky",
                "groupName": "渐变导航栏是否使用sticky",
                "param": {}
            },
            {
                "expId": 157344,
                "groupId": 117746,
                "expKey": "v3",
                "groupKey": "grocery_c_front_http_mt",
                "groupName": "http重构mt",
                "param": {}
            },
            {
                "expId": 158002,
                "groupId": 117759,
                "expKey": "v3",
                "groupKey": "grocery_c_front_http_wx",
                "groupName": "http重构wx",
                "param": {}
            },
            {
                "expId": 164601,
                "groupId": 120986,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_red_packet_style",
                "groupName": "红包页样式",
                "param": {}
            },
            {
                "expId": 165045,
                "groupId": 121070,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group135",
                "groupName": "Storage上报采样率",
                "param": {}
            },
            {
                "expId": 165046,
                "groupId": 121071,
                "expKey": "0",
                "groupKey": "grocery_c_front_test_scene_group136",
                "groupName": "Storage对key的采样率",
                "param": {}
            },
            {
                "expId": 166072,
                "groupId": 121384,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group138",
                "groupName": "新人落地页FST优化",
                "param": {}
            },
            {
                "expId": 167067,
                "groupId": 121700,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group141",
                "groupName": "storage-清理放量",
                "param": {
                    "cleanKeys_1": "gbc_",
                    "limit": "0",
                    "hard": "true",
                    "cleanKey": "mtweapp_api_youxuan-mp_",
                    "platform": "3"
                }
            },
            {
                "expId": 173689,
                "groupId": 123954,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group152",
                "groupName": "方舟H5",
                "param": {}
            },
            {
                "expId": 174525,
                "groupId": 124240,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group142",
                "groupName": "菜场 H5",
                "param": {}
            },
            {
                "expId": 175849,
                "groupId": 124655,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group158",
                "groupName": "菜场商卡裁剪实验",
                "param": {}
            },
            {
                "expId": 181307,
                "groupId": 126440,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_fixdoublepv",
                "groupName": "修复PV双报实验",
                "param": {}
            },
            {
                "expId": 181999,
                "groupId": 126696,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group156",
                "groupName": "iOS MMP支持webp图片降级策略",
                "param": {}
            },
            {
                "expId": 184871,
                "groupId": 127618,
                "expKey": "b",
                "groupKey": "grocery_c_front_global_shark_new",
                "groupName": "用户端全局引入shark新开关",
                "param": {}
            },
            {
                "expId": 186569,
                "groupId": 128193,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group174",
                "groupName": "微信iOS15关闭webp属性",
                "param": {}
            },
            {
                "expId": 186627,
                "groupId": 128220,
                "expKey": "http",
                "groupKey": "grocery_c_front_test_scene_group175",
                "groupName": "shark api 灰度短期接口白名单",
                "param": {}
            },
            {
                "expId": 186925,
                "groupId": 128326,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group176",
                "groupName": "券新容器",
                "param": {}
            },
            {
                "expId": 188191,
                "groupId": 128742,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group178",
                "groupName": "图片容灾",
                "param": {}
            },
            {
                "expId": 188749,
                "groupId": 128939,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group180",
                "groupName": "券新容器 - 线上",
                "param": {}
            },
            {
                "expId": 188816,
                "groupId": 128959,
                "expKey": "new",
                "groupKey": "grocery_c_front_game_container",
                "groupName": "游戏H5容器",
                "param": {}
            },
            {
                "expId": 189147,
                "groupId": 129081,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group182",
                "groupName": "新人落地页接口迁移营销",
                "param": {}
            },
            {
                "expId": 252560,
                "groupId": 130535,
                "expKey": "c",
                "groupKey": "grocery_c_front_test_scene_group186",
                "groupName": "弱网下图片降级",
                "param": {
                    "upgradeCount": "2",
                    "upgradeCountForJudge": "2",
                    "whiteViewStandard": "500",
                    "detectCount": "3",
                    "degradeStandard": "500",
                    "upgradeStandard": "5000"
                }
            },
            {
                "expId": 194770,
                "groupId": 131161,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group187",
                "groupName": "方舟首屏精准渲染 - v1.1",
                "param": {
                    "pageId": "ark-6141,ark-6076,ark-6145"
                }
            },
            {
                "expId": 197058,
                "groupId": 131970,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group191",
                "groupName": "页面打开过程上报至独角兽",
                "param": {}
            },
            {
                "expId": 256675,
                "groupId": 160545,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group200",
                "groupName": "方舟组件兜底",
                "param": {}
            },
            {
                "expId": 262268,
                "groupId": 163270,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group201",
                "groupName": "MemoryWarning 与 Crash 关系实验验证",
                "param": {
                    "timeout": "5000"
                }
            },
            {
                "expId": 269521,
                "groupId": 166751,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group203",
                "groupName": "用户端全局引入shark开关v3",
                "param": {}
            },
            {
                "expId": 306849,
                "groupId": 184902,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group208",
                "groupName": "搜索结果页返回路径统一",
                "param": {}
            },
            {
                "expId": 306875,
                "groupId": 184915,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_group209",
                "groupName": "历史词折叠",
                "param": {}
            },
            {
                "expId": 324107,
                "groupId": 193434,
                "expKey": "c",
                "groupKey": "grocery_c_front_test_scene_group210",
                "groupName": "优惠券结构优化实验",
                "param": {}
            },
            {
                "expId": 352076,
                "groupId": 207246,
                "expKey": "a",
                "groupKey": "grocery_c_front_game_center_resource",
                "groupName": "营销游戏中心资源位区",
                "param": {}
            },
            {
                "expId": 648905,
                "groupId": 353101,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group212",
                "groupName": "方舟低端机渲染优化",
                "param": {}
            },
            {
                "expId": 648931,
                "groupId": 353114,
                "expKey": "b",
                "groupKey": "skuDetail_fst_ab",
                "groupName": "商详秒开优化ab实验",
                "param": {}
            },
            {
                "expId": 691052,
                "groupId": 373838,
                "expKey": "c",
                "groupKey": "shouyeCodeAB",
                "groupName": "首页冷启动性能优化AB实验",
                "param": {}
            },
            {
                "expId": 725607,
                "groupId": 390574,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group217",
                "groupName": "图片超时重试",
                "param": {}
            },
            {
                "expId": 961023,
                "groupId": 507048,
                "expKey": "e",
                "groupKey": "grocery_c_front_test_scene_group199",
                "groupName": "商详大图/评价大图/问答页面增加购买入口",
                "param": {}
            },
            {
                "expId": 1053273,
                "groupId": 553377,
                "expKey": "b",
                "groupKey": "h5_container_should_reload_webview",
                "groupName": "h5WXContainer 从其他小程序返回时不重新加载",
                "param": {}
            },
            {
                "expId": 1088132,
                "groupId": 570860,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group195",
                "groupName": "优选内团好货子包是否使用新 raptor key ab 实验",
                "param": {}
            },
            {
                "expId": 1093526,
                "groupId": 573483,
                "expKey": "new",
                "groupKey": "egg_new_UI",
                "groupName": "养鸡视觉更新",
                "param": {}
            },
            {
                "expId": 1204016,
                "groupId": 630408,
                "expKey": "a",
                "groupKey": "mainConsistencyAB",
                "groupName": "融合页价格一致性开关",
                "param": {}
            },
            {
                "expId": 1292729,
                "groupId": 675343,
                "expKey": "a",
                "groupKey": "activitySwiperOptAbTest",
                "groupName": "首页金刚玩法优化ab开关",
                "param": {}
            },
            {
                "expId": 1299757,
                "groupId": 678715,
                "expKey": "b",
                "groupKey": "seckill_optimize",
                "groupName": "秒杀落地页性能优化实验开关",
                "param": {}
            },
            {
                "expId": 1308551,
                "groupId": 682891,
                "expKey": "new2",
                "groupKey": "egg_new_task_UI",
                "groupName": "养鸡底部Menu AB",
                "param": {}
            },
            {
                "expId": 1308674,
                "groupId": 682943,
                "expKey": "gray",
                "groupKey": "grouper_landing_pre_request",
                "groupName": "团长微首页路由预取开关",
                "param": {}
            },
            {
                "expId": 1331544,
                "groupId": 694000,
                "expKey": "b",
                "groupKey": "CategoryMatrixAbTest",
                "groupName": "首页分类金刚入口渲染优化ab实验",
                "param": {}
            },
            {
                "expId": 1399571,
                "groupId": 726670,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group_skudetail_brook_1",
                "groupName": "商详brook重构",
                "param": {}
            },
            {
                "expId": 1421995,
                "groupId": 737344,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group_couponlist_brook",
                "groupName": "优惠券列表页brook",
                "param": {}
            },
            {
                "expId": 1426037,
                "groupId": 739316,
                "expKey": "brook",
                "groupKey": "grocery_c_front_test_scene_recall-takeover-brook",
                "groupName": "召回落地页brook改造实验",
                "param": {}
            },
            {
                "expId": 1640064,
                "groupId": 841432,
                "expKey": "brook",
                "groupKey": "grocery_c_front_test_scene_earning_center_brook",
                "groupName": "签到领钱brook改造实验",
                "param": {}
            },
            {
                "expId": 1640099,
                "groupId": 841447,
                "expKey": "a",
                "groupKey": "categoryFstAb",
                "groupName": "分类秒开实验",
                "param": {}
            },
            {
                "expId": 1674867,
                "groupId": 857856,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_scene_group210",
                "groupName": "图片超时时间实验",
                "param": {}
            },
            {
                "expId": 1676375,
                "groupId": 858581,
                "expKey": "brook",
                "groupKey": "grocery_c_front_test_scene_membership_brook",
                "groupName": "省钱卡brook改造实验",
                "param": {}
            },
            {
                "expId": 1676494,
                "groupId": 858641,
                "expKey": "brook",
                "groupKey": "grocery_c_front_test_scene_invite-help-cash-brook",
                "groupName": "邀请领现金brook实验",
                "param": {}
            },
            {
                "expId": 1772254,
                "groupId": 903670,
                "expKey": "old",
                "groupKey": "grocery_c_front_test_scene_cent-buy-again-card-version",
                "groupName": "新人返场落地页切营销商卡",
                "param": {}
            },
            {
                "expId": 1851471,
                "groupId": 941086,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_image_webp_format",
                "groupName": "webp 新格式灰度",
                "param": {}
            },
            {
                "expId": 1868847,
                "groupId": 949228,
                "expKey": "a",
                "groupKey": "grocery_c_front_video_poster_switch",
                "groupName": "视频poster开关",
                "param": {}
            },
            {
                "expId": 1868850,
                "groupId": 949229,
                "expKey": "b",
                "groupKey": "grocery_c_front_video_probe_switch",
                "groupName": "视频探针开关",
                "param": {}
            },
            {
                "expId": 1877876,
                "groupId": 953502,
                "expKey": "b",
                "groupKey": "grocery_c_front_test_scene_gif2webp",
                "groupName": "gi f转 webp 实验",
                "param": {}
            },
            {
                "expId": 1878230,
                "groupId": 953647,
                "expKey": "game",
                "groupKey": "grocery_c_front_earning_center_api",
                "groupName": "签到领钱接口切换AB",
                "param": {}
            },
            {
                "expId": 1906318,
                "groupId": 966406,
                "expKey": "a",
                "groupKey": "grocery_c_front_test_guesslike_pagi",
                "groupName": "猜喜分页逻辑优化",
                "param": {}
            },
            {
                "expId": 1907133,
                "groupId": 966761,
                "expKey": "new",
                "groupKey": "grocery_c_front_earning_center_task_list_ui",
                "groupName": "签到领钱任务列表自适应高度AB",
                "param": {}
            }
        ]
    },
    "isKingkongAni": "true",
    "shangou_abtest": {
        "sg-x-preview-entry": false,
        "drug_search_poi_580_mt": true,
        "channel_search_wx_wm": true,
        "mt-dynamic-sg-page-1": true,
        "Load_Type_Switch": true,
        "shangou_r2x_valid_red_packet": false,
        "sg_home_poi_card_to_mach": true,
        "drug_goods_detail_wxapp": true,
        "sg-safe-request": true,
        "mt-dynamic-coupon-fit-commodity": false,
        "mp_exop_1": true,
        "dynamic-wm-order-info": true,
        "Second_Tag_Switch": false,
        "sg_mp_detail_dynamic": false,
        "dynamic-mt-order-info": true,
        "mt-dynamic-shopp-inner-ab": false,
        "channel_search_wx": true,
        "homepage_mach_AB": true,
        "mp_new_orderdetail": false,
        "wm-dynamic-coupon-fit-commodity": false,
        "sg_new_comer_ab": false,
        "subpackageShangou": false,
        "wm-dynamic-shop-inner": false,
        "sg_home_poi_card_to_mach_B": true,
        "WeChat_Login": true,
        "drug_my_poi_470": true,
        "Interface_Migrate_Switch": true,
        "mp_new_osubmit": false,
        "sg_x_jump_preview_order": true,
        "drug_search_poi_580": true,
        "channel_search_wx_mt": true,
        "shoppingcart-miniprogram": false,
        "sg_mp_poi_Search": true,
        "drug_search_poi_580_sg": true,
        "dynamic-wm-order-info-1": false
    },
    "__MTUC__wxIds": {
        "openId": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "openIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADg8eOHToVLIb4SWjAqJHIH41SwyckRlQ/6aYsEfuzQWqbxH2nXKo3t5aIiMb3bq8vEEfgqBZRJoXQ==",
        "unionId": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
    },
    "youxuan-_lx_sdk_interceptData": {
        "bid": {
            "b_waimai_jc6b0va2_mv": [
                "c_waimai_vqqpimrc"
            ],
            "b_waimai_76qny5v8_mv": [],
            "b_uvl4tyzw": [],
            "setOrigin": [],
            "b_waimai_grg5sxlc_mv": [
                "c_hgowsqb",
                "WMOrderStatusAndDetailViewController",
                "WMOrderViewController",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "b_chaoshi_bzoe53ei_mv": [],
            "b_chaoshi_usd5qqsy_mv": [],
            "b_waimai_glztnvr6_mv": [],
            "hidePriceDetail": [],
            "b_shangou_ol_sp_group_xrp4per9_mv": [],
            "b_airbnb_gmngejut_mv": [],
            "b_chaoshi_kiutglez_mv": [],
            "b_shangou_ol_sp_group_df1kzdo6_mv": [],
            "b_waimai_sm4z3bwx_mv": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_waimai_kb6kkdlb_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_ra8n14pr_mv": [
                "com.meituan.android.takeout.library.ui.poi.PoiCategoryActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.second.PoiListFilterActivity",
                "com.meituan.android.takeout.library.ui.channelpage.PoiCategoryActivity",
                "WMSubcategoryViewController",
                "777",
                "WMSubHomeViewController",
                "c_i5kxn8l",
                "c_m84bv26"
            ],
            "b_waimai_waa0f92i_mv": [],
            "b_trkc4rrn": [
                "c_CijEL",
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController"
            ],
            "b_wCodT": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_chaoshi_drqrsj6o_mv": [],
            "b_3n9pk26p": [],
            "b_waimai_gihjc3fm_mv": [],
            "b_waimai_8obi02bo_mv": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "confirmFeatureItems": [],
            "b_waimai_0pbd2djr_mv": [],
            "b_waimai_j4s8z4iy_mv": [],
            "b_meishihome_destroy_mv": [],
            "b_waimai_7yicwyp9_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_5gy1z6a9_mv": [],
            "b_power_order_detail_fst_mv": [],
            "getSelectItemsByDate": [],
            "b_7utor60c": [
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity",
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "c_t9bvR",
                "WMConfirmOrderViewController",
                "c_ykhs39e"
            ],
            "submitNormalPay": [],
            "b_youxuan_oov5ret6_mv": [],
            "b_m9qwox6d": [],
            "b_oZO0D": [],
            "b_fffik4th": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_UHTLt": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_shangou_ol_sp_group_xe5sonau_mv": [],
            "paysuccess": [],
            "onSubmitOrder": [],
            "b_h9y71d6k": [],
            "b_shangou_ol_sp_group_oxfo7ytx_mv": [],
            "b_vfw72u81": [],
            "b_waimai_4srskiyd_mv": [],
            "b_waimai_v34uwjjl_mv": [],
            "b_zXVeV": [
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "c_t9bvR",
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity",
                "WMConfirmOrderViewController",
                "c_ykhs39e"
            ],
            "b_waimai_lannvmt3_mv": [
                "c_waimai_chfs1vtb"
            ],
            "b_chaoshi_znin0y0c_mv": [],
            "b_QEGEq": [
                "com.sankuai.meituan.takeoutnew.ui.page.main.home.PoiListFragment",
                "com.sankuai.meituan.takeoutnew.ui.page.main.MainActivity",
                "com.meituan.android.takeout.library.ui.homepage.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.TakeoutActivity",
                "com.meituan.android.takeout.library.business.main.homepage.TakeoutActivity",
                "WMHomeViewController",
                "c_m84bv26"
            ],
            "getOrderInfo": [],
            "b_iv6nv7jf": [
                "c_ykhs39e",
                "WMConfirmOrderViewController",
                "c_t9bvR",
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity"
            ],
            "b_2E9x4": [],
            "b_waimai_1o1puze8_mv": [],
            "b_chaoshi_484qm21t_mv": [],
            "b_waimai_xqy0zdqs_mv": [],
            "b_waimai_xxg3ch14_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_6afw2cyj_mv": [],
            "b_u3msq5x1": [],
            "b_group_jmiq0b36_mv": [],
            "b_5q378jd1": [],
            "b_ikybzk9k": [],
            "b_waimai_zfo7ciwm_mv": [
                "c_ykhs39e"
            ],
            "b_irkpaqrq": [
                "com.sankuai.meituan.takeoutnew.ui.goods.search.SearchInshopActivity",
                "com.meituan.android.takeout.library.ui.search.InshopSearchActivity",
                "com.meituan.android.takeout.library.ui.InshopSearchActivity",
                "WMRestaurantGoodsSearchViewController",
                "WMPoiGoodsSearchViewController",
                "c_1b9anm4"
            ],
            "b_waimai_txitq6w6_mv": [],
            "b_b4ztz": [
                "c_m84bv26"
            ],
            "b_pepper_gbsy0q5p_mv": [],
            "b_fealfgiz": [],
            "touchcancel": [],
            "b_waimai_3kj4oz3k_mv": [],
            "b_waimai_b_rHxxq_mv": [
                "c_hgowsqb",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "b_shangou_ol_sp_group_j9ev90w5_mv": [],
            "b_waimai_18ifxdoz_mv": [],
            "b_tbDDA": [
                "c_0f6oqhc",
                "com.sankuai.meituan.takeoutnew.ui.comment.CommentActivity",
                "WMOrderEvaluationViewController"
            ],
            "b_waimai_u8ii8qnw_mv": [
                "c_hgowsqb",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "dayChangeHandler": [],
            "b_shangou_ol_sp_group_crnbnxmm_mv": [],
            "b_waimai_a2az4vv9_mv": [],
            "b_kGo4g": [],
            "b_rgj7Z": [
                "c_CijEL",
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController"
            ],
            "handleRecommend": [],
            "b_chaoshi_ik6s032e_mv": [],
            "findSelectedSeats": [],
            "b_waimai_gqlyfug5_mv": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "hideLayer": [],
            "b_group_b_at2288e5_mv": [],
            "toggleSelectBar": [],
            "b_bwp9e1l3": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "onTapFirstLVItems": [],
            "b_48ckidwc": [],
            "b_hcm4U": [],
            "b_group_0ttqybtj_mv": [],
            "b_shangou_ol_sp_group_li5ksjkd_mv": [],
            "bid": [],
            "{\"val_bid\":\"b_u1p3521a\",\"custom\":{\"pindan_role\":0}}": [],
            "b_hotel_ch2cqg4c_mv": [],
            "b_HojQV": [],
            "b_chaoshi_yjh4a04b_mv": [],
            "b_kuhfkiii": [],
            "b_chaoshi_w31xucbs_mv": [],
            "b_waimai__med_xzszx8qn_mc": [],
            "onSubmit": [],
            "{\"val_bid\":\"b_wxu9n3c8\"}": [],
            "b_QIO48": [],
            "handleSubmitNormalPay": [],
            "b_5efpo8qz": [
                "c_i5kxn8l",
                "com.sankuai.meituan.takeoutnew.ui.page.second.PoiListFilterActivity",
                "com.meituan.android.takeout.library.ui.poi.PoiCategoryActivity",
                "com.meituan.android.takeout.library.ui.channelpage.PoiCategoryActivity",
                "WMSubcategoryViewController",
                "WMSubHomeViewController",
                "777"
            ],
            "handleSelect": [],
            "b_shangou_ol_sp_group_ey0jgad7_mv": [],
            "b_power_page_fmp": [],
            "b_waimai__med_xzszx8qn_mv": [],
            "b_belnzmoc": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_hhiowkga": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_yCHHZ": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_KnLVX": [
                "com.sankuai.meituan.takeoutnew.ui.poi.search.SearchGlobalActivity",
                "com.meituan.android.takeout.library.ui.search.GlobalSearchActivity",
                "com.meituan.android.takeout.library.ui.poi.GlobalSearchActivity",
                "WMSearchFoodViewController",
                "c_nfqbfvw"
            ],
            "init": [],
            "b_waimai_mn53axr1_mv": [],
            "b_waimai_gdes6745_mv": [
                "c_waimai_quudo2x6"
            ],
            "onTapSelectBar": [],
            "scroll": [],
            "b_mobaidanche_vltl8r3q_mv": [],
            "b_waimai_2a7yee5r_mv": [],
            "b_waimai_m9u64f13_mv": [],
            "b_efk5v3la": [
                "c_pyctaqtz"
            ],
            "b_waimai_umsu77hf_mv": [],
            "getTotalPrice": [],
            "b_waimai_gv6o23bk_mv": [],
            "b_mobaidanche_SPOCK_FINISH_ORDER_mc": [],
            "b_waimai_uh6jikg7_mv": [],
            "b_bq9pxeow": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_ZoVhQ": [],
            "b_vGD4S": [],
            "b_waimai_dgesrqoh_mv": [
                "c_waimai_voq9gdvc"
            ],
            "b_chaoshi_0490y7ma_mv": [],
            "b_waimai_zbz3q1uw_mv": [],
            "b_waimai_tzq0gcgi_mv": [],
            "b_chaoshi_hqt26946_mc": [],
            "b_shangou_ol_sp_group_pmkawl43_mv": [],
            "b_fwSD2": [
                "c_00ft84vx",
                "c_ykhs39e",
                "c_hgowsqb"
            ],
            "b_a4baybn9": [],
            "b_shangou_ol_sp_group_xah88l28_mv": [],
            "b_waimai_u7529b7v_mv": [],
            "{\"val_bid\":\"b_e64riq44\",\"custom\":{}}": [],
            "b_o1xwklwf": [],
            "b_group_tips_wxapp_mc": [],
            "b_hotel_5tqp6ew8_mv": [],
            "b_waimai_sg_liehs5kj_mv": [
                "c_u4fk4kw"
            ],
            "b_waimai_ga7eljay_mv": [],
            "b_shangou_ol_sp_group_4ouhek2i_mv": [],
            "b_hpqpi6wj": [],
            "b_waimai_8y5ge4vv_mv": [],
            "b_cxkzektj": [],
            "b_waimai_snhfvikt_mv": [
                "c_48pltlz",
                "WMOrderListViewController",
                "com.meituan.android.takeout.library.ui.homepage.OrderListFragment",
                "com.meituan.android.takeout.library.ui.order.OrderListFragment",
                "com.sankuai.meituan.takeoutnew.ui.page.main.order.OrderListFragment"
            ],
            "b_bovWf": [],
            "tapCell": [],
            "b_h4rqa": [],
            "b_waimai_hfxwlyrj_mv": [
                "WMHomeViewController",
                "com.meituan.android.takeout.library.business.main.homepage.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.homepage.TakeoutActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.main.MainActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.main.home.PoiListFragment",
                "c_m84bv26"
            ],
            "b_shangou_ol_sp_group_fw8ana5e_mv": [],
            "getSelectItems": [],
            "tapMovie": [],
            "b_DzJtl": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_waimai_xquyc05a_mc": [],
            "b_nw9ituzw": [],
            "b_waimai_sxynar4a_mv": [],
            "dealpover_travel_all": [],
            "b_yix0v9f1": [],
            "onTapSecondLVItems": [],
            "requestPay": [],
            "b_waimai_m2vral4j_mv": [],
            "b_a9to5": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "submitPay": [],
            "onReachBottom": [],
            "b_VGuA3": [],
            "b_hW5dA": [],
            "b_waimai_eb8uolw2_mv": [
                "com.sankuai.meituan.takeoutnew.ui.goods.detail.GoodDetailActivity",
                "com.meituan.android.takeout.library.ui.poi.goodsdetail.GoodsDetailActivity",
                "WMSpuDetailViewController",
                "WMGoodsDetailViewControlleree",
                "WMGoodsDetailViewController",
                "c_u4fk4kw"
            ],
            "b_yb0v9i24": [],
            "b_wGsBC": [
                "c_1b9anm4"
            ],
            "b_n1si91wh": [],
            "b_6g5SX": [],
            "b_nogqmors": [],
            "b_wvyk3cdz": [],
            "b_waimai_c92nc3ey_mv": [],
            "b_waimai_8lr83ac3_mv": [
                "c_waimai_4doz7gra"
            ],
            "gotoOrderDetail": [],
            "b_waimai_k653fnao_mv": [],
            "b_tsq1c8ag": [],
            "b_chaoshi_k8z76fi6_mv": [],
            "render": [],
            "on": [],
            "b_airbnb_gmngejut_mc": [],
            "getCinema": [],
            "b_chaoshi_ulpbttw3_mv": [],
            "b_waimai_umxym18w_mv": [
                "c_waimai_pgt5tjd3"
            ],
            "b_waimai_gyt2rom9_mv": [],
            "b_shangou_ol_sp_group_cnz7vtq1_mv": [],
            "b_chaoshi_omphjzjc_mv": [],
            "b_chaoshi_vhudg0yw_mv": [],
            "emit": [],
            "b_89b8blys": [
                "c_CijEL"
            ],
            "b_waimai_wsq0szl7_mv": [],
            "b_waimai_vjw5dpfw_mv": []
        },
        "cid": [],
        "empty_bid_blk": true,
        "app_name": "group_wxapp",
        "ut": 1718460001,
        "blk_category": [
            "data_sdk_mt_privacy",
            "chaoqianwangluo4",
            "data_sdk_lxcategory",
            "data_sdk_channelIdentifier",
            "data_sdk_tuanhaohuo_e",
            "data_sdk_user_comment",
            "data_sdk_sdk_report",
            "data_sdk_category",
            "data_sdk_map_navigation_release",
            "data_sdk_mlive_anchor",
            "data_sdk_mhotel",
            "data_sdk_gdc",
            "data_sdk_tuanhaohuo",
            "data_sdk_authortool",
            "data_sdk_pay-demo",
            "data_sdk_cgb",
            "data_sdk_mrn",
            "data_sdk_meituan_map_app",
            "data_sdk_office",
            "data_sdk_tuancan",
            "data_sdk_sinan",
            "data_sdk_meituanyouxuan_app",
            "data_sdk_meish",
            "data_sdk_data_sdk_meishi",
            "sdk_report",
            "data_sdk_airbnb-nonexists",
            "data_sdk_gundam",
            "data_sdk_xm_sdk_demo",
            "data_sdk_mtdmap",
            "data_sdk_px_waiter",
            "data_sdk_adapter-rxjava2",
            "data_sdk_undefined",
            "data_sdk_yoda",
            "data_sdk_statisticsDefaultCategory",
            "data_sdk_ocean_test",
            "data_sdk_reco_upper_shelf",
            "data_sdk_data_sdk_hotel",
            "data_sdk_queue-merchant-notification",
            "data_sdk_trip",
            "data_sdk_waimai_e_flutter",
            "data_sdk_dplitehuawei",
            "data_sdk_iphone-kemanmanhd",
            "data_sdk_tower",
            "data_sdk_mola",
            "data_sdk_waimai_e_fe_flutter_college",
            "data_sdk_234",
            "data_sdk_conch",
            "data_sdk_oppo9",
            "data_sdk_mtbaccountkit",
            "data_sdk_flashbuy",
            "data_sdk_waimaibiz",
            "data_sdk_ticket",
            "data_sdk_mtzp_app",
            "data_sdk_finzero",
            "data_sdk_airbnb_test",
            "data_sdk_MPTT",
            "data_sdk_mp",
            "data_sdk_huawei4",
            "data_sdk_bbk",
            "data_sdk_dd",
            "data_sdk_vivo6",
            "data_sdk_mlive",
            "data_sdk_married",
            "data_sdk_TestDemo",
            "data_sdk_mci",
            "data_sdk_SailorBD",
            "mobaidanche",
            "data_sdk_dpliteoppo",
            "data_sdk_dianping-nova",
            "data_sdk_dplitevivo",
            "data_sdk_xiaoxiangchaoxi",
            "data_sdk_qq",
            "data_sdk_ccc",
            "data_sdk_lenovo3",
            "data_sdk_starfish_kl",
            "data_sdk_rd",
            "data_sdk_dpmerchant"
        ],
        "blk_appnm": [
            "bddeal",
            "test",
            "demo",
            "wangyuhao12",
            "test_wyh"
        ]
    },
    "wx-safety-request-horn": {
        "available": {
            "dpMrn": true,
            "mapi": true,
            "mt": true,
            "mt-msi": true,
            "mt-msi-persistent": true
        },
        "black_host": [
            "gatewaydsp.meituan.com",
            "portal-portm.meituan.com",
            "dd.sankuai.com",
            "dd.meituan.com",
            "catfront.dianping.com",
            "catfront.51ping.com",
            "report.meituan.com",
            "dreport.meituan.net",
            "postreport.meituan.com",
            "wreport1.meituan.net",
            "lx0.meituan.com",
            "lx1.meituan.net",
            "lx2.meituan.net",
            "plx.meituan.com",
            "hlx.meituan.com",
            "ad.e.waimai.sankuai.com:80",
            "speech-inspection.vip.sankuai.com",
            "kms.sankuai.com",
            "r.dianping.com",
            "r1.dianping.com",
            "api-channel.waimai.meituan.com",
            "lion-monitor.sankuai.com",
            "cat-config.sankuai.com",
            "catdot.sankuai.com",
            "s3plus.meituan.net",
            "mads.meituan.com",
            "mlog.dianping.com",
            "oneservice.meituan.com",
            "api-unionid.meituan.com",
            "fe-config.meituan.com",
            "fe-config0.meituan.com",
            "h.meituan.com",
            "p.meituan.com",
            "peisong-collector.meituan.com",
            "s3plus.sankuai.com",
            "s3plus-bj02.sankuai.com",
            "file.neixin.cn",
            "wreport2.meituan.net",
            "hreport.meituan.com",
            "catdot.dianping.com",
            "catdot.51ping.com",
            "logan.sankuai.com"
        ],
        "black_url": [
            "mapi.dianping.com/mapi/addskin.bin",
            "mapi.dianping.com/mapi/addavatar.bin",
            "mapi.dianping.com/mapi/mlog/applog.bin",
            "mapi.dianping.com/mapi/mlog/zlog.bin",
            "mapi.dianping.com/mapi/mlog/mtmidas.bin",
            "mapi.dianping.com/mapi/mlog/mtzmidas.bin",
            "m.dianping.com/adp/log",
            "mlog.meituan.com/log",
            "mlog.dianping.com/log",
            "m.api.dianping.com/mlog/applog.bin",
            "m.api.dianping.com/mlog/zlog.bin",
            "m.api.dianping.com/mlog/mtmidas.bin",
            "m.api.dianping.com/mlog/mtzmidas.bin",
            "mapi.dianping.com/mapi/mrn/operations.bin",
            "adapi.waimai.meituan.com/api/getAllowanceWithdrawInfo",
            "adapi.waimai.meituan.com/api/allowanceDoWithdraw",
            "api.maoyan.com/mmdb/user/follow",
            "syncloud.meituan.com/be/chp/takeaway",
            "syncloud.meituan.com/be/chp/takeawayClassifyManagement",
            "syncloud.meituan.com/be/chp/createSkuToTakeaway",
            "i.meituan.com/api/address",
            "i.meituan.com/api/maf",
            "api.maoyan.com/mixins/v2/tips",
            "api.maoyan.com/sns/user/info"
        ],
        "sign_black_host": [],
        "sign_black_url": [],
        "white_host": [
            ".dianping.com",
            ".meituan.com",
            ".sankuai.com",
            ".maoyan.com",
            ".neixin.cn",
            ".51ping.com",
            ".cyanclouds.com",
            ".zservey.com"
        ]
    },
    "mc_one_first_download_version": "8.25.0",
    "shangou___sg_ab_scene_map": {
        "drug_search_poi_580_mt": "A",
        "channel_search_wx_wm": "A",
        "mt-dynamic-sg-page-1": "A",
        "Load_Type_Switch": "A",
        "sg_home_poi_card_to_mach": "A",
        "drug_goods_detail_wxapp": "A",
        "sg-safe-request": "A",
        "mt-dynamic-coupon-fit-commodity": "B",
        "mp_exop_1": "A",
        "dynamic-wm-order-info": "A",
        "Second_Tag_Switch": "B",
        "sg_mp_detail_dynamic": "B",
        "dynamic-mt-order-info": "A",
        "mt-dynamic-shopp-inner-ab": "B",
        "channel_search_wx": "A",
        "homepage_mach_AB": "A",
        "mp_new_orderdetail": "B",
        "wm-dynamic-coupon-fit-commodity": "B",
        "wm-dynamic-shop-inner": "B",
        "sg_home_poi_card_to_mach_B": "A",
        "WeChat_Login": "A",
        "drug_my_poi_470": "A",
        "Interface_Migrate_Switch": "A",
        "mp_new_osubmit": "B",
        "sg_x_jump_preview_order": "A",
        "drug_search_poi_580": "A",
        "channel_search_wx_mt": "A",
        "sg_mp_poi_Search": "A",
        "drug_search_poi_580_sg": "A",
        "dynamic-wm-order-info-1": "B"
    },
    "waimai-wm_cityid": {
        "location_tag": 0,
        "mt_back_info": {
            "adcode": "440112",
            "citycode": "440100",
            "mt_back_city_id": "440100",
            "mt_back_city_name": "广州市",
            "mt_back_district_id": "440112",
            "mt_back_district_name": "黄埔区",
            "mt_back_province_id": "440000",
            "mt_back_province_name": "广东省",
            "pcode": "440000",
            "setAdcode": true,
            "setCitycode": true,
            "setMt_back_city_id": true,
            "setMt_back_city_name": true,
            "setMt_back_district_id": true,
            "setMt_back_district_name": true,
            "setMt_back_province_id": true,
            "setMt_back_province_name": true,
            "setPcode": true
        },
        "mt_front_info": {
            "mt_front_city_id": "20",
            "mt_front_city_name": "广州",
            "mt_front_city_pinyin_name": "guangzhou",
            "mt_front_district_id": "737",
            "mt_front_district_name": "黄埔区",
            "mt_front_origin_city_id": "0",
            "setMt_front_city_id": true,
            "setMt_front_city_name": true,
            "setMt_front_city_pinyin_name": true,
            "setMt_front_district_id": true,
            "setMt_front_district_name": true,
            "setMt_front_origin_city_id": true
        },
        "setDivision": false,
        "setDp_info": false,
        "setLocation_tag": true,
        "setMt_back_info": true,
        "setMt_front_info": true,
        "lastUpdate": 1717585434857,
        "lastLocation": {
            "latitude": 23.17879,
            "longitude": 113.486045
        }
    },
    "search-word-res": {
        "defaultWordItems": [
            {
                "defaultWordInfos": [
                    {
                        "query": "百果园",
                        "editorWord": "百果园",
                        "color": "#646464",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "0",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "百果园",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"0\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 1,
                        "cityId": 20,
                        "noPortalCache": ""
                    },
                    {
                        "query": "百果园",
                        "editorWord": "百果园",
                        "color": "#999999",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "0",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "百果园",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"0\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 2,
                        "cityId": 20,
                        "noPortalCache": ""
                    }
                ]
            },
            {
                "defaultWordInfos": [
                    {
                        "query": "陈记顺和牛肉火锅",
                        "editorWord": "陈记顺和牛肉火锅",
                        "color": "#646464",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "1",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "5位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "陈记顺和牛肉火锅",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"1\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 1,
                        "cityId": 20,
                        "noPortalCache": ""
                    },
                    {
                        "query": "陈记顺和牛肉火锅",
                        "editorWord": "陈记顺和牛肉火锅",
                        "color": "#999999",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "1",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "5位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "陈记顺和牛肉火锅",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"1\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 2,
                        "cityId": 20,
                        "noPortalCache": ""
                    }
                ]
            },
            {
                "defaultWordInfos": [
                    {
                        "query": "凯越体育恒温游泳·健身运动中心",
                        "editorWord": "凯越体育恒温游泳·健身运动中心",
                        "color": "#646464",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "2",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "凯越体育恒温游泳·健身运动中心",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"2\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 1,
                        "cityId": 20,
                        "noPortalCache": ""
                    },
                    {
                        "query": "凯越体育恒温游泳·健身运动中心",
                        "editorWord": "凯越体育恒温游泳·健身运动中心",
                        "color": "#999999",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "2",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "凯越体育恒温游泳·健身运动中心",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"2\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 2,
                        "cityId": 20,
                        "noPortalCache": ""
                    }
                ]
            },
            {
                "defaultWordInfos": [
                    {
                        "query": "楠火锅",
                        "editorWord": "楠火锅",
                        "color": "#646464",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "3",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "楠火锅",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"3\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 1,
                        "cityId": 20,
                        "noPortalCache": ""
                    },
                    {
                        "query": "楠火锅",
                        "editorWord": "楠火锅",
                        "color": "#999999",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "3",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "楠火锅",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"3\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 2,
                        "cityId": 20,
                        "noPortalCache": ""
                    }
                ]
            },
            {
                "defaultWordInfos": [
                    {
                        "query": "久久鸭脖",
                        "editorWord": "久久鸭脖",
                        "color": "#646464",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "4",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "久久鸭脖",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"4\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 1,
                        "cityId": 20,
                        "noPortalCache": ""
                    },
                    {
                        "query": "久久鸭脖",
                        "editorWord": "久久鸭脖",
                        "color": "#999999",
                        "type": "QUERY",
                        "ctpoi": "",
                        "_statTag": {
                            "offset": "0",
                            "globalid": "3053014474322242378",
                            "index": "4",
                            "istraffic": "0",
                            "source": "MiniProgramDefaultWords",
                            "type": "default",
                            "ab_info": "{\"ab_group_homepage_v12_youxuan\":\"-999\",\"ab_group_homepage_v12\":\"-999\"}",
                            "requestid": "3053014474322242378",
                            "diffCityRecall": "-1",
                            "cateid": "-1",
                            "wordtype": "6位热门品类poi",
                            "strategy": "Baseline",
                            "keyword": "久久鸭脖",
                            "is_resource": "0"
                        },
                        "strategy": "",
                        "icon": "",
                        "historyIcon": "",
                        "historySubTitle": "",
                        "extSearchInfo": "{}",
                        "extSrcInfo": "{\"pos\":\"4\",\"qid\":\"3053014474322242378\"}",
                        "businessType": "default",
                        "iUrl": "",
                        "pageId": 2,
                        "cityId": 20,
                        "noPortalCache": ""
                    }
                ]
            }
        ],
        "interval": 4000,
        "firstInterval": 2000
    },
    "unionId": "oNQu9t1mtNmbtxbz1rOCrFp0viLc",
    "openIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADg8eOHToVLIb4SWjAqJHIH41SwyckRlQ/6aYsEfuzQWqbxH2nXKo3t5aIiMb3bq8vEEfgqBZRJoXQ==",
    "index_all_storage": {
        "jg": {
            "plateType": "default",
            "display": true,
            "row": 2,
            "firstScreenNum": 2,
            "transferNum": 2,
            "column": 5,
            "resources": [
                {
                    "resourceId": "250565",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/waimai/pages/index/index?g_source=158",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "394",
                        "newIconUrl": "https://p0.meituan.net/linglong/e2a59c3436128c5666d69c37d06439385017.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "外卖",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "美食"
                    }
                },
                {
                    "resourceId": "399829",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/food/pages/mt/home/index?weburl=https%3A%2F%2Fmeishi.meituan.com%2Fhome%0A&f_userId=0&f_token=0&f_ci=1&f_pos=0&f_locCi=1&share=true",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "1",
                        "newIconUrl": "https://p0.meituan.net/linglong/b0ad00059904c7b70cce31954e4e25366694.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "美食",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "250923",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p1.meituan.net/linglong/ee1e01c3c8db144e13eb7485ca94bcc05801.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/hotel/pages/search/index",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20",
                        "newIconUrl": "https://p1.meituan.net/linglong/d022ed12d31c2d3ed52bc4fd17d0387c3763.png",
                        "appId": "",
                        "miniIconUrl": "https://p1.meituan.net/linglong/4a1d0a113bc2e0081161415bed8c96ee1912.png",
                        "innerPriority": "99",
                        "name": "酒店/民宿",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "酒店旅游"
                    }
                },
                {
                    "resourceId": "457785",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p0.meituan.net/linglong/93130bca5c64df6c22d2ef31a63f9f334971.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.joy_v3",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "2",
                        "newIconUrl": "https://p0.meituan.net/linglong/9e10f199cc774a1a90ed92526d46b22a6872.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/ccabdd055c03451fa1ba8b1b806899be1452.png",
                        "innerPriority": "99",
                        "name": "休闲玩乐",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "娱乐"
                    }
                },
                {
                    "resourceId": "249693",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p0.meituan.net/linglong/77e3de5a3d6ea5b111f25fe27151473f5168.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/movie/pages/home/index",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "99",
                        "newIconUrl": "https://p0.meituan.net/linglong/5fa4381680e52af71f5afd077cd935f56483.png",
                        "appId": "",
                        "miniIconUrl": "https://p1.meituan.net/linglong/b3124aadae45cd7a7ef1318a8d234aa22880.png",
                        "innerPriority": "99",
                        "name": "电影/演出",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "娱乐"
                    }
                },
                {
                    "resourceId": "69999",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/dache/pages/home/index?qcs_channel=131001&channelId=204&jumpType=redirectTo",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20799",
                        "newIconUrl": "https://p0.meituan.net/linglong/d2c4e7b9ef085b921a1d79562efdbdb95907.png",
                        "appId": "",
                        "miniIconUrl": "https://p1.meituan.net/linglong/0ff0a3b5e66d35ca7ce7b7d0c19097a62167.png",
                        "innerPriority": "99",
                        "name": "打车",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "出行"
                    }
                },
                {
                    "resourceId": "563807",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p0.meituan.net/linglong/a947d4e311bc856927ddf8ffbc7138ce7869.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/maicai/pages/index/index?mc_source=0akaanabsadw",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "21381",
                        "newIconUrl": "https://p0.meituan.net/linglong/f5c138e46e5847093606d0f5e3d938e318701.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/21a3b2414921d05869977fa23ab012113153.png",
                        "innerPriority": "99",
                        "name": "小象超市",
                        "report": "小象超市",
                        "wxAppType": "extraWxApp",
                        "group": "美食"
                    }
                },
                {
                    "resourceId": "249659",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/mobike/pages/index/index?fromPlatform=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "21239",
                        "newIconUrl": "https://p0.meituan.net/linglong/e041374aa08103a8407062e3afecb3ea4735.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/00d40fef606f0c899908791abed93bfc2338.png",
                        "innerPriority": "99",
                        "name": "骑车",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "出行"
                    }
                },
                {
                    "resourceId": "249731",
                    "materialMap": {
                        "WXVersion": "",
                        "ralated": "true",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/shangou/pages/channel-page/channel-page?typeCode=102530&typeName=%e7%be%8e%e5%9b%a2%c2%b7%e4%b9%b0%e8%8d%af&g_source=66",
                        "path": "",
                        "gifUrl": "",
                        "WXMTKingKongSignArea_eventTracking": "-999",
                        "WXMTKingKongSignArea_resourceId": "560726",
                        "newIconUrl": "https://p1.meituan.net/linglong/a621cf7ec3cf94807bb7175cb5dabbd516161.png",
                        "cateId": "21447",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "wxAppType": "extraWxApp",
                        "name": "看病买药",
                        "report": "",
                        "WXMTKingKongSignArea_iconUrl": "https://p1.meituan.net/linglong/081535dc18db73b0b7bc04c90c6c921d4811.png",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "316066",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/shangou/pages/index/index?typeName=超市便利&g_source=sg_gm_0005",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "21112",
                        "newIconUrl": "https://p0.meituan.net/linglong/cc241f8772329be64943235f78d2be784862.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "超市便利",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "美食"
                    }
                },
                {
                    "resourceId": "280293",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/superseckill/pages/index?weburl=https%3A%2F%2Fawp.meituan.com%2Fdfe%2Fbiz-cross-superseckill%2Fweb%2Findex.html%3Ffrom%3Dmmp_icon&f_wxUserInfo=1&f_userId=0&f_token=0&f_ci=1&f_pos=1&f_finger=1&app_version=1&barcol=ff2727&barfcol=ffffff",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "400607",
                        "newIconUrl": "https://p0.meituan.net/linglong/c5da7aab2093f5dc4fa668e35bd63dc916164.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "特价团",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "96832",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p1.meituan.net/linglong/5a2884e0237c3f6798339666e4a5e1a314039.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/ticket/pages/ticket-portal/index",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "162",
                        "newIconUrl": "https://p0.meituan.net/linglong/bf68c25727006ab86061be20c65f63d26689.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/53ff18c7b4ae887c34ce8f1299f3b49f3125.png",
                        "innerPriority": "100",
                        "name": "景点/门票",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "酒店旅游"
                    }
                },
                {
                    "resourceId": "218642",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/game/portrait/index?weburl=https%3A%2F%2Fgame.meituan.com%2Fchicken%2Fwxapp%3Finner_source%3D10158_ch223&f_userId=0&f_openId=0&gameName=Chicken&f_token=0&f_mp_uuid=1&f_openId=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "400488",
                        "newIconUrl": "https://p0.meituan.net/linglong/63558b97a2fa3294b28ae0a82dc5d00714364.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "免费领鸡蛋",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "娱乐"
                    }
                },
                {
                    "resourceId": "278609",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/waimai-bargain-sub1/pages/transfer/guide/index?path=%2Fwaimai-bargain-sub1%2Fpages%2Findex%2Findex&channel_id=105001",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "21499",
                        "newIconUrl": "https://p0.meituan.net/linglong/f3a4b84bebe8da30c43ff39d2cca73e313773.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "22",
                        "name": "拼好饭",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "316073",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/shangou/pages/channel-page/channel-page?typeCode=101578&typeName=蔬菜水果&g_source=sg_gm_0006",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20871",
                        "newIconUrl": "https://p1.meituan.net/linglong/39a0f162dd448a577c9464eb153bfca95689.png",
                        "appId": "",
                        "miniIconUrl": "https://p1.meituan.net/linglong/7e749793ebde566ea1adf945a977e81a6203.png",
                        "innerPriority": "99",
                        "name": "蔬菜水果",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "美食"
                    }
                },
                {
                    "resourceId": "190764",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p1.meituan.net/linglong/8e1e19984527d081544e406ab4c8f51323204.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/paotui/pages/index/index?channel=wx_mtjg_miniPrograms",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20870",
                        "newIconUrl": "https://p0.meituan.net/linglong/4410719acb81327ad47c5060e06d454519500.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/08471316f4291bf007b810c6c77166ac6153.png",
                        "innerPriority": "23",
                        "name": "跑腿",
                        "report": "美团跑腿",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "249711",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D10&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "10",
                        "newIconUrl": "https://p0.meituan.net/linglong/60520d3207aacf912b60ee182c7ff1314942.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/c3fb578cb4978fdc133fa8b9abaa15563218.png",
                        "innerPriority": "99",
                        "name": "KTV",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "娱乐"
                    }
                },
                {
                    "resourceId": "316081",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p1.meituan.net/linglong/e1c74e9e40e35eeb10c151e6e3a5fb7f3302.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/shangou/pages/channel-page/channel-page?typeCode=104301&typeName=%E9%85%92%E6%B0%B4%E9%A5%AE%E6%96%99&g_source=sg_CSEFBs9q",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "400407",
                        "newIconUrl": "https://p0.meituan.net/linglong/b3bb061c8c57d8c0b79676b42671effb5162.png",
                        "appId": "",
                        "miniIconUrl": "https://p1.meituan.net/linglong/765d1e1612d486be36c1be4b6a17ea472546.png",
                        "innerPriority": "99",
                        "name": "买酒",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "美食"
                    }
                },
                {
                    "resourceId": "116416",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/traffic-home/pages/index/index?default=3",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "21543",
                        "newIconUrl": "https://p0.meituan.net/linglong/ededd50e1dc4ec54e3b0dc46530b996823300.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "汽车票",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "出行"
                    }
                },
                {
                    "resourceId": "250250",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.pet_v2",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20691",
                        "newIconUrl": "https://p0.meituan.net/linglong/bd141c047e2540107746c8684ec2c6d95680.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "宠物",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "250242",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.car",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "27",
                        "newIconUrl": "https://p0.meituan.net/linglong/ab8a785a97042431a705c665bd32cf366452.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "养车/用车",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "350076",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.beauty_merge",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "22",
                        "newIconUrl": "https://p0.meituan.net/linglong/22041364e8fd8bca72df985a9edafad05996.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "丽人/美发",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "249624",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/traffic-home/pages/index/index",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20066",
                        "newIconUrl": "https://p0.meituan.net/linglong/9bbaa6d0e87ad4eddfbb3b40a41f46755343.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/dcc1874272ebc9929c1b01e3ce4d42163615.png",
                        "innerPriority": "99",
                        "name": "火车/机票",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "出行"
                    }
                },
                {
                    "resourceId": "481646",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Farche%2Fdzle%2Fmrn-le-page%2Frn_gcbu_lechannel-h5-max%2Findex.html%3FtemplateKey%3Dnib.general.easy_life_v2%26title%3D%E7%94%9F%E6%B4%BB%E6%9C%8D%E5%8A%A1%26envforce%3Dminiprogram%26gcua%3Dmt%26mrn_component%3Dmrn-le-easylife&f_wxUserInfo=0&f_userId=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_token=0&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "3",
                        "newIconUrl": "https://p0.meituan.net/linglong/7c24bee70ed7ba02a6cba2667acd4e1e14357.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "生活服务",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "316078",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/shangou/pages/channel-page/channel-page?typeCode=107900&typeName=%E5%93%81%E8%B4%A8%E7%99%BE%E8%B4%A7&g_source=sg_688",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "400660",
                        "newIconUrl": "https://p0.meituan.net/linglong/dccdfb6881dea45f49d9416cced8717916542.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "品质百货",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "446712",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.medical_care",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20274",
                        "newIconUrl": "https://p0.meituan.net/linglong/3bd55d3bc8407b9a7a5a551da713ca6b4970.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "医疗/口腔",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "300614",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D39&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20252",
                        "newIconUrl": "https://p1.meituan.net/linglong/2663fc18210ed1c4e8b48002472e31734453.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/603486f01745a85de2fc09bc98f3eb4b1227.png",
                        "innerPriority": "99",
                        "name": "游泳/健身",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "娱乐"
                    }
                },
                {
                    "resourceId": "495823",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fi.meituan.com%2Fmrn-gc-joyhome%2Frn_gcbu_mrnjoyhome%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-educationhomeforwechat%26templateKey%3Deducationforwechat%26gcua%3Dmt%26title%3D%25E6%2595%2599%25E8%2582%25B2&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20286",
                        "newIconUrl": "https://p0.meituan.net/linglong/b33153e7c5492b654b3327cca03833be15069.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "学习培训",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "225241",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "https://p0.meituan.net/linglong/2bf3f5b001f91cfbf79bb0191fa3a26116207.png",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/ticket/pages/poilist/poilist?id=28&name=%E6%B8%85%E5%87%89%E7%8E%A9%E6%B0%B4",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "296",
                        "newIconUrl": "https://p0.meituan.net/linglong/f9d7c1c3a1ef8aa203e45872019b72db5735.png",
                        "appId": "",
                        "miniIconUrl": "https://p1.meituan.net/linglong/37abb974c78413c6b34183c251d263f05216.png",
                        "innerPriority": "99",
                        "name": "周边游",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "酒店旅游"
                    }
                },
                {
                    "resourceId": "240765",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/powerbank/pages/index/index",
                        "path": "",
                        "gifUrl": "https://p0.meituan.net/linglong/8d56e3fe650b99fe4f7c1337b6d41cba193951.gif",
                        "cateId": "21457",
                        "newIconUrl": "https://p0.meituan.net/linglong/a007e33d9898d866e95c2c7eac66256b5201.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/d729deafe8eee779c11f4cb1b47b85814936.png",
                        "innerPriority": "99",
                        "name": "充电宝",
                        "report": "美团充电宝",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "304855",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20178&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20178",
                        "newIconUrl": "https://p0.meituan.net/linglong/8a003886e90bd839af7a5d8c4731a3125129.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/985919ff5be9e0bf3fa599dbd111b3671840.png",
                        "innerPriority": "99",
                        "name": "结婚/摄影",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "305700",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.baby_v4",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20007",
                        "newIconUrl": "https://p0.meituan.net/linglong/32d14b7a0f1ad8573bf346fcf15a8d2f5085.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/ccedfa331ca6ff40d9d4578bfb74912c1706.png",
                        "innerPriority": "99",
                        "name": "亲子/乐园",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "304476",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fi.meituan.com%2Fmrn-gc-joyhome%2Frn_gcbu_mrnjoyhome%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-motherbabyhome%26templateKey%3Dmotherbaby%26gcua%3Dmt%26title%3D%25E6%25AF%258D%25E5%25A9%25B4%25E6%259C%258D%25E5%258A%25A1&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20042",
                        "newIconUrl": "https://p0.meituan.net/linglong/3b49636fa96eb9eb97a3325decc358b56132.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "母婴服务",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "235403",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/entertainment-center/index?page_source=jingang",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "400588",
                        "newIconUrl": "https://p1.meituan.net/linglong/1a9ff3b6c8a1783bb869f0168703f8a615953.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "娱乐大厅",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "223013",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/game/portrait/index?weburl=https%3A%2F%2Fgame.meituan.com%2Ffarm%2Fwxapp%2Findex.html%3Finner_source%3D10299_ch223%26appid%3Dwxde8ac0a21135c07d&f_userId=0&f_openId=0&gameName=farm&f_token=0&f_mp_uuid=1&f_openId=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "10299",
                        "newIconUrl": "https://p0.meituan.net/linglong/f3b09e20f80ff9e09532b2a0a8e40c7d13346.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "全民种红包",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "娱乐"
                    }
                },
                {
                    "resourceId": "372270",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/index/pages/h5/h5?weburl=https%3A%2F%2Fg.meituan.com%2Fmrn-gc-filterlistpage%2Frn_gcbu_filterlistpage%2Findex.html%3Fproduct%3Dmtwxapp%26mrn_component%3Dmrn-gc-commonfilterlistpage%26templateKey%3Ddefault%26bizid%3D3%26appVersion%3D0%26categoryid%3D20179&f_wxUserInfo=0&f_userId=0&f_token=0&f_openId=1&f_utm=1&f_ci=1&f_pos=1&f_openIdCipher=1",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20179",
                        "newIconUrl": "https://p0.meituan.net/linglong/f75c854bbbe9ec637bebd2a44efe4de84296.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "99",
                        "name": "家居装修",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "248965",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "plugin://novel/index?from=jingang&novelScene=0202",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "400514",
                        "newIconUrl": "https://p0.meituan.net/linglong/e7806b11c7a53d80a649e0829a28dbfb6506.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "2",
                        "name": "看小说赚钱",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "生活"
                    }
                },
                {
                    "resourceId": "251286",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/zhenguo/pages/products/simple?phx_wake_up_type=group_wxapp_entry&phx_wake_up_source=mt",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20966",
                        "newIconUrl": "https://p1.meituan.net/linglong/39c6c7ad9b503f92baac1d5bb7bb87d95136.png",
                        "appId": "",
                        "miniIconUrl": "https://p0.meituan.net/linglong/528de3f3f6f9b640603236cb72cb2a841415.png",
                        "innerPriority": "99",
                        "name": "民宿/公寓",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": "酒店旅游"
                    }
                },
                {
                    "resourceId": "446731",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "/gc-business/pages/mrnhomepage/mrnhomepage?mrn_biz=gcbu&mrn_entry=homepage&templateKey=nib.general.medical_beauty",
                        "path": "",
                        "gifUrl": "",
                        "cateId": "20423",
                        "newIconUrl": "https://p0.meituan.net/linglong/80c6d428505a48c96c381c1dc7be04e58833.png",
                        "appId": "",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "医美",
                        "report": "",
                        "wxAppType": "extraWxApp",
                        "group": ""
                    }
                },
                {
                    "resourceId": "546875",
                    "materialMap": {
                        "WXVersion": "",
                        "extraData": "",
                        "largeIconUrl": "",
                        "KEYWORD_KEY": "kingKong,morePage,kingKongDaoDian",
                        "target": "",
                        "path": "/pages/landing/index?utm_source=cl_app-cl-wxjingangwei21380_246352",
                        "gifUrl": "",
                        "cateId": "21380",
                        "newIconUrl": "https://p0.meituan.net/linglong/5bff4ef1691af743b4fc2c33b49730694439.png",
                        "appId": "wx4776c3f20eab8bc4",
                        "miniIconUrl": "",
                        "innerPriority": "1",
                        "name": "借钱",
                        "report": "美团借钱",
                        "wxAppType": "halfWxApp",
                        "group": ""
                    }
                }
            ]
        },
        "zt_banner": {
            "plateType": "default",
            "display": true,
            "resources": [
                {
                    "resourceId": "494632",
                    "materialMap": {
                        "imgUrl": "https://p0.meituan.net/linglong/f42c345b787ae0a1312351b1761ca470230721.png",
                        "target": "/waimai-bargain-sub1/pages/transfer/guide/index?path=%2Fwaimai-bargain-sub1%2Fpages%2Findex%2Findex&channel_id=105013"
                    },
                    "monitor": {
                        "eventTracking": "-999",
                        "setEventTracking": true
                    }
                }
            ]
        },
        "zt": {
            "hasYXData": false,
            "yxZTData": null
        },
        "feedflow": {
            "items": [
                [
                    {
                        "type": "rop_activity_main",
                        "style": "dynamicV2",
                        "templateName": "rop_style_v2",
                        "imageUrl": "https://img.meituan.net/content/c1b962573270fcf7774543f14b409bb7283701.png@332w_332h_1e_1l",
                        "title": "特价团",
                        "subTitle": "距结束",
                        "configurableSubTitle": {
                            "type": "1",
                            "text": "爆款热抢中",
                            "textColor": "#FFFFFF",
                            "backgroundColorStart": "#FF6A5C",
                            "backgroundColorEnd": "#FF3224"
                        },
                        "adTag": {},
                        "index": 0,
                        "tags": [
                            "6.3折"
                        ],
                        "itemType": "tejiatuangou_card",
                        "subItems": [
                            {
                                "id": "840179148",
                                "from": "DEAL_GROUP",
                                "type": "deal",
                                "url": "/superseckill/pages/index?weburl=https%3A%2F%2Fawp.meituan.com%2Fdfe%2Fbiz-cross-superseckill%2Fweb%2Findex.html%3FpinnedSceneType%3D2%26pinnedDealGroupId%3D840179148&f_userId=0&f_token=0&f_ci=1&f_pos=1&f_finger=1&app_version=1&barcol=ff2727&barfcol=ffffff&from=mmp_guesslike",
                                "title": "蜜雪冰城 冰鲜柠檬水",
                                "imageUrl": "https://img.meituan.net/content/c1b962573270fcf7774543f14b409bb7283701.png",
                                "mainMessage": "¥",
                                "mainMessage2": "2.49",
                                "subMessage": "¥4",
                                "subMessageStyle": 1,
                                "tags": [],
                                "mge": {
                                    "position": "0",
                                    "globalid": "a3d860acf154a19f678969e1102b46af",
                                    "dtype": "ROP_ACTIVITY_MAIN",
                                    "tab_index": 0,
                                    "template_name": "rop_style_v2",
                                    "item_id": "840179148",
                                    "item_type": "DEAL_GROUP",
                                    "load_timestamp": "1719307558728",
                                    "apiType": "DAOCAN_DEAL",
                                    "exp_func": "recommend",
                                    "exp_type": "discount",
                                    "ext": {},
                                    "pageNum": 0,
                                    "setImageUrl": false,
                                    "setType": false,
                                    "setPageNum": false,
                                    "setStid": false,
                                    "setTopic_type": false,
                                    "extSize": 0,
                                    "setExt": true,
                                    "setId": false,
                                    "setIsStudentCard": false,
                                    "setIs_new_app": false,
                                    "setBiz_youxuan": false,
                                    "setHas_hongbao": false,
                                    "setSellStatus": false,
                                    "setIs_local": false,
                                    "setExt_stid": false,
                                    "setYidiStatus": false,
                                    "setItem_type": true,
                                    "setStyle": false,
                                    "setBiz_content": false,
                                    "setExp_type": true,
                                    "setReasonid": false,
                                    "setBiz_nearby": false,
                                    "setDemotion": false,
                                    "setButton_name": false,
                                    "setTab_name": false,
                                    "setSale_status": false,
                                    "setExp_id": false,
                                    "setBiz_feed": false,
                                    "setPosition": true,
                                    "setApiType": true,
                                    "setMt_price": false,
                                    "setGlobalid": true,
                                    "setTab_index": false,
                                    "setThirdCate": false,
                                    "setBiz_guess": false,
                                    "setRefer_type": false,
                                    "setIs_new_bu": false,
                                    "setContentType": false,
                                    "setIs_stu": false,
                                    "setRefer_id": false,
                                    "setBizGlobalId": false,
                                    "setSec_item_id": false,
                                    "setDtype": true,
                                    "setFourthCate": false,
                                    "setQueryTag": false,
                                    "setAb_info": false,
                                    "setExp_alg": false,
                                    "setBiz_dynamic": false,
                                    "setBiz_topic": false,
                                    "setIsIpay": false,
                                    "setCard_info": false,
                                    "setItem_index": false,
                                    "setExp_ids": false,
                                    "setTrace_info": false,
                                    "setItem_id": true,
                                    "setExp_func": true,
                                    "setTemplate_name": true,
                                    "setLoad_timestamp": true,
                                    "setRecommend_type": false,
                                    "setPromotionTypes": false,
                                    "setYouxuanItemStrategy": false,
                                    "setYouxuanUserStrategy": false,
                                    "setYouxuanItemPromotionTypes": false,
                                    "setYouxuanSkuThirdCategoryId": false,
                                    "setYouxuanSkuFourthCategoryId": false,
                                    "setActivity_type": false,
                                    "setTitle_activity_type": false,
                                    "setBiz_interact": false,
                                    "setBiz_discount": false,
                                    "setExp_ext_type": false,
                                    "setTransmitTrace_crossMsg": false,
                                    "setPlay_type_id": false,
                                    "setTransmitTrace_buName": false,
                                    "setTransmitTrace_mentalCate": false,
                                    "setTransmitTrace_coldstartFlagRecall": false,
                                    "setTransmitTrace_mentalCateIpay": false,
                                    "setOrigin_price": false,
                                    "setPromotion_price": false,
                                    "setCounter_price": false,
                                    "setTitle": false
                                },
                                "poiId": 0,
                                "dealId": 0,
                                "text": "已减0.6元"
                            },
                            {
                                "id": "762461276",
                                "from": "DEAL_GROUP",
                                "type": "deal",
                                "url": "/superseckill/pages/index?weburl=https%3A%2F%2Fawp.meituan.com%2Fdfe%2Fbiz-cross-superseckill%2Fweb%2Findex.html%3FpinnedSceneType%3D2%26pinnedDealGroupId%3D762461276&f_userId=0&f_token=0&f_ci=1&f_pos=1&f_finger=1&app_version=1&barcol=ff2727&barfcol=ffffff&from=mmp_guesslike",
                                "title": "华莱士·全鸡汉堡 【会员入会礼】香辣鸡腿堡",
                                "imageUrl": "http://p0.meituan.net/scpdeal/d728fc8e4a115ce9889aac5b8e16aad6271319.png",
                                "mainMessage": "¥",
                                "mainMessage2": "4.99",
                                "subMessage": "¥13",
                                "subMessageStyle": 1,
                                "tags": [],
                                "mge": {
                                    "position": "1",
                                    "globalid": "a3d860acf154a19f678969e1102b46af",
                                    "dtype": "ROP_ACTIVITY_MAIN",
                                    "tab_index": 0,
                                    "template_name": "rop_style_v2",
                                    "item_id": "762461276",
                                    "item_type": "DEAL_GROUP",
                                    "load_timestamp": "1719307558728",
                                    "apiType": "DAOCAN_DEAL",
                                    "exp_func": "recommend",
                                    "exp_type": "discount",
                                    "ext": {},
                                    "pageNum": 0,
                                    "setImageUrl": false,
                                    "setType": false,
                                    "setPageNum": false,
                                    "setStid": false,
                                    "setTopic_type": false,
                                    "extSize": 0,
                                    "setExt": true,
                                    "setId": false,
                                    "setIsStudentCard": false,
                                    "setIs_new_app": false,
                                    "setBiz_youxuan": false,
                                    "setHas_hongbao": false,
                                    "setSellStatus": false,
                                    "setIs_local": false,
                                    "setExt_stid": false,
                                    "setYidiStatus": false,
                                    "setItem_type": true,
                                    "setStyle": false,
                                    "setBiz_content": false,
                                    "setExp_type": true,
                                    "setReasonid": false,
                                    "setBiz_nearby": false,
                                    "setDemotion": false,
                                    "setButton_name": false,
                                    "setTab_name": false,
                                    "setSale_status": false,
                                    "setExp_id": false,
                                    "setBiz_feed": false,
                                    "setPosition": true,
                                    "setApiType": true,
                                    "setMt_price": false,
                                    "setGlobalid": true,
                                    "setTab_index": false,
                                    "setThirdCate": false,
                                    "setBiz_guess": false,
                                    "setRefer_type": false,
                                    "setIs_new_bu": false,
                                    "setContentType": false,
                                    "setIs_stu": false,
                                    "setRefer_id": false,
                                    "setBizGlobalId": false,
                                    "setSec_item_id": false,
                                    "setDtype": true,
                                    "setFourthCate": false,
                                    "setQueryTag": false,
                                    "setAb_info": false,
                                    "setExp_alg": false,
                                    "setBiz_dynamic": false,
                                    "setBiz_topic": false,
                                    "setIsIpay": false,
                                    "setCard_info": false,
                                    "setItem_index": false,
                                    "setExp_ids": false,
                                    "setTrace_info": false,
                                    "setItem_id": true,
                                    "setExp_func": true,
                                    "setTemplate_name": true,
                                    "setLoad_timestamp": true,
                                    "setRecommend_type": false,
                                    "setPromotionTypes": false,
                                    "setYouxuanItemStrategy": false,
                                    "setYouxuanUserStrategy": false,
                                    "setYouxuanItemPromotionTypes": false,
                                    "setYouxuanSkuThirdCategoryId": false,
                                    "setYouxuanSkuFourthCategoryId": false,
                                    "setActivity_type": false,
                                    "setTitle_activity_type": false,
                                    "setBiz_interact": false,
                                    "setBiz_discount": false,
                                    "setExp_ext_type": false,
                                    "setTransmitTrace_crossMsg": false,
                                    "setPlay_type_id": false,
                                    "setTransmitTrace_buName": false,
                                    "setTransmitTrace_mentalCate": false,
                                    "setTransmitTrace_coldstartFlagRecall": false,
                                    "setTransmitTrace_mentalCateIpay": false,
                                    "setOrigin_price": false,
                                    "setPromotion_price": false,
                                    "setCounter_price": false,
                                    "setTitle": false
                                },
                                "poiId": 0,
                                "dealId": 0,
                                "text": "3.9折"
                            }
                        ],
                        "teJiaTuanGou": true,
                        "isDaoZong": false,
                        "jumperUrl": "/superseckill/pages/index?weburl=https%3A%2F%2Fawp.meituan.com%2Fdfe%2Fbiz-cross-superseckill%2Fweb%2Findex.html%3FpinnedSceneType%3D2%26pinnedDealGroupId%3D840179148&f_userId=0&f_token=0&f_ci=1&f_pos=1&f_finger=1&app_version=1&barcol=ff2727&barfcol=ffffff&from=mmp_guesslike",
                        "left": 1,
                        "right": 0,
                        "fromYX": false,
                        "fromTgoods": false,
                        "tplName": "v2",
                        "msg": "2",
                        "msg2": "49",
                        "sMsg": "4",
                        "sMsgStyle": 0,
                        "sT1": "2019657599000",
                        "sT2": "蜜雪冰城 冰鲜柠檬水",
                        "sT3": "即将恢复"
                    },
                    {
                        "type": "waimai",
                        "style": "dynamicV2",
                        "templateName": "feed_discount_single_v3",
                        "imageUrl": "https://img.meituan.net/wmproduct/6c36ab82c62759b336769000fcc35d95157079.jpg@watermark=1&&object=L3dtcHJvZHVjdC9kZWJiN2M1ZTgyZjJiNjU4Y2ZmNzA1ZTg1N2FjOTcwYjgxLnBuZw==|332w_332h_1e_1l",
                        "title": "华莱士·全鸡汉堡（香雪萝岗东荟城店）",
                        "adTag": {},
                        "imageTag": "外卖",
                        "imageTag2": "30分钟送达",
                        "index": 1,
                        "tags": [
                            "29减2",
                            "0.01折起",
                            "70减10"
                        ],
                        "itemType": "item_card",
                        "subItems": [],
                        "teJiaTuanGou": false,
                        "isDaoZong": false,
                        "jumperUrl": "/waimai/pages/restaurant/restaurant?poi_id=1004448125810726&g_source=159",
                        "left": 0,
                        "right": 1,
                        "fromYX": false,
                        "fromTgoods": false,
                        "imgTagSrc": "http://p0.meituan.net/travelcube/4e394d4b60c0e36fd783039c11af22ac3056.png@120w_40h_1e_1l",
                        "tplName": "v2",
                        "msg": "",
                        "sMsg": "",
                        "sMsgStyle": 2,
                        "sT2": "4.6分",
                        "sT3": "月售4000+"
                    }
                ]
            ],
            "isNewTpl": true
        }
    },
    "WEGS": [
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1719383009564,
                "times": {
                    "load": 0,
                    "show": 2,
                    "fcp": 863,
                    "ready": 864
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1718529788775,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 232,
                    "ready": 232
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1718101640399,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 477,
                    "ready": 477,
                    "fst": 1313
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1718101214637,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 351,
                    "ready": 351,
                    "fst": 1348
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1718101122054,
                "times": {
                    "load": 0,
                    "show": 2,
                    "fcp": 387,
                    "ready": 387,
                    "fst": 1256
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717830866522,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 214,
                    "ready": 214,
                    "fst": 1108
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717830733567,
                "times": {
                    "load": 0,
                    "show": 3,
                    "fcp": 320,
                    "ready": 320,
                    "fst": 1112
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717585611766,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 220,
                    "ready": 220,
                    "fst": 1235
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717585509591,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 204,
                    "ready": 204,
                    "fst": 1108
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717585471189,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 210,
                    "ready": 211,
                    "fst": 1031
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717585429827,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 218,
                    "ready": 219,
                    "fst": 1292
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717583661203,
                "times": {
                    "load": 0,
                    "show": 2,
                    "fcp": 352,
                    "ready": 352
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717583078110,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 217,
                    "ready": 217,
                    "fst": 1273
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717582833579,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 210,
                    "ready": 210,
                    "fst": 1161
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717582641439,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 225,
                    "ready": 225,
                    "fst": 1203
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717582574465,
                "times": {
                    "load": 0,
                    "show": 2,
                    "fcp": 239,
                    "ready": 239,
                    "fst": 1162
                },
                "extra": {}
            }
        },
        {
            "type": "page-pref",
            "data": {
                "page": "index/pages/mt/mt",
                "scene": "",
                "first": "open",
                "start": 1717582496219,
                "times": {
                    "load": 0,
                    "show": 1,
                    "fcp": 349,
                    "ready": 350,
                    "fst": 669
                },
                "extra": {}
            }
        }
    ],
    "drug_AB_test_info": "[{\"scene_key\":\"activity_collect_page_integrate_group_wx_sg\",\"group_key\":\"activity_collect_page_integrate_group_wx_sg\",\"exp_name\":\"A\"},{\"scene_key\":\"activity_collect_page_integrate_group_wx_mt\",\"group_key\":\"activity_collect_page_integrate_group_wx_mt\",\"exp_name\":\"A\"},{\"scene_key\":\"activity_collect_page_integrate_group_wx_wm\",\"group_key\":\"activity_collect_page_integrate_group_wx_wm\",\"exp_name\":\"A\"},{\"scene_key\":\"abtest_my_tab_for_sg\",\"group_key\":\"abtest_my_tab_for_sg\",\"exp_name\":\"A\"},{\"scene_key\":\"abtest_my_tab_for_wm\",\"group_key\":\"abtest_my_tab_for_wm\",\"exp_name\":\"D\"},{\"scene_key\":\"medicine-yoda-fengkong-mt\",\"group_key\":\"medicine-yoda-fengkong-mt\",\"exp_name\":\"A\"},{\"scene_key\":\"medicine-yoda-fengkong-wm\",\"group_key\":\"medicine-yoda-fengkong-wm\",\"exp_name\":\"A\"},{\"scene_key\":\"medicine-yoda-fengkong-sg\",\"group_key\":\"medicine-yoda-fengkong-sg\",\"exp_name\":\"A\"},{\"scene_key\":\"drug_storm_url_replace_exp_for_wm\",\"group_key\":\"drug_storm_url_replace_exp_for_wm\",\"exp_name\":\"A\"},{\"scene_key\":\"drug_storm_url_replace_exp_for_mt\",\"group_key\":\"drug_storm_url_replace_exp_for_mt\",\"exp_name\":\"A\"},{\"scene_key\":\"drug_storm_url_replace_exp_for_sg\",\"group_key\":\"drug_storm_url_replace_exp_for_sg\",\"exp_name\":\"A\"},{\"scene_key\":\"drug_wx_pay_mt\",\"group_key\":\"drug_wx_pay_mt\",\"exp_name\":\"A1\"},{\"scene_key\":\"drug_wx_pay_wm\",\"group_key\":\"drug_wx_pay_wm\",\"exp_name\":\"A1\"},{\"scene_key\":\"v3_drug_storm_url_replace_exp_for_sg\",\"group_key\":\"v3_drug_storm_url_replace_exp_for_sg\",\"exp_name\":\"A\"},{\"scene_key\":\"v3_drug_storm_url_replace_exp_for_mt\",\"group_key\":\"v3_drug_storm_url_replace_exp_for_mt\",\"exp_name\":\"A\"},{\"scene_key\":\"v3_drug_storm_url_replace_exp_for_wm\",\"group_key\":\"v3_drug_storm_url_replace_exp_for_wm\",\"exp_name\":\"A\"},{\"scene_key\":\"v4_drug_storm_url_replace_exp_for_wm\",\"group_key\":\"v4_drug_storm_url_replace_exp_for_wm\",\"exp_name\":\"A\"},{\"scene_key\":\"v4_drug_storm_url_replace_exp_for_mt\",\"group_key\":\"v4_drug_storm_url_replace_exp_for_mt\",\"exp_name\":\"A\"},{\"scene_key\":\"v4_drug_storm_url_replace_exp_for_sg\",\"group_key\":\"v4_drug_storm_url_replace_exp_for_sg\",\"exp_name\":\"A\"},{\"scene_key\":\"location_default_mt_wxapp\",\"group_key\":\"location_default_mt_wxapp\",\"exp_name\":\"A\"}]",
    "youxuan-_lx_sdk_data": {
        "lxcuid": "190205b96e2c8-212216c2c1ecb4-0-0-190205b96e2c8",
        "wxid": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "wxunionid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
    },
    "40a10de2": {
        "id": {
            "timestamp": 1717562732598,
            "localId": "1717562732598EMEMOOW60e593ce0a815b08d658526270cd17d63652",
            "dfpId": "wzx5356v4z665wx0y288xy418yv000y281uv3y23uyv9797876ww600u",
            "serverTimeDiff": -249,
            "expirationTime": 1719383009332
        }
    },
    "maicai-_lx_sdk_wxid": "oJVP50EUlEn3Kh5MgU935L32VdL4",
    "_lx_sdk_interceptData": {
        "bid": {
            "b_waimai_jc6b0va2_mv": [
                "c_waimai_vqqpimrc"
            ],
            "b_waimai_76qny5v8_mv": [],
            "b_uvl4tyzw": [],
            "setOrigin": [],
            "b_waimai_grg5sxlc_mv": [
                "c_hgowsqb",
                "WMOrderStatusAndDetailViewController",
                "WMOrderViewController",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "b_chaoshi_bzoe53ei_mv": [],
            "b_chaoshi_usd5qqsy_mv": [],
            "b_waimai_glztnvr6_mv": [],
            "hidePriceDetail": [],
            "b_shangou_ol_sp_group_xrp4per9_mv": [],
            "b_airbnb_gmngejut_mv": [],
            "b_chaoshi_kiutglez_mv": [],
            "b_shangou_ol_sp_group_df1kzdo6_mv": [],
            "b_waimai_sm4z3bwx_mv": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_waimai_kb6kkdlb_mv": [
                "c_waimai_bp81y199"
            ],
            "b_youxuan_4r1zj09d_mv": [],
            "b_waimai_ra8n14pr_mv": [
                "com.meituan.android.takeout.library.ui.poi.PoiCategoryActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.second.PoiListFilterActivity",
                "com.meituan.android.takeout.library.ui.channelpage.PoiCategoryActivity",
                "WMSubcategoryViewController",
                "777",
                "WMSubHomeViewController",
                "c_i5kxn8l",
                "c_m84bv26"
            ],
            "b_waimai_waa0f92i_mv": [],
            "b_trkc4rrn": [
                "c_CijEL",
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController"
            ],
            "b_wCodT": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_3n9pk26p": [],
            "b_chaoshi_drqrsj6o_mv": [],
            "b_waimai_gihjc3fm_mv": [],
            "b_waimai_8obi02bo_mv": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "confirmFeatureItems": [],
            "b_waimai_0pbd2djr_mv": [],
            "b_hotel_8iwvuob6_mv": [],
            "b_waimai_j4s8z4iy_mv": [],
            "b_meishihome_destroy_mv": [],
            "b_waimai_7yicwyp9_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_5gy1z6a9_mv": [],
            "b_power_order_detail_fst_mv": [],
            "getSelectItemsByDate": [],
            "b_7utor60c": [
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity",
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "c_t9bvR",
                "WMConfirmOrderViewController",
                "c_ykhs39e"
            ],
            "submitNormalPay": [],
            "b_youxuan_oov5ret6_mv": [],
            "b_m9qwox6d": [],
            "b_oZO0D": [],
            "b_fffik4th": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_UHTLt": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_waimai_wcqps6e5_mv": [],
            "b_youxuan_bzvp92vn_mv": [],
            "b_shangou_ol_sp_group_xe5sonau_mv": [],
            "paysuccess": [],
            "onSubmitOrder": [],
            "b_h9y71d6k": [],
            "b_vfw72u81": [],
            "b_waimai_4srskiyd_mv": [],
            "b_waimai_v34uwjjl_mv": [],
            "b_zXVeV": [
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "c_t9bvR",
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity",
                "WMConfirmOrderViewController",
                "c_ykhs39e"
            ],
            "b_waimai_lannvmt3_mv": [
                "c_waimai_chfs1vtb"
            ],
            "b_chaoshi_znin0y0c_mv": [],
            "b_youxuan_okcrh1zl_mv": [],
            "b_QEGEq": [
                "com.sankuai.meituan.takeoutnew.ui.page.main.home.PoiListFragment",
                "com.sankuai.meituan.takeoutnew.ui.page.main.MainActivity",
                "com.meituan.android.takeout.library.ui.homepage.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.TakeoutActivity",
                "com.meituan.android.takeout.library.business.main.homepage.TakeoutActivity",
                "WMHomeViewController",
                "c_m84bv26"
            ],
            "getOrderInfo": [],
            "b_iv6nv7jf": [
                "c_ykhs39e",
                "WMConfirmOrderViewController",
                "c_t9bvR",
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity"
            ],
            "b_2E9x4": [],
            "b_waimai_1o1puze8_mv": [],
            "b_chaoshi_484qm21t_mv": [],
            "b_index_fst_mv": [],
            "b_waimai_xqy0zdqs_mv": [],
            "b_waimai_xxg3ch14_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_6afw2cyj_mv": [],
            "b_u3msq5x1": [],
            "b_group_jmiq0b36_mv": [],
            "b_5q378jd1": [],
            "b_ikybzk9k": [],
            "b_waimai_zfo7ciwm_mv": [
                "c_ykhs39e"
            ],
            "b_irkpaqrq": [
                "com.sankuai.meituan.takeoutnew.ui.goods.search.SearchInshopActivity",
                "com.meituan.android.takeout.library.ui.search.InshopSearchActivity",
                "com.meituan.android.takeout.library.ui.InshopSearchActivity",
                "WMRestaurantGoodsSearchViewController",
                "WMPoiGoodsSearchViewController",
                "c_1b9anm4"
            ],
            "b_waimai_txitq6w6_mv": [],
            "b_b4ztz": [
                "c_m84bv26"
            ],
            "b_pepper_gbsy0q5p_mv": [],
            "b_fealfgiz": [],
            "touchcancel": [],
            "b_waimai_3kj4oz3k_mv": [],
            "b_waimai_b_rHxxq_mv": [
                "c_hgowsqb",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "b_shangou_ol_sp_group_j9ev90w5_mv": [],
            "b_waimai_18ifxdoz_mv": [],
            "b_tbDDA": [
                "c_0f6oqhc",
                "com.sankuai.meituan.takeoutnew.ui.comment.CommentActivity",
                "WMOrderEvaluationViewController"
            ],
            "b_waimai_u8ii8qnw_mv": [
                "c_hgowsqb",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "dayChangeHandler": [],
            "b_shangou_ol_sp_group_crnbnxmm_mv": [],
            "b_waimai_a2az4vv9_mv": [],
            "b_kGo4g": [],
            "b_rgj7Z": [
                "c_CijEL",
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController"
            ],
            "handleRecommend": [],
            "b_chaoshi_ik6s032e_mv": [],
            "findSelectedSeats": [],
            "b_waimai_gqlyfug5_mv": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "hideLayer": [],
            "b_group_b_at2288e5_mv": [],
            "toggleSelectBar": [],
            "b_bwp9e1l3": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "onTapFirstLVItems": [],
            "b_48ckidwc": [],
            "b_hcm4U": [],
            "b_group_0ttqybtj_mv": [],
            "b_shangou_ol_sp_group_li5ksjkd_mv": [],
            "bid": [],
            "{\"val_bid\":\"b_u1p3521a\",\"custom\":{\"pindan_role\":0}}": [],
            "b_hotel_ch2cqg4c_mv": [],
            "b_HojQV": [],
            "b_chaoshi_yjh4a04b_mv": [],
            "b_kuhfkiii": [],
            "b_chaoshi_w31xucbs_mv": [],
            "b_waimai__med_xzszx8qn_mc": [],
            "onSubmit": [],
            "{\"val_bid\":\"b_wxu9n3c8\"}": [],
            "b_QIO48": [],
            "handleSubmitNormalPay": [],
            "b_5efpo8qz": [
                "c_i5kxn8l",
                "com.sankuai.meituan.takeoutnew.ui.page.second.PoiListFilterActivity",
                "com.meituan.android.takeout.library.ui.poi.PoiCategoryActivity",
                "com.meituan.android.takeout.library.ui.channelpage.PoiCategoryActivity",
                "WMSubcategoryViewController",
                "WMSubHomeViewController",
                "777"
            ],
            "handleSelect": [],
            "b_shangou_ol_sp_group_ey0jgad7_mv": [],
            "b_power_page_fmp": [],
            "b_waimai__med_xzszx8qn_mv": [],
            "b_hhiowkga": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_belnzmoc": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_yCHHZ": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_KnLVX": [
                "com.sankuai.meituan.takeoutnew.ui.poi.search.SearchGlobalActivity",
                "com.meituan.android.takeout.library.ui.search.GlobalSearchActivity",
                "com.meituan.android.takeout.library.ui.poi.GlobalSearchActivity",
                "WMSearchFoodViewController",
                "c_nfqbfvw"
            ],
            "init": [],
            "b_waimai_mn53axr1_mv": [],
            "b_waimai_gdes6745_mv": [
                "c_waimai_quudo2x6"
            ],
            "onTapSelectBar": [],
            "scroll": [],
            "b_mobaidanche_vltl8r3q_mv": [],
            "b_waimai_2a7yee5r_mv": [],
            "b_waimai_m9u64f13_mv": [],
            "b_efk5v3la": [
                "c_pyctaqtz"
            ],
            "b_waimai_umsu77hf_mv": [],
            "getTotalPrice": [],
            "b_waimai_gv6o23bk_mv": [],
            "b_mobaidanche_SPOCK_FINISH_ORDER_mc": [],
            "b_waimai_uh6jikg7_mv": [],
            "b_bq9pxeow": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_ZoVhQ": [],
            "b_vGD4S": [],
            "b_waimai_dgesrqoh_mv": [
                "c_waimai_voq9gdvc"
            ],
            "b_chaoshi_0490y7ma_mv": [],
            "b_waimai_zbz3q1uw_mv": [],
            "b_waimai_tzq0gcgi_mv": [],
            "b_chaoshi_hqt26946_mc": [],
            "b_fwSD2": [
                "c_00ft84vx",
                "c_ykhs39e",
                "c_hgowsqb"
            ],
            "b_a4baybn9": [],
            "b_shangou_ol_sp_group_xah88l28_mv": [],
            "b_waimai_u7529b7v_mv": [],
            "{\"val_bid\":\"b_e64riq44\",\"custom\":{}}": [],
            "b_o1xwklwf": [],
            "b_group_tips_wxapp_mc": [],
            "b_hotel_5tqp6ew8_mv": [],
            "b_waimai_sg_liehs5kj_mv": [
                "c_u4fk4kw"
            ],
            "b_waimai_ga7eljay_mv": [],
            "b_shangou_ol_sp_group_4ouhek2i_mv": [],
            "b_hpqpi6wj": [],
            "b_waimai_8y5ge4vv_mv": [],
            "b_cxkzektj": [],
            "b_waimai_snhfvikt_mv": [
                "c_48pltlz",
                "WMOrderListViewController",
                "com.meituan.android.takeout.library.ui.homepage.OrderListFragment",
                "com.meituan.android.takeout.library.ui.order.OrderListFragment",
                "com.sankuai.meituan.takeoutnew.ui.page.main.order.OrderListFragment"
            ],
            "b_bovWf": [],
            "tapCell": [],
            "b_h4rqa": [],
            "b_waimai_hfxwlyrj_mv": [
                "WMHomeViewController",
                "com.meituan.android.takeout.library.business.main.homepage.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.homepage.TakeoutActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.main.MainActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.main.home.PoiListFragment",
                "c_m84bv26"
            ],
            "handleCancelSeat": [],
            "getSelectItems": [],
            "b_shangou_ol_sp_group_fw8ana5e_mv": [],
            "tapMovie": [],
            "b_DzJtl": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_waimai_xquyc05a_mc": [],
            "b_nw9ituzw": [],
            "b_waimai_sxynar4a_mv": [],
            "dealpover_travel_all": [],
            "b_yix0v9f1": [],
            "onTapSecondLVItems": [],
            "requestPay": [],
            "b_waimai_m2vral4j_mv": [],
            "b_a9to5": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "submitPay": [],
            "onReachBottom": [],
            "b_VGuA3": [],
            "b_hW5dA": [],
            "b_waimai_eb8uolw2_mv": [
                "com.sankuai.meituan.takeoutnew.ui.goods.detail.GoodDetailActivity",
                "com.meituan.android.takeout.library.ui.poi.goodsdetail.GoodsDetailActivity",
                "WMSpuDetailViewController",
                "WMGoodsDetailViewControlleree",
                "WMGoodsDetailViewController",
                "c_u4fk4kw"
            ],
            "b_yb0v9i24": [],
            "b_wGsBC": [
                "c_1b9anm4"
            ],
            "b_n1si91wh": [],
            "b_nogqmors": [],
            "b_wvyk3cdz": [],
            "b_waimai_c92nc3ey_mv": [],
            "b_waimai_8lr83ac3_mv": [
                "c_waimai_4doz7gra"
            ],
            "b_youxuan_munrtjhe_mv": [],
            "gotoOrderDetail": [],
            "b_waimai_k653fnao_mv": [],
            "b_tsq1c8ag": [],
            "b_chaoshi_k8z76fi6_mv": [],
            "render": [],
            "on": [],
            "b_airbnb_gmngejut_mc": [],
            "getCinema": [],
            "b_chaoshi_ulpbttw3_mv": [],
            "b_waimai_gyt2rom9_mv": [],
            "b_shangou_ol_sp_group_cnz7vtq1_mv": [],
            "b_chaoshi_omphjzjc_mv": [],
            "b_chaoshi_vhudg0yw_mv": [],
            "b_youxuan_8ralvvty_mv": [],
            "emit": [],
            "b_89b8blys": [
                "c_CijEL"
            ],
            "b_waimai_wsq0szl7_mv": [],
            "b_waimai_vjw5dpfw_mv": []
        },
        "cid": [],
        "empty_bid_blk": true,
        "app_name": "group_wxapp",
        "ut": 1719324000,
        "blk_category": [
            "data_sdk_mt_privacy",
            "chaoqianwangluo4",
            "data_sdk_lxcategory",
            "data_sdk_channelIdentifier",
            "data_sdk_tuanhaohuo_e",
            "data_sdk_user_comment",
            "data_sdk_sdk_report",
            "data_sdk_category",
            "data_sdk_map_navigation_release",
            "data_sdk_mlive_anchor",
            "data_sdk_mhotel",
            "data_sdk_gdc",
            "data_sdk_tuanhaohuo",
            "data_sdk_authortool",
            "data_sdk_pay-demo",
            "data_sdk_cgb",
            "data_sdk_mrn",
            "data_sdk_meituan_map_app",
            "data_sdk_office",
            "data_sdk_tuancan",
            "data_sdk_sinan",
            "data_sdk_meituanyouxuan_app",
            "data_sdk_meish",
            "data_sdk_data_sdk_meishi",
            "sdk_report",
            "data_sdk_airbnb-nonexists",
            "data_sdk_gundam",
            "data_sdk_xm_sdk_demo",
            "data_sdk_mtdmap",
            "data_sdk_px_waiter",
            "data_sdk_adapter-rxjava2",
            "data_sdk_undefined",
            "data_sdk_yoda",
            "data_sdk_statisticsDefaultCategory",
            "data_sdk_ocean_test",
            "data_sdk_reco_upper_shelf",
            "data_sdk_data_sdk_hotel",
            "data_sdk_queue-merchant-notification",
            "data_sdk_trip",
            "data_sdk_waimai_e_flutter",
            "data_sdk_dplitehuawei",
            "data_sdk_iphone-kemanmanhd",
            "data_sdk_tower",
            "data_sdk_mola",
            "data_sdk_waimai_e_fe_flutter_college",
            "data_sdk_234",
            "data_sdk_conch",
            "data_sdk_oppo9",
            "data_sdk_mtbaccountkit",
            "data_sdk_flashbuy",
            "data_sdk_waimaibiz",
            "data_sdk_ticket",
            "data_sdk_mtzp_app",
            "data_sdk_finzero",
            "data_sdk_airbnb_test",
            "data_sdk_MPTT",
            "data_sdk_mp",
            "data_sdk_huawei4",
            "data_sdk_bbk",
            "data_sdk_dd",
            "data_sdk_vivo6",
            "data_sdk_mlive",
            "data_sdk_married",
            "data_sdk_TestDemo",
            "data_sdk_mci",
            "data_sdk_SailorBD",
            "mobaidanche",
            "data_sdk_dpliteoppo",
            "data_sdk_dianping-nova",
            "data_sdk_dplitevivo",
            "data_sdk_xiaoxiangchaoxi",
            "data_sdk_qq",
            "data_sdk_ccc",
            "data_sdk_lenovo3",
            "data_sdk_starfish_kl",
            "data_sdk_rd",
            "data_sdk_dpmerchant"
        ],
        "blk_appnm": [
            "bddeal",
            "test",
            "demo",
            "wangyuhao12",
            "test_wyh"
        ]
    },
    "shangou_historyLabels": [
        {
            "label_type": 12002,
            "search_keyword": "消炎",
            "label_name": "消炎"
        }
    ],
    "shangou_user": {
        "token": "AgEMIdHCJ_73t2fvr7OnvPyii4uNhx3j8hbMiHhbBB8thgvzI8I0dhDufE9BzYZav2sQodaiqqD7WgAAAAAMIQAAeG1LBesce1lyGfUPNaWuvrPfMjuB9EZIV98QgAil49jmjh0N3B1zkK8yQhktrfzK",
        "user_id": 2298607377,
        "open_id": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "mobile": "",
        "openIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADg8eOHToVLIb4SWjAqJHIH41SwyckRlQ/6aYsEfuzQWqbxH2nXKo3t5aIiMb3bq8vEEfgqBZRJoXQ==",
        "wxunionid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
    },
    "maicai-_lx_sdk_interceptData": {
        "bid": {
            "b_hotel_ch2cqg4c_mv": [],
            "b_waimai_jc6b0va2_mv": [
                "c_waimai_vqqpimrc"
            ],
            "b_waimai_76qny5v8_mv": [],
            "b_uvl4tyzw": [],
            "b_HojQV": [],
            "b_chaoshi_yjh4a04b_mv": [],
            "b_kuhfkiii": [],
            "b_chaoshi_w31xucbs_mv": [],
            "b_waimai_grg5sxlc_mv": [
                "c_hgowsqb",
                "WMOrderStatusAndDetailViewController",
                "WMOrderViewController",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "setOrigin": [],
            "b_waimai__med_xzszx8qn_mc": [],
            "b_QIO48": [],
            "b_chaoshi_bzoe53ei_mv": [],
            "b_5efpo8qz": [
                "c_i5kxn8l",
                "com.sankuai.meituan.takeoutnew.ui.page.second.PoiListFilterActivity",
                "com.meituan.android.takeout.library.ui.poi.PoiCategoryActivity",
                "com.meituan.android.takeout.library.ui.channelpage.PoiCategoryActivity",
                "WMSubcategoryViewController",
                "WMSubHomeViewController",
                "777"
            ],
            "b_chaoshi_usd5qqsy_mv": [],
            "b_waimai_glztnvr6_mv": [],
            "hidePriceDetail": [],
            "b_shangou_ol_sp_group_xrp4per9_mv": [],
            "handleSelect": [],
            "b_airbnb_gmngejut_mv": [],
            "b_shangou_ol_sp_group_ey0jgad7_mv": [],
            "b_power_page_fmp": [],
            "b_waimai__med_xzszx8qn_mv": [],
            "b_hhiowkga": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_belnzmoc": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_yCHHZ": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_chaoshi_kiutglez_mv": [],
            "b_KnLVX": [
                "com.sankuai.meituan.takeoutnew.ui.poi.search.SearchGlobalActivity",
                "com.meituan.android.takeout.library.ui.search.GlobalSearchActivity",
                "com.meituan.android.takeout.library.ui.poi.GlobalSearchActivity",
                "WMSearchFoodViewController",
                "c_nfqbfvw"
            ],
            "init": [],
            "b_shangou_ol_sp_group_df1kzdo6_mv": [],
            "b_waimai_mn53axr1_mv": [],
            "b_waimai_gdes6745_mv": [
                "c_waimai_quudo2x6"
            ],
            "onTapSelectBar": [],
            "scroll": [],
            "b_waimai_sm4z3bwx_mv": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_mobaidanche_vltl8r3q_mv": [],
            "b_waimai_kb6kkdlb_mv": [
                "c_waimai_bp81y199"
            ],
            "b_youxuan_4r1zj09d_mv": [],
            "b_waimai_2a7yee5r_mv": [],
            "b_waimai_ra8n14pr_mv": [
                "com.meituan.android.takeout.library.ui.poi.PoiCategoryActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.second.PoiListFilterActivity",
                "com.meituan.android.takeout.library.ui.channelpage.PoiCategoryActivity",
                "WMSubcategoryViewController",
                "777",
                "WMSubHomeViewController",
                "c_i5kxn8l",
                "c_m84bv26"
            ],
            "b_waimai_waa0f92i_mv": [],
            "b_waimai_m9u64f13_mv": [],
            "b_efk5v3la": [
                "c_pyctaqtz"
            ],
            "b_waimai_umsu77hf_mv": [],
            "b_trkc4rrn": [
                "c_CijEL",
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController"
            ],
            "b_wCodT": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_chaoshi_drqrsj6o_mv": [],
            "b_3n9pk26p": [],
            "b_waimai_gihjc3fm_mv": [],
            "b_waimai_8obi02bo_mv": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_waimai_gv6o23bk_mv": [],
            "b_mobaidanche_SPOCK_FINISH_ORDER_mc": [],
            "b_waimai_0pbd2djr_mv": [],
            "b_waimai_uh6jikg7_mv": [],
            "b_waimai_j4s8z4iy_mv": [],
            "b_meishihome_destroy_mv": [],
            "b_waimai_7yicwyp9_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_5gy1z6a9_mv": [],
            "b_ZoVhQ": [],
            "b_vGD4S": [],
            "b_NNFHA": [],
            "b_waimai_dgesrqoh_mv": [
                "c_waimai_voq9gdvc"
            ],
            "getSelectItemsByDate": [],
            "b_chaoshi_0490y7ma_mv": [],
            "b_youxuan_um9h46yj_mc": [],
            "b_waimai_zbz3q1uw_mv": [],
            "b_waimai_tzq0gcgi_mv": [],
            "b_7utor60c": [
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity",
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "c_t9bvR",
                "WMConfirmOrderViewController",
                "c_ykhs39e"
            ],
            "b_waimai_b1h3jsh5_mv": [
                "com.sankuai.meituan.takeoutnew.ui.goods.detail.GoodDetailActivity",
                "com.meituan.android.takeout.library.ui.poi.goodsdetail.GoodsDetailActivity",
                "WMSpuDetailViewController",
                "WMGoodsDetailViewControlleree",
                "WMGoodsDetailViewController",
                "c_u4fk4kw"
            ],
            "b_youxuan_qu4i5ewc_mv": [],
            "b_youxuan_oov5ret6_mv": [],
            "b_m9qwox6d": [],
            "b_oZO0D": [],
            "b_chaoshi_hqt26946_mc": [],
            "b_fwSD2": [
                "c_00ft84vx",
                "c_ykhs39e",
                "c_hgowsqb"
            ],
            "b_fffik4th": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_a4baybn9": [],
            "b_UHTLt": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_youxuan_bzvp92vn_mv": [],
            "b_shangou_ol_sp_group_xah88l28_mv": [],
            "b_shangou_ol_sp_group_xe5sonau_mv": [],
            "b_waimai_u7529b7v_mv": [],
            "{\"val_bid\":\"b_e64riq44\",\"custom\":{}}": [],
            "b_h9y71d6k": [],
            "b_vfw72u81": [],
            "b_waimai_4srskiyd_mv": [],
            "b_waimai_v34uwjjl_mv": [],
            "b_zXVeV": [
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "c_t9bvR",
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity",
                "WMConfirmOrderViewController",
                "c_ykhs39e"
            ],
            "b_waimai_lannvmt3_mv": [
                "c_waimai_chfs1vtb"
            ],
            "b_chaoshi_znin0y0c_mv": [],
            "b_youxuan_okcrh1zl_mv": [],
            "b_o1xwklwf": [],
            "b_QEGEq": [
                "com.sankuai.meituan.takeoutnew.ui.page.main.home.PoiListFragment",
                "com.sankuai.meituan.takeoutnew.ui.page.main.MainActivity",
                "com.meituan.android.takeout.library.ui.homepage.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.TakeoutActivity",
                "com.meituan.android.takeout.library.business.main.homepage.TakeoutActivity",
                "WMHomeViewController",
                "c_m84bv26"
            ],
            "getOrderInfo": [],
            "b_iv6nv7jf": [
                "c_ykhs39e",
                "WMConfirmOrderViewController",
                "c_t9bvR",
                "com.meituan.android.takeout.library.orderconfirm.OrderConfirmActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.confirm.OrderConfirmActivity"
            ],
            "b_group_tips_wxapp_mc": [],
            "b_2E9x4": [],
            "b_waimai_1o1puze8_mv": [],
            "b_waimai_sg_liehs5kj_mv": [
                "c_u4fk4kw"
            ],
            "b_waimai_ga7eljay_mv": [],
            "b_hpqpi6wj": [],
            "b_waimai_8y5ge4vv_mv": [],
            "b_cxkzektj": [],
            "b_bovWf": [],
            "b_chaoshi_484qm21t_mv": [],
            "tapCell": [],
            "b_h4rqa": [],
            "b_waimai_xqy0zdqs_mv": [],
            "b_waimai_xxg3ch14_mv": [
                "c_waimai_bp81y199"
            ],
            "b_waimai_6afw2cyj_mv": [],
            "b_u3msq5x1": [],
            "b_group_jmiq0b36_mv": [],
            "b_waimai_hfxwlyrj_mv": [
                "WMHomeViewController",
                "com.meituan.android.takeout.library.business.main.homepage.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.TakeoutActivity",
                "com.meituan.android.takeout.library.ui.homepage.TakeoutActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.main.MainActivity",
                "com.sankuai.meituan.takeoutnew.ui.page.main.home.PoiListFragment",
                "c_m84bv26"
            ],
            "b_5q378jd1": [],
            "b_shangou_ol_sp_group_fw8ana5e_mv": [],
            "getSelectItems": [],
            "tapMovie": [],
            "b_DzJtl": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_ikybzk9k": [],
            "b_waimai_zfo7ciwm_mv": [
                "c_ykhs39e"
            ],
            "b_waimai_xquyc05a_mc": [],
            "b_nw9ituzw": [],
            "b_waimai_sxynar4a_mv": [],
            "dealpover_travel_all": [],
            "b_irkpaqrq": [
                "com.sankuai.meituan.takeoutnew.ui.goods.search.SearchInshopActivity",
                "com.meituan.android.takeout.library.ui.search.InshopSearchActivity",
                "com.meituan.android.takeout.library.ui.InshopSearchActivity",
                "WMRestaurantGoodsSearchViewController",
                "WMPoiGoodsSearchViewController",
                "c_1b9anm4"
            ],
            "b_waimai_txitq6w6_mv": [],
            "b_b4ztz": [
                "c_m84bv26"
            ],
            "b_yix0v9f1": [],
            "b_pepper_gbsy0q5p_mv": [],
            "b_fealfgiz": [],
            "b_waimai_3kj4oz3k_mv": [],
            "b_waimai_b_rHxxq_mv": [
                "c_hgowsqb",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "b_shangou_ol_sp_group_j9ev90w5_mv": [],
            "b_waimai_18ifxdoz_mv": [],
            "b_waimai_m2vral4j_mv": [],
            "b_a9to5": [
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "c_hgowsqb"
            ],
            "b_tbDDA": [
                "c_0f6oqhc",
                "com.sankuai.meituan.takeoutnew.ui.comment.CommentActivity",
                "WMOrderEvaluationViewController"
            ],
            "b_waimai_u8ii8qnw_mv": [
                "c_hgowsqb",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity"
            ],
            "dayChangeHandler": [],
            "onReachBottom": [],
            "b_VGuA3": [],
            "b_hW5dA": [],
            "b_waimai_eb8uolw2_mv": [
                "com.sankuai.meituan.takeoutnew.ui.goods.detail.GoodDetailActivity",
                "com.meituan.android.takeout.library.ui.poi.goodsdetail.GoodsDetailActivity",
                "WMSpuDetailViewController",
                "WMGoodsDetailViewControlleree",
                "WMGoodsDetailViewController",
                "c_u4fk4kw"
            ],
            "b_yb0v9i24": [],
            "b_wGsBC": [
                "c_1b9anm4"
            ],
            "b_waimai_a2az4vv9_mv": [],
            "b_n1si91wh": [],
            "b_kGo4g": [],
            "b_nogqmors": [],
            "b_rgj7Z": [
                "c_CijEL",
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController"
            ],
            "b_wvyk3cdz": [],
            "b_chaoshi_ik6s032e_mv": [],
            "b_waimai_c92nc3ey_mv": [],
            "findSelectedSeats": [],
            "b_waimai_8lr83ac3_mv": [
                "c_waimai_4doz7gra"
            ],
            "b_youxuan_munrtjhe_mv": [],
            "b_waimai_gqlyfug5_mv": [
                "com.sankuai.meituan.takeoutnew.ui.poi.shop.RestaurantActivity",
                "com.meituan.android.takeout.library.ui.poi.RestaurantActivity",
                "WMRestaurantViewController",
                "c_CijEL"
            ],
            "b_waimai_k653fnao_mv": [],
            "b_tsq1c8ag": [],
            "b_chaoshi_k8z76fi6_mv": [],
            "render": [],
            "on": [],
            "hideLayer": [],
            "b_airbnb_gmngejut_mc": [],
            "b_group_b_at2288e5_mv": [],
            "getCinema": [],
            "toggleSelectBar": [],
            "b_bwp9e1l3": [
                "c_hgowsqb",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderDetailActivity",
                "com.sankuai.meituan.takeoutnew.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.ui.order.OrderActivity",
                "com.meituan.android.takeout.library.orderdetail.OrderDetailActivity",
                "WMOrderViewController",
                "WMOrderStatusAndDetailViewController"
            ],
            "b_chaoshi_ulpbttw3_mv": [],
            "b_48ckidwc": [],
            "b_hcm4U": [],
            "b_waimai_gyt2rom9_mv": [],
            "b_group_0ttqybtj_mv": [],
            "b_shangou_ol_sp_group_cnz7vtq1_mv": [],
            "b_chaoshi_omphjzjc_mv": [],
            "b_chaoshi_vhudg0yw_mv": [],
            "b_shangou_ol_sp_group_li5ksjkd_mv": [],
            "b_youxuan_8ralvvty_mv": [],
            "bid": [],
            "emit": [],
            "b_89b8blys": [
                "c_CijEL"
            ],
            "{\"val_bid\":\"b_u1p3521a\",\"custom\":{\"pindan_role\":0}}": [],
            "b_waimai_wsq0szl7_mv": [],
            "b_waimai_vjw5dpfw_mv": []
        },
        "cid": [],
        "empty_bid_blk": true,
        "app_name": "group_wxapp",
        "ut": 1717585201,
        "blk_category": [
            "data_sdk_mt_privacy",
            "chaoqianwangluo4",
            "data_sdk_lxcategory",
            "data_sdk_channelIdentifier",
            "data_sdk_tuanhaohuo_e",
            "data_sdk_user_comment",
            "data_sdk_sdk_report",
            "data_sdk_category",
            "data_sdk_map_navigation_release",
            "data_sdk_mlive_anchor",
            "data_sdk_mhotel",
            "data_sdk_gdc",
            "data_sdk_tuanhaohuo",
            "data_sdk_authortool",
            "data_sdk_pay-demo",
            "data_sdk_cgb",
            "data_sdk_mrn",
            "data_sdk_meituan_map_app",
            "data_sdk_office",
            "data_sdk_tuancan",
            "data_sdk_sinan",
            "data_sdk_meituanyouxuan_app",
            "data_sdk_meish",
            "data_sdk_data_sdk_meishi",
            "sdk_report",
            "data_sdk_airbnb-nonexists",
            "data_sdk_gundam",
            "data_sdk_xm_sdk_demo",
            "data_sdk_mtdmap",
            "data_sdk_px_waiter",
            "data_sdk_adapter-rxjava2",
            "data_sdk_undefined",
            "data_sdk_yoda",
            "data_sdk_statisticsDefaultCategory",
            "data_sdk_ocean_test",
            "data_sdk_reco_upper_shelf",
            "data_sdk_data_sdk_hotel",
            "data_sdk_queue-merchant-notification",
            "data_sdk_trip",
            "data_sdk_waimai_e_flutter",
            "data_sdk_dplitehuawei",
            "data_sdk_iphone-kemanmanhd",
            "data_sdk_tower",
            "data_sdk_mola",
            "data_sdk_waimai_e_fe_flutter_college",
            "data_sdk_234",
            "data_sdk_conch",
            "data_sdk_oppo9",
            "data_sdk_mtbaccountkit",
            "data_sdk_flashbuy",
            "data_sdk_waimaibiz",
            "data_sdk_ticket",
            "data_sdk_mtzp_app",
            "data_sdk_finzero",
            "data_sdk_airbnb_test",
            "data_sdk_MPTT",
            "data_sdk_mp",
            "data_sdk_huawei4",
            "data_sdk_bbk",
            "data_sdk_dd",
            "data_sdk_vivo6",
            "data_sdk_mlive",
            "data_sdk_married",
            "data_sdk_TestDemo",
            "data_sdk_mci",
            "data_sdk_SailorBD",
            "mobaidanche",
            "data_sdk_dpliteoppo",
            "data_sdk_dianping-nova",
            "data_sdk_dplitevivo",
            "data_sdk_xiaoxiangchaoxi",
            "data_sdk_qq",
            "data_sdk_ccc",
            "data_sdk_lenovo3",
            "data_sdk_starfish_kl",
            "data_sdk_rd",
            "data_sdk_dpmerchant"
        ],
        "blk_appnm": [
            "bddeal",
            "test",
            "demo",
            "wangyuhao12",
            "test_wyh"
        ]
    },
    "_lx_sdk_quickOptions": {
        "cnfver": 0,
        "quickReport": {
            "hasAS": "true",
            "hasAQ": "true",
            "PV": [
                "c_hgowsqb",
                "c_CijEL",
                "c_u4fk4kw",
                "c_ykhs39e"
            ],
            "MC": [
                "b_1uM5o",
                "b_1HOmB",
                "b_KOXis",
                "b_C4g8m",
                "b_4PyOt",
                "b_wgnoiy90",
                "b_9jf3c7zx",
                "b_xU9Ua",
                "b_BdFxv",
                "b_GDT5g",
                "b_nkfO7",
                "b_0ugD5",
                "b_eedpnyj5",
                "b_habt1",
                "b_sct3Y",
                "b_l9TCv",
                "b_2EdZ9",
                "b_prJu4",
                "b_C71ok",
                "b_W0kxz",
                "b_nnehfqay",
                "b_MdbaO",
                "b_7T4Ga",
                "b_kT2dM",
                "b_fwQ6d",
                "b_CX4TM",
                "b_DpKEu",
                "b_gJ58m",
                "b_ZesFe",
                "b_m9pmX",
                "b_HPP0w",
                "b_ycerp",
                "b_2jyz0pke",
                "b_y1nOb",
                "b_oyjOK",
                "b_qtaocy56",
                "b_G73OZ",
                "b_YN75h",
                "b_IWSaX",
                "b_IDNii",
                "b_vdbm5i53",
                "b_U41Mv",
                "b_xYmi9"
            ],
            "evsInfo": [
                "val_ref"
            ],
            "BO": [
                "c_bROZP"
            ]
        },
        "fileName": "config-waimai_wxapp-0-3.json"
    },
    "shangou_wx_scene": 1053,
    "uuid": "18fe6b76ffec8-a2bf8c91d85460-0-0-18fe6b76ffe9d",
    "shangou_authSetting": {
        "scope.userLocation": true,
        "scope.bluetooth": false,
        "scope.address": true,
        "scope.invoice": true,
        "scope.invoiceTitle": true,
        "scope.userInfo": true
    },
    "loginsdk-userInfo-wxIds": {
        "openId": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "openIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADg8eOHToVLIb4SWjAqJHIH41SwyckRlQ/6aYsEfuzQWqbxH2nXKo3t5aIiMb3bq8vEEfgqBZRJoXQ==",
        "unionId": "oNQu9t1mtNmbtxbz1rOCrFp0viLc",
        "unionIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADhcXY4bUOc6XVhlVdoGBqzOOoGyoX4rm3SfhHFbSNXSLS3cmKtCXG34WcoA992X0pp9VoT5M5lZCQ=="
    },
    "shangou_yodaOrderData": {},
    "__perf_userid": "96db3985-8ed9-45ff-94fb-8633fc5cdda4",
    "youxuan-_mall_appActivation": {
        "value": true,
        "expires": 8639913600000,
        "timestamp": 1718529792142,
        "count": -1,
        "currentCount": 0
    },
    "guardSample": "{\"dfp_initSync\":10,\"dfp_init\":10,\"dfp_bio\":10,\"dfp_siua\":10000,\"dfp_finger\":100,\"dfp_dfpid\":10,\"dfp_sign\":1000,\"dfp_siua_length\":10000,\"dfp_finger_length\":100,\"dfp_sign_length\":1000,\"dfp_req_length\":10,\"dfp_bio_req_length\":10,\"dfp_req\":10,\"dfp_bio_horn\":10,\"dfp_bio_req\":10,\"c_sec_params_time\":1000,\"c_sec_yoda_check\":1,\"c_sec_auth_success\":1,\"c_sec_auth_fail\":1}",
    "waimai-cityIdApiWhiteList": {
        "/r2x/waimai/order/getuserorders": 1,
        "/weapp/api/v6/home/feeds/mainlist": 1,
        "/weapp/api/v6/home/feeds/rcmdboard": 1,
        "/weapp/api/v6/home/feeds/tabs": 1,
        "/weapp/poi/price": 1,
        "/weapp/shop/v1/poi/abTest": 1,
        "/weapp/shop/v1/poi/attr": 1,
        "/weapp/shop/v1/poi/productlist": 1,
        "/weapp/v1/abtest/frontend": 1,
        "/weapp/v1/account/cancelstatus": 1,
        "/weapp/v1/channel/rcmdboard": 1,
        "/weapp/v1/comment/mycommentlist": 1,
        "/weapp/v1/comment/poi": 1,
        "/weapp/v1/external/ajax/button": 1,
        "/weapp/v1/food/collect": 1,
        "/weapp/v1/guide/collect": 1,
        "/weapp/v1/home/aggregateInfo": 1,
        "/weapp/v1/multiplecart/allcartinfo": 1,
        "/weapp/v1/order/detail": 1,
        "/weapp/v1/payment/anotherpay": 1,
        "/weapp/v1/payment/pay": 1,
        "/weapp/v1/poi/food": 1,
        "/weapp/v1/poi/getfilterconditions": 1,
        "/weapp/v1/search/home/hotlabelandhistory": 1,
        "/weapp/v1/search/v8/suggest": 1,
        "/weapp/v1/shoppingcart/refreshdata": 1,
        "/weapp/v1/smartassistant/check": 1,
        "/weapp/v1/smartassistant/recommend": 1,
        "/weapp/v1/subscription/result": 1,
        "/weapp/v1/subscription/template": 1,
        "/weapp/v1/user/address/backupaddr": 1,
        "/weapp/v1/user/address/cityname": 1,
        "/weapp/v1/user/address/locateuseraddr": 1,
        "/weapp/v1/user/address/nearby": 1,
        "/weapp/v1/user/address/posname": 1,
        "/weapp/v1/user/address/searchdivisionopencity": 1,
        "/weapp/v1/user/allowance/entry": 1,
        "/weapp/v1/user/coupons/getvalid": 1,
        "/weapp/v1/user/favorite/getmyfavorite": 1,
        "/weapp/v1/user/poicoupons/list": 1,
        "/weapp/v1/wlwc/aggregationpage/ab": 1,
        "/weapp/v1/wlwc/homepageicon": 1,
        "/weapp/v1/wlwc/signintask/signin": 1,
        "/weapp/v1/wlwc/team/entry": 1,
        "/weapp/v1/wmorder/wmOrderDetailFeed": 1,
        "/weapp/v2/account/getmyaccount": 1,
        "/weapp/v2/account/middlepage": 1,
        "/weapp/v2/poi/channelpage": 1,
        "/weapp/v2/poi/product/info": 1,
        "/weapp/v2/search/v9/poi": 1,
        "/weapp/v2/user/address/getaddr": 1,
        "/weapp/v2/uuid": 1,
        "/weapp/v2/uuidgray": 1,
        "/weapp/v3/order/status": 1,
        "/weapp/v6/food/collect": 1,
        "/weapp/v6/home/gray": 1,
        "/weapp/v6/poi/food/multispu": 1,
        "/weapp/v7/poi/product/detail": 1,
        "/weapp/weapp/v6/shoppingcart/calculatePrice": 1
    },
    "youxuan-logindata": {
        "token": "AgHoJACLgqGtl-cXWqCKaVwN8f3XVTnUP6ZqLBC1Ym0numHDziKTa-C6K4PLqszU2aGoYfiQ4VICTgAAAAC3IAAAKYYmQkSiZYPc_8lNdKEmKV0nR_ZG0J-SqYO_2rjfGbj3p4IOO3keGpqTyfjcYUYt",
        "userId": 2298607377,
        "openId": "oJVP50EUlEn3Kh5MgU935L32VdL4",
        "openIdCipher": "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADhQA4QyNPJ926/5/rIGe6dTzU569XxCe2bsqRvd29+yLvyy5/hhFzniW7WQ0uyo8kzFXcFUdNyV4w==",
        "unionId": "oNQu9t1mtNmbtxbz1rOCrFp0viLc",
        "wxUserInfo": {
            "avatarUrl": "/avatar/t186f39f2eb540ac22377de4fcc4d1f9a8b08.jpg",
            "nickName": "旮旯之之",
            "uniqueid": "oNQu9t1mtNmbtxbz1rOCrFp0viLc"
        }
    },
    "mtptTabs": [
        {
            "selectedIconPath": "https://p1.meituan.net/linglong/b9437ec906c496539bae94ac4e4220723750.png",
            "iconPath": "https://p0.meituan.net/linglong/15b2ca91a6bd251f7866990353f7e2d01520.png",
            "pagePath": "/index/pages/mt/mt",
            "text": "首页",
            "exchange_resource_id": "247427"
        },
        {
            "selectedIconPath": "https://p1.meituan.net/linglong/2bab59a3dc535bb94b3d9159835a3b141958.png",
            "iconPath": "https://p0.meituan.net/linglong/fda32b0102260d140d5409ca3b369a2c1210.png",
            "pagePath": "/index/pages/tabs/index",
            "text": "分类",
            "exchange_resource_id": "247428"
        },
        {
            "selectedIconPath": "https://p0.meituan.net/linglong/dae2f51cc406d4b36497a7bf58c4dc7d2761.png",
            "iconPath": "https://p0.meituan.net/linglong/e08a9ad4693cff180e88c350b5dc0a491489.png",
            "pagePath": "/index/pages/tab-lancer/index?scene=cube294244&resourceV2=516500",
            "text": "省钱",
            "exchange_resource_id": "516500"
        },
        {
            "selectedIconPath": "https://p0.meituan.net/linglong/c75cb12fb61b12e506050eeaf970c7d53166.png",
            "iconPath": "https://p0.meituan.net/linglong/9e7c030c4fe8049081cbe7c48856b4901609.png",
            "pagePath": "/index/pages/mine/mine",
            "text": "我的",
            "exchange_resource_id": "247430"
        }
    ],
    "shangou_wx_set_info": "2298607377=1000440500,1717582498849",
    "waimai-WXOWLKEY-unionId": "1394134172561621033",
    "waimai-wm_cityid_actual": {
        "location_tag": 0,
        "mt_back_info": {
            "adcode": "440112",
            "citycode": "440100",
            "mt_back_city_id": "440100",
            "mt_back_city_name": "广州市",
            "mt_back_district_id": "440112",
            "mt_back_district_name": "黄埔区",
            "mt_back_province_id": "440000",
            "mt_back_province_name": "广东省",
            "pcode": "440000",
            "setAdcode": true,
            "setCitycode": true,
            "setMt_back_city_id": true,
            "setMt_back_city_name": true,
            "setMt_back_district_id": true,
            "setMt_back_district_name": true,
            "setMt_back_province_id": true,
            "setMt_back_province_name": true,
            "setPcode": true
        },
        "mt_front_info": {
            "mt_front_city_id": "20",
            "mt_front_city_name": "广州",
            "mt_front_city_pinyin_name": "guangzhou",
            "mt_front_district_id": "737",
            "mt_front_district_name": "黄埔区",
            "mt_front_origin_city_id": "0",
            "setMt_front_city_id": true,
            "setMt_front_city_name": true,
            "setMt_front_city_pinyin_name": true,
            "setMt_front_district_id": true,
            "setMt_front_district_name": true,
            "setMt_front_origin_city_id": true
        },
        "setDivision": false,
        "setDp_info": false,
        "setLocation_tag": true,
        "setMt_back_info": true,
        "setMt_front_info": true,
        "lastUpdate": 1717585434696,
        "lastLocation": {
            "latitude": "23.178790",
            "longitude": "113.486045"
        }
    },
    "abtest": {
        "123": {
            "keyName": [
                "D"
            ],
            "param": [
                {}
            ]
        },
        "wx_homepage_columnsort": {
            "keyName": [
                "f"
            ],
            "param": [
                {
                    "for_you": "1",
                    "god_price": "4",
                    "wm_home_head_banner": "{\"index\":60,\"show\":true}",
                    "wm_home_head_optimization_channel": "{\"index\":50,\"show\":true}",
                    "banner": "2",
                    "ad_birkin": "3",
                    "wm_home_head_platinum": "{\"index\":70,\"show\":true}",
                    "wxapp_home_head_god_price": "{\"index\":80,\"show\":true}",
                    "wxapp_home_head_cheap": "{\"index\":90,\"show\":false}"
                }
            ]
        },
        "boss_recommend_goods_decide": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "business_merger_pay_success_entry_mp": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "MP_shopenter": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "auto_update": {
            "keyName": [
                "open"
            ],
            "param": [
                {}
            ]
        },
        "MP_sg_order_list": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "MP_Cashier_abtest": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "address_wx_sdk": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "MP_Bargains_Home": {
            "keyName": [
                "menus"
            ],
            "param": [
                {}
            ]
        },
        "waimai_sales_process": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "mp_treat": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "waimai_restaurant_optimize": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "MP_add_title": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "MP_dishes_shares": {
            "keyName": [
                "b"
            ],
            "param": [
                {}
            ]
        },
        "mtmall-entry": {
            "keyName": [
                "A1"
            ],
            "param": [
                {}
            ]
        },
        "MP_order_login": {
            "keyName": [
                "D"
            ],
            "param": [
                {}
            ]
        },
        "mp_quality_improving": {
            "keyName": [
                "extra"
            ],
            "param": [
                {}
            ]
        },
        "waimai-home-page-rcmd-style": {
            "keyName": [
                "open"
            ],
            "param": [
                {}
            ]
        },
        "mp_Medicine_Tips": {
            "keyName": [
                "A"
            ],
            "param": [
                {
                    "mp_Medicine_Tips": "true"
                }
            ]
        },
        "sg-wm-cart-server": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mp_nav_supply": {
            "keyName": [
                "c"
            ],
            "param": [
                {}
            ]
        },
        "phf_location_enhancement": {
            "keyName": [
                "enhancement"
            ],
            "param": [
                {}
            ]
        },
        "wm_report_local": {
            "keyName": [
                "a"
            ],
            "param": [
                {}
            ]
        },
        "waimai_x_search_wx_mp": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wm-dynamic-coupon-fit-commodity": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wxapp_sqs_coupon_package_performance_opt": {
            "keyName": [
                "Open"
            ],
            "param": [
                {}
            ]
        },
        "order-four-terminal-integration-test": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "address_sdk": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "matrix_message": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "MP_Navigation_Warning": {
            "keyName": [
                "show"
            ],
            "param": [
                {}
            ]
        },
        "mt-dynamic-coupon-fit-commodity": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "MP_selectNearby": {
            "keyName": [
                "a"
            ],
            "param": [
                {}
            ]
        },
        "wxapp_im_img_size_change": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "pinhaofan_pv_monitor_1702381064197": {
            "keyName": [
                "open"
            ],
            "param": [
                {}
            ]
        },
        "redpacket-new-entrance": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mtmall": {
            "keyName": [
                "show_qrcode",
                "showHot",
                "showHot",
                "isShow",
                "C空白组",
                "new",
                "old",
                "disable",
                "useCache",
                "shopcart_group1"
            ],
            "param": [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        },
        "redpacket_new_mt": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "phf_launch_cache_openId": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "redpacket_new": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "drug_my_poi_470_xcx": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "index_storage": {
            "keyName": [
                "K"
            ],
            "param": [
                {}
            ]
        },
        "MP_preview_tiyanyouhua": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "riskParamSimplify": {
            "keyName": [
                "new"
            ],
            "param": [
                {}
            ]
        },
        "MP_shopdetail": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mp_wm_order_detail_v8_new_version": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "MP_PHF_Pouch": {
            "keyName": [
                "use_pouch_d",
                "MP_PHF_Pouch_Market_a2"
            ],
            "param": [
                {
                    "usePouch": "0"
                },
                {
                    "usePouch": "1"
                }
            ]
        },
        "product_detail_optimization": {
            "keyName": [
                "hide"
            ],
            "param": [
                {}
            ]
        },
        "phf-tango-gray": {
            "keyName": [
                "tango_next"
            ],
            "param": [
                {}
            ]
        },
        "comment_list_skyline": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wmwxapp-order-address": {
            "keyName": [
                "a"
            ],
            "param": [
                {}
            ]
        },
        "phf_market_location_exp": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "waimai-wxapp-preload": {
            "keyName": [
                "a"
            ],
            "param": [
                {}
            ]
        },
        "2fc6d7be-8293-496d-835f-b72f9d230994": {
            "keyName": [
                "EXPERIMENTAL_STRATEGY_1"
            ],
            "param": [
                {}
            ]
        },
        "rice_cityid_switch": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wm_mp_webview_inject": {
            "keyName": [
                "open"
            ],
            "param": [
                {}
            ]
        },
        "dynamic-wm-order-info": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "sg_mp_detail_dynamic": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "wxapp_choose_address_change": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "homepage_mach_AB": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "MP_sg_order": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mp_previous": {
            "keyName": [
                "show"
            ],
            "param": [
                {}
            ]
        },
        "waimai-homepage-airdrop-engage-mach-new": {
            "keyName": [
                "use_new_mach"
            ],
            "param": [
                {
                    "newMach": "true"
                }
            ]
        },
        "waimai-home-page": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wm_mp_restaurant": {
            "keyName": [
                "main"
            ],
            "param": [
                {}
            ]
        },
        "MP_t_productdetail_setData": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "sg-wm-mp-detail-dynamic": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "mp_share_coupon": {
            "keyName": [
                "a"
            ],
            "param": [
                {
                    "is_share": "0"
                }
            ]
        },
        "waimai-homepage-engage-mach-new": {
            "keyName": [
                "newsdk"
            ],
            "param": [
                {
                    "newMach": "true",
                    "reportImpression": "false"
                }
            ]
        },
        "dynamic-mt-order-info": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "43a858cd-afd7-4ebc-bdab-6e2be5059e6a": {
            "keyName": [
                "EXPERIMENTAL_STRATEGY_1"
            ],
            "param": [
                {
                    "show": "1"
                }
            ]
        },
        "MP_skeleton_demo_group": {
            "keyName": [
                "1"
            ],
            "param": [
                {}
            ]
        },
        "wm_zsb_fxc": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "sg_home_poi_card_to_mach_B": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wm_channel_pouch": {
            "keyName": [
                "exp_a"
            ],
            "param": [
                {
                    "usePouch": "1"
                }
            ]
        },
        "MP_ListsOfVender": {
            "keyName": [
                "show"
            ],
            "param": [
                {}
            ]
        },
        "phf_getstorage_opt_exp": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "mp_wm_order_detail_new_version": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "MP_nearby": {
            "keyName": [
                "bd"
            ],
            "param": [
                {}
            ]
        },
        "mt-dynamic-shopp-inner-ab": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "wm-dynamic-shop-inner": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "MP_preview_invoice": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "sub_rice": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "wm_monitor": {
            "keyName": [
                "new"
            ],
            "param": [
                {}
            ]
        },
        "sg_loc_pre": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "wx_waimai_homepage_api_cache": {
            "keyName": [
                "C"
            ],
            "param": [
                {
                    "use_cache": "false"
                }
            ]
        },
        "mp_intention_ab": {
            "keyName": [
                "b"
            ],
            "param": [
                {}
            ]
        },
        "phf-index-preload-switch": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "api_cache": {
            "keyName": [
                "Default"
            ],
            "param": [
                {}
            ]
        },
        "MP_FriendPayment_TipsOfWhole": {
            "keyName": [
                "hide"
            ],
            "param": [
                {}
            ]
        },
        "wm_mp_rest_back": {
            "keyName": [
                "on"
            ],
            "param": [
                {}
            ]
        },
        "mt-dynamic-sg-page-1": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "websocket": {
            "keyName": [
                "b"
            ],
            "param": [
                {}
            ]
        },
        "invalid_coupon_h5_mp": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "waimai-wxapp-location-v2": {
            "keyName": [
                "wx_storage_address_1"
            ],
            "param": [
                {
                    "x1": "3000",
                    "x2": "2000",
                    "storage": "1440",
                    "x3": "6000",
                    "storage_modal": "120",
                    "x4": "6000",
                    "addr": "0",
                    "preload": "1"
                }
            ]
        },
        "MP_OrderMap_activity": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "restaurant-pindan-share-bill": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "MP_sg_order_msg": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "phf_dizhi_liandong": {
            "keyName": [
                "experiment"
            ],
            "param": [
                {}
            ]
        },
        "MP_Go_App": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mp_packages_entry": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mp-channel-ad-upgrade": {
            "keyName": [
                "使用新方案"
            ],
            "param": [
                {
                    "useNewEngine": "1"
                }
            ]
        },
        "phf_product_detail_preload_exp": {
            "keyName": [
                "C"
            ],
            "param": [
                {}
            ]
        },
        "dynamic-wm-order-info-1": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "mp_store_head": {
            "keyName": [
                "new"
            ],
            "param": [
                {}
            ]
        },
        "wm_setdata_rewrite": {
            "keyName": [
                "b"
            ],
            "param": [
                {}
            ]
        },
        "MP_preview_jiesuan": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "wm_mp_rest_quick_back": {
            "keyName": [
                "on"
            ],
            "param": [
                {}
            ]
        },
        "wm_sg_x_jump_preview_order": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "mp_suitable_packages": {
            "keyName": [
                "show"
            ],
            "param": [
                {}
            ]
        },
        "phf_preload_route": {
            "keyName": [
                "open"
            ],
            "param": [
                {}
            ]
        },
        "drug_search_poi_580": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        },
        "phf_mprn_kingkong": {
            "keyName": [
                "B"
            ],
            "param": [
                {}
            ]
        },
        "phf-app-cache-geo": {
            "keyName": [
                "A"
            ],
            "param": [
                {}
            ]
        }
    },
    "__MTUC__mtInfo": {
        "id": 2298607377,
        "username": "jRZ832121619",
        "avatarurl": "",
        "mobile": "186****0627",
        "city": 0,
        "cityid": 0,
        "nickname": "jRZ832121619"
    },
    "maicai-_lx_sdk_lxcuid": "18fe814a999c8-f16b2fca62463-0-0-18fe814a999c8",
    "waimai-UUID": "1394134172561621033",
    "shangou_webviewUrl": "https://yiyao-h5.meituan.com/drug/c/multiBoxSubsidy.html?category_type=102620&strategyPageId=yyScene22683&sg_strategy_channel=mt_weapp&sg_strategy_position=push&requestSource=3&pageStyle=3&data_source=2&__lxsdk_params=bHhjdWlkOjE4ZmU2Yjc2ZmZlYzgtYTJiZjhjOTFkODU0NjAtMC0wLTE4ZmU2Yjc2ZmZlOWQ7YXBwOjguMjIuNTthcHBubTpncm91cF93eGFwcDttc2lkOjE4ZmU3ZWEyNmJmLWYzN2MtZWRkNC05NTlhO3d4aWQ6b0pWUDUwRVVsRW4zS2g1TWdVOTM1TDMyVmRMNDtzY2VuZToxMDUzO3V0bV9jb250ZW50OjA7dXRtX2NhbXBhaWduOjA7dXVpZDoxOGZlNmI3NmZmZWM4LWEyYmY4YzkxZDg1NDYwLTAtMC0xOGZlNmI3NmZmZTlkO3d4dW5pb25pZDpvTlF1OXQxbXRObWJ0eGJ6MXJPQ3JGcDB2aUxjO2NpdHlpZDoyMDtvbmVpZF9taW5pX3Byb2dyYW06eyJvbmVpZF93ZWNoYXRfbG9jYWxpZCI6IjE4ZmU2Yjc3MDUwYzgtMjAwNTgxOGJmMjNkZjAtMC0wLTE4ZmU2Yjc3MDUwYzgiLCJvbmVpZF93ZWNoYXRfb3BlbmlkIjoib0pWUDUwRVVsRW4zS2g1TWdVOTM1TDMyVmRMNCIsIm9uZWlkX3dlY2hhdF91bmlvbmlkIjoib05RdTl0MW10Tm1idHhiejFyT0NyRnAwdmlMYyIsIm9uZWlkX3BsYXRmb3JtIjoid2VjaGF0Iiwib25laWRfYmFja2ZpbGwiOiIwIiwib25laWRfYXBwX3ZlcnNpb24iOiI4LjIyLjAiLCJvbmVpZF9zZGtfdmVyc2lvbiI6IjAuMi4xMSIsIm9uZWlkX2lzd3hpZCI6IjAifTtwbjp3eGRlOGFjMGEyMTEzNWMwN2Q7cG46d3hkZThhYzBhMjExMzVjMDdkO3BuOnd4ZGU4YWMwYTIxMTM1YzA3ZDt3aToyMjk3Nzt3ZjoxODFjaTBnNjJjMmkxO2ppOjg3ODAxO2pmOmQ4MGZmNzExZGI1NzgxO3Nka19lbnY6b25saW5l&_lx_tag=eyJncm91cCI6eyJjX3FhbjUwNjAwIjp7ImJpZCI6ImJfd3M4Mm53M3UiLCJleGNoYW5nZV9yZXNvdXJjZV9pZCI6IjI0OTczMSIsImljb25faWQiOiIyMTQ0NyIsImluZGV4Ijo4LCJvZmZzZXQiOjAsInRpdGxlIjoi55yL55eF5Lmw6I2vIiwic291cmNlIjoxLCJlbGVtZW50X2lkIjotOTk5LCJwYWdlX3R5cGUiOjAsImxpbmVfY291bnQiOjMsImx4X3RhZ190bSI6MTcxNzU4MjgzNjgxNH19fQ..&_lx_ver=3.10.1",
    "waimai-report_active_init": "20246264.22.134",
    "maicai-encrypt_config": {
        "encrypt_api_whitelist": [
            "/location/nearby",
            "/location/geo",
            "/mallorder/submit",
            "/mallorder/groupsubmit",
            "/mallorder/{num}/modify",
            "/poi/location/lbs/v2",
            "/poi/list/v2",
            "/malluser/address/create",
            "/malluser/address/{num}/modify",
            "/malluser/address/querysfaddress",
            "/mallorder/{num}/arrivaltimewithdate",
            "/mallorder/{num}/grouparrivaltime",
            "/mallorder/grouppreview",
            "/mallorder/preview",
            "/poi/{num}/sku/{num}/detail/v5",
            "/location/keyword/lbs/v2",
            "/poi/address/list/v2",
            "/poi/{num}/order/recommend/v2",
            "/poi/{num}/sku/guesslike",
            "/poi/{num}/sku/guesslike/v3",
            "/poi/{num}/sku/list/category/{num}/v6",
            "/poi/{num}/sku/search/v2",
            "/malluser/cart/v2/items",
            "/malluser/address/suggestion"
        ],
        "encrypt_param_list": [
            "homepageLat",
            "homepageLng",
            "latitude",
            "longitude",
            "location",
            "deliveryAddrLocation",
            "mobile",
            "selfLiftingMobile"
        ],
        "encrypt_switch": 0,
        "monitor_status": true,
        "_timeStamp": 1717585619580
    }
}
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
"use strict";


var c = [40, 31, 13, 3, 84, 7, 12, 6, 5, 0, 1, 3, 3, 36, 5, 19, 37, 51, 3, 0, 29, 1, 24, 35, 5, 4, 27, 17, 34, 5, 10, 48, 31, 13, 3, 87, 7, 12, 6, 5, 48, 44, 13, 40, 27, 20, 16, 2, 7, 12, 5, 3, 16383, 18, 5, 55, 42, 39, 22, 10, 0, 13, 10, 0, 14, 31, 21, 0, 19, 3, 10, 84, 8, 12, 32, 4, 23, 10, 0, 6, 16, 2, 29, 4, 24, 5, 4, 26, 4, 28, 9, 20, 1, 16, 33, 20, 0, 23, 20, 0, 43, 13, 20, 256, 11, 8, 18, 13, 3, 8, 17, 8, 9, 20, 0, 1, 8, 13, 20, 256, 11, 8, 22, 6, 8, 17, 8, 32, 5, 40, 0, 2, 31, 14, 21, 7, 35, 12, 16, 24, 45, 0, 23, 40, 14, 19, 17, 34, 37, 2, 26, 9, 32, 25, 4, 35, 44, 22, 13, 7, 4, 27, 1, 7, 15, 8, 1, 31, 1, 3, 1, 28, 7, 15, 10, 8, 1, 31, 1, 3, 1, 43, 33, 1, 0]
    ,
    n = "6708050d020413 14617a7071727d7a7170 c1a4b9b1aeb3b5b2 1472617a77607d7b7a 56373b32 a2c4cbccc5c7d0 41203131 dfbbb9afb6bb 46202f2a23322f2b23 5d3b2d2b 204c4f43414c4944 6b1812181f0e06 45312c28203631242835 dfbaa7ab d4a7b1a7a7bdbbba9db0 f8999b9b9d949d8a97959d8c9d8a 66070a04130b2713120e09140f1c0302 8bc9eaffffeef9f2c2e5ede4 3e5c5f4a4a5b4c47725b485b52 480a2d292b27263b 6002050e03080d01120b2c0516050c caa8a6bfafbea5a5bea28fa4aba8a6afae dbb9a9bab5bf 5436263d333c203a312727 6c0f0d01091e0d2d191804031e05160908 b0d3dfddc0d1c3c3 513534273832341e2338343f253025383e3f cbafaebda2a8ae9ba2b3aea799aabfa2a4 c4a1aaa5a6a8a180a1a6b1a3 305542427d4357 cea8a1a0ba9da7b4ab9dabbabaa7a0a9 1c707d727b697d7b79 ce82afbba0ada681bebaa7a1a0bd9db7a0ad 2945464a485d404647685c5d41465b40534c4d 0864676b697c6167664d66696a646d6c 7d11121e1c091412132f1819081e18193c1e1e080f1c1e04 523f3b31203d223a3d3c371327263a3d203b283736 d4b9bbb0b1b8 137d7667647c6178476a6376 d6b8b9a2bfb0bfb5b7a2bfb9b897bab3a4a297a3a2beb9a4bfacb3b2 8ee0e1fae7e8e7edeffae7e1e0cffbfae6e1fce7f4ebea 87e9e8f3eee1eee4e6f3eee8e9c5e6e3e0e2c6f2f3efe8f5eefde2e3 1a74756e737c73797b6e73757449756f747e5b6f6e72756873607f7e a6d6cfdec3caf4c7d2cfc9 84f4e8e5f0e2ebf6e9 d0a3b1b6b591a2b5b1 f586968790909bbd909c929d81 ed9e8e9f888883b9829d 1467776671717a437d70607c 491a0d021f2c3b3a202627 4d3e392c39383e0f2c3f0528242a2539 d0a3a9a3a4b5bd 56203324253f3938 b2c5dbd4dbf7dcd3d0ded7d6 a5f2ccc3cceccbc3ca daadb3b4beb5ad92bfb3bdb2ae c3b4aaada7acb494aaa7b7ab a2d1c1d0c7c7ccf0c7c1cdd0c6 aacfd8d8e7d9cd 721b01311a1300151b1c15 3b575e4d5e57 375b525143 8ffde6e8e7fb dda9b2ad c1a3aeb5b5aeac d0a7b9b4a4b8 a2cac7cbc5cad6 82d1d1cbc6 a1e3f2f2e8e5 650410110a2f0a0c0b0001 384b515f5659546b4c4a5d565f4c50 7218070106381d1b1c1716 3c4f595f494e59 731501160206161d100a 91e2e5e3f8fff6f8f7e8 d5b1babbb0 90e6f1fce5f5 f5b994809b969dba85819c9a9b86a68c9b96 a7d7c6d5d4c2 7a090e0813141d131c03 e999889d81 c2b1a1a7aca7 1b7a78787e777e6974767e6f7e69 f49d87b58686958d dbb7beb5bcafb3 34505b5a51 d6a0b7baa3b3 9bebeee8f3 cc8eadb8b8a9beb585a2aaa3 baedd3dcd3f3d4dcd5 d7a4b6b1b296a5b2b6 bbc8cfc9d2d5dc a8d8c9dadbcd b9d6dbd3dcdacd 552520263d 4c3c393f24 47030117 abced3dbc4d9dfd8 53362b233c212720 4e2c2b392f3c2b 97aea6d2d5d6a1d3d5d2a3d2a2d6a0d4afd2a1d2a4d6a4d4a6d1a3d6a3d3d1d1aed2ae 692a5c2f5c2f2d2f5c2f5b2f5c2f5a2f5c2f592f5c2f582f5c2f5f2f5c2f5e2f5c2f5d 7f131a11180b17 f79b929990839f 9aaae2 8ffcfaedfcfbfd c7f7bf 16757e77645762 9dfef5fcefdce9 6b0d19040628030a1928040f0e 2050555348 54373b303137 d8adacbee08bacaab1b6bf 73071c311a0700 3f5c505b5a5c 82f7f6e4bad1f6f0ebece5 21554e63485552 0e6d677e666b7c a4c5c1d7 a2cfcdc6c7 85e6e7e6 6d08030e1f141d19 9af9f5fefff9 77151604124143 2543574a48674c5156 0d3c233a233f ba8b948d9488 c3b3b1aca7 86eef2f2f6f5a3b5c7a3b4c0a3b4c0e7f6f6f5e3e5abebe9e4efeae3a8ebe3eff2f3e7e8a8e5e9eb 2450415750 e68e92929695c3d5a7c3d4a0c3d4a0879696958385cb8b89848f8a83c8958385c892839592c89587888d93878fc885898b 33565d45 fb8b89949f cdaeacaea5a886a8b4 deeaeebfefeebabbec ccbcbea3a8 45202b33 e292908d86 2f5b4a5c5b 80f3f9f3f4e5ed 197f696f f1a6a9aeae879483c0dfc3dfc1aeb2b2b2b2ae 741a1b03 e589808b82918d caa9a2abb889a5aeaf8bbe 46252e2734052922230732 91f7e3fefcd2f9f0e3d2fef5f4 f486959a909b99 ddb0b2b9b8b1 6d1e141e190800 c7aaa8a3a2ab 0e7d777d7a6b63 26555f5552434b 7e0a17131b0d0a1f130e f6829f9b938582979b86 eb849b8e85828f 94fbe4f1fafdf0 92fff6a7 10636462447f4528 6c1f181e05020b050a15 ddbeb2b3bebca9 b6c5c2c4 35415a6641475c5b52 b1c2ddd8d2d4 eb8f8d9ba28f f7839e9a928483969a87 731f1c10121f3a17 402426300924 bccfd9cecad9cee8d5d1d9f8d5dada 5d3439 dcb8baac95b8 107c7f73717c5974 1064797d756364717d60 e9808d 026b66 88e1ec d7a4b2a5a1b2a583bebab293beb1b1 d8b1bc 790a1c0b0f1c0b2d10141c3d101f1f e1868495a7888d84b2989295848cac808f80868493 3744435643644e5954 2d48435b 63363026313c272237223c3322372b 472b2634330624242234342223132e2a22 2844495b5c65474c414e414d4c7c41454d 274a484342 6a1903100f 8dfdffe2f9e2f9f4fde8 1576747979 28585d5b40 d9a9acaab1 0f7f607f 5e323b30392a36 a1cdc4cfc6d5c9 1c7079727b6874 c4b4b1b7ac 670b020900130f 85e9e0ebe2f1ed d7bbb2b9b0a3bf 6408010a03100c a5c9c0cbc2d1cd 9df1f8f3fae9f5 4e222b20293a26 067673756e f599909b92819d f39f969d94879b 4f232a21283b27 a6cac3c8c1d2ce 2e485d43414a4b 95f4e5e5 7c1d0c0c3518 b0dfc0d5ded9d4 a2cdd2c7ccebc6 bdc8d3d4d2d3d4d9 97e2f9fef8f9def3 167b757e7f72 f39e909bba97 c7a3a1b7aea3 492d2f39002d 9af6f5f9fbf6f3fe e985868a8885a08d fe9897929b8a97939b 34405d59514740555944 58393c3c1d2a2a372a 3156544577585f56544303 94fbfad7fbf9e4f5e7e7d7fcf5faf3f1 7b141d1d3814160b1a080838131a151c1e d8aba1abacbdb5 6e0d01031e0f1d1d abd8d2d8dfcec6 284b474558495b5b 1b6862686f7e76 bcdfd3d1ccddcfcf 5d3138333a2935 4b2824263b2a3838 87f4efeee1f3 c5b6bcb6b1a0a8 3754585a47564444 334346405b 3d59544f585e49545253 a8dcc7eec1d0cdcc 16797070577575737a7364797b73627364557e77787173 05767c76716068 d0b1b3b3b5bcb5a2bfbdb5a4b5a2 4f3c363c3b2a22 6e0f0d0d0b020b1c01030b1a0b1c d9aaa0aaadbcb4 ec8d8f8f8980899e83818998899e f98a808a8d9c94 67060404020b0215080a02130215 53203b3a3527 98ebe1ebecfdf5 cdacaeaea8a1a8bfa2a0a8b9a8bf c6b6b3b5ae 275348614e5f4243 ee9a81a887968b8a 196d765f70617c7d 1c73725b656e736f7f736c795f747d727b79 e28d8484a59b908d91818d9287a18a838c8587 33404a4047565e 62051b100d 6c1f151f180901 3e59474c51 5c2f252f283931 2a4d535845 b1ddd4dfd6c5d9 593e202b36 94e7fcfdf2e0 ef9c969c9b8a82 8ee9f7fce1 88f8fdfbe0 0f7b604966776a6b 8cf8e3cae5f4e9e8 4c38230a25342928 4d2e2c2e2528062834 2e4a4f5a4f 9efaffeaff 3d595b4d 8be5fee6e9eef9 badedbcedb 640d0a100116120508 8befeaffea 3043554246554264595d554344515d40 f59b8098979087 0f6b6e7b6e 6013051216051234090d051314010d10 4125203520 1063756266756244797d756364717d60 c9a7a6be 670301172e03 7115100510 87e3e1f7 7102140307140325181c1435181717 b7d2cfc7dec5d6c3ded8d9e3dedad2 5b3f3a2f3a 452c2b312037332429 eb85849c 7b1f1a0f1a 0e6a687e b5d4d1d1f4c5dc f4909284ab9092849d90 c0aeafb7 0a6d6f7e4c7f6666536f6b78 016664754c6e6f7569 fa9d9f8ebe9b8e9f 4f282a3b07203a3d3c 214644556c484f54554452 1b7c7e6f487e7874757f68 4927263e 375d4450615245445e5859 96f2f7e2f7 096c717d e48297898b8081 fc8f889d9f97 5c3f33323f3d28 4c2f2328292f 2e5b5a48167d5a5c474049 1e6a715c776a6d cbb8bfb9a2a5aca2adb2 2c465f484a5c7a495e5f454342 a1d5c8ccc4 412e32 e28f8f92 730416101b1207 1163746064746265 0a2f384c7c3b2f384c7d726e6c7a636e 5707180403 432233332f2a2022372a2c2d66710529302c2d d2a0b7a2bda0a686bbb1b9 3d4e495c49484e7e525958 b5d1d4c1d4 b2d6d3c6d3 4226233623 55363a3130 c5a1a4b1a4 8cefe3e8e9 accdc8c8eddcc5 701416002f021501 8af9feebfefff9c9e5eeef 0866677f 78191c1c390811 bfdbd9cfe0cddacee0d3dad1d8cbd7 b6c5c2c4dfd8d1dfd0cf e68a838881928e 117075755463637e63 70141f2215001f02043600 0362676742736a 2b4f4d5b74594e5a c1afaeb6 b6d2d0c6e4d3c6d9c4c2d3d2 b7ded3 a7c2dfd7ced5c6d3cec8c9f3cecac2 4f392e233a2a0029 22475a524b5043564b4d4c764b4f47 bbdfddcbe9decbd4c9cfdedf debfadadb7b9b0 96e4f3e6f9e4e2c2fff5fd 8ffcf6fcfbeae2e6e1e9e0 086f6d7c5b717b7c6d6541666e67 582b212b2c3d35 0f616a7b78607d6466616960 9ff8faebd1faebe8f0edf4cbe6effa c5aba0b1b2aab7ae91bcb5a0 7b1909121c130f151e0808 1d7a78694e7e6f7878735f6f747a756973786e6e 5634243f313e2238332525 b5c6c1dac7d4d2d0dcdbd3da 57303223042338253630321e393138 590a2d362b383e3c10373f36 98fafdf9fbf7f6eb 1a7d7f6e587f7b79757469 a4e6c1c5c7cbcad7 ee9d8b828b8d9a8b8a9a8b969a9c8f80898b deb9bbaa8dbbb2bbbdaabbba8abba6aa8cbfb0b9bb 7122141d14120514152514090523101f1614 f29e93879c919a9d82869b9d9c81818b9c91 ee898b9aa28f9b808d86a19e9a8781809dbd97808d afe3cedac1ccc7e0dfdbc6c0c1dcfcd6c1cc 4123203535243338282f272e adcac8d9efccd9d9c8dfd4e4c3cbc2 d99bb8adadbcaba090b7bfb6 1261716077777c4077717d60767b7c754166736677 4027253413233225252e1225232f3224292e271334213425 780b1b0a1d1d162a1d1b170a1c11161f2b0c190c1d 84f4f1f7ec 89fce7edecefe0e7eced 89f9fcfae1 d1bfa4bdbd d3bcb1b9b6b0a7 6c1c191f04 e79493958e89808e819e fc9a938eb99d9f94 a4d4d1d7cc 5724273b3e23 87ebe2e9e0f3ef 99eae9f5f0ed 375b525950435f ee9c8b9e828f8d8b 91fdf4fff6e5f9 730306001b e1948f858487888f8485 2d5d585e45 f28097829e939197 671712140f 83efe6ede4f7eb 51323930231025 fc9f949d8ebd88 afccc7ceddeedb bacacfc9d2 b5c5c0c6dd a2c1cac3d0e1cdc6c7e3d6 fc9099929b8894 780b14111b1d e28e878c85968a 27444f46556653 bdded5dccffcc9 8ffffafce7 fb899e8b979a989e 705542454241 215344514d404244 fbdec9cec9cc f38196839f929096 81a4b3b4b3b9 4436213428252721 eecbdcdbdcd7 ef9d8a9f838e8c8a 624750575023 fc8c898f94 98f2f7f1f6 e38293938f8a8082978a8c8dc6d1a59bce949494ce858c918ece96918f868d808c878687 1879686874717b796c7177763d2a5e726b7776 08636d717b dfb3bab1b8abb7 72111d1c06171c065f060b0217 86f2e9cae9f1e3f4c5e7f5e3 bcc8d3f0d3cbd9ceffddcfd9 790a0d180b0d0a2e100d11 b9d7d6ce ea9f848e8f8c83848f8e 4d3a282f 7f0a111b1a1916111a1b aac7def9cfc9dfd8c3ded3f9c3cdc4 a3ced7f0c6c0d6d1cad7daf0cad6c2 284a10 deb6bbbfbabbac 523f37263a3d36 7a3d3f2e 95e1fac0e5e5f0e7d6f4e6f0 3e797b6a 094e4c5d 0670676a73634960 c0a6a9aea7a5b2 02717666 6015120c f89c998c99 630b0602070611 a7c8c5cdc2c4d3 f39b9692979681 91f9f4f0f5f4e3 d8bda0bdbb 6a2d2f3e e689848c838592 264d435f55 7d1118131a0915 395f564b7c585a51 7b131a08340c152b09140b1e090f02 196a6d6b70777e 513e333b343225 770702041f bfd9d0cdfadedcd7 bbcbcec8d3 355f5a5c5b b5d6dadbd6d4c1 14677b6660 2a4c45586f4b4942 98e8edebf0 9ff5f0f6f1 96d1d3c2 7b080f0912151c d0a0a5a3b8 8aebfafae6f3 1d6d686e75 6d0c1d1d0114 d4a7a0a6bdbab3bdb2ad 0b7b7e7863 eb8a9b9b8792 d7a2b9b3b2b1beb9b2b3 bad6dfd4ddced2 28444d464f5c40 c6b4a9b3b2a3 3d5f0f 8be1e9 bccbdf fb8b98 c8bfb0 d9bcb7af 84e1eaf2 583f3d2c172f36082a37283d2a2c211c3d2b3b2a31282c372a 4e292b3a0f2d2d213b203a072028211d37202d 0671746f7267646a63 e4918a8081828d8a8180 721704131e 75060114161e c1b2b5a0a2aa 630a0d000f16070610 d6b7a6a6fba5b3a4a0bfb5b3 05767164666e a2cbccc1ced7c6c7d1 26475656554354504f4543 3b4f54684f4952555c d2bbbcb1bea7b6b7a1 391c0c7b57584d504f5c1c0b095a565d5c1c0c7d 167c74 116672 c0b7a3 cbbca8 ea8e8f889f8d cabaa9 245447 88feedfafbe1e7e6fb 354556 33455641405a5c5d40 335d5c5756 53242b 9ef9fbead1e9f0ceecf1eefbeceae7dafbedfdecf7eeeaf1ec 1b6f74486f6972757c eb828588879e8f8e98 2e0b1b6c404f5a47584b0b1c1e4d414a4b0b1b6a a2c7ccd4 8eede1e0edeffa 0d606938 f98a8c9b8a8d8b90979e 136366607b 315041415d48 f78782849f ef8e9f9f8396 3040454358 364643455e 7e5b4d3a5b4d3a 641411170c 6802070106 3c5f53525f5d48 214d444f465549 7b171e151c0f13 c5b5b0b6ad 06656e6774456962634772 325f5607665d7a574a 6b080405080a1f 03606c6d606277 335e5243 d2b8bdbbbc 5e3f6f 7f1e4d 02646b6c656770 ea8bd9 18792c 056430 660750 58396f 146c24 cfaefe 9afba8 7e1f4d 452471 87e6b0 d1bcb5e490a3a3b0a8 acd49c 7c044c f692c7 771a134223183f120f c3a2a7a786b1b1acb1 a7c4c6cbc4cad3c0d4cec0 ec9f989e85828b858a95 78101d191c1d0a 2c41584b5f454b 472b222920332f 30515454714059 c9adafb996baa0aea796a5aca7aebda1 6f030a01081b07 e8898c8ca99881 c3a7a5b39cb0aaa4ad 36585941 78191c1c3d0a0a170a ccbfadaaa99fa5aba29ba5b8a49fa5b9ad 1c7d78785d6c75 533735230c203a343d b7d9d8c0 a8dacdd9ddcddbdc 097a7d7b60676e 59353c373e2d31 e3808b8291a08c8786a297 cba7aea5acbfa3 a8c4cdc6cfdcc0 315f5e46 7d1618040e 8be7eee5ecffe3 563461 72141e1d1d00 fb95948c 06756f6168 daa9b3bdb48db3aeb289b3afbb e290879397879196 6210071317071116350b160a310b1703 b7d1ded9d0d2c5 0f696661686a7d 5a37233d2f3b283e 96f1f3e2d7f5f5f9e3f8e2dff8f0f9c5eff8f5 751210013416161a001b013c1b131a260c1b16 e381d2 9ef3f7f0f7ceecf1f9ecfff3 b9d4d0d7d0e9cbd6decbd8d4 a8c9d8d8e1cc 7b1d12151c1e09 f4999d9a9da4869b93869599 741504043d10 771a1e191e2705181005161a 264756566f42 85e4f5f5ece1 badcd3d4dddfc8 86e7f6f6efe2 cdacbdbda4a9 4926392c27202d 741642 d2bda2b7bcbbb6 9bfdf2f5fcfee9 c5aab5a0abaca1 f782999e98999e93 d2b4bbbcb5b7a0 96e3f8fff9f8fff2 c2afa1aaaba6 45232c2b222037 a2cfc1cacbc6 cabfb9afb8a3a4aca5 d8beb1b6bfbdaa dfacaa 7e0b0d1b0c17101811 d2a1aba1a6b7bfbbbcb4bd 03707a7077666e6a6d656c c0aea5b4b7afb2aba9aea6af a0cec5d4d7cfd2cbe9cec6cf 4d2f3f242a253923283e3e c7a5b5aea0afb3a9a2b4b4 f59794818190878c9c9b939a 357754414150474c7c5b535a 7b080f14091a1c1e12151d14 c390b7acb1a2a4a68aada5ac 0b696e6a68646578 d795b2b6b4b8b9a4 3142545d54524554554554494543505f5654 a3f0c6cfc6c0d7c6c7f7c6dbd7f1c2cdc4c6 274b465249444f4857534e484954545e4944 a7ebc6d2c9c4cfe8d7d3cec8c9d4f4dec9c4 0e7967686767606861 91c6f8f7f8d8fff7fe 01766867684d687275 f88f919e91b4918b8c c3a8a6bab0 74121b063115171c 67010e09000215 cbb8af e28d92878c8b86 89faecfddbe8f9fde6fbcae6e7efe0ee 0e617962 e98087809daa889d 18776f74 0167686f666473 c8a7bfa4 86e9f1ea 2a4b4e4e6b5a43654840 3e5f5a5a7f4e57715c54 d9b8bdbd9cababb6ab96bbb3 a2c3c6c6e7d0d0cdd0edc0c8 d5b2b0a186b0a6a6bcbabb9cb1 26404f48414354 90e3e3 34415a5051525d5a5150 abc8c7c2c8c0ffd9cac8c0 1d73724d6f726564 94fdfafde0c4e6fbeced caaeacbaa3ae b5d4c5c5dcd1 722d001302061d00 264f484f52754348554954 eb8d82858c8e99 4b292224 b1d8dfd8c5fcfce1f9dec3df 1876776f 086e61666f6d7a f6919f85 3352575772435a abcfcddbf4c2c5c2df cfa1a0b8 c5abaab2 76101f18111304 71101515300118 a3c7c5d3fcd0cad6c2 81efeef6 eb8a8f8faa9b82 503436200f233925310f3c353e372438 5f383a2b13303c3e2b363031 9df9f8fbf4f3f8cdeff2edf8efe9e4 791e1c0d35161a180d101617 2152544242445252 0d7e786e6e687e7e f99a989595 cbada2a5acaeb9 593829293520 097a607c685d60646c7b 096f60676e6c7b d1b0b5b590a1b8 650103153a0c0b0c11361c0b06 e48a8b93 ceaaa8be8da2a7ada59abcafada5 660f080f123614091e1f".split(" ")
    , t = function e(a, c) {
        c = n[a -= 0],
        void 0 === e.ImcGWb && (e.NxJiNf = function (e) {
            for (var a = "", c = e.length, n = parseInt("0x" + e.substr(0, 2)), t = 2; t < c; t += 2) {
                var f = parseInt("0x" + e.charAt(t) + e.charAt(t + 1));
                a += String.fromCharCode(f ^ n)
            }
            return decodeURIComponent(a)
        }
            ,
            e.PFEpvF = {},
            e.ImcGWb = !0);
        var t = e.PFEpvF[a];
        return void 0 === t ? (void 0 === e.kIuJcP && (e.kIuJcP = !0),
            c = e.NxJiNf(c),
            e.PFEpvF[a] = c) : c = t,
            c
    }
    , wx = {
        getAccountInfoSync: function () {
        },
        getNetworkType: function () {
            return {}
        },
        getSystemInfo: function () {
        },
        getScreenBrightness: function () {
        },
        getStorageInfo: function () {
        },
        getBeacons: function () {
        },
        request: function () {
        },
        getNFCAdapter: function () {
        },
        canIUse: function () {
            return true
        },
        getPublicLibVersion: function () {
            return {
                "appDebug": false,
                "appMD5": "",
                "appVersion": "",
                "libDebug": false,
                "libVersion": "3.2.4",
                "system": "windows",
                "systemVersion": "Win 10"
            }
        },
        startGyroscope: function () {
        },
        getLaunchOptionsSync: function () {
            return {
                "path": "pages/index/index",
                "query": {},
                "scene": 1053,
                "referrerInfo": {},
                "apiCategory": "default"
            }
        },
        getBatteryInfo: function () {
        },
        getSelectedTextRange: function () {
        },
        getSetting: function () {
        },
        getScreenRecordingState: function () {
        },
        getStorageSync: function () {

        }
    };

function guard() {
    function n(e, a) {
        var c = e[0]
            , n = e[1]
            , t = e[2]
            , f = e[3];
        n = i(n = i(n = i(n = i(n = o(n = o(n = o(n = o(n = d(n = d(n = d(n = d(n = r(n = r(n = r(n = r(n, t = r(t, f = r(f, c = r(c, n, t, f, a[0], 7, -680876936), n, t, a[1], 12, -389564586), c, n, a[2], 17, 606105819), f, c, a[3], 22, -1044525330), t = r(t, f = r(f, c = r(c, n, t, f, a[4], 7, -176418897), n, t, a[5], 12, 1200080426), c, n, a[6], 17, -1473231341), f, c, a[7], 22, -45705983), t = r(t, f = r(f, c = r(c, n, t, f, a[8], 7, 1770035416), n, t, a[9], 12, -1958414417), c, n, a[10], 17, -42063), f, c, a[11], 22, -1990404162), t = r(t, f = r(f, c = r(c, n, t, f, a[12], 7, 1804603682), n, t, a[13], 12, -40341101), c, n, a[14], 17, -1502002290), f, c, a[15], 22, 1236535329), t = d(t, f = d(f, c = d(c, n, t, f, a[1], 5, -165796510), n, t, a[6], 9, -1069501632), c, n, a[11], 14, 643717713), f, c, a[0], 20, -373897302), t = d(t, f = d(f, c = d(c, n, t, f, a[5], 5, -701558691), n, t, a[10], 9, 38016083), c, n, a[15], 14, -660478335), f, c, a[4], 20, -405537848), t = d(t, f = d(f, c = d(c, n, t, f, a[9], 5, 568446438), n, t, a[14], 9, -1019803690), c, n, a[3], 14, -187363961), f, c, a[8], 20, 1163531501), t = d(t, f = d(f, c = d(c, n, t, f, a[13], 5, -1444681467), n, t, a[2], 9, -51403784), c, n, a[7], 14, 1735328473), f, c, a[12], 20, -1926607734), t = o(t, f = o(f, c = o(c, n, t, f, a[5], 4, -378558), n, t, a[8], 11, -2022574463), c, n, a[11], 16, 1839030562), f, c, a[14], 23, -35309556), t = o(t, f = o(f, c = o(c, n, t, f, a[1], 4, -1530992060), n, t, a[4], 11, 1272893353), c, n, a[7], 16, -155497632), f, c, a[10], 23, -1094730640), t = o(t, f = o(f, c = o(c, n, t, f, a[13], 4, 681279174), n, t, a[0], 11, -358537222), c, n, a[3], 16, -722521979), f, c, a[6], 23, 76029189), t = o(t, f = o(f, c = o(c, n, t, f, a[9], 4, -640364487), n, t, a[12], 11, -421815835), c, n, a[15], 16, 530742520), f, c, a[2], 23, -995338651), t = i(t, f = i(f, c = i(c, n, t, f, a[0], 6, -198630844), n, t, a[7], 10, 1126891415), c, n, a[14], 15, -1416354905), f, c, a[5], 21, -57434055), t = i(t, f = i(f, c = i(c, n, t, f, a[12], 6, 1700485571), n, t, a[3], 10, -1894986606), c, n, a[10], 15, -1051523), f, c, a[1], 21, -2054922799), t = i(t, f = i(f, c = i(c, n, t, f, a[8], 6, 1873313359), n, t, a[15], 10, -30611744), c, n, a[6], 15, -1560198380), f, c, a[13], 21, 1309151649), t = i(t, f = i(f, c = i(c, n, t, f, a[4], 6, -145523070), n, t, a[11], 10, -1120210379), c, n, a[2], 15, 718787259), f, c, a[9], 21, -343485551),
            e[0] = c + e[0] & 4294967295,
            e[1] = n + e[1] & 4294967295,
            e[2] = t + e[2] & 4294967295,
            e[3] = f + e[3] & 4294967295
    }

    function f(e, a, c, n, t, f) {
        return ((a = (a + e & 4294967295) + (n + f & 4294967295) & 4294967295) << t | a >>> 32 - t) + c & 4294967295
    }

    function r(e, a, c, n, t, r, d) {
        return f(a & c | ~a & n, e, a, t, r, d)
    }

    function d(e, a, c, n, t, r, d) {
        return f(a & n | c & ~n, e, a, t, r, d)
    }

    function o(e, a, c, n, t, r, d) {
        return f(a ^ c ^ n, e, a, t, r, d)
    }

    function i(e, a, c, n, t, r, d) {
        return f(c ^ (a | ~n), e, a, t, r, d)
    }

    function b(e) {
        var a, c = e.length, t = [1732584193, -271733879, -1732584194, 271733878];
        for (a = 64; a <= e.length; a += 64) {
            var f, r = e.subarray(a - 64, a), d = [];
            for (f = 0; 64 > f; f += 4)
                d[f >> 2] = r[f] + (r[f + 1] << 8) + (r[f + 2] << 16) + (r[f + 3] << 24);
            n(t, d)
        }
        for (e = e.subarray(a - 64),
                 f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 a = 0; a < e.length; a++)
            f[a >> 2] |= e[a] << (a % 4 << 3);
        if (f[a >> 2] |= 128 << (a % 4 << 3),
        55 < a)
            for (n(t, f),
                     a = 0; 16 > a; a++)
                f[a] = 0;
        return f[14] = 8 * c,
            n(t, f),
            t
    }

    function s(e) {
        for (var a = 0; a < e.length; a++) {
            for (var c = a, n = e[a], t = "", f = 0; 4 > f; f++)
                t += me[n >> 8 * f + 4 & 15] + me[n >> 8 * f & 15];
            e[c] = t
        }
        return e.join("")
    }

    function u() {
        return "undefined" != typeof mmp
    }

    function h(e) {
        if ((e = !Se && !0 === Ce) && (Te.biocode = 9,
            Se = !0,
            _("1|2|3|4"),
            O(),
            e = je),
            e)
            try {
                clearTimeout(je)
            } catch (e) {
            }
    }

    function l(e, a) {
        var c = "https://portal-portm.meituan.com/horn/v1/modules" + ("prod" === Pe.env ? "/JSGuard_Bioanalysis/" : "/JSGuard_Bioanalysis_Test/") + Pe.env;
        try {
            var n, t = Date.now();
            wx.request({
                url: c,
                method: "GET",
                data: (n = {},
                    n.jsguardApp = e,
                    n.uuid = a,
                    n.jsguardV = Pe.ver,
                    n.os = ke.pid,
                    n.ox = u() ? "2" : "1",
                    n),
                header: {
                    "content-type": "application/json"
                },
                success: function (e) {
                    try {
                        var a = 0;
                        if (200 === e.statusCode) {
                            var c = e.data.raptor_sample;
                            ge && ge.updatePatioRule && ge.updatePatioRule(c);
                            var n = e.data.jsguard_dynamic_bio_keys;
                            if (n) {
                                var f = JSON.parse(n) || n;
                                f ? Object.assign(ke.config, f) : a = 9402
                            } else
                                a = 9401
                        }
                        u() || p(),
                        ge && ge.addApi("dfp_bio_horn", e.statusCode, a, Date.now() - t, .1)
                    } catch (e) {

                        ge && ge.addApi("dfp_bio_horn", 200, 9403, Date.now() - t)
                    }
                },
                fail: function (e) {
                    e = e.errno ? e.errno : 200,
                    ge && ge.addApi("dfp_bio_horn", e, 9405, Date.now() - t),
                    u() || p()
                }
            })
        } catch (e) {

            ge && ge.addError("initHorn", e)
        }
    }

    function p() {
        try {
            wx.getPrivacySetting ? wx.getPrivacySetting({
                success: function (e) {
                    e.needAuthorization || g()
                }
            }) : g()
        } catch (e) {
        }
    }

    function g() {
        1 == ke.config.valid && 0 <= ke.config.start_delay && 0 < ke.config.duration && setTimeout((function () {
                Se = !1,
                    setTimeout((function () {
                            S()
                        }
                    ), 1e3 * ke.config.click_delay)
            }
        ), 1e3 * ke.config.start_delay)
    }

    function v(e) {
        var a, c = Je.mp_hook, n = [];
        for (a in e)
            "function" != typeof e[a] || c[a] || n.push(a);
        for (c = n.length,
                 a = 0; a < c; a++)
            m(e, n[a])
    }

    function y(e) {
        return null != e && "[object Object]" == toString.call(e)
    }

    function m(e, a) {
        var c = e[a];
        e[a] = function () {
            try {
                var e = c.apply(this, arguments)
                    , a = arguments[0];
                return y(a) && (1 != ke.config.valid || Se || w(a)),
                    e
            } catch (e) {

                return c.apply(this, arguments)
            }
        }
    }

    function w(e) {
        try {
            var a = e.type
                , c = {};
            if (a) {
                var n = D();
                if (Te.click.length > ke.config.max_click)
                    return void (Se = !0);
                var t = e.touches || []
                    , f = e.target || {};
                if (0 < t.length && Je.mp_taps[a]) {
                    S();
                    var r = x(d = t[0], n, a, f);
                    c.start = r,
                        c.trail = [],
                        c.end = [0, 0, 0, 0, 0],
                        A(c)
                }
                if (Je.mp_touchs[a]) {
                    S();
                    var d = t[0];
                    e = n - xe,
                        xe = n,
                        e <= ke.config.groupTime ? ke.touch.trail.length <= ke.config.max_trail && (r = x(d, e, a, f),
                            ke.touch.trail.push(r)) : (C(),
                            r = x(d, n, a, f),
                            ke.touch.start = r,
                            ke.touch.trail = [])
                }
            }
        } catch (e) {
        }
    }

    function x(e, a, c, n) {
        return c = "tap longpress longtap touchstart touchmove touchend touchcancel".split(" ").indexOf(c),
            e ? (n = n.id || "",
                [N(e.clientX), N(e.clientY), N(e.force), a, c, n]) : [0, 0, 0, a, c, ""]
    }

    function S() {
        var e;
        !1 === Ce && (Ce = !0,
            function () {
                try {
                    var e = ke.config.type || "";
                    0 <= e.indexOf("1") && wx.onAccelerometerChange && (wx.startAccelerometer(I()),
                        wx.onAccelerometerChange(j)),
                    0 <= e.indexOf("2") && wx.onCompassChange && (wx.startCompass({
                        success: function () {
                        },
                        fail: function () {
                        }
                    }),
                        wx.onCompassChange(T)),
                    0 <= e.indexOf("3") && wx.onDeviceMotionChange && (wx.startDeviceMotionListening(I()),
                        wx.onDeviceMotionChange(k)),
                    0 <= e.indexOf("4") && wx.onGyroscopeChange && (wx.startGyroscope(I()),
                        wx.onGyroscopeChange(J))
                } catch (e) {

                    ge && ge.addError("startSensor", e)
                }
            }(),
            e = ke.config.duration || 60,
            je = setTimeout((function () {
                    9 != Te.biocode && (Se = !0,
                        _("1|2|3|4"),
                        O())
                }
            ), 1e3 * e))
    }

    function C() {
        var e = ke.touch.trail.length
            , a = {};
        if (e || ke.touch.start.length) {
            if (a.start = ke.touch.start,
                e) {
                var c = ke.touch.trail
                    , n = ke.touch.trail[e - 1];
                c.length = e - 1,
                    a.trail = c,
                    a.end = n
            } else
                a.trail = [],
                    a.end = [0, 0, 0, 0, 0];
            A(a)
        }
    }

    function A(e) {
        Te.click.length > ke.config.max_click ? Se = !0 : Te.click.push(e)
    }

    function O(e) {
        C(),
            e = {},
            Object.assign(e, Te),
            e.click = JSON.stringify(Te.click),
            e.sensor = JSON.stringify(Te.sensor),
            Te.click = [],
            ke.touch.start = [],
            ke.touch.trail = [],
            Te.sensor = {
                acc: [],
                com: [],
                mot: [],
                gyro: []
            },
            De = Ie = _e = Oe = 0;
        var a = "";
        if ("undefined" != typeof getCurrentPages) {
            var c = getCurrentPages();
            try {
                c && (a = 0 === c.length ? "" : c[c.length - 1].route || "")
            } catch (e) {
            }
        }
        e.url = a,
        pe && (pe(e, ++Ne),
        1 == ke.config.valid && 0 < ke.config.interval_in_min && 0 <= ke.config.max_count && !(1 >= Ne) && Ne < ke.config.max_count + 2 && setTimeout((function () {
                Ce = Se = !1,
                    Te.biocode = 0,
                    setTimeout((function () {
                            S()
                        }
                    ), 1e3 * ke.config.click_delay)
            }
        ), 6e4 * ke.config.interval_in_min))
    }

    function _(e) {
        try {
            0 <= e.indexOf("1") && wx.offAccelerometerChange && wx.offAccelerometerChange(j),
            0 <= e.indexOf("2") && wx.offCompassChange && wx.offCompassChange(T),
            0 <= e.indexOf("3") && wx.offDeviceMotionChange && wx.offDeviceMotionChange(k),
            0 <= e.indexOf("4") && wx.offGyroscopeChange && wx.offGyroscopeChange(J)
        } catch (e) {
        }
    }

    function I() {
        var e = ke.config.freq;
        e = 1 === e ? "game" : 2 === e ? "ui" : "normal";
        var a = {
            success: function () {
            },
            fail: function () {
            }
        };
        return a.interval = e,
            a
    }

    function D() {
        return (new Date).valueOf()
    }

    function N(e) {
        var a = 0;
        return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e)) ? a = Number(e).toFixed(3) : "[object String]" == toString.call(e) && (a = e),
            a
    }

    function j(e) {
        try {
            if (Te.sensor.acc.length < ke.config.max_sensor) {
                var a = D()
                    , c = a - Oe;
                Oe = a,
                    Te.sensor.acc.push([c, N(e.x), N(e.y), N(e.z)])
            } else
                _("1")
        } catch (e) {
        }
    }

    function T(e) {
        try {
            if (Te.sensor.com.length < ke.config.max_sensor) {
                var a = D()
                    , c = a - _e;
                _e = a,
                    Te.sensor.com.push([c, N(e.direction), N(e.accuracy)])
            } else
                _("2")
        } catch (e) {
        }
    }

    function k(e) {
        try {
            if (Te.sensor.mot.length < ke.config.max_sensor) {
                var a = D()
                    , c = a - Ie;
                Ie = a,
                    Te.sensor.mot.push([c, N(e.alpha), N(e.beta), N(e.gamma)])
            } else
                _("3")
        } catch (e) {
        }
    }

    function J(e) {
        try {
            if (Te.sensor.gyro.length < ke.config.max_sensor) {
                var a = D()
                    , c = a - De;
                De = a,
                    Te.sensor.gyro.push([c, N(e.x), N(e.y), N(e.z)])
            } else
                _("4")
        } catch (e) {
        }
    }

    function P(e, a) {
        try {
            var c = "";
            a && "[object String]" == toString.call(a) ? c = a : a.stack && "[object String]" == toString.call(a.stack) && (c = a.stack),
            ye && ye.error.pushError({
                sec_category: e,
                content: c,
                category: "jsError",
                level: "warn"
            }, !0)
        } catch (e) {
        }
    }

    function M(e, a, c, n, t) {
        try {
            var f = Le[e];
            (void 0 === f ? L(t) : f) && ye && ye.resource.addApi({
                name: e,
                networkCode: a,
                statusCode: c,
                responseTime: n
            })
        } catch (e) {
        }
    }

    function R(e, a) {
        void 0 === a && (a = !1);
        var guardSample = '{"dfp_initSync":10,"dfp_init":10,"dfp_bio":10,"dfp_siua":10000,"dfp_finger":100,"dfp_dfpid":10,"dfp_sign":1000,"dfp_siua_length":10000,"dfp_finger_length":100,"dfp_sign_length":1000,"dfp_req_length":10,"dfp_bio_req_length":10,"dfp_req":10,"dfp_bio_horn":10,"dfp_bio_req":10,"c_sec_params_time":1000,"c_sec_yoda_check":1,"c_sec_auth_success":1,"c_sec_auth_fail":1}'
        try {
            if (a && (e = guardSample),
                e)
                for (var c in !a && wx.setStorage({
                    key: "guardSample",
                    data: e
                }),
                    e = JSON.parse(e) || e)
                    if (e.hasOwnProperty(c)) {
                        var n = e[c]
                            , t = 0 < n && L(1 / n);
                        Le[c] = t
                    }
        } catch (e) {
        }
    }

    function L(e) {
        void 0 === e && (e = 1);
        try {
            return 0,
                a = e = 1 / e,
            Math.floor(Math.random() * (a - 0 + 1)) + 0 + 1 == e || 1 === e
        } catch (e) {
            return !0
        }
        var a
    }

    function E(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var c = 0, n = Array(a); c < a; c++)
            n[c] = e[c];
        return n
    }

    function U(e, a) {
        var c;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (c = function (e, a) {
                if (e) {
                    if ("string" == typeof e)
                        return E(e, a);
                    var c = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === c && e.constructor && (c = e.constructor.name),
                        "Map" === c || "Set" === c ? Array.from(e) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? E(e, a) : void 0
                }
            }(e)) || a && e && "number" == typeof e.length) {
                c && (e = c);
                var n = 0;
                return function () {
                    return n >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        return (c = e[Symbol.iterator]()).next.bind(c)
    }

    function B(e, a) {
        return e(a = {
            exports: {}
        }, a[t(2)]),
            a[t(2)]
    }

    function F(e, a) {
        void 0 === a && (a = {});
        var c = Sa()
            , n = e.length;
        c.p(e);
        var t = (e = Ca(e, a, 10 + (a.filename && a.filename.length + 1 || 0), 8)).length
            , f = a;
        if (a = f.filename,
            e[0] = 31,
            e[1] = 139,
            e[2] = 8,
            e[8] = 2 > f.level ? 4 : 9 == f.level ? 2 : 0,
            e[9] = 3,
        0 != f.mtime && Aa(e, 4, Math.floor(new Date(f.mtime || Date.now()) / 1e3)),
            a)
            for (e[3] = 8,
                     f = 0; f <= a.length; ++f)
                e[f + 10] = a.charCodeAt(f);
        return Aa(e, t - 8, c.d()),
            Aa(e, t - 4, n),
            e
    }

    function z(e) {
        function a() {
            for (var e, a = [t(100), t(101)], c = [], n = 0; n < a[t(84)]; n++) {
                e = "";
                for (var f = a[n], r = f[t(84)], d = parseInt(t(104) + f[t(105)](0, 2)), o = 2; o < r; o += 2) {
                    var i = parseInt(t(104) + f[t(107)](o) + f[t(107)](o + 1));
                    e += String[t(109)](i ^ d)
                }
                c[t(87)](e)
            }
            return c
        }

        var c = Fe[t(111)][t(112)][t(113)](a()[0])
            , n = Fe[t(111)][t(112)][t(113)](a()[1]);
        return c = new (Fe[t(117)][t(118)])(c),
            e = Fe[t(119)][t(120)][t(121)](c, e, n),
            Fe[t(111)][t(123)][t(124)](e)
    }

    function G(e, a) {
        return e && (a.id && (e.id || (e.id = {}),
            a.id = Object.assign(e.id, a.id)),
            a = Object.assign(e, a)),
            a
    }

    function q(e, a) {
        var c = {};
        try {
            Da || (c = wx.getStorageSync(Ra[t(133)])),
            c.id && (c = {
                id: c.id
            }),
                Da = !0
        } catch (e) {

            try {
                _a && _a.addError("getFpCache", e)
            } catch (e) {
            }
        }
        Ia = e = G(G(c, Ia), e),
        0 < Object.keys(e).length && a && wx.setStorage({
            key: Ra[t(133)],
            data: e
        })
    }

    function W() {
        try {
            qa--,
                wx[t(225)](H)
        } catch (e) {
        }
    }

    function H(e) {
        try {
            wx[t(226)](H),
            Ea[t(11)][t(25)] || (Ea[t(11)][t(25)] = []),
            20 < Ea[t(11)][t(25)][t(84)] && Ea[t(11)][t(25)][t(235)](),
                Ea[t(11)][t(25)][t(87)](Number(e[t(239)])[t(240)](3)),
            0 === qa && (setTimeout(W, 5e3),
                qa++)
        } catch (e) {
        }
    }

    function V() {
        try {
            Wa--,
                wx.onAccelerometerChange(Z)
        } catch (e) {
        }
    }

    function Z(e) {
        try {
            wx[t(241)](Z),
            Ea[t(11)][t(15)] || (Ea[t(11)][t(15)] = []),
            20 < Ea[t(11)][t(15)][t(84)] && Ea[t(11)][t(15)][t(235)](),
                Ea[t(11)][t(15)][t(87)]({
                    x: Number(e.x)[t(240)](3),
                    y: Number(e.y)[t(240)](3),
                    z: Number(e.z)[t(240)](3)
                }),
            0 === Wa && (setTimeout(V, 5e3),
                Wa++)
        } catch (e) {
        }
    }

    function X() {
        try {
            Ha--,
                wx[t(257)](Y)
        } catch (e) {
        }
    }

    function Y(e) {
        try {
            wx[t(258)](Y),
            Ea[t(11)][t(260)] || (Ea[t(11)][t(260)] = []),
            10 < Ea[t(11)][t(260)][t(84)] && Ea[t(11)][t(260)][t(235)](),
                Ea[t(11)][t(260)][t(87)]({
                    x: Number(e.x)[t(240)](6),
                    y: Number(e.y)[t(240)](6),
                    z: Number(e.z)[t(240)](6)
                }),
            0 === Ha && (setTimeout(X, 5e3),
                Ha++)
        } catch (e) {
        }
    }

    function K() {
        try {
            var e = Math.round((new Date).getTime() / 1e3);
            Ea.timestamp = e
        } catch (e) {

            Ea.timestamp = ""
        }
    }

    function Q(e) {
        "start" != e.state && "on" != e.state || (e = (new Date).valueOf() + za(),
            Ea.system.screenRecord.push(e),
        5 < Ea.system.screenRecord.length && Ea.system.screenRecord.shift())
    }

    function $(a, c, n) {
        if (void 0 === n && (n = !1),
            n)
            for (var f in c)
                void 0 === (n = c[f]) ? a[t(87)]([fe(f), t(1)]) : null === n ? a[t(87)]([fe(f), t(387)]) : t(0) == e(n) ? a[t(87)]([fe(f), fe(JSON[t(74)](c[f]))]) : a[t(87)]([fe(f), fe(c[f])]);
        else
            c[t(391)]((function (e) {
                    a[t(87)]([fe(e[0]), fe(e[1])])
                }
            ))
    }

    function ee(e, a) {
        void 0 === a && (a = !1);
        var c = [];
        e = e[t(393)]("&");
        for (var n = 0; n < e[t(84)]; n++) {
            var f = e[n][t(393)]("=");
            if (!(1 > f[t(84)])) {
                var r = f[0];
                r = r[t(397)](/\+/g, " "),
                    1 === f[t(84)] ? a ? c[t(87)]([decodeURIComponent(r), t(1)]) : c[t(87)]([decodeURIComponent(r), ""]) : (f = f[1][t(397)](/\+/g, " "),
                        c[t(87)]([decodeURIComponent(r), decodeURIComponent(f)]))
            }
        }
        return c
    }

    function ae(e) {
        e = encodeURIComponent(e);
        for (var a = [], c = 0; c < e[t(84)]; c++) {
            var n = e[t(107)](c);
            "%" === n ? (n = e[t(107)](c + 1) + e[t(107)](c + 2),
                n = parseInt(n, 16),
                a[t(87)](n),
                c += 2) : a[t(87)](n[t(144)](0))
        }
        return a
    }

    function ce(e) {
        return 16200 < e[t(84)] && (e = e[t(163)](0, 16200)),
            e
    }

    function ne(e) {
        for (var a = [], c = 0; c < e[t(84)]; c += 2) {
            var n = e[t(107)](c) + e[t(107)](c + 1);
            n = parseInt(n, 16),
                a[t(87)](n)
        }
        return a
    }

    function te(e) {
        var a = [];
        return a[0] = e >>> 24 & 255,
            a[1] = e >>> 16 & 255,
            a[2] = e >>> 8 & 255,
            a[3] = 255 & e,
            a
    }

    function fe(e) {
        return encodeURIComponent(e)[t(397)](/!/g, t(418))[t(397)](/'/g, t(420))[t(397)](/\(/g, t(422))[t(397)](/\)/g, t(424))[t(397)](/\*/g, t(426))
    }

    function re(e, a, c) {
        for (var n, f = [], r = a; r < c; r += 3)
            a = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]),
                f[t(87)](nc[(n = a) >> 18 & 63] + nc[n >> 12 & 63] + nc[n >> 6 & 63] + nc[63 & n]);
        return f[t(428)]("")
    }

    function de(e, a) {
        return e[0] < a[0] ? -1 : e[0] > a[0] ? 1 : e[1] < a[1] ? -1 : e[1] > a[1] ? 1 : 0
    }

    function oe(e, a) {
        for (var c = !1, n = 0, f = Object[t(431)](e); n < f[t(84)]; n++) {
            var r = f[n];
            if (t(433) === r[t(434)]() && (c = !0,
            e[r] && e[r][t(434)]()[t(436)](a)))
                return !0
        }
        return a === bc && !c
    }

    function ie(a, n) {
        void 0 === n && (n = !0);
        try {
            var f = Date[t(142)]()
                , r = 0;
            switch (t(1) != ("undefined" == typeof mmp_env ? "undefined" : e(mmp_env)) ? t(439) === mmp_env && (r = 1) : t(1) != ("undefined" == typeof mmp ? "undefined" : e(mmp)) && (r = 2),
                r) {
                case 2:
                    a[t(441)] = !0,
                        a[t(442)] = !0;
                    break;
                default:
                    a = function (a, n) {
                        if (void 0 === n && (n = !1),
                            dc += 1,
                            $a[t(443)] = dc,
                            a) {
                            var r = a[t(444)] || {}
                                , d = (a[t(445)] || t(446))[t(447)]()
                                , o = t(446) !== d && oe(r, ic)
                                , i = (t(446) !== d && oe(r, bc),
                            (new Date)[t(352)]() + ac[t(5)][t(452)]());
                            r = a[t(453)] || "";
                            var b = a[t(275)];
                            a[t(444)] && t(0) == e(a[t(444)]) || (a[t(444)] = {});
                            var s = "/"
                                , u = [];
                            (r = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/[t(459)](r)) && (r[5] && (s += r[5]),
                            r[6] && (u = ee(r[6])));
                            var h = []
                                , l = ""
                                , p = [];
                            if (t(446) === d)
                                if (t(0) == e(b) && 0 < Object[t(431)](b)[t(84)]) {
                                    if ($(h, b, !0),
                                    r && r[6] && 0 < u[t(84)]) {
                                        var g = {};
                                        (u = ee(r[6], !0))[t(391)]((function (e) {
                                                b[t(465)](e[0]) || (g[e[0]] = e[1])
                                            }
                                        )),
                                            $(h, g, !0)
                                    }
                                } else
                                    $(h, u);
                            else if ($(h, u),
                                o)
                                if (t(91) == e(b))
                                    l = b;
                                else if (t(0) == e(b)) {
                                    !function (e, a) {
                                        for (var c in a)
                                            e[t(87)]([encodeURIComponent(c), encodeURIComponent(a[c])])
                                    }(p, b);
                                    var v = [];
                                    p[t(391)]((function (e) {
                                            v[t(87)](e[0] + "=" + e[1])
                                        }
                                    )),
                                        l = v[t(428)]("&")
                                }
                            var y = "";
                            n && (y = ec),
                                [][t(160)](h),
                                h[t(473)](de);
                            var m = [];
                            h[t(391)]((function (e) {
                                    m[t(87)](e[0] + "=" + e[1])
                                }
                            ));
                            var w = ae(d + " " + s + " " + m[t(428)]("&"));
                            if (o || t(446) === d || null == b || (t(91) == e(b) ? w[t(87)][t(480)](w, ce(ae(b))) : w[t(87)][t(480)](w, ce(ae(JSON[t(74)](b))))),
                            0 < l[t(84)] && w[t(87)][t(480)](w, ce(ae(l))),
                                n = "",
                            t(1) != ("undefined" == typeof getCurrentPages ? "undefined" : e(getCurrentPages))) {
                                d = getCurrentPages();
                                try {
                                    d && (n = 0 === d[t(84)] ? "" : d[d[t(84)] - 1][t(489)] || "")
                                } catch (e) {
                                }
                            }
                            $a[t(490)] = n,
                                n = "",
                            void 0 !== (d = function () {
                                for (var a, n = 183; ;)
                                    switch (c[n++]) {
                                        case 0:
                                            return;
                                        case 1:
                                            try {
                                                var f = 0;
                                                try {
                                                    cc[t(491)] = WeixinJSBridge
                                                } catch (e) {
                                                }
                                                try {
                                                    cc[t(492)] = __wxConfig
                                                } catch (e) {
                                                }
                                                try {
                                                    cc[t(493)] = undefined,
                                                        cc[t(494)] = wx
                                                } catch (e) {
                                                }
                                                if (cc.e = Error,
                                                void 0 !== cc[t(131)])
                                                    f = cc[t(131)];
                                                else {
                                                    var r = Object[t(497)](wx, t(498));
                                                    r && r[t(499)] && (f = 1);
                                                    var d = 0;
                                                    window && (d = 1);
                                                    var o = 0;
                                                    t(1) != ("undefined" == typeof globalThis ? "undefined" : e(globalThis)) && globalThis[t(501)] && (o = 1);
                                                    var b = 0;
                                                    if (cc.e) {
                                                        var s = new cc.e;
                                                        s && s[t(313)] && !s[t(313)][t(504)](t(505)) && !s[t(313)][t(504)](t(508)) && (b = 1),
                                                        cc.e[t(162)]()[t(504)](t(511)) || (b = 1)
                                                    }
                                                    var u = 0;
                                                    cc[t(491)] || (u = 1);
                                                    var h = 0;
                                                    (!cc[t(492)] || cc[t(492)] && !0 === cc[t(492)][t(516)]) && (h = 1);
                                                    var l = 0;
                                                    void 0 !== cc[t(493)] && null != cc[t(493)][t(519)] && null != cc[t(493)][t(519)][t(522)] && (l = 1),
                                                    cc[t(494)] === wx && (l = 1),
                                                        f |= (Object[t(497)][t(162)]()[t(504)](t(511)) ? 0 : 1) << 7 | l << 2 | h << 5 | b << 4 | d << 3 | u << 6 | o << 1,
                                                        cc[t(131)] = f
                                                }
                                                var p = te(d = 4294967295 & i)
                                                    , g = new Uint8Array(ae(y)[t(160)](p))
                                                    , v = we[t(157)](g)
                                                    , m = ne(v[t(531)](0, 15));
                                                m[7] = 255 & (f ^ sc(p)),
                                                    m[t(87)][t(480)](m, p),
                                                    m[t(87)][t(480)](m, te(4294967295 & sc(m)));
                                                var x = function (e) {
                                                    for (var a, n = [], f = Function.prototype.call, r = 0; ;)
                                                        switch (c[r++]) {
                                                            case 0:
                                                                var d = n.pop();
                                                                continue;
                                                            case 1:
                                                                n.push(d);
                                                                continue;
                                                            case 2:
                                                                n.length -= 4;
                                                                continue;
                                                            case 3:
                                                                n.push(c[r++]);
                                                                continue;
                                                            case 4:
                                                                var o = n.pop();
                                                                continue;
                                                            case 5:
                                                                n.pop();
                                                                continue;
                                                            case 6:
                                                                n[n.length - 2] = n[n.length - 2][n[n.length - 1]];
                                                                continue;
                                                            case 7:
                                                                n[n.length - 3] = f.call(n[n.length - 3], n[n.length - 2], n[n.length - 1]);
                                                                continue;
                                                            case 10:
                                                                !n.pop() && (r += 25);
                                                                continue;
                                                            case 12:
                                                                n.length -= 2;
                                                                continue;
                                                            case 13:
                                                                n.push(null);
                                                                continue;
                                                            case 16:
                                                                n[n.length - 5] = f.call(n[n.length - 5], n[n.length - 4], n[n.length - 3], n[n.length - 2], n[n.length - 1]);
                                                                continue;
                                                            case 17:
                                                                n.push(o);
                                                                continue;
                                                            case 18:
                                                                b += n[n.length - 1];
                                                                continue;
                                                            case 19:
                                                                var i = n.pop();
                                                                continue;
                                                            case 20:
                                                                n.push(b + 16383 > o ? o : b + 16383);
                                                                continue;
                                                            case 22:
                                                                return;
                                                            case 24:
                                                                n.push(i);
                                                                continue;
                                                            case 27:
                                                                n.push(b);
                                                                continue;
                                                            case 29:
                                                                var b = n.pop();
                                                                continue;
                                                            case 31:
                                                                n.push(t);
                                                                continue;
                                                            case 34:
                                                                n[n.length - 2] = n[n.length - 2] < n[n.length - 1];
                                                                continue;
                                                            case 35:
                                                                n[n.length - 2] -= n[n.length - 1];
                                                                continue;
                                                            case 36:
                                                                n[n.length - 2] %= n[n.length - 1];
                                                                continue;
                                                            case 37:
                                                                n[n.length - 0] = [];
                                                                continue;
                                                            case 39:
                                                                return n.pop();
                                                            case 40:
                                                                n.push(e);
                                                                continue;
                                                            case 42:
                                                                n.push((1 === i ? (a = e[d - 1],
                                                                    s[t(87)](nc[a >> 2] + nc[a << 4 & 63] + t(538))) : 2 === i && (a = (e[d - 2] << 8) + e[d - 1],
                                                                    s[t(87)](nc[a >> 10] + nc[a >> 4 & 63] + nc[a << 2 & 63] + "=")),
                                                                    s[t(428)]("")));
                                                                continue;
                                                            case 44:
                                                                n.push(re);
                                                                continue;
                                                            case 48:
                                                                n.push(s);
                                                                continue;
                                                            case 51:
                                                                var s = n.pop();
                                                                continue;
                                                            case 55:
                                                                r -= 30
                                                        }
                                                }(m[t(160)](function (e, a) {
                                                    _a = JSON.parse(a)
                                                    a = '{"b7":1716980785,"b1":{"miniProgram":{"appId":"wxfd2e340553ce980d","envVersion":"release","version":"10.22.30"}},"b8":1,"b2":"pages/index/index"}'
                                                    a.replace('1716980785', _a)
                                                    for (var n, f, r = [], d = Function.prototype.call, o = 93; ;)
                                                        switch (c[o++]) {
                                                            case 0:
                                                                r.push(b);
                                                                continue;
                                                            case 1:
                                                                var i = r[r.length - 1];
                                                                continue;
                                                            case 2:
                                                                r.push(n);
                                                                continue;
                                                            case 3:
                                                                b[i] = r[r.length - 1];
                                                                continue;
                                                            case 5:
                                                                r.push((function (e, a, n) {
                                                                        for (var f, r, d = [], o = Function.prototype.call, i = 59; ;)
                                                                            switch (c[i++]) {
                                                                                case 0:
                                                                                    d.push(n);
                                                                                    continue;
                                                                                case 1:
                                                                                    return;
                                                                                case 2:
                                                                                    d.push(u);
                                                                                    continue;
                                                                                case 3:
                                                                                    d.push(null);
                                                                                    continue;
                                                                                case 4:
                                                                                    d.pop();
                                                                                    continue;
                                                                                case 5:
                                                                                    d.push((r = (r + e[f = (f + 1) % 256]) % 256,
                                                                                        a = e[f],
                                                                                        e[f] = e[r],
                                                                                        e[r] = a,
                                                                                        s[t(87)](n[t(144)](b) ^ e[(e[f] + e[r]) % 256])));
                                                                                    continue;
                                                                                case 6:
                                                                                    var b = d.pop();
                                                                                    continue;
                                                                                case 8:
                                                                                    d[d.length - 3] = o.call(d[d.length - 3], d[d.length - 2], d[d.length - 1]);
                                                                                    continue;
                                                                                case 9:
                                                                                    d.push(s);
                                                                                    continue;
                                                                                case 10:
                                                                                    d.push(c[i++]);
                                                                                    continue;
                                                                                case 12:
                                                                                    d.length -= 2;
                                                                                    continue;
                                                                                case 13:
                                                                                    f = d.pop();
                                                                                    continue;
                                                                                case 14:
                                                                                    r = d.pop();
                                                                                    continue;
                                                                                case 16:
                                                                                    d.push(b);
                                                                                    continue;
                                                                                case 19:
                                                                                    d.push(t);
                                                                                    continue;
                                                                                case 20:
                                                                                    return d.pop();
                                                                                case 21:
                                                                                    var s = d.pop();
                                                                                    continue;
                                                                                case 23:
                                                                                    var u = d.pop();
                                                                                    continue;
                                                                                case 24:
                                                                                    !d.pop() && (i += 5);
                                                                                    continue;
                                                                                case 26:
                                                                                    d.push(b++);
                                                                                    continue;
                                                                                case 28:
                                                                                    i -= 10;
                                                                                    continue;
                                                                                case 29:
                                                                                    d[d.length - 2] = d[d.length - 2] < d[d.length - 1];
                                                                                    continue;
                                                                                case 31:
                                                                                    d[d.length - 0] = [];
                                                                                    continue;
                                                                                case 32:
                                                                                    d[d.length - 2] = d[d.length - 2][d[d.length - 1]]
                                                                            }
                                                                    }
                                                                ));
                                                                continue;
                                                            case 6:
                                                                r.push((f = (f + b[i] + e[i % e[t(84)]] + 31) % 256,
                                                                    n = b[i],
                                                                    b[i] = b[f],
                                                                    b[f] = n));
                                                                continue;
                                                            case 7:
                                                                return r.pop();
                                                            case 8:
                                                                r.pop();
                                                                continue;
                                                            case 9:
                                                                o -= 12;
                                                                continue;
                                                            case 11:
                                                                r[r.length - 2] = r[r.length - 2] < r[r.length - 1];
                                                                continue;
                                                            case 13:
                                                                r.push(i);
                                                                continue;
                                                            case 14:
                                                                r[r.length - 5] = d.call(r[r.length - 5], r[r.length - 4], r[r.length - 3], r[r.length - 2], r[r.length - 1]);
                                                                continue;
                                                            case 16:
                                                                r[r.length - 0] = [];
                                                                continue;
                                                            case 17:
                                                                r.push(i++);
                                                                continue;
                                                            case 18:
                                                                !r.pop() && (o += 6);
                                                                continue;
                                                            case 20:
                                                                r.push(c[o++]);
                                                                continue;
                                                            case 21:
                                                                r.length -= 4;
                                                                continue;
                                                            case 22:
                                                                !r.pop() && (o += 5);
                                                                continue;
                                                            case 23:
                                                                f = r.pop();
                                                                continue;
                                                            case 31:
                                                                r.push(a);
                                                                continue;
                                                            case 32:
                                                                o -= 11;
                                                                continue;
                                                            case 33:
                                                                var b = r.pop();
                                                                continue;
                                                            case 35:
                                                                return;
                                                            case 40:
                                                                r.push(null);
                                                                continue;
                                                            case 43:
                                                                i = r.pop()
                                                        }
                                                }(m, JSON[t(74)]($a))))
                                                    , S = se(w, i)
                                                    , C = te(S)
                                                    , A = se(new Uint8Array(ae(x)), i)
                                                    , O = te(A)
                                                    , _ = ne(we[t(546)]([S, A, S ^ d, S ^ A ^ d]))
                                                    , I = (void 0 === (a = C[t(160)](O)[t(160)](_)) && (a = []),
                                                    a[t(549)]((function (e) {
                                                            for (var a = [], n = 137; ;)
                                                                switch (c[n++]) {
                                                                    case 0:
                                                                        a.push("3");
                                                                        continue;
                                                                    case 1:
                                                                        a.pop();
                                                                        continue;
                                                                    case 2:
                                                                        a.push("b");
                                                                        continue;
                                                                    case 3:
                                                                        a[a.length - 2] += a[a.length - 1];
                                                                        continue;
                                                                    case 4:
                                                                        a[a.length - 16] = [a[a.length - 16], a[a.length - 15], a[a.length - 14], a[a.length - 13], a[a.length - 12], a[a.length - 11], a[a.length - 10], a[a.length - 9], a[a.length - 8], a[a.length - 7], a[a.length - 6], a[a.length - 5], a[a.length - 4], a[a.length - 3], a[a.length - 2], a[a.length - 1]];
                                                                        continue;
                                                                    case 7:
                                                                        a.push(c[n++]);
                                                                        continue;
                                                                    case 8:
                                                                        a[a.length - 2] &= a[a.length - 1];
                                                                        continue;
                                                                    case 9:
                                                                        a.push("d");
                                                                        continue;
                                                                    case 10:
                                                                        a.push(t);
                                                                        continue;
                                                                    case 12:
                                                                        a.push("");
                                                                        continue;
                                                                    case 13:
                                                                        var t = a[a.length - 1];
                                                                        continue;
                                                                    case 14:
                                                                        a.push("6");
                                                                        continue;
                                                                    case 16:
                                                                        a.push("0");
                                                                        continue;
                                                                    case 17:
                                                                        a.push("8");
                                                                        continue;
                                                                    case 19:
                                                                        a.push("7");
                                                                        continue;
                                                                    case 22:
                                                                        a.push(e);
                                                                        continue;
                                                                    case 23:
                                                                        a.push("4");
                                                                        continue;
                                                                    case 24:
                                                                        a.push("1");
                                                                        continue;
                                                                    case 25:
                                                                        a.push("f");
                                                                        continue;
                                                                    case 26:
                                                                        a.push("c");
                                                                        continue;
                                                                    case 27:
                                                                        a[a.length - 2] >>>= a[a.length - 1];
                                                                        continue;
                                                                    case 28:
                                                                        a.push(f);
                                                                        continue;
                                                                    case 31:
                                                                        a[a.length - 2] = a[a.length - 2][a[a.length - 1]];
                                                                        continue;
                                                                    case 32:
                                                                        a.push("e");
                                                                        continue;
                                                                    case 33:
                                                                        return;
                                                                    case 34:
                                                                        a.push("9");
                                                                        continue;
                                                                    case 35:
                                                                        a.length -= 15;
                                                                        continue;
                                                                    case 37:
                                                                        a.push("a");
                                                                        continue;
                                                                    case 40:
                                                                        a.push("5");
                                                                        continue;
                                                                    case 43:
                                                                        return a.pop();
                                                                    case 44:
                                                                        var f = a[a.length - 1];
                                                                        continue;
                                                                    case 45:
                                                                        a.push("2")
                                                                }
                                                        }
                                                    ))[t(428)](""));
                                                (f = {})[t(551)] = tc,
                                                    f[t(552)] = i,
                                                fc || (fc = ac[t(5)].d()),
                                                    f[t(554)] = fc,
                                                    f[t(555)] = I,
                                                    f[t(556)] = x,
                                                    f[t(557)] = y,
                                                    f[t(558)] = rc,
                                                    f[t(559)] = 3,
                                                    o = A >>> 0;
                                                var D = f[t(551)] + f[t(552)] + f[t(554)] + f[t(555)] + o + v + f[t(558)]
                                                    , N = we[t(565)](new Uint8Array(ae(D)))
                                                    , j = d << f[t(559)] | d << 32 - f[t(559)];
                                                return N[0] ^= j,
                                                    N[1] ^= o,
                                                    N[2] = N[2] ^ o ^ j,
                                                    N[3] ^= N[0],
                                                    f[t(568)] = we[t(546)](N),
                                                    f
                                            } catch (e) {

                                                try {
                                                    Ue && Ue[t(223)](t(571), e)
                                                } catch (e) {
                                                }
                                            }
                                    }
                            }()) && (n = JSON[t(74)](d),
                                a[t(444)][t(574)] = n);
                            try {
                                d = 200,
                                0 === n[t(84)] && (d = 9401),
                                Ue && Ue[t(299)](t(577), 200, d, n[t(84)], .001),
                                Ue && Ue[t(299)](t(580), 200, d, Date[t(142)]() - f, .001)
                            } catch (e) {
                            }
                        }
                        return a
                    }(a, n)
            }
        } catch (e) {

            try {
                Ue && Ue[t(223)](t(583), e),
                Ue && Ue[t(299)](t(580), 200, 9402, Date[t(142)]() - f, .001)
            } catch (e) {
            }
        }
        return a
    }

    function be(e, a) {
        return e = ie(e),
            a ? a(e) : wx[t(324)](e)
    }

    function se(e, a) {
        var c = e[t(84)];
        a ^= c;
        for (var n = 0; 4 <= c;) {
            var f = 1540483477 * (65535 & (f = 255 & e[n] | (255 & e[++n]) << 8 | (255 & e[++n]) << 16 | (255 & e[++n]) << 24)) + ((1540483477 * (f >>> 16) & 65535) << 16);
            a = 1540483477 * (65535 & a) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ (f = 1540483477 * (65535 & (f ^= f >>> 24)) + ((1540483477 * (f >>> 16) & 65535) << 16)),
                c -= 4,
                ++n
        }
        switch (c) {
            case 3:
                a ^= (255 & e[n + 2]) << 16;
            case 2:
                a ^= (255 & e[n + 1]) << 8;
            case 1:
                a = 1540483477 * (65535 & (a ^= 255 & e[n])) + ((1540483477 * (a >>> 16) & 65535) << 16)
        }
        return ((a = 1540483477 * (65535 & (a ^= a >>> 13)) + ((1540483477 * (a >>> 16) & 65535) << 16)) ^ a >>> 15) >>> 0 ^ 1540483477
    }

    function ue(a, c, n) {
        var f = Date[t(142)]()
            , r = !1;
        if (0 == Object[t(431)](ac)[t(84)]) {
            var d;
            if (r = !0,
                $a[t(596)] = Math[t(597)](Date[t(142)]() / 1e3),
                ac[t(599)] = ie,
                ac[t(600)] = ie,
                ac[t(324)] = be,
                ac[t(602)] = be,
                ac[t(5)] = Qa,
                ac[t(5)][t(605)] = ac,
                wx[t(498)]) {
                var o = wx[t(498)]();
                o && ($a[t(608)] = o,
                o[t(609)] && o[t(609)][t(210)] && (ac[t(5)].s(o[t(609)][t(210)]),
                    rc = o[t(609)][t(210)]))
            }
            !rc && a[t(617)] && (ac[t(5)].s(a[t(617)]),
                rc = a[t(617)]),
            a[t(155)] && ($a[t(622)] = a[t(155)],
                ac[t(5)].o(a[t(155)])),
            a[t(213)] && ac[t(5)].u(a[t(213)]),
            a[t(215)] && ac[t(5)].m(a[t(215)]),
            a[t(632)] && ac[t(5)][t(634)](a[t(632)]);
            var i = ((d = {})[t(357)] = t(357),
                d[t(360)] = t(639),
                d[t(23)] = t(23),
                d[t(378)] = t(17),
                d[t(366)] = t(368),
                d[t(369)] = t(19),
                d[t(372)] = t(374),
                d[t(375)] = t(32),
                d[t(652)] = t(54),
                d[t(654)] = t(654),
                d);
            Object[t(431)](i)[t(391)]((function (e) {
                    a[e] && ac[t(5)][t(659)](a[e], i[e])
                }
            )),
                rc = "wxfd2e340553ce980d"
            d = env['40a10de2']['dfpId'],
                o = {
                    unionId: a[t(155)] || "",
                    dfpid: d || "",
                    appid: rc
                },
                Ue[t(661)](o),
            a[t(662)] && Ue[t(663)](a[t(662)]),
                ac[t(5)][t(662)](a[t(662)], Ue, f),
                ac[t(668)] = Ue[t(668)],
                ac[t(670)] = Ue[t(670)],
            (o = Me[t(672)]()) && ac[t(5)][t(674)](o),
                t(1) == ("undefined" == typeof mmp ? "undefined" : e(mmp)) ? (ac[t(676)] = he,
                1 == a[t(677)] || Me[t(678)](),
                    (o = {})[t(7)] = d,
                    o[t(617)] = rc,
                    o[t(681)] = Ue,
                    Me[t(682)](o, (function (e, a) {
                            ac[t(5)][t(684)](e, a, ac)
                        }
                    ))) : Me[t(685)](rc, d, Ue),
                Date[t(142)](),
                ac[t(5)][t(688)](a),
            Ue && Ue[t(299)](t(690), 200, 200, Date[t(142)]() - f, .1)
        }
        c && n(ac),
            c = function () {
                var e = Date[t(142)]();
                ec = ac[t(5)].i(),
                Ue && Ue[t(299)](t(695), 200, 200, Date[t(142)]() - e, 1e-4),
                Ue && Ue[t(299)](t(698), 200, 200, ec[t(84)], 1e-4)
            }
        ;
        var b = wx[t(699)];
        Object[t(700)](wx, t(699), {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
                var e = arguments
                    , a = arguments[0][t(702)];
                return a && (e[0][t(702)] = function (c) {
                        a[t(188)](e[0], c),
                            ac[t(5)].l(c)
                    }
                ),
                    b[t(480)](this, e)
            }
        }),
            c(),
            ac[t(707)] = setInterval(c, 1e4),
            setTimeout((function () {
                    ac[t(5)].t(ac, {})
                }
            ), 0),
        r && Ue && Ue[t(299)](t(710), 200, 200, Date[t(142)]() - f, .1)
    }

    function he(e) {
        Me[t(712)](e)
    }

    var le, pe, ge, ve, ye, me = "0123456789abcdef".split(""), we = {
            md5: function (e) {
                return s(b(e))
            },
            md5Array: b,
            md5ToHex: s
        }, xe = 0, Se = !0, Ce = !1, Ae = !1, Oe = 0, _e = 0, Ie = 0, De = 0, Ne = 0, je = void 0, Te = {
            biocode: 0,
            sensor: {
                acc: [],
                com: [],
                mot: [],
                gyro: []
            },
            click: []
        }, ke = {
            pid: 9,
            touch: {
                start: [],
                trail: [],
                end: []
            },
            config: {
                valid: 1,
                type: "1|2|3|4",
                freq: 1,
                start_delay: 10,
                click_delay: 10,
                duration: 10,
                groupTime: 100,
                max_sensor: 500,
                max_click: 100,
                max_trail: 100,
                interval_in_min: 5,
                max_count: 5
            }
        }, Je = {
            mp_touchs: {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                touchcancel: 1
            },
            mp_taps: {
                tap: 1,
                longpress: 1,
                longtap: 1
            },
            mp_hook: {
                data: 1,
                onLoad: 1,
                onShow: 1,
                onReady: 1,
                onPullDownRefresh: 1,
                onShareAppMessage: 1,
                onShareTimeline: 1,
                onReachBottom: 1,
                onPageScroll: 1,
                onResize: 1,
                onTabItemTap: 1,
                onHide: 1,
                onUnload: 1
            }
        }, Pe = ((le = {}).env = "prod",
            le.ver = "1.7.2",
            le), Me = {
            initSensor: function (e, a) {
                Te.dfpid = env['40a10de2']['dfpId'],
                    Te.appid = e.appid,
                    ge = e._raptor,
                    pe = a,
                    setTimeout((function () {
                            try {
                                l(Te.appid, env['40a10de2']['dfpId']),
                                wx.onAppHide && wx.onAppHide(h),
                                    O()
                            } catch (e) {
                            }
                        }
                    ), 0)
            },
            getSessionId: function () {
                for (var e = [], a = 0; 36 > a; a++)
                    e[a] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                return e[14] = "4",
                    e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1),
                    e[8] = e[13] = e[18] = e[23] = "",
                    e = e.join(""),
                    a = "",
                    u() ? a = e + "55" : (function () {
                        try {
                            wx.getSystemInfo({
                                success: function (e) {
                                    Te.resolution = JSON.stringify([e.screenWidth, e.screenHeight]),
                                        e = e.platform.toLowerCase(),
                                        e = ["android", "ios", "devtools", "windows", "mac"].indexOf(e),
                                        ke.pid = -1 === e ? 9 : e
                                }
                            })
                        } catch (e) {
                        }
                    }(),
                        a = e + "0" + ke.pid),
                    a
            },
            initProxy: function () {
                u() || Ae || (Ae = !0,
                    function () {
                        let Page;
                        Page = function (a) {
                            try {
                                a || (a = {}),
                                    v(a),
                                    e.apply(this, arguments)
                            } catch (a) {
                                e.apply(this, arguments)
                            }
                        };
                        var e = Page;
                        let Component;
                        Component = function (e) {
                            try {
                                e || (e = {}),
                                e.methods || (e.methods = {}),
                                    v(e.methods),
                                    a.apply(this, arguments)
                            } catch (e) {
                                a.apply(this, arguments)
                            }
                        }
                        var a = Component;
                    }())
            },
            dfpClickTrack: function (e) {
                try {
                    y(e) && ke.config.valid && !Se && w(e)
                } catch (e) {
                }
            },
            initMMPHorn: function (e, a, c) {
                ge = c,
                    setTimeout((function () {
                            l(e, a)
                        }
                    ), 0)
            }
        }, Re = ((ve = {}).env = "prod",
            ve.ver = "1.7.2",
            ve), Le = {}, Ee = {
            devMode: "prod" === Re.env ? 0 : 1,
            version: {
                appVersion: Re.ver
            },
            resource: {
                sample: 1
            }
        }, Ue = {
            initCat: function (e) {
                try {
                    e && (ye = new e.OWL(Ee))
                } catch (e) {

                    ye = void 0
                }
            },
            addError: P,
            addApi: M,
            jsgowl: function () {
                return ye
            },
            setRaptorConfig: function (e) {
                e.unionId && (Ee.unionId = e.unionId),
                e.appid && (Ee.pageUrl = e.appid),
                    Ee.project = "undefined" != typeof mmp ? "com.sankuai.jsprotect.jsguardmmp" : "com.sankuai.jsprotect.jsguard",
                    R(null, !0)
            },
            addApiObj: function (e) {
                e && e.name && (e.sample || (e.sample = 1),
                    M(e.name, e.ncode, e.scode, e.dur, e.sample))
            },
            addErrorObj: function (e) {
                e && e.name && e.error && P(e.name, e.error)
            },
            updatePatioRule: R
        }, Be = {
            DFP: [t(6), t(7), t(8), t(9), t(10), t(11), t(12), t(13), t(14)],
            system: [t(15), t(16), t(17), t(18), t(19), t(20), t(21), t(22), t(23), t(24), t(25), t(26), t(27), t(28), t(29), t(30), t(31), t(32), t(33), t(34), t(35), t(36), t(37), t(38), t(39), t(40), t(41), t(42), t(43), t(44), t(45), t(46), t(47), t(48), t(49), t(50), t(11), t(52), t(53), t(54), t(55), t(56), t(57)],
            BatteryInfo: [t(29), t(59), t(60)],
            safeArea: [t(61), t(62), t(63), t(64), t(65), t(66)],
            WifiInfo: [t(67), t(68), t(69), t(70), t(71), t(72), t(73)]
        }, Fe = B((function (e) {
                function a(e, a, n) {
                    if (4 !== a.length)
                        throw new c.exception.invalid("11");
                    var t = e.g[n]
                        , f = a[0] ^ t[0]
                        , r = a[n ? 3 : 1] ^ t[1]
                        , d = a[2] ^ t[2];
                    a = a[n ? 1 : 3] ^ t[3];
                    var o, i, b = t.length / 4 - 2, s = 4, u = [0, 0, 0, 0];
                    e = (o = e.a[n])[0];
                    var h = o[1]
                        , l = o[2]
                        , p = o[3]
                        , g = o[4];
                    for (i = 0; i < b; i++) {
                        o = e[f >>> 24] ^ h[r >> 16 & 255] ^ l[d >> 8 & 255] ^ p[255 & a] ^ t[s];
                        var v = e[r >>> 24] ^ h[d >> 16 & 255] ^ l[a >> 8 & 255] ^ p[255 & f] ^ t[s + 1]
                            , y = e[d >>> 24] ^ h[a >> 16 & 255] ^ l[f >> 8 & 255] ^ p[255 & r] ^ t[s + 2];
                        a = e[a >>> 24] ^ h[f >> 16 & 255] ^ l[r >> 8 & 255] ^ p[255 & d] ^ t[s + 3],
                            s += 4,
                            f = o,
                            r = v,
                            d = y
                    }
                    for (i = 0; 4 > i; i++)
                        u[n ? 3 & -i : i] = g[f >>> 24] << 24 ^ g[r >> 16 & 255] << 16 ^ g[d >> 8 & 255] << 8 ^ g[255 & a] ^ t[s++],
                            o = f,
                            f = r,
                            r = d,
                            d = a,
                            a = o;
                    return u
                }

                var c = {
                    cipher: {},
                    hash: {},
                    keyexchange: {},
                    mode: {},
                    misc: {},
                    codec: {},
                    exception: {
                        corrupt: function (e) {
                            this.toString = function () {
                                return "CORRUPT: " + this.message
                            }
                                ,
                                this.message = e
                        },
                        invalid: function (e) {
                            this.toString = function () {
                                return "INVALID: " + this.message
                            }
                                ,
                                this.message = e
                        },
                        bug: function (e) {
                            this.toString = function () {
                                return "BUG: " + this.message
                            }
                                ,
                                this.message = e
                        },
                        notReady: function (e) {
                            this.toString = function () {
                                return "NOT READY: " + this.message
                            }
                                ,
                                this.message = e
                        }
                    }
                };
                c.cipher.aes = function (e) {
                    if (!this.a[0][0][0]) {
                        var a, n, t, f, r = this.a[0], d = this.a[1], o = r[4], i = d[4], b = [], s = [];
                        for (a = 0; 256 > a; a++)
                            s[(b[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                        for (n = t = 0; !o[n]; n ^= f || 1,
                            t = s[t] || 1) {
                            var u = (u = t ^ t << 1 ^ t << 2 ^ t << 3 ^ t << 4) >> 8 ^ 255 & u ^ 99;
                            o[n] = u,
                                i[u] = n;
                            var h = 16843009 * b[a = b[f = b[n]]] ^ 65537 * a ^ 257 * f ^ 16843008 * n
                                , l = 257 * b[u] ^ 16843008 * u;
                            for (a = 0; 4 > a; a++)
                                r[a][n] = l = l << 24 ^ l >>> 8,
                                    d[a][u] = h = h << 24 ^ h >>> 8
                        }
                        for (a = 0; 5 > a; a++)
                            r[a] = r[a].slice(0),
                                d[a] = d[a].slice(0)
                    }
                    if (r = this.a[0][4],
                        d = this.a[1],
                        b = 1,
                    4 !== (t = e.length) && 6 !== t && 8 !== t)
                        throw new c.exception.invalid("10");
                    for (this.g = [i = e.slice(0), n = []],
                             e = t; e < 4 * t + 28; e++)
                        o = i[e - 1],
                        (0 == e % t || 8 === t && 4 == e % t) && (o = r[o >>> 24] << 24 ^ r[o >> 16 & 255] << 16 ^ r[o >> 8 & 255] << 8 ^ r[255 & o],
                        0 == e % t && (o = o << 8 ^ o >>> 24 ^ b << 24,
                            b = b << 1 ^ 283 * (b >> 7))),
                            i[e] = i[e - t] ^ o;
                    for (t = 0; e; t++,
                        e--)
                        o = i[3 & t ? e : e - 4],
                            n[t] = 4 >= e || 4 > t ? o : d[0][r[o >>> 24]] ^ d[1][r[o >> 16 & 255]] ^ d[2][r[o >> 8 & 255]] ^ d[3][r[255 & o]]
                }
                    ,
                    c.cipher.aes.prototype = {
                        encrypt: function (e) {
                            return a(this, e, 0)
                        },
                        decrypt: function (e) {
                            return a(this, e, 1)
                        },
                        a: [[[], [], [], [], []], [[], [], [], [], []]]
                    },
                    c.bitArray = {
                        bitSlice: function (e, a, n) {
                            return e = c.bitArray.c(e.slice(a / 32), 32 - (31 & a)).slice(1),
                                void 0 === n ? e : c.bitArray.clamp(e, n - a)
                        },
                        extract: function (e, a, c) {
                            var n = Math.floor(-a - c & 31);
                            return (-32 & (a + c - 1 ^ a) ? e[a / 32 | 0] << 32 - n ^ e[a / 32 + 1 | 0] >>> n : e[a / 32 | 0] >>> n) & (1 << c) - 1
                        },
                        concat: function (e, a) {
                            if (0 === e.length || 0 === a.length)
                                return e.concat(a);
                            var n = e[e.length - 1]
                                , t = c.bitArray.getPartial(n);
                            return 32 === t ? e.concat(a) : c.bitArray.c(a, t, 0 | n, e.slice(0, e.length - 1))
                        },
                        bitLength: function (e) {
                            var a = e.length;
                            return 0 === a ? 0 : 32 * (a - 1) + c.bitArray.getPartial(e[a - 1])
                        },
                        clamp: function (e, a) {
                            if (32 * e.length < a)
                                return e;
                            var n = (e = e.slice(0, Math.ceil(a / 32))).length;
                            return a &= 31,
                            0 < n && a && (e[n - 1] = c.bitArray.partial(a, e[n - 1] & 2147483648 >> a - 1, 1)),
                                e
                        },
                        partial: function (e, a, c) {
                            return 32 === e ? a : (c ? 0 | a : a << 32 - e) + 1099511627776 * e
                        },
                        getPartial: function (e) {
                            return Math.round(e / 1099511627776) || 32
                        },
                        equal: function (e, a) {
                            if (c.bitArray.bitLength(e) !== c.bitArray.bitLength(a))
                                return !1;
                            var n, t = 0;
                            for (n = 0; n < e.length; n++)
                                t |= e[n] ^ a[n];
                            return 0 === t
                        },
                        c: function (e, a, n, t) {
                            var f;
                            for (void 0 === t && (t = []); 32 <= a; a -= 32)
                                t.push(n),
                                    n = 0;
                            if (0 === a)
                                return t.concat(e);
                            for (f = 0; f < e.length; f++)
                                t.push(n | e[f] >>> a),
                                    n = e[f] << 32 - a;
                            return f = e.length ? e[e.length - 1] : 0,
                                e = c.bitArray.getPartial(f),
                                t.push(c.bitArray.partial(a + e & 31, 32 < a + e ? n : t.pop(), 1)),
                                t
                        },
                        f: function (e, a) {
                            return [e[0] ^ a[0], e[1] ^ a[1], e[2] ^ a[2], e[3] ^ a[3]]
                        },
                        byteswapM: function (e) {
                            var a;
                            for (a = 0; a < e.length; ++a) {
                                var c = e[a];
                                e[a] = c >>> 24 | c >>> 8 & 65280 | (65280 & c) << 8 | c << 24
                            }
                            return e
                        }
                    },
                    c.codec.utf8String = {
                        fromBits: function (e) {
                            var a, n, t = "", f = c.bitArray.bitLength(e);
                            for (a = 0; a < f / 8; a++)
                                0 == (3 & a) && (n = e[a / 4]),
                                    t += String.fromCharCode(n >>> 8 >>> 8 >>> 8),
                                    n <<= 8;
                            return decodeURIComponent(escape(t))
                        },
                        toBits: function (e) {
                            e = unescape(encodeURIComponent(e));
                            var a, n = [], t = 0;
                            for (a = 0; a < e.length; a++)
                                t = t << 8 | e.charCodeAt(a),
                                3 == (3 & a) && (n.push(t),
                                    t = 0);
                            return 3 & a && n.push(c.bitArray.partial(8 * (3 & a), t)),
                                n
                        }
                    },
                    c.codec.base64 = {
                        b: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        fromBits: function (e, a, n) {
                            var t = ""
                                , f = 0
                                , r = c.codec.base64.b
                                , d = 0
                                , o = c.bitArray.bitLength(e);
                            for (n && (r = r.substr(0, 62) + "-_"),
                                     n = 0; 6 * t.length < o;)
                                t += r.charAt((d ^ e[n] >>> f) >>> 26),
                                    6 > f ? (d = e[n] << 6 - f,
                                        f += 26,
                                        n++) : (d <<= 6,
                                        f -= 6);
                            for (; 3 & t.length && !a;)
                                t += "=";
                            return t
                        },
                        toBits: function (e, a) {
                            e = e.replace(/\s|=/g, "");
                            var n, t = [], f = 0, r = c.codec.base64.b, d = 0;
                            for (a && (r = r.substr(0, 62) + "-_"),
                                     a = 0; a < e.length; a++) {
                                if (0 > (n = r.indexOf(e.charAt(a))))
                                    throw new c.exception.invalid("12");
                                26 < f ? (f -= 26,
                                    t.push(d ^ n >>> f),
                                    d = n << 32 - f) : d ^= n << 32 - (f += 6)
                            }
                            return 56 & f && t.push(c.bitArray.partial(56 & f, d, 1)),
                                t
                        }
                    },
                    c.codec.base64url = {
                        fromBits: function (e) {
                            return c.codec.base64.fromBits(e, 1, 1)
                        },
                        toBits: function (e) {
                            return c.codec.base64.toBits(e, 1)
                        }
                    },
                    c.codec.bytes = {
                        fromBits: function (e) {
                            var a, n, t = [], f = c.bitArray.bitLength(e);
                            for (a = 0; a < f / 8; a++)
                                0 == (3 & a) && (n = e[a / 4]),
                                    t.push(n >>> 24),
                                    n <<= 8;
                            return t
                        },
                        toBits: function (e) {
                            var a, n = [], t = 0;
                            for (a = 0; a < e.length; a++)
                                t = t << 8 | e[a],
                                3 == (3 & a) && (n.push(t),
                                    t = 0);
                            return 3 & a && n.push(c.bitArray.partial(8 * (3 & a), t)),
                                n
                        }
                    },
                void 0 === c.beware && (c.beware = {}),
                    c.beware.o = function () {
                        c.mode.cbc = {
                            name: "cbc",
                            encrypt: function (e, a, n, t) {
                                if (t && t.length)
                                    throw new c.exception.invalid("1");
                                if (128 !== c.bitArray.bitLength(n))
                                    throw new c.exception.invalid("2");
                                var f = c.bitArray
                                    , r = f.f
                                    , d = f.bitLength(a)
                                    , o = 0
                                    , i = [];
                                if (7 & d)
                                    throw new c.exception.invalid("3");
                                for (t = 0; o + 128 <= d; t += 4,
                                    o += 128)
                                    n = e.encrypt(r(n, a.slice(t, t + 4))),
                                        i.splice(t, 0, n[0], n[1], n[2], n[3]);
                                return d = 16843009 * (16 - (d >> 3 & 15)),
                                    n = e.encrypt(r(n, f.concat(a, [d, d, d, d]).slice(t, t + 4))),
                                    i.splice(t, 0, n[0], n[1], n[2], n[3]),
                                    i
                            },
                            decrypt: function (e, a, n, t) {
                                if (t && t.length)
                                    throw new c.exception.invalid("4");
                                if (128 !== c.bitArray.bitLength(n))
                                    throw new c.exception.invalid("5");
                                if (127 & c.bitArray.bitLength(a) || !a.length)
                                    throw new c.exception.corrupt("6");
                                var f = c.bitArray
                                    , r = f.f
                                    , d = [];
                                for (t = 0; t < a.length; t += 4) {
                                    var o = a.slice(t, t + 4);
                                    n = r(n, e.decrypt(o)),
                                        d.splice(t, 0, n[0], n[1], n[2], n[3]),
                                        n = o
                                }
                                if (0 == (o = 255 & d[t - 1]) || 16 < o)
                                    throw new c.exception.corrupt("7");
                                if (n = 16843009 * o,
                                    !f.equal(f.bitSlice([n, n, n, n], 0, 8 * o), f.bitSlice(d, 32 * d.length - 8 * o, 32 * d.length)))
                                    throw new c.exception.corrupt("9");
                                return f.bitSlice(d, 0, 32 * d.length - 8 * o)
                            }
                        }
                    }
                    ,
                e.exports && (e.exports = c)
            }
        )), ze = B((function (e, a) {
                e = function (e) {
                    e.version = "1.2.0";
                    var a = function () {
                        for (var e = 0, a = Array(256), c = 0; 256 != c; ++c)
                            e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = c) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1,
                                a[c] = e;
                        return "undefined" != typeof Int32Array ? new Int32Array(a) : a
                    }();
                    e.table = a,
                        e.bstr = function (e, c) {
                            c ^= -1;
                            for (var n = e.length - 1, t = 0; t < n;)
                                c = (c = c >>> 8 ^ a[255 & (c ^ e.charCodeAt(t++))]) >>> 8 ^ a[255 & (c ^ e.charCodeAt(t++))];
                            return t === n && (c = c >>> 8 ^ a[255 & (c ^ e.charCodeAt(t))]),
                            -1 ^ c
                        }
                        ,
                        e.buf = function (e, c) {
                            if (1e4 < e.length) {
                                c ^= -1;
                                for (var n = e.length - 7, t = 0; t < n;)
                                    c = (c = (c = (c = (c = (c = (c = (c = c >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])];
                                for (; t < n + 7;)
                                    c = c >>> 8 ^ a[255 & (c ^ e[t++])];
                                return -1 ^ c
                            }
                            for (c ^= -1,
                                     n = e.length - 3,
                                     t = 0; t < n;)
                                c = (c = (c = (c = c >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])]) >>> 8 ^ a[255 & (c ^ e[t++])];
                            for (; t < n + 3;)
                                c = c >>> 8 ^ a[255 & (c ^ e[t++])];
                            return -1 ^ c
                        }
                        ,
                        e.str = function (e, c) {
                            var n, t;
                            c ^= -1;
                            for (var f = 0, r = e.length; f < r;)
                                128 > (n = e.charCodeAt(f++)) ? c = c >>> 8 ^ a[255 & (c ^ n)] : 2048 > n ? c = (c = c >>> 8 ^ a[255 & (c ^ (192 | n >> 6 & 31))]) >>> 8 ^ a[255 & (c ^ (128 | 63 & n))] : 55296 <= n && 57344 > n ? (n = 64 + (1023 & n),
                                    t = 1023 & e.charCodeAt(f++),
                                    c = (c = (c = (c = c >>> 8 ^ a[255 & (c ^ (240 | n >> 8 & 7))]) >>> 8 ^ a[255 & (c ^ (128 | n >> 2 & 63))]) >>> 8 ^ a[255 & (c ^ (128 | t >> 6 & 15 | (3 & n) << 4))]) >>> 8 ^ a[255 & (c ^ (128 | 63 & t))]) : c = (c = (c = c >>> 8 ^ a[255 & (c ^ (224 | n >> 12 & 15))]) >>> 8 ^ a[255 & (c ^ (128 | n >> 6 & 63))]) >>> 8 ^ a[255 & (c ^ (128 | 63 & n))];
                            return -1 ^ c
                        }
                }
                    ,
                    "undefined" == typeof DO_NOT_EXPORT_CRC ? e(a) : e({})
            }
        )), Ge = Uint8Array, qe = Uint16Array, We = Uint32Array,
        He = new Ge([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        Ve = new Ge([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Ze = new Ge([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Xe = function (e, a) {
            for (var c = new qe(31), n = 0; 31 > n; ++n)
                c[n] = a += 1 << e[n - 1];
            for (e = new We(c[30]),
                     n = 1; 30 > n; ++n)
                for (a = c[n]; a < c[n + 1]; ++a)
                    e[a] = a - c[n] << 5 | n;
            return [c, e]
        }, Ye = Xe(He, 2), Ke = Ye[1];
    Ye[0][28] = 258,
        Ke[258] = 28;
    for (var Qe = Xe(Ve, 0)[1], $e = new qe(32768), ea = 0; 32768 > ea; ++ea) {
        var aa = (43690 & ea) >>> 1 | (21845 & ea) << 1;
        aa = (61680 & (aa = (52428 & aa) >>> 2 | (13107 & aa) << 2)) >>> 4 | (3855 & aa) << 4,
            $e[ea] = ((65280 & aa) >>> 8 | (255 & aa) << 8) >>> 1
    }
    var ca = function (e, a, c) {
        for (var n = e.length, t = 0, f = new qe(a); t < n; ++t)
            ++f[e[t] - 1];
        var r = new qe(a);
        for (t = 0; t < a; ++t)
            r[t] = r[t - 1] + f[t - 1] << 1;
        if (c) {
            for (c = new qe(1 << a),
                     f = 15 - a,
                     t = 0; t < n; ++t)
                if (e[t]) {
                    var d = t << 4 | e[t]
                        , o = a - e[t]
                        , i = r[e[t] - 1]++ << o;
                    for (o = i | (1 << o) - 1; i <= o; ++i)
                        c[$e[i] >>> f] = d
                }
        } else
            for (c = new qe(n),
                     t = 0; t < n; ++t)
                c[t] = $e[r[e[t] - 1]++] >>> 15 - e[t];
        return c
    }
        , na = new Ge(288);
    for (ea = 0; 144 > ea; ++ea)
        na[ea] = 8;
    for (ea = 144; 256 > ea; ++ea)
        na[ea] = 9;
    for (ea = 256; 280 > ea; ++ea)
        na[ea] = 7;
    for (ea = 280; 288 > ea; ++ea)
        na[ea] = 8;
    var ta = new Ge(32);
    for (ea = 0; 32 > ea; ++ea)
        ta[ea] = 5;
    var fa, ra, da, oa = ca(na, 9, 0), ia = ca(ta, 5, 0), ba = function (e, a, c) {
            (null == a || 0 > a) && (a = 0),
            (null == c || c > e.length) && (c = e.length);
            var n = new (e instanceof qe ? qe : e instanceof We ? We : Ge)(c - a);
            return n.set(e.subarray(a, c)),
                n
        }, sa = function (e, a, c) {
            c <<= 7 & a,
                e[a = a / 8 >> 0] |= c,
                e[a + 1] |= c >>> 8
        }, ua = function (e, a, c) {
            c <<= 7 & a,
                e[a = a / 8 >> 0] |= c,
                e[a + 1] |= c >>> 8,
                e[a + 2] |= c >>> 16
        }, ha = function (e, a) {
            for (var c = [], n = 0; n < e.length; ++n)
                e[n] && c.push({
                    s: n,
                    f: e[n]
                });
            var t = c.length;
            if (e = c.slice(),
                !t)
                return [new Ge(0), 0];
            if (1 == t)
                return (a = new Ge(c[0].s + 1))[c[0].s] = 1,
                    [a, 1];
            c.sort((function (e, a) {
                    return e.f - a.f
                }
            )),
                c.push({
                    s: -1,
                    f: 25001
                }),
                n = c[0];
            var f = c[1]
                , r = 0
                , d = 1
                , o = 2;
            for (c[0] = {
                s: -1,
                f: n.f + f.f,
                l: n,
                r: f
            }; d != t - 1;)
                n = c[c[r].f < c[o].f ? r++ : o++],
                    f = c[r != d && c[r].f < c[o].f ? r++ : o++],
                    c[d++] = {
                        s: -1,
                        f: n.f + f.f,
                        l: n,
                        r: f
                    };
            for (f = e[0].s,
                     n = 1; n < t; ++n)
                e[n].s > f && (f = e[n].s);
            var i = new qe(f + 1);
            if ((d = la(c[d - 1], i, 0)) > a) {
                for (c = n = 0,
                         r = 1 << (f = d - a),
                         e.sort((function (e, a) {
                                 return i[a.s] - i[e.s] || e.f - a.f
                             }
                         )); n < t && (o = e[n].s,
                i[o] > a); ++n)
                    c += r - (1 << d - i[o]),
                        i[o] = a;
                for (c >>>= f; 0 < c;)
                    t = e[n].s,
                        i[t] < a ? c -= 1 << a - i[t]++ - 1 : ++n;
                for (; 0 <= n && c; --n)
                    t = e[n].s,
                    i[t] == a && (--i[t],
                        ++c);
                d = a
            }
            return [new Ge(i), d]
        }, la = function e(a, c, n) {
            return -1 == a.s ? Math.max(e(a.l, c, n + 1), e(a.r, c, n + 1)) : c[a.s] = n
        }, pa = function (e) {
            for (var a = e.length; a && !e[--a];)
                ;
            for (var c = new qe(++a), n = 0, t = e[0], f = 1, r = function (e) {
                c[n++] = e
            }, d = 1; d <= a; ++d)
                if (e[d] == t && d != a)
                    ++f;
                else {
                    if (!t && 2 < f) {
                        for (; 138 < f; f -= 138)
                            r(32754);
                        2 < f && (r(10 < f ? f - 11 << 5 | 28690 : f - 3 << 5 | 12305),
                            f = 0)
                    } else if (3 < f) {
                        for (r(t),
                                 --f; 6 < f; f -= 6)
                            r(8304);
                        2 < f && (r(f - 3 << 5 | 8208),
                            f = 0)
                    }
                    for (; f--;)
                        r(t);
                    f = 1,
                        t = e[d]
                }
            return [c.subarray(0, n), a]
        }, ga = function (e, a) {
            for (var c = 0, n = 0; n < a.length; ++n)
                c += e[n] * a[n];
            return c
        }, va = function (e, a, c) {
            var n = c.length;
            e[a = ((a += 2) / 8 >> 0) + (7 & a && 1)] = 255 & n,
                e[a + 1] = n >>> 8,
                e[a + 2] = 255 ^ e[a],
                e[a + 3] = 255 ^ e[a + 1];
            for (var t = 0; t < n; ++t)
                e[a + t + 4] = c[t];
            return 8 * (a + 4 + n)
        }, ya = function (e, a, c, n, t, f, r, d, o, i, b) {
            sa(a, b++, c),
                ++t[256];
            for (var s = (c = ha(t, 15))[0], u = c[1], h = (c = ha(f, 15))[0], l = c[1], p = (c = pa(s))[0], g = c[1], v = (c = pa(h))[0], y = c[1], m = new qe(19), w = 0; w < p.length; ++w)
                m[31 & p[w]]++;
            for (w = 0; w < v.length; ++w)
                m[31 & v[w]]++;
            c = (w = ha(m, 7))[0],
                w = w[1];
            for (var x = 19; 4 < x && !c[Ze[x - 1]]; --x)
                ;
            var S = i + 5 << 3
                , C = ga(t, na) + ga(f, ta) + r;
            if (t = ga(t, s) + ga(f, h) + r + 14 + 3 * x + ga(m, c) + (2 * m[16] + 3 * m[17] + 7 * m[18]),
            S <= C && S <= t)
                return va(a, b, e.subarray(o, o + i));
            if (sa(a, b, 1 + (t < C)),
                b += 2,
            t < C) {
                for (e = ca(s, u, 0),
                         o = s,
                         i = ca(h, l, 0),
                         s = ca(c, w, 0),
                         sa(a, b, g - 257),
                         sa(a, b + 5, y - 1),
                         sa(a, b + 10, x - 4),
                         b += 14,
                         w = 0; w < x; ++w)
                    sa(a, b + 3 * w, c[Ze[w]]);
                for (b += 3 * x,
                         p = [p, v],
                         g = 0; 2 > g; ++g)
                    for (v = p[g],
                             w = 0; w < v.length; ++w)
                        y = 31 & v[w],
                            sa(a, b, s[y]),
                            b += c[y],
                        15 < y && (sa(a, b, v[w] >>> 5 & 127),
                            b += v[w] >>> 12)
            } else
                e = oa,
                    o = na,
                    i = ia,
                    h = ta;
            for (w = 0; w < d; ++w)
                255 < n[w] ? (y = n[w] >>> 18 & 31,
                    ua(a, b, e[y + 257]),
                    b += o[y + 257],
                7 < y && (sa(a, b, n[w] >>> 23 & 31),
                    b += He[y]),
                    c = 31 & n[w],
                    ua(a, b, i[c]),
                    b += h[c],
                3 < c && (ua(a, b, n[w] >>> 5 & 8191),
                    b += Ve[c])) : (ua(a, b, e[n[w]]),
                    b += o[n[w]]);
            return ua(a, b, e[256]),
            b + o[256]
        }, ma = new We([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), wa = new Ge(0),
        xa = function () {
            for (var e = new We(256), a = 0; 256 > a; ++a) {
                for (var c = a, n = 9; --n;)
                    c = (1 & c && 3988292384) ^ c >>> 1;
                e[a] = c
            }
            return e
        }(), Sa = function () {
            var e = 4294967295;
            return {
                p: function (a) {
                    for (var c = e, n = 0; n < a.length; ++n)
                        c = xa[255 & c ^ a[n]] ^ c >>> 8;
                    e = c
                },
                d: function () {
                    return 4294967295 ^ e
                }
            }
        }, Ca = function (e, a, c, n, t) {
            return function (e, a, c, n, t, f) {
                var r = e.length
                    , d = new Ge(n + r + 5 * (1 + Math.floor(r / 7e3)) + t)
                    , o = d.subarray(n, d.length - t)
                    , i = 0;
                if (!a || 8 > r)
                    for (c = 0; c <= r; c += 65535)
                        (a = c + 65535) < r ? i = va(o, i, e.subarray(c, a)) : (o[c] = f,
                            i = va(o, i, e.subarray(c, r)));
                else {
                    var b = ma[a - 1];
                    a = b >>> 13,
                        b &= 8191;
                    for (var s = (1 << c) - 1, u = new qe(32768), h = new qe(s + 1), l = Math.ceil(c / 3), p = function (a) {
                        return (e[a] ^ e[a + 1] << l ^ e[a + 2] << 2 * l) & s
                    }, g = new We(25e3), v = new qe(288), y = new qe(32), m = 0, w = 0, x = (c = 0,
                        0), S = 0, C = 0; c < r; ++c) {
                        var A = p(c)
                            , O = 32767 & c
                            , _ = h[A];
                        if (u[O] = _,
                            h[A] = O,
                        S <= c) {
                            var I = r - c;
                            if ((7e3 < m || 24576 < x) && 423 < I) {
                                i = ya(e, o, 0, g, v, y, w, x, C, c - C, i),
                                    x = m = w = 0,
                                    C = c;
                                for (var D = 0; 286 > D; ++D)
                                    v[D] = 0;
                                for (D = 0; 30 > D; ++D)
                                    y[D] = 0
                            }
                            var N = 2
                                , j = 0
                                , T = b
                                , k = O - _ & 32767;
                            if (2 < I && A == p(c - k)) {
                                A = Math.min(a, I) - 1;
                                var J = Math.min(32767, c);
                                for (I = Math.min(258, I); k <= J && --T && O != _;) {
                                    if (e[c + N] == e[c + N - k]) {
                                        for (D = 0; D < I && e[c + D] == e[c + D - k]; ++D)
                                            ;
                                        if (D > N) {
                                            if (N = D,
                                                j = k,
                                            D > A)
                                                break;
                                            var P = Math.min(k, D - 2)
                                                , M = 0;
                                            for (D = 0; D < P; ++D) {
                                                var R = c - k + D + 32768 & 32767
                                                    , L = R - u[R] + 32768 & 32767;
                                                L > M && (M = L,
                                                    _ = R)
                                            }
                                        }
                                    }
                                    k += (O = _) - (_ = u[O]) + 32768 & 32767
                                }
                            }
                            j ? (g[x++] = 268435456 | Ke[N] << 18 | Qe[j],
                                S = 31 & Ke[N],
                                j = 31 & Qe[j],
                                w += He[S] + Ve[j],
                                ++v[257 + S],
                                ++y[j],
                                S = c + N,
                                ++m) : (g[x++] = e[c],
                                ++v[e[c]])
                        }
                    }
                    i = ya(e, o, f, g, v, y, w, x, C, c - C, i),
                    f || (i = va(o, i, wa))
                }
                return ba(d, 0, n + ((i / 8 >> 0) + (7 & i && 1)) + t)
            }(e, null == a.level ? 6 : a.level, null == a.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + a.mem, c, n, !t)
        }, Aa = function (e, a, c) {
            for (; c; ++a)
                e[a] = c,
                    c >>>= 8
        }, Oa = {
            gzipSync: F,
            compressSync: F,
            strToU8: function (e, a) {
                var c = e.length;
                if (!a && "undefined" != typeof TextEncoder)
                    return (new TextEncoder).encode(e);
                for (var n = new Ge(e.length + (e.length >>> 1)), t = 0, f = function (e) {
                    n[t++] = e
                }, r = 0; r < c; ++r) {
                    if (t + 5 > n.length) {
                        var d = new Ge(t + 8 + (c - r << 1));
                        d.set(n),
                            n = d
                    }
                    128 > (d = e.charCodeAt(r)) || a ? f(d) : 2048 > d ? (f(192 | d >>> 6),
                        f(128 | 63 & d)) : 55295 < d && 57344 > d ? (f(240 | (d = 65536 + (1047552 & d) | 1023 & e.charCodeAt(++r)) >>> 18),
                        f(128 | d >>> 12 & 63),
                        f(128 | d >>> 6 & 63),
                        f(128 | 63 & d)) : (f(224 | d >>> 12),
                        f(128 | d >>> 6 & 63),
                        f(128 | 63 & d))
                }
                return ba(n, 0, t)
            }
        };
    Fe[t(99)].o();
    for (var _a, Ia = {}, Da = !1, Na = !1, ja = {}, Ta = [], ka = [], Ja = 0, Pa = void 0, Ma = !1, Ra = ((fa = {})[t(127)] = t(128),
        fa[t(129)] = t(130),
        fa[t(131)] = t(127),
        fa[t(133)] = t(134),
        fa), La = function (e) {
        return t(127) === e[t(131)] ? e[t(127)] : e[t(129)]
    }, Ea = ((ra = {})[t(11)] = {},
        ra[t(9)] = t(125),
        ra), Ua = t(141), Ba = function (e) {
        for (var a, c, n, f, r, d = Date[t(142)](), o = ""; 7 > o[t(84)];)
            o += (f = "A"[t(144)](0),
                r = "Z"[t(144)](0),
                String[t(109)](Math[t(147)]() * (r - f) | 0 + f));
        f = (f = "" + d + o + ((c = {})[t(37)] = Ea[t(11)][t(37)],
            c[t(11)] = Ea[t(11)],
            c[t(12)] = Ea[t(12)],
            c[t(155)] = Ea[t(155)],
            we[t(157)](Oa[t(158)](JSON[t(74)](c)))))[t(160)]((n = f,
            (ze[t(161)](n) >>> 0)[t(162)]()[t(163)](0, 4))),
            e = e ? e[t(164)] : void 0,
            (a = {})[t(12)] = d,
            a[t(166)] = f,
            a[t(164)] = e || f,
            a[t(168)] = 0,
            d = a;
        try {
            q({
                id: d
            })
        } catch (e) {
        }
        return d
    }, Fa = function () {
        var e = Ia[t(169)];
        return e && e[t(164)] && e[t(166)] && e[t(12)] ? e : Ba(Ia[t(169)])
    }, za = function () {
        return Ia[t(169)] && Ia[t(169)][t(168)] ? Ia[t(169)][t(168)] : 0
    }, Ga = function (e) {
        try {
            K(),
            Da || q(Ia);
            try {
                var a = wx[t(179)]()[t(180)](wx[t(131)][t(182)])
                    , c = (a[t(183)],
                    a[t(184)])
                    , n = a[t(119)]
                    , f = a[t(186)]
                    , r = [16, 16, 5, 4, 10, 4, 6, 1, 14, 4, 2, 2, 6, 1, 5, 4, 7, 4, 20, 4, 19, 4, 15];
                !function () {
                    for (var e = [], a = (Function[t(187)][t(188)],
                        0); ;)
                        switch (r[a++]) {
                            case 1:
                                e[t(87)](n);
                                continue;
                            case 2:
                                e[t(87)](r[a++]);
                                continue;
                            case 4:
                                e[t(191)]();
                                continue;
                            case 5:
                                e[e[t(84)] - 2] = e[e[t(84)] - 2] & e[e[t(84)] - 1];
                                continue;
                            case 6:
                                e[t(87)](c);
                                continue;
                            case 7:
                                e[e[t(84)] - 2] = e[e[t(84)] - 2] * e[e[t(84)] - 1];
                                continue;
                            case 10:
                                ka[0] = e[e[t(84)] - 1];
                                continue;
                            case 14:
                                e[e[t(84)] - 2] = e[e[t(84)] - 2] ^ e[e[t(84)] - 1];
                                continue;
                            case 15:
                                return;
                            case 16:
                                e[t(87)](~(~c + n));
                                continue;
                            case 19:
                                ka[1] = e[e[t(84)] - 1];
                                continue;
                            case 20:
                                e[e[t(84)] - 2] = e[e[t(84)] - 2] + e[e[t(84)] - 1]
                        }
                }(),
                    ka[2] = n,
                    ka[3] = f
            } catch (e) {
            }
            Ea[t(208)] = ka,
                Ea[t(6)] = ja[t(210)],
                Ea[t(155)] = ja[t(212)],
                Ea[t(213)] = ja[t(214)],
                Ea[t(215)] = ja[t(216)];
            var d = Fa();
            Ea[t(7)] = d[t(164)],
                Ea[t(10)] = d[t(166)],
                Ea[t(8)] = d[t(12)],
            e && setTimeout((function () {
                    e(Ea)
                }
            ), 200)
        } catch (a) {
            console.log(a)
            e && e(Ea);
            try {
                _a && _a[t(223)](t(224), a)
            } catch (e) {
            }
        }
    }, qa = 0, Wa = 0, Ha = 0, Va = function () {
        try {
            wx.onCompassChange && wx.offCompassChange && wx.onCompassChange(H),
            wx.onAccelerometerChange && wx.offAccelerometerChange && wx.onAccelerometerChange(Z),
                wx.startGyroscope({
                    interval: "normal",
                    success: function () {
                    }
                }),
            wx.onGyroscopeChange && wx.offGyroscopeChange && wx.onGyroscopeChange(Y)
        } catch (e) {
        }
    }, Za = function (e) {
        return (10 > e ? "0" : "") + e
    }, Xa = function () {
        var e = new Date;
        return e[t(302)]() + "-" + Za(e[t(303)]() + 1) + "-" + Za(e[t(304)]()) + " " + Za(e[t(305)]()) + ":" + Za(e[t(306)]()) + ":" + Za(e[t(307)]())
    }, Ya = function (a, c, n) {
        function f(c) {
            try {
                var n, f = Date[t(142)](), r = ((n = {})[t(309)] = t(125),
                    n[t(275)] = ((d = c)[t(13)] = Ta,
                        d[t(208)] = ka,
                        d.e = Error()[t(313)],
                        Ua[t(160)](z(Fe[t(111)][t(112)][t(113)](JSON[t(74)](d))))),
                    n[t(319)] = t(125),
                    n[t(320)] = Xa(),
                    n[t(321)] = t(1) != ("undefined" == typeof mmp ? "undefined" : e(mmp)) ? t(322) : t(323),
                    n);
                a[t(324)]({
                    url: La(Ra) + t(325),
                    method: t(326),
                    data: r,
                    header: {
                        "content-type": t(327)
                    },
                    success: function (a) {
                        Ea[t(328)]++;
                        var c = 200;
                        if (200 === a[t(329)]) {
                            var n = a[t(275)];
                            if (n[t(275)] && n[t(275)][t(277)] && t(278) == e(n[t(275)][t(280)])) {
                                var d, o = 0;
                                n[t(275)][t(282)] && t(278) == e(n[t(275)][t(282)]) && (o = n[t(275)][t(282)] - Date[t(142)]()),
                                    q({
                                        id: (d = {},
                                            d[t(164)] = n[t(275)][t(277)],
                                            d[t(168)] = o,
                                            d[t(293)] = 36e5 * n[t(275)][t(280)] + Date[t(142)]() + o,
                                            d)
                                    }, !0),
                                n[t(275)][t(277)] && _a && _a[t(299)](t(300), 200, 200, Date[t(142)]() - Ja, .1)
                            }
                            a[t(275)] && 200 !== a[t(275)][t(333)] && (c = a[t(275)][t(333)])
                        }
                        _a && _a[t(299)](t(337), a[t(329)], c, Date[t(142)]() - f, .1),
                        _a && _a[t(299)](t(341), 200, 200, JSON[t(74)](r)[t(84)], .1)
                    }
                })
            } catch (d) {
                console.log(d)
                try {
                    _a && _a[t(223)](t(345), d),
                    _a && _a[t(299)](t(337), 200, 9403, Date[t(142)]() - f, .1)
                } catch (e) {
                }
            }
            var d
        }

        void 0 === n && (n = !1),
            n ? Ga(f) : a[t(349)] || ((n = Ia[t(169)]) && n[t(293)] && (new Date)[t(352)]() < n[t(293)] || (a[t(349)] = !0,
            Pa || (Pa = a),
                Ra = Object[t(355)](Ra, c),
                Ea[t(328)] = 0,
                Ga(f)))
    }, Ka = ((da = {})[t(357)] = {
        api: t(358),
        fingerData: t(11)
    },
        da[t(360)] = {
            api: t(361),
            fingerData: t(38)
        },
        da[t(23)] = {
            api: t(364),
            fingerData: t(23)
        },
        da[t(366)] = {
            api: t(367),
            fingerData: t(368)
        },
        da[t(369)] = {
            api: t(370),
            fingerData: t(19)
        },
        da[t(372)] = {
            api: t(373),
            fingerData: t(374)
        },
        da[t(375)] = {
            api: t(376),
            fingerData: t(32)
        },
        da[t(378)] = {
            api: t(379),
            fingerData: t(17)
        },
        da[t(381)] = {
            api: t(382),
            fingerData: t(381)
        },
        da), Qa = {
        d: function () {
            Da || q(Ia);
            var e = Ia.id;
            return e && env['40a10de2']['dfpId'] ?env['40a10de2']['dfpId'] : Ba(e).dfpId
        },
        s: function (e) {
            ja.appId = e
        },
        o: function (e) {
            ja.openId = e
        },
        u: function (e) {
            ja.unionId = e
        },
        m: function (e) {
            ja.mchId = e
        },
        su: function (a) {
            "object" == e(a) && (Ea.userInfo = a)
        },
        g: function (e) {
            var a = Date.now();
            Ga((function (c) {
                    var n = Ua;
                    try {
                        var t = JSON.parse(JSON.stringify(c));
                        if (delete t.fsmode,
                            delete t.e,
                            delete t.ext,
                            delete t.system.gyro,
                            delete t.dp,
                            delete t.sessionId,
                            delete t.system.screenRecord,
                            delete t.system.wifiList,
                        void 0 !== t.system.StorageInfo) {
                            var f = JSON.parse(t.system.StorageInfo);
                            f.keys = [],
                                t.system.StorageInfo = JSON.stringify(f)
                        }
                        var r = JSON.stringify(t);
                        n += z(Fe.codec.utf8String.toBits(r)),
                        e && e(n),
                        _a && _a.addApi("dfp_finger", 200, 200, Date.now() - a, .01),
                        _a && _a.addApi("dfp_finger_length", 200, 200, n.length, .01)
                    } catch (c) {
                        console.log(c)
                        e && e(n);
                        try {
                            _a && _a.addError("getFinger", c),
                            _a && _a.addApi("dfp_finger", 200, 9401, Date.now() - a, .01)
                        } catch (e) {
                        }
                    }
                }
            ))
        },
        i: function () {
            var a = "w1.3";
            if (K(),
            Da || q(Ia),
                !Na)
                try {
                    Date.now(),
                        function () {
                            try {
                                Ta[0] = "undefined" == typeof NativeClient ? 0 : 1,
                                    Ta[1] = "undefined" == typeof addEventListener ? 0 : 1;
                                try {
                                    var e = wx.getPublicLibVersion()
                                        , a = 0 < Object.keys(e).length ? e.system == Ea.system.platform ? 1 : 0 : 2
                                } catch (e) {
                                }
                                Ta[2] = a,
                                    Ta[3] = "undefined" == typeof __WeixinJSBridge ? 0 : 1;
                                var c = 4;
                                if (wx.canIUse("getNFCAdapter")) {
                                    var n, t = wx.getNFCAdapter(), f = ((n = {}).not_open = 13001,
                                        n.no_nfc = 13e3,
                                        n);
                                    // t.startDiscovery({
                                    //     success: function(e) {
                                    //         void 0 === e.errCode ? (c = 1,
                                    //             Ta[4] = c,
                                    //             t.stopDiscovery({
                                    //                 success: function() {},
                                    //                 fail: function() {}
                                    //             })) : (e.errCode == f.no_nfc && (c = 3,
                                    //             Ta[4] = c),
                                    //         e.errCode == f.not_open && (c = 2,
                                    //             Ta[4] = c))
                                    //     },
                                    //     fail: function() {
                                    //         c = 0,
                                    //             Ta[4] = c
                                    //     }
                                    // })
                                }
                                Ta[4] = c
                            } catch (e) {

                                try {
                                    _a && _a.addError("ext", e)
                                } catch (e) {
                                }
                            }
                        }(),
                        Na = !0
                } catch (e) {

                    try {
                        _a && _a.addError("getFingerExt", e)
                    } catch (e) {
                    }
                }
            Ea.ext = Ta,
                Ea.app = ja.appId,
                Ea.openid = ja.openId,
                Ea.unionid = ja.unionId,
                Ea.mchid = ja.mchId,
                Ea.sessionId = ja.sessionId;
            var c, n = Fa();
            Ea.dfpid = env['40a10de2']['dfpId'],
                Ea.localid = n.localId,
                Ea.filetime = n.timestamp;
            Ea.system = {
                "errMsg": "getSystemInfo:ok",
                "albumAuthorized": true,
                "benchmarkLevel": -1,
                "bluetoothEnabled": false,
                "brand": "microsoft",
                "cameraAuthorized": true,
                "fontSizeSetting": 15,
                "language": "zh_CN",
                "locationAuthorized": true,
                "locationEnabled": true,
                "microphoneAuthorized": true,
                "model": "microsoft",
                "notificationAuthorized": true,
                "notificationSoundEnabled": true,
                "pixelRatio": 1.25,
                "platform": "windows",
                "power": 100,
                "safeArea": {
                    "bottom": 736,
                    "height": 736,
                    "left": 0,
                    "right": 414,
                    "top": 0,
                    "width": 414
                },
                "screenHeight": 736,
                "screenWidth": 414,
                "statusBarHeight": 0,
                "system": "Windows 10 x64",
                "theme": "light",
                "version": "3.9.10",
                "wifiEnabled": true,
                "windowHeight": 736,
                "windowWidth": 414,
                "SDKVersion": "3.2.4",
                "enableDebug": true,
                "devicePixelRatio": 1.25,
                "host": {
                    "appId": "",
                    "env": "WeChat"
                },
                "networkType": "wifi",
                "brightness": 0.5,
                "LaunchOptionsSync": "{\"path\":\"pages/index/index\",\"query\":{},\"scene\":1053,\"referrerInfo\":{},\"apiCategory\":\"default\"}",
                "StorageInfo": "{\"currentSize\":36,\"errMsg\":\"getStorageInfo:ok\",\"keys\":[\"setting_privacy_recommend\",\"__PerfLastVisitVersion__\",\"mineNavPoint\",\"phf-chosen-loc\",\"__MTUC__authInfo\",\"wx_cold_boot_scene\",\"$PIKE_LOADBALANCE_UNDEFINED\",\"wx_set_info\",\"WXOWLKEY-unionId\",\"_lx_sdk_data\",\"guardSample\",\"_phfFpsConfig\",\"UNIFIED\",\"preloadHornConfig\",\"pub_session_list_info_success_time\",\"base-utils-actualloc\",\"isjoinGroupLocChanged\",\"wx_scene\",\"im_session_list_info_success_time\",\"_lx_sdk_interceptData\",\"40a10de2\",\"__MTUC__wxIds\",\"UUID\",\"oneid_mp\",\"matrixExp\",\"$PIKE_DEVICEID\",\"wx-safety-request-horn\",\"wxfd2e340553ce980d\"],\"limitSize\":10000}",
                "BatteryInfo": "{\"errMsg\":\"getBatteryInfo:ok\",\"isCharging\":true,\"level\":100}"
            },
                Ea.ext = [
                    0,
                    1,
                    1,
                    0,
                    4
                ],
                Ea.app = "wxfd2e340553ce980d",
                Ea.openid = "oH9sD5WheTVgGqwAPh_wnA-HX3hA",
                Ea.reportTick = 1;
            Ea['e'] = 'Error\n    at f (3ba88c5d48a84aa3d50a071f032bb12c-8555-YXBwc2VydmljZS5hcHAuanM=.cachedata:923:58118)\n    at Function.<anonymous> (3ba88c5d48a84aa3d50a071f032bb12c-8555-YXBwc2VydmljZS5hcHAuanM=.cachedata:923:57409)\n    at f (742efd91920223fd77006980e00aa8a3-8555-V0FTdWJDb250ZXh0Lmpz.cachedata:1:164353)\n    at 742efd91920223fd77006980e00aa8a3-8555-V0FTdWJDb250ZXh0Lmpz.cachedata:1:164796\n    at t.<anonymous> (742efd91920223fd77006980e00aa8a3-8555-V0FTdWJDb250ZXh0Lmpz.cachedata:1:126848)\n    at Function.<anonymous> (742efd91920223fd77006980e00aa8a3-8555-V0FTdWJDb250ZXh0Lmpz.cachedata:1:159685)\n    at p (85c9260c2629d6109bda91d908e01e3a-8555-V0FTZXJ2aWNlTWFpbkNvbnRleHQuanM=.cachedata:1:162976)\n    at 85c9260c2629d6109bda91d908e01e3a-8555-V0FTZXJ2aWNlTWFpbkNvbnRleHQuanM=.cachedata:1:163419\n    at 85c9260c2629d6109bda91d908e01e3a-8555-V0FTZXJ2aWNlTWFpbkNvbnRleHQuanM=.cachedata:1:150925'
            Ea['location'] = {
                "errMsg": "getLocation:ok",
                "latitude": 23.1813907623291,
                "longitude": 113.48066711425781,
                "_wm_getLocationType": "WX",
                "_wm_duration": 671,
                "_factitious": true
            }
            Ea['fsmode'] = [
                1716933692,
                1716967336,
                16822,
                0
            ]
            // console.log(Ea)
            try {
                var f = (c = Ea,
                    JSON[t(74)](function a(c, n) {
                        var f, r = [];
                        for (n = U(n); !(f = n())[t(75)];) {
                            var d = c[f = f[t(76)]];
                            if (t(32) === f && d && (d = JSON[t(78)](d),
                                d = JSON[t(74)]({
                                    path: d[t(80)],
                                    scene: d[t(81)]
                                })),
                            t(15) === f && d && Array[t(83)](d) && 0 < d[t(84)]) {
                                var o, i = [];
                                for (d = U(d); !(o = d())[t(75)];)
                                    (o = o[t(76)]).x && o.y && o.z && i[t(87)]([o.x, o.y, o.z]);
                                d = i
                            }
                            t(17) !== f && t(54) !== f && t(45) !== f || d && t(91) == e(d) && (d = JSON[t(78)](d)),
                                t(0) == e(d) && f in Be ? r[t(87)](a(d, Be[f])) : r[t(87)](d)
                        }
                        return r
                    }(c, Be[t(96)])));
                f = Oa.gzipSync(Oa.strToU8(f)),
                    a += z(Fe.codec.bytes.toBits(f))
            } catch (e) {

                try {
                    _a && _a.addError("getSiua", e)
                } catch (e) {
                }
            }
            return a
        },
        t: Ya,
        std: za,
        l: function (a) {
            "object" == e(a) && (a._factitious = !0,
                ja.factitiouslocation = !0,
                Ea.location = a)
        },
        sd: function (a, c) {
            "object" == e(a) && ("systeminfo" == c ? Object.assign(Ea.system, a) : Ea.system[c] = "batteryinfo" == c || "storageinfo" == c || "LaunchOptionsSync" == c || "wifiList" == c ? JSON.stringify(a) : a)
        },
        gis: function (e) {
            Object.keys(Ka).forEach((function (a) {
                    !function (e, a) {
                        try {
                            if (!e[a])
                                try {
                                    var c = Ka[a].api
                                        , n = Ka[a].fingerData;
                                    "getLaunchOptionsSync" == c && (Ea.system[n] = JSON.stringify(wx.getLaunchOptionsSync())),
                                        wx[c]({
                                            success: function (e) {
                                                if ("getSystemInfo" == c)
                                                    Object.assign(Ea.system, e);
                                                else if ("getNetworkType" == c) {
                                                    Ea.system.networkType = e.networkType;
                                                    try {
                                                        wx.onNetworkStatusChange((function (e) {
                                                                Ea.system.networkType = e.networkType
                                                            }
                                                        ))
                                                    } catch (e) {
                                                    }
                                                } else
                                                    "getScreenBrightness" == c ? Ea.system.brightness = e.value : "getBeacons" == c ? Ea.system.Beacons = JSON.stringify(e.beacons) : "getScreenRecordingState" == c ? (Ea.system.screenRecord = [],
                                                        Q(e),
                                                        function () {
                                                            try {
                                                                wx.onScreenRecordingStateChanged((function (e) {
                                                                        Q(e)
                                                                    }
                                                                ))
                                                            } catch (e) {
                                                            }
                                                        }()) : Ea.system[n] = JSON.stringify(e)
                                            }
                                        })
                                } catch (e) {
                                }
                        } catch (e) {
                        }
                    }(e, a)
                }
            ));
            try {
                wx.getPrivacySetting ? wx.getPrivacySetting({
                    success: function (e) {
                        e.needAuthorization || Va()
                    }
                }) : Va()
            } catch (e) {
            }
            !function (e) {
                try {
                    e.wifiinfo || wx.getSetting({
                        success: function (a) {
                            try {
                                a.authSetting && a.authSetting["scope.userLocation"] && wx.startWifi({
                                    success: function () {
                                        wx.getConnectedWifi({
                                            success: function (e) {
                                                Ea.system.WifiInfo = JSON.stringify(e.wifi)
                                            }
                                        });
                                        try {
                                            e.wifiList || "android" != Ea.system.platform || wx.getWifiList({
                                                success: function () {
                                                    try {
                                                        wx.onGetWifiList((function (e) {
                                                                Ea.system.wifiList = JSON.stringify(e.wifiList),
                                                                !Ma && Pa && (Ma = !0,
                                                                    Ya(Pa, {}, !0))
                                                            }
                                                        ))
                                                    } catch (e) {
                                                    }
                                                }
                                            })
                                        } catch (e) {
                                        }
                                    }
                                })
                            } catch (e) {
                            }
                        }
                    })
                } catch (e) {
                }
            }(e)
        },
        ss: function (e) {
            ja.sessionId = e
        },
        bio: function (e, a, c) {
            delete e.appid,
                delete e.dfpid,
                Ga((function (n) {
                        n = JSON.stringify(n),
                            n = JSON.parse(n),
                            Object.assign(n, e),
                            e = {},
                            function (e, a, c) {
                                try {
                                    var n, f = Oa.gzipSync(Oa.strToU8(JSON.stringify(e))),
                                        r = Ua.concat(z(Fe.codec.bytes.toBits(f)));
                                    e = {};
                                    var d = La(Ra) + "/fingerprint/v1/notapp/bio/info/report"
                                        , o = Date.now()
                                        , i = ((n = {}).jsgVersion = t(125),
                                        n.fingerPrintData = r,
                                        n.encryptVersion = 1,
                                        n.jsdfpVersion = t(125),
                                        n.time = Xa(),
                                        n.src = "2",
                                        n.index = a,
                                        n);
                                    c.request({
                                        url: d,
                                        method: "POST",
                                        data: i,
                                        header: {
                                            "content-type": "application/json"
                                        },
                                        success: function (e) {
                                            try {
                                                var a = 0;
                                                200 === e.statusCode && e.data && 0 !== e.data.code && (a = e.data.code),
                                                _a && _a.addApi("dfp_bio_req", e.statusCode, a, Date.now() - o, .1),
                                                _a && _a.addApi("dfp_bio_req_length", 200, 200, JSON.stringify(i).length, .1)
                                            } catch (e) {

                                                try {
                                                    _a && _a.addError("sendBio", e),
                                                    _a && _a.addApi("dfp_bio_req", 200, 9403, Date.now() - o, .1)
                                                } catch (e) {
                                                }
                                            }
                                        }
                                    })
                                } catch (e) {
                                    //
                                    try {
                                        _a && _a.addError("sendBio", e),
                                        _a && _a.addApi("dfp_bio_req", 200, 9404, Date.now() - o, .1)
                                    } catch (e) {
                                    }
                                }
                            }(n, a, c)
                    }
                ))
        },
        owl: function (e, a, c) {
            a && c ? (_a = a,
                Ja = c || Date.now()) : _a && _a.jsgowl() || _a && e && _a.initCat(e)
        },
        myguard: {}
    }, $a = {}, ec = "", ac = {}, cc = {}, nc = [], tc = "1.2", fc = "", rc = "", dc = 0, oc = 0; 64 > oc; ++oc)
        nc[oc] = "ZmserbBoHQtNP+wOcza/LpngG8yJq42KWYj0DSfdikx3VT16IlUAFM97hECvuRX5"[oc];
    var ic = t(429)
        , bc = t(327)
        , sc = function () {
        for (var a, c, n = 256, f = []; n--; f[n] = a >>> 0)
            for (c = 8,
                     a = n; c--;)
                a = 1 & a ? a >>> 1 ^ 3988292384 : a >>> 1;
        return function (a) {
            if (t(91) == e(a)) {
                for (var c = 0, n = -1; c < a[t(84)]; ++c)
                    n = f[255 & n ^ a[t(144)](c)] ^ n >>> 8;
                return 306674911 ^ n
            }
            for (c = 0,
                     n = -1; c < a[t(84)]; ++c)
                n = f[255 & n ^ a[c]] ^ n >>> 8;
            return 306674911 ^ n
        }
    }();
    return {
        init: function (e) {
            return c = e,
                new Promise((function (e) {
                        ue(c, !0, e)
                    }
                ));
            var c
        },
        initSync: function (e) {
            return ue(e, !1),
                ac
        },
        finger: Qa,
        doInitProxy: function () {
            Me[t(678)]()
        },
        clickTrack: he
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}),
    exports.MSID = function () {
        var e = []
            , n = (new Date).getTime();
        return e.push(n.toString(16)),
            e.push(s()),
            e.push(s()),
            e.push(s()),
            e.join("-")
    }
    ,
    exports.extend = function (e, n) {
        var r = {};
        if (e)
            for (var t in e)
                e.hasOwnProperty(t) && (r[t] = e[t]);
        if (n)
            for (var i in n)
                n.hasOwnProperty(i) && void 0 !== n[i] && (r[i] = n[i]);
        return r
    }
    ,
    exports.getMpVers = function (e) {
        var n = e.version || {};
        return {
            mpVer: n.wxAppVersion || n.appVersion || e.wxAppVersion || "Unknown",
            mpLibVer: n.wxLibVersion || e.wxLibVersion || "Unknown"
        }
    }
    ,
    exports.getVersions = function (e) {
        var n = {}
            , t = e.version || {};
        return n["".concat(r.channel, "AppVersion")] = t.wxAppVersion || t.appVersion || e.wxAppVersion || "Unknown",
            n["".concat(r.channel, "LibVersion")] = t.wxLibVersion || e.wxLibVersion || "Unknown",
            n["".concat(r.channel, "Version")] = t.wxVersion || e.wxVersion || "Unknown",
            n
    }
    ,
    exports.isFlatObj = function (e) {
        if (u(e)) {
            for (var n in e)
                if (e.hasOwnProperty(n) && !a(e[n]))
                    return !1;
            return !0
        }
        return !1
    }
    ,
    exports.isFunc = function (e) {
        return "function" == typeof e
    }
    ,
    exports.isMMP = function () {
        return "mmp" === r.sign
    }
    ,
    exports.isObj = u,
    exports.isSimple = a,
    exports.isWX = function () {
        return "wx" === r.sign
    }
    ,
    exports.requestQueue = function e(n) {
        n && (n.header && "zfb" === r.sign && (n.headers = n.header,
            delete n.header,
            n.dataType = "text"),
            o.push(n));
        if (!(o.length > 1 && n)) {
            var t = o[0]
                , i = t.complete;
            t.complete = function (n) {
                o.shift(),
                o.length && e(),
                i && i.call(this, n)
            }
                ,
                r.context.request(t)
        }
    }
    ,
    exports.stringify = function (e, n) {
        if (!n)
            return e;
        var r = [];
        for (var t in n)
            n.hasOwnProperty(t) && r.push(t + "=" + n[t]);
        return ~e.indexOf("?") ? e + "&" + r.join("&") : e + "?" + r.join("&")
    }

function _a(r, t) {
    var o = t || 0
        , s = e;
    return [s[r[o++]], s[r[o++]], s[r[o++]], s[r[o++]], "-", s[r[o++]], s[r[o++]], "-", s[r[o++]], s[r[o++]], "-", s[r[o++]], s[r[o++]], "-", s[r[o++]], s[r[o++]], s[r[o++]], s[r[o++]], s[r[o++]], s[r[o++]]].join("")
}

uuid1 = function (e, o, a) {
    var n = o && a || 0
        , c = o || []
        , d = (e = e || {}).node || [
        199,
        226,
        89,
        16,
        121,
        1
    ]
        , i = Date.now()
        , v = void 0 !== e.clockseq ? e.clockseq : 2294;
    if (null == d || null == v) {
        var f = (0,
            s.default)();
        null == d && (d = r = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]),
        null == v && (v = u = 16383 & (f[6] << 8 | f[7]))
    }
    var q = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
        , m = void 0 !== e.nsecs ? e.nsecs : 0 + 1
        , p = q - i + (m - 0) / 1e4;
    p < 0 && void 0 === e.clockseq && (v = v + 1 & 16383);
    (p < 0 || q > i) && void 0 === e.nsecs && (m = 0);
    if (m >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    i = q,
        l = m,
        u = v;
    var b = (1e4 * (268435455 & (q += 122192928e5)) + m) % 4294967296;
    c[n++] = b >>> 24 & 255,
        c[n++] = b >>> 16 & 255,
        c[n++] = b >>> 8 & 255,
        c[n++] = 255 & b;
    var h = q / 4294967296 * 1e4 & 268435455;
    c[n++] = h >>> 8 & 255,
        c[n++] = 255 & h,
        c[n++] = h >>> 24 & 15 | 16,
        c[n++] = h >>> 16 & 255,
        c[n++] = v >>> 8 | 128,
        c[n++] = 255 & v;
    for (var k = 0; k < 6; ++k)
        c[n + k] = d[k];
    return o || _a(c)
}
;
exports.traceid = function () {

    var e = uuid1().replace(/-/g, "")
        , n = e.slice(0, 16)
        , r = e.slice(16)
        , o = Array(16).fill(0).map((function (e, t) {
            return parseInt(n[15 - t], 16) ^ parseInt(r[15 - t], 16)
        }
    )).map((function (e) {
            return e.toString(16)
        }
    )).join("");
    return f.signedHexToDec(o)

}

// console.log(exports.traceid())
function s() {
    return Math.ceil(65535 * Math.random()).toString(16)
}

function u(e) {
    return e && "object" == n(e) && !(e instanceof Array)
}

function a(e) {
    var r = n(e);
    return "string" == r || "number" == r || "boolean" == r
}

function generateTraceId() {
    try {
        // 生成一个基于时间的字符串
        var timestamp = new Date().getTime().toString(16);

        // 确保字符串长度至少为32个字符
        while (timestamp.length < 32) {
            timestamp += '0';
        }

        // 分割字符串为两部分
        var part1 = timestamp.slice(0, 16);
        var part2 = timestamp.slice(16);

        // 进行 XOR 操作并生成新的字符串
        var xorResult = Array(16).fill(0).map((_, index) => {
            var char1 = part1[15 - index];
            var char2 = part2[15 - index];
            var xorValue = parseInt(char1, 16) ^ parseInt(char2, 16);
            return xorValue.toString(16);
        }).join('');

        // 将十六进制字符串转换为十进制数
        var decimalResult = parseInt(xorResult, 16);

        return decimalResult;
    } catch (e) {
        // 如果发生错误，返回空字符串
        return "";
    }
}


function getMtgsig(pageIndex) {
    const reqTime = Date.now()
    const reqobj =
        // `https://itrip.meituan.com/volga/api/v1/applet/trip/poi/info?source=weChat&client=weapp&feclient=lvyou_web&lat=23.1813907623291&lng=113.48066711425781&cityId=20&userid=&uuid=55DA1691C2B664434976054CBBE653C09A561CCF2526C20D0B3CAFD86665AEDB&version=9.8.0&selectedCityId=20&limit=20&offset=20&cateId=5&areaId=-1&sort=smart&buyCanUse=-1&subSortKey=-1&subSortType=&_token=${_token}&os=iphone&openId=${openId}&openIdCipher=${openIdCipher}&yodaReady=wx&csecappid=wx4fa555703dced95c&csecplatform=3&csecversionname=1.0.0&csecversion=1.4.0`
        {
    "url": "https://itrip.meituan.com/volga/api/v1/applet/trip/poi/info?source=weChat&client=weapp&feclient=lvyou_web&lat=23.1813907623291&lng=113.48066711425781&cityId=20&userid=&uuid=55DA1691C2B664434976054CBBE653C09A561CCF2526C20D0B3CAFD86665AEDB&version=9.8.0&selectedCityId=20&limit=20&offset=20&cateId=5&areaId=-1&sort=smart&buyCanUse=-1&subSortKey=-1&subSortType=&_token=eJxNistuozAUht%252FF2yAZG4zr7CCUcim0IYSQVl04QAgQkg6GEqjm3YdqIs1IR%252Bf7b9%252BgdTKwRLIsYyyBTsyaIiYrCBOKqSqB9L9MUTWVEgkc2tgEy3cVEYkq2sdPEM7%252BnSAmMSx%252FSP8UVuf7WTjzAHzyIhewvGT57e8HEgBz20RzO7O%252Bk9%252FZ3SnK4gKWIHcHVrWoHybdPwUP54Lu%252BfVCrjwzinE4r7OniepOG3S6k74Qs7ZsSr3aDk9Jeqymang0PAs9NEw3u69%252BgM9v2t6uPGud7AS%252BtW7iTOVhrViroDH0XaeVte%252BsmoWPzk2uHc1ax5vKfIyF7iZhW3g42WiHy5rzt1vtRXCEPh%252BvfSL7v9COfLqvmQmrbosF%252FQqSvoJH27MVRQSKK0YSlbG9a7eL%252FqTTqAj3i%252BvZ2uCQazGFouJ9Q2i0WbExPxlJaxiMPCtEfirUUnsZVNajVy%252BNcXrYTqZJodNtGQS%252F%252FwB95oqN&os=iphone&openId=oarwJ0VhVTMAwzDjsGoORjYDMz-w&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADh02uXsxxOY12CJ2NlSg0wxKc7M3JzfVjL1wzAzol4Rs8YNiIB7pfMMx%2FVPw7vTb5AxFQk4HrBDrg%3D%3D&yodaReady=wx&csecappid=wx4fa555703dced95c&csecplatform=3&csecversionname=1.0.0&csecversion=1.4.0",
    "data": {},
    "method": "GET",
    "header": {
        "openId": 'oarwJ0VhVTMAwzDjsGoORjYDMz-w'
    },
    "isRequest": false,
    "useSign": true
}

    return {'mtgsig': guard().initSync({}).signWithSiua(reqobj), 'reqTime': reqTime}
}

// console.log(getMtgsig(1))
console.log(getMtgsig()['mtgsig']['header']['mtgsig'])

