import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };

  return (
    <nav className="w-[100vw]">
      <div className="container-fluid ">
        {/* Top Banner */}
        <div className="row hidden lg:flex lg:items-center lg:justify-between p-3 text-white bg-gradient-to-br from-indigo-800 to-gray-800">
          <div className="col-6 d-flex items-center">
            <h1 className="fw-bold">DATFORTE INT'L SCHOOLS</h1>
          </div>
          <div className="col-6 d-flex justify-content-end"></div>
        </div>

        {/* Main Navbar */}
        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light ">
          <div className="container-fluid ">
            <span className="navbar-brand flex items-center">
              <img
                src={logo}
                alt=""
                className="navbar-brand rounded-full object-fill w-[50px] lg:w-[80px]"
              />
              <div className="flex-col justify-center hidden lg:flex">
                <span className="font-bold">DATFORTE INT'L SCHOOLS</span>
                <span className="text-[13px] text-gray-500">
                  14, Ahmed Tijani Street, <br /> Ahmadiya Bus-Stop, Ijaiye,
                  <br /> Lagos, Nigeria.
                </span>
              </div>
            </span>

            <div className="flex " id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-right">
                <Link to="/" className="nav-item">
                  <span className="nav-link">HOME</span>
                </Link>
                <Link to="/aboutus" className="nav-item me-3">
                  <span className="nav-link">ABOUT US</span>
                </Link>
                <Link to="/faculty" className="nav-item">
                  <span className="nav-link">DEPARTMENT</span>
                </Link>
                <Link to="/students" className="nav-item">
                  <span className="nav-link">STUDENTS</span>
                </Link>

                {/* Selection Navbar with Glimpse */}
                <li className="nav-item me-3">
                  <select
                    onChange={handleSelectChange}
                    className="form-select px-2 py-1 border rounded-md"
                  >
                    <option value="">More</option>
                    <option value="/events">Events</option>
                    <option value="/curriculum">Academics</option>
                    <option value="/moto">Mission & Motto</option>
                    <option value="/campus">Glimpse</option>
                  </select>
                </li>

                <Link to="/contact" className="text-light text-decoration-none">
                  <span className="nav-link">Admission & Contact</span>
                </Link>

                <li className="nav-item me-3">
                  <button className="btn shadow btn-primary">
                    <a
                      className="nav-link text-light"
                      href="https://nersapp.africa/org/datforte/auth"
                    >
                      Sign-In
                    </a>
                  </button>
                </li>
              </ul>

              {/* Mobile Menu */}
              <div className="d-lg-none d-block">
                <Menu
                  className="fw-bold fs-1 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              <div
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-300 ease-in-out z-50`}
              >
                <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
                  &times;
                </div>
                <ul className="mt-8 space-y-4 flex flex-col gap-3">
                  <Link to="/">
                    <span className="text-white">HOME</span>
                  </Link>
                  <Link to="/aboutus">
                    <span className="text-white">ABOUT US</span>
                  </Link>
                  <Link to="/faculty">
                    <span className="text-white">DEPARTMENT</span>
                  </Link>
                  <Link to="/students">
                    <span className="text-white">STUDENTS</span>
                  </Link>
                  <Link to="/events">
                    <span className="text-white">EVENTS</span>
                  </Link>
                  <Link to="/curriculum">
                    <span className="text-white">ACADEMICS</span>
                  </Link>
                  <Link to="/moto">
                    <span className="text-white">MISSION & MOTO</span>
                  </Link>
                  <Link to="/campus">
                    <span className="text-white">GLIMPSE</span>
                  </Link>

                  <li>
                    <button className="btn bg-blue-500 text-white">
                      <Link to="/contact" className="text-white">
                        CONTACT US
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
