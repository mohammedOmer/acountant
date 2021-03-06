import React from 'react'
import * as demo from 'demo/data'
import { Table } from "antd";

export default () => {
  return (
    <div>
      <h4>العملاء</h4>
      <Table dataSource={demo.customers} columns={columns} />
    </div>
  )
}

const columns = [{
  title: 'الاسم',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'البريد الاكتروني',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'الجوال',
  dataIndex: 'mobile',
  key: 'mobile',
}, {
  title: 'العمليات',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">حذف</a>
    </span>
  ),
}];
