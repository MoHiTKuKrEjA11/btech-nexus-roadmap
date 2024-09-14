import React from 'react'
import { Link } from 'react-router-dom';
const Mechanical = () => {

  const domains = ['Core_Field', 'Interdisciplinary_Options', 'Programming_and_Data_Analysis'];

  return (
    <>
    <div className='p-6 space-y-4'>
      <div className="text-3xl font-bold mb-4">Mechanical Engineering</div>
  <div className="text-xl mb-6">
    Mechanical Engineering is one of the oldest and broadest fields of engineering, focused on the design, analysis, manufacturing, and maintenance of mechanical systems. It integrates principles of physics, mathematics, material science, and engineering to develop machines, tools, and systems that solve real-world problems. <br />
    Core Areas of Mechanical Engineering: <br />
    <ul className="list-disc pl-5 mt-4 space-y-2">
      <li>1: Design and Manufacturing</li>
      <li>2: Thermodynamics and Heat Transfer</li>
      <li>3: Fluid Mechanics</li>
      <li>4: Mechanics and Structural Analysis</li>
    </ul>
  </div>

  <div className="text-lg mb-6">
    Other than your academic knowledge, you need to choose one area based on interest, industry demand, and personal strengths. <br />
    Options for Mechanical Engineering Students Beyond Academics:
    <ul className="list-disc pl-5 mt-4 space-y-2">
      <li>1: Core Mechanical Fields (Watch Video for more info)</li>
      <li>2: Interdisciplinary Options (Watch Video for more info)</li>
      <li>3: Programming and Data Analysis (Watch Video for more info)</li>
      <li>4: Emerging Technologies (Watch Video for more info)</li>
    </ul>
  </div>

  <div className="text-center text-xl font-semibold mb-6">
    Select any one domain to get deep insight into that field:
  </div>

  <div className="flex flex-wrap gap-4 justify-center mb-10">
    {domains.map((domain, index) => (
      <div
        key={index}
        className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1 max-w-xs hover:bg-violet-100 transition-colors duration-300"
      >
        <h2 className="text-lg font-semibold">
          <Link to={`/field/Mechanical/${domain}`} className="text-blue-600 hover:underline">
            {domain}
          </Link>
        </h2>
      </div>
    ))}
  </div>
  </div>
</>

  
  )
}

export default Mechanical