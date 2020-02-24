import React, { useState } from "react";
import { Layout, Button, Icon, Menu, Divider, Collapse, Avatar } from "antd";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar.component";
import { ArticleList } from "./articles/article-list.component";
import { CategoryList } from "./categories/category-list.component";
import { MediaComponent } from "./media/media.component";
import { IdeasComponent } from "./ideas/ideas.component";
import { UsersList } from "./users/users-list.component";
import { Breadcrumbs } from "./common/breadcrumbs.component";
import { MainComponent } from "./main/main.component";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <div style={{ float: "right" }}>
            <Divider type="vertical" />
            <Button icon="facebook" size={32}>
              <Divider type="vertical" />
              Facebook
            </Button>
            <Divider type="vertical" />
            <Button icon="instagram" size={32}>
              <Divider type="vertical" />
              Instagram
            </Button>
            <Divider type="vertical" />
            <Button icon="twitter" size={32}>
              <Divider type="vertical" />
              Twitter
            </Button>
            <Divider type="vertical" />
            <Button icon="linkedin" size={32}>
              <Divider type="vertical" />
              LinkedIn
            </Button>
            <Divider type="vertical" />
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumbs />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Switch>
              <Route path="/dashboard/main">
                <MainComponent />
              </Route>
              <Route path="/dashboard/articles">
                <ArticleList />
              </Route>
              <Route path="/dashboard/categories">
                <CategoryList />
              </Route>
              <Route path="/dashboard/media">
                <MediaComponent />
              </Route>
              <Route path="/dashboard/ideas">
                <IdeasComponent />
              </Route>
              <Route path="/dashboard/users">
                <UsersList />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          blog-system ©2020 Created by DKrakowczyk
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
