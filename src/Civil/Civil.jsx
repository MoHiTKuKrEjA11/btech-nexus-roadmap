import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Alldata from '../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';

const Civil = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  const {careerPaths} =Alldata(); 

  return (
    <div className="p-6 space-y-6">
      <div className="mb-4 text-3xl font-bold">Civil Engineering</div>

      <div className="mb-6 text-xl">
        Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and natural built environment. This includes infrastructure such as roads, bridges, buildings, water supply systems, and waste management facilities.
        <br />
        <br />
        Here are some career paths and skill-building opportunities outside of traditional academic coursework:
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {careerPaths.map((path) => (
          <div
            key={path.id}
            className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
          >
            <FaCircleInfo 
              className="absolute w-6 h-6 bottom-3 right-3"
              onClick={() => handleBoxClick(path.id)}
              />
            <h2 className="text-lg font-bold">{path.id} : {path.title}</h2>

            {/* Avatar for image */}
            <Avatar className={`items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === path.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
              <AvatarImage src={path.imgSrc} alt={path.title} />
              <AvatarFallback>CE</AvatarFallback>
            </Avatar>

            {/* Additional content revealed when box is clicked */}
            <div className={`transition-all duration-300 ease-in-out ${activeBox === path.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              {activeBox === path.id && (
                <div>
                  <p>{path.intro}</p>
                  <h3 className="mb-2 font-semibold">What to Learn:</h3>
                  <ul className="mt-2 ml-5 list-disc">
                    {path.learn.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item}
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
  );
};

export default Civil;
