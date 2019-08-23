import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, } from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
// import 'typeface-roboto';


//Components
import Home from "../Home/Home";
import SelectPizza from "../SelectPizza/SelectPizza";
import Checkout from "../Checkout/Checkout";
import EnterCustomerInfo from "../EnterCustomerInfo/EnterCustomerInfo";
import Admin from '../Admin/Admin'

const theme = createMuiTheme({
  palette: {
    primary: {
      
      main: "#ff3d00"
    },
    secondary: {
      light: "#ffff56",
      main: "#ffea00"
    },
    status: {
    danger: "orange"
  },
    background:{ 
      default: "#ff7043"}
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/select" component={SelectPizza} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order" component={EnterCustomerInfo} />
          <Route path="/admin" component={Admin} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
