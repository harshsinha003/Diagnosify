import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVirus } from "@fortawesome/free-solid-svg-icons";
import Disease from "./Disease/Disease";
import Predict from "./SymptomsPrediction/Predict";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Prediction = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState(searchParams.get("active") || "Predict");

  useEffect(() => {
    setActive(searchParams.get("active") || "Predict");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams]);

  return (
    <div style={{background: 'linear-gradient(135deg, #0a0e27, #16213e, #1a2332)'}} className="flex flex-col min-h-screen">
      {active === "Predict" ? <Predict /> : <Disease />}

      <div className="px-7 w-full flex justify-center sticky bottom-0 py-5 z-10">
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }} className="flex rounded-3xl w-1/6 p-2 justify-between">
          <motion.div
            className={`flex-1 flex items-center justify-center flex-col cursor-pointer`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("?active=Predict")}
          >
            <motion.div
              style={{
                background: active === "Predict" 
                  ? 'linear-gradient(135deg, #00d4aa, #0099cc)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: active === "Predict" ? '#ffffff' : '#a0a0a0',
                boxShadow: active === "Predict" ? '0 4px 16px rgba(0, 212, 170, 0.3)' : 'none'
              }}
              className="flex items-center justify-center p-3 rounded-full"
            >
              <FontAwesomeIcon icon={faHeart} className="text-2xl" />
            </motion.div>
            <motion.span
              style={{
                color: active === "Predict" ? '#00d4aa' : '#a0a0a0'
              }}
              className="mt-2 text-sm font-semibold transition-colors"
            >
              Prediction
            </motion.span>
          </motion.div>

          <motion.div
            className={`flex-1 flex items-center justify-center flex-col cursor-pointer ${
              active === "Disease" && "scale-110"
            }`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("?active=Disease")}
          >
            <div
              style={{
                background: active === "Disease" 
                  ? 'linear-gradient(135deg, #00d4aa, #0099cc)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: active === "Disease" ? '#ffffff' : '#a0a0a0',
                boxShadow: active === "Disease" ? '0 4px 16px rgba(0, 212, 170, 0.3)' : 'none'
              }}
              className="flex items-center justify-center p-3 rounded-full"
            >
              <FontAwesomeIcon icon={faVirus} className="text-2xl" />
            </div>
            <span
              style={{
                color: active === "Disease" ? '#00d4aa' : '#a0a0a0'
              }}
              className="mt-2 text-sm font-semibold transition-colors"
            >
              Disease
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
