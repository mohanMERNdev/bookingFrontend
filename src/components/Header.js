import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    return (
      <header className="header">
        <div className="logo">Desti Nation </div>
        <div className="hamburger-menu" onClick={this.toggleMenu}>
          ☰
        </div>
        <nav className={`nav-links ${this.state.menuOpen ? 'active' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
