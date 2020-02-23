import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Icon,
  Skeleton,
  Divider,
  Upload,
  Modal,
  Empty,
  Form,
  Typography
} from "antd";
import { HelpButton, MediaHelp } from "../common/notification.helper";
import styled from "styled-components";
const { Meta } = Card;
const { TextArea } = Input;
const { Title } = Typography;
export const MediaComponent = props => {
  const Content = styled.div`
    width: 100%;
  `;
  const InlineCard = styled(Card)`
    display: inline-block;
    width: 31%;
    margin: 10px !important;
  `;
  const [modalVisible, setModalVisible] = useState(false);

  const [category, setCategory] = useState({
    title: "",
    description: ""
  });
  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const saveCategory = () => {};
  useEffect(() => {}, [modalVisible]);
  return (
    <div>
      <Content>
        <HelpButton fn={MediaHelp} />
        <Divider>
          <Icon type="heat-map" /> Media
        </Divider>
        <Empty />
      </Content>
      <Divider>Add media item</Divider>

      <Form>
        <Form.Item>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Files will appear in your media tab
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form>
    </div>
  );
};
