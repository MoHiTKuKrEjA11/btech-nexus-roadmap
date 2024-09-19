import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const CrossPD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of frameworks for Cross-Platform Development
  const frameworks = [
    {
      id: 1,
      title: 'React Native',
      imgSrc: "https://github.com/shadcn.png",
      description: `React Native, developed by Facebook, allows you to build mobile apps using JavaScript and React. It provides a set of components for building the UI and enables developers to use a single codebase for both Android and iOS apps.`,
    },
    {
      id: 2,
      title: 'Flutter',
      imgSrc: "https://github.com/shadcn.png",
      description: `Flutter, developed by Google, is an open-source UI software development kit that allows developers to create high-performance, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.`,
    },
    {
      id: 3,
      title: 'Kotlin Multiplatform',
      imgSrc: "https://github.com/shadcn.png",
      description: `Kotlin Multiplatform, created by JetBrains, enables developers to share code between multiple platforms, including Android, iOS, web, and desktop applications. It allows you to write platform-specific code only when necessary, leveraging shared logic for most of the app.`,
    },
    {
      id: 4,
      title: '.NET MAUI',
      imgSrc: "https://github.com/shadcn.png",
      description: `.NET MAUI is a cross-platform framework developed by Microsoft that allows developers to create native apps for Android, iOS, macOS, and Windows with a single codebase using C#. It is an evolution of Xamarin.Forms and offers enhanced performance and flexibility.`,
    },
  ];

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
              onClick={() => handleBoxClick(framework.id)}
              className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
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
