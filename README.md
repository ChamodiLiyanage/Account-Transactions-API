# Account-Transactions-API

This is a simple Node.js and Express API for handling account transfers between bank accounts. The API supports basic operations like transferring funds between accounts and logging transactions.


## Features

- **Transfer Funds:** Transfer money between accounts with appropriate error handling.
- **Error Handling:** Detailed error messages for situations like non-existent accounts and insufficient funds 
- **Transaction Logging:** Logs each transfer with a timestamp.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ChamodiLiyanage/Account-Transactions-API.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Account-Transactions-API
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the API

To start the API server, run:

```bash
node app.js
 ```
By default, the server will run on http://localhost:3000.

## API Endpoints

- **Endpoint:** `POST /api/transfer`
- **Description:** Transfers a specified amount from one account to another.
- **Request Body:**
  
    ```bash
    {
      "sourceAccountNumber": "12345",
      "destinationAccountNumber": "67890",
      "amount": 1000
    }
   ```
- **Response:**
     ```bash
   {
        "message": "Transfer successful",
        "sourceAccount": {
        "accountNumber": "12345",
        "balance": 99000
    },
        "destinationAccount": {
            "accountNumber": "67890",
            "balance": 201000
        },
        "transaction": {
            "sourceAccountNumber": "12345",
            "destinationAccountNumber": "67890",
            "amount": 1000,
            "timestamp": "2024-08-19T12:34:56.789Z"
        }
  }

   ```

## Error Handling

- **Non-existent Accounts:** Returns an error if the source or destination account does not exist.
- **Insufficient Funds:** Returns an error if the source account has insufficient funds.

## Testing

<h4>Running Tests</h4>

This project includes a set of basic tests to ensure the functionality of the API. To run the tests, you'll need to have Jest installed. This is a popular JavaScript testing frameworks.

1. Install Jest dependencies:

    ```bash
    npm install --save-dev jest
    ```

2. Add the following test script to your package.json file:

    ```bash
      "scripts": {
      "test": "jest"
    }
    ```

3. Run the tests:

    ```bash
      npm test
    ```

### Testing with Postman

You can also use Postman to manually test the API:

1. Open Postman and create a new 'POST' request.
2. Set the URL to 'http://localhost:3000/api/transfer'.
3. Under the 'Body' tab, select 'raw' and 'JSON'.
4. Provide the request payload as shown above.
5. Click 'Send' to execute the transfer.

Happy Coding!
    
