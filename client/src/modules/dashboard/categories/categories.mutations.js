import gql from "graphql-tag";

export const ADD_CATEGORY = gql`
  mutation addCategory($input: AddCategoryInput!) {
    addCategory(input: $input) {
      name
      description
    }
  }
`;

export const EDIT_CATEGORY = gql`
  mutation editCategory($input: EditCategoryInput!) {
    editCategory(input: $input) {
      name
      description
    }
  }
`;

export const REMOVE_CATEGORY = gql`
  mutation removeCategory($categoryId: ObjectId!) {
    removeCategory(categoryId: $categoryId) {
      name
      description
    }
  }
`;
