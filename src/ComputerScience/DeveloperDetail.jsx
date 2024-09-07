import React from 'react';
import { useParams } from 'react-router-dom';
import WebD from './WebD';
import AndD from './AndD';
import IOSD from './IOSD';
import CrossPD from './CrossPD';
import { Link } from 'react-router-dom';
 
function DeveloperDetail() {
  const { name1 } = useParams();

  const DevDetails = {
    Web_Developer : <WebD/>,
    Android_Developer: <AndD/>,
    ioS_Developer: <IOSD/>,
    Cross_Platform_Development: <CrossPD/>,
  };

  return (
    <div>
      <h2>{name1}</h2>
      <p>{DevDetails[name1]}</p>
    </div>
  );
}

export default DeveloperDetail;