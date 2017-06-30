import { Layout, Menu, Icon } from 'antd';
import React from 'react';
const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

class SiderBar extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Sider

        style={{ overflowY: 'auto'}}
      >
        <div className="logo" style={{ height: '32px',background: '#333',borderRadius: '6px',
    margin: '16px'}} />
        <Menu
          theme="dark"
          onClick={this.handleClick}
          style={{ width: 200, height: '100%' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
            <Menu.Item key="1">用户管理</Menu.Item>
            <Menu.Item key="2">权限管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="file-text" /><span>文章管理</span></span>}>
            <Menu.Item key="5">文章查询</Menu.Item>
            <Menu.Item key="6">文章统计</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SiderBar;