## Introduction

This project provides a method to bypass the maintenance mode of the MEXC Futures Order API. 

You can run the code  from JavaScript or Python to execute it. This method utilizes MEXC's internal API by authenticating with a browser login session, specifically using the 'WEB' cookie. This cookie is crucial for the bypass to work, and I'll explain how to obtain it below.

## Disclaimer

**This project is for educational purposes only.** Use it at your own risk. While this method will not block your account, it's crucial to trade responsibly and ensure you understand the risks involved in trading. Improper use or poor trading decisions can lead to financial losses.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Required to run the JavaScript code. Download it from [here](https://nodejs.org/).
- **Python**: Required to run the Python script. Download it from [here](https://www.python.org/).

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ismail-amouma/Future_Order_API_Maintenance_Bypass
   cd Future_Order_API_Maintenance_Bypass
   ```

2. **Install dependencies**:

   for nodejs :
   ```bash
   npm install axios md5
   ```
   for python :
      ```bash
   pip install curl-cffi
   ```


## Obtaining the 'WEB' Cookie

To use this method, you need to authenticate with MEXC using your browser's login session. Here's how to obtain the 'WEB' cookie:

1. **Log in to your MEXC account**.
2. **Open the browser's Developer Tools**:
   - Press `F12` or right-click on the page and select "Inspect".
3. **Go to the "Application" or "Storage" tab**.
4. **Expand the "Cookies" section** and select the MEXC domain.
5. **Find the cookie named "u_id"**:
   - Copy its value (it should start with "WEB").
   - Use this value as the `key` in the code.

## Usage

### 1. Running the JavaScript Code Directly

The JavaScript file (`mexc_request.js`) handles signing and sending the request to the MEXC Futures API.

To run the JavaScript code in the terminal:

```bash
node mexc_request.js 
```

### 2. Running the Python Code

Alternatively, you can use Python to do the same thing.

To run the Python code:

```bash
python3 mexc_request.py
```


### Example Workflow

1. **Edit the Python Object**: Modify the `obj` in `mexc_request.py` or in `mexc_request.js` to set your desired parameters for the API request.
2. **Run the  Script**: Execute the  script as described above.
3. **View the Output**: The response from the MEXC Futures API will be displayed in the terminal.

### Important Notes

- Ensure that the `key` variable in the code is set to the correct value of your 'WEB' cookie.
- If errors occur, check the console output, as both Python and JavaScript files will provide detailed error messages.

## Support

If you found this repository helpful, please give it a star to show your support! Your feedback and contributions are welcome to improve and expand the functionality of this project.]
