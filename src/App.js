import React from 'react'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PP01 from './PP01/PP01'
import PP02 from './PP02/PP02'
import PP03 from './PP03/PP03'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
// import PP04 from './PP04'

function App() {
    return (
        <Router>
            <div className="App">
                <h1 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    Nusaiba's React APP
                </h1>
                
                <div className="Nav"
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
                >
                    <Link to='/About'><h2>About</h2></Link>
                    <Link to='/Contact'><h2>Contact</h2></Link>
                    <Link to='/'><h2>My Works</h2></Link>
                </div>
                <Switch>
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/PP01' component={PP01} />
                    <Route path='/PP02' component={PP02} />
                    <Route path='/PP03' component={PP03} />
                    <Route path='/' component={Projects} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
