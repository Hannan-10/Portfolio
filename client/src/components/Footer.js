import React from 'react';

const Footer = ({ profile }) => (
  <footer style={{ background: '#1a1a1a', color: 'white', padding: '30px 0', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #333333' }}>
    <div className="container">
      <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>
        &copy; {new Date().getFullYear()} {profile?.name || 'Hannan Fareed'} &mdash; All Rights Reserved
      </div>
      
    </div>
  </footer>
);

export default Footer; 