import { useMutation } from "@apollo/react-hooks";
import { Tag } from "antd";
import React from "react";
import { openNotification } from "../common/notification.component";
import { SWITCH_ROLES } from "../../gql/users.mutations";
import { GET_ALL_USERS } from "../../gql/users.queries";

export const SwitchRole = props => {
  const [changeRole] = useMutation(SWITCH_ROLES, {
    refetchQueries: () => [
      {
        query: GET_ALL_USERS
      }
    ]
  });

  const switchRoles = async user => {
    try {
      await changeRole({
        variables: { userId: user._id }
      });
      openNotification(
        "success",
        "Promoted?",
        `${user.userName} role was successfully changed`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  return (
    <Tag
      color="blue"
      onClick={() => {
        switchRoles(props.record);
      }}
    >
      Switch role
    </Tag>
  );
};
