import React, { useState, useEffect } from "react";
import myImage from "../assets/datforte school.jpg";
import myStudents from "../assets/students.jpg";
import myAds from "../assets/ads.jpg";

const slides = [
  {
    image: myImage,
    title: "DATFORTE INT'L SCH",
    subtitle: "Situated around the axis of Ahmadiyyah",
  },
  {
    image: myStudents,
    title: "Nurturing Young Minds",
    subtitle: "A community of learners and leaders",
  },
  {
    image: myAds,
    title: "Join Our Community",
    subtitle: "Building a brighter future, one student at a time.",
  },
];

function Coursoul() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[25rem] lg:h-[40rem] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* This image will occupy the entire div */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h1
                className={`text-3xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 delay-300 ${currentIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
              >
                {slide.title}
              </h1>
              <h4
                className={`text-lg lg:text-2xl font-light text-white transition-all duration-1000 delay-500 ${currentIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
              >
                {slide.subtitle}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Coursoul;