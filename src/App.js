import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import Items from 'containers/items/index'
import Customers from 'containers/customers/index'
import Orgs from 'containers/orgs'
import Sales from 'containers/selas'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><NavLink to='/items'>ITEMS</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to='/customers'>Customers</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to='/selas'>Selas</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Switch>
            <Route path="/items" component={Items} />
            <Route path="/customers" component={Customers} />
            <Route path="/orgs" component={Orgs} />
            <Route path="/selas" component={Sales} />
          </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
