import Koa from "koa";
import Router from "@koa/router";
import { ApolloServer } from "apollo-server-koa";
import schema from "./graphql/schema";

export const app = new Koa();
const router = new Router();

async function startApolloServer() {
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });


  app.use(router.routes()).use(router.allowedMethods());
}

startApolloServer().catch((error) => {
  console.error("Erro ao iniciar o Apollo Server:", error);
});

