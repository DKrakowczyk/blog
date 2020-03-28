import { useMutation } from "@apollo/react-hooks";
import { Tag } from "antd";
import React from "react";
import {
  PUBLISH_ARTICLE,
  UNPUBLISH_ARTICLE
} from "../../gql/articles.mutations";
import { GET_ALL_ARTICLES } from "../../gql/articles.queries";
import { openNotification } from "../common/notification.component";

export const PublishArticle = ({ article, ...props }) => {
  const [publishArticle] = useMutation(PUBLISH_ARTICLE, {
    refetchQueries: () => [
      {
        query: GET_ALL_ARTICLES
      }
    ]
  });

  const [unpublishArticle] = useMutation(UNPUBLISH_ARTICLE, {
    refetchQueries: () => [
      {
        query: GET_ALL_ARTICLES
      }
    ]
  });

  const handlePublishClick = async article => {
    try {
      await publishArticle({
        variables: { articleId: article._id }
      });
      openNotification(
        "success",
        "Another new article?",
        `Article ${article.title} was successfully published`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  const handleUnpublishClick = async article => {
    try {
      await unpublishArticle({
        variables: { articleId: article._id }
      });
      openNotification(
        "success",
        "Want to change something?",
        `Article ${article.title} was successfully make as private`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  const PublishButton = article.isDraft ? (
    <Tag
      color="magenta"
      onClick={() => {
        handlePublishClick(article);
      }}
    >
      Publish
    </Tag>
  ) : (
    <Tag
      color="green"
      onClick={() => {
        handleUnpublishClick(article);
      }}
    >
      Published
    </Tag>
  );

  return <div>{PublishButton}</div>;
};
