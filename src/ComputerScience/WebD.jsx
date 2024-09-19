import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const WebD = () => {

  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of boxes with title, description, and resources
  const boxes1 = [
    {
      id: 1,
      title: 'Step 1: Learn HTML',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'HTML (Hypertext Markup Language) is used to create the structure of web pages. It is the basic building block for designing a web page. Learn about elements, tags, attributes, and semantic HTML.',
      resources: [
        {
          label: 'MDN Web Docs - HTML',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          label: 'W3Schools - HTML Tutorial',
          link: 'https://www.w3schools.com/html/',
        },
        {
          label: 'freeCodeCamp - Basic HTML and HTML5',
          link: 'https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5',
        },
      ],
    },
    {
      id: 2,
      title: 'Step 2: Learn CSS',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'CSS (Cascading Style Sheets) is used to style your web page to make it visually appealing and provide a good User Experience (UX). Learn about selectors, box model, flexbox, grid, responsive design, and animations.',
      resources: [
        {
          label: 'MDN Web Docs - CSS',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          label: 'W3Schools - CSS Tutorial',
          link: 'https://www.w3schools.com/css/',
        },
      ],
    },
    {
      id: 3,
      title: 'Step 3: Learn JavaScript',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'JavaScript is essential for adding interactivity to web pages. Learn basic programming concepts such as variables, data types, functions, loops, and conditional statements. Also, explore DOM manipulation, events, and modern ES6+ features like arrow functions, classes, and modules.',
      resources: [
        {
          label: 'MDN Web Docs - JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          label: 'JavaScript.info',
          link: 'https://javascript.info/',
        },
      ],
    },
    {
      id: 4,
      title: 'Step 4: Learn a JavaScript Framework or Library',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'JavaScript frameworks and libraries make development more efficient and scalable. Choose one to specialize in:<br />1. React.js - A popular library for building user interfaces.<br />2. Angular.js - A robust framework for building dynamic web applications.',
      resources: [
        {
          label: 'React Documentation',
          link: 'https://reactjs.org/docs/getting-started.html',
        },
        {
          label: 'Angular Documentation',
          link: 'https://angular.io/docs',
        },
      ],
    },
    {
      id: 5,
      title: 'Step 5: Learn Version Control with Git and GitHub',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Understand version control to manage and track changes in your code. Learn basic Git commands like init, clone, commit, push, pull, and branch. Use platforms like GitHub, GitLab, or Bitbucket for collaboration and code management.',
      resources: [
        {
          label: 'Git Documentation',
          link: 'https://git-scm.com/doc',
        },
        {
          label: 'GitHub Guides',
          link: 'https://guides.github.com/',
        },
      ],
    },
    {
      id: 6,
      title: 'Step 6: Explore Additional Tools and Technologies',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn about CSS preprocessors (like Sass or Less), build tools (like Webpack or Parcel), and package managers (like npm or Yarn). Familiarize yourself with browser developer tools for debugging and testing.',
      resources: [
        {
          label: 'Sass Documentation',
          link: 'https://sass-lang.com/documentation',
        },
        {
          label: 'Webpack Documentation',
          link: 'https://webpack.js.org/concepts/',
        },
        {
          label: 'npm Documentation',
          link: 'https://docs.npmjs.com/',
        },
      ],
    },
  ];


  const boxes2 = [
    {
      id: 7,
      title: 'Step 7: Understand How the Web Works',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn about servers, clients, and HTTP/HTTPS protocols, as well as how the internet functions. Understand concepts like DNS, domain names, and web hosting. Explore RESTful services and API architecture.',
      resources: [
        {
          label: 'HTTP Basics',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
        },
        {
          label: 'RESTful Web Services',
          link: 'https://restfulapi.net/',
        },
      ],
    },
    {
      id: 8,
      title: 'Step 8: Choose a Backend Programming Language',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Select a language that aligns with your goals and interests:<br />- JavaScript/Node.js: Ideal for full-stack development with frameworks like Express.js.<br />- Python: Known for Django and Flask frameworks, suitable for rapid development and data-driven applications.<br />- Java: Used with Spring Boot for building large-scale, secure applications.<br />- Ruby: Known for the Ruby on Rails framework, great for startup projects.<br />- PHP: Widely used with frameworks like Laravel for web applications.<br />- C#: Commonly used with ASP.NET Core for enterprise-level applications.',
      resources: [
        {
          label: 'Node.js Documentation',
          link: 'https://nodejs.org/en/docs/',
        },
        {
          label: 'Django Documentation',
          link: 'https://docs.djangoproject.com/en/stable/',
        },
        {
          label: 'Spring Boot Documentation',
          link: 'https://spring.io/projects/spring-boot',
        },
        {
          label: 'Ruby on Rails Guides',
          link: 'https://guides.rubyonrails.org/',
        },
        {
          label: 'Laravel Documentation',
          link: 'https://laravel.com/docs',
        },
        {
          label: 'ASP.NET Core Documentation',
          link: 'https://docs.microsoft.com/en-us/aspnet/core/',
        },
      ],
    },
    {
      id: 9,
      title: 'Step 9: Understand Databases and Data Management',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn about relational databases and SQL (Structured Query Language) for managing structured data in databases like MySQL, PostgreSQL, and SQLite. Explore NoSQL databases like MongoDB, Cassandra, and Redis for handling unstructured data and high-performance applications.',
      resources: [
        {
          label: 'MySQL Documentation',
          link: 'https://dev.mysql.com/doc/',
        },
        {
          label: 'PostgreSQL Documentation',
          link: 'https://www.postgresql.org/docs/',
        },
        {
          label: 'MongoDB Documentation',
          link: 'https://www.mongodb.com/docs/',
        },
        {
          label: 'Redis Documentation',
          link: 'https://redis.io/documentation',
        },
      ],
    },
    {
      id: 10,
      title: 'Step 10: Learn Backend Frameworks and Tools',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Master popular backend frameworks and tools to create efficient and scalable applications. Learn about server management, middleware, routing, authentication, and security practices.',
      resources: [
        {
          label: 'Express.js Documentation',
          link: 'https://expressjs.com/en/starter/installing.html',
        },
        {
          label: 'Flask Documentation',
          link: 'https://flask.palletsprojects.com/en/2.0.x/',
        },
        {
          label: 'Spring Boot Documentation',
          link: 'https://spring.io/projects/spring-boot',
        },
        {
          label: 'Ruby on Rails Guides',
          link: 'https://guides.rubyonrails.org/',
        },
      ],
    },
    {
      id: 11,
      title: 'Step 11: Learn Deployment and DevOps Basics',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Understand the basics of deploying applications on various platforms (like AWS, Heroku, or Azure). Learn about continuous integration/continuous deployment (CI/CD), containerization (using Docker), and server management.',
      resources: [
        {
          label: 'AWS Documentation',
          link: 'https://docs.aws.amazon.com/',
        },
        {
          label: 'Heroku Dev Center',
          link: 'https://devcenter.heroku.com/',
        },
        {
          label: 'Docker Documentation',
          link: 'https://docs.docker.com/',
        },
        {
          label: 'CI/CD Concepts',
          link: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd',
        },
      ],
    },
  ];


  return (
    <>
      {/* Front-End Development */}
      <div className="p-6 space-y-4">
        <div className="mb-4 text-lg">
          Front-end web development involves creating and managing the visual aspects of a website or web application that users interact with directly. This includes designing and implementing the layout, user interface (UI), and overall look and feel of a website.
        </div>

        <div className="mb-4 text-xl font-semibold">For Front-End Developer:</div>

        {/* Steps for Front-End Developer */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {boxes1.map((box) => (
            <div
              key={box.id}
              onClick={() => handleBoxClick(box.id)}
              className={`box p-4 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-md cursor-pointer overflow-hidden hover:bg-violet-100 ${activeBox === box.id ? 'active' : ''}`}
            >
              <h2 className="text-lg font-bold">{box.title}</h2>

              {/* Description transition */}

              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={box.imgSrc} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className={`content transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeBox === box.id && (
                  <div>
                    <p>{box.description}</p>
                    <ul>
                      {box.resources.map((resource, i) => (
                        <li key={i}>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            {resource.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back-End Development */}
        <div className="mt-8 text-lg">
          Back-end web development focuses on the server-side of web applications and involves creating, managing, and maintaining the databases, server logic, and application programming interfaces (APIs) that drive the functionality of a website or web application.
        </div>

        <div className="mb-4 text-xl font-semibold">For Back-End Developer:</div>

        {/* Steps for Back-End Developer */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {boxes2.map((box) => (
            <div
              key={box.id}
              onClick={() => handleBoxClick(box.id)}
              className={`box p-4 transition-all duration-300 ease-in-out hover:bg-violet-100  bg-white border border-gray-300 rounded-md shadow-md cursor-pointer overflow-hidden ${activeBox === box.id ? 'active' : ''}`}
            >
              <h2 className="text-lg font-bold">{box.title}</h2>

              {/* Description transition */}
              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={box.imgSrc} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className={`content transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeBox === box.id && (
                  <div>
                    <p>{box.description}</p>
                    <ul>
                      {box.resources.map((resource, i) => (
                        <li key={i}>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            {resource.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-lg">
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </div>
      </div>
    </>

  )
}

export default WebD