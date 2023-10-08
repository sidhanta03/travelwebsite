
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <div className="text">
          <p>Welcome to your Travel Website, where every journey is a story waiting to be told.
             We are passionate about...</p>
          <h3>Our Mission:</h3>
           <p>At the heart of our mission is a commitment to making travel accessible,
             enriching, and seamless for every explorer. We strive to curate experiences that go beyond the ordinary, offering a blend of adventure, relaxation, and cultural immersion.</p>        
           
           <h3>Our Journey:</h3>
           <p>Our journey began with a passion for exploration and a deep love for discovering the
             wonders of the world. From humble beginnings, we have evolved into a platform that strives to redefine the way people experience travel. 
             Every destination is carefully selected to offer a unique perspective, ensuring that each journey leaves an indelible mark on the traveler's soul.</p>
           </div>

        <div className="image">
          
        </div>
      </section>
    </div>
  );
}

export default About;

