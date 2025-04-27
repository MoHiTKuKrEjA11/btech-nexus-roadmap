import React from 'react'

const Alldata = () => {
  const boxes1 = [
    {
        id: 1,
        title: 'Step 1: Learn HTML',
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML logo
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
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // CSS logo
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
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript logo
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
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo
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
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", // Git logo
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
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", // Sass logo
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
    imgSrc: "data:image/png;base64,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", // HTTP logo
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
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", // Node.js logo
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
    imgSrc: "https://thumbs.dreamstime.com/b/database-icon-logo-modern-line-style-high-quality-black-outline-pictogram-web-site-design-mobile-apps-vector-81369618.jpg", // MySQL logo
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
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", // Express.js logo
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
    imgSrc: "https://i.postimg.cc/W1fdyG69/download.jpg", // AWS logo
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
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Xcode_Icon.png", // Xcode icon
    description: `Choose an IDE for building applications that combines common developer tools into a single graphical user interface (GUI).`,
    resources: [
      { label: 'Xcode (More Preferable)', link: 'https://developer.apple.com/xcode/' },
      { label: 'Code Runner 2', link: 'https://coderunnerapp.com/' },
      { label: 'Atom', link: 'https://atom.io/' },
      { label: 'AppCode', link: 'https://www.jetbrains.com/objc/' },
      { label: 'Visual Studio', link: 'https://visualstudio.microsoft.com/' },
    ],
  },
  {
    id: 2,
    title: 'Step 2: Choose a Programming Language',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg", // Swift logo
    description: `Select one of the following programming languages to start developing iOS applications.`,
    resources: [
      { label: 'Swift (More Preferable)', link: 'https://swift.org/' },
      { label: 'Objective-C', link: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html' },
    ],
  },
  {
    id: 3,
    title: 'Step 3: Learn a UI Framework',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/35/Apple_SwiftUI_logo.png", // SwiftUI logo
    description: `A user interface (UI) framework is essential for designing the visual elements of your app.`,
    resources: [
      { label: 'SwiftUI (More Preferable)', link: 'https://developer.apple.com/xcode/swiftui/' },
      { label: 'UIKit', link: 'https://developer.apple.com/documentation/uikit' },
      { label: 'Storyboards', link: 'https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/Introduction/Introduction.html' },
    ],
  },
  {
    id: 4,
    title: 'Step 4: Understand Design Patterns',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Design_Patterns_Book_Cover.jpg", // Design patterns book cover
    description: `Learn design patterns to make changes easier to implement and maintain.`,
    resources: [
      { label: 'MVC (Model-View-Controller) (More Preferable)', link: 'https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html' },
      { label: 'MVVM', link: 'https://academy.realm.io/posts/marius-constantin-mvvm-design-pattern-ios-swift/' },
      { label: 'VIPER', link: 'https://cheesecakelabs.com/blog/ios-project-architecture-using-viper/' },
    ],
  },
  {
    id: 5,
    title: 'Step 5: Learn Git and GitHub',
    imgSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", // Git logo
    description: `Understanding version control is crucial for collaborating with other developers and managing your codebase effectively.`,
    resources: [
      { label: 'Git Basics', link: 'https://git-scm.com/doc' },
      { label: 'GitHub', link: 'https://docs.github.com/en/get-started' },
      { label: 'GitLab', link: 'https://docs.gitlab.com/' },
      { label: 'Bitbucket', link: 'https://bitbucket.org/product' },
    ],
  },
  {
    id: 6,
    title: 'Step 6: Learn About iOS App Architecture',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Mobile-application-architecture-diagram.png", // General app architecture
    description: `App architecture defines how different parts of the app interact, manage data, handle user input, and communicate with external services.`,
    resources: [
      { label: 'MVC', link: 'https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html' },
      { label: 'MVVM', link: 'https://academy.realm.io/posts/marius-constantin-mvvm-design-pattern-ios-swift/' },
      { label: 'VIPER', link: 'https://cheesecakelabs.com/blog/ios-project-architecture-using-viper/' },
    ],
  },
  {
    id: 7,
    title: 'Step 7: Explore Networking and Data Management',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Database-icon.png", // Database icon
    description: `Learn how to handle network requests using libraries like URLSession or Alamofire.`,
    resources: [
      { label: 'Core Data', link: 'https://developer.apple.com/documentation/coredata' },
      { label: 'SQLite', link: 'https://www.sqlite.org/docs.html' },
      { label: 'Realm', link: 'https://realm.io/docs/' },
    ],
  },
  {
    id: 8,
    title: 'Step 8: Master Debugging and Testing',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Xcode-icon-debugging.png", // Debugging icon
    description: `Learn how to use Xcode's debugging tools and get hands-on with unit testing using XCTest and UI testing with XCUITest.`,
    resources: [
      { label: 'XCTest Framework', link: 'https://developer.apple.com/documentation/xctest' },
      { label: 'UI Testing with XCUITest', link: 'https://developer.apple.com/documentation/xcode/testing-your-app-s-ui-with-ui-tests' },
    ],
  },
  {
    id: 9,
    title: 'Step 9: Understand App Deployment',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8e/IOS_App_Store_Icon.png", // App Store icon
    description: `Learn how to configure app settings, manage certificates, and submit it to the App Store.`,
    resources: [
      { label: 'App Store Submission Guide', link: 'https://developer.apple.com/app-store/submit/' },
    ],
  },
  {
    id: 10,
    title: 'Step 10: Build Real Projects and a Portfolio',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Portfolio-icon.png", // Portfolio icon
    description: `Start with small projects to understand the basics, and gradually move to more complex projects.`,
    resources: [
      { label: 'Building iOS Apps', link: 'https://developer.apple.com/documentation/' },
      { label: 'Portfolio Tips', link: 'https://www.indeed.com/career-advice/resumes-cover-letters/how-to-create-a-portfolio' },
    ],
  },
];

const steps1 = [
  {
    id: 1,
    title: 'Step 1: Learn the Fundamentals of Blockchain Technology',
    imgSrc: "https://www.blockchain.com/static/img/icon_blockchain_blue.svg", 
    description: `Understand the core concepts of blockchain technology, including distributed ledger technology, cryptographic hash functions, consensus mechanisms, and smart contracts.`,
    resources: [
      { label: 'Introduction to Blockchain', link: 'https://www.ibm.com/topics/what-is-blockchain' },
      { label: 'Consensus Mechanisms', link: 'https://consensys.net/knowledge-base/consensus-algorithms-explained/' },
      { label: 'Smart Contracts Overview', link: 'https://ethereum.org/en/developers/docs/smart-contracts/' },
      { label: 'Public vs Private Blockchains', link: 'https://www.geeksforgeeks.org/public-private-consortium-and-hybrid-blockchains/' },
    ],
  },
  {
    id: 2,
    title: 'Step 2: Learn Cryptography and Security Principles',
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Key_icon.svg/512px-Key_icon.svg.png",
    description: `Study cryptography and security principles essential for blockchain technology, including symmetric and asymmetric encryption, hash functions, and digital signatures.`,
    resources: [
      { label: 'Cryptography Basics', link: 'https://cryptography.io/en/latest/' },
      { label: 'Hash Functions Explained', link: 'https://www.cloudflare.com/learning/ssl/how-does-ssl-work/' },
      { label: 'Digital Signatures Overview', link: 'https://www.docusign.com/blog/ds-basics-digital-signatures' },
      { label: 'Blockchain Security', link: 'https://www.okta.com/identity-101/blockchain-security/' },
    ],
  },
  {
    id: 3,
    title: 'Step 3: Choose a Blockchain Platform to Specialize In',
    imgSrc: "https://ethereum.org/static/28214bb453f554a45d51aa4c272da6f1/31987/eth-diamond-purple.png", 
    description: `Select a blockchain platform to focus on based on your interests and the type of applications you want to build.`,
    resources: [
      { label: 'Ethereum Documentation', link: 'https://ethereum.org/en/developers/' },
      { label: 'Solana Developer Resources', link: 'https://solana.com/developers' },
      { label: 'Hyperledger Fabric Docs', link: 'https://hyperledger-fabric.readthedocs.io/en/release-2.2/' },
      { label: 'Polkadot Developer Hub', link: 'https://polkadot.network/developers/' },
    ],
  },
  {
    id: 4,
    title: 'Step 4: Learn a Smart Contract Programming Language',
    imgSrc: "https://soliditylang.org/static/logo-4a4d3dfc.svg",
    description: `Get proficient in programming languages used for writing smart contracts on various blockchain platforms.`,
    resources: [
      { label: 'Learn Solidity', link: 'https://soliditylang.org/' },
      { label: 'Vyper Documentation', link: 'https://vyper.readthedocs.io/en/stable/' },
      { label: 'Rust for Solana', link: 'https://docs.solana.com/developing/on-chain-programs/developing-rust' },
    ],
  },
  {
    id: 5,
    title: 'Step 5: Learn Blockchain Development Tools and Frameworks',
    imgSrc: "https://trufflesuite.com/assets/images/logo.svg",
    description: `Familiarize yourself with development tools and frameworks that help in building and deploying blockchain applications.`,
    resources: [
      { label: 'Truffle Suite', link: 'https://trufflesuite.com/' },
      { label: 'Hardhat Documentation', link: 'https://hardhat.org/' },
      { label: 'Remix IDE', link: 'https://remix.ethereum.org/' },
      { label: 'Ganache', link: 'https://trufflesuite.com/ganache/' },
      { label: 'MetaMask', link: 'https://metamask.io/' },
    ],
  },
  {
    id: 6,
    title: 'Step 6: Understand Decentralized Applications (dApps) and Front-End Integration',
    imgSrc: "https://miro.medium.com/max/1400/1*IPHPb1Aj8c_TaVHe7tOO1g.png",
    description: `Learn about the architecture of dApps and how to integrate them with front-end applications.`,
    resources: [
      { label: 'What are dApps?', link: 'https://ethereum.org/en/developers/docs/dapps/' },
      { label: 'Web3.js Documentation', link: 'https://web3js.readthedocs.io/' },
      { label: 'Ethers.js Documentation', link: 'https://docs.ethers.io/v5/' },
      { label: 'Learn React.js', link: 'https://reactjs.org/' },
    ],
  },
  {
    id: 7,
    title: 'Step 7: Learn Blockchain APIs and SDKs',
    imgSrc: "https://miro.medium.com/max/1400/1*nbQBBkNwN--95aCN5nPeqg.png",
    description: `Explore APIs and SDKs that allow interaction with blockchain networks and services.`,
    resources: [
      { label: 'Web3.js Overview', link: 'https://web3js.readthedocs.io/' },
      { label: 'Ethers.js Overview', link: 'https://docs.ethers.io/v5/' },
      { label: 'Blockchain.com API', link: 'https://www.blockchain.com/api' },
    ],
  },
  {
    id: 8,
    title: 'Step 8: Learn About Decentralized Finance (DeFi)',
    imgSrc: "https://cryptoslate.com/wp-content/uploads/2020/10/defi-lending-and-borrowing.jpg",
    description: `Understand the concepts and protocols behind DeFi and how to interact with DeFi platforms.`,
    resources: [
      { label: 'Introduction to DeFi', link: 'https://ethereum.org/en/defi/' },
      { label: 'Liquidity Pools Explained', link: 'https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi' },
      { label: 'DeFi Protocols Overview', link: 'https://defipulse.com/' },
    ],
  },
  {
    id: 9,
    title: 'Step 9: Master Blockchain Testing and Security Best Practices',
    imgSrc: "https://user-images.githubusercontent.com/15111785/95895290-f21fd080-0d53-11eb-9407-bb02c167a486.png",
    description: `Learn how to test and secure your blockchain applications to ensure robustness and safety.`,
    resources: [
      { label: 'MythX Security Analysis', link: 'https://mythx.io/' },
      { label: 'Slither Solidity Analysis', link: 'https://github.com/crytic/slither' },
      { label: 'Blockchain Testing Best Practices', link: 'https://consensys.net/blog/security/how-to-test-your-smart-contracts/' },
    ],
  },
  {
    id: 10,
    title: 'Step 10: Learn About Consensus Algorithms and Protocols',
    imgSrc: "https://cryptopotato.com/wp-content/uploads/2022/01/Consensus_Algorighms.jpg",
    description: `Understand various consensus algorithms and protocols used in blockchain networks.`,
    resources: [
      { label: 'Proof of Work (PoW)', link: 'https://www.investopedia.com/terms/p/proof-work.asp' },
      { label: 'Proof of Stake (PoS)', link: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/' },
      { label: 'Delegated Proof of Stake (DPoS)', link: 'https://cointelegraph.com/defi-101/what-is-delegated-proof-of-stake-dpos' },
    ],
  },
  {
    id: 11,
    title: 'Step 11: Get Hands-On with Blockchain Development Projects',
    imgSrc: "https://miro.medium.com/max/1400/1*d7gceheQUbNVgH3yZkh9bA.png",
    description: `Apply your skills by working on real blockchain projects and contributing to open-source initiatives.`,
    resources: [
      { label: 'How to Create a Cryptocurrency', link: 'https://www.makeuseof.com/how-to-create-your-own-cryptocurrency/' },
      { label: 'Simple dApp Tutorial', link: 'https://ethereum.org/en/developers/tutorials/build-a-dapp/' },
      { label: 'Contribute to Open-Source Blockchain', link: 'https://opensource.guide/how-to-contribute/' },
    ],
  },
  {
    id: 12,
    title: 'Step 12: Explore Advanced Topics and Stay Updated',
    imgSrc: "https://miro.medium.com/max/700/1*v9fHruJFoVzhg8Zo1J6WlA.jpeg",
    description: `Stay informed about the latest advancements in blockchain technology and explore advanced topics.`,
    resources: [
      { label: 'Layer 2 Solutions', link: 'https://ethereum.org/en/layer-2/' },
      { label: 'Cross-Chain Interoperability', link: 'https://www.consensys.net/blog/blockchain-explained/what-is-blockchain-interoperability/' },
      { label: 'Learn About DAOs', link: 'https://ethereum.org/en/dao/' },
      { label: 'Blockchain Blogs and News', link: 'https://decrypt.co/' },
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

          const steps4 = [
            {
              id:1,
              title: 'Step 1: Pick a programming language',
              description: ['C++', 'Java', 'Python', 'JavaScript', 'Ruby'],
            },
            {
              id:2,
              title: 'Step 2: Learn the Syntax',
              description: [
                'Declare variables',
                'Call functions',
                'Use control flow statements',
              ],
            },
            {
              id:3,
              title: 'Step 3: Learn the basics of Object-Oriented Programming (OOP)',
              description: [
                'OOP is a way of organizing code using “objects.” Objects are instances of classes, which define their attributes and methods. This helps you model real-world scenarios in programming.',
              ],
            },
            {
              id:4,
              title: 'Step 4: Understand Pseudo Code',
              description: [
                'Pseudo code is a plain language description of the steps in an algorithm. It’s meant for people to understand, not machines. You can use it to describe how a program will work without worrying about syntax.',
              ],
            },
            {
              id:5,
              title: 'Step 5: Learn about Data Structures',
              description: [
                'Data structures are ways to store and organize data efficiently, making it easier to use. They help manage large amounts of data, like in databases or search engines.',
              ],
            },
            {
              id:6,
              title: 'Step 6: Learn about Arrays',
              description: [
                'Array is a data structure that stores a collection of similar elements, such as numbers or strings, under a single variable name. Arrays are useful when working with multiple values of the same data type.',
              ],
            },
            {
              id:7,
              title: 'Step 7: Learn about Strings',
              description: [
                'Strings store sequences of characters, usually as arrays of bytes. They are an important data type in programming.',
              ],
            },
            {
              id:8,
              title: 'Step 8: Learn about Linked Lists',
              description: [
                'Linked Lists store data in nodes, each containing a data field and a link to the next node.',
              ],
            },
            {
              id:9,
              title: 'Step 9: Learn about Stacks',
              description: [
                'Stacks are data structures where you can only add or remove elements from the top. They follow LIFO (Last In First Out) order.',
              ],
            },
            {
              id:10,
              title: 'Step 10: Learn about Queues',
              description: [
                'Queues are like lines: elements are added at the back and removed from the front.',
              ],
            },
            {
              id:11,
              title: 'Step 11: Learn about Hash Tables',
              description: [
                'Hash Tables allow fast access to data using a key. They calculate an index where the data is stored using a hash function.',
              ],
            },
            {
              id:12,
              title: 'Step 12: Learn about Computational Complexity',
              description: [
                'This involves understanding how much time and memory an algorithm needs to solve a problem.',
              ],
            },
            {
              id:13,
              title: 'Step 13: Learn Sorting Algorithms',
              description: [
                'Sorting algorithms arrange data in order. Common ones include Bubble Sort, Selection Sort, Merge Sort, Quick Sort, etc.',
              ],
            },
            {
              id:14,
              title: 'Step 14: Learn Searching Algorithms',
              description: [
                'Search algorithms help find items in data. Two main types are Linear Search and Binary Search.',
              ],
            },
            {
              id:15,
              title: 'Step 15: Learn about Trees',
              description: [
                'A tree is a non-linear data structure with nodes connected by edges. Each node has a parent and can have multiple children.',
              ],
            },
            {
              id:16,
              title: 'Step 16: Learn about Types of Trees',
              description: [
                'Binary Tree',
                'Binary Search Tree',
                'AVL Tree',
                'B-Tree',
                'm-ary Tree',
              ],
            },
            {
              id:17,
              title: 'Step 17: Learn Tree Traversal',
              description: [
                'Inorder Traversal',
                'Preorder Traversal',
                'Postorder Traversal',
              ],
            },
            {
              id:18,
              title: 'Step 18: Searching in Trees',
              description: [
                'Breadth-First Search (BFS)',
                'Depth-First Search (DFS)',
              ],
            },
            {
              id:19,
              title: 'Step 19: Learn about Graphs',
              description: [
                'A graph is a set of vertices connected by edges. There are two types: Directed Graph and Undirected Graph.',
              ],
            },
            {
              id:20,
              title: 'Step 20: Searching in Graphs',
              description: [
                'Common search methods in graphs: Depth-First Search (DFS), Breadth-First Search (BFS)',
              ],
            },
            {
              id:21,
              title: 'Step 21: Learn Graph Algorithms',
              description: [
                'Dijkstra’s Algorithm',
                'Bellman-Ford',
                'Prim’s Algorithm',
                'Kruskal’s Algorithm',
              ],
            },
            {
              id:22,
              title: 'Step 22: Learn Advanced Data Structures',
              description: [
                'Trie',
                'Segment Trees',
                'Fenwick Trees',
                'Disjoint Sets',
              ],
            },
            {
              id:23,
              title: 'Step 23: Learn Problem-Solving Techniques',
              description: [
                'Brute force',
                'Greedy',
                'Divide and Conquer',
                'Dynamic Programming',
                'Recursion',
                'Backtracking',
              ],
            },
            {
              id:24,
              title: 'Final Step',
              description: [
                'With the knowledge and expertise you have gained, you are now ready to practice solving problems on platforms like LeetCode, HackerRank, and CodeChef. Participate in weekly contests to improve your skills. Happy Learning and All the Best for Your Bright Future! 🚀',
              ],
            },
          ];
        
  return {
    boxes1,boxes2,steps,steps1,steps2,steps3,frameworks,careerPaths,fieldPath,designTools,thermalAreas,manufacturingAreas,sections,sections1,steps4
  };
    
  
}

export default Alldata