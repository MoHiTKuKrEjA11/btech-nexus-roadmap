import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import allData from './../AllData/Alldata';
import { FaCircleInfo } from "react-icons/fa6";

const WebD = () => {

  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box
  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of boxes with title, description, and resources
  const {boxes1,boxes2}=allData();
    


  return (
    <>
      {/* Front-End Development */}
      <div className="p-6 space-y-4">
        <div className="mb-4 text-lg">
          Front-end web development involves creating and managing the visual aspects of a website or web application that users interact with directly. This includes designing and implementing the layout, user interface (UI), and overall look and feel of a website.
        </div>

        <div className="mb-4 text-xl font-semibold">For Front-End Developer:</div>

        {/* Steps for Front-End Developer */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {boxes1.map((box) => (
            <div
              key={box.id}
              className={`box p-4 transition-all duration-300 ease-in-out hover:bg-violet-100  bg-white border border-gray-300 rounded-md shadow-md cursor-pointer overflow-hidden ${activeBox === box.id ? 'active' : ''}`}
              >
              <FaCircleInfo
              onClick={() => handleBoxClick(box.id)}
              className={`absolute w-6 h-6 bottom-3 right-3 ${activeBox === box.id ? 'z-10' : 'z-10'}`}
              />
              <h2 className="text-lg font-bold">{box.title}</h2>

              {/* Description transition */}
              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={box.imgSrc} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className={`content transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeBox === box.id && (
                  <div>
                    <p>{box.description}</p>
                    <ul>
                      {box.resources.map((resource, i) => (
                        <li key={i}>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            {resource.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Back-End Development */}
        <div className="mt-8 text-lg">
          Back-end web development focuses on the server-side of web applications and involves creating, managing, and maintaining the databases, server logic, and application programming interfaces (APIs) that drive the functionality of a website or web application.
        </div>

        <div className="mb-4 text-xl font-semibold">For Back-End Developer:</div>

        {/* Steps for Back-End Developer */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {boxes2.map((box) => (
            <div
              key={box.id}
              className={`box p-4 transition-all duration-300 ease-in-out hover:bg-violet-100  bg-white border border-gray-300 rounded-md shadow-md cursor-pointer overflow-hidden ${activeBox === box.id ? 'active' : ''}`}
            >
              <FaCircleInfo 
              className="absolute w-6 h-6 bottom-3 right-3"
              onClick={() => handleBoxClick(box.id)}
              />
              <h2 className="text-lg font-bold">{box.title}</h2>

              {/* Description transition */}
              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={box.imgSrc} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className={`content transition-all duration-300 ease-in-out ${activeBox === box.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeBox === box.id && (
                  <div>
                    <p>{box.description}</p>
                    <ul>
                      {box.resources.map((resource, i) => (
                        <li key={i}>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                          >
                            {resource.label}
                          </a>
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
    </>

  )
}

export default WebD