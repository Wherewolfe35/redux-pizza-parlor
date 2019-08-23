import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, } from 'react-router-dom';

//Components
import Home from "../Home/Home";
import SelectPizza from "../SelectPizza/SelectPizza";
import Checkout from "../Checkout/Checkout";
import EnterCustomerInfo from "../EnterCustomerInfo/EnterCustomerInfo";
import Admin from '../Admin/Admin'
//Components


class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/select' component={SelectPizza} />
      <Route path='/checkout' component={Checkout}/>
      <Route path='/order' component={EnterCustomerInfo} />
      <Route path ='/admin' component ={Admin}/>
      </Router>
    );
  }
}

export default App;
