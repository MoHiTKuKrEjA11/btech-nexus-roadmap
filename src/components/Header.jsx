import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-[#0A1929] py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="ccustom" fill="#8338ec"></path> 
            <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className="ccompli1" fill="#975aed"></path> 
            <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#a16ee8"></path> 
          </svg>
          <span className="text-white text-xl font-semibold">Btech-Nexus</span>
        </Link>
      </div>

      <nav className="flex-1 max-w-2xl mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="text-gray-400 hover:text-white">Homepage</Link>
          </li>
          <li>
            <Link to="/chat" className="text-gray-400 hover:text-white">Chat-App</Link>
          </li>
          <li>
            <Link to="/roadmap" className="text-red-400 border-b-2 border-red-400 pb-1">Roadmap</Link>
          </li>
          <li>
            <Link to="/resume-parser" className="text-gray-400 hover:text-white">Resume Parser</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 