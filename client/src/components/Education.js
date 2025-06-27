import React from 'react';

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {education.map((edu) => (
            <div className="card" key={edu.id} style={{ width: '350px', minHeight: '220px' }}>
              <h3 style={{ marginBottom: '6px', color: '#ffffff' }}>{edu.degree} in {edu.field}</h3>
              <div style={{ color: '#cccccc', fontWeight: 500, marginBottom: '6px' }}>{edu.institution}</div>
              <div style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#e0e0e0' }}>{edu.location}</div>
              <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0' }}>
                {new Date(edu.startDate).toLocaleDateString()} - {edu.current ? 'Present' : new Date(edu.endDate).toLocaleDateString()}
              </div>
              <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0' }}>CGPA: {edu.cgpa}</div>
              <div style={{ fontSize: '0.95rem', color: '#e0e0e0' }}>{edu.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 