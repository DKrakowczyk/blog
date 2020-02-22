import React, { useState, useEffect } from "react";
import { Button, notification, Collapse, Divider, Icon } from "antd";
import { HelpButton, IdeasNotification } from "../helpers/notification.helper";
const { Panel } = Collapse;
const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found:a welcome guest in many households across the
    world.
  </p>
);
export const IdeasComponent = props => {
  return (
    <div>
      <HelpButton fn={IdeasNotification} />
      <Divider>
        <Icon type="bulb" /> Ideas
      </Divider>
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        <Panel header="This is panel header 1" key="1">
          {text}
        </Panel>
        <Panel header="This is panel header 2" key="2">
          {text}
        </Panel>
        <Panel header="This is panel header 3" key="3">
          {text}
        </Panel>
      </Collapse>
    </div>
  );
};
