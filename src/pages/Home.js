// src/pages/Home.js
import React from 'react';
import ReactPlayer from 'react-player';
import {useNavigate} from 'react-router-dom';
import "./Home.css";
import DestinationCard from '../component/HeroSection/DestinationCard'
const Home = () => {
     const navigate= useNavigate();  

  const handleGetStarted= () =>{
          navigate('/signup');
  }

 const destination =[
    {
       id:1,
       name:' Koraput Deomali hill',
       image:'./images/deomali.jpg',
       description: 'Deomali, is a mountain peak in the Chandragiri-Pottangi subrange of the Eastern Ghats. It is located near Koraput town in the Koraput district of Odisha, India. ',
    },
      
    {
      id:2,
      name:'Konark Sun Temple',
      image:'./images/konark.jpg',
      description:'Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri city on the coastline in Puri district, Odisha, India. The temple is attributed to king Narasimhadeva ',
    },
    {
      id:3,
      name:'Puri Jaganath Temple',
      image:'./images/puri.jpg',
      description: 'Jagannath Temple in Puri, Odisha, is a revered temple where Lord Krishna is worshipped as Lord Jagannath. There are several unexplained mysteries associated with the temple, such as the direction of the flag, the wooden idols, absence of a shadow, the Mahaprasad served to Lord Jagannath, sound of waves, and more. ',
    },
     {
      id:4,
      name: 'Daringbadi' ,
      image:'./images/daringbadi.jpg',
      description:'Daringbadi is a hill station in Kandhmal district of Odisha state in eastern India. Widely known as "Kashmir of Odisha", it is situated at a height of 915 metres and is a popular tourist destination. ',
       
     },

    ]  
  return (
    <div>
      <div className="video-section">
        <div className='video-player-wrapper'>
      <ReactPlayer
          url='./images/mountain.mp4'
          width="100%"
          height="100%"
          controls={false}
          muted
          loop
          playing
          playsinline
          autoPlay
          preload="auto"
      
        />
        </div>
        <div className='video-overlay'>
        <h1>Welcome to Our Travel Site!</h1>
       <button className='button' onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>



      <div className="destination-cards">
      {destination.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />

      
        ))}
      </div>
    </div>
  );
};

export default Home;
