import React, { useState } from 'react';
import './ConnectorForm.css';

const ConnectorForm = () => {
  const [orgType, setOrgType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Connect with Us</h2>
      <form className="connector-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="orgName">Organization Name</label>
          <input type="text" id="orgName" name="orgName" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="text" id="contactNumber" name="contactNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="help">How Will You Help Us?</label>
          <textarea id="help" name="help" required></textarea>
        </div>
        <div className="form-group">
          <label>Organization Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="orgType"
                value="Government"
                checked={orgType === 'Government'}
                onChange={() => setOrgType('Government')}
                required
              />
              Government
            </label>
            <label>
              <input
                type="radio"
                name="orgType"
                value="Private"
                checked={orgType === 'Private'}
                onChange={() => setOrgType('Private')}
                required
              />
              Private
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectorForm;
