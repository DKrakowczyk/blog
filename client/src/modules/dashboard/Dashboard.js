import React, { useState } from "react";
import { Layout, Row, Icon, Menu, Divider, Collapse } from "antd";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar.component";
import { ArticleList } from "./articles/article-list.component";
import { CategoryList } from "./categories/category-list.component";
import { MediaComponent } from "./media/media.component";
import { IdeasComponent } from "./ideas/ideas.component";
import { UsersList } from "./users/users-list.component";
import { Breadcrumbs } from "./common/breadcrumbs.component";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumbs />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Switch>
              <Route path="/dashboard/main">
                <Divider>
                  <Icon type="dashboard" /> Dashboard
                </Divider>
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
