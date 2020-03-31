import React from "react"
import { Row } from "antd"
import PropTypes from "prop-types"
import MyVote from "../components/MyVote"

class ListVote extends React.Component {
    static propTypes ={
        method: PropTypes.func.isRequired,
        store : PropTypes.object.isRequired
    }

    componentWillMount(){
    
         this.dataKey = this.props.method.cacheCall(...[]);
    }
    render(){


        if (this.props.store[this.dataKey] === undefined){
            return <span>Fetching...</span>;
        }   

        if (this.props.store[this.dataKey].value.length === 0){
            return(
                "No have vote"
            )
        }

        let arr = [];
        for (let i =0;i<this.props.store[this.dataKey].value.length;i++){
            arr.push( <MyVote address ={this.props.store[this.dataKey].value[i]} key={i} ></MyVote>)
        }
        return(
            <Row gutter={[16,16]}>
                {arr}
            </Row>
        )
    }
}

export default ListVote;