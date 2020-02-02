import React, { useState } from "react";
import { Layout, Row, Col, Menu, Breadcrumb, Icon, Collapse } from "antd";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export const Sidebar = props => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={isCollapsed => setCollapsed(isCollapsed)}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Link to="/dashboard">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/dashboard/articles">
            <Icon type="project" />
            <span>Articles</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Icon type="database" />
          <span>Categories</span>
        </Menu.Item>

        <Menu.Item key="4">
          <Icon type="play-square" />
          <span>Media</span>
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Users</span>
            </span>
          }
        >
          <Menu.Item key="5">All users</Menu.Item>
          <Menu.Item key="6">Administrators</Menu.Item>
          <Menu.Item key="7">Maintainers</Menu.Item>
          <Menu.Item key="8">Standard users</Menu.Item>
        </SubMenu>

        <Menu.Item key="9">
          <Icon type="file" />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
