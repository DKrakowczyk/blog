import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Button, Table, Divider, Tag, Empty, Skeleton, Icon } from "antd";
import { GET_ALL_USERS } from "./users.queries";
import { REMOVE_USER } from "./users.mutations";
import { openNotification } from "../common/notification.component";
import { HelpButton, UsersHelp } from "../common/notification.helper";
export const UsersList = props => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  const [removeUser] = useMutation(REMOVE_USER, {
    refetchQueries: () => [
      {
        query: GET_ALL_USERS
      }
    ]
  });

  const handleRemoveClick = async user => {
    try {
      await removeUser({
        variables: { userId: user._id }
      });
      openNotification(
        "success",
        "Don't like him?",
        `${user.userName} was successfully removed`
      );
    } catch (error) {
      openNotification("error", "Oh no!", error.message);
    }
  };

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
          <Button type="primary" ghost>
            Activity
          </Button>
          <Divider type="vertical" />
          <Button>Edit</Button>
          <Divider type="vertical" />
          <Button type="danger" ghost onClick={() => handleRemoveClick(record)}>
            Remove
          </Button>
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
