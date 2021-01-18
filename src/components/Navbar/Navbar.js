import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

  //
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="menu-icon" onClick={handleClick}>
            {/* Hamburguer menu */}
            {/* Verify if the click is true or false */}
            {/* If it's, the icon change to Times, if it isn't, the icon still the same  */}
            {click ? <FaTimes/> : <FaBars/>}
          </div>
          {/* Verify if the click is true or false */}
          {/* If it's, the Hamburguer menu will appear, if it isn't, the menu still the same */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='home' className="nav-link" onClick={handleClick} smooth={true} duration={500} spy={true} offset={-120}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='aboutme' className="nav-link" onClick={handleClick} smooth={true} duration={500} spy={true} offset={-120}>Sobre mim</Link>
            </li>
            <li className="nav-item">
              <Link to='stacks' className="nav-link" onClick={handleClick} smooth={true} duration={500} spy={true} offset={-120}>Stacks</Link>
            </li>
            <li className="nav-item">
              <Link to='experiences' className="nav-link" onClick={handleClick} smooth={true} duration={500} spy={true} offset={-120}>Experiencias</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
