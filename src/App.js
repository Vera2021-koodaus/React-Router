import{BrowserRouter,Switch, Route}from 'react-router-dom';
import Header from './comp/Header';
import Home from './comp/Home';
import Add from './comp/Add';
import Edit from './comp/Edit';
import NotFound from './comp/Notfound';

function App() {
  return (
    <div>  
      <BrowserRouter>
        <h1>Expensify App </h1>
        <Header/>
        <Switch>
          <Route path='/' exact={true} component={Home}></Route>
          <Route path='/add' component={Add}></Route>
          <Route path='/edit/:id' component={Edit}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
