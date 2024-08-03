import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  addToCart = (property) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, property]
    }));
  };

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact>
            <Home addToCart={this.addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={this.state.cart} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </Router>
    );
  }
}

export default App;
