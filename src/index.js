import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import SelectPizza from "./components/SelectPizza/SelectPizza"

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//reducer to hold pizzas from the database
const pizzaList = (state=[], action) => {
  switch (action.type) {
    case 'SET_PIZZA':
      return action.payload;
    default:
      return state;
  }
}

//reducer to keep track of pizzas being purchased
const cart = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      return action.payload;
    case 'REMOVE_PIZZA':
      return state.filter(stat => stat.id !== action.payload);
    default:
      return state;
  }
}

const store = createStore(
    combineReducers({
      cart,
      pizzaList
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
