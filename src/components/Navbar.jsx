import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Home, Info, Business, Groups, ContactPhone, LocationOn } from "@mui/icons-material";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-[1000]">
      {/* Top Banner */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 text-white">
        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-xl tracking-wide">DATFORTE INT'L SCHOOLS</h1>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <LocationOn className="text-yellow-300" fontSize="small" />
          <span>14, Ahmed Tijani St, Ahmadiya Bus-Stop, Lagos</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 bg-white">
        {/* --- REDESIGNED LOGO + NAME SECTION (FURTHER REDUCED SIZE) --- */}
        <Link to="/" className="flex items-center space-x-3 group">
          {/* Logo Container with Background Effect */}
          <div className="relative p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <div className="p-0.5 bg-white rounded-full">
              <img
                src={logo}
                alt="School Logo"
                className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
          </div>

          {/* School Name and Address */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold text-gray-800 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              DATFORTE INT'L SCHOOLS
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <LocationOn className="text-blue-500 mr-1" fontSize="inherit" />
              14, Ahmed Tijani St, Ahmadiya Bus-Stop, Lagos
            </span>
          </div>
        </Link>

        {/* --- DESKTOP LINKS WITH REDUCED TEXT SIZE --- */}
        <ul className="hidden lg:flex items-center space-x-1">
          <Link
            to="/"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 transform hover:scale-105 ${location.pathname === "/"
              ? "bg-blue-100 text-blue-700 shadow-sm"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
              }`}
          >
            <Home fontSize="small" />
            <span>HOME</span>
          </Link>
          <Link
            to="/aboutus"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 transform hover:scale-105 ${location.pathname === "/aboutus"
              ? "bg-blue-100 text-blue-700 shadow-sm"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
              }`}
          >
            <Info fontSize="small" />
            <span>ABOUT US</span>
          </Link>
          <Link
            to="/faculty"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 transform hover:scale-105 ${location.pathname === "/faculty"
              ? "bg-blue-100 text-blue-700 shadow-sm"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
              }`}
          >
            <Business fontSize="small" />
            <span>DEPARTMENT</span>
          </Link>
          <Link
            to="/students"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 transform hover:scale-105 ${location.pathname === "/students"
              ? "bg-blue-100 text-blue-700 shadow-sm"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
              }`}
          >
            <Groups fontSize="small" />
            <span>STUDENTS</span>
          </Link>

          <select
            onChange={handleSelectChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">More</option>
            <option value="/events">Events</option>
            <option value="/curriculum">Academics</option>
            <option value="/moto">Mission & Motto</option>
            <option value="/campus">Glimpse</option>
          </select>

          <Link
            to="/contact"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 transform hover:scale-105 ${location.pathname === "/contact"
              ? "bg-blue-100 text-blue-700 shadow-sm"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
              }`}
          >
            <ContactPhone fontSize="small" />
            <span>CONTACT</span>
          </Link>

          <a
            href="http://schoolapp.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-md text-xs font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Sign-In
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Menu
            className="text-gray-800 cursor-pointer"
            onClick={toggleMenu}
            fontSize="large"
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-[2000] overflow-y-auto`}
      >
        <div
          className="text-right text-3xl font-bold pr-4 cursor-pointer mt-2"
          onClick={toggleMenu}
        >
          &times;
        </div>

        <ul className="flex flex-col mt-8 space-y-1 px-4 text-sm font-medium">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            HOME
          </Link>
          <Link
            to="/aboutus"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/aboutus"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/faculty"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/faculty"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            DEPARTMENT
          </Link>
          <Link
            to="/students"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/students"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            STUDENTS
          </Link>
          <Link
            to="/events"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/events"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            EVENTS
          </Link>
          <Link
            to="/curriculum"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/curriculum"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            ACADEMICS
          </Link>
          <Link
            to="/moto"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/moto"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            MISSION & MOTO
          </Link>
          <Link
            to="/campus"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/campus"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            GLIMPSE
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === "/contact"
              ? "bg-gray-700 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            CONTACT US
          </Link>

          {/* Sign-In Button (Mobile) */}
          <a
            href="http://schoolapp.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-center py-2 rounded-md mt-3 hover:bg-blue-700 transition-all duration-200"
          >
            Sign-In
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;