import React from 'react'
import VacationCard from '../component/HeroSection/VactionCard';


const Services = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily:"Canva Sans",color:"#dcaf25" }}> Our  <span style={{color:"blue"}}>Vacation</span> Package 👋</h2>

      <VacationCard
      image="/images/deomali.jpg"
  destination="Deomali hill"
  duration="7 days"
  price="7500"
/>

<VacationCard
   image="/images/konark.jpg"
   destination="Konark Sun temple"
   duration="3 days"
   price="3200"
   />

<VacationCard
image="/images/puri.jpg"
  destination="Puri Jaganath Temple "
  duration="2 days"
  price="2200"
  />

<VacationCard
image="/images/daringbadi.jpg"
  destination="DaringBadi"
  duration="2 days"
  price="1200"
  />
  </div>
   
  );
};

export default Services;
