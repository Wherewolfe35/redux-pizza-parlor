import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PizzaItem from "../Pizza Item/PizzaItem"

class SelectPizza extends Component {
  state = {
    pizzas: [],
    addButtonShowing: true
  };

  componentDidMount() {
    this.getPizzas();
  }


  changePage = () => {
    this.props.history.push("/order");
  };

  getPizzas = () => {
    axios
      .get("/api/pizza")
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
        </header>
        <div className='pizzaContainer'>
          <p className='orderTotal'>Total: $.$$</p>
          {this.props.reduxStore.pizzaList.map(pizza => (
            <div className='pizzaBox' key={pizza.id}>
              <h2>{pizza.name}</h2>
              <h4>{pizza.description}</h4>
              <p>${pizza.price}</p>
              <PizzaItem pizza={pizza} handleAddPizza={this.handleAddPizza} handleDeletePizza={this.handleDeletePizza}/>
              
              
              {/* {for (let item of this.props.reduxStore.cart.cartList) {
                  if (item.id === pizza.id) {
                      return true
                  } 
                  
                  
                  
                  
                  .includes(pizza.id) ? (
                <button
                  onClick={() =>
                    this.handleAddPizza(pizza.id, pizza.name, pizza.price)
                  }>
                  Add to Order
                </button>
              ) : (
                <button
                  onClick={() => this.handleDeletePizza(pizza.id, pizza.price)}>
                  Delete
                </button> */}
            </div>
          ))}
        </div>
        <button onClick={() => this.changePage()}>Next</button>
      </>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(SelectPizza);
