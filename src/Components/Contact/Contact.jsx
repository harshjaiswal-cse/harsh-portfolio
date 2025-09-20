import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from'../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
      <h1>Get in touch</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="conatct-section">
      <div className="contact-left">
        <h1>Lets's talk</h1>
        <p>I’m currently available to take on new projects, and I’m excited to collaborate with individuals or teams who need a reliable frontend and backend developer. Whether it’s building a clean and responsive website, developing a scalable web application, or improving an existing project, I bring both technical skills and creativity to deliver high-quality solutions. If you’re looking for someone who is passionate, detail-oriented, and committed to turning ideas into reality, feel free to get in touch!</p>
      <div className="contact-details">
        <div className="contact-detail">
        <img src= {mail_icon}alt="" /><p>harsh.jaiswal.cse@gmail.com</p>
</div>
           <div className="contact-detail">
          <img src= {call_icon}alt="" /><p>+91 8953596556</p>
           </div>
           <div className="contact-detail">
          <img src={location_icon} alt="" /><p>Uttar Pradesh, India</p>
         
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
