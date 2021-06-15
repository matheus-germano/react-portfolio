import React from 'react'
import AboutMeSVG from '../../../images/aboutme.svg'

import './AboutMe.css'

function AboutMe() {
  return (
    <>
      <div className="about-container" id="aboutme">
        <div className="about-content">
          <div className="about-text">
            <h1>Sobre Mim</h1>
            <p>Tenho 18 anos, moro em Campinas-SP, técnico em informática formado pela Escola Salesiana São José em 2020,
            construindo conhecimento como Front-End Developer e Mobile Developer. Caso queria saber mais, acesse meu curriculo abaixo 👇</p>
            <a href="https://drive.google.com/file/d/1p4fM53PFdngR5-H9NUY3N6C_L7k_qxLF/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Meu currículo</a>
          </div>
          <img src={AboutMeSVG} alt=""/>
        </div>
      </div>
    </>
  )
}

export default AboutMe
