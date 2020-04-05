import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "shards-react";
import { GET_ALL_CATEGORIES } from "../gql/categories.queries";
import { GET_ABOUT_SHORT } from "../gql/about.queries";
export const FooterSection = props => {
  const { data: aboutData } = useQuery(GET_ABOUT_SHORT);
  const about = aboutData ? aboutData.getAbout.about : null;
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);
  const categories = !loading && !error ? data.getAllCategories : null;
  const colors = [
    "success",
    "info",
    "warning",
    "dark",
    "success",
    "info",
    "warning",
    "dark"
  ];

  const categoryButtons =
    categories && categories.length
      ? categories.map(category => {
          return (
            <Button
              outline
              squared
              key={category._id}
              theme={colors[Math.floor(Math.random() * colors.length)]}
              href={`/categories/${category._id}`}
            >
              {category.name}
            </Button>
          );
        })
      : "There are no categories :(";

  return (
    <Row>
      <Col>
        <Card className="card-custom">
          <CardBody>
            <CardTitle className="card-custom-title">Bio</CardTitle>
            <p className="card-custom-text">
              {about && about.slice(0, 200)}...
            </p>
            <Button outline squared theme="white" href="/about">
              Read more
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
            <div className="landing-categories">{categoryButtons}</div>
          </CardBody>
        </Card>
      </Col>
      <div className="landing-divider" />
    </Row>
  );
};
