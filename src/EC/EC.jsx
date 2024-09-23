import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Alldata from '../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';
const EC = () => {
  const [activeBox, setActiveBox] = useState(null);
  
  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };
  const {fieldPath}=Alldata();
  return (
    <div className="p-6 space-y-6">
       <div className="mb-4 text-3xl font-bold"> Electronics and Communication Engineering</div>
    <div className="mb-6 text-xl">
    Electronics and Communication Engineering (ECE) is a branch of engineering that focuses on the design, development, and application of electronic devices, systems, and communication technologies. It combines principles from electrical engineering and computer science to create and manage devices and systems that transmit, receive, and process information. <br /> ECE students can explore different areas based on their interests and career goals, allowing them to specialize in a field that excites them the most. Here’s a breakdown of some of the most common and promising paths, a student needs to follow one of them:
    </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {fieldPath.map((path) => (
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
                  <p>{path.introduction}</p>
                  <h3 className="mb-2 font-semibold">What to Learn:</h3>
                  <ul className="mt-2 ml-5 list-disc">
                    {path.learn.map((item, index) => (
                      <div key={index}>
                        <h3>{item.topic}</h3>
                        {item.details.map((detail,index)=>(
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
  );
}

export default EC