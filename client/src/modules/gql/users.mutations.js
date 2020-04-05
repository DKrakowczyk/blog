import gql from "graphql-tag";

export const REMOVE_USER = gql`
  mutation deleteUser($userId: ObjectId!) {
    deleteUser(userId: $userId) {
      userName
    }
  }
`;

export const SWITCH_ROLES = gql`
  mutation switchRoles($userId: ObjectId!) {
    switchRoles(userId: $userId) {
      role
    }
  }
`;
