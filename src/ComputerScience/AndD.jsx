import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import allData from './../AllData/Alldata';
import { FaCircleInfo } from 'react-icons/fa6';
const AndD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of steps for Android Development
  const {steps3}=allData();

  return (
    <>
      <div className="p-6 space-y-4">
        <div className="mb-4 text-lg">
          Android development is the process of creating applications for the Android operating system, which is used by a wide range of mobile devices including smartphones and tablets. Developers use programming languages such as Kotlin (preferred) or Java to build Android apps.
        </div>

        <div className="mb-4 text-xl font-semibold">Steps to Become an Android Developer:</div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {steps3.map((step) => (
            <div
              key={step.id}
              className={`relative p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
              <FaCircleInfo
              className={`absolute w-6 h-6 bottom-3 right-3 ${activeBox === step.id ? 'z-10' : 'z-10'}`}
              onClick={() => handleBoxClick(step.id)}
              />
              <h2 className="text-lg font-bold">{step.title}</h2>

              {/* Image for each step */}
              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === step.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
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
                          <li key={index} className="text-gray-600">{resource}</li>
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
          Now you are ready to publish your app to the Google Play Store.
        </div>

        <div className="mt-8 text-lg font-semibold">
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </div>
      </div>
    </>
  );
};

export default AndD;
