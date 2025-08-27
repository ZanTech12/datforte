import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material';
import datforte from "../assets/datforte1.png";
import myImage from '../assets/admission form.jpg';
function Contact() {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = async (e) => {
        e.preventDefault();
        alert("dummy message send successfully !");
        navigate("/home");
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            
            <div className='relative h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${datforte})`, }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5">
                        <form ref={form} onSubmit={sendEmail} className='bg-white bg-opacity-95 max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300'>
                            <h2 className='text-5xl font-extrabold mb-8 text-center text-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>Contact Us</h2>
                            <input type="email" name="email" placeholder='Your Email Address' className="w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                            <textarea name="message" placeholder='Your Message' className='w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300' rows="5" required></textarea>
                            <button type='submit' className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300 text-lg font-semibold transform hover:scale-105">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

          
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-5xl text-blue-500 mb-6 mx-auto " style={{fontSize:"3rem"}} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">Office Hours</h3>
                        <p className="text-gray-600 text-center">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-center">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600 text-center">Sunday: Closed</p>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-5xl text-blue-500 mb-6 mx-auto" style={{fontSize:"3rem"}}/>
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">Visit Us</h3>
                        <p className="text-gray-600 text-center">14, Bakare Estate Off Ahmadiya Bus-Stop, Abule Egba, Lagos, Nigeria</p>
                    </div>
                </div>
            </div>


            <div className="bg-blue-50 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Admission Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Admission Process</h3>
                            <p className="text-gray-600 mb-6">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                            <a href={myImage} target="_blank" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105">
                                <GetApp className="mr-2" />
                                Download Admission Form
                            </a>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Criteria</h3>
                            <p className="text-gray-600">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Important Dates</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Admission Form Availability: March 1st</li>
                                <li>Last Date for Submission: March 31st</li>
                                <li>Entrance Test: April 15th</li>
                                <li>Announcement of Results: April 30th</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Find Us On The Map</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9189089466895!2d3.286239873627623!3d6.656972493337839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b96d7e2d46d41%3A0x9812c6d8514435f8!2sDatforte%20International%20Schools!5e0!3m2!1sen!2sng!4v1756192435661!5m2!1sen!2sng"
                        frameBorder="0"
                        className="w-full h-[500px] border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    
                </div>
            </div>
        </div>
    );
}

export default Contact;