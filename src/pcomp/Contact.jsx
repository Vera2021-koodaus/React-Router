import React from 'react';
import {Link} from 'react-router-dom'

const Contact=()=><div>
    <h2>this is contact page!</h2>
    <p>
    this is the contact options:
    <Link to='/contact/123' className='link'>Option 1</Link>
    <Link to='/contact/789' className='link'>Option 2</Link>

    </p>
</div>

export default Contact;