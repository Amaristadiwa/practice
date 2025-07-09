import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #dbeafe 100%)',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem'
      }}
    >
      <h1 style={{ color: '#6366f1', fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to MyBrand!
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#334155', marginBottom: '2rem', textAlign: 'center' }}>
        Your one-stop solution for innovative web development, creative design, and expert consulting.
      </p>
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
        alt="Welcome"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '12px',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(99,102,241,0.12)'
        }}
      />
      <button
        style={{
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
          transition: 'background 0.2s'
        }}
        onMouseOver={e => e.target.style.background = '#4f46e5'}
        onMouseOut={e => e.target.style.background = '#6366f1'}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
