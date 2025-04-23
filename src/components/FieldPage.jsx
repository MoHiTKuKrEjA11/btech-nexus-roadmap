import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function FieldPage() {
  const { field } = useParams();

  // Content mapping for different fields
  const fieldContent = {
    'Electronics and Communication': {
      description: 'Electronics and Communication Engineering focuses on electronic devices and software applications. This field combines principles of electronics, telecommunications, and information technology.',
      keyAreas: [
        'Digital Electronics',
        'Communication Systems',
        'Signal Processing',
        'Microprocessors',
        'VLSI Design'
      ]
    },
    'IT': {
      description: 'Information Technology deals with computing systems, databases, and networks. This field emphasizes on the use of computer systems and software to manage information.',
      keyAreas: [
        'Software Development',
        'Database Management',
        'Network Security',
        'Cloud Computing',
        'Web Technologies'
      ]
    },
    'Mechanical': {
      description: 'Mechanical Engineering involves the design, manufacturing, and maintenance of mechanical systems. It is one of the broadest engineering disciplines.',
      keyAreas: [
        'Thermodynamics',
        'Machine Design',
        'Manufacturing Processes',
        'Fluid Mechanics',
        'Robotics'
      ]
    },
    'Civil': {
      description: 'Civil Engineering focuses on the design, construction, and maintenance of the built environment, including roads, buildings, bridges, and water supply systems.',
      keyAreas: [
        'Structural Engineering',
        'Transportation Engineering',
        'Geotechnical Engineering',
        'Environmental Engineering',
        'Construction Management'
      ]
    },
    'Computer Science': {
      description: 'Computer Science deals with the theory, design, development, and application of software and computer systems. It covers both theoretical and practical aspects of computing.',
      keyAreas: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Artificial Intelligence',
        'Database Systems',
        'Computer Networks'
      ]
    }
  };

  const content = fieldContent[field] || {
    description: 'Field information coming soon.',
    keyAreas: []
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-24 pb-12 text-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{field}</h1>
          
          {/* Description Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Key Areas Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-white">Key Areas of Study</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.keyAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-violet-500 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white">{area}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Career Prospects Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Career Prospects</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              This field offers diverse career opportunities in various sectors. 
              Our detailed roadmap will guide you through the skills and knowledge needed to succeed in your chosen path.
            </p>
          </div>

          {/* Resources Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Learning Resources</h2>
            <p className="text-gray-300 text-lg mb-4">
              We provide curated resources to help you excel in your studies and career preparation:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Comprehensive study materials</li>
              <li>Online courses recommendations</li>
              <li>Industry-relevant projects</li>
              <li>Interview preparation guides</li>
              <li>Latest technology trends</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FieldPage; 