import React from 'react'
import { SiMongodb } from 'react-icons/si';

const MongoDBTech = () => {
  return (
    <div className="project-tech-unit">
    <SiMongodb
      style={{ color: 'green' }}
      className="project-tech-icon"
    />
    <h2>MongoDB</h2>
  </div>
  )
}

export default  MongoDBTech