import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

// Tumhare naye screenshots jo tumne assets folder mein dale hain
import postman_img from '../../assets/Screenshot 2026-01-24 114153.png'
import intellij_img from '../../assets/Screenshot 2026-01-24 113920.png'
import code_img from '../../assets/Screenshot 2026-01-24 113958.png'
import terminal_img from '../../assets/Screenshot 2026-01-24 113746.png'

const MyWork = () => {
  const projects = [
    {
      name: "Banking API Testing (Postman)",
      img: postman_img,
      link: "https://github.com/harshjaiswal-cse/spring-boot-banking-system"
    },
    {
      name: "Spring Boot Project Structure",
      img: intellij_img,
      link: "https://github.com/harshjaiswal-cse/spring-boot-banking-system"
    },
    {
      name: "Backend Logic Implementation",
      img: code_img,
      link: "https://github.com/harshjaiswal-cse/spring-boot-banking-system"
    },
    {
      name: "Localhost Deployment",
      img: terminal_img,
      link: "https://github.com/harshjaiswal-cse/spring-boot-banking-system"
    }
  ];

  return (
    <div id='portfolio' className='mywork'>
      <div className="mywork-title">
        <h1>My Technical Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <img 
              src={project.img} 
              alt={project.name} 
              style={{
                borderRadius: '10px', 
                border: '2px solid #323232',
                objectFit: 'cover'
              }} 
            />
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <a href="https://github.com/harshjaiswal-cse" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit', display:'flex', gap:'10px', alignItems:'center'}}>
          <p>Show More on GitHub</p>
          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  )
}
export default MyWork