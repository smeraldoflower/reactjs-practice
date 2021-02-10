import React from 'react'
import ToDo from './components/ToDo';
import Wallet from './components/Wallet';

function PP02() {
    return (
        <div className="PP02" style = {{border: 'solid', padding: '5px', margin: '5px'}}>
            <h1>PP02</h1>
            <ToDo/>
            <Wallet/>         
        </div>
    )
}

export default PP02
