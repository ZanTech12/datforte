import React, { useState, useEffect } from 'react';
import spell from "../assets/spelling.jpg"

function Main2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  const downloadBroucher = () => {
    const anchor = document.createElement('a');
    anchor.href = brochu;
    anchor.download = '';
    anchor.click();
  };

  return (
    <div className='pb-5 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className='container relative z-10'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          {/* Text Content with Slide Animation */}
          <div className={`mt-5 flex flex-col justify-center space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-block px-4 py-1 bg-indigo-800 bg-opacity-50 backdrop-blur-sm rounded-full border border-indigo-600 border-opacity-30 w-fit">
              <span className='text-indigo-200 text-sm font-medium tracking-wider uppercase'>You need to know..</span>
            </div>

            <h1 className='font-bold text-3xl lg:text-5xl mb-2 text-white leading-tight'>
              About <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Datforte</span> Int'l School
            </h1>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 border-opacity-30">
                <p className='text-gray-200 text-lg lg:text-xl leading-relaxed'>
                  Datforte International Schools are dedicated to providing quality education and holistic development. The schools emphasize academic excellence, critical thinking, and ethical values. It boasts modern infrastructure, including advanced science labs, spacious classrooms, a well-stocked library, and comprehensive sports facilities. Datforte aims to empower students with knowledge and skills for a successful future.
                </p>
              </div>
            </div>

            <button
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
              onClick={downloadBroucher}
            >
              <span className="relative flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Brochure
              </span>
              <div className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Brochure
              </div>
            </button>
          </div>

          {/* Image Content with Slide Animation */}
          <div className={`lg:mt-0 mt-5 flex justify-center items-center transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <a href="https://www.wolverhampton.gov.uk/sites/default/files/2023-01/Job%20ref%203-2023%20SDP%20-%20Recruitment%20brochure.pdf" download="broucher.pdf" className="relative block">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img src={spell} className='lg:w-full h-auto transform transition duration-700 group-hover:scale-105' alt="Brochure" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold text-lg">Click to download</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;