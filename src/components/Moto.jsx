import React, { useState, useEffect } from 'react';
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material';

const Moto = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold mb-6 text-blue-900">Our Mission & Motto</h1>
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full">
            <p className="text-2xl font-semibold text-blue-700">
              Challenge Yourself, Inspire Excellence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md">
                  {React.cloneElement(item.icon, { className: "text-blue-600 text-3xl" })}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-justify hyphens-auto">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 border border-blue-100 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
              At <span className="font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded">DATFORTE INT'L SCHOOL</span>, our mission is to cultivate a nurturing and inclusive environment where every student is empowered to reach their full potential. We are committed to providing a holistic education that fosters academic excellence, critical thinking, creativity, and personal growth. Through a balanced approach to learning, we aim to equip our students with the skills and values necessary to become compassionate, responsible, and successful global citizens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mottoItems = [
  {
    title: 'Innovation',
    description: 'We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges.',
    icon: <Lightbulb />,
  },
  {
    title: 'Teamwork',
    description: 'We recognize the importance of teamwork in achieving collective success. Through collaborative projects and extracurricular activities, we foster a collaborative mindset among our students.',
    icon: <Group />,
  },
  {
    title: 'Quality',
    description: 'Quality is at the core of everything we do. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education.',
    icon: <ThumbUp />,
  },
];

export default Moto;