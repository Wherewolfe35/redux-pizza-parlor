import React, { Component } from "react";
import axios from 'axios'
import {connect} from 'react-redux'

class SelectPizza extends Component {
    state = {
        pizzas : []
    }

handleClick = (id, name, price) => {
    this.props.dispatch({
        type: "ADD_PIZZA",
        payload: {id, name, price}
    })
}

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
          <h1>Step 1: Select You Pizza</h1>
          <p>Total: $.$$</p>
        </header>
        <div className='pizzaContainer'>
            {this.props.reduxStore.pizzaList.map(pizza => (
                <div className="pizzaBox" key={pizza.id}><h2>{pizza.name}</h2><h4>{pizza.description}</h4><p>${pizza.price}</p><button onClick={() => this.handleClick (pizza.id, pizza.name, pizza.price)}>Add to Order</button></div>
            ))}
        </div>
        <button>Next</button>
      </>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});


export default connect(mapStateToProps)(SelectPizza);
