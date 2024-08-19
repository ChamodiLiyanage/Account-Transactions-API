const { transferFunds } = require("../services/transferService");
const accounts = require("../models/accountModel");
const { transactions } = require("../models/transactionModel");

describe("TransferService", () => {
  test("should transfer funds successfully and record transaction", () => {
    const initialSourceBalance = accounts["12345"].balance;
    const initialDestBalance = accounts["67890"].balance;
    const amount = 1000;

    const result = transferFunds("12345", "67890", amount);

    expect(result.sourceAccount.balance).toBe(initialSourceBalance - amount);
    expect(result.destinationAccount.balance).toBe(initialDestBalance + amount);

    expect(transactions).toHaveLength(1);

    expect(transactions[0]).toEqual({
      sourceAccountNumber: "12345",
      destinationAccountNumber: "67890",
      amount,
      timestamps: expect.any(String),
    });
  });

  test("should throw error if both source and destination accounts do not exist", () => {
    expect(() => {
      transferFunds("11100", "66655", 1000);
    }).toThrow("Both source and destination accounts do not exist");
  });

  test("should throw error if source account does not exist", () => {
    expect(() => {
      transferFunds("11100", "67890", 1000);
    }).toThrow("Source account does not exist");
  });

  test("should throw error if destination account does not exist", () => {
    expect(() => {
      transferFunds("12345", "66655", 1000);
    }).toThrow("Destination account does not exist");
  });

  test("should throw error if there are insufficient funds", () => {
    expect(() => {
      transferFunds("12345", "67890", 500000);
    }).toThrow("Insufficient funds");
  });
});
