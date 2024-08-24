import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import prod1 from '../assets/prod1.jpg'; // Import the image

const Shop = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-title">Stay Safe with Our Products</h2>
      <p className="shop-description">Explore our curated selection of safety products for your needs.</p>
      <Link to="/products" className="shop-explore-link">
        <button className="shop-explore-button">Explore</button>
      </Link>
      <div className="shop-cards">
        <div className="shop-card">
          <img src={prod1} alt="Personal Alarm" className="shop-card-image" />
          <h3 className="shop-card-title">Personal Alarm</h3>
          <p className="shop-card-link">View Details</p>
        </div>
        <div className="shop-card">
          <img src={prod1} alt="Pepper Spray" className="shop-card-image" />
          <h3 className="shop-card-title">Pepper Spray</h3>
          <p className="shop-card-link">View Details</p>
        </div>
        <div className="shop-card">
          <img src={prod1} alt="Safety Whistle" className="shop-card-image" />
          <h3 className="shop-card-title">Safety Whistle</h3>
          <p className="shop-card-link">View Details</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
