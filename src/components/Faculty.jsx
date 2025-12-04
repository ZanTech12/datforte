import React, { useState, useEffect } from 'react';
import prin from "../assets/principal.jpg"
import hps from "../assets/Head Of Primary.jpg"
import hps1 from "../assets/HOD Primary Section.jpg"
import admin from "../assets/admind.jpg"
import vc1 from "../assets/vc.jpg"
import coun from "../assets/counsel.jpg"
import hop from "../assets/hop.jpg"

const aboutData = [
  {
    name: "Mr Adebayo Oluwafemi",
    description: "Principal",
    image: prin,
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact.",
  },
  {
    name: "Mr. Raphael Nwabuikwu",
    description: "Vice Principal",
    image: vc1,
    quote: "Together, we can achieve greatness. Let's work hand-in-hand to shape the future and build a thriving school environment.",
  },
  {
    name: "Mrs. Obinna Chinomnso",
    description: "Head of Primary School",
    image: hps,
    quote: "Teaching is not just about imparting knowledge; it's about inspiring a love for learning and encouraging growth.",
  },
  {
    name: "Mr. Babatunde Kayode",
    description: "HOD Primary Section",
    image: hps1,
    quote: "The beautiful thing about learning is that no one can take it away from you",
  },
  {
    name: "Mrs. Bamigboye Esther",
    description: "The School Administrator",
    image: admin,
    quote: 'Every challenge in education is an opportunity for growth; embrace it with open arms.',
  },
  {
    name: "Mrs. Sokunbi",
    description: "The School Counsellor",
    image: coun,
    quote: 'You will face setbacks — everyone does. But every time you get back up, you become stronger, wiser, and more prepared for life beyond school.',
  },
  {
    name: "Mrs. Onadele",
    description: "Head of the Nursery Section",
    image: hop,
    quote: "In these little hands lie the future. Every smile we nurture, every word we speak, and every moment we share helps shape a lifetime of confidence, kindness, and curiosity. Let's build strong roots — one gentle day at a time.",
  },
];

function Faculty() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const principal = aboutData.find(member => member.description === "Principal");
  const vicePrincipal = aboutData.find(member => member.description === "Vice Principal");
  const otherFaculty = aboutData.filter(member => member.description !== "Principal" && member.description !== "Vice Principal");

  return (
    <div className={`container mx-auto px-4 py-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className={`text-4xl font-bold text-center mb-16 text-indigo-800 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
        Our Department
      </h1>

      <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
        {/* Principal Card */}
        {principal && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Principal</span>
                </div>
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-2">
                  {principal.description}
                </div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-gray-900">{principal.name}</h2>
                <p className="mt-2 text-gray-600 italic">"{principal.quote}"</p>
              </div>
            </div>
          </div>
        )}

        {/* Vice Principal Card */}
        {vicePrincipal && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Vice Principal</span>
                </div>
                <img className="h-full w-full object-cover md:w-48" src={vicePrincipal.image} alt={vicePrincipal.name} />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold mb-2">
                  {vicePrincipal.description}
                </div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-gray-900">{vicePrincipal.name}</h2>
                <p className="mt-2 text-gray-600 italic">"{vicePrincipal.quote}"</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Other Faculty Section */}
      {otherFaculty.length > 0 && (
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Our Dedicated Designatory Office</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold">{data.description}</span>
                  </div>
                  <img className="h-56 w-full object-cover" src={data.image} alt={data.name} />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold mb-2">
                    {data.description}
                  </div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-gray-900">{data.name}</h3>
                  <p className="mt-2 text-gray-600 italic">"{data.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;