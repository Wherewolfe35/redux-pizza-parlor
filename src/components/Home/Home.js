import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br />
        <Link to='/select' className='startedLink'>Get Started!</Link>
        <br />
        <img src="images/pizza_photo.png" alt='fake pizza that actually looks pretty good' />
        <p>Pizza is great.</p>
      </div>
     );
  }
}
 
export default Home;