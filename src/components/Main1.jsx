import React, { useState, useEffect } from 'react';

function Main1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='lg:p-5 p-3 flex mt-4 mb-5 shadow-lg bg-light flex-col items-center transition-all duration-500 hover:shadow-xl' style={{ backgroundColor: "whitesmoke" }}>
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
        </div>
      </div>
    </div>
  );
}

export default Main1;