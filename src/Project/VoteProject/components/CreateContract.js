import React from "react"
import PropsType from 'prop-types'
import {Row,Col, Form,DatePicker,InputNumber,Input,Select, Steps,Switch, Button, List,Card} from "antd"
import { LoadingOutlined } from '@ant-design/icons';
import Web3 from "web3"


class CreateContract extends React.Component {
    static propsType ={
        method : PropsType.func,
        process : PropsType.number.isRequired
    }
    onChangeSwitch = (e) =>{
        let address,privateKey;
        let web3 = new Web3()
        if  (e === true) {
            let account = web3.eth.accounts.create();
        
            address = account.address
            privateKey = account.privateKey
        }
        this.refs.form.setFieldsValue({"PubKey" : address,"PriKey": privateKey})
    }
    render() {
        let candidates =[]
        if (this.props.process === 2) {
            for (let i =0 ; i<this.props.data._candidate;i++) candidates.push(i)
        }
        return(
            <>
                <Row style={{marginBottom:"50px"}}> 
                    <Col span={24}>
                    <h2 style={{textAlign:"center"}}> Information Vote </h2>
                    <h4 style={{textAlign:"center"}}> You shoule fill in full form</h4>
                    </Col>
                </Row>
                <Row justify="center">
                <Col span={18}>
          
                {this.props.process === 0 && 
                (<Form labelCol={{span:8}} wrapperCol={{ span: 16 }} labelAlign="left" size="large" onFinish={this.props.method} ref="form">
                    <Form.Item label="Exp Time" name="time">
                      
                            <DatePicker showTime /> 
                      
                    
                    </Form.Item>
                    
                    <Form.Item label="Number of Candidates">
                        <Form.Item  name={["number"]} noStyle>
                            <InputNumber />
                        </Form.Item>
                        {" "}Candidates
                    </Form.Item>
                   
                    <Form.Item name={["switch"]} label="Public | Private" valuePropName="checked">
                        <Switch onChange={this.onChangeSwitch} />
                    </Form.Item>
                    <Form.Item name={["PubKey"]} label="Public Key">
                        <Input disabled ></Input>
                    </Form.Item>
                    <Form.Item name={["PriKey"]} label="Private Key">
                        <Input disabled></Input>
                    </Form.Item>
                    <Form.Item wrapperCol="24">
                    <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Form.Item>
                 </Form>)}
                {this.props.process === 1 && (<div style={{textAlign:"center"}}><LoadingOutlined style={{fontSize:"75px"}}/></div>)}
                {this.props.process ===2 && (
                    <Form labelCol={{span:8}} wrapperCol={{ span: 16 }} labelAlign="left" size="large" onFinish={this.props.method} ref="form"
                        initialValues={{address : this.props.data._address}}
                    >
                    <Form.Item name={["address"]} label="Address">
                        <Input disabled ></Input>
                    </Form.Item>
                    <Form.Item  label="Owner address">
                  
                        <span>{this.props.data._owner}</span>
                    </Form.Item>
                    <Form.Item  label="Owner user">
                        <span>{this.props.data._owner2}</span>
                    </Form.Item>
                 
                    <Form.Item label="Number of Candidates">

                        <span>{this.props.data._candidate} {" "} Candidates</span>
                    </Form.Item>
                    <Form.Item  label="Public Key">
                        <span>{this.props.data._pass}</span>
                    </Form.Item>
                    <Form.Item  label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item  label="Description" name="desc">
                        <Input.TextArea />
                    </Form.Item>
                    <List
                        grid={{gutter:16,column: 2}}
                        dataSource={candidates}
                        renderItem={i =>(
                            <List.Item>

                         
                            <Card title={"Candidate "+i}>
                                <Form.Item label="Name" name={["cName",i]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Description" name={["cDesc",i]}>
                                    <Input.TextArea />
                                </Form.Item>
                            </Card>
                            </List.Item>
                        )}
                    />

                   
                    <Form.Item wrapperCol="24">
                    <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Form.Item>
                 </Form>)
                }
           
                {this.props.process ===4 && ("Ket thuc")}
                {this.props.process ===5 && ("Loi")}
                    <div style={{height:"200px"}}>

                    </div>
               
                </Col>
     
             </Row>
               
            </>
        )
    }
}

export default CreateContract
  
    
    
 