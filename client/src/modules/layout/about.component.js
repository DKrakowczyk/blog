import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Badge
} from "shards-react";
import styled from "styled-components";
import { NavbarLanding } from "./navbar/navbar.component";
import { GET_ABOUT_SHORT } from "../gql/about.queries";
const Bio = styled(Card)`
  text-align: center;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 50%;
  color: #000 !important;
  width: 80%;
  height: 80%;
`;

const BioBadge = styled(Badge)`
  font-size: 24px;
  padding: 10px;
  text-transform: uppercase;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0px;
  color: #fff;
`;

export const AboutLayout = props => {
  const { data } = useQuery(GET_ABOUT_SHORT);
  const about = data ? data.getAbout.about : null;

  const BioData = about && (
    <Bio>
      <CardBody>
        <CardTitle>
          <BioBadge theme="dark">BIO</BioBadge>
        </CardTitle>
        <p style={{ fontSize: "16px" }}>{about}</p>
      </CardBody>
    </Bio>
  );

  return (
    <>
      <div className="hero-small"></div>
      <div className="landing-wrapper">
        <Container className="landing-container">
          <NavbarLanding />
          <div className="landing-divider" />
          <Row>
            <Col sm="12" md="12" lg="12">
              {BioData}
            </Col>
          </Row>
          <div className="landing-divider" />
        </Container>
      </div>
      <div className="hero-bottom"></div>
    </>
  );
};
