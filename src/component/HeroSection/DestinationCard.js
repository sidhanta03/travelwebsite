// DestinationCard.js
import React from 'react';
import {useNavigate} from 'react-router-dom';

const DestinationCard = ({ destination }) => {


  const navigate= useNavigate();  

  const handleLearnMore= () =>{
          navigate('/signup');
  }
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <button onClick={handleLearnMore}>Learn More</button>
    </div>
  );
};

export default DestinationCard;
