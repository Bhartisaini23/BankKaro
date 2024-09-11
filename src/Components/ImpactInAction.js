import React from 'react';
import './ImpactInAction.css'; // Import the CSS file for styling

const ImpactInAction = () => {
  return (
    <div className="impact-container">
      <h1 className="impact-title">What They Say About Bankkaro</h1>
      <h2 className="impact-subtitle">See the Impact in Action</h2>
      
      <div className="impact-content">
        <div className="impact-image">
          <img src='RatanTata.png' alt="Ratan Tata" className="ratan-tata-img" />
        </div>
        
        <div className="impact-details">
          <h3 className="impact-name">Ratan Tata</h3>
          <p className="impact-position">Chairperson Tata Group</p>
          <p className="impact-quote">
            "Bankkaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactInAction;
