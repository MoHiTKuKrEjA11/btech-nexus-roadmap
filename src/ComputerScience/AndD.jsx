import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AndD = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of steps for Android Development
  const steps = [
    {
      id: 1,
      title: 'Step 1: Understand the Basics of Android Development',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn about the Android ecosystem, including the Android operating system, the lifecycle of an Android app, and how Android devices interact with apps. This foundational knowledge is crucial for understanding the tools and languages you will use.',
      resources: [],
    },
    {
      id: 2,
      title: 'Step 2: Choose a Programming Language',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Android development primarily uses two languages: Kotlin (More Preferable) or Java.',
      resources: ['Kotlin (More Preferable)', 'Java'],
    },
    {
      id: 3,
      title: 'Step 3: Take an Overview of Development IDE',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Start with Android Studio, the official IDE for Android development, offering tools like code editors, emulators, and debugging tools.',
      resources: ['Android Studio'],
    },
    {
      id: 4,
      title: 'Step 4: Learn the Basics of Your Chosen Language',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn the syntax, OOP concepts like inheritance, encapsulation, and polymorphism, which are crucial for Android development.',
      resources: [],
    },
    {
      id: 5,
      title: 'Step 5: Understand the Basics of App Development',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn about Android app components like Activities, Services, Broadcast Receivers, and Content Providers.',
      resources: [],
    },
    {
      id: 6,
      title: 'Step 6: Learn About Gradle',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Gradle is a build automation tool used in Android Studio for managing dependencies, packaging apps, and automating repetitive tasks.',
      resources: [],
    },
    {
      id: 7,
      title: 'Step 7: Learn About Jetpack Compose and XML Layouts',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Jetpack Compose is a modern toolkit for building Android UI, while XML layouts are still widely used in many projects.',
      resources: ['Jetpack Compose', 'XML Layouts'],
    },
    {
      id: 8,
      title: 'Step 8: Master Various UI Elements and Layouts',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn about different elements and layouts like animations, drawers, frames, linear layouts, toast messages, and fragments for a user-friendly interface.',
      resources: [],
    },
    {
      id: 9,
      title: 'Step 9: Learn About Navigation',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Navigation is part of Android Jetpack. Learn navigation components to manage app flow, deep linking, and user experience.',
      resources: [],
    },
    {
      id: 10,
      title: 'Step 10: Learn About App Architecture',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'App architecture refers to design patterns like MVVM (More Preferable), MVC, and MVP that structure your codebase.',
      resources: ['MVVM (More Preferable)', 'MVC', 'MVP'],
    },
    {
      id: 11,
      title: 'Step 11: Learn How to Integrate with APIs and Databases',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn how to connect your app with external APIs and manage data using local databases like SQLite or Room Database.',
      resources: ['SQLite', 'Room Database'],
    },
    {
      id: 12,
      title: 'Step 12: Learn Version Control and Collaboration Tools',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Use version control systems like Git and platforms like GitHub for managing code changes and collaborating with other developers.',
      resources: ['Git', 'GitHub'],
    },
    {
      id: 13,
      title: 'Step 13: Learn About Testing',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn testing frameworks like JUnit (Unit Testing) and Espresso (Instrumentation Testing) to ensure your app’s functionality.',
      resources: ['JUnit', 'Espresso'],
    },
    {
      id: 14,
      title: 'Step 14: Build a Portfolio of Projects',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Build projects like a calculator or weather app to showcase your skills and demonstrate your expertise to employers or clients.',
      resources: [],
    },
    {
      id: 15,
      title: 'Step 15: Understand App Monetization and Publishing',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Learn how to publish apps on Google Play Store and explore app monetization strategies like ads and in-app purchases.',
      resources: [],
    },
    {
      id: 16,
      title: 'Step 16: Stay Updated with the Latest Trends',
      imgSrc: "https://github.com/shadcn.png",
      description:
        'Follow Android blogs, attend webinars, and engage in communities to stay updated with the latest trends and best practices.',
      resources: [],
    },
  ];

  return (
    <>
      <div className="p-6 space-y-4">
        <div className="mb-4 text-lg">
          Android development is the process of creating applications for the Android operating system, which is used by a wide range of mobile devices including smartphones and tablets. Developers use programming languages such as Kotlin (preferred) or Java to build Android apps.
        </div>

        <div className="mb-4 text-xl font-semibold">Steps to Become an Android Developer:</div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => handleBoxClick(step.id)}
              className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
            >
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
