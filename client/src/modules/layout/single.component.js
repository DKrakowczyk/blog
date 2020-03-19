import React from "react";
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
import { List, Avatar, Comment, Empty } from "antd";
import { ArticleGallery } from "../article/articleGallery.component";
import { NavbarLanding } from "../navbar/navbar.component";
import { FooterSection } from "../footer/footer.component";
import styled from "styled-components";

const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  }
];

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
  return (
    <div className="landing-wrapper">
      <Container className="landing-container">
        <NavbarLanding />
        <div className="landing-divider" />
        <Row>
          <Col sm="8" md="8" lg="8">
            <ShadowCard>
              <CardBody>
                <CardTitle>Sample article title</CardTitle>
                <CardSubtitle> Added by DKrakowczyk 2 months ago</CardSubtitle>

                <Content>
                  Welcome, it's great to have you here. We know that first
                  impressions are important, so we've populated your new site
                  with some initial getting started posts that will help you get
                  familiar with everything in no time.
                  <br />
                  <br />
                  This is the first one! A few things you should know upfront:
                  Ghost is designed for ambitious, professional publishers who
                  want to actively build a business around their content. That's
                  who it works best for.
                  <br />
                  <br />
                  <CardImg
                    top
                    src="http://ghost.estudiopatagon.com/breek/content/images/2019/05/9294-3.jpg"
                  />
                  <br />
                  <br />
                  The entire platform can be modified and customised to suit
                  your needs. It's very powerful, but does require some
                  knowledge of code. Ghost is not necessarily a good platform
                  for beginners or people who just want a simple personal blog.
                  For the best experience we recommend downloading the Ghost
                  Desktop App for your computer, which is the best way to access
                  your Ghost site on a desktop device.
                </Content>
                <hr />
              </CardBody>
            </ShadowCard>
          </Col>
          <Col sm="4" md="4" lg="4">
            <FixedCard>
              <CardBody>
                <CardTitle>Related Articles</CardTitle>
                <CardSubtitle> Find something interesting</CardSubtitle>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="http://ghost.estudiopatagon.com/breek/content/images/2019/05/9294-3.jpg" />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
                ,
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
                  <p className="mb-2">🤔 Waiting for you to say something...</p>
                  <FormTextarea />
                  <Button
                    outline
                    squared
                    theme="dark"
                    style={{ marginTop: "20px", float: "right" }}
                  >
                    Dark
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

{
}
