import { useLazyQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Col, Container, Row, FormInput } from "shards-react";
import { FooterSection } from "./footer.component";
import { SEARCH_ARTICLES } from "../gql/articles.queries";
import { NavbarLanding } from "./navbar/navbar.component";
import { LoaderComponent } from "../layout/loader.component";
import { ArticleList } from "./article/articleList.component";
import styled from "styled-components";
import { Empty } from "antd";

const SearchBar = styled(FormInput)`
  background-color: rgba(0, 0, 0, 0.2);
  width: 30%;
  margin: auto;
  margin-bottom: 35px;
  text-align: center;
  color: #fff !important;
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const ArticlesLayout = props => {
  const [title, setTitle] = useState();

  const [loadArticles, { called, loading, data }] = useLazyQuery(
    SEARCH_ARTICLES,
    {
      variables: { title }
    }
  );
  let articles = data ? data.searchAllArticles : null;

  useEffect(() => {
    if (!title) {
      setTitle("");
    }
    loadArticles();
  }, [title]);

  const List =
    articles && articles.length ? (
      <ArticleList articles={articles} />
    ) : (
      <Empty style={{ marginTop: "70px", marginBottom: "100px" }} />
    );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="hero-small"></div>
      <div className="landing-wrapper">
        <LoaderComponent show={loading} />
        <Container className="landing-container">
          <NavbarLanding />
          <div className="landing-divider" />
          <Row>
            <Col sm="12" md="12" lg="12">
              <SearchBar
                placeholder="Search for something..."
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
              {List}
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
          src="http://samherbert.net/svg-loaders/svg-loaders/rings.svg"
          width="40"
          onClick={() => scrollToTop()}
        />
      </div>
    </>
  );
};
