import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { openNotification } from "../common/notification.component";
const { TextArea } = Input;
export const AddIdea = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idea, setIdea] = useState({
    title: "",
    description: ""
  });

  const handleSaveClick = async () => {
    if (idea.title.length && idea.description.length) {
      try {
        fetch("http://localhost:4000/ideas", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: idea.title,
            description: idea.description
          })
        });
        openNotification(
          "success",
          "Another new idea?",
          `Idea was successfully added`
        );
      } catch (error) {
        openNotification("error", "Oh no!", error.message);
      }
    } else {
      openNotification(
        "warning",
        "No idea?",
        "You have to provide idea title and description :("
      );
    }
    setIdea({
      title: "",
      description: ""
    });
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
        Add Idea
      </Button>
      <Modal
        title="Add new idea"
        visible={modalVisible}
        onOk={() => handleSaveClick()}
        onCancel={() => {
          setModalVisible(false);
          setIdea({ title: "", description: "" });
        }}
        htmlType="submit"
      >
        <Form className="login-form">
          <Form.Item>
            <Input
              value={idea.title}
              onChange={e =>
                setIdea({
                  title: e.target.value,
                  description: idea.description
                })
              }
              placeholder="Idea title"
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              value={idea.description}
              onChange={e =>
                setIdea({
                  title: idea.title,
                  description: e.target.value
                })
              }
              placeholder="Idea description"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
