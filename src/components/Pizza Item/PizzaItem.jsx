import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class PizzaItem extends Component {
  state = {
    addButtonShowing: true
  };

  handleAddPizza = (id, name, price) => {
    this.props.dispatch({
      type: "ADD_PIZZA",
      payload: { id, name, price }
    });
    this.buttonFlip();
  };

  handleDeletePizza = (id, price) => {
    this.props.dispatch({
      type: "REMOVE_PIZZA",
      payload: { id, price }
    });
    this.buttonFlip();
  };

  flipButton = () => {
    if (this.state.addButtonShowing === true) {
      return (
        <button
          onClick={() =>
            this.handleAddPizza(
              this.props.pizza.id,
              this.props.pizza.name,
              this.props.pizza.price
            )
          }>
          Add to Order
        </button>
      );
    } else {
      return (
        <button
          onClick={() =>
            this.handleDeletePizza(
              this.props.pizza.id,
              this.props.pizza.price
            )
          }>
          Delete
        </button>
      );
    }
  };

  buttonFlip = () => {
    this.setState({
      addButtonShowing: !this.state.addButtonShowing
    });
  };

  render() {
    return <>{this.flipButton()}</>;
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(PizzaItem);
