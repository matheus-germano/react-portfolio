import React from 'react'
import StacksSVG from '../../../images/stacks.svg'

import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {DiCss3, DiBootstrap, DiReact, DiGit} from 'react-icons/di'
import { SiPhp } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import './Stacks.css'

function Stacks() {
  return (
    <>
      <div className="stacks-container" id="stacks">
        <div className="stacks-content">
          <img src={StacksSVG} alt=""/>
          <div className="stacks-text">
            <h1>Stacks</h1>
            <p>Desde 2019 venho estudando algumas linguagens e vendo em qual área eu me encaixaria melhor, hoje em dia gosto de desenvolver aplicativos web
            com HTML, CSS, Javascipt, utilizando frameworks como Bootstrap e ReactJS e desenvolver aplicativos mobile com React Native,
            mas posso programar em outras linguagens também.</p>
          </div>
        </div>
        <div className="stacks-icons">
          <div className="html">
            <AiFillHtml5 className="stacks-icon"/>
            <p>HTML</p>
          </div>
          <div className="css">
            <DiCss3 className="stacks-icon"/>
            <p>CSS</p>
          </div>
          <div className="bootstrap">
            <DiBootstrap className="stacks-icon"/>
            <p>Bootstrap</p>
          </div>
          <div className="js">
            <IoLogoJavascript className="stacks-icon"/>
            <p>Javascript</p>
          </div>
          <div className="react">
            <DiReact className="stacks-icon"/>
            <p>ReactJS / React Native</p>
          </div>
          <div className="php">
            <SiPhp className="stacks-icon"/>
            <p>PHP</p>
          </div>
          <div className="github">
            <AiFillGithub className="stacks-icon"/>
            <p>Github</p>
          </div>
          <div className="git">
            <DiGit className="stacks-icon"/>
            <p>Git</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stacks
