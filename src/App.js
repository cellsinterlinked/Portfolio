import React, { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css/';
import Content from './Content';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <body className="container">
      <Content />
    </body>
  );
}

export default App;
