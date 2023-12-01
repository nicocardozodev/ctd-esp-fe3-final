import React, { useContext } from 'react';
import Form from '../Components/Form';
import { MyContext } from '../Context'; 

const Contact = () => {
  const { state } = useContext(MyContext);
  const { theme } = state;

  return (
    <div className={`contact-container ${theme}`}> 
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
