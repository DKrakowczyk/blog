import gql from "graphql-tag";

export const GET_ABOUT_SHORT = gql`
  query {
    getAbout {
      about
    }
  }
`;

export const GET_ABOUT_SOCIAL = gql`
  query {
    getAbout {
      facebook
      instagram
      twitter
      linkedIn
    }
  }
`;
