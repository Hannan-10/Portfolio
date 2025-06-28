import React from 'react';

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {experience.map((exp) => (
            <div className="card" key={exp.id} style={{ width: '350px', minHeight: '220px', background: '#232323', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '18px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ marginBottom: '6px', color: '#ffffff' }}>{exp.title}</h3>
              <div style={{ color: '#ffb300', fontWeight: 600, fontStyle: 'italic', marginBottom: '6px', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.05rem' }}>{exp.company}</div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontStyle: 'italic', marginBottom: '6px', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.05rem' }}>{exp.location}</div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontStyle: 'italic', marginBottom: '6px', fontFamily: 'Times New Roman, Times, serif', fontSize: '1.05rem' }}>
                {new Date(exp.startDate).toLocaleDateString()} - {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString()}
              </div>
              <div style={{ fontSize: '0.95rem', marginBottom: '6px', color: '#e0e0e0' }}>{exp.description}</div>
              <div style={{ margin: '8px 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} style={{ background: '#4a4a4a', color: 'white', borderRadius: '12px', padding: '3px 12px', fontSize: '0.85rem', marginRight: 0, marginBottom: '6px' }}>{tech}</span>
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