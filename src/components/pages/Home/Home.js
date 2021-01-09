import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import './Home.css'
import homeSVG from '../../../images/home.svg'

function Home() {
  return (
    <div className='home-page' id='home'>
      <div className="row">
        <div className="hero-image">
          <img src={homeSVG} alt="" className='hero'/>
        </div>
        <div className="infos">
          <Link><AiFillGithub className='icon'/></Link>
          <Link><AiFillLinkedin className="icon"/></Link>
          <Link><AiOutlineInstagram className="icon"/></Link>
          <h1>MATHEUS GERMANO DA COSTA</h1>
          <p className='muted'>Front-End Developer | UI/UX Designer</p>
        </div>
      </div>
    </div>
  )
}

export default Home
