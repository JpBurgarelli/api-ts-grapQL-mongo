import { gql } from "apollo-server-koa";
import { makeExecutableSchema } from "@graphql-tools/schema";
import accountResolver from "./resolvers/accountResolver.js";
import transactionResolver from "./resolvers/transactionResolver.js";

const typeDefs = gql`
  type Account {
    id: ID!
    name: String!
    balance: Float!
  }

  input AccountInput {
    name: String!
    balance: Float!
  }

  type Transaction {
    id: ID!
    senderId: ID!
    receiverId: ID!
    amount: Float!
    date: String!
  }

  input TransactionInput {
    senderId: ID!
    receiverId: ID!
    amount: Float!
  }

  type Query {
    accounts: [Account]
    account(id: ID!): Account
    transactions: [Transaction]
    transaction(id: ID!): Transaction
  }

  type Mutation {
    createAccount(input: AccountInput): Account
    createTransaction(input: TransactionInput): Transaction
  }
`;

const resolvers = {
  ...accountResolver,
  ...transactionResolver,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
