import React from 'react';

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Education</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {education.map((edu) => (
            <div className="card" key={edu.id} style={{ width: '350px', minHeight: '220px', position: 'relative', overflow: 'hidden', background: '#232323' }}>
              {edu.image && (
                <img src={edu.image} alt={edu.institution} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, zIndex: 0 }} />
              )}
              <div style={{ position: 'relative', zIndex: 1, padding: '18px 12px' }}>
                <h3 style={{ marginBottom: '6px', color: '#ffffff' }}>{edu.degree} in {edu.field}</h3>
                <div style={{ color: '#ffb300', fontWeight: 600, fontStyle: 'italic', marginBottom: '6px', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.05rem' }}>{edu.institution}</div>
                <div style={{ color: '#ffb300', fontWeight: 600, fontStyle: 'italic', marginBottom: '6px', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.05rem' }}>{edu.location}</div>
                <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0', fontStyle: 'italic' }}>
                  {new Date(edu.startDate).toLocaleDateString()} - {edu.current ? 'Present' : new Date(edu.endDate).toLocaleDateString()}
                </div>
                {edu.cgpa !== undefined && (
                  <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0', fontStyle: 'italic' }}>CGPA: {edu.cgpa}</div>
                )}
                {edu.Marks !== undefined && (
                  <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0', fontStyle: 'italic' }}>Marks: {edu.Marks}</div>
                )}
                <div style={{ fontSize: '0.95rem', color: '#e0e0e0' }}>{edu.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 