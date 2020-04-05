import { useQuery } from "@apollo/react-hooks";
import { Avatar, Empty, List } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row
} from "shards-react";
import styled from "styled-components";
import {
  GET_RANDOM_ARTICLES,
  GET_SINGLE_ARTICLE
} from "../gql/articles.queries";
import { LoaderComponent } from "../layout/loader.component";
import { Comments } from "./comments.component";
import { FooterSection } from "./footer.component";
import { NavbarLanding } from "./navbar/navbar.component";

const Content = styled.div`
  margin-top: 5px;
  font-size: 24px;
  color: #000;
`;

const FixedCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  transition: box-shadow 0.5s ease-in;
  margin-top: 25px;
`;

const ShadowCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  margin-top: 25px;
`;
const TitleBadge = styled(Badge)`
  font-size: 24px;
  padding: 10px;
  text-transform: uppercase;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0px;
  left: 50%;
  color: #fff;
`;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export const SingleArticleLayout = props => {
  const { articleId } = useParams();
  const { data: dataRandom } = useQuery(GET_RANDOM_ARTICLES, {
    variables: { articleId }
  });
  const { loading, data } = useQuery(GET_SINGLE_ARTICLE, {
    variables: { articleId }
  });

  const article = data && data.getSingleArticle ? data.getSingleArticle : null;
  const random =
    dataRandom && dataRandom.getArticlesExcept
      ? dataRandom.getArticlesExcept
      : null;
  const date = article
    ? new Date(article.created_at).toLocaleDateString("en-US", options)
    : "";

  const Article = article ? (
    <ShadowCard>
      <CardBody>
        <TitleBadge theme="dark">{article.title} </TitleBadge>
        <CardSubtitle style={{ marginTop: "3px", marginBottm: "5px" }}>
          <Badge outline theme="danger">
            Added by{" "}
            {article.author && article.author.userName
              ? article.author.userName
              : " Gal Anonim"}
          </Badge>{" "}
          <Badge outline theme="success">
            {date}
          </Badge>{" "}
          <Badge outline>
            {article.timeToRead}
            min read
          </Badge>
        </CardSubtitle>
        <Content dangerouslySetInnerHTML={{ __html: article.body }}></Content>
        <hr />
      </CardBody>
      <CardFooter>
        <Button
          style={{ float: "right" }}
          outline
          squared
          theme="dark"
          href={`/categories/${article.categories._id}`}
        >
          {article.categories.name}
        </Button>
      </CardFooter>
    </ShadowCard>
  ) : (
    <Empty />
  );

  const Random =
    random && random.length ? (
      <List
        itemLayout="horizontal"
        dataSource={random}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.heroImg} />}
              title={<a href={`/articles/${item._id}`}>{item.title}</a>}
              description={item.description.slice(0, 100)}
            />
          </List.Item>
        )}
      />
    ) : (
      <Empty />
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
            <Col sm="8" md="8" lg="8">
              {Article}
            </Col>
            <Col sm="4" md="4" lg="4">
              <FixedCard>
                <CardBody>
                  <CardTitle>Related Articles</CardTitle>
                  <CardSubtitle> Find something interesting</CardSubtitle>
                  {Random}
                </CardBody>
              </FixedCard>
            </Col>
          </Row>

          <Row>
            <Col sm="12" md="12" lg="12">
              <Comments article={article && article} />
            </Col>
          </Row>
          <br />
          <br />
          <div className="landing-divider" />
          <FooterSection />
        </Container>
      </div>
      <div className="hero-bottom"></div>
      <div className="scroll-top">
        <img
          alt="scroll to top"
          className="loader-hero"
          src="http://samherbert.net/svg-loaders/svg-loaders/rings.svg"
          width="40"
          onClick={() => scrollToTop()}
        />
      </div>
    </>
  );
};
