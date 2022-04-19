import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Header from './pcomp/Header';
import Home from './pcomp/Home';
import Portfolio from './pcomp/Portfolio';
import Item from './pcomp/Item';
import Contact from './pcomp/Contact';
import Option from './pcomp/Option';
import NotFound from './pcomp/Notfound';

const PortfolioApp=()=><div>
    <BrowserRouter>
    <h1>React Router</h1>
    <Header/>
    <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/portfolio' exact  component={Portfolio}></Route>
        <Route path='/portfolio/:id' component={Item} ></Route>
        <Route path='/contact'exact component={Contact} ></Route>
        <Route path='/contact/:id' component={Option} ></Route>
        <Route component={NotFound}></Route>
    </Switch>
    </BrowserRouter>
</div>

export default PortfolioApp;