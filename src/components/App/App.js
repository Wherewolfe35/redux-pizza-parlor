import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from "../Home/Home";
import SelectPizza from "../SelectPizza/SelectPizza";
import Checkout from "../Checkout/Checkout";
import EnterCustomerInfo from "../EnterCustomerInfo/EnterCustomerInfo";

//Components


class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/select' component={SelectPizza} />
      <Route path='/checkout' component={Checkout}/>
      <Route path='/order' component={EnterCustomerInfo} />
      </Router>
    );
  }
}

export default App;
