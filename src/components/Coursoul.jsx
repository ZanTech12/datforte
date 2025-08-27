import React from 'react'
import myImage from "../assets/datforte school.jpg"
import myStudents from "../assets/students.jpg"
import myAds from "../assets/ads.jpg"

function Coursoul() {
  return (

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: `url(${myImage})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>DATFORTE INT'L SCH</span>
                
                </h1>
                <h4 className='lg:text-xl text-lg  text-light  mt-3 font-bold'>Situated around the axis of Ahmadiyyah</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: `url(${myStudents})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center '>
              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>Datforte Int'l School</span>
                
                </h1>
                <h4 className='lg:text-xl text-lg  text-light  mt-3 font-bold'>Ahmadiyyah axis</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: `url(${myAds})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

              <div className='  d-flex flex-column justify-content-center align-items-center '>

                <h1 className='text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light '>
                  <span>Datforte Int'l Schools</span>
                
                </h1>
                <h4 className='lg:text-xl text-sm  text-light  mt-3 font-bold'>Ahmadiyyah axis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev hideen lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next hideen lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        
      </button>
    </div>

  )
}

export default Coursoul
