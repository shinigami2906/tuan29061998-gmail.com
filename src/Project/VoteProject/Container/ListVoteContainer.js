import React from "react"
import { DrizzleContext } from "@drizzle/react-plugin"

import ListVote from "./ListVote"

class ListVoteContainer extends React.Component {

    render() {
        return (
            <DrizzleContext.Consumer>
                {drizzleContext => {
                    const { drizzle, drizzleState, initialized } = drizzleContext;
                  
                    if (!initialized) {
                        return "Loading...1"
                    }
                   
                    return (
                      <ListVote method = { drizzle.contracts.Creator.methods.getMyVote}
                        store ={drizzleState.contracts.Creator.getMyVote}
                      />
                    )
                }}
            </DrizzleContext.Consumer>
        )
    }
}

export default ListVoteContainer;