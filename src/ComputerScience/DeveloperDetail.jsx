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
  let str = name1;
  let noSpaces = str.replace(/\s+/g, '');

  const DevDetails = {
    WebDeveloper : <WebD/>,
    AndroidDeveloper: <AndD/>,
    ioSDeveloper: <IOSD/>,
    CrossPlatformDevelopment: <CrossPD/>,
    BlockChainDeveloper:<BD/>,
    DevOps: <Dev/>,
  };

  return (
    <div>
      <div className="mb-4 text-3xl font-bold">{noSpaces}</div>
      <p>{DevDetails[noSpaces]}</p>
    </div>
  );
}

export default DeveloperDetail;