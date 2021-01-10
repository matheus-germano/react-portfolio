import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import html from '../../../images/html5.png'
import css from '../../../images/css-3.png'
import boostrap from '../../../images/bootstrap.png'

function Home({

}) {
  return (
    <>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
      <div className="stacks">
        <div className="row">
          <div className="col-3">
            <div className="hero-img-wrapper">
              <img src={html} alt=""/>
            </div>
          </div>
          <div className="col-3">
          <div className="hero-img-wrapper">
              <img src={css} alt=""/>
            </div>
          </div>
          <div className="col-3">
          <div className="hero-img-wrapper">
              <img src={boostrap} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
