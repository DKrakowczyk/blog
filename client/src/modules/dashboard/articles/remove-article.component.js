import { useMutation } from "@apollo/react-hooks";
import { Tag } from "antd";
import React from "react";
import { REMOVE_ARTICLE } from "../../gql/articles.mutations";
import { GET_ALL_ARTICLES } from "../../gql/articles.queries";
import { openNotification } from "../common/notification.component";

export const RemoveArticle = ({ article, ...props }) => {
  const [removeArticle] = useMutation(REMOVE_ARTICLE, {
    refetchQueries: () => [
      {
        query: GET_ALL_ARTICLES
      }
    ]
  });

  const handleRemoveClick = async article => {
    try {
      await removeArticle({
        variables: { articleId: article._id }
      });
      openNotification(
        "success",
        "Doing some cleaning?",
        `Article ${article.name} was successfully deleted`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  return (
    <Tag
      color="red"
      onClick={() => {
        handleRemoveClick(article);
      }}
    >
      Delete
    </Tag>
  );
};
