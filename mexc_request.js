
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


let obj = JSON.parse(process.argv[2]);


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
            }
        });
        console.log("Response Data:", response.data);
    } catch (error) {
        console.log("Error Message:", error.message);
        console.log("Error Response:", error.response ? error.response.data : "No response data");
    }
}

sendRequest();
