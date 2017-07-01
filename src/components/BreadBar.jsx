import { Breadcrumb } from 'antd';
import React from 'react';

class BreadBar extends React.Component {

    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadBar;

