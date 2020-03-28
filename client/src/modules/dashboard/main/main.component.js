import { Calendar, Col, Divider, Icon, Row, Statistic } from "antd";
import React from "react";
export const MainComponent = props => {
  return (
    <div>
      <Divider>
        <Icon type="dashboard" /> Dashboard
      </Divider>
      <Row gutter={16} style={{ margin: "auto", textAlign: "center" }}>
        <Col span={6}>
          <Statistic
            title="Articles"
            value={46}
            prefix={<Icon type="rocket" />}
          />
        </Col>

        <Col span={6}>
          <Statistic
            title="Published / drafts"
            value={7}
            prefix={<Icon type="rocket" />}
            suffix="/ 12"
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Comments"
            value={1128}
            prefix={<Icon type="message" />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Ideas"
            value={93}
            prefix={<Icon type="bulb" />}
            suffix="/ 100"
          />
        </Col>
      </Row>
      <Divider> Add reminders </Divider>
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid #d9d9d9",
          borderRadius: 4
        }}
      ></div>
    </div>
  );
};
