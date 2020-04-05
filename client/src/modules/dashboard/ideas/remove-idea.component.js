import { Tag } from "antd";
import React from "react";
import { openNotification } from "../common/notification.component";
export const RemoveIdea = props => {
  const handleRemoveClick = async () => {
    try {
      fetch(`http://localhost:4000/ideas/${props.id}`, {
        method: "DELETE"
      });
      openNotification(
        "success",
        "Working hard?",
        `Idea  was successfully deleted`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  return (
    <Tag color="red" onClick={() => handleRemoveClick()}>
      Delete
    </Tag>
  );
};
