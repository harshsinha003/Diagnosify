import React, { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        videoRef.current?.play().catch(err => {
          console.error('Video autoplay failed:', err);
        });
      }, 100);
      return () => clearTimeout(timer);
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
        className="w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        <source src="/background.mp4?v=6" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
