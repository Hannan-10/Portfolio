import React from 'react';

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {experience.map((exp) => (
            <div className="card" key={exp.id} style={{ width: '350px', minHeight: '220px' }}>
              <h3 style={{ marginBottom: '6px', color: '#ffffff' }}>{exp.title}</h3>
              <div style={{ color: '#cccccc', fontWeight: 500, marginBottom: '6px' }}>{exp.company}</div>
              <div style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#e0e0e0' }}>{exp.location}</div>
              <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0' }}>
                {new Date(exp.startDate).toLocaleDateString()} - {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString()}
              </div>
              <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0' }}>{exp.description}</div>
              <div style={{ margin: '8px 0' }}>
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} style={{ background: '#4a4a4a', color: 'white', borderRadius: '12px', padding: '3px 12px', marginRight: '6px', fontSize: '0.85rem' }}>{tech}</span>
                ))}
              </div>
              <ul style={{ margin: '8px 0 0 0', padding: 0, listStyle: 'disc inside', fontSize: '0.95rem', color: '#e0e0e0' }}>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 