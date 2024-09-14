import React from 'react';
import { Link } from 'react-router-dom';

function FieldList() {
  const fields = ['Electronics and Communication', 'IT', 'Mechanical', 'Civil','Computer Science'];

  return (
    <div className="flex flex-col items-center mt-4">
    <p className="text-lg  p-6">
      We are committed to helping you find the right path for your future by providing comprehensive roadmaps for all necessary branches of B.Tech. Explore the options below to understand what each field offers and choose the one that aligns best with your interests and strengths.
    </p>
  
    <div className="bg-gray-100 p-6 rounded-md mb-6 shadow-md max-w-4xl text-center">
      <h2 className="text-2xl font-semibold mb-4">Why Choose Your Path with Us?</h2>
      <ul className="list-disc list-inside text-lg text-left">
        <li>📝 <strong>Personalized Learning Paths:</strong> Tailored roadmaps for every branch of B.Tech.</li>
        <li>🛠️ <strong>Skill Building:</strong> Guidance on essential skills and technologies.</li>
        <li>🌍 <strong>Real-World Applications:</strong> Projects and examples to enhance practical knowledge.</li>
      </ul>
    </div>
  
    <div className="text-xl p-6 space-y-4 mb-6">Discover the essential branches in B.Tech that provide a solid foundation for your future career. Choose the field that aligns with your passion and strengths to embark on a successful journey in engineering and technology.</div>
    <ul className="flex flex-wrap justify-center space-x-4 list-none mb-6">
      {fields.map((field, index) => (
        <li key={index}>
          <Link
            to={`/field/${field}`}
            className="inline-block px-4 py-2 border border-gray-300 rounded-md text-lg text-gray-700 transition-colors duration-300 ease-in-out hover:bg-violet-500 hover:text-white"
          >
            {field}
          </Link>
        </li>
      ))}
    </ul>
  
    
    <footer className="mt-12 text-center">
    <p className="text-lg mb-4">
    If you find any mistakes or have feedback, feel free to reach out to us:
  </p>
  <div className="flex justify-center space-x-6 list-none">
    <a href="mailto:mohitkukreja463@gmail.com" className="text-violet-500 hover:text-violet-700 no-underline">Email</a>
    <a href="https://www.linkedin.com/in/mohit-kukreja-30aa05228/" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:text-violet-700 no-underline">LinkedIn</a>
    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:text-violet-700 no-underline">Instagram</a>
  </div>
    </footer>
  </div>
  

  );
}

export default FieldList;