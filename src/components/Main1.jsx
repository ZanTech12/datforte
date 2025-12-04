import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main1() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAdmissionAlert, setShowAdmissionAlert] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    // Show admission alert after a short delay when component mounts
    const timer = setTimeout(() => {
      if (showAdmissionAlert) {
        alert('📢 ADMISSION ALERT! 📢\n\nAdmission is currently ongoing at Datforte International Schools for the 2023/2024 academic session.\n\nLimited spaces available!\n\nApply now to secure your child\'s future at our prestigious institution.\n\nVisit our admissions office or call us for more information.');
        // Set to false so the alert doesn't show again on re-renders
        setShowAdmissionAlert(false);
      }
    }, 2000); // Show alert after 2 seconds

    return () => clearTimeout(timer);
  }, [showAdmissionAlert]);

  return (
    <div className='lg:p-5 p-3 flex mt-4 mb-5 shadow-lg bg-light flex-col items-center transition-all duration-500 hover:shadow-xl' style={{ backgroundColor: "whitesmoke" }}>
      {/* Admission Alert Banner */}
      <div className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-t-lg flex items-center justify-center">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <span className="font-bold text-sm md:text-base">ADMISSION ONGOING FOR 2023/2024 ACADEMIC SESSION - APPLY NOW!</span>
        </div>
      </div>

      {/* Title Section with Animation */}
      <div className={`flex flex-col font-bold justify-center items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className='flex lg:flex-row flex-col items-center justify-center gap-2 w-full lg:p-5 text-center'>
          <span className='text-dark mt-3 text-2xl lg:text-5xl bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent'>Today's Vision</span>
          <span className='text-primary text-2xl lg:text-5xl lg:mt-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Tomorrow's Technology</span>
        </div>
      </div>

      {/* Animated Divider */}
      <div className='w-full mt-3 overflow-hidden'>
        <div className={`h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
      </div>

      {/* Content Section */}
      <div className="container pb-5 w-full grid grid-cols-1 lg:grid-cols-1 mt-5 relative">
        {/* Decorative Frame */}
        <img src="https://www.creativefabrica.com/wp-content/uploads/2023/02/04/Ornament-frame-PNG-Graphics-59934430-1-1-580x390.png" alt="" className='absolute w-full h-[35rem] top-[-50px] lg:block hidden opacity-30' />

        {/* Content Box with Animation */}
        <div className={`bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg lg:p-[3rem] p-5 container lg:w-[1000px] border border-gray-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Profile Section */}
          <div className='flex items-center gap-4 justify-start mb-6'>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
              <img src="https://getwpteam.com/wp-content/uploads/2022/02/16" className='relative rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover border-4 border-white shadow-lg' alt="Mr Akin Ijiwole" />
            </div>
            <div className='flex flex-col'>
              <span className='lg:text-2xl text-xl font-bold text-gray-800'>Mr Akin Ijiwole</span>
              <span className='text-sm text-gray-500 font-medium'>Chairman</span>
            </div>
          </div>

          {/* Message with Animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className='relative pl-6 border-l-4 border-blue-500 py-2 bg-blue-50 bg-opacity-50 rounded-r-lg'>
              <p className='text-justify text-lg leading-relaxed text-gray-700 font-serif'>
                Dear Sir/Madam, <br />
                "Welcome to Datforte International Schools, where we are dedicated to nurturing young minds and shaping future leaders. At Datforte Int'l Schools, we believe in fostering an environment that encourages academic excellence, creativity, and holistic development. Our commitment to quality education and student well-being is reflected in our state-of-the-art facilities and our dedicated faculty. We strive to create a learning experience that empowers students to reach their full potential and excel in all aspects of life. I invite you to explore our website and learn more about our vibrant school community. Together, let's work towards a brighter future for every student."
              </p>
            </div>
          </div>

          {/* Admission CTA Button */}
          <div className={`mt-8 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <Link
              to="/admission"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;