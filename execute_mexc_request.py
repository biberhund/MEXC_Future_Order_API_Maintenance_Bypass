import subprocess
import json

def execute_mexc_request(obj):

    obj_json = json.dumps(obj)

    result = subprocess.run(['node', 'mexc_request.js', obj_json], capture_output=True, text=True)

    return result.stdout

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

response = execute_mexc_request(obj)
print(response)
