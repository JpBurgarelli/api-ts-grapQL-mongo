import Account from "../../models/account";

const accountResolver = {
  Query: {
    accounts: async () => await Account.find(),
    account: async (_: any, { id }: any) => await Account.findById(id),
  },
  Mutation: {
    createAccount: async (_: any, { input }: any) => {
      console.log("Dados da nova conta recebidos:", input);

      const newAccount = new Account(input);
      console.log("Nova conta criada (não salva ainda):", newAccount);

      await newAccount.save();
      console.log("Conta salva no banco de dados:", newAccount);

      return newAccount;
    },
  },
};

export default accountResolver;

