import { useQuery } from "@apollo/react-hooks";
import { Avatar, Comment, Empty, List } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  FormTextarea,
  Row
} from "shards-react";
import styled from "styled-components";
import { FooterSection } from "../footer/footer.component";
import {
  GET_RANDOM_ARTICLES,
  GET_SINGLE_ARTICLE
} from "../gql/articles.queries";
import { NavbarLanding } from "../navbar/navbar.component";
import { LoaderComponent } from "../layout/loader.component";
const Content = styled.div`
  font-size: 24px;
  color: #000;
`;

const FixedCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.35);
  transition: box-shadow 0.5s ease-in;
`;

const ShadowCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
`;

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

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const date = article
    ? new Date(article.created_at).toLocaleDateString("en-US", options)
    : "";
  const Article = article ? (
    <ShadowCard>
      <CardBody>
        <CardTitle>{article.title} </CardTitle>
        <CardSubtitle>
          Added by DKrakowczyk on {date} - {article.timeToRead}
          min read
        </CardSubtitle>
        <Content dangerouslySetInnerHTML={{ __html: article.body }}></Content>
        <hr />
      </CardBody>
      <CardFooter>
        <Button style={{ float: "right" }} outline squared theme="dark">
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

  return (
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

        <br></br>
        <Row>
          <Col sm="12" md="12" lg="12">
            <ShadowCard>
              <CardBody>
                <CardTitle>Comments</CardTitle>

                <div>
                  <p className="mb-2"> Waiting for you to say something...</p>
                  <FormTextarea />
                  <Button
                    outline
                    squared
                    theme="dark"
                    style={{ marginTop: "20px", float: "right" }}
                  >
                    Post a comment
                  </Button>
                </div>
                <br />
                <br />
                <br />
                <Comment
                  author="Han Solo"
                  content={
                    <p>
                      We supply a series of design principles, practical
                      patterns and high quality design resources (Sketch and
                      Axure), to help people create their product prototypes
                      beautifully and efficiently.
                    </p>
                  }
                />
                <Comment
                  author="Han Solo"
                  content={
                    <p>
                      We supply a series of design principles, practical
                      patterns and high quality design resources (Sketch and
                      Axure), to help people create their product prototypes
                      beautifully and efficiently.
                    </p>
                  }
                />

                <Empty description="No comments 😥" />
              </CardBody>
            </ShadowCard>
          </Col>
        </Row>
        <br />
        <br />
        <div className="landing-divider" />
        <FooterSection />
      </Container>
    </div>
  );
};
