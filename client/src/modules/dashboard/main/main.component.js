import { useQuery } from "@apollo/react-hooks";
import { Col, Divider, Icon, Row, Statistic } from "antd";
import React from "react";
import { GET_STATISTICS } from "../../gql/statistics.query";
import { IdeasComponent } from "../ideas/ideas.component";

export const MainComponent = props => {
  const { loading, data } = useQuery(GET_STATISTICS);
  const statistics = !loading && data ? data.getStatistics : null;

  return (
    <div>
      <Divider>
        <Icon type="dashboard" /> Dashboard
      </Divider>
      <Row gutter={16} style={{ margin: "auto", textAlign: "center" }}>
        <Col span={8}>
          <Statistic
            title="Total articles"
            value={
              statistics && statistics.articlesCount
                ? statistics.articlesCount
                : "?"
            }
            prefix={<Icon type="coffee" />}
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="Published / drafts"
            value={
              statistics && statistics.publishedCount
                ? statistics.publishedCount
                : "?"
            }
            prefix={<Icon type="unlock" />}
            suffix={
              statistics && statistics.draftsCount
                ? "/" + statistics.draftsCount
                : "?"
            }
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Comments"
            value={
              statistics && statistics.commentsCount
                ? statistics.commentsCount
                : "?"
            }
            prefix={<Icon type="message" />}
          />
        </Col>
      </Row>
      <br />
      <IdeasComponent landing={true} />
    </div>
  );
};
