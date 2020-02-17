import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Icon,
  Skeleton,
  Divider,
  Modal,
  Button,
  Form,
  Typography
} from "antd";
import styled from "styled-components";
const { Meta } = Card;
const { TextArea } = Input;
const { Title } = Typography;
export const CategoryList = props => {
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

  let categories = [
    {
      title: "aaaaa",
      description: "a a a a a "
    },
    {
      title: "bbbbb",
      description: "b b b b b "
    },
    {
      title: "aaaaa",
      description: "a a a a a "
    },
    {
      title: "bbbbb",
      description: "b b b b b "
    }
  ];

  const saveCategory = () => {
    categories.push({
      title: category.title,
      description: category.description
    });
    setModalVisible(false);
  };
  useEffect(() => {}, [modalVisible]);
  return (
    <div>
      <Content>
        <Divider>
          <Icon type="tag" /> Categories
        </Divider>
        {categories.map(category => (
          <InlineCard
            key={category.title}
            actions={[
              <Icon type="edit" key="setting" />,
              <Icon type="delete" key="edit" />
            ]}
          >
            <Skeleton loading={false} avatar active>
              <Meta
                style={{ textAlign: "center" }}
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </InlineCard>
        ))}
      </Content>
      <Divider>
        <Button block onClick={() => setModalVisible(true)}>
          Add Category
        </Button>
      </Divider>
      <Modal
        title="Add new category"
        visible={modalVisible}
        onOk={() => saveCategory()}
        onCancel={() => setModalVisible(false)}
        htmlType="submit"
      >
        <Form className="login-form">
          <Form.Item>
            <Input
              onChange={e =>
                setCategory({
                  title: e.target.value,
                  description: category.description
                })
              }
              placeholder="Category title"
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              onChange={e =>
                setCategory({
                  title: category.title,
                  description: e.target.value
                })
              }
              placeholder="Category description"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
