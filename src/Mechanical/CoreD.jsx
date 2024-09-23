import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Alldata from '../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';
const CoreD = () => {
  const [activeBox, setActiveBox] = useState(null);
  
  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  // Array for Design Engineering tools
  const{manufacturingAreas,thermalAreas,designTools}=Alldata();
  return (
    <div className="p-6 space-y-4">
      <div className="mb-6 text-xl">
        Core Mechanical Fields refer to the fundamental areas of study and practice within the discipline of mechanical engineering. These fields encompass the essential concepts, principles, and skills that are foundational to understanding and solving engineering problems related to mechanical systems, materials, and processes. <br /><br />
        This field consists of various options to pursue, they are:
      </div>
       {/* Steps Grid */}
       <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {designTools.map((path) => (
          <div
            key={path.id}
            onClick={() => handleBoxClick(path.id)}
            className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
          >
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
                  <h2>{path.desc}</h2>
                  <h2>{path.major}</h2>
                  <ul className="mt-2 ml-5 list-disc">
                    {path.majorArea.map((item, index) => (
                      <div key={index}>
                        <h2>{item.name}</h2>
                        <h2>{item.description}</h2>
                        {item.pros.map((detail,index)=>(
                          <li key={index} className="text-gray-600">
                          {detail}
                        </li>
                        ))}
                        <h2>{item.consider}</h2>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

       {/* Steps Grid */}
       <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {manufacturingAreas.map((path) => (
          <div
            key={path.id}
            className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
          >
            <FaCircleInfo
              className={`absolute w-6 h-6 bottom-3 right-3 ${activeBox === path.id ? 'z-10' : 'z-10'}`}
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
                  <p>{path.desc}</p>
                  <h3 className="mb-2 font-semibold">{path.keya}</h3>
                  <ul className="mt-2 ml-5 list-disc">
                    {path.major.map((item, index) => (
                      <div key={index}>
                        <h3>{item.topic}</h3>
                        {item.description.map((data,index)=>(
                          <div key={index} className="text-gray-600">
                          <h3>{data.title}</h3>
                          <p>{data.detail}</p>
                        </div>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

       {/* Steps Grid */}
       <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {thermalAreas.map((path) => (
          <div
            key={path.id}
            onClick={() => handleBoxClick(path.id)}
            className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
          >
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
                  <p>{path.desc}</p>
                  <h3 className="mb-2 font-semibold">{path.special}</h3>
                  <ul className="mt-2 ml-5 list-disc">
                    {path.major.map((item, index) => (
                      <div key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        {item.applications.map((detail,index)=>(
                          <li key={index} className="text-gray-600">
                          {detail}
                        </li>
                        ))}
                      </div>
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
    )
}

export default CoreD
