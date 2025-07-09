import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(90deg, #6366f1 0%, #a5b4fc 100%)',
      padding: '1rem 2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      {/* Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff', letterSpacing: '2px' }}>
        <span role="img" aria-label="logo">🌟</span> MyBrand
      </div>
      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link 
          to='/' 
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            transition: 'color 0.2s',
          }}
          onMouseOver={e => e.target.style.color = '#facc15'}
          onMouseOut={e => e.target.style.color = '#fff'}
        >
          Home
        </Link>
        <Link 
          to='/about' 
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            transition: 'color 0.2s',
          }}
          onMouseOver={e => e.target.style.color = '#facc15'}
          onMouseOut={e => e.target.style.color = '#fff'}
        >
          About
        </Link>
        <Link 
          to='/services' 
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            transition: 'color 0.2s',
          }}
          onMouseOver={e => e.target.style.color = '#facc15'}
          onMouseOut={e => e.target.style.color = '#fff'}
        >
          Services
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
