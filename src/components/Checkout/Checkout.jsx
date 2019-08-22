import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import SelectPizza from '../SelectPizza/SelectPizza';



class Customer extends Component {

    //render info from order
    

    //map order to list pizza orders in table

    //

//    handlePost = (event) => {
//        axios.post('/api/order', )
//        .then ((response) => {
//            console.log('IN POST:', response);
           
//        }).catch((error) => {
//            console.log('ERROR in POST:', error);
//        })
//        this.props.history.push();
//    }

 

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

        let pizzaInfo = this.props.pizzaInfo.map(pizza => {
            return (
                <tr><td>{pizza}</td></tr>
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

                    <p><h3>Total: $ <span>1000</span></h3></p>
                    <button>CHECKOUT</button>
                    
                    <Route exact path ="/select" component={SelectPizza}/>
                </div>

            
        )
    }
}

const mapToProps = reduxStore => {
    return {
        customerInfo: reduxStore.customerInfo,
        pizzaInfo: reduxStore.cart
    }
}


export default connect(mapToProps) (Customer);