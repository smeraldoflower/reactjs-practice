import React from 'react'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PP01 from './PP01/PP01'
import PP02 from './PP02/PP02'
import PP03 from './PP03/PP03'
// import PP04 from './PP04'

function App() {
    return (
        <Router>
            <div className="App">
                <h1>APP</h1>
                <Link to='/PP01'><button>PP01</button></Link>
                <Link to='/PP02'><button>PP02</button></Link>
                <Link to='/PP03'><button>PP03</button></Link>

                <Switch>
                    <Route path='/PP01' component={PP01}/>
                    <Route path='/PP02' component={PP02}/>
                    <Route path='/PP03' component={PP03}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
