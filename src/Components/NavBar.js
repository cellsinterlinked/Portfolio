import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return(
    <div className="nav-bar">
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#resume" style={{marginRight: "6rem"}}>Resume</a>
      
    </div>
  )
}

export default NavBar