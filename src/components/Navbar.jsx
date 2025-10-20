import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top Banner */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-gradient-to-br from-indigo-800 to-gray-800 text-white">
        <h1 className="font-bold text-lg">DATFORTE INT'L SCHOOLS</h1>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2 bg-white">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="School Logo"
            className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              DATFORTE INT'L SCHOOLS
            </span>
            <span className="text-xs text-gray-500">
              14, Ahmed Tijani St, Ahmadiya Bus-Stop, Lagos
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-600">HOME</Link>
          <Link to="/aboutus" className="hover:text-blue-600">ABOUT US</Link>
          <Link to="/faculty" className="hover:text-blue-600">DEPARTMENT</Link>
          <Link to="/students" className="hover:text-blue-600">STUDENTS</Link>

          <select
            onChange={handleSelectChange}
            className="border rounded px-2 py-1 text-sm text-gray-700 focus:outline-none"
          >
            <option value="">More</option>
            <option value="/events">Events</option>
            <option value="/curriculum">Academics</option>
            <option value="/moto">Mission & Motto</option>
            <option value="/campus">Glimpse</option>
          </select>

          <Link to="/contact" className="hover:text-blue-600">
            CONTACT
          </Link>

          <a
            href="https://nersapp.africa/org/datforte/auth"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
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
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div
          className="text-right text-3xl font-bold pr-4 cursor-pointer"
          onClick={toggleMenu}
        >
          &times;
        </div>

        <ul className="flex flex-col mt-8 space-y-5 px-6">
          <Link to="/" onClick={toggleMenu}>HOME</Link>
          <Link to="/aboutus" onClick={toggleMenu}>ABOUT US</Link>
          <Link to="/faculty" onClick={toggleMenu}>DEPARTMENT</Link>
          <Link to="/students" onClick={toggleMenu}>STUDENTS</Link>
          <Link to="/events" onClick={toggleMenu}>EVENTS</Link>
          <Link to="/curriculum" onClick={toggleMenu}>ACADEMICS</Link>
          <Link to="/moto" onClick={toggleMenu}>MISSION & MOTO</Link>
          <Link to="/campus" onClick={toggleMenu}>GLIMPSE</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACT US</Link>

          <a
            href="https://nersapp.africa/org/datforte/auth"
            className="bg-blue-600 text-white text-center py-2 rounded"
          >
            Sign-In
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
