import { useQuery } from "@apollo/react-hooks";
import { Divider, Empty, Icon, List, Tag } from "antd";
import React from "react";
import { GET_ALL_ARTICLES } from "../../gql/articles.queries";
import { ArticlesHelp, HelpButton } from "../common/notification.helper";
import { AddArticle } from "./add-article.component";
import { EditArticle } from "./edit-article.component";
import { PublishArticle } from "./publish-article.component";
import { RemoveArticle } from "./remove-article.component";

export const ArticleList = props => {
  const { data } = useQuery(GET_ALL_ARTICLES);
  const articles = data ? data.getAllArticles : null;

  const ArticleList =
    articles && articles.length ? (
      <List
        itemLayout="horizontal"
        dataSource={articles}
        renderItem={item => (
          <List.Item key={item._id}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />

            {item.categories && (
              <>
                <Divider type="vertical" />
                <Tag color="purple">{item.categories.name} </Tag>
              </>
            )}
            <Divider type="vertical" />
            <Tag color="cyan">Time to read: {item.timeToRead} min</Tag>
            <Divider type="vertical" />
            <PublishArticle article={item} />
            <Divider type="vertical" />
            <EditArticle article={item} />
            <Divider type="vertical" />
            <RemoveArticle article={item} />
          </List.Item>
        )}
      />
    ) : (
      <Empty />
    );

  return (
    <div>
      <HelpButton fn={ArticlesHelp} />
      <Divider>
        <Icon type="rocket" /> Articles
      </Divider>
      {ArticleList}
      <Divider />
      <AddArticle />
    </div>
  );
};
