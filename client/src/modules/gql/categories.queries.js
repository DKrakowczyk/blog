import gql from "graphql-tag";

export const GET_SINGLE_CATEGORY = gql`
  query getSingleArticle($categoryId: ObjectId!) {
    getCategory(categoryId: $categoryId) {
      name
      description
    }
  }
`;
