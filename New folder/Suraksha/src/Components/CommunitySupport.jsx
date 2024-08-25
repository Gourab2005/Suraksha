import React from 'react';
import { FaHandsHelping, FaUsers } from 'react-icons/fa'; // Import React Icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CommunitySupport.css';

const CommunitySupport = () => {
  return (
    <div className="community-support-container" id='Community'>
      <h2 className="community-support-title">Community Support</h2>
      <p className="community-support-description">
        Our platform thrives on community engagement and solidarity.
      </p>
      <div className="community-support-cards">
        <div className="support-card">
          <div className="support-card-icon">
            <FaHandsHelping />
          </div>
          <h3 className="support-card-title">Community Engagement</h3>
          <p className="support-card-description">
            Join hands with us to address safety concerns and foster unity.
          </p>
          <Link to="/community-engagement">
            <button className="support-card-button">Learn More</button>
          </Link>
        </div>
        <div className="support-card">
          <div className="support-card-icon">
            <FaUsers />
          </div>
          <h3 className="support-card-title">Community Features</h3>
          <p className="support-card-description">
            Explore community chat, report wall, and graffiti showcasing user resilience.
          </p>
          <Link to="https://t.me/+q1eqjkLLcS83ZDA1">
            <button className="support-card-button">Join Chat</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;
