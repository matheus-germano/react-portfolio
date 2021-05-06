import React from 'react'

import ExpSVG from '../../../images/experience.svg'

import {AiFillGithub} from 'react-icons/ai'
import {IoEnterOutline} from 'react-icons/io5'

import './Experiences.css'

function Experiencies({data}) {
  return (
    <>
      <div className="exp-container" id="experiences">
        <div className="exp-content">
          <div className="exp-text">
            <h1>Experiências</h1>
            <p>Ao longo desses anos aprendendo, foram desenvolvidos alguns projetos para colocar em prática meus conhecimentos.
              Aqui estão alguns deles, caso queira ver mais, acesse o meu <a className="github-link" href="https://github.com/matheus-germano/" target="_blank" rel="noopener noreferrer">Github.</a></p>
          </div>
          <img src={ExpSVG} alt=""/>
        </div>
        <div className="exp-projects">
          {data.map((project, index) => {
            return(
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{project.title}</h1>
                  <p className="card-description">{project.description}</p>
                  <div className="card-buttons">
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                      Repositório <AiFillGithub className="card-icon"/>
                    </a>
                    {project.link ?
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                      Acesse <IoEnterOutline className="card-icon"/>
                    </a> :
                    <p className="card-button btn btn-secundary">
                      Esse projeto não possui site <IoEnterOutline className="card-icon"/>
                    </p>
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Experiencies
