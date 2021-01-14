import React from 'react'
import './Home.css'
import HomeSVG from '../../../images/home.svg'
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'

function Home() {
  return (
    <>
      <div className="home-container">
        {/* <img src={HomeSVG} alt=""/> */}
        <div className="home-content">
          <div className="home-social">
            <a href="https://github.com/matheus-germano" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/mgermanodev" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="icon"/>
            </a>
            <a href="https://www.instagram.com/_grrmano/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="icon"/>
            </a>
          </div>
          <h1>Matheus Germano da Costa</h1>
          <h3>Front-End Developer | UI/UX Designer</h3>
        </div>
      </div>
    </>
  )
}

export default Home
