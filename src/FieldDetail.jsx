import React from 'react';
import { useParams } from 'react-router-dom';
import EC from './EC/EC';
import Civil from './Civil/Civil';
import IT from './IT/IT';
import Mechanical from './Mechanical/Mechanical'
import CS from './ComputerScience/CS';
 
function FieldDetail() {
  const { name } = useParams();
  let str = name;
  let noSpaces = str.replace(/\s+/g, '');
  const fieldDetails = {
    ElectronicsandCommunication: <EC/>,
    IT: <IT/>,
    Mechanical: <Mechanical/>,
    Civil: <Civil/>,
    ComputerScience: <CS/>,
  };

  return (
    <div>
      <p>{fieldDetails[noSpaces]}</p>
    </div>
  );
}

export default FieldDetail;