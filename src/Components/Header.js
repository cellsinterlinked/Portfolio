import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../Resources/design1.jpg';
import NavBar from './NavBar';
import './Header.css';
import SideBar from './SideBar';
import { FiMenu } from 'react-icons/fi';
import Backdrop from './Backdrop';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const menuToggle = () => {
    setShowNav(!showNav);
  };

  return (
    // <Parallax bgImage={image1} strength={200}>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <div className="menuIcon" onClick={menuToggle}>
          <FiMenu className="hamburger" />
        </div>
        {showNav && <Backdrop onClick={menuToggle} />}
        <SideBar show={showNav} onClick={menuToggle} />
        <NavBar />
        {/* <div className="fade-background"></div> */}
        <div className="intro-side-bar">
          <div className="cover-span">
            <h1 className="head-title">Hi, I'm Scott</h1>
            <p className="head-desc">This project is wrecking my blood pressure!.</p>
            {/* <img src={wave} alt="" className="wave" /> */}
          </div>
        </div>
      </div>
    // </Parallax>
  );
};

export default Header;
