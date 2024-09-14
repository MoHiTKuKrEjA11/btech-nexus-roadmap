import React from "react";
import { Link } from 'react-router-dom';
const domains = ['Web_Developer', 'Android_Developer', 'ioS_Developer', 'Cross_Platform_Development','BlockChain_Developer','DevOps'];

const CS = () => {
  return (
    <>
    {/* Main Content */}
    <div className="p-6 space-y-4">
      <div className="text-3xl font-bold mb-4">Computer Science and Engineering</div>
      <div className="text-1xl  mb-4">
        Computer Science is the study of computers and computational systems, focusing on the theory, development, and application of software and systems. It encompasses a wide range of topics, including algorithms and data structures, which are essential for problem-solving and organizing data. Programming languages provide the tools for writing software, while software engineering involves the methodologies for designing, developing, and maintaining applications.
      </div>
      
      <div className="text-lg">
        Other than your academic knowledge, you require hands-on experience in one of the domains to build web, android, and windows applications.
      </div>
  
      <div className="text-lg mb-4">
        For choosing any domain from the given option, I prefer to watch these videos so that you can select the best domain according to you.
        <span className="italic"> P.S.: These videos are highly preferable and can give deep insights into the given domain.</span>
      </div>
  
      {/* Domain Options */}
      <div className="flex flex-wrap gap-4">
        <a href="#" target="_blank" className="inline-block px-4 py-2 border border-gray-300 rounded-md text-lg text-gray-700 transition-colors duration-300 ease-in-out hover:bg-violet-500 hover:text-white">
          Web Developer
        </a>
        <a href="#" target="_blank" className="inline-block px-4 py-2 border border-gray-300 rounded-md text-lg text-gray-700 transition-colors duration-300 ease-in-out hover:bg-violet-500 hover:text-white">
          Android Developer
        </a>
        <a href="#" target="_blank" className="inline-block px-4 py-2 border border-gray-300 rounded-md text-lg text-gray-700 transition-colors duration-300 ease-in-out hover:bg-violet-500 hover:text-white">
          iOS Developer
        </a>
        <a href="#" target="_blank" className="inline-block px-4 py-2 border border-gray-300 rounded-md text-lg text-gray-700 transition-colors duration-300 ease-in-out hover:bg-violet-500 hover:text-white">
          Flutter Developer
        </a>
      </div>
  
      {/* Roadmap Section */}
      <div className="text-xl font-semibold">Roadmaps for these domains are:</div>
      
      <div className="flex flex-wrap gap-4">
        {domains.map((domain, index) => (
          <h1 key={index} className="text-lg">
            <Link to={`/field/CS/${domain}`} className="inline-block px-4 py-2 border border-gray-300 rounded-md transition-colors duration-300 ease-in-out hover:bg-violet-500 hover:text-white">
              {domain}
            </Link>
          </h1>
        ))}
      </div>
    </div>
  </>
  );
};

export default CS;
