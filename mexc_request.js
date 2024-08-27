
const axios = require('axios');
const md5 = require('md5');

var mexc_crypto = (key, obj) => {
    let date_now = String(Date.now());
    let g = md5(key + date_now).substring(7);
    let s = JSON.stringify(obj);
    let sign = md5(date_now + s + g);

    return { time: date_now, sign: sign };
}

let key = 'WEB...'; 


let obj = {
    "symbol": "BTC_USDT",
    "side": 1,
    "openType": 1,
    "type": "1",
    "vol": 170,
    "leverage": 20,
    "price": 2.5,
    "priceProtect": "0"
};


let sign = mexc_crypto(key, obj);

async function sendRequest() {
    console.log("Sending request...");
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://futures.mexc.com/api/v1/private/order/submit',
            data: obj,
            headers: {
                accept: "*/*",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "authorization": key,
                "content-type": "application/json",
                "x-kl-ajax-request": "Ajax_Request",
                "x-mxc-nonce": sign.time,
                "x-mxc-sign": sign.sign,
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.142.86 Safari/537.36'

            }
        });
        console.log("Response Data:", response.data);
    } catch (error) {
        console.log("Error Message:", error.message);
        console.log("Error Response:", error.response ? error.response.data : "No response data");
    }
}

sendRequest();
