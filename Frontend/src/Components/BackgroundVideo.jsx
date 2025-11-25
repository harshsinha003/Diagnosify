import React, { useEffect, useRef, useState } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Preload video in background
      const video = videoRef.current;
      
      // Show gradient until video is ready
      video.addEventListener('loadeddata', () => {
        setIsLoaded(true);
        video.play().catch(err => {
          console.error('Video autoplay failed:', err);
        });
      });
    }
  }, []); // Empty dependency array ensures this component never re-renders

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full"
      style={{
        zIndex: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/video-poster.jpg"
        className="w-full h-full object-cover"
        style={{ 
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
        onError={(e) => {
          console.error('Video failed to load:', e);
        }}
      >
        <source src="/background.mp4?v=7" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
