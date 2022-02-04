import React, { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css/';
import Content from './Content';
import { Parallax } from 'react-parallax'


function App() {
  // const [offsetY, setOffsetY] = useState(0)
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [])

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  
    

  return (
    
    <div 
    className="container" 
    >

    <Content />
      
    </div>
    
);
}



export default App;
