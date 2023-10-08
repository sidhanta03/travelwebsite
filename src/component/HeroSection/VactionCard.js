import React from 'react';
import './VactionCard.css';

const VacationCard = ({ image, destination, duration, price }) => {
  return (
    <div className="vacation-card">
      <img src={image} alt={destination} className="vacation-image" />
      <div className="vacation-details">
        <h3>{destination}</h3>
        <p>{duration}</p>
        <p>Price: ₹ {price}</p>
        <button>Book NOW</button>
      </div>
    </div>
  );
};

export default VacationCard;
