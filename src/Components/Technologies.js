import React from 'react'
import './Technologies.css';
import javascript from "../Resources/javascript.png"
import css from '../Resources/css.png';
import angular from '../Resources/angular.png';
import react from '../Resources/react.png';
import express from '../Resources/express.png';
import node from '../Resources/nodejs.png';
import mongodb from '../Resources/mongodb.png';
import html from '../Resources/html.png';
import socketio from '../Resources/socketio.png';

const Technologies = () => {


  const cards = document.querySelectorAll(".observer")

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
  }, {
    threshold: 1,
  }
  )

  cards.forEach(card => {
    observer.observe(card)
  })


  return(
    <div className="technology_head">
  {/* <div className="fade-background2"></div>     */}
    
        
        <h1  className="languages-head">The Technologies I Work With</h1>

      <div className="sphere-container">
        <div className="observer green-sphere">JavaScript
        < img src={javascript} alt="" className="observer-icon" />
        </div>
        <div className="observer show1 red-sphere">CSS
        < img src={css} alt="" className="observer-icon" />
        </div>
        <div className="observer show2 green-sphere">HTML
        < img src={html} alt="" className="observer-icon" />
        </div>
        <div className="observer  red-sphere">
        < img src={node} alt="" className="observer-icon" />
        </div>
        <div className="observer  show1 green-sphere">React
        < img src={react} alt="" className="observer-icon" />
        </div>
        <div className="observer show2 red-sphere">
        < img src={express} alt="" className="observer-icon" />
        </div>
        <div className="observer  green-sphere">Angular
        < img src={angular} alt="" className="observer-icon" />
        </div>
        <div className="observer show1 red-sphere">MongoDB
        < img src={mongodb} alt="" className="observer-icon" />
        </div>
        <div className="observer  show2 green-sphere">Socketio
        < img src={socketio} alt="" className="observer-icon" />
        </div>
        </div>
       
       
        {/* <div className="fade-background3"></div> */}
        </div>
  )
}

export default Technologies;