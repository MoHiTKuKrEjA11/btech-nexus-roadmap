import React from 'react';
import { useParams } from 'react-router-dom';
import CoreD from './CoreD';
import IOD from './IOD';
import PADD from './PADD';
import { Link } from 'react-router-dom';
 
function DeveloperDetail() {
  const { name2 } = useParams();

  const DevDetails = {
    Core_Field : <CoreD/>,
    Interdisciplinary_Options: <IOD/>,
    Programming_and_Data_Analysis: <PADD/>,
  };

  return (
    <div>
      <div className="text-xl mb-6 font-bold">{name2}</div>
      <p>{DevDetails[name2]}</p>
    </div>
  );
}

export default DeveloperDetail;