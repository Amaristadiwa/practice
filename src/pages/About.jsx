import React from 'react';

const About = () => {
  return (
    <div style={{
      padding: '2rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      maxWidth: '700px',
      margin: '2rem auto',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1 style={{ color: '#3730a3' }}>About Us</h1>
      <p>
        Welcome to our website! We are passionate about creating exceptional digital experiences and providing value to our users.
      </p>
      <h2>Our Mission</h2>
      <ul>
        <li>Deliver high-quality solutions that empower individuals and businesses.</li>
        <li>Foster innovation through technology and creativity.</li>
        <li>Build a community where ideas are shared and growth is encouraged.</li>
      </ul>
      <h2>Meet the Team</h2>
      <table style={{ width: '100%', marginBottom: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd' }}>Name</th>
            <th style={{ borderBottom: '1px solid #ddd' }}>Role</th>
            <th style={{ borderBottom: '1px solid #ddd' }}>Expertise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alex Smith</td>
            <td>Lead Developer</td>
            <td>React, Node.js</td>
          </tr>
          <tr>
            <td>Jamie Lee</td>
            <td>UI/UX Designer</td>
            <td>Figma, Adobe XD</td>
          </tr>
          <tr>
            <td>Taylor Brown</td>
            <td>Content Strategist</td>
            <td>SEO, Copywriting</td>
          </tr>
        </tbody>
      </table>
      <h2>Contact Us</h2>
      <p>
        Have questions or want to work with us? <br />
        <strong>Email:</strong> hello@example.com <br />
        <strong>Follow us:</strong> Twitter @ourcompany, LinkedIn: Our Company
      </p>
    </div>
  );
};

export default About;
