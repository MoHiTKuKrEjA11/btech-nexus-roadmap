import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import allData from './../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';
const CrossPD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of frameworks for Cross-Platform Development
 const {frameworks}=allData();

  return (
    <>
      <div className="p-6 space-y-4">
        <div className="mb-6 text-xl">
          Cross-platform mobile development is an approach that allows you to build a single mobile application that runs seamlessly on multiple operating systems. In cross-platform apps, some or even all of the source code can be shared. This means that developers can create and deploy mobile applications that work on both Android and iOS without having to rewrite the code for each platform.
        </div>

        <div className="mb-4 text-xl font-semibold">
          Frameworks Available for Building Cross-Platform Apps:
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-2">
          {frameworks.map((framework) => (
            <div
              key={framework.id}
              className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
              <FaCircleInfo
              className={`absolute w-6 h-6 bottom-3 right-3 ${activeBox === framework.id ? 'z-10' : 'z-10'}`}
              onClick={() => handleBoxClick(framework.id)}
              />
              <h2 className="text-lg font-bold">{framework.title}</h2>

              {/* Image always visible */}
              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === framework.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={framework.imgSrc} alt={framework.title} />
                <AvatarFallback>CP</AvatarFallback>
              </Avatar>

              {/* Additional content revealed when box is clicked */}
              <div className={`transition-all duration-300 ease-in-out ${activeBox === framework.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeBox === framework.id && (
                  <p>{framework.description}</p>
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
}

export default CrossPD;
