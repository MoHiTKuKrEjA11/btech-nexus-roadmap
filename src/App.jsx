import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FieldList from './FieldList';
import FieldDetail from './FieldDetail';
import DeveloperDetail from './ComputerScience/DeveloperDetail';
import OptionM from './Mechanical/OptionM'
function App() {
  
  return (
    <>
       <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<FieldList/>} />
          <Route path="/field/:name" element={<FieldDetail/>} />
          <Route path="/field/CS/:name1" element={<DeveloperDetail/>} />
          <Route path="/field/Mechanical/:name2" element={<OptionM/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
