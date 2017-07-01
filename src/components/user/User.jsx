import React from 'react';
import { Card } from 'antd';
import BreadBar from '../BreadBar';
import { Form, Icon, Input, Button,Row,Col } from 'antd';
const FormItem = Form.Item;
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

class User extends React.Component {
    render() {
        const formItemLayout = {
            labelCol: { span: 500 },
            wrapperCol: { span: 400 }
        };
        return (
            <div className="gutter-example">
                <BreadBar />
                <Card title="用户查询" style={{ textAlign: 'center' }} >
                    <Form layout="inline" >
                        <FormItem {...formItemLayout}
                            label='用户ID'
                        >
                            <Input style={{ width: '250'  }} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        </FormItem>
                        <FormItem {...formItemLayout}
                            label='用户昵称'
                            style={{ marginLeft: 30 }}
                        >
                            <Input style={{ width: '250'}} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" placeholder="用户昵称" />
                        </FormItem>
                        <FormItem {...formItemLayout}
                            label='注册时间'
                            style={{display:'block',marginTop:'40px'}}
                        >
                            <RangePicker style={{ marginRight: 160,width: '240' }}/>
                            <Button type="primary" style={{ marginLeft: 20 }} htmlType="submit">Search</Button>
                                <Button style={{ marginLeft: 20 }} onClick={this.handleReset}>
                                    Clear
                                 </Button>
                        </FormItem>
                        <Row>
                            <Col span={24} style={{ textAlign: 'right',marginTop:'40'}}>
                                
                            </Col>
                        </Row>
                    </Form>
                </Card>
                <Card title="用户结果" >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div >

        )

    }
}

export default User;