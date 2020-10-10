import React from "react";
import emailjs from 'emailjs-com';

import{ init } from 'emailjs-com';
init(process.env.USER_KEY);

const Contact = function() {

  function sendEmail(e) {
    e.preventDefault();

    console.log(process.env.REACT_APP_SERVICE_ID)

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

    return (

      <div>
        <h2>Contact</h2>
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
            <input  className='topic-message' type='text' name='topic' placeholder='Topic'/><br/>
            <textarea placeholder='Enter your message' name='message'></textarea><br/>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>

    )
}

export default Contact;