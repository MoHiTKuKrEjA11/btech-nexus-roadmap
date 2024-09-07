import React from 'react';
import { useParams } from 'react-router-dom';
import EC from './EC/EC';
import Civil from './Civil/Civil';
import IT from './IT/IT';
import Mechanical from './Mechanical/Mechanical'
import CS from './ComputerScience/CS';
 
function FieldDetail() {
  const { name } = useParams();

  const fieldDetails = {
    EC: <EC/>,
    IT: <IT/>,
    Mechanical: <Mechanical/>,
    Civil: <Civil/>,
    CS: <CS/>,
  };

  return (
    <div>
      <h2>{name} Engineering</h2>
      <p>{fieldDetails[name]}</p>
    </div>
  );
}

export default FieldDetail;