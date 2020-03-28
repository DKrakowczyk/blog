import { Icon, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { Sider } = Layout;
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
      {!collapsed ? <div className="logo" /> : <div className="logo-small" />}
      <Menu defaultSelectedKeys={[{ selectedKey }]}>
        <Menu.ItemGroup key="g1" title="Blog">
          <Menu.Item key="1">
            <Link
              to="/dashboard/main"
              onClick={selectedKey => setSelectedKey(1)}
            >
              <Icon type="dashboard" color="red" />
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
          <Menu.Item key="4">
            <Link
              to="/dashboard/about"
              onClick={selectedKey => setSelectedKey(3)}
            >
              <Icon type="environment" />
              <span>Bio</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Tools">
          <Menu.Item key="5">
            <Link
              to="/dashboard/social"
              onClick={selectedKey => setSelectedKey(4)}
            >
              <Icon type="heat-map" />
              <span>Social</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link
              to="/dashboard/ideas"
              onClick={selectedKey => setSelectedKey(5)}
            >
              <Icon type="bulb" />
              <span>Ideas</span>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g3" title="Management">
          <Menu.Item key="7">
            <Link
              to="/dashboard/users"
              onClick={selectedKey => setSelectedKey(6)}
            >
              <Icon type="user" />
              <span>Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="setting" />
            <span>Settings</span>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};
