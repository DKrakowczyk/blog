import React from "react";

import { ArticleGallery } from "../article/articleGallery.component";
import { NavbarLanding } from "../navbar/navbar.component";
import { FooterSection } from "../footer/footer.component";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
  FormTextarea
} from "shards-react";
import styled from "styled-components";

const Categories = styled(Card)`
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: auto;
  margin-bottom: 25px;
  color: #fff !important;
`;

export const CategoriesLayout = props => {
  return (
    <div className="landing-wrapper">
      <Container className="landing-container">
        <NavbarLanding />
        <div className="landing-divider" />
        <Row>
          <Col sm="12" md="12" lg="12">
            <Categories>
              <CardBody>
                <CardTitle className="card-custom-title">
                  🌈Categories
                </CardTitle>
                <div
                  className="landing-categories"
                  style={{ margin: "auto", textAlign: "center", width: "60%" }}
                >
                  <Button outline squared>
                    🌈 Primary
                  </Button>
                  <Button outline squared theme="success">
                    🔥 Success
                  </Button>
                  <Button outline squared theme="info">
                    ⚡ Info
                  </Button>
                  <Button outline squared theme="warning">
                    🌝 Warning
                  </Button>
                  <Button outline squared theme="info">
                    🍄 Info
                  </Button>
                  <Button outline squared theme="warning">
                    🦖 Warning
                  </Button>
                  <Button outline squared theme="dark">
                    🐦 Dark
                  </Button>
                  <Button outline squared theme="dark">
                    🐨 Dark
                  </Button>
                  <Button outline squared theme="dark">
                    🐽 Dark
                  </Button>
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
