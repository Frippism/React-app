import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='contactus'>Contact Us</div>
        <div className='information'>
          <div className='lefty'>
            <div className='letters'>First Name</div><br></br>
            <input type="text" placeholder='first name'></input><br></br><br></br>
            <div className='letters'>Email</div><br></br>
            <input type="email" placeholder="email"></input>
          </div>
          <div className='righty'>
            <div className='letters'>Last Name</div><br></br>
            <input type="text" placeholder='last name'></input><br></br><br></br>
            <div className='letters'>Phone</div><br></br>
            <input type="number" placeholder='number'></input>

          </div>
        </div>
        <div>
          <div className='message'>Message</div>
          <div className='inputt'><input type="text" placeholder='message'></input></div>
        </div>
        <div><br></br><br></br><br></br><br></br> 
          <button id='submit'>Send</button>

        </div>

      </div>
    </>
  )
}

export default Contact
