import { useMutation } from "@apollo/react-hooks";
import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { ADD_CATEGORY } from "../../gql/categories.mutations";
import { GET_ALL_CATEGORIES } from "../../gql/categories.queries";
import { openNotification } from "../common/notification.component";
const { TextArea } = Input;

export const AddCategory = props => {
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleSaveClick = async () => {
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

    setModalVisible(false);
  };

  return (
    <div>
      <Button
        block
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Add Category
      </Button>
      <Modal
        title="Add new category"
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
