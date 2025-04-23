import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FieldList from './FieldList';
import FieldPage from './components/FieldPage';
import FieldDetail from './FieldDetail';
import DeveloperDetail from './ComputerScience/DeveloperDetail';
import OptionM from './Mechanical/OptionM'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function App() {
  
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FieldList />} />
          <Route path="/field/:field" element={<FieldPage />} />
          <Route path="/field/:name" element={<FieldDetail/>} />
          <Route path="/field/CS/:name1" element={<DeveloperDetail/>} />
          <Route path="/field/Mechanical/:name2" element={<OptionM/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
