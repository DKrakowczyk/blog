import gql from "graphql-tag";

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      _id
      name
      description
    }
  }
`;
