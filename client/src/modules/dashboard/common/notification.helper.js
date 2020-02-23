import { notification, Icon } from "antd";
import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const placement = "bottomRight";
const duration = 5;
export const HelpButton = props => {
  const HelpButton = styled(Icon)`
    float: right;
  `;

  return <HelpButton type="compass" theme="filled" onClick={props.fn} />;
};

export const ArticlesHelp = () => {
  notification.open({
    message: "Articles",
    description:
      "Do you have new article idea? Create a new one, edit previous articles and delete them when you want.",
    icon: <Icon type="rocket" style={{ color: "#108ee9" }} />,
    duration: duration,
    placement
  });
};

export const IdeasHelp = () => {
  notification.open({
    message: "Ideas",
    description:
      "Here you can write down your ideas. Mark them as completed when you are ready!",
    icon: <Icon type="bulb" style={{ color: "#108ee9" }} />,
    duration: duration,
    placement
  });
};

export const CategoriesHelp = () => {
  notification.open({
    message: "Categories",
    description:
      "You should add some categories to assign articles to them. Feel free to add, edit and delete them!",
    icon: <Icon type="tag" style={{ color: "#108ee9" }} />,
    duration: duration,
    placement
  });
};

export const MediaHelp = () => {
  notification.open({
    message: "Media",
    description:
      "Want some images or other media files in your articles or about section? Simply drag them into upload area and click on them to generate related URL",
    icon: <Icon type="heat-map" style={{ color: "#108ee9" }} />,
    duration: duration,
    placement
  });
};

export const UsersHelp = () => {
  notification.open({
    message: "Users",
    description:
      "Here you can track the activity of signed-up users. See their comments and ratings. You can also edit or remove them as administrator of the page.",
    icon: <Icon type="user" style={{ color: "#108ee9" }} />,
    duration: duration,
    placement
  });
};
