import React from 'react';
import { useParams } from 'react-router-dom';
import CoreD from './CoreD';
import IOD from './IOD';
import PADD from './PADD';
import { Link } from 'react-router-dom';
 
function DeveloperDetail() {
  const { name2 } = useParams();
  let str = name2;
  let noSpaces = str.replace(/\s+/g, '');

  const DevDetails = {
    CoreField : <CoreD/>,
    InterdisciplinaryOptions: <IOD/>,
    ProgrammingandDataAnalysis: <PADD/>,
  };

  return (
    <div>
      <div className="mb-6 text-xl font-bold">{noSpaces}</div>
      <p>{DevDetails[noSpaces]}</p>
    </div>
  );
}

export default DeveloperDetail;