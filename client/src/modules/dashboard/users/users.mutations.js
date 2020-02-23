import gql from "graphql-tag";

export const REMOVE_USER = gql`
  mutation deleteUser($userId: ObjectId!) {
    deleteUser(userId: $userId) {
      userName
    }
  }
`;
