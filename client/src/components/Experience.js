import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaTrophy } from 'react-icons/fa';

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Work Experience</h2>
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '30px' }}>
          {/* Timeline line */}
          <div style={{ 
            position: 'absolute', 
            left: '15px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(180deg, #ffb300 0%, #e09e00 50%, #ffb300 100%)',
            zIndex: 1 
          }}></div>
          
          {experience.map((exp, index) => (
            <div key={exp.id} style={{ 
              position: 'relative', 
              marginBottom: '40px',
              paddingLeft: '40px'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-7px',
                top: '8px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#ffb300',
                border: '3px solid #232323',
                zIndex: 2,
                boxShadow: '0 0 0 3px rgba(255, 179, 0, 0.2)'
              }}></div>
              
              {/* Experience card */}
              <div style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid #333',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Header section */}
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{ 
                    marginBottom: '8px', 
                    color: '#ffffff',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif'
                  }}>
                    <FaBriefcase style={{ marginRight: '8px', color: '#ffb300' }} />
                    {exp.title}
                  </h3>
                  <div style={{ 
                    color: '#ffb300', 
                    fontWeight: 600, 
                    fontStyle: 'italic', 
                    marginBottom: '6px', 
                    fontFamily: 'Times New Roman, Times, serif', 
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {exp.company}
                  </div>
                </div>
                
                {/* Details section */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#ffffff', 
                    fontWeight: 600, 
                    fontStyle: 'italic', 
                    marginBottom: '8px', 
                    fontFamily: 'Times New Roman, Times, serif', 
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FaMapMarkerAlt style={{ marginRight: '8px', color: '#ffb300' }} />
                    {exp.location}
                  </div>
                  <div style={{ 
                    color: '#ffffff', 
                    fontWeight: 600, 
                    fontStyle: 'italic', 
                    marginBottom: '12px', 
                    fontFamily: 'Times New Roman, Times, serif', 
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FaCalendarAlt style={{ marginRight: '8px', color: '#ffb300' }} />
                    {new Date(exp.startDate).toLocaleDateString()} - {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString()}
                  </div>
                </div>
                
                {/* Description */}
                <div style={{ 
                  fontSize: '0.95rem', 
                  marginBottom: '16px', 
                  color: '#e0e0e0',
                  lineHeight: '1.6'
                }}>
                  {exp.description}
                </div>
                
                {/* Technologies */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#ffb300', 
                    fontWeight: 600, 
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FaCode style={{ marginRight: '6px' }} />
                    Technologies
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} style={{ 
                        background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)', 
                        color: 'white', 
                        borderRadius: '20px', 
                        padding: '4px 12px', 
                        fontSize: '0.8rem', 
                        border: '1px solid #555',
                        fontWeight: 500
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#ffb300', 
                    fontWeight: 600, 
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FaTrophy style={{ marginRight: '6px' }} />
                    Key Achievements
                  </div>
                  <ul style={{ 
                    margin: '0', 
                    padding: '0 0 0 20px', 
                    listStyle: 'none', 
                    fontSize: '0.9rem', 
                    color: '#e0e0e0',
                    lineHeight: '1.5'
                  }}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ 
                        marginBottom: '4px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 