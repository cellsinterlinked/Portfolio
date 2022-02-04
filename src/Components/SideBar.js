import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideBar.css';

const SideBar = props => {

  const content = 
  
  <CSSTransition
    in={props.show}
    timeout={200}
    classNames="slide-in-right"
    mountOnEnter
    unmountOnExit
    >
    <aside className="sideBar" onClick={props.onClick}>
    <div className="sideBar_container">
      <div className="sideLink_container">
      <a href="#skills">Skills</a> 
      </div>
      <div className="sideLink_container">
      <a href="#projects">Projects</a>
      </div>
      <div className="sideLink_container">
      <a href="#contact">Contact</a>
      </div>
      <div className="sideLink_container-last">
      <a href="#resume">Resume</a>
      </div>
    


    </div>


    </aside>
    </CSSTransition>

    
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideBar;