import { useMutation } from "@apollo/react-hooks";
import { Form, Icon, Input, Modal } from "antd";
import React, { useState } from "react";
import { openNotification } from "../common/notification.component";
import { EDIT_CATEGORY } from "../../gql/categories.mutations";
import { GET_ALL_CATEGORIES } from "../../gql/categories.queries";
const { TextArea } = Input;

export const EditCategory = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [category, setCategory] = useState(props.category);

  const [editCategory] = useMutation(EDIT_CATEGORY, {
    refetchQueries: () => [
      {
        query: GET_ALL_CATEGORIES
      }
    ]
  });

  const handleSaveClick = async () => {
    if (isBeingEdited) {
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

    setModalVisible(false);
  };

  return (
    <div>
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
      />
      <Modal
        title={
          isBeingEdited ? `Edit category ${category.name}` : "Add new category"
        }
        visible={modalVisible}
        onOk={() => handleSaveClick()}
        onCancel={() => {
          setModalVisible(false);
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
