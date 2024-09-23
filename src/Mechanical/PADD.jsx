import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Alldata from '../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';

const PADD = () => {
  const [activeBox, setActiveBox] = useState(null);
  
  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };
  // Define the content as arrays
  const {sections1}=Alldata();

  return (
    <div className="p-6 space-y-6">
      {/* Introduction */}
      <div className="mb-6 text-xl">
        This field focuses on leveraging programming skills and computational tools to solve complex engineering problems, automate calculations, analyze data, and design smart, connected systems. As mechanical engineering increasingly intersects with digital technology, skills in programming, data analysis, and IoT (Internet of Things) are becoming vital.
        <br />
        <br />
        <span className="font-semibold">Key Areas to Learn:</span>
      </div>

      {/* Mapping over the sections */}
      <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-1">
        {sections1.map((path) => (
          <div
            key={path.id}
            className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
          >
            <FaCircleInfo
              className="absolute w-6 h-6 bottom-3 right-3"
              onClick={() => handleBoxClick(path.id)}
              />
            <h2 className="text-lg font-bold">{path.title}</h2>

            {/* Avatar for image */}
            <Avatar className={`items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === path.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
              <AvatarImage src={path.imgSrc} alt={path.title} />
              <AvatarFallback>CE</AvatarFallback>
            </Avatar>

            {/* Additional content revealed when box is clicked */}
            <div className={`transition-all duration-300 ease-in-out ${activeBox === path.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              {activeBox === path.id && (
                <div>
                  <h2>{path.content}</h2>
                  <div className="mt-2 ml-5 ">
                    {path.subsections.map((item, index) => (
                      <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>


      {/* Conclusion */}
      <div className="mt-6">
        <p>
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </p>
      </div>
    </div>
  );
}

export default PADD;
