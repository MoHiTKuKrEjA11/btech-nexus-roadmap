import React from 'react'
import { Link } from 'react-router-dom';
const Mechanical = () => {

  const domains = ['Core_Field', 'Interdisciplinary_Options', 'Programming_and_Data_Analysis'];

  return (
    <>
    <div>Mechanical Engineering is one of the oldest and broadest fields of engineering, focused on the design, analysis, manufacturing, and maintenance of mechanical systems. It integrates principles of physics, mathematics, material science, and engineering to develop machines, tools, and systems that solve real-world problems. <br />Core Areas of Mechanical Engineering: <br />1: Design and Manufacturing <br />2: Thermodynamics and Heat Transfer <br />3: Fluid Mechanics <br />4: Mechanics and Structural Analysis <br /> <br /></div>
    <div>Other than your academic knowledge you need to choose one area based on interest, industry demand, and personal strengths. <br />Options for Mechanical Engineering Students Beyond Academics <br />1:Core Mechanical Fields (Watch Video for more info) <br /> 2: Interdisciplinary Options (Watch Video for more info)<br /> 3:Programming and Data Analysis (Watch Video for more info) <br /> 4: Emerging Technologies (Watch Video for more info) <br /> <br /></div>
    <div>Select any one domain to get deep insight of that field <br /> <br /></div>
    {domains.map((domain, index) => (
        <h1 key={index}>
          <Link to={`/field/Mechanical/${domain}`}>{domain}</Link>
        </h1>
    ))}
    </>
  )
}

export default Mechanical