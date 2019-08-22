import React, { Component } from "react";
import axios from 'axios'

class SelectPizza extends Component {
  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    axios
      .get("/api/pizza")
      .them(response => {
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

export default SelectPizza;
