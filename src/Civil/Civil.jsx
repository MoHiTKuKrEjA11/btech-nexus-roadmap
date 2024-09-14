import React from 'react'

const Civil = () => {
  return (
    <>
  <div className="p-6 space-y-6">
    <div className="text-3xl font-bold mb-4">Civil Engineering</div>
    {/* Introduction */}
    <div className="text-xl mb-6">
      Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and natural built environment. This includes infrastructure such as roads, bridges, buildings, water supply systems, and waste management facilities. Civil engineers ensure the safety, functionality, and sustainability of these structures by applying principles of mathematics, physics, and material science.
      <br />
      <br />
      For civil engineering students, there are several career paths and skill-building opportunities outside of traditional academic coursework. Here are some options, and a student needs to follow just one from these options:
    </div>

    {/* Career Paths */}
    {[
      {
        title: '1: Structural Engineering',
        intro: 'Focuses on designing and analyzing structures like buildings, bridges, dams, and tunnels to ensure they are strong, stable, and safe. Structural engineers work with materials like steel, concrete, and timber to create durable structures.',
        learn: [
          'Structural analysis and design principles.',
          'Software tools such as ETABS, SAP2000, and STAAD.Pro.',
          'Understanding of building codes, load calculations, and material properties.',
        ],
      },
      {
        title: '2: Construction Management',
        intro: 'Involves overseeing construction projects from inception to completion, ensuring they are completed on time, within budget, and to the required quality standards.',
        learn: [
          'Project management methodologies and software like Primavera P6 or Microsoft Project.',
          'Knowledge of cost estimation, scheduling, and contract management.',
          'Leadership, communication, and risk management skills.',
        ],
      },
      {
        title: '3: Geotechnical Engineering',
        intro: 'Focuses on understanding soil, rock, and underground water conditions to design foundations, tunnels, and other underground structures.',
        learn: [
          'Soil mechanics, rock mechanics, and foundation engineering.',
          'Tools like GeoStudio or PLAXIS for geotechnical analysis.',
          'Field investigation techniques like borehole logging and soil sampling.',
        ],
      },
      {
        title: '4: Environmental Engineering',
        intro: 'Involves designing systems that protect and improve environmental quality, such as water and air purification, waste management, and pollution control.',
        learn: [
          'Environmental impact assessments and sustainability practices.',
          'Tools like AutoCAD Civil 3D or EPANET for designing water and waste systems.',
          'Knowledge of renewable energy systems and green building standards (e.g., LEED).',
        ],
      },
      {
        title: '5: Urban Planning and Development',
        intro: 'Deals with planning and designing urban spaces, including the layout of cities, transportation systems, zoning regulations, and community development.',
        learn: [
          'Geographic Information Systems (GIS) like ArcGIS or QGIS for mapping and spatial analysis.',
          'Urban design principles, transportation planning, and zoning laws.',
          'Tools for traffic flow analysis and city infrastructure design.',
        ],
      },
      {
        title: '6: Surveying and Geomatics',
        intro: 'Involves measuring and mapping the Earth’s surface to provide data for construction, land development, and environmental management.',
        learn: [
          'Surveying techniques using Total Stations, GPS, and drones.',
          'Software like AutoCAD Civil 3D or Trimble for data processing.',
          'Remote sensing and Geographic Information Systems (GIS).',
        ],
      },
      {
        title: '7: Transportation Engineering',
        intro: 'Focuses on designing and maintaining transportation systems, such as roads, highways, railways, airports, and public transit systems.',
        learn: [
          'Transportation planning and traffic engineering principles.',
          'Tools like TransCAD, PTV VISSIM, or HCS for traffic simulation and analysis.',
          'Understanding road safety, traffic flow, and urban mobility.',
        ],
      },
      {
        title: '8: Data Analysis and Software Development',
        intro: 'Applies computational tools and programming to enhance civil engineering solutions, such as analyzing large datasets, modeling, and automating calculations.',
        learn: [
          'Programming languages like Python or MATLAB for data analysis and automation.',
          'Data visualization tools like Tableau or Power BI.',
          'Developing scripts and models to solve engineering problems.',
        ],
      },
    ].map((path, index) => (
      <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-violet-100 transition-colors duration-300 cursor-pointer space-y-4">
        <h2 className="text-xl font-semibold mb-4">{path.title}</h2>
        <p>{path.intro}</p>
        <h3 className="font-semibold mb-2">What to Learn:</h3>
        <ul className="list-disc list-inside space-y-2">
          {path.learn.map((item, subIndex) => (
            <li key={subIndex}>{item}</li>
          ))}
        </ul>
      </div>
    ))}

    {/* Conclusion */}
    <div className="mt-6">
      <p>
        With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
      </p>
    </div>
  </div>
</>

  )
}

export default Civil