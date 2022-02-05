import React from 'react';
import './Project.css';
import compyPlease from '../../Resources/NicePng_apple-laptop-png_759882.png'
import './MobileProject.css';

import phonePlease from '../../Resources/phonePlease.png';
const MobileProject = (props) => {

  return (
    <>
      <div className="fullPage-mobile">

        <section className="project-div-top ">
          <div className="project-text-mobile">
            <h1>{props.name}</h1>
            <div className="project-info-divider-mobile"></div>
            <p>{props.description}</p>
          </div>
        </section>

        {props.desktop ? 
        <section className="project-center-container-mobile">
       
            <div
              className="centerVideo-mobile"
              dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${props.video}"
          class="centerVideo-mobile"
        />,
      `,
              }}
            ></div>
          {/* </div> */}
               {/* <span className="button-container-mobile">
               <a
                 href={props.url}
                 style={{ textDecoration: 'none' }}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <button className="button-one-left-mobile">
                   <div className="button-text-mobile">See It Live</div>
                 </button>
               </a>
               <a href={props.github} target="_blank" rel="noopener noreferrer">
                 <button className="button-one-right-mobile">
                   <div className="button-text-mobile">See Code</div>
                 </button>
               </a>
             </span> */}
          </section>
          : 
          <section className="project-center-container-phone-mobile ">
            {/* <img src={phonePlease} alt="" className="phone-mockup-mobile"></img> */}
          {/* <div className="project-div-center-phone-mobile"> */}
          <div
            className="centerVideo-phone-mobile"
            dangerouslySetInnerHTML={{
              __html: `
      <video
        loop
        muted
        autoplay
        playsinline
        src="${props.video}"
        class="centerVideo-phone-mobile"
      />,
    `,
            }}
          ></div>
        {/* </div> */}
        {/* <span className="button-container-mobile">
            <a
              href={props.url}
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-one-left-mobile">
                <div className="button-text-mobile  ">See It Live</div>
              </button>
            </a>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <button className="button-one-right-mobile">
                <div className="button-text-mobile">See Code</div>
              </button>
            </a>
          </span> */}
        </section>
          }
          
          
          
          
         

        <section className="project-div-bottom-mobile ">
          <div className="project-text-mobile">
            <h1 style={{ fontSize: '1rem' }}>Notable Features</h1>
            <div className="project-info-divider-mobile"></div>
            <ul className="list-annoying" style={{ fontWeight: 'bold', color: 'rgb(71,71,71)', textDecoration: "none" , listStyleType: "none", padding: "none", margin: "none"}}>
              {props.list}
            </ul>
            <h1 style={{ fontSize: '1rem' }}>Technologies Used</h1>
            <div className="project-info-divider-mobile"></div>
            <div className="project-tech-container-mobile">{props.techs}</div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MobileProject;
