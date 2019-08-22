import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//Components
import SelectPizza from "../SelectPizza/SelectPizza"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <Link to='/select' className='startedLink'>Get Started!</Link> 
        <br />
        <img src="images/pizza_photo.png" alt='fake pizza that actually looks pretty good'/>
        <p>Pizza is great.</p>
      </div>
      <Route path='/select' component={SelectPizza}/>
      </Router>
    );
  }
}

export default App;
