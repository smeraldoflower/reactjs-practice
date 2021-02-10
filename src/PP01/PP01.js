import React from 'react'
import QA from './components/QA'
import BMI from './components/BMI';
import Counter from './components/Counter';

function PP01() {
    return (
        <div className="PP01" style = {{border: 'solid', padding: '5px', margin: '5px'}}>
            <h1>PP01</h1>
            <QA/>
            <BMI/>
            <Counter/>            
        </div>
    )
}

export default PP01
