import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


class EnterCustomerInfo extends Component {

state = {
    newCustomer: {
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: true,
        total: this.props.reduxStore.cart.totalPrice
    }
}

handleChangeFor = (propertyName, event) => {
    this.setState({
        newCustomer: {
            ...this.state.newCustomer,
            [propertyName]:event.target.value
        }
    })
}

handleRadioPickup = (event) => {
    this.setState({
        newCustomer: ({
            ...this.state.newCustomer,
            type: "Pickup"
        })
    })
}

handleRadioDelivery = (event) => {
    this.setState({
        newCustomer: {
            ...this.state.newCustomer,
            type: "Delivery"
        }
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    console.log('you clicked the submit', this.state.newCustomer);

    this.props.dispatch({
        type: 'ADD_INFO',
        payload:  this.state.newCustomer
    })
     this.props.history.push("/checkout");
}

handleBackButton = (event) => [
    this.props.history.push('/select')

]

render(){ 

    return (
        
        <div>
            <header>
                <h1>Prime Pizza</h1>
                <h2>Total: {this.props.reduxStore.cart.totalPrice}</h2>
            </header>
        <h1>Hello From Customer Info Form</h1>
        <form onSubmit = {this.handleSubmit}>
            <input type="text" placeholder = "Name"
            onChange={(event) => this.handleChangeFor('customer_name', event)}/>
            <input type="text" placeholder= "Your Street Address"
            onChange={(event) => this.handleChangeFor('street_address', event)}/>
            <input type = "text" placeholder ="Your City"
            onChange = {(event) => this.handleChangeFor('city', event)}/>
            <input type= "number" placeholder = "Your Zip Code"
             onChange = {(event) => this.handleChangeFor('zip', event)} />

             <input type="radio" name="delivery" value="type" onClick ={this.handleRadioPickup}  />Pickup
            <input type="radio" name="delivery" value="type" onClick ={this.handleRadioDelivery} />Delivery
            <br/>
            <button onClick={this.handleBackButton}>Back</button>
             <button type="submit" >Next</button>

        </form>
        </div>
       
    )
}
}

const mapStateToProps = (reduxStore) => {
    return {reduxStore}
}

export default connect(mapStateToProps)(EnterCustomerInfo)