import React from 'react';
import { useParams } from 'react-router-dom';
import WebD from './WebD';
import AndD from './AndD';
import IOSD from './IOSD';
import CrossPD from './CrossPD';
import { Link } from 'react-router-dom';
import BD from './BD';
import Dev from './Dev';
 
function DeveloperDetail() {
  const { name1 } = useParams();

  const DevDetails = {
    Web_Developer : <WebD/>,
    Android_Developer: <AndD/>,
    ioS_Developer: <IOSD/>,
    Cross_Platform_Development: <CrossPD/>,
    BlockChain_Developer:<BD/>,
    DevOps: <Dev/>,
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-4">{name1}</div>
      <p>{DevDetails[name1]}</p>
    </div>
  );
}

export default DeveloperDetail;