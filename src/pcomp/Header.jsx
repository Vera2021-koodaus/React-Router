import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=()=><div>
    <NavLink to='/' exact activeClassName='selected'
    className="nav"
    >Home</NavLink>
    <NavLink to='/portfolio' exact activeClassName='selected'
    className="nav"
    >Portfolio</NavLink>
    <NavLink to='/contact' activeClassName='selected'
    className="nav"
    >Contact</NavLink>
</div>

export default Header;

