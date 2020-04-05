import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle
} from "shards-react";
import styled from "styled-components";

const Box = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  transition: box-shadow 0.5s ease-in;
  &:hover {
    -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.75);
  }
`;

export const ArticleBox = props => {
  const url = "/articles/" + props.id;
  return (
    <Box theme="white">
      <CardImg top src={props.image} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.desc}</p>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Button outline squared href={url} theme="dark">
            Read more
          </Button>
        </div>
      </CardBody>
      <CardFooter>
        <span style={{ float: "right", color: "#000" }}>{props.category}</span>
      </CardFooter>
    </Box>
  );
};
