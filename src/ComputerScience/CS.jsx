import React from "react";
import { Link } from 'react-router-dom';
const domains = ['Web Developer', 'Android Developer', 'ioS Developer', 'Cross Platform Development','BlockChain Developer','DevOps'];

const CS = () => {
  return (
    <>
    {/* Main Content */}
    <div className="p-6 space-y-4">
      <div className="mb-4 text-3xl font-bold">Computer Science and Engineering</div>
      <div className="mb-4 text-1xl">
        Computer Science is the study of computers and computational systems, focusing on the theory, development, and application of software and systems. It encompasses a wide range of topics, including algorithms and data structures, which are essential for problem-solving and organizing data. Programming languages provide the tools for writing software, while software engineering involves the methodologies for designing, developing, and maintaining applications.
      </div>
      
      <div className="text-lg">
      Other than your academic knowledge, you also require hands-on experience in one of the domains to build web, Android, and Windows applications. Additionally, students need to have a strong grasp of Data Structures and Algorithms (DSA).
      </div>
  
      <div className="mb-4 text-lg">
        For choosing any domain from the given option, I prefer to watch these videos so that you can select the best domain according to you.
        <span className="italic"> P.S.: These videos are highly preferable and can give deep insights into the given domain.</span>
      </div>
  
      {/* Domain Options */}
      <div className="flex flex-wrap gap-4">
        <a href="#" target="_blank" className="inline-block px-4 py-2 text-lg text-gray-700 transition-colors duration-300 ease-in-out border border-gray-300 rounded-md hover:bg-violet-500 hover:text-white">
          Web Developer
        </a>
        <a href="#" target="_blank" className="inline-block px-4 py-2 text-lg text-gray-700 transition-colors duration-300 ease-in-out border border-gray-300 rounded-md hover:bg-violet-500 hover:text-white">
          Android Developer
        </a>
        <a href="#" target="_blank" className="inline-block px-4 py-2 text-lg text-gray-700 transition-colors duration-300 ease-in-out border border-gray-300 rounded-md hover:bg-violet-500 hover:text-white">
          iOS Developer
        </a>
        <a href="#" target="_blank" className="inline-block px-4 py-2 text-lg text-gray-700 transition-colors duration-300 ease-in-out border border-gray-300 rounded-md hover:bg-violet-500 hover:text-white">
          Flutter Developer
        </a>
      </div>
  
      {/* Roadmap Section */}
      <div className="text-xl font-semibold">Roadmaps for these domains are:</div>
      
      <div className="flex flex-wrap gap-4">
        {domains.map((domain, index) => (
          <h1 key={index} className="text-lg">
            <Link to={`/field/CS/${domain}`} className="inline-block px-4 py-2 transition-colors duration-300 ease-in-out border border-gray-300 rounded-md hover:bg-violet-500 hover:text-white">
              {domain}
            </Link>
          </h1>
        ))}
      </div>
      <br /> <br />
      <div className="text-xl font-semibold">Roadmap of D.S.A:</div>
      <h1 className="text-lg">
      <Link to='/field/CS/DSA' className="inline-block px-4 py-2 transition-colors duration-300 ease-in-out border border-gray-300 rounded-md hover:bg-violet-500 hover:text-white">
      Data Structures and Algorithms
      </Link>
      </h1>
    </div>
  </>
  );
};

export default CS;
