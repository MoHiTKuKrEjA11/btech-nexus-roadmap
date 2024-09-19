import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const BD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of steps for Blockchain Development
  const steps = [
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

  return (
    <>
      <div className="p-6 space-y-4">
        <div className="mb-4 text-lg">
          A Blockchain Developer is a professional who specializes in designing, implementing, and maintaining blockchain-based systems and applications. Blockchain technology underpins cryptocurrencies like Bitcoin and Ethereum but has broader applications in various sectors such as finance, supply chain, and more.
        </div>

        <div className="mb-4 text-xl font-semibold">
          Steps to Become a Blockchain Developer:
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => handleBoxClick(step.id)}
              className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
              <h2 className="text-lg font-bold">{step.title}</h2>

              {/* Avatar for image */}
              <Avatar className={`items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === step.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={step.imgSrc} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* Additional content revealed when box is clicked */}
              <div className={`transition-all duration-300 ease-in-out ${activeBox === step.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeBox === step.id && (
                  <div>
                    <p>{step.description}</p>
                    {step.resources.length > 0 && (
                      <ul className="mt-2 ml-5 list-disc">
                        {step.resources.map((resource, index) => (
                          <li key={index} className="text-gray-600">
                            {resource}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 text-lg">
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </div>
      </div>
    </>
  );
};

export default BD;
