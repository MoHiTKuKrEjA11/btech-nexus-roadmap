import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Alldata from '../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';

const IOD = () => {
  const [activeBox, setActiveBox] = useState(null);
  
  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };
  const {sections}=Alldata();
  return (
    <div className="p-6 space-y-4">
      <div className="mb-6 text-xl">
        Pursuing interdisciplinary fields allows mechanical engineering students to broaden their skill sets and explore emerging technologies and industries. Here are three popular interdisciplinary fields: Mechatronics and Robotics, Renewable Energy, and Biomechanics and Biomedical Engineering. Each of these combines core mechanical engineering principles with specialized knowledge from other domains, leading to innovative and impactful applications. Here is the brief detail of each field:
      </div>

      <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {sections.map((path) => (
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
                  <h2>{path.desc}</h2>
                  <h2>Essential Things to Learn:</h2>
                  <div className="mt-2 ml-5 ">
                    {path.essentials.map((item, index) => (
                      <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.details}</p>
                      </div>
                    ))}
                  </div>
                  <h2>Potential Career Opportunities:</h2>
                  <ul className="pl-5 space-y-2 list-disc">
                  {path.careers.map((career, i) => (
                    <li key={i}>{career}</li>
                  ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p>A student needs to follow only one field from the given 3 fields according to their choice.</p>
        <p className="mt-4">
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </p>
      </div>
    </div>
  )
}

export default IOD
