import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          
          <span className="text-black font-bold text-lg">Amrit</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-black font-medium items-center">
          <li>
            <a href="#experience" className="hover:text-gray-500 cursor-pointer">Experience</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-500 cursor-pointer">Skills</a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-500 cursor-pointer">Projects</a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-gray-500 cursor-pointer">Certificates</a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-gray-500 cursor-pointer">Achievements</a>
          </li>
          <li>
            <a href="#contactus">
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
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-black font-medium">
            <li>
              <a href="#experience" className="hover:text-gray-500 cursor-pointer">Experience</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-500 cursor-pointer">Skills</a>
            </li>
            <li>
              <a href="#project" className="hover:text-gray-500 cursor-pointer">Projects</a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-gray-500 cursor-pointer">Certificates</a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-gray-500 cursor-pointer">Achievements</a>
            </li>
            <li>
              <a href="#contactus">
                <button className="bg-black text-white rounded-full px-4 py-2 font-semibold text-sm w-full hover:shadow">
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
