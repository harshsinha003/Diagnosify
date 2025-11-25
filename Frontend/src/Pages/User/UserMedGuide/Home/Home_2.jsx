// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Home_2 = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const handleAccordionToggle = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "How accurate is Diagnosify's disease prediction?",
//       answer: "Diagnosify uses advanced machine learning algorithms trained on 4,922+ medical cases. Our system compares Random Forest, SVM, and Logistic Regression models to select the most accurate one. However, this is a supplementary tool and should not replace professional medical consultation."
//     },
//     {
//       question: "Is my health data secure and private?",
//       answer: "Yes, absolutely. We prioritize your privacy and data security. All symptom data is processed locally and not stored permanently. We follow strict data protection protocols and do not share your information with third parties."
//     },
//     {
//       question: "What should I do if Diagnosify predicts a serious condition?",
//       answer: "If our system predicts a serious medical condition, please consult with a qualified healthcare professional immediately. Diagnosify is designed to provide preliminary insights, but professional medical diagnosis and treatment are essential for your health."
//     },
//     {
//       question: "Can I use Diagnosify for emergency medical situations?",
//       answer: "No, Diagnosify is not intended for emergency situations. In case of medical emergencies, please contact emergency services immediately or your local emergency number. Our tool is designed for preliminary health insights only."
//     },
//     {
//       question: "How many symptoms can I select for prediction?",
//       answer: "You can select multiple symptoms from our database of 132+ medical symptoms. The more accurate and relevant symptoms you select, the better our AI can analyze your condition and provide meaningful predictions."
//     },
//     {
//       question: "Does Diagnosify provide treatment recommendations?",
//       answer: "Yes, along with disease predictions, Diagnosify provides general recommendations including dietary suggestions, exercise routines, and medication information. However, these are informational only and should be discussed with your healthcare provider before implementation."
//     }
//   ];
//   return (
//     <div className="font-sans text-gray-100" style={{background: 'linear-gradient(135deg, #0a0e27, #16213e, #1a2332)'}}>
      
//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 px-6 md:px-16">
//         <div className="max-w-6xl mx-auto text-center">
          
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <h2 
//               style={{
//                 background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 lineHeight: '1.2',
//                 paddingBottom: '4px'
//               }}
//               className="text-4xl md:text-5xl font-bold mb-6"
//             >
//               How It Works
//             </h2>
//             <p 
//               style={{ color: 'var(--text-muted)' }}
//               className="text-lg md:text-xl max-w-3xl mx-auto"
//             >
//               Our advanced AI system uses machine learning to analyze your symptoms and provide accurate health predictions with personalized recommendations
//             </p>
//           </motion.div>

//           {/* Process Steps */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
//             {/* Step 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div 
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(20px)',
//                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
//                 }}
//                 className="p-8 rounded-2xl hover:border-[#00d4aa] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00d4aa]/20"
//               >
//                 {/* Step Number */}
//                 <div className="absolute -top-4 left-8">
//                   <span 
//                     style={{
//                       background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
//                       color: '#ffffff'
//                     }}
//                     className="text-2xl font-bold px-4 py-2 rounded-full"
//                   >
//                     01
//                   </span>
//                 </div>

//                 {/* Icon */}
//                 <div 
//                   style={{
//                     background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//                     boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
//                   }}
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
//                 >
//                   <svg 
//                     className="w-8 h-8 text-white" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={2} 
//                       d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
//                     />
//                   </svg>
//                 </div>

//                 {/* Title */}
//                 <h3 
//                   style={{ color: '#ffffff' }}
//                   className="text-xl font-bold mb-4"
//                 >
//                   Select Symptoms
//                 </h3>

//                 {/* Description */}
//                 <p 
//                   style={{ color: 'var(--text-muted)' }}
//                   className="text-sm leading-relaxed"
//                 >
//                   Choose from 132+ medical symptoms in our comprehensive database. Our intuitive interface makes it easy to select all relevant symptoms you're experiencing.
//                 </p>
//               </div>

//               {/* Connection Line */}
//               <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#00d4aa] to-transparent"></div>
//             </motion.div>

//             {/* Step 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div 
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(20px)',
//                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
//                 }}
//                 className="p-8 rounded-2xl hover:border-[#0099cc] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0099cc]/20"
//               >
//                 {/* Step Number */}
//                 <div className="absolute -top-4 left-8">
//                   <span 
//                     style={{
//                       background: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))',
//                       color: '#ffffff'
//                     }}
//                     className="text-2xl font-bold px-4 py-2 rounded-full"
//                   >
//                     02
//                   </span>
//                 </div>

//                 {/* Icon */}
//                 <div 
//                   style={{
//                     background: 'linear-gradient(135deg, #ec4899, #f97316)',
//                     boxShadow: '0 4px 16px rgba(236, 72, 153, 0.3)'
//                   }}
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
//                 >
//                   <svg 
//                     className="w-8 h-8 text-white" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={2} 
//                       d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
//                     />
//                   </svg>
//                 </div>

//                 {/* Title */}
//                 <h3 
//                   style={{ color: '#ffffff' }}
//                   className="text-xl font-bold mb-4"
//                 >
//                   AI Analysis
//                 </h3>

//                 {/* Description */}
//                 <p 
//                   style={{ color: 'var(--text-muted)' }}
//                   className="text-sm leading-relaxed"
//                 >
//                   Our machine learning model analyzes 4,922+ medical cases using Random Forest, SVM, and Logistic Regression algorithms to identify disease patterns.
//                 </p>
//               </div>

//               {/* Connection Line */}
//               <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#0099cc] to-transparent"></div>
//             </motion.div>

//             {/* Step 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div 
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(20px)',
//                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
//                 }}
//                 className="p-8 rounded-2xl hover:border-[#ff6b6b] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b6b]/20"
//               >
//                 {/* Step Number */}
//                 <div className="absolute -top-4 left-8">
//                   <span 
//                     style={{
//                       background: 'linear-gradient(135deg, var(--accent-color), #ff4757)',
//                       color: '#ffffff'
//                     }}
//                     className="text-2xl font-bold px-4 py-2 rounded-full"
//                   >
//                     03
//                   </span>
//                 </div>

//                 {/* Icon */}
//                 <div 
//                   style={{
//                     background: 'linear-gradient(135deg, #10b981, #059669)',
//                     boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
//                   }}
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
//                 >
//                   <svg 
//                     className="w-8 h-8 text-white" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={2} 
//                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
//                     />
//                   </svg>
//                 </div>

//                 {/* Title */}
//                 <h3 
//                   style={{ color: '#ffffff' }}
//                   className="text-xl font-bold mb-4"
//                 >
//                   Get Results
//                 </h3>

//                 {/* Description */}
//                 <p 
//                   style={{ color: 'var(--text-muted)' }}
//                   className="text-sm leading-relaxed"
//                 >
//                   Receive detailed analysis with disease predictions, comprehensive descriptions, recommended exercises, dietary suggestions, and medication options.
//                 </p>
//               </div>
//             </motion.div>

//           </div>

//           {/* Call to Action */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="mt-16"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={{
//                 background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
//                 boxShadow: '0 8px 32px rgba(0, 212, 170, 0.25)'
//               }}
//               className="text-white font-bold text-lg py-4 px-8 rounded-full hover:shadow-lg hover:shadow-[#00d4aa]/30 transition-all duration-300"
//               onClick={() => window.location.href = '/user/prediction'}
//             >
//               Try Prediction Now
//             </motion.button>
//           </motion.div>

//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-20 px-6 md:px-16">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 
//               style={{
//                 background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 lineHeight: '1.2',
//                 paddingBottom: '4px'
//               }}
//               className="text-4xl md:text-5xl font-bold mb-6"
//             >
//               Frequently Asked Questions
//             </h2>
//             <p 
//               style={{ color: 'var(--text-muted)' }}
//               className="text-lg md:text-xl max-w-2xl mx-auto"
//             >
//               Get answers to common questions about Diagnosify's AI-powered health prediction system
//             </p>
//           </motion.div>

