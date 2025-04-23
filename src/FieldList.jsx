import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Header from './components/Header';

function FieldList() {
  const fields = ['Electronics and Communication', 'IT', 'Mechanical', 'Civil','Computer Science'];

  const SocialMediaLinks = () => {
    return (
        <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-gray-300 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-gray-300 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-gray-300 hover:text-white" />
            </a>
        </div>
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-24 bg-gray-900 min-h-screen text-gray-100">
        <h1 className="text-4xl font-bold mb-2">Btech-Nexus</h1>
        <p className="text-xl text-gray-300 mb-8">One-Stop Companion for Every BTech Student!</p>
        
        <p className="text-lg p-6 text-gray-300">
          We are committed to helping you find the right path for your future by providing comprehensive roadmaps for all necessary branches of B.Tech. Explore the options below to understand what each field offers and choose the one that aligns best with your interests and strengths.
        </p>
      
        <div className="bg-gray-800 p-6 rounded-md mb-6 shadow-lg max-w-4xl text-center border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white">Why Choose Your Path with Us?</h2>
          <ul className="list-disc list-inside text-lg text-left text-gray-300">
            <li>📝 <strong>Personalized Learning Paths:</strong> Tailored roadmaps for every branch of B.Tech.</li>
            <li>🛠️ <strong>Skill Building:</strong> Guidance on essential skills and technologies.</li>
            <li>🌍 <strong>Real-World Applications:</strong> Projects and examples to enhance practical knowledge.</li>
          </ul>
        </div>
      
        <div className="text-xl p-6 space-y-4 mb-6 text-gray-300">Discover the essential branches in B.Tech that provide a solid foundation for your future career. Choose the field that aligns with your passion and strengths to embark on a successful journey in engineering and technology.</div>
        <ul className="flex flex-wrap justify-center gap-4 list-none mb-6">
          {fields.map((field, index) => (
            <li key={index}>
              <Link
                to={`/field/${field}`}
                className="inline-block px-4 py-2 border border-gray-600 rounded-md text-lg text-gray-300 transition-colors duration-300 ease-in-out hover:bg-violet-600 hover:text-white hover:border-violet-600"
              >
                {field}
              </Link>
            </li>
          ))}
        </ul>
      
        <footer className="mt-12 text-center pb-8">
          <p className="text-lg mb-4 text-gray-300">
            If you find any mistakes or have feedback, feel free to reach out to us:
          </p>
          <div className="flex justify-center space-x-6 list-none">
            <a href="mailto:mohitkukreja463@gmail.com" className="text-gray-300 hover:text-white no-underline" aria-label="Email">
                <FaEnvelope size={30} />
            </a>
            <a href="https://www.linkedin.com/in/mohit-kukreja-30aa05228/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white no-underline" aria-label="LinkedIn">
                <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white no-underline" aria-label="Instagram">
                <FaInstagram size={30} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FieldList;