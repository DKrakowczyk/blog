import { useQuery } from "@apollo/react-hooks";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row
} from "shards-react";
import styled from "styled-components";
import { ArticleGallery } from "../article/articleGallery.component";
import { GET_ALL_CATEGORIES } from "../dashboard/categories/categories.queries";
import { NavbarLanding } from "../navbar/navbar.component";

const Categories = styled(Card)`
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: auto;
  margin-bottom: 25px;
  color: #fff !important;
`;

export const CategoriesLayout = props => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);
  const categories = !loading && !error ? data.getAllCategories : null;
  const colors = [
    "success",
    "info",
    "warning",
    "dark",
    "success",
    "info",
    "warning",
    "dark"
  ];

  const categoryButtons =
    categories && categories.length
      ? categories.map(category => {
          return (
            <Button
              outline
              squared
              key={category._id}
              theme={colors[Math.floor(Math.random() * colors.length)]}
            >
              {category.name}
            </Button>
          );
        })
      : "There are no categories :(";

  return (
    <div className="landing-wrapper">
      <Container className="landing-container">
        <NavbarLanding />
        <div className="landing-divider" />
        <Row>
          <Col sm="12" md="12" lg="12">
            <Categories>
              <CardBody>
                <CardTitle className="card-custom-title">Categories</CardTitle>
                <div
                  className="landing-categories"
                  style={{ margin: "auto", textAlign: "center", width: "60%" }}
                >
                  {categoryButtons}
                </div>
              </CardBody>
            </Categories>
            <div className="landing-divider" />

            <ArticleGallery />
          </Col>
        </Row>
        <div className="landing-divider" />
      </Container>
    </div>
  );
};
