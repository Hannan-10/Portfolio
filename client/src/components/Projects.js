import React from 'react';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Projects</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {projects.map((project) => (
            <div className="card" key={project.id} style={{ width: '320px', minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
              <h3 style={{ margin: '18px 0 8px 0', color: '#ffffff' }}>{project.title}</h3>
              <p style={{ flex: 1, color: '#e0e0e0' }}>{project.description}</p>
              <div style={{ margin: '12px 0' }}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} style={{ background: '#666666', color: 'white', borderRadius: '12px', padding: '3px 12px', marginRight: '6px', fontSize: '0.85rem' }}>{tech}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 