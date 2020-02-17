import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Menu, Breadcrumb, Icon, Collapse } from "antd";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export const Sidebar = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(1);

  useEffect(() => {
    setSelectedKey(2);
  }, []);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={isCollapsed => setCollapsed(isCollapsed)}
      theme="light"
    >
      <div className="logo" />
      <Menu defaultSelectedKeys={[{ selectedKey }]}>
        <Menu.ItemGroup key="g1" title="Blog">
          <Menu.Item key="1">
            <Link
              to="/dashboard/main"
              onClick={selectedKey => setSelectedKey(1)}
            >
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link
              to="/dashboard/articles"
              onClick={selectedKey => setSelectedKey(2)}
            >
              <Icon type="rocket" />
              <span>Articles</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link
              to="/dashboard/categories"
              onClick={selectedKey => setSelectedKey(3)}
            >
              <Icon type="tag" />
              <span>Categories</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Tools">
          <Menu.Item key="4">
            <Link
              to="/dashboard/media"
              onClick={selectedKey => setSelectedKey(4)}
            >
              <Icon type="heat-map" />
              <span>Media</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link
              to="/dashboard/ideas"
              onClick={selectedKey => setSelectedKey(5)}
            >
              <Icon type="bulb" />
              <span>Ideas</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Management">
          <Menu.Item key="6">
            <Link
              to="/dashboard/users"
              onClick={selectedKey => setSelectedKey(6)}
            >
              <Icon type="user" />
              <span>Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="message" />
            <span>Comments</span>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};
