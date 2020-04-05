import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
  query {
    findAllUsers {
      _id
      userName
      email
      role
    }
  }
`;
