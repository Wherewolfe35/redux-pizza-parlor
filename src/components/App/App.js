import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path='/' component={Home}/>
      </Router>
    );
  }
}

export default App;
