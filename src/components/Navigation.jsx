import React from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button 
          onClick={() => scrollToSection('profile')}
          className="nav-button profile"
        >
          Profile
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="nav-button skills"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('experiences')}
          className="nav-button experiences"
        >
          Experiences
        </button>
      </div>
    </nav>
  );
};

export default Navigation;