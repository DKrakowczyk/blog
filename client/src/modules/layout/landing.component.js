import React from "react";
import { Row, Col, Container } from "shards-react";

import { ArticleGallery } from "../article/articleGallery.component";
import { NavbarLanding } from "../navbar/navbar.component";
import { FooterSection } from "../footer/footer.component";

export const LandingLayout = props => {
  return (
    <div className="landing-wrapper">
      <Container className="landing-container">
        <NavbarLanding />
        <div className="landing-divider" />
        <Row>
          <Col sm="12" md="12" lg="12">
            <ArticleGallery />
          </Col>
        </Row>
        <div className="landing-divider" />
        <FooterSection />
      </Container>
    </div>
  );
};
