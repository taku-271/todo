import { createSchema, createYoga } from "graphql-yoga";

import { resolvers } from "./graphqls/generated/resolvers.generated";
import { typeDefs } from "./graphqls/generated/typeDefs.generated";

const port = process.env.PORT || 4000;

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

const server = Bun.serve({
  fetch: yoga.fetch,
  port,
});

console.info(
  `Server is running on http://${server.hostname}:${server.port}${yoga.graphqlEndpoint}`
);
