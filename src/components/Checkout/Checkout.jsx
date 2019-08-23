import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import axios from 'axios';




class Checkout extends Component {

    //render info from order
    
    //map order to list pizza orders in table

handleCheckout = () => {
    this.props.customerInfo[0].pizzas = this.props.pizzas;
    let postData = this.props.customerInfo[0];
    console.log('button clicked', postData);
    axios.post('/api/order', postData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    this.props.history.push('/')
}

handleBackButton = () => {
    this.props.history.push('/order')
}

    render() {

       
        //map customer info to list customer info
        let customerInfo = this.props.customerInfo.map(info => {
            return (
                <div>
                    <p>{info.customer_name}</p>
                    <p>{info.street_address}</p>
                    <p>{info.city} {info.zip}</p>
                    <p>{info.type}</p>
                </div>

            )
        })

        let pizzaInfo = this.props.pizzaInfo.cartList.map(pizza => {
            return (
                <tr><td>{pizza.name}</td><td>{pizza.price}</td></tr>
            )   
        })




        return (
                <div>
                    <header className="App-header">
                        <h1 className="App-title">Prime Pizza</h1>
                    </header>
                    <br />
                    <h2>
                        Step 3: Checkout
                </h2>
                    <br />
                    {customerInfo}
                    <br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pizzaInfo}
                        </tbody>
                    </table>

                <h3>Total: $<span>{this.props.pizzaInfo.totalPrice}</span></h3>
                    <button onClick={this.handleBackButton}>Back</button>
                    <button onClick={this.handleCheckout}>CHECKOUT</button>
                    {/* {JSON.stringify(this.props.customerInfo)}
                {JSON.stringify(this.props.pizzaInfo)} */}

                    
                </div>

            
        )
    }
}

const mapToProps = reduxStore => {
    return {
        customerInfo: reduxStore.customerInfo,
        pizzaInfo: reduxStore.cart,
        pizzas: reduxStore.pizzas
    }
}


export default connect(mapToProps) (Checkout);