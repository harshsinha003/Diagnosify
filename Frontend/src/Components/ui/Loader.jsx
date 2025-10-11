import React from "react";

const Loader = ({ title, subtitle }) => {
  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, var(--background-dark), var(--background-darker))'
      }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="text-center">
        <div
          style={{
            borderColor: 'var(--primary-color)',
            animation: "spin 3s linear infinite"
          }}
          className="w-16 h-16 border-4 border-dashed rounded-full animate-spin mx-auto"
        ></div>
        <h2 
          style={{ color: '#ffffff' }}
          className="mt-4 text-xl font-semibold"
        >
          {title}...
        </h2>
        <p 
          style={{ color: 'var(--text-muted)' }}
          className="mt-2"
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Loader;
