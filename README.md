[# README: Future Order API Maintenance Bypass

## Introduction

This project provides a method to bypass the maintenance mode of the MEXC Futures Order API. There are individuals who sell this method for a significant amount of money, which isn't fair to the wider community. Therefore, I have made this method available for free.

You can run the code directly from JavaScript or use Python to execute it. This method utilizes MEXC's internal API by authenticating with a browser login session, specifically using the 'WEB' cookie. This cookie is crucial for the bypass to work, and I'll explain how to obtain it below.

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

2. **Install Node.js dependencies**:
   ```bash
   npm install axios md5
   ```

3. **Prepare the JavaScript file**:
   Ensure the JavaScript code is saved as `mexc_request.js` in the project directory.

4. **Prepare the Python file**:
   Ensure the Python code is saved as `execute_mexc_request.py` in the project directory.

## Obtaining the 'WEB' Cookie

To use this method, you need to authenticate with MEXC using your browser's login session. Here's how to obtain the 'WEB' cookie:

1. **Log in to your MEXC account**.
2. **Open the browser's Developer Tools**:
   - Press `F12` or right-click on the page and select "Inspect".
3. **Go to the "Application" or "Storage" tab**.
4. **Expand the "Cookies" section** and select the MEXC domain.
5. **Find the cookie named "u_id"**:
   - Copy its value (it should start with "WEB").
   - Use this value as the `key` in the JavaScript code.

## Usage

### 1. Running the JavaScript Code Directly

The JavaScript file (`mexc_request.js`) handles signing and sending the request to the MEXC Futures API.

To run the JavaScript code in the terminal:

```bash
node mexc_request.js '<json_string>'
```

Replace `<json_string>` with the JSON string of your request object. Example:

```bash
node mexc_request.js '{"symbol": "BTC_USDT", "side": 1, "openType": 1, "type": "1", "vol": 170, "leverage": 20, "price": 2.5, "priceProtect": "0"}'
```

### 2. Running the Python Code

Alternatively, you can use Python to execute the JavaScript file with the necessary parameters.

To run the Python code:

```bash
python3 execute_mexc_request.py
```

This command will internally call the `mexc_request.js` file, passing the JSON object as a command-line argument, and print the response from the MEXC Futures API.

### Example Workflow

1. **Edit the Python Object**: Modify the `obj` in `execute_mexc_request.py` to set your desired parameters for the API request.
2. **Run the Python Script**: Execute the Python script as described above.
3. **View the Output**: The response from the MEXC Futures API will be displayed in the terminal.

### Important Notes

- Ensure that the `key` variable in the JavaScript code is set to the correct value of your 'WEB' cookie.
- If errors occur, check the console output, as both Python and JavaScript files will provide detailed error messages.

## Conclusion

This project allows you to bypass the MEXC Futures Order API maintenance mode by utilizing an internal API with authentication through a browser login session. By following the instructions, you can easily authenticate and execute your API requests without needing to wait for the maintenance to end. This method is provided for free to ensure that everyone has fair access to these capabilities.

Feel free to customize the code as needed for your specific use case.

## Support

If you found this repository helpful, please give it a star to show your support! Your feedback and contributions are welcome to improve and expand the functionality of this project.]
