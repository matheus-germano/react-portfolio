import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
  lightBg, lightText, title, description, img, alt, imgStart
}) {
  return (
    <>
      <div className={lightBg ? 'hero-section' : 'hero-section darkBg'}>
        <div className="container">
          <div className="row hero-row" style={{display: 'flex',
            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
          >
            <div className="col">
              <div className="hero-text-wrapper">
                <h1 className={
                  lightText ? 'hero-title' : 'hero-title dark'
                }>{title}</h1>
                <p className={
                  lightText ? 'hero-subtitle' : 'hero-subtitle dark'
                }>{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="hero-img-wrapper">
                <img src={img} alt={alt}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
