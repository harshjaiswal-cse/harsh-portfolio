import React from 'react'
import './Certificates.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Certificates = () => {
  const certs_data = [
    {
      no: "01",
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D3F87984B8356A111FFBDD4B63FC06A244F30B1EFBCCFAE4148497C24903E07F"
    },
    {
      no: "02",
      name: "JPMorgan Chase & Co. – Software Engineering Job Simulation",
      link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6958c1eabeda68c4731966a2_1767530836494_completion_certificate.pdf"
    },
    {
      no: "03",
      name: "Amazon Web Services – Cloud Job Simulation",
      link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_6958c1eabeda68c4731966a2_1767516768827_completion_certificate.pdf"
    }
  ];

  return (
    <div id='certificates' className='services'>
      <div className="services-title">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {certs_data.map((cert, index) => (
          <div key={index} className='services-format'>
            <h3>{cert.no}</h3>
            <h2>{cert.name}</h2>
            {/* Click karne par certificate khulega */}
            <a href={cert.link} target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'#B415FF', fontWeight:'bold'}}>
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Certificates