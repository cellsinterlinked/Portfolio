import React, { useState } from 'react';
import NavBar from './NavBar';
import './Header.css';
import SideBar from './SideBar';
import { FiMenu } from 'react-icons/fi';
import Backdrop from './Backdrop';

const Header = ({isDesktop}) => {
  const [showNav, setShowNav] = useState(false);

  const menuToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <section style={{ width: '100vw', height: '100vh', position: 'relative' }} className="head-wrapper">
      <div className="menuIcon" onClick={menuToggle}>
        <FiMenu className="hamburger" />
      </div>
      {showNav && <Backdrop onClick={menuToggle} />}
      <SideBar show={showNav} onClick={menuToggle} />
      <NavBar />
      <div className="triangle-shadow"></div>
      <div className={isDesktop ? "intro-side-bar" : "intro-side-bar-mobile"}>
        {/* <span className={isDesktop ? "cover-span" : "cover-span-mobile"}> */}
          <h1 className="head-title">Hi, I'm Scott</h1>
          <p className="head-desc">
            This project is wrecking my blood pressure!.
          </p>
        {/* </span> */}
      </div>
    </section>
  );
};

export default Header;
