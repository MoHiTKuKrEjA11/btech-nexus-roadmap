import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import allData from './../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';
const BD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of steps for Blockchain Development
  const {steps1}=allData()
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
          {steps1.map((step) => (
            <div
              key={step.id}
              className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
              <FaCircleInfo
              className={`absolute w-6 h-6 bottom-3 right-3 ${activeBox === step.id ? 'z-10' : 'z-10'}`}
              onClick={() => handleBoxClick(step.id)}
              />
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
                    <ul className="mt-2">
                      {step.resources.map((resource, index) => (
                        <li key={index} className="text-gray-600">
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {resource.label}
                          </a>
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
