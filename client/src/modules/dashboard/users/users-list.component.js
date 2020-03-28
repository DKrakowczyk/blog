import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Table, Divider, Tag, Empty, Skeleton, Icon } from "antd";
import { GET_ALL_USERS } from "./users.queries";
import { HelpButton, UsersHelp } from "../common/notification.helper";
import { RemoveUser } from "./remove-user.component";
import { SwitchRole } from "./change-role.component";

export const UsersList = props => {
  const { loading, data } = useQuery(GET_ALL_USERS);

  const columns = [
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
      align: "center",
      render: text => <a>{text}</a>
    },
    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      align: "center",
      render: text => <a>{text}</a>
    },
    {
      title: "Role",
      key: "role",
      align: "center",
      dataIndex: "role",
      render: role => (
        <span>
          <Tag color={role === "Admin" ? "volcano" : "geekblue"} key={role}>
            {role}
          </Tag>
        </span>
      )
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (text, record) => (
        <span>
          <Divider type="vertical" />
          <SwitchRole record={record} />
          <Divider type="vertical" />
          <RemoveUser record={record} />
        </span>
      )
    }
  ];

  if (loading) {
    return <Skeleton />;
  }

  const renderUsers = data.findAllUsers ? (
    <Table
      rowKey={record => record._id}
      columns={columns}
      dataSource={data.findAllUsers}
    />
  ) : (
    <Empty />
  );

  return (
    <div>
      <HelpButton fn={UsersHelp} />
      <Divider>
        <Icon type="user" /> Users
      </Divider>
      {renderUsers}
    </div>
  );
};
