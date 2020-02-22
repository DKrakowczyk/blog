import { notification, Icon } from "antd";
import React from "react";
import { Button } from "antd";
import styled from "styled-components";
export const HelpButton = props => {
  const HelpButton = styled(Icon)`
    float: right;
  `;

  return <HelpButton type="compass" theme="filled" onClick={props.fn} />;
};

export const IdeasNotification = () => {
  notification.open({
    message: "Ideas",
    description:
      "Here you can write down your ideas. Mark them as completed when you are ready!",
    icon: <Icon type="bulb" style={{ color: "#108ee9" }} />,
    duration: 3
  });
};

export const CategoriesHelp = () => {
  notification.open({
    message: "Categories",
    description:
      "You should add some categories to assign articles to them. Feel free to add, edit and delete them!",
    icon: <Icon type="tag" style={{ color: "#108ee9" }} />,
    duration: 3
  });
};
