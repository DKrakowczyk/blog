import { useQuery } from "@apollo/react-hooks";
import { Card, Divider, Empty, Icon, Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { CategoriesHelp, HelpButton } from "../common/notification.helper";
import { AddCategory } from "./add-category.component";
import { GET_ALL_CATEGORIES } from "./categories.queries";
import { EditCategory } from "./edit.category.component";
import { RemoveCategory } from "./remove-category.component";

const { Meta } = Card;
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
  const { loading, data } = useQuery(GET_ALL_CATEGORIES);
  const categories = data ? data.getAllCategories : null;

  const createCategoriesList =
    categories && categories.length ? (
      categories.map(category => (
        <InlineCard
          key={category._id}
          actions={[
            <EditCategory category={category} />,
            <RemoveCategory category={category} />
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
          <HelpButton fn={CategoriesHelp} />
          <Divider>
            <Icon type="tag" /> Categories
          </Divider>
          {createCategoriesList}
        </Content>
      </Spin>
      <Divider>
        <AddCategory />
      </Divider>
    </div>
  );
};
