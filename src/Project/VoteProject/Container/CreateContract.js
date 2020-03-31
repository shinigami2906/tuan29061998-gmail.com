import React from "react"
import {DrizzleContext} from "@drizzle/react-plugin"
import ContractRender from "../components/CreateContract"

class CreateContractConsumer extends React.Component {
    render() {
        return (
            <DrizzleContext.Consumer>
                {
                    drizzleContext =>{
                        const {drizzle, drizzleState, initialized} = drizzleContext
                   
                        if (!initialized) return "Loading.."
                        return (
                            <CreateContract
                            drizzle= {drizzle} drizzleState={drizzleState}
                               
                            />
                        )
                    }
                }
            </DrizzleContext.Consumer>
        )
    }
}
class CreateContract extends React.Component{
   
    constructor(props){
        super(props);
        this.state ={
            stackId : undefined,
            hasSent : false,
            received : false
        }
    }
 
    onFinishChainForm = (e) =>{
        let _time = (new Date(e.time.toString())).getTime() / 1000;
        let _pass = e.PubKey;
        let _owner = localStorage.getItem("id");
        if (!_owner) {
            alert("Chua dang nhap");
            return;
        }
        this.setState({
            stackId : this.props.drizzle.contracts.Creator.methods.creatVote.cacheSend(_pass,_time,_owner,e.number)
        }) 
      
    }
    onFinishServerForm= (e) =>{
        let data ={
            _id : e.address,
            privacy : true,
            password : "1234",
            title : e.title,
            desc : e.desc,
            canidates: []
        }
        for (let i =0;i<e.cName.length;i++){
            data.canidates.push({
                id : i,
                name : e.cName[i],
                desc: e.cDesc[i],

            })
        }
       fetch("http://localhost:3001/api/vote",{
            method: "POST",
            body : JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                "x-access-token" : localStorage.getItem("access-token") 
            },
       }).then(response =>{
           if (response.status == 200) return response.json();
           else this.setState({received: "error"})

       }).then(body =>{
            this.setState({received:"success"})
            console.log(body)
       }).catch(err =>{
           this.setState({received:"error"})
       })
       this.setState({hasSent : true,received:"pending"})
    }
    render(){
        if (this.state.stackId === undefined) return (<ContractRender process = {0} method={this.onFinishChainForm}   />)
        else {
            let txHash =  this.props.drizzleState.transactionStack[this.state.stackId]
           
            if (txHash.length !== 66) return <ContractRender process = {1} />
            else{
                
                
                let status =  this.props.drizzleState.transactions[txHash].status
                if (status == "error") return  <ContractRender process = {5} />;
                else if (status == "pending") return  <ContractRender process = {1} />
                else {
                    this.data =  this.props.drizzleState.transactions[txHash].receipt.events.creat.returnValues;
                    if (!this.state.hasSent) return <ContractRender process = {2} method={this.onFinishServerForm} data={this.data}  />
                    else{
                        if (this.state.received =="success") return <ContractRender process = {4}></ContractRender>
                        else if (this.state.received=="error") return <ContractRender process = {5} />
                        else return <ContractRender process = {1} />
                    } 
                       
                }
            }
          
        }
         
        
        
    } 
}

export default CreateContractConsumer