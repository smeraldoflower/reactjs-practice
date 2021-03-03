import React from 'react'
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div>
            <h1>MY WORKS</h1>
            
            <Link to='/PP01'><button>PP01</button></Link>
            <Link to='/PP02'><button>PP02</button></Link>
            <Link to='/PP03'><button>PP03</button></Link>
            <Link to='/PP04'><button>PP04</button></Link>

        </div>
    )
}

export default Projects
