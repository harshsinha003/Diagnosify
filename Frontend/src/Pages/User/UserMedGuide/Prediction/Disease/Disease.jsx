import React, { useState } from "react";
import Card from "../../../../../Components/ui/Card.jsx";
import disease from "./DiseaseData.js";
import toast from "react-hot-toast";
import Modal from "../../../../../Components/ui/Modal.jsx";
import { getDiseaseInfo } from "../../../../../Services/User/Prediction/DiseaseInfo.js";

const Disease = () => {
  const diseases = disease;
  const [filteredDiseases, setFilteredDiseases] = useState(disease);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredDiseases(
      diseases.filter((disease) => disease.name.toLowerCase().includes(value))
    );
  };

  const handleClick = async (disease) => {
    setLoading(true);
    try {
      setIsModalOpen(true);
      const res = await getDiseaseInfo(disease);
      setSelectedDisease(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching disease information");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div style={{background: 'linear-gradient(135deg, #0a0e27, #16213e, #1a2332)'}} className="flex-grow flex-col flex justify-around text-xl h-auto p-9">
      <input
        type="text"
        name="password"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search disease"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          backdropFilter: 'blur(10px)'
        }}
        className="p-3 mb-2 w-full rounded-full placeholder-gray-500 focus:border-[#00d4aa] focus:outline-none focus:ring-2 focus:ring-[#00d4aa] transition-colors duration-300"
      />
      <div className="grid grid-cols-6 gap-4">
        {filteredDiseases.map((disease, ind) => (
          <div 
            key={ind} 
            onClick={() => handleClick(disease)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            className="cursor-pointer rounded-xl transition-all duration-300 hover:scale-105 hover:border-[#00d4aa] hover:shadow-lg hover:shadow-[#00d4aa]/20"
          >
            <Card key={ind} disease={disease} />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        loading={loading}
        diseaseInfo={selectedDisease}
      />
    </div>
  );
};

export default Disease;
