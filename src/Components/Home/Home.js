import React from "react"
import { Row, Col} from "antd";


class Home extends React.Component {
    render() {
        return (
            <Row justify="center" style={{
                marginTop: "30px"
            }}>
                <Col span={18}>
                    <Row>
                        <Col span={24}>
                        <h1>Home</h1>
                        <h4> Description about Daikon</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
      
        )
    }
}

export default Home;