import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio=()=>{
    return(
        <div>
            <h2>My Work</h2>
            <p>Check out what I have done:</p>
            <Link to='/portfolio/1' className='link'>Item 1</Link><br></br>
            <Link to='/portfolio/2' className='link'>Item 2</Link>
        </div>
    )
}

export default Portfolio;