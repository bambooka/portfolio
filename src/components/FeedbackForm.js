import React from "react";
import emailjs from "emailjs-com";
import {init} from 'emailjs-com';
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from "../constants/api_keys/emailjs";

init(process.env.REACT_APP_USER_KEY);

const FeedbackForm = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <div className='form-body'>
        <div className='user-info'>
          <label>
            <input className='user-input' type='text' name='name' placeholder='Your name'/>
          </label>
          <label>
            <input className='user-input' type='email' name='email' placeholder='Email'/>
          </label>
        </div>
        <input className='topic-message' type='text' name='topic' placeholder='Topic'/><br/>
        <textarea placeholder='Enter your message' name='message'/><br/>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default FeedbackForm;