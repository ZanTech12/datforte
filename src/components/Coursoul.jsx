import React, { useState, useEffect } from 'react'
import myImage from "../assets/datforte school.jpg"
import myStudents from "../assets/students.jpg"
import myAds from "../assets/ads.jpg"

function Coursoul() {
  const [positions, setPositions] = useState([
    { x: 50, y: 50 },
    { x: 50, y: 50 },
    { x: 50, y: 50 }
  ]);

  // Function to generate random positions
  const generateRandomPositions = () => {
    return positions.map(() => ({
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    }));
  };

  // Update positions at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(generateRandomPositions());
    }, 3000); // Change positions every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            backgroundImage: `url(${myImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${positions[0].x}% ${positions[0].y}%`,
            backgroundSize: "cover",
            transition: "background-position 2s ease-in-out"
          }}
        >
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light'>
                  <span>DATFORTE INT'L SCH</span>
                </h1>
                <h4 className='lg:text-xl text-lg text-light mt-3 font-bold'>Situated around the axis of Ahmadiyyah</h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${myStudents})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${positions[1].x}% ${positions[1].y}%`,
            backgroundSize: "cover",
            transition: "background-position 2s ease-in-out"
          }}
        >
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light'>
                  <span>Datforte Int'l School</span>
                </h1>
                <h4 className='lg:text-xl text-lg text-light mt-3 font-bold'>Ahmadiyyah axis</h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${myAds})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${positions[2].x}% ${positions[2].y}%`,
            backgroundSize: "cover",
            transition: "background-position 2s ease-in-out"
          }}
        >
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light'>
                  <span>Datforte Int'l Schools</span>
                </h1>
                <h4 className='lg:text-xl text-sm text-light mt-3 font-bold'>Ahmadiyyah axis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev hidden lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next hidden lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Coursoul