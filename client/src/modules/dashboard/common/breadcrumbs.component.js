import { Breadcrumb } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Switch>
        <Route path="/dashboard/main">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Route>
        <Route path="/dashboard/articles">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Articles</Breadcrumb.Item>
        </Route>
        <Route path="/dashboard/categories">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Categories</Breadcrumb.Item>
        </Route>
        <Route path="/dashboard/about">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </Route>
        <Route path="/dashboard/social">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Social</Breadcrumb.Item>
        </Route>
        <Route path="/dashboard/ideas">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Ideas</Breadcrumb.Item>
        </Route>
        <Route path="/dashboard/users">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
        </Route>
      </Switch>
    </Breadcrumb>
  );
};
