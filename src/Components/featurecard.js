import React from 'react';
import './featurecard.css';

const FeatureCard = ({ title, image }) => {
  return (
    <div className="feature-card">
      <img src='kundali.png' alt="Kundali Icon" className="feature-image" />
      <img src='beatmycard.png' alt="Beat MY Card" className="feature-image" />
      <img src='loungefinder.png' alt="Lounge Finder Icon" className="feature-image" />
      <img src='comparecards.png' alt="Compare Card" className="feature-image" />
    </div>
  );
};

export default FeatureCard;
