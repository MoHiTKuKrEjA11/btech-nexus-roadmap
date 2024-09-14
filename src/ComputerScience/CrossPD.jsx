import React from 'react'

const CrossPD = () => {
  return (
    <>
    <div className="p-6 space-y-4">
    <div className="text-xl  mb-6">
      Cross-platform mobile development is an approach that allows you to build a single mobile application that runs seamlessly on multiple operating systems. In cross-platform apps, some or even all of the source code can be shared. This means that developers can create and deploy mobile applications that work on both Android and iOS without having to rewrite the code for each platform. <br /><br />
    </div>
  
    <div className="text-xl font-semibold mb-4">
      Frameworks Available for Building Cross-Platform Apps:
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-8 cursor-pointer">
      {/* React Native */}
      <div className="p-4 border border-gray-300 rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-violet-100">
        <h2 className="text-lg font-bold">React Native</h2>
        <p>React Native, developed by Facebook, allows you to build mobile apps using JavaScript and React. It provides a set of components for building the UI and enables developers to use a single codebase for both Android and iOS apps.</p>
      </div>
  
      {/* Flutter */}
      <div className="p-4 border border-gray-300 rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-violet-100">
        <h2 className="text-lg font-bold">Flutter</h2>
        <p>Flutter, developed by Google, is an open-source UI software development kit that allows developers to create high-performance, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.</p>
      </div>
  
      {/* Kotlin Multiplatform */}
      <div className="p-4 border border-gray-300 rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-violet-100">
        <h2 className="text-lg font-bold">Kotlin Multiplatform</h2>
        <p>Kotlin Multiplatform, created by JetBrains, enables developers to share code between multiple platforms, including Android, iOS, web, and desktop applications. It allows you to write platform-specific code only when necessary, leveraging shared logic for most of the app.</p>
      </div>
  
      {/* .NET MAUI */}
      <div className="p-4 border border-gray-300 rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-violet-100">
        <h2 className="text-lg font-bold">.NET MAUI</h2>
        <p>.NET MAUI is a cross-platform framework developed by Microsoft that allows developers to create native apps for Android, iOS, macOS, and Windows with a single codebase using C#. It is an evolution of Xamarin.Forms and offers enhanced performance and flexibility.</p>
      </div>
    </div>
  
    <div className="text-lg mb-8">
      With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
    </div>
    </div>
  </>
  
  )
}

export default CrossPD