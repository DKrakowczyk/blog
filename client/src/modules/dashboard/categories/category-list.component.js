import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  Card,
  Input,
  Icon,
  Divider,
  Modal,
  Button,
  Form,
  Empty,
  Spin,
  notification
} from "antd";
import styled from "styled-components";
import { GET_ALL_CATEGORIES } from "./categories.queries";
import {
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  EDIT_CATEGORY
} from "./categories.mutations";
const { Meta } = Card;
const { TextArea } = Input;
export const CategoryList = props => {
  // Styles
  const Content = styled.div`
    width: 100%;
  `;
  const InlineCard = styled(Card)`
    display: inline-block;
    width: 31%;
    margin: 10px !important;
  `;

  // Fetch categories
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);
  const categories = data ? data.getAllCategories : null;
  // Remove categories
  const [removeCategory] = useMutation(REMOVE_CATEGORY, {
    refetchQueries: () => [
      {
        query: GET_ALL_CATEGORIES
      }
    ]
  });
  //Add Categories
  const [modalVisible, setModalVisible] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [category, setCategory] = useState({
    _id: "",
    name: "",
    description: ""
  });
  const [addCategory] = useMutation(ADD_CATEGORY, {
    refetchQueries: () => [
      {
        query: GET_ALL_CATEGORIES
      }
    ]
  });

  const [editCategory] = useMutation(EDIT_CATEGORY, {
    refetchQueries: () => [
      {
        query: GET_ALL_CATEGORIES
      }
    ]
  });

  const handleSaveClick = async () => {
    console.log(category);
    if (!isBeingEdited) {
      category._id = undefined;
      if (category.name.length && category.description.length) {
        try {
          await addCategory({
            variables: { input: category }
          });
          openNotification(
            "success",
            "Another new category idea?",
            `Category ${category.name} was successfully added`
          );
        } catch (error) {
          openNotification("error", "Oh no!", error.message);
        }
      } else {
        openNotification(
          "warning",
          "No idea?",
          "You have to provide category title and description :("
        );
      }
    } else {
      try {
        await editCategory({
          variables: { input: category }
        });
        openNotification(
          "success",
          "Not sure about the title?",
          `Category ${category.name} was successfully updated`
        );
      } catch (error) {
        openNotification("error", "Oh no, you can not do this!", error.message);
      }
    }

    setCategory({ _id: "", name: "", description: "" });
    setModalVisible(false);
  };
  const handleRemoveClick = async category => {
    try {
      await removeCategory({
        variables: { categoryId: category._id }
      });
      openNotification(
        "success",
        "Doing some cleaning?",
        `Category ${category.name} was successfully deleted`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

  const openNotification = (type, message, description) => {
    const args = {
      message: message,
      description: description,
      duration: 2
    };
    notification[type](args);
  };

  const createCategoriesList =
    categories && categories.length ? (
      categories.map(category => (
        <InlineCard
          key={category._id}
          actions={[
            <Icon
              type="edit"
              key="setting"
              onClick={() => {
                setIsBeingEdited(true);
                setCategory({
                  _id: category._id,
                  name: category.name,
                  description: category.description
                });
                setModalVisible(true);
              }}
            />,
            <Icon
              type="delete"
              key="edit"
              onClick={() => handleRemoveClick(category)}
            />
          ]}
        >
          <Meta
            style={{ textAlign: "center" }}
            title={category.name}
            description={category.description}
          />
        </InlineCard>
      ))
    ) : (
      <Empty />
    );

  return (
    <div>
      <Spin spinning={loading}>
        <Content>
          <Divider>
            <Icon type="tag" /> Categories
          </Divider>
          {createCategoriesList}
        </Content>
      </Spin>
      <Divider>
        <Button
          block
          onClick={() => {
            setIsBeingEdited(false);
            setModalVisible(true);
          }}
        >
          Add Category
        </Button>
      </Divider>

      <Modal
        title={
          isBeingEdited ? `Edit category ${category.name}` : "Add new category"
        }
        visible={modalVisible}
        onOk={() => handleSaveClick()}
        onCancel={() => {
          setModalVisible(false);
          setCategory({ _id: "", name: "", description: "" });
        }}
        htmlType="submit"
      >
        <Form className="login-form">
          <Form.Item>
            <Input
              value={category.name}
              onChange={e =>
                setCategory({
                  _id: category._id,
                  name: e.target.value,
                  description: category.description
                })
              }
              placeholder="Category title"
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              value={category.description}
              onChange={e =>
                setCategory({
                  _id: category._id,
                  name: category.name,
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