//           {/* FAQ Accordion */}
//           <div className="space-y-4">
//             {faqs.map((faq, index) => {
//               const isActive = activeAccordion === index;
              
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.05)',
//                     border: isActive ? '1px solid var(--primary-color)' : '1px solid rgba(255, 255, 255, 0.1)',
//                     backdropFilter: 'blur(10px)',
//                     boxShadow: isActive ? '0 8px 32px rgba(0, 212, 170, 0.15)' : 'none'
//                   }}
//                   className="rounded-xl transition-all duration-300"
//                 >
//                   {/* Question Button */}
//                   <button
//                     onClick={() => handleAccordionToggle(index)}
//                     className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-all duration-300 rounded-xl"
//                   >
//                     <h3 
//                       style={{
//                         color: isActive ? 'var(--primary-color)' : '#ffffff'
//                       }}
//                       className="text-lg font-semibold pr-4 transition-colors duration-300"
//                     >
//                       {faq.question}
//                     </h3>
                    
//                     {/* Expand/Collapse Icon */}
//                     <div className="flex-shrink-0">
//                       <motion.svg
//                         animate={{ rotate: isActive ? 180 : 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="w-6 h-6"
//                         style={{ color: isActive ? 'var(--primary-color)' : 'var(--text-muted)' }}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </motion.svg>
//                     </div>
//                   </button>

//                   {/* Answer Content */}
//                   <motion.div
//                     initial={false}
//                     animate={{
//                       height: isActive ? "auto" : 0,
//                       opacity: isActive ? 1 : 0
//                     }}
//                     transition={{
//                       height: { duration: 0.3 },
//                       opacity: { duration: 0.3, delay: isActive ? 0.1 : 0 }
//                     }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-6 pb-6">
//                       <div 
//                         style={{ 
//                           borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//                           marginBottom: '1rem'
//                         }}
//                       ></div>
//                       <p 
//                         style={{ color: 'var(--text-muted)' }}
//                         className="text-base leading-relaxed"
//                       >
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home_2;










//-------------------------------------------------------------------------------------------------
//New code of the transparency because of the black overlays
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


