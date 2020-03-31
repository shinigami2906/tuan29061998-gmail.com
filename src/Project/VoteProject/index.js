import { DrizzleContext } from "@drizzle/react-plugin"
import { Drizzle, generateStore } from "@drizzle/store"
import Creator from "./contracts/Creator.json"
import Web3 from "web3"
import App from "./components/App"
import React from 'react'

if (window.ethereum) {
    window.ethereum.enable();
}

const Daikon = () => {
    let web3;
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
    }
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider)
    }
    else web3 = 'ws://127.0.0.1:8545'


    const options = {
        contracts: [Creator],
        web3: {
            customProvider: web3,
        }
    }

    const drizzleStore = generateStore(options);
    const drizzle = new Drizzle(options, drizzleStore);
    return (


        <DrizzleContext.Provider drizzle={drizzle}>

            <App />
        </DrizzleContext.Provider>

    )
}
export default Daikon
