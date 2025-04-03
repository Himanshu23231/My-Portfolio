import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-400">My Portfolio</h1>

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-yellow-300">About</Link></li>
          <li><Link to="/projects" className="text-white hover:text-yellow-300">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-yellow-300">Contact</Link></li>
        </ul> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-300 text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-center py-6 z-40">
          <ul className="flex flex-col space-y-6">
            <li><Link to="/" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className="text-white hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
