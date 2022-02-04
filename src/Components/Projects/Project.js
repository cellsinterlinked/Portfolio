import React from 'react';
import './Project.css';
import compyPlease from '../../Resources/NicePng_apple-laptop-png_759882.png'

import phonePlease from '../../Resources/phonePlease.png';
const Project = (props) => {


  const leftCard = document.querySelectorAll('.project-div-left');

  const leftObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,
    }
  );
  leftCard.forEach((card) => {
    leftObserver.observe(card);
  });

  const rightCard = document.querySelectorAll('.project-div-right');

  const rightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,
    }
  );
  rightCard.forEach((card) => {
    rightObserver.observe(card);
  });

  const centerCard = document.querySelectorAll('.project-center-container');
  const centerPhone = document.querySelectorAll('.project-center-phone');

  const centerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,
    }
  );
  centerCard.forEach((card) => {
    centerObserver.observe(card);
  });

  const centerPhoneObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    },
    {
      threshold: 0.5,
    }
  );
  centerPhone.forEach((card) => {
    centerPhoneObserver.observe(card);
  });

  

  return (
    <>
      <div className="fullPage ">

        <section className="project-div-right ">
          <div className="project-text">
            <h1>{props.name}</h1>
            <u className="project-info-divider"></u>
            <p>{props.description}</p>
          </div>
        </section>

        {props.desktop ? 
        <section className="project-center-container">
          <img src={compyPlease} alt="" className="laptop-mockup"></img>
         <div className="project-div-center">
            <div
              className="centerVideo"
              dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${props.video}"
          class="centerVideo"
        />,
      `,
              }}
            ></div>
          </div>
               <span className="button-container">
               <a
                 href={props.url}
                 style={{ textDecoration: 'none' }}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <button className="button-one-left">
                   <div className="button-text">See It Live</div>
                 </button>
               </a>
               <a href={props.github} target="_blank" rel="noopener noreferrer">
                 <button className="button-one-right">
                   <div className="button-text">See Code</div>
                 </button>
               </a>
             </span>
          </section>
          : 
          <section className="project-center-phone ">
            <img src={phonePlease} alt="" className="phone-mockup"></img>
          <div className="project-div-center-phone">
          <div
            className="centerVideo-phone"
            dangerouslySetInnerHTML={{
              __html: `
      <video
        loop
        muted
        autoplay
        playsinline
        src="${props.video}"
        class="centerVideo-phone"
      />,
    `,
            }}
          ></div>
        </div>
        <span className="button-container">
            <a
              href={props.url}
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-one-left">
                <div className="button-text">See It Live</div>
              </button>
            </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <button className="button-one-right">
                <div className="button-text">See Code</div>
              </button>
            </a>
          </span>
        </section>
          }
          
          
          
          
         

        <section className="project-div-left ">
          <div className="project-text">
            <h1 style={{ fontSize: '1rem' }}>Notable Features</h1>
            <u className="project-info-divider"></u>
            <ul style={{ fontWeight: 'bold', color: 'rgb(71,71,71)' }}>
              {props.list}
            </ul>
            <h1 style={{ fontSize: '1rem' }}>Technologies Used</h1>
            <u className="project-info-divider"></u>
            <div className="project-tech-container">{props.techs}</div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Project;
