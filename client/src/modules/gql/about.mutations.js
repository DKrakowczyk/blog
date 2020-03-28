import gql from "graphql-tag";

export const EDIT_ABOUT = gql`
  mutation editAbout($about: AboutInput!) {
    editAbout(about: $about) {
      about
    }
  }
`;
