import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Col, Container, Row } from "shards-react";
import { GET_ALL_ARTICLES } from "../gql/articles.queries";
import { LoaderComponent } from "../layout/loader.component";
import { ArticleGallery } from "./article/articleGallery.component";
import { FooterSection } from "./footer.component";
import { NavbarLanding } from "./navbar/navbar.component";
export const LandingLayout = props => {
  const { loading, data } = useQuery(GET_ALL_ARTICLES);
  const articles = data ? data.getAllArticles : null;
  const scrollTo = () => {
    scroll.scrollTo(650);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="hero-header">
        <img
          className="loader-hero"
          alt="scroll down"
          src="http://samherbert.net/svg-loaders/svg-loaders/puff.svg"
          width="50"
          onClick={() => scrollTo()}
        />
      </div>
      <div className="landing-wrapper">
        <LoaderComponent show={loading} />
        <Container className="landing-container">
          <NavbarLanding id="anchor" className="element" />
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
      <div className="hero-bottom"></div>
      <div className="scroll-top">
        <img
          className="loader-hero"
          alt="scroll to top"
          src="http://samherbert.net/svg-loaders/svg-loaders/rings.svg"
          width="40"
          onClick={() => scrollToTop()}
        />
      </div>
    </>
  );
};
