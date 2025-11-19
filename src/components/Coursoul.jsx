import React, { useState, useEffect } from "react";
import myImage from "../assets/datforte school.jpg";
import myStudents from "../assets/students.jpg";
import myAds from "../assets/ads.jpg";

function Coursoul() {
  const images = [myImage, myStudents, myAds];

  const [positions, setPositions] = useState(
    images.map(() => ({ x: 50, y: 50 }))
  );

  // Smooth pan animation (not random jump)
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((pos) => ({
          x: (pos.x + (Math.random() * 20 - 10) + 100) % 100, // gentle left/right
          y: (pos.y + (Math.random() * 20 - 10) + 100) % 100, // gentle up/down
        }))
      );
    }, 3000); // update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000" // auto change slide every 5s
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div
          className="carousel-item active"
          style={{
            backgroundImage: `url(${myImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${positions[0].x}% ${positions[0].y}%`,
            backgroundSize: "110%",        // slight zoom improves effect
            transition: "background-position 3s ease-in-out",
          }}
        >
          <div className="h-[25rem] lg:h-[40rem]">
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-xl lg:text-5xl font-bold text-light text-center">
                DATFORTE INT'L SCH
              </h1>
              <h4 className="lg:text-xl text-lg text-light mt-3 font-bold">
                Situated around the axis of Ahmadiyyah
              </h4>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${myStudents})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${positions[1].x}% ${positions[1].y}%`,
            backgroundSize: "110%",
            transition: "background-position 3s ease-in-out",
          }}
        >
          <div className="h-[25rem] lg:h-[40rem]">
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-xl lg:text-5xl font-bold text-light text-center">
                Datforte Int'l School
              </h1>
              <h4 className="lg:text-xl text-lg text-light mt-3 font-bold">
                Ahmadiyyah axis
              </h4>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${myAds})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${positions[2].x}% ${positions[2].y}%`,
            backgroundSize: "110%",
            transition: "background-position 3s ease-in-out",
          }}
        >
          <div className="h-[25rem] lg:h-[40rem]">
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-xl lg:text-5xl font-bold text-light text-center">
                Datforte Int'l Schools
              </h1>
              <h4 className="lg:text-xl text-lg text-light mt-3 font-bold">
                Ahmadiyyah axis
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-control-prev hidden lg:block"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next hidden lg:block"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Coursoul;
