import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import SiderBar from './components/SiderBar'
import HeaderBar from './components/HeaderBar'
import './style/index.css';
const {Content,Footer} = Layout

class App extends Component {
  render() {
    return (
      <Layout className="ant-layout-has-sider" style={{ height: '100%' }}>
        <SiderBar />
        <Layout>
          <HeaderBar />
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            {this.props.children}
          </Content>
          <Footer style={{textAlign:'center'}}>
            这是个页脚
            </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
