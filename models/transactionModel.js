//in-memory transaction log
const transactions = [];

//Function to log a transaction
const addTransaction = (
  sourceAccountNumber,
  destinationAccountNumber,
  amount
) => {
  const transaction = {
    sourceAccountNumber,
    destinationAccountNumber,
    amount,
    timestamps: new Date().toISOString(),
  };
  transactions.push(transaction);
  return transaction;
};

module.exports = { transactions, addTransaction };
