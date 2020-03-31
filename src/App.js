import React from "react"
import Header from "./Components/Header/Header"
import VoteProject from "./Project/VoteProject";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Loginpage  from "./Components/LoginPage"
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/VoteProject' component={VoteProject}/>
                    <Route path='/LoginPage' component={Loginpage}/>
                </Switch>
               
           </BrowserRouter>
        )
    }
}

export default App