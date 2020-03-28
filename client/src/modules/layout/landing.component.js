import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Col, Container, Row } from "shards-react";
import { ArticleGallery } from "../article/articleGallery.component";
import { FooterSection } from "../footer/footer.component";
import { GET_ALL_ARTICLES } from "../gql/articles.queries";
import { NavbarLanding } from "../navbar/navbar.component";
import { LoaderComponent } from "../layout/loader.component";
export const LandingLayout = props => {
  const { loading, data } = useQuery(GET_ALL_ARTICLES);
  const articles = data ? data.getAllArticles : null;

  return (
    <div className="landing-wrapper">
      <LoaderComponent show={loading} />
      <Container className="landing-container">
        <NavbarLanding />
        <div className="landing-divider" />
        <Row>
          <Col sm="12" md="12" lg="12">
            <ArticleGallery articles={articles} />
          </Col>
        </Row>
        <div className="landing-divider" />
        <FooterSection />
      </Container>
    </div>
  );
};
