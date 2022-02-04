import React from 'react'
import { FaNodeJs } from 'react-icons/fa';

const NodeTech = () => {
  return(
    <div className="project-tech-unit">
    <FaNodeJs
      style={{ color: 'rgb(80, 121, 94)' }}
      className="project-tech-icon"
    />
    <h2>Node.js</h2>
  </div>
  )
}

export default NodeTech;