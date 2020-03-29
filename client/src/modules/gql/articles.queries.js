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
      created_at
    }
  }
`;

export const SEARCH_ARTICLES = gql`
  query searchAllArticles($title: String!) {
    searchAllArticles(title: $title) {
      _id
      title
      description
      created_at
      categories {
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
        _id
        name
      }
      comments {
        comment
        author {
          userName
        }
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

export const GET_FROM_CATEGORY = gql`
  query getFromCategory($categoryId: ObjectId!) {
    getFromCategory(categoryId: $categoryId) {
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
