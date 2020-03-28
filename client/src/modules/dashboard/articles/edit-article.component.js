import { useMutation, useQuery } from "@apollo/react-hooks";
import { Button, Checkbox, Form, Input, Modal, Select, Tag } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Formik } from "formik";
import JoditEditor from "jodit-react";
import React, { useState } from "react";
import { EDIT_ARTICLE } from "../../gql/articles.mutations";
import { GET_ALL_ARTICLES } from "../../gql/articles.queries";
import { GET_ALL_CATEGORIES } from "../categories/categories.queries";
const { Option } = Select;

export const EditArticle = ({ article, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [editArticle] = useMutation(EDIT_ARTICLE, {
    refetchQueries: () => [
      {
        query: GET_ALL_ARTICLES
      }
    ]
  });
  const [content, setContent] = useState(article.body);
  const { data } = useQuery(GET_ALL_CATEGORIES);
  const categories = data ? data.getAllCategories : null;

  const [categoryId, setCategoryId] = useState("");
  const submitForm = async values => {
    try {
      await editArticle({
        variables: {
          article: {
            _id: article._id,
            title: values.title,
            description: values.description,
            body: content,
            isDraft: values.isDraft ? values.isDraft : false,
            categories: categoryId !== "" ? categoryId : article.categories._id
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
      <Tag color="blue" onClick={() => !showModal && setShowModal(true)}>
        Edit
      </Tag>
      <Modal
        centered
        visible={showModal}
        onCancel={() => showModal && setShowModal(false)}
        title="Edit article"
        footer={null}
        width="60%"
      >
        <Formik
          initialValues={{
            title: article.title,
            description: article.description,
            body: article.body,
            isDraft: article.isDraft
          }}
          onSubmit={async (values, { resetForm }) => {
            await submitForm(values);
            resetForm({});
          }}
          render={props => (
            <Form onSubmit={props.handleSubmit}>
              <Form.Item>
                <Input
                  value={props.values.title}
                  name="title"
                  placeholder="Article title"
                  onChange={props.handleChange}
                ></Input>
              </Form.Item>
              <Form.Item>
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
                <Select
                  name="categories"
                  onChange={value => {
                    setCategoryId(value);
                  }}
                  placeholder={article.categories && article.categories.name}
                >
                  {categories.map(category => {
                    return <Option key={category._id}>{category.name}</Option>;
                  })}
                </Select>
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form>
          )}
        />
      </Modal>
    </>
  );
};
