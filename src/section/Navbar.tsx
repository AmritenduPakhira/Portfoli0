import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 fixed top-0 z-50 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10  rounded-xl flex justify-center items-center text-white font-bold">
          <img
            src="./logo.png"
            alt="Logo"

          />
        </div>

      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-black font-medium">
        <li> <a href="#experience" className="hover:text-gray-500 cursor-pointer">Experience</a></li>
        <li > <a href="#skills" className="hover:text-gray-500 cursor-pointer">Skills</a></li>
        <li><a href="#project" className="hover:text-gray-500 cursor-pointer">Projects </a> </li>

        <li ><a href="#certificates" className="hover:text-gray-500 cursor-pointer"> Certificates</a></li>
        <li > <a href="#achivements" className="hover:text-gray-500 cursor-pointer">Achivements</a></li>
        {/* <li className="hover:text-gray-500 cursor-pointer">Achievement </li> */}

        <li>
          <a href="#conatctus">
            <button className="bg-black text-white rounded-full px-4 py-1 font-semibold text-sm hover:shadow">
              CONTACT ME
            </button>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-black font-medium">
            <li> <a href="#experience" className="hover:text-gray-500 cursor-pointer">Experience</a></li>
            <li> <a href="#skills" className="hover:text-gray-500 cursor-pointer">Skills</a></li>
            <li> <a href="#project" className="hover:text-gray-500 cursor-pointer">Projects</a></li>
            <li ><a href="#certificates" className="hover:text-gray-500 cursor-pointer">Certificates</a></li>
            <li > <a href="#achivements" className="hover:text-gray-500 cursor-pointer">Achivements</a></li>
            <li>
              <a href="#conatctus">
              <button className="bg-black text-white rounded-full px-4 py-2 font-semibold text-sm hover:shadow w-full">
                CONTACT ME
              </button>
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
