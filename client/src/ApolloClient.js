import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
  }
});
