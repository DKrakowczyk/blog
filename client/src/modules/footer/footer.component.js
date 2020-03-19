import { useQuery } from "@apollo/react-hooks";

import React from "react";
import { Card, CardTitle, CardBody, Button, Row, Col } from "shards-react";
export const FooterSection = props => {
  return (
    <Row>
      <Col>
        <Card className="card-custom">
          <CardBody>
            <CardTitle className="card-custom-title">❤️About</CardTitle>
            <p className="card-custom-text">
              Card subtitle. Nunc quis nisl ac justo elementum sagittis in quis
              justo. .Nunc quis nisl ac justo elementum sagittis in quis justo.
              Card subtitle. Nunc quis nisl ac justo elementum sagittis in quis
              justo. .Nunc quis nisl ac justo elementum sagittis in quis justo.
            </p>
            <Button outline squared theme="white">
              Success
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card className="card-custom">
          <CardBody>
            <CardTitle
              style={{ textAlign: "right" }}
              className="card-custom-title"
            >
              Categories🐧
            </CardTitle>
            <div className="landing-categories">
              <Button outline squared>
                Primary
              </Button>
              <Button outline squared theme="success">
                Success
              </Button>
              <Button outline squared theme="info">
                Info
              </Button>
              <Button outline squared theme="warning">
                Warning
              </Button>
              <Button outline squared theme="info">
                Info
              </Button>
              <Button outline squared theme="warning">
                Warning
              </Button>
              <Button outline squared theme="dark">
                Dark
              </Button>
              <Button outline squared theme="dark">
                Dark
              </Button>
              <Button outline squared theme="dark">
                Dark
              </Button>

              <Button outline squared theme="dark">
                Dark
              </Button>
              <Button outline squared theme="dark">
                Dark
              </Button>
              <Button outline squared theme="info">
                Info
              </Button>
              <Button outline squared theme="warning">
                Warning
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <div className="landing-divider" />
    </Row>
  );
};
