import { useMutation } from "@apollo/react-hooks";
import { Tag } from "antd";
import React from "react";
import { REMOVE_USER } from "../../gql/users.mutations";
import { GET_ALL_USERS } from "../../gql/users.queries";
import { openNotification } from "../common/notification.component";

export const RemoveUser = props => {
  const [removeUser] = useMutation(REMOVE_USER, {
    refetchQueries: () => [
      {
        query: GET_ALL_USERS
      }
    ]
  });

  const handleRemoveClick = async user => {
    try {
      await removeUser({
        variables: { userId: user._id }
      });
      openNotification(
        "success",
        "Don't like him?",
        `${user.userName} was successfully removed`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  return (
    <Tag
      color="red"
      onClick={() => {
        handleRemoveClick(props.record);
      }}
    >
      Delete
    </Tag>
  );
};
