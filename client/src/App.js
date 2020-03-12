import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { Container, Row, Col } from "shards-react";
import { client } from "./ApolloClient";
import Masonry from "react-masonry-css";
import {
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Badge
} from "shards-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavbarLanding } from "./modules/navbar/navbar.component";
import Dashboard from "./modules/dashboard/Dashboard";
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="landing-wrapper">
        <Container className="landing-container">
          <NavbarLanding />

          <div className="landing-divider" />
          <Router>
            <Switch>
              <Route exact path="/">
                <Row>
                  <Col sm="12" md="12" lg="12">
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                    >
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/480016-PGKTGR-852-1.jpg"
                        />
                        <CardBody>
                          <CardTitle>
                            Lorem Ipsum dolor sit amet lorem operum
                          </CardTitle>
                          <p>
                            {" "}
                            This is the body of the card. This is the body of
                            the card. This is the body of the card. This is the
                            body of the card. This is the body of the card.
                          </p>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/423994-PDRVB5-888-fullhd.jpg"
                        />
                        <CardBody>
                          <CardTitle>Lorem Ipsum</CardTitle>
                          <p>This is the body of the card.</p>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/480016-PGKTGR-852-1.jpg"
                        />
                        <CardBody>
                          <CardTitle>
                            Lorem Ipsum dolor sit amet lorem operum
                          </CardTitle>
                          <p>
                            {" "}
                            This is the body of the card. This is the body of
                            the card. This is the body of the card. This is the
                            body of the card. This is the body of the card.
                          </p>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/423994-PDRVB5-888-fullhd.jpg"
                        />
                        <CardBody>
                          <CardTitle>Lorem Ipsum</CardTitle>
                          <p>This is the body of the card.</p>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/480016-PGKTGR-852-1.jpg"
                        />
                        <CardBody>
                          <CardTitle>Lorem Ipjhygyuhsum</CardTitle>
                          <p>
                            This is the body of the card. This is the body of
                            the card. This is the body of the card. This is the
                            body of the card. This is the body of the card. This
                            is the body of the card. This is the body of the
                            card. This is the body of the card. This is the body
                            of the card. This is the body of the card.
                          </p>
                          <div style={{ margin: "auto", textAlign: "center" }}>
                            <Button outline squared theme="dark">
                              Read more
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/04/282024-P60RDW-857.jpg"
                        />
                        <CardBody>
                          <CardTitle>Lorem Ipsum</CardTitle>
                          <p>This is the body of the card.</p>
                          <Button outline squared theme="dark">
                            Dark
                          </Button>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/480016-PGKTGR-852-1.jpg"
                        />
                        <CardBody>
                          <CardTitle>Lorem Ipsum</CardTitle>
                          <p>This is the body of the card.</p>
                          <Button outline squared theme="dark">
                            Dark
                          </Button>
                        </CardBody>
                      </Card>
                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/04/282024-P60RDW-857.jpg"
                        />
                        <CardBody>
                          <CardTitle>Lorem Ipsum</CardTitle>
                          <p>This is the body of the card.</p>
                          <Button outline squared theme="dark">
                            Dark
                          </Button>
                        </CardBody>
                      </Card>

                      <Card theme="white">
                        <CardImg
                          top
                          src="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/480016-PGKTGR-852-1.jpg"
                        />
                        <CardBody>
                          <CardTitle>
                            Lorem Ipsum dolor sit amet lorem operum
                          </CardTitle>
                          <p> </p>
                        </CardBody>
                      </Card>
                    </Masonry>
                  </Col>
                </Row>
                <div className="landing-divider" />
                <Row>
                  <Col>
                    <Card className="card-custom">
                      <CardBody>
                        <CardTitle className="card-custom-title">
                          About
                        </CardTitle>
                        <p className="card-custom-text">
                          Card subtitle. Nunc quis nisl ac justo elementum
                          sagittis in quis justo. .Nunc quis nisl ac justo
                          elementum sagittis in quis justo. Card subtitle. Nunc
                          quis nisl ac justo elementum sagittis in quis justo.
                          .Nunc quis nisl ac justo elementum sagittis in quis
                          justo.
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
                          Categories
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
              </Route>
            </Switch>
          </Router>
        </Container>
      </div>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
