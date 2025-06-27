import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillProgress = [
  { label: "Problem Solving", value: 90 },
  { label: "Web Development", value: 92 },
  { label: "AI Development", value: 80 },
  { label: "Version Control", value: 85 }
];

const About = ({ profile }) => {
  if (!profile) return null;
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: '#e0e0e0' }}>{profile.about}</p>
          <h3 style={{ marginBottom: '0.5rem', color: '#ffffff' }}>Skills</h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0 }}>
            {profile.skills.map((skill, idx) => (
              <li key={idx} style={{ background: '#4a4a4a', color: 'white', borderRadius: '20px', padding: '6px 18px', fontSize: '0.98rem' }}>{skill}</li>
            ))}
          </ul>
          {/* Progress Circles Section */}
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {skillProgress.map((item, idx) => (
              <div key={idx} style={{ width: 120, textAlign: 'center' }}>
                <CircularProgressbar
                  value={item.value}
                  text={`${item.value}%`}
                  styles={buildStyles({
                    pathColor: "#FFA500",
                    textColor: "#e0e0e0",
                    trailColor: "#222",
                    textSize: "1.3rem",
                  })}
                />
                <div style={{ marginTop: 10, color: "#888", fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 