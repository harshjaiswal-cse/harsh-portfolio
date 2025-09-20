import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'> 
<img src={profile_img} alt="" />
      <h1><span>I'm Harsh Jaiswal,</span> frontend developer based in India.</h1>
    <p>I am a frontend developer from india, with 5 years of experience in mutilple company  </p>
    <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero
