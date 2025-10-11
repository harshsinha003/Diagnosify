import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import jsPDF from 'jspdf';


const Recommendation = ({ diseaseInfo }) => {
  const [refreshFunFact, setRefreshFunFact] = useState(0);
  const [currentSymptoms, setCurrentSymptoms] = useState([]);


  const [medicalData, setMedicalData] = useState({
    description: "",
    medication: "",
    diets: "",
    workout: "",
  });


  useEffect(() => {
    setMedicalData({
      description: diseaseInfo.description,
      medication: diseaseInfo.medication[0]
        .replace(/[\[\]']+/g, "")
        .split(", ")
        .join(", "),
      diets: diseaseInfo.diets[0]
        .replace(/[\[\]']+/g, "")
        .split(", ")
        .join(", "),
      workout: diseaseInfo.workout.join(", "),
    });
    
    // Initialize current symptoms
    if (diseaseInfo.selectedSymptoms) {
      setCurrentSymptoms(diseaseInfo.selectedSymptoms);
    }
  }, [diseaseInfo]);


  // Function to remove a symptom
  const removeSymptom = (indexToRemove) => {
    setCurrentSymptoms(prev => prev.filter((_, index) => index !== indexToRemove));
  };


  const funFacts = [
    "The human nose can detect over 1 trillion different smells. 👃",
    "Your body has enough iron in it to make a nail that's 3 inches long. 🧲",
    "The human body contains about 37.2 trillion cells. 🔬",
    "Your skin is the largest organ in your body. 🧑‍⚕️",
    "The average human heart beats around 100,000 times a day. ❤️",
    "Humans share about 60% of their DNA with bananas. 🍌",
    "A sneeze travels out of your nose at over 100 miles per hour. 🌬️",
    "Your bones are constantly being broken down and rebuilt. 🦴",
    "The human brain is about 75% water. 🧠💧",
    "On average, you produce about 1 to 1.5 quarts of saliva each day. 💦",
  ];


  // Medical information cards in priority order
  const medicalCards = [
    {
      title: "Understanding Your Condition",
      content: medicalData.description,
      icon: "🔍",
      color: "var(--secondary-color)",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Recommended Medication",
      content: medicalData.medication,
      icon: "💊",
      color: "var(--accent-color)",
      bgGradient: "from-red-500/20 to-pink-500/20",
    },
    {
      title: "Dietary Recommendations",
      content: medicalData.diets,
      icon: "🥗",
      color: "var(--primary-color)",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Exercise & Workout",
      content: medicalData.workout,
      icon: "🏃‍♂️",
      color: "var(--primary-color)",
      bgGradient: "from-blue-500/20 to-teal-500/20",
    },
  ];


  const randomFunFact = useMemo(() => {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }, [refreshFunFact]);


  // PDF Generation Function - Single Page Format with Better Spacing
  const generatePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPos = 18;
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    const lineHeight = 7;
    const tealBorderHeight = 8.5; // Teal border
    const redBorderHeight = 1.5;  // Thin red line (1.5px)
    const totalTopBorderHeight = tealBorderHeight + redBorderHeight; // Total 10px

    // Color scheme
    const brandColor = [0, 212, 170];
    const redColor = [220, 53, 69];
    const darkHeadingColor = [40, 40, 40];
    const contentColor = [80, 80, 80];
    const lightGrayColor = [120, 120, 120];
    const blackColor = [0, 0, 0];
    const borderColor = [200, 200, 200];

    // Helper function to clean text
    const cleanText = (text) => {
      if (!text) return '';
      return text.toString()
        .replace(/[\[\]'"/\\&]/g, '')
        .replace(/,\s*,/g, ',')
        .replace(/^\s*,\s*|\s*,\s*$/g, '')
        .replace(/\s+/g, ' ')
        .replace(/p\s*/g, '')
        .trim();
    };

    // Helper function to draw section box with border
    const drawSectionBox = (x, y, width, height, cornerRadius = 3) => {
      pdf.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
      pdf.setLineWidth(0.3);
      pdf.roundedRect(x, y, width, height, cornerRadius, cornerRadius);
    };

    // Helper function to draw colored left border for sections
    const drawColoredBorder = (x, y, height, color, width = 4) => {
      pdf.setFillColor(color[0], color[1], color[2]);
      pdf.rect(x, y, width, height, 'F');
    };

    // Different colors for each section heading
    const getSectionColor = (title) => {
      switch (title) {
        case 'Description':
          return [0, 120, 180]; // Blue
        case 'Medication':
          return [220, 53, 69]; // Red  
        case 'Diets':
          return [40, 160, 40]; // Green
        case 'Workout':
          return [255, 140, 0]; // Orange
        default:
          return darkHeadingColor;
      }
    };

    // Helper function to add section with colored border (better spacing)
    const addSection = (title, content, x, y) => {
      const sectionStartY = y;
      
      // Add section header
      const sectionColor = getSectionColor(title);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(sectionColor[0], sectionColor[1], sectionColor[2]);
      pdf.text(title, x + 10, y + 5);
      y += 10;
      
      // Add content text
      if (content && content.trim() !== '') {
        const cleanedContent = cleanText(content);
        if (cleanedContent) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(10);
          pdf.setTextColor(contentColor[0], contentColor[1], contentColor[2]);
          
          const lines = pdf.splitTextToSize(cleanedContent, contentWidth - 15);
          
          // Show more lines with better spacing
          const maxLines = Math.min(lines.length, 4);
          for (let i = 0; i < maxLines; i++) {
            const line = lines[i];
            if (line && line.trim() !== '') {
              pdf.text(line, x + 10, y);
              y += lineHeight;
            }
          }
        }
      }
      
      y += 4;
      
      // Draw border around the section
      const boxHeight = y - sectionStartY;
      drawSectionBox(x, sectionStartY - 2, contentWidth, boxHeight, 3);
      
      // Draw colored left border
      drawColoredBorder(x, sectionStartY - 2, boxHeight, sectionColor, 4);
      
      return y + 6; // Better gap after section
    };

    // TOP HEADER BAR - Teal (8.5px) + Red thin line (1.5px) = 10px total
    // Teal bar
    pdf.setFillColor(0, 212, 170);
    pdf.rect(0, 0, pageWidth, tealBorderHeight, 'F');
    
    // Thin red line below teal (1.5px)
    pdf.setFillColor(220, 53, 69);
    pdf.rect(0, tealBorderHeight, pageWidth, redBorderHeight, 'F');

    yPos = 25;

    // HEADER SECTION - DIAGNOSIFY
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    
    const diagnoText = 'DIAGNO';
    const sifyText = 'SIFY';
    const diagnoWidth = pdf.getTextWidth(diagnoText);
    
    const totalWidth = diagnoWidth + pdf.getTextWidth(sifyText);
    const startX = (pageWidth - totalWidth) / 2;
    
    // DIAGNO in teal
    pdf.setTextColor(brandColor[0], brandColor[1], brandColor[2]);
    pdf.text(diagnoText, startX, yPos);
    
    // SIFY in red
    pdf.setTextColor(redColor[0], redColor[1], redColor[2]);
    pdf.text(sifyText, startX + diagnoWidth, yPos);
    yPos += 12;
    
    // Medical Prediction Report - BOLD
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(lightGrayColor[0], lightGrayColor[1], lightGrayColor[2]);
    pdf.text('Medical Prediction Report', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;
    
    // Generated date
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(lightGrayColor[0], lightGrayColor[1], lightGrayColor[2]);
    const generatedDate = new Date(diseaseInfo.predictionDate || Date.now()).toLocaleDateString();
    pdf.text(`Generated on: ${generatedDate}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 12;

    // Horizontal line separator
    pdf.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    pdf.setLineWidth(0.3);
    pdf.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    // PREDICTED CONDITION SECTION (NO BOX)
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(darkHeadingColor[0], darkHeadingColor[1], darkHeadingColor[2]);
    pdf.text('PREDICTED CONDITION', margin, yPos);
    yPos += 8;
    
    const diseaseName = diseaseInfo.disease || 'Not specified';
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(redColor[0], redColor[1], redColor[2]);
    pdf.text(`• ${cleanText(diseaseName)}`, margin + 3, yPos);
    yPos += 10;

    // SELECTED SYMPTOMS SECTION (NO BOX)
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(darkHeadingColor[0], darkHeadingColor[1], darkHeadingColor[2]);
    pdf.text('SELECTED SYMPTOMS', margin, yPos);
    yPos += 8;
    
    if (currentSymptoms && currentSymptoms.length > 0) {
      const symptomsLine = currentSymptoms.map(symptom => cleanText(symptom)).join(', ');
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(contentColor[0], contentColor[1], contentColor[2]);
      
      const lines = pdf.splitTextToSize(symptomsLine, contentWidth - 6);
      // Show all symptom lines
      const maxLines = Math.min(lines.length, 3);
      for (let i = 0; i < maxLines; i++) {
        pdf.text(lines[i], margin + 3, yPos);
        yPos += lineHeight;
      }
    } else {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(contentColor[0], contentColor[1], contentColor[2]);
      pdf.text('No symptoms selected', margin + 3, yPos);
      yPos += lineHeight;
    }
    yPos += 8;

    // Horizontal line separator
    pdf.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    pdf.setLineWidth(0.3);
    pdf.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    // MEDICAL RECOMMENDATIONS MAIN HEADING
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(darkHeadingColor[0], darkHeadingColor[1], darkHeadingColor[2]);
    pdf.text('MEDICAL RECOMMENDATIONS', margin, yPos);
    yPos += 10;
    
    // MEDICAL INFORMATION SECTIONS (WITH BOXES AND COLORED BORDERS)
    yPos = addSection('Description', medicalData.description, margin, yPos);
    yPos = addSection('Medication', medicalData.medication, margin, yPos);
    yPos = addSection('Diets', medicalData.diets, margin, yPos);
    yPos = addSection('Workout', medicalData.workout, margin, yPos);

    // BOTTOM TEAL BAR - AT THE VERY END OF PAGE - Same structure as top (thin red 1.5px + teal 8.5px)
    const bottomBarY = pageHeight - totalTopBorderHeight;
    
    // Thin red line above teal (1.5px - reversed order at bottom)
    pdf.setFillColor(220, 53, 69);
    pdf.rect(0, bottomBarY, pageWidth, redBorderHeight, 'F');
    
    // Teal bar below red
    pdf.setFillColor(0, 212, 170);
    pdf.rect(0, bottomBarY + redBorderHeight, pageWidth, tealBorderHeight, 'F');

    // FOOTER SECTION - NO BOX, plain text above the bars
    const footerStartY = bottomBarY - 12;
    
    // Medical Disclaimer Header
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.setTextColor(redColor[0], redColor[1], redColor[2]);
    pdf.text('MEDICAL DISCLAIMER', pageWidth / 2, footerStartY, { align: 'center' });
    
    // Medical Disclaimer Content
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(7);
    pdf.setTextColor(redColor[0], redColor[1], redColor[2]);
    const disclaimer = "This AI prediction is for informational purposes only. Not a substitute for professional medical advice. Always consult your healthcare provider for proper diagnosis and treatment.";
    const disclaimerLines = pdf.splitTextToSize(disclaimer, contentWidth);
    pdf.text(disclaimerLines, pageWidth / 2, footerStartY + 4, { align: 'center' });
    
    // Generated by info - inside the teal bar in white
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(7);
    pdf.setTextColor(255, 255, 255); // White text on teal background
    pdf.text('Generated by Diagnosify - AI Health Assistant', pageWidth / 2, bottomBarY + redBorderHeight + 5, { align: 'center' });

    // Save PDF
    const diseaseNameClean = cleanText(diseaseInfo.disease)?.replace(/\s+/g, '_') || 'Report';
    const filename = `Diagnosify_${diseaseNameClean}_Report.pdf`;
    pdf.save(filename);
  };


  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, var(--background-dark), var(--background-darker))'
      }}
      className="p-6 w-full h-full text-white overflow-y-auto"
    >
      {/* Disease Name Header */}
      <motion.div 
        className="text-center mb-8"
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
          className="font-bold text-4xl md:text-5xl mb-2"
        >
          {diseaseInfo.disease}
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="text-lg mb-6">
          Here's your personalized medical information and recommendations
        </p>
        
        {/* PDF Download Button */}
        <motion.button
          onClick={generatePDF}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            boxShadow: '0 8px 32px rgba(0, 212, 170, 0.25)'
          }}
          className="inline-flex items-center space-x-3 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-[#00d4aa]/40 transition-all duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 10.5v6m3-3l-3 3-3-3m2.25-6.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H9.75A1.125 1.125 0 018.625 9v-1.5z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25v.75M7.5 9v.75M7.5 15v.75M7.5 18v.75" 
            />
          </svg>
          <span>Download Medical Report (PDF)</span>
        </motion.button>
      </motion.div>


      {/* Selected Symptoms Summary */}
      {currentSymptoms && currentSymptoms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
          className="rounded-2xl p-6 mb-8"
        >
          <h3 
            style={{ color: 'var(--secondary-color)' }}
            className="text-xl font-bold mb-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                className="w-6 h-6 mr-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Your Selected Symptoms ({currentSymptoms.length})
            </div>
            <span 
              style={{ color: 'var(--text-muted)' }}
              className="text-sm font-normal"
            >
              Click × to remove
            </span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {currentSymptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color)20, var(--secondary-color)20)',
                  border: '1px solid var(--primary-color)40'
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full group hover:shadow-lg transition-all duration-300"
              >
                <span
                  style={{ color: 'var(--primary-color)' }}
                  className="text-sm font-medium"
                >
                  {symptom}
                </span>
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeSymptom(index)}
                  style={{
                    background: 'var(--accent-color)30',
                    color: 'var(--accent-color)'
                  }}
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-500 hover:text-white transition-all duration-200"
                >
                  ×
                </motion.button>
              </motion.div>
            ))}
          </div>
          {currentSymptoms.length === 0 && (
            <div 
              style={{ color: 'var(--text-muted)' }}
              className="text-center py-4"
            >
              All symptoms have been removed. You may want to go back and select symptoms again.
            </div>
          )}
        </motion.div>
      )}


      {/* Medical Information Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {medicalCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
            className={`rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-opacity-30 group bg-gradient-to-br ${card.bgGradient}`}
          >
            {/* Card Header */}
            <div className="flex items-center mb-4">
              <div 
                style={{ 
                  background: `linear-gradient(135deg, ${card.color}, ${card.color}99)`,
                  boxShadow: `0 4px 20px ${card.color}40`
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                {card.icon}
              </div>
              <h3 
                style={{ color: card.color }}
                className="text-xl font-bold group-hover:text-white transition-colors duration-300"
              >
                {card.title}
              </h3>
            </div>


            {/* Card Content */}
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
              className="rounded-xl p-4 max-h-40 overflow-y-auto"
            >
              <p 
                style={{ color: 'var(--text-muted)' }}
                className="text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
              >
                {card.content || "No specific information available for this category."}
              </p>
            </div>
          </motion.div>
        ))}
      </div>


      {/* Fun Fact Section */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex justify-center items-center space-x-4 mb-4">
          <h2 
            style={{
              background: 'linear-gradient(135deg, #ffd700, var(--accent-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            className="text-3xl font-bold"
          >
            💡 Fun Health Fact
          </h2>
          <motion.button
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              color: 'var(--text-muted)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            className="p-3 rounded-full hover:text-[#00d4aa] hover:bg-white/10 transition-all duration-300"
            onClick={() => setRefreshFunFact(refreshFunFact + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </motion.button>
        </div>
        <motion.div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
          className="rounded-2xl p-6 max-w-2xl mx-auto"
          key={refreshFunFact}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p 
            style={{ color: 'var(--text-muted)' }}
            className="text-lg leading-relaxed"
          >
            {randomFunFact}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Recommendation;
