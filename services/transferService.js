const accounts = require("../models/accountModel");
const { addTransaction } = require("../models/transactionModel");

//Function to handle fund transfers
const transferFunds = (
  sourceAccountNumber,
  destinationAccountNumber,
  amount
) => {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error(
      "Invalid transfer amount. The amount must be a positive number."
    );
  }
  if (!accounts[sourceAccountNumber] && !accounts[destinationAccountNumber]) {
    throw new Error("Both source and destination accounts do not exist");
  }
  if (!accounts[sourceAccountNumber]) {
    throw new Error("Source account does not exist");
  }
  if (!accounts[destinationAccountNumber]) {
    throw new Error("Destination account does not exist");
  }
  if (accounts[sourceAccountNumber].balance < amount) {
    throw new Error("Insufficient funds");
  }

  //Perform the transfer
  accounts[sourceAccountNumber].balance -= amount;
  accounts[destinationAccountNumber].balance += amount;

  //Log the transaction
  const transaction = addTransaction(
    sourceAccountNumber,
    destinationAccountNumber,
    amount
  );

  return {
    sourceAccount: accounts[sourceAccountNumber],
    destinationAccount: accounts[destinationAccountNumber],
    transaction,
  };
};

module.exports = { transferFunds };
