import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-pink-200 px-6 py-4 flex justify-between items-center relative z-20 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="src\assets\images\weddinglogo.png" 
          alt="Wedding Bells Logo"
          className="w-10 h-10 object-contain"
        />
        <Link to="/" className="text-2xl font-bold text-pink-600">Wedding Bells</Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
        <li><Link to="/start-planning" className="hover:text-pink-500">Start Planning</Link></li>
        <li><Link to="/venues" className="hover:text-pink-500">Venues</Link></li>
        <li><Link to="/services" className="hover:text-pink-500">Services</Link></li>
        <li><Link to="/inspiration" className="hover:text-pink-500">Inspiration</Link></li>
        <li><Link to="/help" className="hover:text-pink-500">Help</Link></li>
        <li>
          <Link to="/login" className="text-pink-600 font-semibold hover:underline">
            Sign In
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border-t border-pink-200 px-6 py-4 space-y-3 md:hidden shadow-md">
          <li><Link to="/" className="block text-gray-700 hover:text-pink-500">Home</Link></li>
          <li><Link to="/start-planning" className="block text-gray-700 hover:text-pink-500">Start Planning</Link></li>
          <li><Link to="/venues" className="block text-gray-700 hover:text-pink-500">Venues</Link></li>
          <li><Link to="/services" className="block text-gray-700 hover:text-pink-500">Services</Link></li>
          <li><Link to="/inspiration" className="block text-gray-700 hover:text-pink-500">Inspiration</Link></li>
          <li><Link to="/help" className="block text-gray-700 hover:text-pink-500">Help</Link></li>
          <li><Link to="/login" className="block text-pink-600 font-semibold">Sign In</Link></li>
        </ul>
      )}
    </nav>
  );
}


