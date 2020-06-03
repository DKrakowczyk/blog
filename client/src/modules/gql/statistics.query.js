import gql from "graphql-tag";

export const GET_STATISTICS = gql`
  query {
    getStatistics {
      articlesCount
      draftsCount
      publishedCount
      commentsCount
    }
  }
`;
