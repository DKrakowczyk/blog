// eslint-disable-next-line
import React from "react";
import { notification } from "antd";

export const openNotification = (type, message, description) => {
  const args = {
    message: message,
    description: description,
    duration: 2
  };
  notification[type](args);
};
