import React, { useState, useEffect } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import dbanner from "../assets/dbanner.jpg";
import dat from "../assets/datsch.jpg";

function Main3() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation when component mounts
        setIsVisible(true);
    }, []);

    return (
        <div className="parallax-container relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with parallax effect */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transform scale-110 transition-transform duration-10000 ease-out"
                style={{
                    backgroundImage: `url(${dat})`,
                }}
            ></div>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

            {/* Content container */}
            <div className="container relative z-10 px-4 py-16">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    {/* Text content with slide effect */}
                    <div className={`flex flex-col justify-center space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        <div className="inline-block px-4 py-1 bg-blue-600 bg-opacity-30 backdrop-blur-sm rounded-full border border-blue-500 border-opacity-30 w-fit">
                            <span className='text-blue-300 text-sm font-medium tracking-wider uppercase'>Discover Excellence</span>
                        </div>

                        <h1 className='font-bold text-3xl lg:text-5xl text-white leading-tight'>
                            DATFORTE <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>INT'L</span> SCHOOLS
                        </h1>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20"></div>
                            <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 border-opacity-30">
                                <p className='text-gray-200 text-lg lg:text-xl leading-relaxed'>
                                    Datforte Schools offer a rich and diverse educational experience that goes beyond the classroom. Our campus is designed to support a wide range of activities and interests, ensuring that every student has the opportunity to explore and excel.
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/college"
                            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 w-fit"
                        >
                            <span className="relative flex items-center">
                                Go Explore
                                <ArrowRightAltIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:translate-x-0 ease">
                                Go Explore
                                <ArrowRightAltIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>

                    {/* Image with slide effect */}
                    <div className={`flex justify-center transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src={dbanner}
                                    alt="Datforte School"
                                    className='w-full h-auto transform transition duration-700 group-hover:scale-105'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-bold text-lg">Discover Our Campus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main3;