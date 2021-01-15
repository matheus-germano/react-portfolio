import React from 'react'

import ExpSVG from '../../../images/experience.svg'

import {AiFillGithub} from 'react-icons/ai'
import {IoEnterOutline} from 'react-icons/io5'

import './Experiences.css'

function Experiencies() {
  return (
    <>
      <div className="exp-container" id="experiences">
        <div className="exp-content">
          <div className="exp-text">
            <h1>Experiências</h1>
            <p>Ao longo desses anos aprendendo, foram desenvolvidos alguns projetos para colocar em prática meus conhecimentos. Aqui estão alguns deles, caso queira ver mais acesse o meu Github.</p>
          </div>
          <img src={ExpSVG} alt=""/>
        </div>
        <div className="exp-projects">
        <div className="card">
            <div className="card-body">
              <h1 className="card-title">Meu Portfólio</h1>
              <p className="card-description">Potfólio desenvolvido ReactJS, utilizando React Icons e React Router Dom. Primeiro projeto em React completo.</p>
              <div className="card-buttons">
                <a href="https://github.com/matheus-germano/react-portfolio" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Repositório <AiFillGithub className="card-icon"/>
                </a>
                <a href="https://react-portfolio-silk.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Acesse <IoEnterOutline className="card-icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Find Jobs</h1>
              <p className="card-description">Uma plataforma para freelancers encontrarem projetos. Projeto desenvolvido para a conclusão de curso do curso técnico em informática.</p>
              <div className="card-buttons">
                <a href="https://github.com/caiocichetti/tcc-findjobs-web" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Repositório <AiFillGithub className="card-icon"/>
                </a>
                <a href="http://findjobs.webteachers.com.br/" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Acesse <IoEnterOutline className="card-icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">E-commerce Project</h1>
              <p className="card-description">Projeto de uma loja virtual de games para aprofundar meus conhecimentos em bootstrap4.</p>
              <div className="card-buttons">
                <a href="https://github.com/matheus-germano/Projeto-Ecommerce" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Repositório <AiFillGithub className="card-icon"/>
                </a>
                <a href="https://mgecommerceproject.netlify.app/" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Acesse <IoEnterOutline className="card-icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Antigo Portfólio (desatualizado)</h1>
              <p className="card-description">Potfólio desenvolvido em html, css e bootstrap4. Hoje em dia não está sendo utilizado.</p>
              <div className="card-buttons">
                <a href="https://github.com/matheus-germano/portfolio" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Repositório <AiFillGithub className="card-icon"/>
                </a>
                <a href="https://matheus-germano.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                  Acesse <IoEnterOutline className="card-icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiencies
