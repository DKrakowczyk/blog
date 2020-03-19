import React from "react";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";

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
  return (
    <Box theme="white">
      <CardImg top src={props.image} />
      <CardBody>
        <CardTitle>Lorem Ipjhygyuhsum</CardTitle>
        <p>{props.desc}</p>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Button outline squared href="/articles/single" theme="dark">
            Read more
          </Button>
        </div>
      </CardBody>
    </Box>
  );
};
