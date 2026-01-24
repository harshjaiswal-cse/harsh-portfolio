import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  
  const servicesData = [
    {
      s_no: "01",
      s_name: "Competitive Programming",
      s_desc: "4-Star on CodeChef (Global Rank 4) with 900+ coding challenges solved.",
      s_link: "https://www.codechef.com/users/cse_harsh"
    },
    {
      s_no: "02",
      s_name: "Full-Stack Development",
      s_desc: "Specializing in Java, Spring Boot, and ReactJS to build scalable systems.",
      s_link: "https://github.com/harshjaiswal-cse"
    },
    {
      s_no: "03",
      s_name: "Cloud & AI Solutions",
      s_desc: "Oracle Certified AI Associate with AWS and JPMorgan simulation experience.",
      s_link: "#certificates" // Ye page ke certificates section par scroll karega
    }
  ];

  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* Clickable Link Section */}
            <a 
              href={service.s_link} 
              target={service.s_link.startsWith("http") ? "_blank" : "_self"} 
              rel="noreferrer" 
              className='services-readmore'
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services