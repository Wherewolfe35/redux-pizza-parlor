import React, {Component} from 'react';

import axios from 'axios';

class Admin extends Component {

    state = {
        pizzaOrders: [],
    }

getOrders = () => {
axios.get('/api/order')
.then(response => {
    console.log(response.data);
    this.setState({pizzaOrders: response.data})
}).catch(error => {
    console.log(error);
    
})
}
componentDidMount(){
    this.getOrders();
}

    render(){
        return (
          <div>
            <h1>Prime Pizza Orders</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time Order Placed</th>
                  <th>Type</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.pizzaOrders.map((order, i) =>{
                      return (
                        <tr key={order.id}>
                          <td>{order.customer_name}</td>
                          <td>{order.time}</td>
                          <td>{order.type}</td>
                          <td>{order.total}</td>
                        </tr>
                      );
                  })}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Admin;