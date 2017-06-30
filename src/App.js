import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import SiderBar from './components/SiderBar'
import HeaderBar from './components/HeaderBar'
import './style/index.css';
 
  class App extends Component {
    render() {
      return (
        <Layout  className="ant-layout-has-sider" style={{height:'100%'}}>
        <SiderBar  />
        <Layout>
          <HeaderBar/>
        </Layout>
        </Layout>
      );
    }
  }

export default App;