const Home_2 = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        videoRef.current?.play().catch(err => {
          console.log("Video autoplay prevented, using gradient fallback");
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How accurate is Diagnosify's disease prediction?",
      answer: "Diagnosify uses advanced machine learning algorithms trained on 4,922+ medical cases. Our system compares Random Forest, SVM, and Logistic Regression models to select the most accurate one. However, this is a supplementary tool and should not replace professional medical consultation."
    },
    {
      question: "Is my health data secure and private?",
      answer: "Yes, absolutely. We prioritize your privacy and data security. All symptom data is processed locally and not stored permanently. We follow strict data protection protocols and do not share your information with third parties."
    },
    {
      question: "What should I do if Diagnosify predicts a serious condition?",
      answer: "If our system predicts a serious medical condition, please consult with a qualified healthcare professional immediately. Diagnosify is designed to provide preliminary insights, but professional medical diagnosis and treatment are essential for your health."
    },
    {
      question: "Can I use Diagnosify for emergency medical situations?",
      answer: "No, Diagnosify is not intended for emergency situations. In case of medical emergencies, please contact emergency services immediately or your local emergency number. Our tool is designed for preliminary health insights only."
    },
    {
      question: "How many symptoms can I select for prediction?",
      answer: "You can select multiple symptoms from our database of 132+ medical symptoms. The more accurate and relevant symptoms you select, the better our AI can analyze your condition and provide meaningful predictions."
    },
    {
      question: "Does Diagnosify provide treatment recommendations?",
      answer: "Yes, along with disease predictions, Diagnosify provides general recommendations including dietary suggestions, exercise routines, and medication information. However, these are informational only and should be discussed with your healthcare provider before implementation."
    }
  ];

  return (
    <div className="relative font-sans text-gray-100">
      {/* Video Background with gradient fallback */}
      <div 
        className="fixed top-0 left-0 w-full h-full"
        style={{
          zIndex: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4?v=2" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black pointer-events-none"
        style={{ opacity: 0.7, zIndex: 1 }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1.2',
                  paddingBottom: '4px'
                }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                How It Works
              </h2>
              <p 
                style={{ color: '#d0d0d0' }}
                className="text-lg md:text-xl max-w-3xl mx-auto"
              >
                Our advanced AI system uses machine learning to analyze your symptoms and provide accurate health predictions with personalized recommendations
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                  className="p-8 rounded-2xl hover:border-[#00d4aa] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00d4aa]/20"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <span 
                      style={{
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        color: '#ffffff'
                      }}
                      className="text-2xl font-bold px-4 py-2 rounded-full"
                    >
                      01
                    </span>
                  </div>

                  {/* Icon */}
                  <div 
                    style={{
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
                    }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
                  >
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ color: '#ffffff' }}
                    className="text-xl font-bold mb-4"
                  >
                    Select Symptoms
                  </h3>

                  {/* Description */}
                  <p 
                    style={{ color: '#d0d0d0' }}
                    className="text-sm leading-relaxed"
                  >
                    Choose from 132+ medical symptoms in our comprehensive database. Our intuitive interface makes it easy to select all relevant symptoms you're experiencing.
                  </p>
                </div>

                {/* Connection Line */}
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#00d4aa] to-transparent"></div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                  className="p-8 rounded-2xl hover:border-[#0099cc] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0099cc]/20"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <span 
                      style={{
                        background: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))',
                        color: '#ffffff'
                      }}
                      className="text-2xl font-bold px-4 py-2 rounded-full"
                    >
                      02
                    </span>
                  </div>

                  {/* Icon */}
                  <div 
                    style={{
                      background: 'linear-gradient(135deg, #ec4899, #f97316)',
                      boxShadow: '0 4px 16px rgba(236, 72, 153, 0.3)'
                    }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
                  >
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ color: '#ffffff' }}
                    className="text-xl font-bold mb-4"
                  >
                    AI Analysis
                  </h3>

                  {/* Description */}
                  <p 
                    style={{ color: '#d0d0d0' }}
                    className="text-sm leading-relaxed"
                  >
                    Our machine learning model analyzes 4,922+ medical cases using Random Forest, SVM, and Logistic Regression algorithms to identify disease patterns.
                  </p>
                </div>

                {/* Connection Line */}
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#0099cc] to-transparent"></div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                  className="p-8 rounded-2xl hover:border-[#ff6b6b] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b6b]/20"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <span 
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-color), #ff4757)',
                        color: '#ffffff'
                      }}
                      className="text-2xl font-bold px-4 py-2 rounded-full"
                    >
                      03
                    </span>
                  </div>

                  {/* Icon */}
                  <div 
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
                    }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
                  >
                    <svg 
                      className="w-8 h-8 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ color: '#ffffff' }}
                    className="text-xl font-bold mb-4"
                  >
                    Get Results
                  </h3>

                  {/* Description */}
                  <p 
                    style={{ color: '#d0d0d0' }}
                    className="text-sm leading-relaxed"
                  >
                    Receive detailed analysis with disease predictions, comprehensive descriptions, recommended exercises, dietary suggestions, and medication options.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
                  boxShadow: '0 8px 32px rgba(0, 212, 170, 0.25)'
                }}
                className="text-white font-bold text-lg py-4 px-8 rounded-full hover:shadow-lg hover:shadow-[#00d4aa]/30 transition-all duration-300"
                onClick={() => window.location.href = '/user/prediction'}
              >
                Try Prediction Now
              </motion.button>
            </motion.div>

          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1.2',
                  paddingBottom: '4px'
                }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Frequently Asked Questions
              </h2>
              <p 
                style={{ color: '#d0d0d0' }}
                className="text-lg md:text-xl max-w-2xl mx-auto"
              >
                Get answers to common questions about Diagnosify's AI-powered health prediction system
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isActive = activeAccordion === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: isActive ? '1px solid var(--primary-color)' : '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: isActive ? '0 8px 32px rgba(0, 212, 170, 0.15)' : 'none'
                    }}
                    className="rounded-xl transition-all duration-300"
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => handleAccordionToggle(index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-all duration-300 rounded-xl"
                    >
                      <h3 
                        style={{
                          color: isActive ? 'var(--primary-color)' : '#ffffff'
                        }}
                        className="text-lg font-semibold pr-4 transition-colors duration-300"
                      >
                        {faq.question}
                      </h3>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="flex-shrink-0">
                        <motion.svg
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-6 h-6"
                          style={{ color: isActive ? 'var(--primary-color)' : '#d0d0d0' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </div>
                    </button>

                    {/* Answer Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      transition={{
                        height: { duration: 0.3 },
                        opacity: { duration: 0.3, delay: isActive ? 0.1 : 0 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div 
                          style={{ 
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: '1rem'
                          }}
                        ></div>
                        <p 
                          style={{ color: '#d0d0d0' }}
                          className="text-base leading-relaxed"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Home_2;
