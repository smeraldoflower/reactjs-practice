// Nusaiba Mahmood
// ITRJS PP01
// Counter.js

import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            offset: 1,
        };

    }

    updateOffset(event) {
        this.setState({
            offset: parseFloat(event.target.value),
        })
    }

    increment() {
        const currentValue = this.state.counter;
        const currentOffset = this.state.offset;
        this.setState({
            counter: currentValue + currentOffset,
        })

    }

    decrement() {
        const currentValue = this.state.counter;
        const currentOffset = this.state.offset;
        this.setState({
            counter: currentValue - currentOffset,
        })
    }

    reset() {
        this.setState({
            counter: 0,
        })
    }

    render() {
        return (
            <div>
                <h1>COUNTER</h1>
                <h2>Counter: {this.state.counter}</h2>
                <b>OFFSET: </b>
                <input type='number' value={this.state.offset} onChange={this.updateOffset.bind(this)} min='0' size='35' />            <br></br>
                <button onClick={this.increment.bind(this)}>+ INCREMENT</button>
                <button onClick={this.decrement.bind(this)}> - DECREMENT</button>
                <button onClick={this.reset.bind(this)}>Reset Counter</button>
            </div>
        );
    }
}

export default Counter;
