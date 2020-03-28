import { Divider, Icon, Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./about/about.component";
import { ArticleList } from "./articles/article-list.component";
import { CategoryList } from "./categories/category-list.component";
import { Breadcrumbs } from "./common/breadcrumbs.component";
import { IdeasComponent } from "./ideas/ideas.component";
import { MainComponent } from "./main/main.component";
import { Sidebar } from "./sidebar/sidebar.component";
import { SocialComponent } from "./social/social.component";
import { UsersList } from "./users/users-list.component";
const { Header, Content, Footer } = Layout;

function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <div style={{ float: "right" }}>
            <Divider type="vertical" />
            <Icon type="facebook" size={32} />
            <Divider type="vertical" />
            <Icon type="instagram" size={32} />
            <Divider type="vertical" />
            <Icon type="twitter" size={32} />
            <Divider type="vertical" />
            <Icon type="linkedin" size={32} />
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
              <Route path="/dashboard/about">
                <About />
              </Route>
              <Route path="/dashboard/social">
                <SocialComponent />
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
