import React, { useRef, useEffect } from 'react';
import './IntroVideo.css';

const IntroVideo = ({ videoTransitioned, onVideoEnd }) => {
  const sectionVideoRef = useRef(null);

  const handleVideoError = () => {
    console.log('Introduction video failed to load');
  };

  const handleVideoLoaded = () => {
    console.log('Introduction video loaded successfully');
  };

  const handleVideoEnd = () => {
    console.log('Introduction video ended - starting transition sequence');

    // Step 1: Exit fullscreen first
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        console.log('Exited fullscreen, waiting 3 seconds before navigation');
        // Step 2: Wait 3 seconds then navigate
        setTimeout(() => {
          console.log('Navigating to Library section');
          if (onVideoEnd) {
            onVideoEnd();
          }
        }, 3000);
      }).catch((error) => {
        console.log('Error exiting fullscreen:', error);
        // If fullscreen exit fails, still navigate after 3 seconds
        setTimeout(() => {
          if (onVideoEnd) {
            onVideoEnd();
          }
        }, 3000);
      });
    } else {
      // If not in fullscreen, just wait 3 seconds and navigate
      console.log('Not in fullscreen, waiting 3 seconds before navigation');
      setTimeout(() => {
        console.log('Navigating to Library section');
        if (onVideoEnd) {
          onVideoEnd();
        }
      }, 3000);
    }
  };

  const handleExploreClick = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (videoTransitioned && sectionVideoRef.current) {
      const video = sectionVideoRef.current;

      // Unmute and set volume to maximum
      video.muted = false;
      video.volume = 1.0;

      // Ensure video plays with full audio
      video.play().catch(error => {
        console.log('Auto-play with audio failed:', error);
      });

      // Auto-enter fullscreen when video becomes visible
      const enterFullscreen = async () => {
        try {
          if (video.requestFullscreen) {
            await video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            await video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            await video.msRequestFullscreen();
          }
        } catch (error) {
          console.log('Fullscreen request failed:', error);
        }
      };

      // Small delay to ensure video is ready
      setTimeout(enterFullscreen, 500);
    }
  }, [videoTransitioned]);

  return (
    <div
      className={`intro-video-section ${videoTransitioned ? 'visible' : 'hidden'}`}
    >
      <div className="intro-video-header">
        <h3 className="intro-title">
          Welcome to My Portfolio
        </h3>
        <p className="intro-description">
          This video showcases my journey, my passion for engineering and development, and my new zeal to break into creativity with software engineering.
        </p>
      </div>

      <div className="intro-video-container">
        <video
          ref={sectionVideoRef}
          controls
          autoPlay={videoTransitioned}
          className="intro-video"
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          onEnded={handleVideoEnd}
        >
          <source src="/assets/dieties%20like%20eze-urukwu.mp4" type="video/mp4" />
          <source src="/assets/dieties like eze-urukwu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="intro-video-footer">
       
        <button 
          className="explore-button"
          onClick={handleExploreClick}
        >
          🚀 Explore further
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;