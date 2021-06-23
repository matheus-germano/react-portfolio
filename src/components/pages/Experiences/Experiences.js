import React, { useEffect, useState }  from 'react'

import ExpSVG from '../../../images/experience.svg'

import {AiFillGithub} from 'react-icons/ai'
import {IoEnterOutline} from 'react-icons/io5'
import {FaRegSadCry} from 'react-icons/fa'

import './Experiences.css'

function Experiences({data}) {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.github.com/users/matheus-germano/repos')
        .then(response => response.json())
        .then(response => {
          setRepositories(response)
        })
    }

    fetchData()
  }, [])

  return (
    <>
    {console.log(repositories)}
      <div className="exp-container" id="experiences">
        <div className="exp-content">
          <div className="exp-text">
            <h1>Experiências</h1>
            <p>Ao longo dos anos estudando, desenvolvi alguns projetos para colocar em prática os conhecimentos que adquiri.
            Abaixo estão alguns deles, mas caso queira ver mais, acesse o meu <a className="github-link" href="https://github.com/matheus-germano/" target="_blank" rel="noopener noreferrer">Github.</a></p>
          </div>
          <img src={ExpSVG} alt=""/>
        </div>
        <div className="exp-projects">
          { repositories && (
            repositories.map((repository) => {
              return(
                <div className="card" key={repository.id}>
                  <div className="card-body">
                    <h1 className="card-title">{repository.name}</h1>
                    <p className="card-description">{repository.description}</p>
                    <div className="card-buttons">
                      <a href={repository.html_url} target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                        Repositório <AiFillGithub className="card-icon"/>
                      </a>
                      {/* {project.link ?
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-button btn btn-secundary">
                        Acesse <IoEnterOutline className="card-icon"/>
                      </a> :
                      <p className="card-button btn btn-secundary">
                        Esse projeto não possui site <FaRegSadCry className="card-icon"/>
                      </p>
                      } */}
                    </div>
                  </div>
                </div>
              )
            })
          )
          }
        </div>
      </div>
    </>
  )
}

export default Experiences
