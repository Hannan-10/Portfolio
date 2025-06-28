import React from 'react';

const Certifications = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Certifications</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Chunk certifications into rows of three */}
          {Array.from({ length: Math.ceil(certifications.length / 3) }).map((_, rowIdx) => (
            <div key={rowIdx} style={{ display: 'flex', flexWrap: 'nowrap', gap: '30px', justifyContent: 'center', marginBottom: '30px' }}>
              {certifications.slice(rowIdx * 3, rowIdx * 3 + 3).map((cert) => (
                <div className="card" key={cert.id} style={{ width: '380px', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '18px 12px 0 12px' }}>
                  <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ marginBottom: '6px', textAlign: 'center', color: '#ffffff', fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.01em' }}>{cert.name}</h3>
                    <div style={{ color: '#ffb300', fontWeight: 600, fontStyle: 'italic', marginBottom: '6px', textAlign: 'center', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.05rem' }}>{cert.issuer}</div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '6px', textAlign: 'center', color: '#e0e0e0' }}>{cert.description}</div>
                    <div style={{ fontSize: '0.9rem', marginBottom: '6px', textAlign: 'center', color: '#e0e0e0', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      Issued: {new Date(cert.issueDate).toLocaleDateString()}
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginLeft: '6px',
                          background: '#ffb300',
                          color: '#222',
                          fontWeight: 700,
                          border: 'none',
                          borderRadius: '999px',
                          padding: '4px 14px 4px 10px',
                          fontSize: '0.95rem',
                          boxShadow: '0 2px 8px rgba(255,179,0,0.18)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          opacity: 1
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#e09e00'}
                        onMouseOut={e => e.currentTarget.style.background = '#ffb300'}
                      >
                        <span style={{ fontSize: '1.05em', marginRight: '2px' }}>👁️</span> View
                      </a>
                    </div>
                  </div>
                  <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '160px', objectFit: 'cover', marginTop: 0, borderRadius: 0, background: '#232323', boxShadow: '0 -2px 8px rgba(0,0,0,0.10)' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 