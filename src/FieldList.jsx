import React from 'react';
import { Link } from 'react-router-dom';

function FieldList() {
  const fields = ['EC', 'IT', 'Mechanical', 'Civil','CS'];

  return (
    <ul>
        <h1>Fields of Study</h1>
      {fields.map((field, index) => (
        <li key={index}>
          <Link to={`/field/${field}`}>{field}</Link>
        </li>
      ))}
    </ul>
  );
}

export default FieldList;