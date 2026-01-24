import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    /* Scroll fix ke liye yahan id='contact' add kiya hai */
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am Harsh Kumar Jaiswal, a final-year B.Tech CSE student at Kashi Institute of Technology. 
            As a 4-star coder on CodeChef with 900+ problems solved, I specialize in building real-world projects 
            using Java, Spring Boot, and ReactJS. Having completed virtual job simulations with 
            JPMorgan Chase and AWS, I am eager to contribute to dynamic tech teams. 
            Feel free to get in touch for collaborations or opportunities!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>harsh.jaiswal.cse@gmail.com</p> 
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call" />
              <p>+91 8953596556</p> 
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Varanasi, Uttar Pradesh, India</p> 
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact