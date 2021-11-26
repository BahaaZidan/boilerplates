import { ApolloServer } from "apollo-server";

import resolvers from "./resolvers";
import schema from "./schema";

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
