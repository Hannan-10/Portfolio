import React from 'react';

const Certifications = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {certifications.map((cert) => (
            <div className="card" key={cert.id} style={{ width: '320px', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={cert.image} alt={cert.name} style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '10px' }} />
              <h3 style={{ marginBottom: '6px', textAlign: 'center', color: '#ffffff' }}>{cert.name}</h3>
              <div style={{ color: '#cccccc', fontWeight: 500, marginBottom: '6px', textAlign: 'center' }}>{cert.issuer}</div>
              <div style={{ fontSize: '0.95rem', marginBottom: '6px', textAlign: 'center', color: '#e0e0e0' }}>{cert.description}</div>
              <div style={{ fontSize: '0.9rem', marginBottom: '6px', textAlign: 'center', color: '#e0e0e0' }}>
                Issued: {new Date(cert.issueDate).toLocaleDateString()}<br />
                Expires: {new Date(cert.expiryDate).toLocaleDateString()}
              </div>
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '10px' }}>Verify</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 