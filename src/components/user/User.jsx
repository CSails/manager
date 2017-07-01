import React from 'react';
import { Card } from 'antd';
import BreadBar from '../BreadBar';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import { Table } from 'antd';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class User extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const hasSelected = selectedRowKeys.length > 0;
        const formItemLayout = {
            labelCol: { span: 500 },
            wrapperCol: { span: 400 }
        };
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className="gutter-example">
                <BreadBar />
                <Card title="用户查询" style={{ textAlign: 'center' }} >
                    <Form layout="inline" >
                        <FormItem {...formItemLayout}
                            label='用户ID'
                        >
                            <Input style={{ width: '250' }} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        </FormItem>
                        <FormItem {...formItemLayout}
                            label='用户昵称'
                            style={{ marginLeft: 30 }}
                        >
                            <Input style={{ width: '250' }} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" placeholder="用户昵称" />
                        </FormItem>
                        <FormItem {...formItemLayout}
                            label='注册时间'
                            style={{ display: 'block', marginTop: '40px' }}
                        >
                            <RangePicker style={{ marginRight: 160, width: '240' }} />
                            <Button type="primary" style={{ marginLeft: 20 }} htmlType="submit">Search</Button>
                            <Button style={{ marginLeft: 20 }} onClick={this.handleReset}>
                                Clear
                                 </Button>
                        </FormItem>
                        <Row>
                            <Col span={24} style={{ textAlign: 'right', marginTop: '40' }}>

                            </Col>
                        </Row>
                    </Form>
                </Card>
                <Card title="用户结果" >
                    <div>
                        <div style={{ marginBottom: 16 }}>
                            <Button
                                type="primary"
                                disabled={!hasSelected}
                                loading={loading}
                            >
                                Reload
                             </Button>
                        </div>
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </div>
                </Card>
            </div >

        )

    }
}

export default User;