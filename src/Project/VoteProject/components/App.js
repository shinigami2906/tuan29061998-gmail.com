import React from "react"
import { Row, Col, Tabs } from "antd";
import ListVote from "../Container/ListVoteContainer"
import CreateContract from "../Container/CreateContract"
const { TabPane } = Tabs;

class App extends React.Component {
    render() {
        return (
   

         
            <Row justify="center" style={{
                marginTop: "30px"
            }}>
                <Col span={18}>
                    <Row style={{  }}>
                        <Col span={24}>
                        <h1>Vote Website</h1>
                        <p>A website is built on blockchain technology</p>
                        </Col>
                    </Row>
                    <Row style={{ height: "500px", marginTop: "15px" }}>
                      <Col span={24}>
                            <Tabs defaultActiveKey="1" >
                            <TabPane tab="My Vote" key="1">
                                <ListVote />
                            </TabPane>
                            <TabPane tab="Voted" key="2">
                             
                            </TabPane>
                            <TabPane tab="Trending" key="3">
                             
                            </TabPane>
                            <TabPane tab="Creat Vote" key="4">
                                <CreateContract/>
                            </TabPane>
                        </Tabs>
                      </Col>
                    </Row>
                </Col>
            </Row>
      
        )
    }
}

export default App;