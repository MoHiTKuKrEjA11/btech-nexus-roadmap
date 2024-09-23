import React from 'react'

const Alldata = () => {
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
    const boxes2=[
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
        const steps = [
            {
              id: 1,
              title: 'Step 1: Choose an IDE',
              imgSrc: "https://github.com/shadcn.png",
              description: `Choose an IDE for building applications that combines common developer tools into a single graphical user interface (GUI).`,
              resources: [
                'Xcode (More Preferable)',
                'Code Runner 2',
                'Atom',
                'AppCode',
                'Visual Studio',
              ],
            },
            {
              id: 2,
              title: 'Step 2: Choose a Programming Language',
              imgSrc: "https://github.com/shadcn.png",
              description: `Select one of the following programming languages to start developing iOS applications.`,
              resources: ['Swift (More Preferable)', 'Objective-C'],
            },
            {
              id: 3,
              title: 'Step 3: Learn a UI Framework',
              imgSrc: "https://github.com/shadcn.png",
              description: `A user interface (UI) framework is essential for designing the visual elements of your app.`,
              resources: ['SwiftUI (More Preferable)', 'UIKit', 'Storyboards'],
            },
            {
              id: 4,
              title: 'Step 4: Understand Design Patterns',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn design patterns to make changes easier to implement and maintain.`,
              resources: ['MVC (Model-View-Controller) (More Preferable)', 'MVVM', 'VIPER'],
            },
            {
              id: 5,
              title: 'Step 5: Learn Git and GitHub',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understanding version control is crucial for collaborating with other developers and managing your codebase effectively.`,
              resources: ['Track changes in your code', 'GitHub, GitLab, Bitbucket'],
            },
            {
              id: 6,
              title: 'Step 6: Learn About iOS App Architecture',
              imgSrc: "https://github.com/shadcn.png",
              description: `App architecture defines how different parts of the app interact, manage data, handle user input, and communicate with external services.`,
              resources: ['MVC', 'MVVM', 'VIPER'],
            },
            {
              id: 7,
              title: 'Step 7: Explore Networking and Data Management',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn how to handle network requests using libraries like URLSession or Alamofire.`,
              resources: ['Core Data', 'SQLite', 'Realm'],
            },
            {
              id: 8,
              title: 'Step 8: Master Debugging and Testing',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn how to use Xcode's debugging tools and get hands-on with unit testing using XCTest and UI testing with XCUITest.`,
              resources: [],
            },
            {
              id: 9,
              title: 'Step 9: Understand App Deployment',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn how to configure app settings, manage certificates, and submit it to the App Store.`,
              resources: [],
            },
            {
              id: 10,
              title: 'Step 10: Build Real Projects and a Portfolio',
              imgSrc: "https://github.com/shadcn.png",
              description: `Start with small projects to understand the basics, and gradually move to more complex projects.`,
              resources: [],
            },
          ];
          const steps1 = [
            {
              id: 1,
              title: 'Step 1: Learn the Fundamentals of Blockchain Technology',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understand the core concepts of blockchain technology, including distributed ledger technology, cryptographic hash functions, consensus mechanisms, and smart contracts.`,
              resources: [
                'Distributed Ledger Technology (DLT)',
                'Cryptographic Hash Functions (e.g., SHA-256)',
                'Consensus Mechanisms (Proof of Work, Proof of Stake, etc.)',
                'Smart Contracts',
                'Decentralization, Nodes, Peer-to-Peer Networks',
                'Types of Blockchains: Public, Private, Consortium, Hybrid',
              ],
            },
            {
              id: 2,
              title: 'Step 2: Learn Cryptography and Security Principles',
              imgSrc: "https://github.com/shadcn.png",
              description: `Study cryptography and security principles essential for blockchain technology, including symmetric and asymmetric encryption, hash functions, and digital signatures.`,
              resources: [
                'Symmetric and Asymmetric Cryptography',
                'Hash Functions and Digital Signatures',
                'Public and Private Keys',
                'Zero-Knowledge Proofs, Secure Multi-Party Computation',
                'Blockchain Security Principles and Attack Vectors',
              ],
            },
            {
              id: 3,
              title: 'Step 3: Choose a Blockchain Platform to Specialize In',
              imgSrc: "https://github.com/shadcn.png",
              description: `Select a blockchain platform to focus on based on your interests and the type of applications you want to build.`,
              resources: [
                'Ethereum: For decentralized applications (dApps) and smart contracts.',
                'Solana: High-speed transactions, low fees.',
                'Hyperledger Fabric: Enterprise-level private blockchain solutions.',
                'Polkadot: Focuses on interoperability between blockchains.',
                'Tezos: Self-amending blockchain network, formal verification.',
                'Binance Smart Chain (BSC): DeFi applications and dApps.',
              ],
            },
            {
              id: 4,
              title: 'Step 4: Learn a Smart Contract Programming Language',
              imgSrc: "https://github.com/shadcn.png",
              description: `Get proficient in programming languages used for writing smart contracts on various blockchain platforms.`,
              resources: [
                'Solidity (Mandatory): For Ethereum and compatible blockchains.',
                'Vyper (Optional): Focuses on simplicity and security for Ethereum.',
                'Rust (Optional): Used for smart contracts on Solana.',
                'C++ (Optional): Used for EOS blockchain development.',
              ],
            },
            {
              id: 5,
              title: 'Step 5: Learn Blockchain Development Tools and Frameworks',
              imgSrc: "https://github.com/shadcn.png",
              description: `Familiarize yourself with development tools and frameworks that help in building and deploying blockchain applications.`,
              resources: [
                'Truffle: Development framework for Ethereum.',
                'Hardhat: Compiling, deploying, testing, and debugging Ethereum software.',
                'Remix IDE: In-browser IDE for Solidity smart contracts.',
                'Ganache: Personal blockchain for Ethereum development.',
                'MetaMask: Browser extension wallet for dApps.',
                'Infura: Connects to Ethereum networks without a full node.',
              ],
            },
            {
              id: 6,
              title: 'Step 6: Understand Decentralized Applications (dApps) and Front-End Integration',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn about the architecture of dApps and how to integrate them with front-end applications.`,
              resources: [
                'dApp architecture and how they work.',
                'Connect smart contracts with front-end applications using Web3.js or Ethers.js.',
                'Develop web development skills (HTML, CSS, JavaScript) and frameworks like React.js.',
              ],
            },
            {
              id: 7,
              title: 'Step 7: Learn Blockchain APIs and SDKs',
              imgSrc: "https://github.com/shadcn.png",
              description: `Explore APIs and SDKs that allow interaction with blockchain networks and services.`,
              resources: [
                'Web3.js: Libraries for Ethereum node interaction.',
                'Ethers.js: Interact with the Ethereum blockchain and ecosystem.',
                'Blockchain.com APIs: APIs for building on the Blockchain.com platform.',
              ],
            },
            {
              id: 8,
              title: 'Step 8: Learn About Decentralized Finance (DeFi)',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understand the concepts and protocols behind DeFi and how to interact with DeFi platforms.`,
              resources: [
                'Understand the core concepts and protocols in DeFi:',
                'Liquidity pools, yield farming, staking, decentralized exchanges (DEX).',
                'Study DeFi protocols like Uniswap, Aave, Compound, Sushiswap.',
                'Learn about security risks and precautions in DeFi.',
              ],
            },
            {
              id: 9,
              title: 'Step 9: Master Blockchain Testing and Security Best Practices',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn how to test and secure your blockchain applications to ensure robustness and safety.`,
              resources: [
                'Perform unit testing and integration testing for smart contracts.',
                'Use security analysis tools like MythX, Slither, Manticore.',
                'Learn common vulnerabilities (e.g., reentrancy attacks, overflow/underflow attacks) and prevention techniques.',
              ],
            },
            {
              id: 10,
              title: 'Step 10: Learn About Consensus Algorithms and Protocols',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understand various consensus algorithms and protocols used in blockchain networks.`,
              resources: [
                'Proof of Work (PoW): Used by Bitcoin, Ethereum 1.0.',
                'Proof of Stake (PoS): Used by Ethereum 2.0, Cardano.',
                'Delegated Proof of Stake (DPoS): Used by EOS, Tron.',
                'Practical Byzantine Fault Tolerance (PBFT): Used by Hyperledger Fabric.',
                'Proof of Authority (PoA): Used in private or consortium blockchains.',
              ],
            },
            {
              id: 11,
              title: 'Step 11: Get Hands-On with Blockchain Development Projects',
              imgSrc: "https://github.com/shadcn.png",
              description: `Apply your skills by working on real blockchain projects and contributing to open-source initiatives.`,
              resources: [
                'Create and deploy your own cryptocurrency or token.',
                'Develop simple decentralized applications (dApps).',
                'Contribute to open-source blockchain projects.',
                'Participate in hackathons and collaborate on innovative solutions.',
              ],
            },
            {
              id: 12,
              title: 'Step 12: Explore Advanced Topics and Stay Updated',
              imgSrc: "https://github.com/shadcn.png",
              description: `Stay informed about the latest advancements in blockchain technology and explore advanced topics.`,
              resources: [
                'Layer 2 solutions, sidechains, state channels.',
                'Cross-chain interoperability and connecting multiple blockchains.',
                'Stay updated on emerging trends: NFTs, DAOs, Web 3.0, metaverse.',
                'Join developer communities and forums like StackOverflow, Reddit, and follow blockchain blogs.',
              ],
            },
          ];
          const steps2 = [
            {
              id: 1,
              title: 'Step 1: Learn the Basics of DevOps',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understand the core principles of DevOps, including collaboration, automation, and continuous improvement. Learn about the DevOps lifecycle and how it integrates development and operations.`,
              resources: [
                'DevOps Lifecycle',
                'Collaboration and Communication',
                'Automation and Continuous Improvement',
              ],
            },
            {
              id: 2,
              title: 'Step 2: Learn Version Control Systems',
              imgSrc: "https://github.com/shadcn.png",
              description: `Master version control systems for tracking changes in code and collaborating with others.`,
              resources: [
                'Git',
                'GitHub or GitLab',
                'Basic Git Commands (init, clone, commit, push, pull, branch)',
              ],
            },
            {
              id: 3,
              title: 'Step 3: Understand Continuous Integration and Continuous Deployment (CI/CD)',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn about CI/CD pipelines and how they automate the process of integrating code changes and deploying applications.`,
              resources: [
                'Jenkins',
                'Travis CI',
                'CircleCI',
                'GitLab CI/CD',
              ],
            },
            {
              id: 4,
              title: 'Step 4: Learn Containerization and Orchestration',
              imgSrc: "https://github.com/shadcn.png",
              description: `Gain expertise in container technologies and orchestration tools.`,
              resources: [
                'Docker',
                'Kubernetes',
              ],
            },
            {
              id: 5,
              title: 'Step 5: Explore Infrastructure as Code (IaC)',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn how to manage and provision infrastructure using code.`,
              resources: [
                'Terraform',
                'Ansible',
                'Puppet',
                'Chef',
              ],
            },
            {
              id: 6,
              title: 'Step 6: Master Cloud Platforms',
              imgSrc: "https://github.com/shadcn.png",
              description: `Familiarize yourself with cloud service providers and their offerings.`,
              resources: [
                'AWS (Amazon Web Services)',
                'Azure',
                'Google Cloud Platform (GCP)',
              ],
            },
            {
              id: 7,
              title: 'Step 7: Learn Monitoring and Logging Tools',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understand the importance of monitoring and logging for maintaining system health and performance.`,
              resources: [
                'Prometheus',
                'Grafana',
                'ELK Stack (Elasticsearch, Logstash, Kibana)',
                'Splunk',
              ],
            },
            {
              id: 8,
              title: 'Step 8: Gain Knowledge in Security Practices',
              imgSrc: "https://github.com/shadcn.png",
              description: `Learn about securing applications and infrastructure.`,
              resources: [
                'DevSecOps practices',
                'Security scanning tools',
                'Best practices for securing CI/CD pipelines',
              ],
            },
            {
              id: 9,
              title: 'Step 9: Learn Configuration Management Tools',
              imgSrc: "https://github.com/shadcn.png",
              description: `Understand configuration management and automation tools.`,
              resources: [
                'Ansible',
                'Puppet',
                'Chef',
              ],
            },
            {
              id: 10,
              title: 'Step 10: Work on Real-World Projects',
              imgSrc: "https://github.com/shadcn.png",
              description: `Apply your knowledge by working on real-world DevOps projects.`,
              resources: [
                'Set up a CI/CD pipeline for a small application using Jenkins or GitLab CI.',
                'Create a containerized application using Docker and manage it with Kubernetes.',
                'Develop infrastructure as code (IaC) scripts using Terraform or Ansible to deploy cloud resources.',
                'Implement monitoring and logging solutions for a production-like environment using Prometheus and Grafana.',
                'Collaborate with cross-functional teams to handle deployment, monitoring, and incident response.',
              ],
            },
          ];
          const steps3 = [
            {
              id: 1,
              title: 'Step 1: Understand the Basics of Android Development',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn about the Android ecosystem, including the Android operating system, the lifecycle of an Android app, and how Android devices interact with apps. This foundational knowledge is crucial for understanding the tools and languages you will use.',
              resources: [],
            },
            {
              id: 2,
              title: 'Step 2: Choose a Programming Language',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Android development primarily uses two languages: Kotlin (More Preferable) or Java.',
              resources: ['Kotlin (More Preferable)', 'Java'],
            },
            {
              id: 3,
              title: 'Step 3: Take an Overview of Development IDE',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Start with Android Studio, the official IDE for Android development, offering tools like code editors, emulators, and debugging tools.',
              resources: ['Android Studio'],
            },
            {
              id: 4,
              title: 'Step 4: Learn the Basics of Your Chosen Language',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn the syntax, OOP concepts like inheritance, encapsulation, and polymorphism, which are crucial for Android development.',
              resources: [],
            },
            {
              id: 5,
              title: 'Step 5: Understand the Basics of App Development',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn about Android app components like Activities, Services, Broadcast Receivers, and Content Providers.',
              resources: [],
            },
            {
              id: 6,
              title: 'Step 6: Learn About Gradle',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Gradle is a build automation tool used in Android Studio for managing dependencies, packaging apps, and automating repetitive tasks.',
              resources: [],
            },
            {
              id: 7,
              title: 'Step 7: Learn About Jetpack Compose and XML Layouts',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Jetpack Compose is a modern toolkit for building Android UI, while XML layouts are still widely used in many projects.',
              resources: ['Jetpack Compose', 'XML Layouts'],
            },
            {
              id: 8,
              title: 'Step 8: Master Various UI Elements and Layouts',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn about different elements and layouts like animations, drawers, frames, linear layouts, toast messages, and fragments for a user-friendly interface.',
              resources: [],
            },
            {
              id: 9,
              title: 'Step 9: Learn About Navigation',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Navigation is part of Android Jetpack. Learn navigation components to manage app flow, deep linking, and user experience.',
              resources: [],
            },
            {
              id: 10,
              title: 'Step 10: Learn About App Architecture',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'App architecture refers to design patterns like MVVM (More Preferable), MVC, and MVP that structure your codebase.',
              resources: ['MVVM (More Preferable)', 'MVC', 'MVP'],
            },
            {
              id: 11,
              title: 'Step 11: Learn How to Integrate with APIs and Databases',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn how to connect your app with external APIs and manage data using local databases like SQLite or Room Database.',
              resources: ['SQLite', 'Room Database'],
            },
            {
              id: 12,
              title: 'Step 12: Learn Version Control and Collaboration Tools',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Use version control systems like Git and platforms like GitHub for managing code changes and collaborating with other developers.',
              resources: ['Git', 'GitHub'],
            },
            {
              id: 13,
              title: 'Step 13: Learn About Testing',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn testing frameworks like JUnit (Unit Testing) and Espresso (Instrumentation Testing) to ensure your app’s functionality.',
              resources: ['JUnit', 'Espresso'],
            },
            {
              id: 14,
              title: 'Step 14: Build a Portfolio of Projects',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Build projects like a calculator or weather app to showcase your skills and demonstrate your expertise to employers or clients.',
              resources: [],
            },
            {
              id: 15,
              title: 'Step 15: Understand App Monetization and Publishing',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Learn how to publish apps on Google Play Store and explore app monetization strategies like ads and in-app purchases.',
              resources: [],
            },
            {
              id: 16,
              title: 'Step 16: Stay Updated with the Latest Trends',
              imgSrc: "https://github.com/shadcn.png",
              description:
                'Follow Android blogs, attend webinars, and engage in communities to stay updated with the latest trends and best practices.',
              resources: [],
            },
          ];
          const frameworks = [
            {
              id: 1,
              title: 'React Native',
              imgSrc: "https://github.com/shadcn.png",
              description: `React Native, developed by Facebook, allows you to build mobile apps using JavaScript and React. It provides a set of components for building the UI and enables developers to use a single codebase for both Android and iOS apps.`,
            },
            {
              id: 2,
              title: 'Flutter',
              imgSrc: "https://github.com/shadcn.png",
              description: `Flutter, developed by Google, is an open-source UI software development kit that allows developers to create high-performance, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.`,
            },
            {
              id: 3,
              title: 'Kotlin Multiplatform',
              imgSrc: "https://github.com/shadcn.png",
              description: `Kotlin Multiplatform, created by JetBrains, enables developers to share code between multiple platforms, including Android, iOS, web, and desktop applications. It allows you to write platform-specific code only when necessary, leveraging shared logic for most of the app.`,
            },
            {
              id: 4,
              title: '.NET MAUI',
              imgSrc: "https://github.com/shadcn.png",
              description: `.NET MAUI is a cross-platform framework developed by Microsoft that allows developers to create native apps for Android, iOS, macOS, and Windows with a single codebase using C#. It is an evolution of Xamarin.Forms and offers enhanced performance and flexibility.`,
            },
          ];
          const careerPaths = [
            {
              id: 1,
              title: 'Structural Engineering',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Focuses on designing and analyzing structures like buildings, bridges, dams, and tunnels to ensure they are strong, stable, and safe. Structural engineers work with materials like steel, concrete, and timber to create durable structures.',
              learn: [
                'Structural analysis and design principles.',
                'Software tools such as ETABS, SAP2000, and STAAD.Pro.',
                'Understanding of building codes, load calculations, and material properties.',
              ],
            },
            {
              id: 2,
              title: 'Construction Management',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Involves overseeing construction projects from inception to completion, ensuring they are completed on time, within budget, and to the required quality standards.',
              learn: [
                'Project management methodologies and software like Primavera P6 or Microsoft Project.',
                'Knowledge of cost estimation, scheduling, and contract management.',
                'Leadership, communication, and risk management skills.',
              ],
            },
            {
              id: 3,
              title: 'Geotechnical Engineering',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Focuses on understanding soil, rock, and underground water conditions to design foundations, tunnels, and other underground structures.',
              learn: [
                'Soil mechanics, rock mechanics, and foundation engineering.',
                'Tools like GeoStudio or PLAXIS for geotechnical analysis.',
                'Field investigation techniques like borehole logging and soil sampling.',
              ],
            },
            {
              id: 4,
              title: 'Environmental Engineering',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Involves designing systems that protect and improve environmental quality, such as water and air purification, waste management, and pollution control.',
              learn: [
                'Environmental impact assessments and sustainability practices.',
                'Tools like AutoCAD Civil 3D or EPANET for designing water and waste systems.',
                'Knowledge of renewable energy systems and green building standards (e.g., LEED).',
              ],
            },
            {
              id: 5,
              title: 'Urban Planning and Development',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Deals with planning and designing urban spaces, including the layout of cities, transportation systems, zoning regulations, and community development.',
              learn: [
                'Geographic Information Systems (GIS) like ArcGIS or QGIS for mapping and spatial analysis.',
                'Urban design principles, transportation planning, and zoning laws.',
                'Tools for traffic flow analysis and city infrastructure design.',
              ],
            },
            {
              id: 6,
              title: 'Surveying and Geomatics',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Involves measuring and mapping the Earth’s surface to provide data for construction, land development, and environmental management.',
              learn: [
                'Surveying techniques using Total Stations, GPS, and drones.',
                'Software like AutoCAD Civil 3D or Trimble for data processing.',
                'Remote sensing and Geographic Information Systems (GIS).',
              ],
            },
            {
              id: 7,
              title: 'Transportation Engineering',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Focuses on designing and maintaining transportation systems, such as roads, highways, railways, airports, and public transit systems.',
              learn: [
                'Transportation planning and traffic engineering principles.',
                'Tools like TransCAD, PTV VISSIM, or HCS for traffic simulation and analysis.',
                'Understanding road safety, traffic flow, and urban mobility.',
              ],
            },
            {
              id: 8,
              title: 'Data Analysis and Software Development',
              imgSrc: "https://github.com/shadcn.png",
              intro: 'Applies computational tools and programming to enhance civil engineering solutions, such as analyzing large datasets, modeling, and automating calculations.',
              learn: [
                'Programming languages like Python or MATLAB for data analysis and automation.',
                'Data visualization tools like Tableau or Power BI.',
                'Developing scripts and models to solve engineering problems.',
              ],
            },
          ];
          const fieldPath=[
            {
              id:1,
              title: "Embedded Systems",
              introduction: "Embedded systems involve designing specialized computing systems that perform dedicated functions within larger devices, such as smartphones, appliances, medical devices, and automotive electronics.",
              learn: [
                {
                  topic: "Programming Fundamentals",
                  details: [
                    "Learn languages like C and C++ to understand low-level programming.",
                    "Study Assembly language for specific microcontrollers."
                  ]
                },
                {
                  topic: "Microcontrollers and Microprocessors",
                  details: [
                    "Learn about different microcontrollers (e.g., AVR, PIC, ARM Cortex) and their architectures.",
                    "Get hands-on experience with platforms like Arduino or Raspberry Pi."
                  ]
                },
                {
                  topic: "Real-Time Operating Systems (RTOS)",
                  details: [
                    "Understand RTOS concepts, scheduling algorithms, and task management."
                  ]
                },
                {
                  topic: "Hardware Interfacing",
                  details: [
                    "Learn about sensors, actuators, communication protocols (e.g., UART, SPI, I2C), and interfacing techniques."
                  ]
                },
                {
                  topic: "Tools and Software",
                  details: [
                    "Use tools like Keil, Atmel Studio, or Eclipse for development.",
                    "Debugging tools (JTAG, GDB)."
                  ]
                }
              ]
            },
            {
              id:2,
              title: "VLSI Design (Very Large Scale Integration)",
              introduction: "Focuses on designing and manufacturing integrated circuits (ICs), which are the building blocks of electronic devices.",
              learn: [
                {
                  topic: "Digital Electronics",
                  details: [
                    "Study digital logic design, including combinational and sequential logic circuits."
                  ]
                },
                {
                  topic: "Hardware Description Languages (HDL)",
                  details: [
                    "Learn VHDL or Verilog for designing digital circuits."
                  ]
                },
                {
                  topic: "Circuit Design and Simulation",
                  details: [
                    "Practice using tools like Cadence, Synopsys, or Xilinx Vivado for circuit design, simulation, and synthesis."
                  ]
                },
                {
                  topic: "Analog and Mixed-Signal Design",
                  details: [
                    "Basics of analog electronics, including amplifiers, filters, and ADC/DAC converters."
                  ]
                },
                {
                  topic: "Semiconductor Physics",
                  details: [
                    "Understand semiconductor materials, MOSFET operation, and fabrication processes."
                  ]
                }
              ]
            },
            {
              id:3,
              title: "IoT (Internet of Things)",
              introduction: "Involves creating smart devices and systems that communicate and interact over the internet, ranging from home automation to industrial applications.",
              learn: [
                {
                  topic: "Basics of Electronics",
                  details: [
                    "Understand sensors, actuators, microcontrollers, and power management."
                  ]
                },
                {
                  topic: "Communication Protocols",
                  details: [
                    "Learn about protocols like MQTT, HTTP, CoAP, BLE, and Zigbee."
                  ]
                },
                {
                  topic: "Hardware Platforms",
                  details: [
                    "Gain experience with development boards like Arduino, Raspberry Pi, and ESP32."
                  ]
                },
                {
                  topic: "Networking and Cloud Platforms",
                  details: [
                    "Understand IoT cloud platforms like AWS IoT, Google Cloud IoT, and Azure IoT Hub."
                  ]
                },
                {
                  topic: "Data Analytics",
                  details: [
                    "Learn how to collect, store, and analyze data from IoT devices."
                  ]
                },
                {
                  topic: "Security",
                  details: [
                    "Basics of securing IoT networks, data encryption, and secure communication."
                  ]
                }
              ]
            },
            {
              id:4,
              title: "Wireless Communication",
              introduction: "Focuses on the design and optimization of wireless networks, such as 4G/5G, Wi-Fi, and Bluetooth.",
              learn: [
                {
                  topic: "Fundamentals of Wireless Communication",
                  details: [
                    "Study wireless communication principles, radio frequency (RF) fundamentals, and signal propagation."
                  ]
                },
                {
                  topic: "Network Protocols and Standards",
                  details: [
                    "Learn about standards like LTE, 5G, Wi-Fi, Bluetooth, and NFC."
                  ]
                },
                {
                  topic: "RF Circuit Design",
                  details: [
                    "Understand RF components (e.g., antennas, filters, amplifiers) and design techniques."
                  ]
                },
                {
                  topic: "Tools and Software",
                  details: [
                    "Use software like MATLAB or LabVIEW for wireless communication simulations and testing."
                  ]
                },
                {
                  topic: "Antenna Design",
                  details: [
                    "Learn the basics of antenna theory, design, and testing."
                  ]
                }
              ]
            },
            {
              id:5,
              title: "Signal Processing",
              introduction: "Involves analyzing, modifying, and synthesizing signals for applications like telecommunications, multimedia, and medical imaging.",
              learn: [
                {
                  topic: "Mathematics for Signal Processing",
                  details: [
                    "Study linear algebra, calculus, probability, and Fourier transforms."
                  ]
                },
                {
                  topic: "Digital Signal Processing (DSP) Techniques",
                  details: [
                    "Learn about filtering, modulation, sampling, and discrete-time signal processing."
                  ]
                },
                {
                  topic: "Software Tools",
                  details: [
                    "Use MATLAB, Python, or Octave for signal analysis and simulation."
                  ]
                },
                {
                  topic: "Applications",
                  details: [
                    "Explore applications like audio processing, image processing, and telecommunications."
                  ]
                },
                {
                  topic: "Algorithms",
                  details: [
                    "Study algorithms for compression, noise reduction, and signal enhancement."
                  ]
                }
              ]
            },
            {
              id:6,
              title: "Robotics and Automation",
              introduction: "Combines electronics, mechanics, and computer science to create robots and automated systems.",
              learn: [
                {
                  topic: "Fundamentals of Robotics",
                  details: [
                    "Learn about robotic systems, sensors, actuators, and control mechanisms."
                  ]
                },
                {
                  topic: "Control Systems",
                  details: [
                    "Study feedback control, PID control, and state-space analysis."
                  ]
                },
                {
                  topic: "Programming",
                  details: [
                    "Learn programming languages like Python and C/C++.",
                    "Use robotics platforms like ROS (Robot Operating System)."
                  ]
                },
                {
                  topic: "Embedded Systems and Microcontrollers",
                  details: [
                    "Understand the integration of microcontrollers in robotics."
                  ]
                },
                {
                  topic: "Machine Vision",
                  details: [
                    "Basics of computer vision and image processing for robotics."
                  ]
                }
              ]
            },
            {
              id:7,
              title: "FPGA Development",
              introduction: "Focuses on using FPGAs for designing high-performance, reconfigurable hardware.",
              learn: [
                {
                  topic: "Digital Logic Design",
                  details: [
                    "Learn digital logic fundamentals."
                  ]
                },
                {
                  topic: "Hardware Description Languages (HDL)",
                  details: [
                    "Learn Verilog or VHDL for FPGA programming."
                  ]
                },
                {
                  topic: "FPGA Tools",
                  details: [
                    "Use tools like Xilinx Vivado, Intel Quartus, or Lattice Diamond."
                  ]
                },
                {
                  topic: "Application Areas",
                  details: [
                    "Explore applications in communications, signal processing, and cryptography."
                  ]
                },
                {
                  topic: "Reconfigurable Computing",
                  details: [
                    "Understand reconfigurable hardware and design algorithms for FPGAs."
                  ]
                }
              ]
            },
            {
              id:8,
              title: "Artificial Intelligence and Machine Learning",
              introduction: "Applying AI and ML algorithms to solve problems related to signal processing, communication, robotics, and more.",
              learn: [
                {
                  topic: "Programming and Libraries",
                  details: [
                    "Learn programming languages like Python and libraries like TensorFlow, Keras, or PyTorch."
                  ]
                },
                {
                  topic: "Mathematics for AI/ML",
                  details: [
                    "Study linear algebra, calculus, probability, and statistics."
                  ]
                },
                {
                  topic: "Core AI/ML Concepts",
                  details: [
                    "Learn about supervised and unsupervised learning, neural networks, deep learning, and reinforcement learning."
                  ]
                },
                {
                  topic: "Applications in ECE",
                  details: [
                    "Focus on applying AI/ML in areas like signal processing, robotics, and IoT."
                  ]
                },
                {
                  topic: "Data Science Fundamentals",
                  details: [
                    "Basics of data collection, preprocessing, and visualization techniques."
                  ]
                }
              ]
            }
          ];
          
          const designTools = [
            {
              id:1,
              desc:'Design engineering involves creating detailed plans, drawings, and models for mechanical systems, components, or products. The focus is on the conceptualization, visualization, and optimization of mechanical designs that meet specific functional and aesthetic requirements.',
              major:'To become proficient in Computer-Aided Design (CAD), you should start by learning widely-used tools like AutoCAD, SolidWorks, and CATIA. These tools are essential for mechanical design, allowing you to create precise 2D and 3D models of parts and assemblies. Here is a brief overview of each, so choose accordingly and learn one of them:',
              title:'Design Engineering',
            majorArea:[
            {
              name: 'AutoCAD',
              description: 'Best For: Beginners, civil engineering, architecture, and basic 2D drafting.',
              pros: [
                'Widely used for 2D drafting and simple 3D modeling.',
                'Easier to learn and more intuitive for beginners.',
                'Essential for fields like architecture, civil engineering, and construction.'
              ],
              consider: 'You are interested in fields that focus more on 2D designs, plans, and blueprints.'
            },
            {
              name: 'SolidWorks',
              description: 'Best For: Mechanical engineering, product design, and manufacturing.',
              pros: [
                'Ideal for 3D modeling, parametric design, and simulation.',
                'Widely used in mechanical design, automotive, consumer products, and manufacturing industries.',
                'Strong community support and extensive tutorials available.'
              ],
              consider: 'You are focused on mechanical engineering, product development, or industries that require detailed 3D modeling and simulation.'
            },
            {
              name: 'CATIA',
              description: 'Best For: Aerospace, automotive, and complex system design.',
              pros: [
                'Advanced capabilities for complex surface modeling, large assemblies, and digital mock-ups.',
                'Preferred in aerospace, automotive, and high-end industrial design.',
                'Integrates well with other PLM (Product Lifecycle Management) tools.'
              ],
              consider: 'You are aiming for careers in the aerospace or automotive industries or working on complex projects that require advanced modeling capabilities.'
            }
          ],
        }
          ];
        
          // Array for Manufacturing Engineering key areas
          const manufacturingAreas = [
            {
              id:2,
              desc:'Manufacturing Engineering focuses on designing, developing, and optimizing the processes and systems needed to produce goods efficiently and cost-effectively. It combines knowledge of materials, machines, automation, and production processes to ensure high-quality products and optimal productivity.',
              keya:'Key Areas:',
              title:'Manufacturing Engineering',
              major:[
            {
              name: 'CAD/CAM Software',
              description:[ 
              {
                title:'Learn to use CAD tools like AutoCAD, SolidWorks, or CATIA for creating detailed part and assembly models. Understand CAM software for CNC programming and machining simulations. Understand the integration of CAD and CAM in a manufacturing environment.',
                detail:'',
              }
              ]
            },
            {
              name: 'Core Manufacturing Processes',
              description: [
                {
                  title: 'Machining:',
                  detail: 'Learn about different machining processes like turning, milling, drilling, grinding, and CNC (Computer Numerical Control) operations.'
                },
                {
                  title: 'Casting and Forging:',
                  detail: 'Understand the principles of metal casting and forging, including mold design, casting defects, and heat treatment processes.'
                },
                {
                  title: 'Welding and Joining:',
                  detail: 'Study various welding techniques (e.g., MIG, TIG, arc welding) and other joining methods (e.g., brazing, adhesive bonding).'
                },
                {
                  title: 'Additive Manufacturing:',
                  detail: 'Learn the fundamentals of 3D printing technologies and their applications in prototyping and production.'
                }
              ]
            }
          ],
          }
          ];
        
          // Array for Thermal and Fluid Engineering specialization areas
          const thermalAreas = [
            {
              id:3,
              desc:' Thermal and Fluid Engineering is a branch of mechanical engineering that focuses on the study and practical applications of heat transfer, fluid dynamics, and thermodynamics. Professionals in this field apply these principles to design, analyze, and optimize systems that involve the flow of fluids (liquids and gases) and the transfer of thermal energy.',
              special:'Specialization Areas:',
              title:'Thermal and Fluid Engineering',
            major:[
            {
              name: 'Thermodynamics',
              description: 'The science of energy conversion, focusing on how heat energy is converted into mechanical work and vice versa.',
              applications: [
                'Engines and Turbines: Design and analysis of internal combustion engines, gas turbines, steam turbines, and other power generation systems.',
                'Refrigeration and HVAC Systems: Development of efficient cooling and heating systems, such as refrigerators, air conditioners, and heat pumps.',
                'Renewable Energy: Working on technologies like solar thermal power, geothermal energy systems, and waste heat recovery.'
              ]
            },
            {
              name: 'Heat Transfer',
              description: 'The study of how heat moves through materials and systems via conduction, convection, and radiation.',
              applications: [
                'Heat Exchangers: Designing equipment used in power plants, chemical processes, and HVAC systems to efficiently transfer heat between fluids.',
                'Thermal Management Systems: Developing cooling solutions for electronic devices, automotive engines, and industrial equipment.',
                'Insulation Materials: Improving thermal insulation for buildings, vehicles, and industrial processes to reduce energy consumption.'
              ]
            },
            {
              name: 'HVAC (Heating, Ventilation, and Air Conditioning)',
              description: 'The design and management of systems that control indoor climate, including temperature, humidity, and air quality.',
              applications: [
                'Building Climate Control: Designing efficient HVAC systems for residential, commercial, and industrial buildings to provide comfort while minimizing energy use.',
                'Vehicle Climate Control: Developing HVAC systems for vehicles (cars, trains, planes) that optimize passenger comfort and safety.',
                'Industrial Ventilation: Managing air quality and temperature control in manufacturing plants, cleanrooms, and laboratories.'
              ]
            }
          ],
          }
          ];
        
          const sections = [
            {
              id:1,
              title: "Mechatronics and Robotics",
              description: "Mechatronics is an interdisciplinary field that integrates mechanical engineering with electronics, computer science, and control systems to design and create intelligent machines and automation systems. Robotics is a subfield that focuses specifically on designing, building, and programming robots for various applications.",
              essentials: [
                {
                  title: "Programming Basics",
                  details: "Learn foundational programming languages such as Python (for high-level programming and scripting) and C/C++ (for low-level programming and embedded systems). Understand algorithms, data structures, and control flow for creating efficient software solutions."
                },
                {
                  title: "Microcontrollers and Embedded Systems",
                  details: "Gain proficiency in working with microcontrollers like Arduino and Raspberry Pi. These are essential for developing and prototyping robotic systems, automation devices, and IoT applications. Learn how to interface sensors, actuators, and motors with microcontrollers to create intelligent, responsive systems."
                },
                {
                  title: "Control Systems",
                  details: "Study the principles of control theory to understand how to design systems that maintain stability and performance. This includes learning about PID (Proportional-Integral-Derivative) controllers and feedback systems. Learn about various types of controllers and actuators used in robotics, such as servo motors, stepper motors, and pneumatic actuators."
                },
                {
                  title: "Electronics and Circuit Design",
                  details: "Understand basic electronics, including circuits, transistors, diodes, and operational amplifiers. Learn to design and test simple electronic circuits that interface with mechanical components."
                },
                {
                  title: "Sensors and Actuators",
                  details: "Learn about different types of sensors (such as ultrasonic, infrared, LIDAR) and actuators (such as motors and servos) used in robotic systems for perception and motion control."
                },
                {
                  title: "3D Modeling and CAD",
                  details: "Use CAD software (like SolidWorks or AutoCAD) to design mechanical parts for robots and automation systems. Understand how to integrate mechanical and electronic components within a cohesive design."
                }
              ],
              careers: ["Robotics Engineer", "Automation Specialist", "Mechatronics Engineer", "Embedded Systems Developer"]
            },
            {
              id:2,
              title: "Renewable Energy",
              description: "Renewable Energy engineering focuses on designing, developing, and optimizing systems that generate energy from sustainable sources like solar, wind, hydro, and geothermal power. It addresses global energy challenges by promoting sustainable practices and reducing dependency on fossil fuels.",
              essentials: [
                {
                  title: "Fundamentals of Renewable Energy Systems",
                  details: "Understand different types of renewable energy sources (solar, wind, hydro, geothermal, etc.) and how they work. Study the principles of energy conversion, storage, and grid integration for renewable energy systems."
                },
                {
                  title: "Solar Energy",
                  details: "Learn about solar photovoltaic (PV) systems, including how to design, install, and maintain solar panels. Understand the principles of solar thermal systems for heating applications."
                },
                {
                  title: "Wind Energy",
                  details: "Study aerodynamics and the mechanics of wind turbines, including blade design, generator systems, and site selection. Learn about wind farm design, turbine layout optimization, and energy output forecasting."
                },
                {
                  title: "Energy Efficiency and Sustainability",
                  details: "Understand concepts like energy auditing, sustainable building design, and efficiency measures. Learn about smart grids, energy management systems, and the integration of renewable energy into existing power grids."
                },
                {
                  title: "Software and Simulation Tools",
                  details: "Use software tools like HOMER for renewable energy system modeling, RETScreen for feasibility analysis, and MATLAB/Simulink for simulating energy systems and components. Learn to use GIS (Geographical Information Systems) for site analysis and resource mapping."
                }
              ],
              careers: ["Renewable Energy Engineer", "Solar Energy Consultant", "Wind Energy Analyst", "Energy Efficiency Specialist"]
            },
            {
              id:3,
              title: "Biomechanics and Biomedical Engineering",
              description: "Biomechanics and Biomedical Engineering apply mechanical engineering principles to the human body and medical devices. This field involves designing medical equipment, developing prosthetics, creating implants, and improving rehabilitation technologies.",
              essentials: [
                {
                  title: "Human Anatomy and Physiology",
                  details: "Gain a basic understanding of human anatomy, physiology, and the musculoskeletal system to understand how mechanical forces affect the body. Study biomechanics to analyze movement, force distribution, and the mechanics of body joints and tissues."
                },
                {
                  title: "Medical Device Design",
                  details: "Learn the principles of designing medical devices, such as prosthetics, orthotics, implants, surgical tools, and diagnostic equipment. Understand materials science as it pertains to biocompatibility, corrosion resistance, and mechanical properties of materials used in medical devices."
                },
                {
                  title: "Biomechanics",
                  details: "Study the mechanics of biological tissues and organs to understand their behavior under different conditions. Use software like MATLAB for modeling and simulating biomechanical processes, and design tools like SolidWorks for creating prototypes."
                },
                {
                  title: "Regulations and Standards",
                  details: "Learn about regulations and standards (e.g., FDA, ISO) for designing, testing, and manufacturing medical devices to ensure safety and efficacy. Understand the clinical trial process and requirements for biomedical innovations."
                },
                {
                  title: "Prototyping and Testing",
                  details: "Gain skills in rapid prototyping techniques (like 3D printing) to develop and test medical device concepts. Learn about testing methods to evaluate mechanical performance, biocompatibility, and reliability."
                }
              ],
              careers: ["Biomedical Engineer", "Biomechanics Researcher", "Medical Device Designer", "Prosthetics and Orthotics Specialist"]
            }
          ];
          const sections1 = [
            {
              id:1,
              title: "1. MATLAB or Python:",
              content: "Both MATLAB and Python are powerful tools for computational tasks in engineering. They are used for mathematical modeling, data analysis, simulation, and automating repetitive engineering calculations.",
              subsections: [
                {
                  title: "i- MATLAB:",
                  content: "A high-level programming language widely used in engineering for numerical computing and data visualization. Learn to use built-in functions and toolboxes for tasks such as linear algebra, differential equations, signal processing, and optimization. Focus on Simulink for modeling, simulating, and analyzing dynamic systems (e.g., mechanical, electrical, and hydraulic systems). Study how to develop custom scripts and functions to solve specific engineering problems, automate workflows, and analyze large datasets."
                },
                {
                  title: "ii- Python:",
                  content: "An open-source programming language that's versatile, easy to learn, and widely used for data analysis, automation, and machine learning. Learn popular libraries such as NumPy (for numerical computations), Pandas (for data manipulation), SciPy (for scientific computing), and Matplotlib/Seaborn (for data visualization). Use Python for automating engineering calculations, processing data from sensors, and developing custom software tools or applications. Understand how to integrate Python with engineering software and tools, such as CAD or simulation platforms."
                }
              ]
            },
            {
              id:2,
              title: "2. IoT (Internet of Things): (Optional Field)",
              content: "The Internet of Things (IoT) involves connecting mechanical systems and devices to the internet or local networks, allowing them to communicate, collect data, and be controlled remotely. IoT skills are crucial for creating smart devices and automation solutions in various fields like smart manufacturing, predictive maintenance, and intelligent product design.",
              subsections: [
                {
                  title: "1: IoT Basics:",
                  content: "Understand the fundamental concepts of IoT, such as sensor networks, data communication, cloud computing, and edge computing. Learn how IoT integrates with mechanical systems to enable real-time monitoring, data collection, and remote control."
                },
                {
                  title: "2: Communication Protocols:",
                  content: "Learn about common communication protocols like MQTT (Message Queuing Telemetry Transport), HTTP (Hypertext Transfer Protocol), and CoAP (Constrained Application Protocol) used for data transmission between IoT devices and servers."
                },
                {
                  title: "3: Microcontrollers and Development Platforms:",
                  content: "Gain experience with microcontrollers like Arduino and Raspberry Pi. Arduino: Focus on learning how to program microcontrollers to interact with sensors, actuators, and other electronic components. Raspberry Pi: Understand how to use this small, affordable computer to run more complex programs and interfaces (like Python) for IoT applications. Learn how to build basic IoT projects, such as temperature monitoring systems, smart lighting, or automated control systems."
                },
                {
                  title: "4: Sensor Integration:",
                  content: "Study different types of sensors (e.g., temperature, humidity, pressure, motion) and how to integrate them with mechanical systems to collect real-time data."
                },
                {
                  title: "5: Data Processing and Analysis:",
                  content: "Learn to process and analyze the data collected from IoT devices using tools like MATLAB or Python. Understand how to use cloud platforms (e.g., AWS IoT, Azure IoT Hub) for data storage, processing, and real-time analytics."
                },
                {
                  title: "6: Cybersecurity in IoT:",
                  content: "Understand the security challenges associated with IoT, including data encryption, authentication, and secure communication."
                }
              ]
            }
          ];
        
  return {
    boxes1,boxes2,steps,steps1,steps2,steps3,frameworks,careerPaths,fieldPath,designTools,thermalAreas,manufacturingAreas,sections,sections1
  };
    
  
}

export default Alldata