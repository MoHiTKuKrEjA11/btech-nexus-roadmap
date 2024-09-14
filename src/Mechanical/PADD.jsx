import React from 'react'

const PADD = () => {
  return (
    <>
    <div className="p-6 space-y-6">
      {/* Introduction */}
      <div className="text-xl mb-6">
        This field focuses on leveraging programming skills and computational tools to solve complex engineering problems, automate calculations, analyze data, and design smart, connected systems. As mechanical engineering increasingly intersects with digital technology, skills in programming, data analysis, and IoT (Internet of Things) are becoming vital.
        <br />
        <br />
        <span className="font-semibold">Key Areas to Learn:</span>
      </div>
  
      {/* MATLAB or Python Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-violet-100 transition-colors duration-300 cursor-pointer space-y-4">
        <h2 className="text-xl font-semibold mb-4">1. MATLAB or Python:</h2>
        <p>
          Both MATLAB and Python are powerful tools for computational tasks in engineering. They are used for mathematical modeling, data analysis, simulation, and automating repetitive engineering calculations.
        </p>
  
        {/* MATLAB Subsection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">i- MATLAB:</h3>
          <p>
            A high-level programming language widely used in engineering for numerical computing and data visualization. Learn to use built-in functions and toolboxes for tasks such as linear algebra, differential equations, signal processing, and optimization.
            Focus on Simulink for modeling, simulating, and analyzing dynamic systems (e.g., mechanical, electrical, and hydraulic systems).
            Study how to develop custom scripts and functions to solve specific engineering problems, automate workflows, and analyze large datasets.
          </p>
        </div>
  
        {/* Python Subsection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">ii- Python:</h3>
          <p>
            An open-source programming language that's versatile, easy to learn, and widely used for data analysis, automation, and machine learning. Learn popular libraries such as NumPy (for numerical computations), Pandas (for data manipulation), SciPy (for scientific computing), and Matplotlib/Seaborn (for data visualization).
            Use Python for automating engineering calculations, processing data from sensors, and developing custom software tools or applications.
            Understand how to integrate Python with engineering software and tools, such as CAD or simulation platforms.
          </p>
        </div>
      </div>
  
      {/* IoT Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-violet-100 transition-colors duration-300 cursor-pointer space-y-4">
        <h2 className="text-xl font-semibold mb-4">2. IoT (Internet of Things): (Optional Field)</h2>
        <p>
          The Internet of Things (IoT) involves connecting mechanical systems and devices to the internet or local networks, allowing them to communicate, collect data, and be controlled remotely. IoT skills are crucial for creating smart devices and automation solutions in various fields like smart manufacturing, predictive maintenance, and intelligent product design.
        </p>
  
        {/* IoT Key Concepts Subsection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Key Concepts:</h3>
  
          {/* IoT Basics Subsection */}
          <div>
            <h4 className="font-semibold mb-2">1: IoT Basics:</h4>
            <p>
              Understand the fundamental concepts of IoT, such as sensor networks, data communication, cloud computing, and edge computing. Learn how IoT integrates with mechanical systems to enable real-time monitoring, data collection, and remote control.
            </p>
          </div>
  
          {/* Communication Protocols Subsection */}
          <div>
            <h4 className="font-semibold mb-2">2: Communication Protocols:</h4>
            <p>
              Learn about common communication protocols like MQTT (Message Queuing Telemetry Transport), HTTP (Hypertext Transfer Protocol), and CoAP (Constrained Application Protocol) used for data transmission between IoT devices and servers.
            </p>
          </div>
  
          {/* Microcontrollers and Development Platforms Subsection */}
          <div>
            <h4 className="font-semibold mb-2">3: Microcontrollers and Development Platforms:</h4>
            <p>
              Gain experience with microcontrollers like Arduino and Raspberry Pi:
              <br />
              <span className="font-semibold">Arduino:</span> Focus on learning how to program microcontrollers to interact with sensors, actuators, and other electronic components.
              <br />
              <span className="font-semibold">Raspberry Pi:</span> Understand how to use this small, affordable computer to run more complex programs and interfaces (like Python) for IoT applications.
              <br />
              Learn how to build basic IoT projects, such as temperature monitoring systems, smart lighting, or automated control systems.
            </p>
          </div>
  
          {/* Sensor Integration Subsection */}
          <div>
            <h4 className="font-semibold mb-2">4: Sensor Integration:</h4>
            <p>
              Study different types of sensors (e.g., temperature, humidity, pressure, motion) and how to integrate them with mechanical systems to collect real-time data.
            </p>
          </div>
  
          {/* Data Processing and Analysis Subsection */}
          <div>
            <h4 className="font-semibold mb-2">5: Data Processing and Analysis:</h4>
            <p>
              Learn to process and analyze the data collected from IoT devices using tools like MATLAB or Python. Understand how to use cloud platforms (e.g., AWS IoT, Azure IoT Hub) for data storage, processing, and real-time analytics.
            </p>
          </div>
  
          {/* Cybersecurity in IoT Subsection */}
          <div>
            <h4 className="font-semibold mb-2">6: Cybersecurity in IoT:</h4>
            <p>
              Understand the security challenges associated with IoT, including data encryption, authentication, and secure communication.
            </p>
          </div>
        </div>
      </div>
  
      {/* Conclusion */}
      <div className="mt-6">
        <p>
          With the knowledge and expertise you have gained, you are now ready to take on real-world projects and challenges. Happy Learning and All the Best for Your Bright Future! 🚀
        </p>
      </div>
    </div>
  </>
  
  )
}

export default PADD