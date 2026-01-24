import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo1.png' 
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {

  // Email input aur subscription status manage karne ke liye
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = () => {
    if (email.trim() === "" || !email.includes("@")) {
      alert("Bhai, sahi email toh daal do!");
      return;
    }
    // Simulation: Yahan hum maan rahe hain ki user subscribe ho gaya
    setSubscribed(true);
    setEmail(""); // Input field saaf karne ke liye
    
    // 3 second baad button wapas normal ho jayega
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="Harsh Logo" style={{width: '150px'}} />
            <p>
              I am Harsh Kumar Jaiswal, a final-year B.Tech CSE student specializing in 
              Full-Stack Development and Competitive Programming.
            </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div 
              className="footer-subscribe" 
              onClick={onSubscribe}
              style={{cursor: 'pointer', transition: '0.3s'}}
            >
              {subscribed ? "Subscribed! ✅" : "Subscribe"}
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2026 Harsh Kumar Jaiswal. All rights reserved.</p>
        <div className="footer-bottom-right">
            <a href="https://www.linkedin.com/in/harsh-jaiswal-cse/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/harshjaiswal-cse" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.codechef.com/users/cse_harsh" target="_blank" rel="noreferrer">CodeChef</a>
            <a href="https://leetcode.com/u/cse_harsh/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>
    </div>
  )
}

export default Footer