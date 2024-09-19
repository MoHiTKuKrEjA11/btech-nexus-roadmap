import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
const IOSD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of steps for iOS Development
  const steps = [
    {
      id: 1,
      title: 'Step 1: Choose an IDE',
      imgSrc: "https://github.com/shadcn.png",
      description: `Choose an IDE for building applications that combines common developer tools into a single graphical user interface (GUI).`,
      resources: [
        'Xcode (More Preferable)',
        'Code Runner 2',
        'Atom',
        'AppCode',
        'Visual Studio',
      ],
    },
    {
      id: 2,
      title: 'Step 2: Choose a Programming Language',
      imgSrc: "https://github.com/shadcn.png",
      description: `Select one of the following programming languages to start developing iOS applications.`,
      resources: ['Swift (More Preferable)', 'Objective-C'],
    },
    {
      id: 3,
      title: 'Step 3: Learn a UI Framework',
      imgSrc: "https://github.com/shadcn.png",
      description: `A user interface (UI) framework is essential for designing the visual elements of your app.`,
      resources: ['SwiftUI (More Preferable)', 'UIKit', 'Storyboards'],
    },
    {
      id: 4,
      title: 'Step 4: Understand Design Patterns',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn design patterns to make changes easier to implement and maintain.`,
      resources: ['MVC (Model-View-Controller) (More Preferable)', 'MVVM', 'VIPER'],
    },
    {
      id: 5,
      title: 'Step 5: Learn Git and GitHub',
      imgSrc: "https://github.com/shadcn.png",
      description: `Understanding version control is crucial for collaborating with other developers and managing your codebase effectively.`,
      resources: ['Track changes in your code', 'GitHub, GitLab, Bitbucket'],
    },
    {
      id: 6,
      title: 'Step 6: Learn About iOS App Architecture',
      imgSrc: "https://github.com/shadcn.png",
      description: `App architecture defines how different parts of the app interact, manage data, handle user input, and communicate with external services.`,
      resources: ['MVC', 'MVVM', 'VIPER'],
    },
    {
      id: 7,
      title: 'Step 7: Explore Networking and Data Management',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn how to handle network requests using libraries like URLSession or Alamofire.`,
      resources: ['Core Data', 'SQLite', 'Realm'],
    },
    {
      id: 8,
      title: 'Step 8: Master Debugging and Testing',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn how to use Xcode's debugging tools and get hands-on with unit testing using XCTest and UI testing with XCUITest.`,
      resources: [],
    },
    {
      id: 9,
      title: 'Step 9: Understand App Deployment',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn how to configure app settings, manage certificates, and submit it to the App Store.`,
      resources: [],
    },
    {
      id: 10,
      title: 'Step 10: Build Real Projects and a Portfolio',
      imgSrc: "https://github.com/shadcn.png",
      description: `Start with small projects to understand the basics, and gradually move to more complex projects.`,
      resources: [],
    },
  ];

  return (
    <>
      <div className="p-6 space-y-4">
        <div className="mb-4 text-lg">
          iOS development involves creating applications for Apple's iOS operating system, which powers iPhones and iPads. Developers use programming languages like Swift (preferred) or Objective-C and work with Xcode, Apple's integrated development environment (IDE), to build iOS apps.
        </div>

        <div className="mb-4 text-xl font-semibold">
          Steps to Become an iOS Developer:
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => handleBoxClick(step.id)}
              className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
              <h2 className="text-lg font-bold">{step.title}</h2>

              {/* Description always visible */}
              <Avatar className={` items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === step.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
                <AvatarImage src={step.imgSrc} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* Additional content revealed when box is clicked */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeBox === step.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {activeBox === step.id && (
                  <div>
                    <p>{step.description}</p>
                    {step.resources.length > 0 && (
                      <ul className="mt-2">
                        {step.resources.map((resource) => (
                          <li key={step.id} className="text-gray-600">
                            {resource}
                          </li>
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
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </div>
      </div>
    </>
  );
};

export default IOSD;
