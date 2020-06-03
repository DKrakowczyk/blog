import gql from "graphql-tag";

export const GET_SINGLE_CATEGORY = gql`
  query getSingleArticle($categoryId: ObjectId!) {
    getCategory(categoryId: $categoryId) {
      name
      description
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      _id
      name
      description
    }
  }
`;
