import { Menu, Icon, Layout } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header } = Layout;
import React from 'react';
import { hashHistory } from 'react-router';

class HeaderBar extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        switch(e.key){
            case 'setting:1':
             return hashHistory.push('/login');
            default:
            return;
        }
    }
    loginout=(e)=>{
         hashHistory.push('/login');
    }
    render() {
        return (
             <Header style={{ background: '#fff', padding: 0, height: 50 }} className="custom-theme" >
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{ lineHeight: '50px', float: 'right' }}
            >
                <SubMenu 
                title={<span><Icon type="setting" 
                 style={{width:'60px'}}
                /></span>}>
                    <MenuItemGroup title="设置">
                        <Menu.Item key="setting:1"  onTitleClick={this.loginout} >退出</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
            </Header>
        );
    }
}

export default HeaderBar;