import React from "react";
import { Link } from 'react-router-dom';
const domains = ['Web_Developer', 'Android_Developer', 'ioS_Developer', 'Cross_Platform_Development'];

const CS = () => {
  return (
    <>
      <div>
      Computer Science is the study of computers and computational systems, focusing on the theory, development, and application of software and systems. It encompasses a wide range of topics, including algorithms and data structures, which are essential for problem-solving and organizing data. Programming languages provide the tools for writing software, while software engineering involves the methodologies for designing, developing, and maintaining applications.
      </div>
      <div>
        Other than your academic knowledge you require hands-on experience in one of the domain to build web,android and windows application.
      </div>
      <div>
        For choosing any domain from the given option. I prefer to watch these videos so that you can select best domain according to you.
        P.S.: These videos are ighly preferrable and it can give deep insights of the given domain.
      </div>
      <a href="" target="_blank">Web Developer</a>
      <a href="" target="_blank">Android Developer</a>
      <a href="" target="_blank">Android Developer</a>
      <a href="" target="_blank">Flutter Developer</a>
      <div>
        Roadmaps for these domains are :
      </div>
      {domains.map((domain, index) => (
        <h1 key={index}>
          <Link to={`/field/CS/${domain}`}>{domain}</Link>
        </h1>
      ))}
    </>
  );
};

export default CS;
