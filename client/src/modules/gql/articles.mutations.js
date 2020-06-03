import gql from "graphql-tag";

export const ADD_ARTICLE = gql`
  mutation createArticle($article: AddArticleInput!) {
    createArticle(addArticle: $article) {
      _id
      title
      description
      body
      isDraft
      timeToRead
      created_at
    }
  }
`;

export const EDIT_ARTICLE = gql`
  mutation editArticle($article: EditArticleInput!) {
    editArticle(editArticle: $article) {
      _id
      title
      description
      body
      isDraft
      timeToRead
    }
  }
`;

export const PUBLISH_ARTICLE = gql`
  mutation publishArticle($articleId: ObjectId!) {
    publishArticle(articleId: $articleId) {
      title
    }
  }
`;

export const UNPUBLISH_ARTICLE = gql`
  mutation unpublishArticle($articleId: ObjectId!) {
    unpublishArticle(articleId: $articleId) {
      title
    }
  }
`;

export const REMOVE_ARTICLE = gql`
  mutation deleteArticle($articleId: ObjectId!) {
    deleteArticle(articleId: $articleId) {
      title
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($articleId: ObjectId!, $addComment: AddCommentInput!) {
    addComment(articleId: $articleId, addComment: $addComment) {
      comment
      authorName
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($articleId: ObjectId!, $commentId: ObjectId!) {
    removeComment(articleId: $articleId, commentId: $commentId) {
      _id
    }
  }
`;
