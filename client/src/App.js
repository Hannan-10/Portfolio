import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { portfolioData } from './data/portfolioData';

function App() {
  const { profile, projects, education, experience, certifications } = portfolioData;

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero profile={profile} />
          <About profile={profile} />
          <Projects projects={projects} />
          <Education education={education} />
          <Experience experience={experience} />
          <Certifications certifications={certifications} />
          <Contact />
        </main>
        <Footer profile={profile} />
      </div>
    </Router>
  );
}

export default App; 