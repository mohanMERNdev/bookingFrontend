import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  calculateTotal = () => {
    return this.props.cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
  };

  render() {
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {this.props.cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {this.props.cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: ${this.calculateTotal().toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
