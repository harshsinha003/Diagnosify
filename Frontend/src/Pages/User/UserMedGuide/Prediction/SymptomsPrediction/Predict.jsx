import React, { useState } from "react";
import { motion } from "framer-motion";
import ChooseSymptoms from "./ChooseSymptoms";
import Recommendation from "./Recommendation";
import toast from "react-hot-toast";
import { predictDisease } from "../../../../../Services/User/Prediction/DiseaseInfo";
import Loader from "../../../../../Components/ui/Loader";
import Symptoms from "../SymptomsData";

const Predict = () => {
  const finalArray = new Array(132).fill(0);
  const [checkedItems, setCheckedItems] = useState(finalArray);
  const [recommendationSection, setRecommendationSection] = useState(false);
  const [diseaseInfo, setDiseaseInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (e, ind) => {
    setCheckedItems((prev) =>
      prev.map((item, i) => (i === ind ? (e.target.checked ? 1 : 0) : item))
    );
  };

  const handleSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!checkedItems.includes(1)) {
      toast.error("Please select at least one symptom");
      return;
    }

    // Get selected symptoms for PDF generation
    const selectedSymptoms = checkedItems
      .map((item, index) => item === 1 ? Symptoms[index]?.name : null)
      .filter(symptom => symptom !== null);

    setLoading(true);
    try {
      const res = await predictDisease(checkedItems);
      setCheckedItems(finalArray);
      setDiseaseInfo({
        ...res.data,
        selectedSymptoms: selectedSymptoms,
        predictionDate: new Date().toISOString()
      });
      setRecommendationSection(true);
    } catch (error) {
      toast.error("Error fetching disease information");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, var(--background-dark), var(--background-darker))'
      }}
      className="flex-grow flex flex-col h-full p-6"
    >
      {!loading ? (
        <>
          <motion.div
            className="text-2xl p-3 flex justify-between items-center font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="text-6xl font-bold"
            >
              Predict
            </h1>
            {recommendationSection && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
                  boxShadow: '0 8px 32px rgba(0, 212, 170, 0.25)'
                }}
                className="text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-[#00d4aa]/30 transition-all duration-300"
                onClick={() => {
                  setLoading(false);
                  setRecommendationSection(false);
                }}
              >
                Back to Symptoms
              </motion.button>
            )}
          </motion.div>
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {!recommendationSection ? (
              <ChooseSymptoms
                handleSubmit={handleSubmit}
                handleCheckboxChange={handleCheckboxChange}
                checkedItems={checkedItems}
              />
            ) : (
              <Recommendation diseaseInfo={diseaseInfo} />
            )}
          </motion.div>
        </>
      ) : (
        <motion.div
          className="flex-grow flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Loader
            title="Predicting"
            subtitle="Your disease is getting predicted!"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Predict;
