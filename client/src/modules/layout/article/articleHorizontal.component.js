import React from "react";
import { Badge, Card, CardBody, CardFooter, CardTitle } from "shards-react";
import styled from "styled-components";

const DarkHorizontal = styled(Card)`
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  margin: auto;
  margin-bottom: 35px;
  width: 70%;
  color: #fff !important;
  -webkit-box-shadow: 0px 0px 26px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 0px 26px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 0px 26px 0px rgba(50, 50, 50, 0.75);

  a {
    color: black !important;
  }
`;

const CategoryBadge = styled(Badge)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 30px;
  text-align: center;
  font-size: 15px;
  color: #fff !important;
`;

export const ArticleHorizontal = props => {
  const url = "/articles/" + props.id;

  const colors = [
    "success",
    "info",
    "danger",
    "dark",
    "success",
    "info",
    "danger",
    "dark",
    "success",
    "info",
    "danger",
    "dark"
  ];

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const date = props.date
    ? new Date(props.date).toLocaleDateString("en-US", options)
    : "";

  return (
    <>
      <DarkHorizontal>
        <span>
          <CategoryBadge
            theme={colors[Math.floor(Math.random() * colors.length)]}
          >
            {props.category}
          </CategoryBadge>
        </span>
        <CardBody>
          <CardTitle>
            <a href={url}>{props.title}</a>
          </CardTitle>
          <p>{props.desc.slice(0, 150)}...</p>
          <div style={{ margin: "auto", textAlign: "center" }}></div>
        </CardBody>
        <CardFooter>
          <span style={{ float: "right", color: "#000" }}>{date}</span>
        </CardFooter>
      </DarkHorizontal>
    </>
  );
};
