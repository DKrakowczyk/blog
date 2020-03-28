import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "shards-react";
import styled from "styled-components";
import { NavbarLanding } from "../navbar/navbar.component";

const Content = styled.div`
  font-size: 24px;
  color: #000;
`;

const ShadowCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
`;

export const AboutLayout = props => {
  return (
    <div className="landing-wrapper">
      <Container className="landing-container">
        <NavbarLanding />
        <div className="landing-divider" />
        <Row>
          <Col sm="12" md="12" lg="12">
            <ShadowCard>
              <CardBody>
                <CardTitle>About</CardTitle>
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
            <div className="landing-divider" />
          </Col>
        </Row>
        <div className="landing-divider" />
      </Container>
    </div>
  );
};
