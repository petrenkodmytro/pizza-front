import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  // https://assuring-kodiak-14.hasura.app/v1/graphql
  // http://localhost:8080/v1/graphql
  cache: new InMemoryCache(),
});
