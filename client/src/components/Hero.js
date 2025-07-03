import React from 'react';
import { Link } from 'react-scroll';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ profile }) => {
  if (!profile) {
    return (
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hannan Fareed</h1>
            <h2>Computer Scientist</h2>
            <p>Loading profile information...</p>
          </div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-cover">
        <img src={profile.coverPhoto} alt="Cover" className="cover-photo" />
        <div className="cover-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={profile.profilePicture} 
                alt={profile.name} 
                className="profile-image"
              />
            </div>
            
            <div className="profile-info">
              <h1 className="hero-name">
                {profile.name}
              </h1>
              <h2 className="hero-title" style={{
                fontFamily: 'Times New Roman, Times, serif',
                fontStyle: 'italic',
                color: '#ffb300',
                fontWeight: 600,
                margin: '8px 0 18px 0',
                textShadow: '0 2px 8px rgba(0,0,0,0.18)'
              }}>{profile.title}</h2>
              
              <div className="profile-details">
                <div className="detail-item">
                  <strong>University:</strong> <span className="detail-item-value">{profile.university}</span>
                </div>
                <div className="detail-item">
                  <strong>CGPA:</strong> <span className="detail-item-value">{profile.cgpa}</span>
                </div>
                <div className="detail-item">
                  <strong>Date of Birth:</strong> <span className="detail-item-value">{formatDate(profile.dateOfBirth)}</span>
                </div>
                {profile.location && (
                  <div className="detail-item">
                    <strong>Location:</strong> <span className="detail-item-value">{profile.location}</span>
                  </div>
                )}
              </div>

              <div className="contact-links">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <FaEnvelope />
                  <span>Email</span>
                </a>
                <a href={`tel:${profile.phone}`} className="contact-link">
                  <FaPhone />
                  <span>Phone</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaDownload />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="hero-actions">
                <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="contact" smooth={true} duration={500} className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 