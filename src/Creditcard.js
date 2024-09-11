import React from 'react';
import './CreditCard.css';

const CreditCard = ({ image, title, description, offer }) => {
  return (
    <div className="credit-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{offer}</p>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default CreditCard;
