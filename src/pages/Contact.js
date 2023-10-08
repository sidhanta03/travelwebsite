import {doc,setDoc} from "firebase/firestore";
import React, { useState } from 'react';
import './Contact.css';
import { db } from '../config/firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log('Submitting form data to Firestore:', formData);

      const docRef = doc(db, 'contacts', '1:199121382039:web:38e1f316d0bd7fa04957d2'); // Replace 'your-custom-id' with the desired ID or use an auto-generated one
      await setDoc(docRef, formData);

      // Reset the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

      console.log('Form data submitted to Firebase');
    } catch (error) {
      console.error('Error submitting form data to Firebase', error);
    }
  };

  return (
    <div className="contact-form">
      <div className="title">Contact us</div>
      <div className="title-info">We'll get back to you soon!</div>

      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            name="firstName"
            id="first-name"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            name="lastName"
            id="last-name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="e-mail">E-mail</label>
          <input
            type="email"
            name="email"
            id="e-mail"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="textarea-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="button-div">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
