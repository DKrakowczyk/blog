import { useMutation, useQuery } from "@apollo/react-hooks";
import { Button, Checkbox, Divider, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Formik } from "formik";
import JoditEditor from "jodit-react";
import React, { useState } from "react";
import { ADD_ARTICLE } from "../../gql/articles.mutations";
import { GET_ALL_ARTICLES } from "../../gql/articles.queries";
import { GET_ALL_CATEGORIES } from "../categories/categories.queries";
const { Option } = Select;

export const AddArticle = () => {
  const [showModal, setShowModal] = useState(false);
  const [addArticle] = useMutation(ADD_ARTICLE, {
    refetchQueries: () => [
      {
        query: GET_ALL_ARTICLES
      }
    ]
  });
  const [content, setContent] = useState("");
  const { data } = useQuery(GET_ALL_CATEGORIES);
  const [categoryId, setCategoryId] = useState("");
  const categories = data ? data.getAllCategories : null;
  const submitForm = async values => {
    try {
      await addArticle({
        variables: {
          article: {
            title: values.title,
            description: values.description,
            body: content,
            isDraft: values.isDraft ? values.isDraft : false,
            heroImg: values.heroImg,
            categories: categoryId
          }
        }
      });
      setContent("");
      setShowModal(false);
    } catch (error) {}
  };
  const config = {
    readonly: false
  };
  return (
    <>
      <Button
        type="primary"
        style={{ margin: "auto" }}
        block
        ghost
        onClick={() => !showModal && setShowModal(true)}
      >
        Add new article
      </Button>
      <Modal
        centered
        visible={showModal}
        onCancel={() => showModal && setShowModal(false)}
        title="Add new article"
        footer={null}
        width="75%"
      >
        <Formik
          initialValues={{
            title: "",
            description: ""
          }}
          onSubmit={async (values, { resetForm }) => {
            await submitForm(values);
            resetForm({});
          }}
          render={props => (
            <Form onSubmit={props.handleSubmit}>
              <Form.Item>
                Article main image
                <Input
                  value={props.values.heroImg}
                  name="heroImg"
                  placeholder="Article image on landing page"
                  onChange={props.handleChange}
                ></Input>
              </Form.Item>
              <Divider />
              <Form.Item>
                Article title
                <Input
                  value={props.values.title}
                  name="title"
                  placeholder="Article title"
                  onChange={props.handleChange}
                ></Input>
              </Form.Item>
              <Form.Item>
                Article description:
                <TextArea
                  name="description"
                  type="text"
                  rows="4"
                  value={props.values.description}
                  placeholder="Article description"
                  onChange={props.handleChange}
                ></TextArea>
              </Form.Item>
              <Form.Item>
                Article body:
                <JoditEditor
                  ref={null}
                  value={content}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => {}}
                />
              </Form.Item>
              <Form.Item>
                <Checkbox
                  name="isDraft"
                  value={props.values.isDraft}
                  onChange={props.handleChange}
                >
                  Save as draft
                </Checkbox>
              </Form.Item>
              <Form.Item>
                Category:
                <Select
                  name="categories"
                  onChange={value => {
                    setCategoryId(value);
                  }}
                >
                  {categories.map(category => {
                    return <Option key={category._id}>{category.name}</Option>;
                  })}
                </Select>
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form>
          )}
        />
      </Modal>
    </>
  );
};
