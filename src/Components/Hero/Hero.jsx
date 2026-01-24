import React from 'react'
import './Hero.css'
/* Gore ki photo hatane ke liye yahan tumhari asali photo import ki hai */
import profile_img from '../../assets/job picc_11zon.png' 
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'> 
      {/* Photo ko gol (circle) banane ke liye styling add ki hai */}
      <img 
        src={profile_img} 
        alt="Harsh Kumar Jaiswal" 
        style={{
          width: '300px', 
          height: '300px', 
          borderRadius: '50%', 
          objectFit: 'cover', 
          border: '6px solid #B415FF',
          marginTop: '30px'
        }} 
      />
      <h1><span>I'm Harsh Kumar Jaiswal,</span> Software Developer & 4-Star Coder.</h1>
      <p>
        I am a final-year B.Tech CSE student at Kashi Institute of Technology. 
        I have solved over 900+ coding challenges and earned 4-star rating on CodeChef.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
          {/* Tumhara asali resume link connect kar diya hai */}
          <a href="https://drive.google.com/file/d/14opfaO3T_Van301U75XA5mLma0WxWMeH/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}}>
            My resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero