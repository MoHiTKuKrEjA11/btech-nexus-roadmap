import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Alldata from './../AllData/Alldata';
import { FaCircleInfo } from "react-icons/fa6";

const DSA = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  const { steps4 } = Alldata();

  return (
    <div className="p-6 space-y-4">
      <div className="mb-4 text-lg">
        Data Structures and Algorithms (DSA) are about organizing and storing data efficiently (data structures) and the steps used to solve problems (algorithms). Data structures help manage and arrange data in formats like arrays, linked lists, stacks, and trees, while algorithms give us the logic to process, search, and manipulate data. Together, they are the foundation of problem-solving in computer science, helping us code efficiently, optimize performance, and build scalable software.
      </div>

      <div className="mb-4 text-xl font-semibold">To get better at DSA, follow these steps:</div>

      <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
        {steps4.map((box) => (
          <div
            key={box.id}
            className={`p-4 transition-all duration-300 ease-in-out hover:bg-violet-100 bg-white border border-gray-300 rounded-md shadow-md cursor-pointer overflow-hidden ${activeBox === box.id ? 'active' : ''}`}
          >
            <FaCircleInfo
              onClick={() => handleBoxClick(box.id)}
              className={`absolute w-6 h-6 bottom-3 right-3 ${activeBox === box.id ? 'z-10' : ''}`}
            />
            <h2 className="text-lg font-bold">{box.title}</h2>

            {/* Description transition */}
            <Avatar className={`items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
              <AvatarImage src={box.imgSrc} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className={`transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              {activeBox === box.id && (
                <div>
                  <ul className="pl-5 list-disc">
                    {box.description.map((resource, i) => (
                      <li key={i}>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DSA;
