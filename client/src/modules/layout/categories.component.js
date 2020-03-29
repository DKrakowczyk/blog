import { useQuery } from "@apollo/react-hooks";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Badge
} from "shards-react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { ArticleGallery } from "../article/articleGallery.component";
import { GET_ALL_CATEGORIES } from "../dashboard/categories/categories.queries";
import { NavbarLanding } from "../navbar/navbar.component";
import { GET_ALL_ARTICLES } from "../gql/articles.queries";
import { ArticleList } from "../article/articleList.component";
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

export const CategoriesLayout = props => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);
  const categories = !loading && !error ? data.getAllCategories : null;

  const {
    error: articlesError,
    loading: articlesLoading,
    data: articlesData
  } = useQuery(GET_ALL_ARTICLES);

  const articles = articlesData ? articlesData.getAllArticles : null;

  const List =
    articles && articles.length ? <ArticleList articles={articles} /> : <></>;
  const colors = ["success", "info", "dark", "success", "info", "dark"];

  const categoryButtons =
    categories && categories.length
      ? categories.map(category => {
          return (
            <Button
              outline
              key={category._id}
              theme={colors[Math.floor(Math.random() * colors.length)]}
              href={`/categories/${category._id}`}
            >
              {category.name}
            </Button>
          );
        })
      : "There are no categories :(";

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
              <Categories>
                <CardTitle>
                  <CategoryBadge theme="dark">CATEGORIES</CategoryBadge>
                </CardTitle>
                <CardBody>
                  <div
                    className="landing-categories"
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      width: "60%"
                    }}
                  >
                    {categoryButtons}
                  </div>
                </CardBody>
              </Categories>
              <div className="landing-divider" />

              {List}
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
