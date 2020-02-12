import React, { useState } from "react";
import { Layout, Row, Col, Menu, Breadcrumb, Divider, Collapse } from "antd";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Sidebar } from "./sidebar/sidebar.component";
import { ArticleList } from "./articles/article-list.component";
import { CategoryList } from "./categories/category-list.component";
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
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Switch>
              <Route path="/dashboard/main">
                <Divider>Dashboard</Divider>
              </Route>
              <Route path="/dashboard/articles">
                <ArticleList />
              </Route>
              <Route path="/dashboard/categories">
                <CategoryList />
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
