import React from "react";
import { Button, Table, Space, Tag, Modal } from "antd";
import { BugOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default function SubjectList(props) {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Lecturer IDs",
      dataIndex: "lecturer_owners",
      key: "lecturer_owners",
      render: (lecturerOwners) =>
        lecturerOwners
          .map((owner, index) => `${index + 1}. ${owner.lecturer_id}`)
          .join("\n"),
    },
    {
      title: "Topics",
      dataIndex: "topics",
      key: "topics",
      render: (topics) =>
        topics.map((owner, index) => owner.topic_title).join(", "),
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (_, record) =>
        dayjs(record.updatedAt).format("DD/MM/YYYY - HH:mm"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            shape="circle"
            icon={<BugOutlined />}
            onClick={() => {
              Modal.info({
                title: "Debug",
                content: JSON.stringify(record.title),
              });
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={props.data} />
    </>
  );
}