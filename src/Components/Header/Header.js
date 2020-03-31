import React from "react"
import { Row, Col, Menu } from 'antd';
import { Link } from "react-router-dom"
import { AppstoreOutlined, CopyOutlined, UserOutlined, } from '@ant-design/icons';
const { SubMenu } = Menu


class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      user : localStorage.getItem("user")
    }
  }
  logout = (e) =>{
    //e.preventDefault();
    var x = window.open("", "myWindow", "width=200,height=100");
    x.localStorage.setItem("access-token","")
    x.localStorage.setItem("user","")
    x.localStorage.setItem("id","")
    x.close();

  }
  componentWillMount(){

    window.addEventListener("storage",() =>{
      this.setState({
        user : localStorage.getItem("user")
      })
  })
  
  }
  render() {
    return (
      <Row style={{ height: "65px", borderBottom: "1px solid rgb(235, 237, 240)" }} justify="start"> 

        <Col span={4} style={{marginTop:"auto",marginBottom:"auto"}} >
          <div style={{ textAlign: "center",}}>
              <h1 style={{margin : 0}}>Daikon</h1>
          </div>
        </Col>
        <Col span={19}  >
          <Row justify="end">
            <Col>
              <Menu mode="horizontal"
                style={{ lineHeight: "63px" }}
              >
                <Menu.Item key="Post">
                  <CopyOutlined />   <Link to="/">  Post </Link>
                </Menu.Item>
                <SubMenu
                  title={
                    <span>  <AppstoreOutlined /> Project</span>}>
                  <Menu.ItemGroup title="Blockchain">
                    <Menu.Item key="Vote">
                      <Link to="/VoteProject">Vote Project</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu >
                <SubMenu
                    title={<span>    <UserOutlined /> {this.state.user? this.state.user.substring(0,7)+".." : "Account"}  </span> }>
                    {
                      this.state.user? (
                        <Menu.Item>
                            <Link to="/" onClick={this.logout} >Logout</Link>
                        </Menu.Item>
                      ) : 
                      (
                        <Menu.Item>
                          <Link to="/LoginPage"> Login | Register</Link>
                        </Menu.Item>
                      )
                    }
                </SubMenu>
              </Menu>
            </Col>
          </Row>
        </Col>
        <Col span={1}>
        </Col>
      </Row>
    );
  }
}



export default App;
