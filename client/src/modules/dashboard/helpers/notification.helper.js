import { notification, Icon } from "antd";
import React from "react";
export const IdeasNotification = () => {
  notification.open({
    message: "Ideas",
    description:
      "Here you can write down your ideas. Mark them as completed when you are ready!",
    icon: <Icon type="bulb" style={{ color: "#108ee9" }} />,
    duration: 3
  });
};
