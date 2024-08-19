const { transferFunds } = require("../services/transferService");

//Controller to handle the transfer request
const transferController = (req, res) => {
  const { sourceAccountNumber, destinationAccountNumber, amount } = req.body;

  try {
    const result = transferFunds(
      sourceAccountNumber,
      destinationAccountNumber,
      amount
    );
    res.status(200).json({
      message: "Transfer successful",
      sourceAccount: result.sourceAccount,
      destinationAccount: result.destinationAccount,
      transaction: result.transaction,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { transferController };
