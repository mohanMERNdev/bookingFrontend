import React, { Component } from 'react';
import './Home.css'; // Import your CSS

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [
        {
          id: 1,
          image: 'https://via.placeholder.com/300',
          title: 'Luxury Apartment',
          description: 'A beautiful apartment in the heart of the city.',
          price: '$2500'
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/300',
          title: 'Cozy Cottage',
          description: 'A cozy cottage with a lovely garden.',
          price: '$1500'
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/300',
          title: 'Modern Loft',
          description: 'A modern loft with stunning city views.',
          price: '$3000'
        },
        {
          id: 4,
          image: 'https://via.placeholder.com/300',
          title: 'Beach House',
          description: 'A beachfront house with direct beach access.',
          price: '$3500'
        },
        {
          id: 5,
          image: 'https://via.placeholder.com/300',
          title: 'Mountain Cabin',
          description: 'A rustic cabin nestled in the mountains.',
          price: '$1800'
        },
        {
          id: 6,
          image: 'https://via.placeholder.com/300',
          title: 'Urban Studio',
          description: 'A stylish studio apartment in a trendy neighborhood.',
          price: '$2200'
        }
      ]
    };
  }

  render() {
    return (
      <div className="property-container">
        {this.state.properties.map(property => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>{property.price}</p>
            <button onClick={() => this.props.addToCart(property)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
