import { useMutation } from "@apollo/react-hooks";
import { Icon } from "antd";
import React from "react";
import { REMOVE_CATEGORY } from "../../gql/categories.mutations";
import { GET_ALL_CATEGORIES } from "../../gql/categories.queries";
import { openNotification } from "../common/notification.component";

export const RemoveCategory = props => {
  const [removeCategory] = useMutation(REMOVE_CATEGORY, {
    refetchQueries: () => [
      {
        query: GET_ALL_CATEGORIES
      }
    ]
  });

  const handleRemoveClick = async category => {
    try {
      await removeCategory({
        variables: { categoryId: category._id }
      });
      openNotification(
        "success",
        "Doing some cleaning?",
        `Category ${category.name} was successfully deleted`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  return (
    <Icon
      type="delete"
      key="edit"
      onClick={() => handleRemoveClick(props.category)}
    />
  );
};
