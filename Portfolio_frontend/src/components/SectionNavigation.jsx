import React, { useState, useEffect } from 'react';
import './SectionNavigation.css';

const SectionNavigation = ({ currentSection, totalSections, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navigation after a delay when component mounts
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    if (currentSection > 0) {
      onNavigate(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      onNavigate(currentSection + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`section-navigation ${isVisible ? 'visible' : ''}`}>
      {/* Scroll to Top Button */}
      <button
        className="nav-btn scroll-top-btn"
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        ⬆️
      </button>

      {/* Previous Section Button */}
      <button
        className={`nav-btn prev-btn ${currentSection === 0 ? 'disabled' : ''}`}
        onClick={handlePrevious}
        disabled={currentSection === 0}
        title="Previous Section"
      >
        ⬅️
      </button>

      {/* Section Indicator */}
      <div className="section-indicator">
        <span className="current-section">{currentSection + 1}</span>
        <span className="separator">/</span>
        <span className="total-sections">{totalSections}</span>
      </div>

      {/* Next Section Button */}
      <button
        className={`nav-btn next-btn ${currentSection === totalSections - 1 ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={currentSection === totalSections - 1}
        title="Next Section"
      >
        ➡️
      </button>

      {/* Section Dots Navigation */}
      <div className="section-dots">
        {Array.from({ length: totalSections }, (_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSection ? 'active' : ''}`}
            onClick={() => onNavigate(index)}
            title={`Go to Section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionNavigation;