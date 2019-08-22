import React, { Component } from "react";
import axios from 'axios'
import {connect} from 'react-redux'

class SelectPizza extends Component {
  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    axios.get("/api/pizza")
      .then(response => {
        console.log(response.data);
        this.props.dispatch({
          type: "SET_PIZZA",
          payload: response.data
        });
      })
      .catch(error => {
        console.log("error in getPizzas GET", error);
      });
  };

  render() {
    return (
      <>
        <header>
          <p>Step 1: Select You Pizza</p>
        </header>
        <div className='pizzaContainer' />
        <button>Next</button>
      </>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});


export default connect(mapStateToProps)(SelectPizza);
