import React from 'react';
import prin from "../assets/principal.jpg"
import hps from "../assets/Head Of Primary.jpg"
import hps1 from "../assets/HOD Primary Section.jpg"
import admin from "../assets/admind.jpg"
import vc1 from "../assets/vc.jpg"


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
    quote: "Together, we can achieve greatness. Let’s work hand-in-hand to shape the future and build a thriving school environment.",
   
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
    name: "Mrs. Bamigboye Esther",
    description: "The School Administrator",
    image: admin, 
    quote: 'Every challenge in education is an opportunity for growth; embrace it with open arms.',
    
  },
  
  //{
    //name: "David Wilson",
    //description: "Computer Science Teacher",
    //image: "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.webp?b=1&s=170667a&w=0&k=20&c=XKyPqI4mZGKQLoUXMqJKkJ3Ovm69rIWG-sq_UstDyY4=", 
    //quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  //}
];

function Faculty() {
  const principal = aboutData.find(member => member.description === "Principal");
  const vicePrincipal = aboutData.find(member => member.description === "Vice Principal");
  const otherFaculty = aboutData.filter(member => member.description !== "Principal" && member.description !== "Vice Principal");

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">Our Department</h1>

     
      <div className="grid md:grid-cols-2 gap-8 mb-16">
       
        {principal && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{principal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{principal.name}</h2>
                <p className="mt-2 text-gray-500">{principal.quote}</p>
                
              </div>
            </div>
          </div>
        )}

        
        {vicePrincipal && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={vicePrincipal.image} alt={vicePrincipal.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{vicePrincipal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{vicePrincipal.name}</h2>
                <p className="mt-2 text-gray-500">{vicePrincipal.quote}</p>
              
              </div>
            </div>
          </div>
        )}
      </div>

     
      {otherFaculty.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Our Dedicated Designatory Office</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img className="h-56 w-full object-cover" src={data.image} alt={data.name} />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.description}</div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">{data.name}</h3>
                  <p className="mt-2 text-gray-500">{data.quote}</p>
                  
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
