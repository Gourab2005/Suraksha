import React from 'react';
import './working.css';
import { FaCommentDots, FaHandsHelping, FaUsers } from 'react-icons/fa';

const Working = () => {
  return (
    <div className="working-container">
      <h2>How Our Platform Works</h2>
      <p>Our platform provides immediate support in three simple steps:</p>
      <div className="steps">
        <div className="step">
          <FaCommentDots className="icon" />
          <h3>Report an Incident</h3>
          <p>Quick and anonymous reporting</p>
        </div>
        <div className="step">
          <FaHandsHelping className="icon" />
          <h3>Receive Immediate Support</h3>
          <p>Alerts to governing body and authorities</p>
        </div>
        <div className="step">
          <FaUsers className="icon" />
          <h3>Community Engagement</h3>
          <p>Community analysis and safety reinforcement</p>
        </div>
      </div>
    </div>
  );
};

export default Working;
