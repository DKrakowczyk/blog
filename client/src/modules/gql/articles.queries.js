import gql from "graphql-tag";

export const GET_ALL_ARTICLES = gql`
  query {
    getAllArticles {
      _id
      heroImg
      title
      description
      body
      isDraft
      timeToRead
      categories {
        _id
        name
      }
    }
  }
`;

export const GET_SINGLE_ARTICLE = gql`
  query getSingleArticle($articleId: ObjectId!) {
    getSingleArticle(articleId: $articleId) {
      _id
      title
      description
      body
      timeToRead
      created_at
      categories {
        name
      }
    }
  }
`;

export const GET_RANDOM_ARTICLES = gql`
  query getArticlesExcept($articleId: ObjectId!) {
    getArticlesExcept(articleId: $articleId) {
      _id
      heroImg
      title
      description
      body
      timeToRead
      created_at
      categories {
        name
      }
    }
  }
`;
