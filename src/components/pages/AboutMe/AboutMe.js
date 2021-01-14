import React from 'react'
import AboutMeSVG from '../../../images/aboutme.svg'

import './AboutMe.css'

function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1>Sobre Mim</h1>
          <p>Tenho 17 anos, moro em Campinas-SP, técnico em informática formado pela Escola Salesiana São José em 2020, sou um desenvolvedor Front-End e UI/UX Designer.</p>
          <a href="https://essj-my.sharepoint.com/:w:/g/personal/20190188_edu_essj_com_br/EX9sEw4K-zhLhbWobBmUGvIB0ww_VywZO1UhImByFsrTyg?e=b7o34e" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Meu currículo</a>
        </div>
        <img src={AboutMeSVG} alt=""/>
      </div>
    </>
  )
}

export default AboutMe
