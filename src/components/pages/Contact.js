import React from "react";

export default class Contact extends React.Component {
  render() {
    return (

      <div>
        <h2>Contact</h2>
        <form className='contact-form'>
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
}