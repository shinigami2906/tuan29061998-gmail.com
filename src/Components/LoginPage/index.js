import React from "react"
import { Row, Col, Form, Input,Button} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            state : true
        }
    }
    handleClick = e =>{
        e.preventDefault()
        this.setState({
            state : !this.state.state
        })
    }
    buttonClick = (e) =>{
        e.preventDefault()
        let data = {
            user : this.refs.user.state.value,
            password : this.refs.password.state.value
        }
        let url;
        if (this.state.state) url = "http://localhost:3001/login"
        else url = "http://localhost:3001/register"
        fetch(url,{
            method: "POST",
            body : JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
              },
        }).then(response =>{
            if (response.status === 200) response.json().then(body => {
                var x = window.open("", "myWindow", "width=200,height=100");
                x.localStorage.setItem("access-token",body.accessToken)
                x.localStorage.setItem("user",body.user)
                x.localStorage.setItem("id",body._id)
                x.close();
                this.props.history.push("/")
            });
            else {
                alert("Dmm")
            }
        }).catch(err =>{
            alert(1);
        })
    }
    render() {
        return (
            <Row justify="center" style={{
                marginTop: "100px"
            }}>
                <Col span={16}>
                    <Row>
                      
                      <Col span={8} >
                       
                        <h1>{this.state.state ? "Login" : "Register"}</h1>
                      
                      <Form
                            >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input ref="user" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                ref ="password"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                         

                            <Form.Item>
                                <Button type="primary" htmlType="submit" onClick= {this.buttonClick} >
                                    {this.state.state ? "Login" : "Register"} 
                                </Button>{"  "}
                                Or <a href="/#" onClick= {this.handleClick} >{!this.state.state ? "Login" : "Register"}</a>

                            </Form.Item>
                            </Form>  
                        </Col>
                    </Row>
                </Col>
            </Row>
      
        )
    }
}

export default LoginPage;