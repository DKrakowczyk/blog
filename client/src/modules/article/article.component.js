import { useQuery } from "@apollo/react-hooks";
import React from "react";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
const ArticleWrapper = styled.article`
  background: #fff;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  text-align: center;
  margin-top: 50px;
  padding: 20px 20px 0;
  -webkit-box-shadow: 0 3px 12px -1px rgba(7, 10, 25, 0.05),
    0 22px 27px -20px rgba(7, 10, 25, 0.05);
  box-shadow: 0 3px 12px -1px rgba(7, 10, 25, 0.05),
    0 22px 27px -20px rgba(7, 10, 25, 0.05);
`;

const ArticleHeader = styled.header`
  position: relative;
  z-index: 2;
  margin: -20px -20px 0;
  margin-bottom: 23px;
`;

const FeaturedImage = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`;

const Cover = styled.span`
  background-image: url(http://ghost.estudiopatagon.com/breek/content/images/size/w700h500/2019/05/423994-PDRVB5-888-fullhd.jpg);
  display: block;
  height: 200px;
  background-size: cover;
`;

const Separator = styled.div`
  border-bottom: 0.5px solid grey;
`;

const Content = styled.div`
  .date {
    color: red;
  }
  .title {
    font-size: 24px;
  }
  .author {
  }
  .comment {
    text-align: right;
  }
`;

export const ArtcleBox = props => {
  //   const { loading, error, data } = useQuery(GET_ALL_REPORTS);
  //   const reports = data ? data.findAllReports : null;

  //   if (loading) return <Skeleton />;

  //   if (error)
  //     return (
  //       <ErrorBox>
  //         <ErrorMessage>An error occured</ErrorMessage>
  //       </ErrorBox>
  //     );

  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
  );
};
