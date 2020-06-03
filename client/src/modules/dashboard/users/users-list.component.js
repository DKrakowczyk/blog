import { useQuery } from "@apollo/react-hooks";
import { Divider, Empty, Icon, Skeleton, Table, Tag } from "antd";
import React from "react";
import { GET_ALL_USERS } from "../../gql/users.queries";
import { HelpButton, UsersHelp } from "../common/notification.helper";
import { SwitchRole } from "./change-role.component";
import { RemoveUser } from "./remove-user.component";

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
