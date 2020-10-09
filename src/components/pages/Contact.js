import React from "react";
import emailjs from 'emailjs-com';

const Contact = function() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

    return (

      <div>
        <h2>Contact</h2>
        <form className='contact-form' onSubmit={sendEmail}>
          <div className='form-body'>
            <div className='user-info'>
              <label>
                <input className='user-input' type='text' placeholder='Your name'/>
              </label>
              <label>
                <input className='user-input' type='email' placeholder='Email'/>
              </label>
            </div>
            <input  className='topic-message' type='text' placeholder='Topic'/><br/>
            <textarea placeholder='Enter your message'></textarea><br/>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>

    )
}