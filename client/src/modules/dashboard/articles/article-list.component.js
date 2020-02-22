import React from "react";
import { Icon, List, Avatar, Button, Divider } from "antd";
export const ArticleList = props => {
  const data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    }
  ];
  return (
    <div>
      <Divider>
        <Icon type="rocket" /> Articles
      </Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <Button type="primary" ghost>
              Preview
            </Button>
            <Button type="danger" ghost>
              Delete
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};
