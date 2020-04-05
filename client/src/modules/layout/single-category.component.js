import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row
} from "shards-react";
import styled from "styled-components";
import { ArticleGallery } from "./article/articleGallery.component";
import { NavbarLanding } from "./navbar/navbar.component";
import { GET_SINGLE_CATEGORY } from "../gql/categories.queries";
import { GET_FROM_CATEGORY } from "../gql/articles.queries";
const Categories = styled(Card)`
  text-align: center;
  margin: auto;
  margin-bottom: 25px;
  margin-top: 25px;
  color: #000 !important;
  width: 70%;
`;

const CategoryBadge = styled(Badge)`
  font-size: 24px;
  padding: 10px;
  text-transform: uppercase;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0px;
  color: #fff;
`;

export const SingleCategory = props => {
  const { categoryId } = useParams();

  const { data: dataArticles } = useQuery(GET_FROM_CATEGORY, {
    variables: { categoryId }
  });

  const { error, loading, data } = useQuery(GET_SINGLE_CATEGORY, {
    variables: { categoryId }
  });
  const categories = !loading && !error ? data.getCategory : null;
  const articles = dataArticles ? dataArticles.getFromCategory : null;

  const CategoryBox = categories && (
    <Categories>
      <CardBody>
        <CardTitle>
          <CategoryBadge theme="dark">{categories.name}</CategoryBadge>
        </CardTitle>
        <p style={{ fontSize: "16px" }}>{categories.description}</p>
      </CardBody>
    </Categories>
  );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="hero-small"></div>
      <div className="landing-wrapper">
        <Container className="landing-container">
          <NavbarLanding />
          <div className="landing-divider" />
          <Row>
            <Col sm="12" md="12" lg="12">
              {CategoryBox}
              <div className="landing-divider" />
              <ArticleGallery articles={articles} />
            </Col>
          </Row>
          <div className="landing-divider" />
        </Container>
      </div>
      <div className="hero-bottom"></div>
      <div className="scroll-top">
        <img
          className="loader-hero"
          src="http://samherbert.net/svg-loaders/svg-loaders/rings.svg"
          width="40"
          onClick={() => scrollToTop()}
        />
      </div>
    </>
  );
};
