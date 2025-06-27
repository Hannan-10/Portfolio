import React from 'react';

const Footer = ({ profile }) => (
  <footer style={{ background: '#1a1a1a', color: 'white', padding: '30px 0', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #333333' }}>
    <div className="container">
      <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>
        &copy; {new Date().getFullYear()} {profile?.name || 'Hannan Fareed'} &mdash; All Rights Reserved
      </div>
      <div style={{ marginTop: 10, fontSize: '0.95rem', opacity: 0.8 }}>
        Made with <span style={{ color: '#cccccc', fontWeight: 700 }}>React</span>
      </div>
    </div>
  </footer>
);

export default Footer; 