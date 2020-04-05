import { Collapse, Divider, Icon, Tag, Table } from "antd";
import React from "react";
import { HelpButton, IdeasHelp } from "../common/notification.helper";
import { AddIdea } from "./add-idea.component";
import { RemoveIdea } from "./remove-idea.component";
import { ToggleIdea } from "./toggle-idea.component";
const { Panel } = Collapse;
const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found:a welcome guest in many households across the
    world.
  </p>
);
export class IdeasComponent extends React.Component {
  mounted = false;
  state = {
    ideas: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/ideas")
      .then(res => res.json())
      .then(json => this.setState({ ideas: json }));
    this.mounted = true;
  }

  componentDidUpdate() {
    if (this.mounted) {
      fetch("http://localhost:4000/ideas")
        .then(res => res.json())
        .then(json => this.setState({ ideas: json }));
    }
  }

  render() {
    const statusContent = status => {
      switch (status) {
        case 0:
          return { text: "TODO", color: "volcano" };
        case 1:
          return { text: "IN PROGRESS", color: "geekblue" };
        case 2:
          return { text: "DONE", color: "green" };
      }
    };

    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        align: "center",
        render: text => <a>{text}</a>
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        align: "center",
        render: text => <a>{text}</a>
      },
      {
        title: "Status",
        key: "status",
        align: "center",
        dataIndex: "status",
        render: status => (
          <span>
            <Tag color={statusContent(status).color} key={status}>
              {statusContent(status).text}
            </Tag>
          </span>
        )
      },
      {
        title: "Action",
        key: "action",
        align: "center",
        render: (text, record) => (
          <>
            <ToggleIdea id={record._id} />
            <Divider type="vertical" />
            <RemoveIdea id={record._id} />
          </>
        )
      }
    ];

    return (
      <div>
        <Divider>
          <Icon type="bulb" /> Ideas
        </Divider>
        <Table
          rowKey={record => record._id}
          columns={columns}
          dataSource={this.state.ideas}
          pagination={this.props.landing ? false : true}
        />
        <Divider>{!this.props.landing && <AddIdea />}</Divider>
      </div>
    );
  }
}
