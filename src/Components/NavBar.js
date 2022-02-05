import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return(
    <menu className="nav-bar">
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#resume" style={{marginRight: "6rem"}}>Resume</a>
      
    </menu>
  )
}

export default NavBar