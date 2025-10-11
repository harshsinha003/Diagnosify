import React from "react";

const Card = ({ disease }) => {
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      className="relative cursor-pointer h-60 w-40 m-3 overflow-hidden rounded-lg group transition-all duration-300 hover:shadow-xl hover:shadow-[#00d4aa]/20 hover:border-[#00d4aa]"
    >
      {disease.image && (
        <img
          src={disease.image}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-80 group-hover:opacity-50"
        />
      )}
      <h1 
        style={{
          background: 'linear-gradient(135deg, var(--background-dark), transparent)',
          color: '#ffffff'
        }}
        className="absolute left-0 w-full flex bottom-0 justify-center text-xl font-bold transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 p-2"
      >
        {disease.name}
      </h1>
    </div>
  );
};

export default Card;
