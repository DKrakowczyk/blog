import { Tag } from "antd";
import React from "react";
import { openNotification } from "../common/notification.component";

export const ToggleIdea = props => {
  const handleToggleClick = async () => {
    try {
      fetch(`http://localhost:4000/ideas/${props.id}`, {
        method: "PUT"
      });
      openNotification(
        "success",
        "Working hard?",
        `Idea status was successfully changed`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  return (
    <Tag color="purple" onClick={() => handleToggleClick()}>
      Toggle status
    </Tag>
  );
};
