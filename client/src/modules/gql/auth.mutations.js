import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation signUp($signUp: AddUserInput!) {
    signUp(signUp: $signUp) {
      userName
      email
      role
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($signIn: SignInUserInput!) {
    signIn(signIn: $signIn) {
      token
      refreshToken
      tokenExpiration
    }
  }
`;
