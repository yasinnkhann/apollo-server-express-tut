const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { typeDefs } = require('./schema/TypeDefs');
const { resolvers } = require('./schema/Resolvers');
const express = require('express');
const http = require('http');

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 3001;

async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
}
start();
