import hashlib
import json
import time
from curl_cffi import requests

def md5(value):
    return hashlib.md5(value.encode('utf-8')).hexdigest()

def mexc_crypto(key, obj):
    date_now = str(int(time.time() * 1000))  
    g = md5(key + date_now)[7:] 
    s = json.dumps(obj, separators=(',', ':'))  
    sign = md5(date_now + s + g)  
    return {'time': date_now, 'sign': sign}

def place_order(key, obj, url):
    signature = mexc_crypto(key, obj)
    headers = {
        'Content-Type': 'application/json',
        'x-mxc-sign': signature['sign'],
        'x-mxc-nonce': signature['time'],
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'Authorization': key
    }
    response = requests.post(url, headers=headers, json=obj)
    return response.json()
key = 'WEB...'
obj = { 
    "symbol": "BTC_USDT", 
    "side": 1, 
    "openType": 1, 
    "type": "1", 
    "vol": 170, 
    "leverage": 20, 
    "price": 2.5, 
    "priceProtect": "0" 
}

url = 'https://futures.mexc.com/api/v1/private/order/create'  

response = place_order(key, obj, url)
print(response)
