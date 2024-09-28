import Transaction from "../../models/transaction.js";
import Account from "../../models/account.js";

const transactionResolver = {
  Query: {
    transactions: async () => await Transaction.find(),
    transaction: async (_: any, { id }: any) => await Transaction.findById(id),
  },
  Mutation: {
    createTransaction: async (_: any, { input }: any) => {
      const newTransaction = new Transaction(input);
      await newTransaction.save();

      const senderAccount = await Account.findById(input.senderId);
      const receiverAccount = await Account.findById(input.receiverId);
      if (senderAccount && receiverAccount) {
        senderAccount.balance -= input.amount;
        receiverAccount.balance += input.amount;
        await senderAccount.save();
        await receiverAccount.save();
      }

      return newTransaction;
    },
  },
};

export default transactionResolver;
