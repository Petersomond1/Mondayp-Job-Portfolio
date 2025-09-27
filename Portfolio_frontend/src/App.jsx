import React, { useEffect, useState } from "react";
import "./App.css";

// Import the new modular components
import Navigation from "./components/Navigation";
import TeaserVideo from "./components/TeaserVideo";
import IntroVideo from "./components/IntroVideo";
import MainContent from "./components/MainContent";
import ContactFooter from "./components/ContactFooter";
import Home from "./components/Home";
import Library from "./components/Library";
import SectionNavigation from "./components/SectionNavigation";
import  "./components/Library.css";

function App() {
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(true);
  const [videoTransitioned, setVideoTransitioned] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Define sections with their IDs for navigation
  const sections = [
    { id: 'intro-video', name: 'Introduction' },
    { id: 'book-section', name: 'Library' },
    { id: 'home', name: 'Book Selection' },
    { id: 'main-content', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ];

  // Handler for Library component book clicks - triggers navigation to Home section
  const handleBookClick = (bookIndex) => {
    console.log(`Library book ${bookIndex} clicked - navigating to Home section`);
    // Navigate to Home section (index 2 in our sections array)
    handleSectionNavigation(2);
  };

  // Handler for IntroVideo end - triggers navigation to Library section
  const handleVideoEnd = () => {
    console.log('IntroVideo ended - navigating to Library section');
    // Navigate to Library section (index 1 in our sections array)
    handleSectionNavigation(1);
  };

  // Handle section navigation
  const handleSectionNavigation = (sectionIndex) => {
    const targetSection = sections[sectionIndex];
    if (targetSection) {
      const element = document.getElementById(targetSection.id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setCurrentSection(sectionIndex);
      }
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!videoTransitioned) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoTransitioned, sections]);

  useEffect(() => {
    // Listen for any click, scroll, or key press to transition the video
    const handleUserInteraction = () => {
      if (showFullscreenVideo) {
        setShowFullscreenVideo(false);
        setVideoTransitioned(true);
        // Remove the event listeners after first interaction
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("keydown", handleUserInteraction);
        document.removeEventListener("scroll", handleUserInteraction);
        document.removeEventListener("wheel", handleUserInteraction);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("scroll", handleUserInteraction);
    document.addEventListener("wheel", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      document.removeEventListener("wheel", handleUserInteraction);
    };
  }, [showFullscreenVideo]);

  return (
    <>
      <section>
        {/* Navigation Component */}
        <Navigation />
      </section>

      {/* Fullscreen Teaser Video Component */}
      <TeaserVideo
        showFullscreenVideo={showFullscreenVideo}
        onHideVideo={() => setShowFullscreenVideo(false)}
      />
      <section id="intro-video">
        {/* Introduction Video Component */}
        <IntroVideo videoTransitioned={videoTransitioned} onVideoEnd={handleVideoEnd} />
      </section>

      <section style={{ height: "650px" }} id="book-section">
        {/* <Book3d /> */}
        <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />
        {/* Library Section */}
        <Library onBookClick={handleBookClick} videoTransitioned={videoTransitioned} />
      </section>

      <hr className="hr" style={{ marginTop: "25px", marginBottom: "25px" }} />

      <section id="home">
        {/* Home Section */}
        <Home videoTransitioned={videoTransitioned} />
      </section>

      <section id="main-content">
        {/* Main Content Component */}
        <MainContent videoTransitioned={videoTransitioned} />
      </section>

      {/* Contact and Footer Component */}
      <section id="contact">
        <ContactFooter />
      </section>

      {/* Section Navigation - Only show after video transition */}
      {videoTransitioned && (
        <SectionNavigation
          currentSection={currentSection}
          totalSections={sections.length}
          onNavigate={handleSectionNavigation}
        />
      )}
    </>
  );
}

export default App;
