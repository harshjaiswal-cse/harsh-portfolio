import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    /* 1. Yahan id='about' zaroor check karna, isi se click kaam karega */
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Harsh Kumar Jaiswal" />
        </div>
        <div className="about-right">
          <div className="about-para">
            {/* 2. Updated Intro */}
            <p>I am Harsh Kumar Jaiswal, a final-year B.Tech CSE student at Kashi Institute of Technology. I am a passionate problem solver and full-stack developer specializing in Java, Spring Boot, and React.js.</p>
            
            {/* 3. Competitive Programming Focus */}
            <p>As a 4-star coder on CodeChef, I have solved over 900+ coding problems. I have also completed virtual job simulations with JPMorgan Chase and AWS, and I am an Oracle Certified AI Foundations Associate.</p>
          </div>
          
          <div className="about-skills">
            <div className="about-skill"><p>Java & Spring Boot</p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>Data Structures (C++)</p><hr style={{ width: "95%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          {/* 4. Updated to 4-Star */}
          <h1>4★</h1>
          <p>CODECHEF RATING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>900+</h1>
          <p>PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>JOB SIMULATIONS</p>
        </div>
      </div>
    </div>
  )
}

export default About