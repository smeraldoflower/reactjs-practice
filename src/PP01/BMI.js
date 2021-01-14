// Nusaiba Mahmood
// ITRJS PP01
// BMI.js

import React from 'react';

class BMI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null,
            weight: null,
            BMI: null,
        };

    }

    calculateBMI(event) {
        event.preventDefault();
        const currentHeight = parseFloat(event.target.height.value);
        const currentWeight = parseFloat(event.target.weight.value);
        const currentBMI = parseFloat((currentWeight / (currentHeight * currentHeight * 0.01 * 0.01)).toFixed(1));

        this.setState({
            height: currentHeight,
            weight: currentWeight,
            BMI: currentBMI,
        })
    }

    render() {
        return (
            <div>
                <h1>BMI</h1>
                <h2>Your BMI: {this.state.BMI === null ? '' : this.state.BMI}</h2>
                <form onSubmit={this.calculateBMI.bind(this)}>
                    <b>Height (cm): </b>
                    <input type='number' name='height' placeholder="Enter height (cm)" min='0' size='35' />
                    <br />
                    <b>Weight (kg): </b>
                    <input type='number' name='weight' placeholder="Enter weight (kg)" min='0' size='35' />
                    <br />
                    <button>Calculate BMI</button>
                </form>
            </div>
        );
    }
}

export default BMI;
