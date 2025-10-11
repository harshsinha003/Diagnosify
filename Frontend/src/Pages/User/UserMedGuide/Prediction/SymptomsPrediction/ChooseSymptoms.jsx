import React, { useState } from "react";
import { motion } from "framer-motion";
import Symptoms from "../SymptomsData";

const ChooseSymptoms = ({
  checkedItems,
  handleCheckboxChange,
  handleSubmit,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [diseases, setDiseases] = useState(Symptoms);

  // Filter symptoms based on search term
  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, var(--background-dark), var(--background-darker))'
      }}
      className="min-h-screen rounded-lg flex flex-col items-center p-6"
    >
      <h1 
        style={{
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        className="text-4xl font-extrabold text-center mb-4"
      >
        Select Your Symptoms
      </h1>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg mb-6"
      >
        <input
          type="text"
          placeholder="Search for a symptom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff'
          }}
          className="w-full px-4 py-3 text-lg rounded-full shadow-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition-all duration-300"
        />
      </motion.div>

      {/* Symptom Grid */}
      <motion.div
        className="grid grid-cols-1 max-h-screen w-full max-w-5xl overflow-y-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredDiseases.map((disease, ind) => (
          <motion.div
            key={ind}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0, 212, 170, 0.15)"
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            className="p-4 rounded-xl hover:border-[#00d4aa] flex items-center justify-between transition-all duration-300"
          >
            <h1 className="text-lg font-semibold text-white">
              {disease.name}
            </h1>
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                id={disease.name}
                name={disease.name}
                value={disease.name}
                checked={checkedItems[ind] === 1}
                onChange={(e) => handleCheckboxChange(e, ind)}
                style={{
                  accentColor: 'var(--primary-color)'
                }}
                className="h-6 w-6 cursor-pointer transition-all appearance-none rounded border border-gray-500 bg-gray-700 checked:bg-[#00d4aa] checked:border-[#00d4aa]"
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </motion.div>
        ))}
      </motion.div>

      {/* Submit Button */}
      <motion.button
        onClick={handleSubmit}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
          boxShadow: '0 8px 32px rgba(0, 212, 170, 0.25)'
        }}
        className="text-white font-bold text-2xl mt-8 py-4 px-8 rounded-full w-full max-w-lg hover:shadow-lg hover:shadow-[#00d4aa]/30 transition-all duration-300 transform hover:scale-105"
      >
        Predict
      </motion.button>
    </div>
  );
};

export default ChooseSymptoms;
