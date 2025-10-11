import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Modal = ({ isOpen,loading, onClose, diseaseInfo }) => {
  const [accordionData, setAccordionData] = useState({
    Description: "",
    Workout: "",
    Diets: "",
    Medication: "",
  });

  useEffect(() => {
    if (diseaseInfo) {
      setAccordionData({
        Description: diseaseInfo.description || "",
        Workout: diseaseInfo.workout ? diseaseInfo.workout.join(", ") : "",
        Diets: diseaseInfo.diets
          ? diseaseInfo.diets[0]
              .replace(/[\[\]']+/g, "")
              .split(", ")
              .join(", ")
          : "",
        Medication: diseaseInfo.medication
          ? diseaseInfo.medication[0]
              .replace(/[\[\]']+/g, "")
              .split(", ")
              .join(", ")
          : "",
      });
    }
  }, [diseaseInfo]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
      className="fixed inset-0 flex justify-center items-center z-50"
    >
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.6)'
        }}
        className="text-white p-6 rounded-xl w-1/3 max-h-[80vh] flex flex-col"
      >
        <h2 
          style={{
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          className="text-2xl font-bold mb-4"
        >
          Disease Information
        </h2>

        {loading ? (
          <Loader title={"Loading"} subtitle={"Data is being fetched!"}  />
        ) : (
          <div className="flex-1 overflow-y-auto mb-4">
            {Object.keys(accordionData).map((key, ind) => (
              <div 
                key={key} 
                style={{
                  borderTop: ind !== 0 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}
                className={ind !== 0 ? "mt-4 pt-4" : ""}
              >
                <h3 
                  style={{ color: 'var(--primary-color)' }}
                  className="text-lg font-semibold"
                >
                  {key}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{accordionData[key]}</p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            background: 'linear-gradient(135deg, var(--accent-color), #ff4757)',
            border: 'none'
          }}
          className="mt-4 p-2 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
