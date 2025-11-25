// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";

// const Home1 = () => {
//   const navigate = useNavigate();
//   return (
//     <div id="home" className="flex flex-col items-center justify-center w-full h-screen ">
//       <motion.div
//         className="w-full max-w-4xl p-8 flex flex-col justify-center items-center text-center"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.h1
//           style={{
//             background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             lineHeight: '1.1',
//             paddingBottom: '8px'
//           }}
//           className="text-5xl md:text-7xl font-extrabold mb-6"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           Welcome to Diagnosify
//         </motion.h1>
//         <motion.p
//           style={{color: '#a0a0a0'}}
//           className="text-xl md:text-3xl font-semibold"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           Predict your{" "}
//           <span style={{color: '#dc2626'}}>
//             <Typewriter
//               words={["health", "well-being", "care"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={100}
//               deleteSpeed={95}
//               delaySpeed={1000}
//             />
//           </span>{" "}
//           with ease...
//         </motion.p>
//         <motion.p
//           style={{color: '#a0a0a0'}}
//           className="mt-6 text-sm md:text-lg max-w-xl mx-auto mb-8"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//         >
//           At Diagnosify, we simplify your health journey. Input your symptoms, and
//           let our intelligent system offer potential insights, guiding you
//           toward a clearer understanding of your well-being.
//         </motion.p>
//         <motion.button
//           style={{
//             background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
//             color: '#000',
//             fontWeight: '600',
//             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
//           }}
//           className="px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 mt-6"
//           onClick={() => {
//             navigate("prediction");
//           }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Home1;









//----------------------------------------------------------------------------------------------
//New code with the opacity because of the black overlay
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Home1 = () => {
  const navigate = useNavigate();
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

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video Background with gradient fallback */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
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
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }} className="flex flex-col items-center justify-center w-full h-screen">
        <motion.div
          className="w-full max-w-4xl p-8 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            style={{
              background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
              paddingBottom: '8px'
            }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Welcome to Diagnosify
          </motion.h1>
          <motion.p
            style={{color: '#ffffff'}}
            className="text-xl md:text-3xl font-semibold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Predict your{" "}
            <span style={{color: '#ff0000ff'}}>
              <Typewriter
                words={["health", "well-being", "care"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={95}
                delaySpeed={1000}
              />
            </span>{" "}
            with ease...
          </motion.p>
          <motion.p
            style={{color: '#f0f0f0'}}
            className="mt-6 text-sm md:text-lg max-w-xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            At Diagnosify, we simplify your health journey. Input your symptoms, and
            let our intelligent system offer potential insights, guiding you
            toward a clearer understanding of your well-being.
          </motion.p>
          <motion.button
            style={{
              background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
              color: '#000',
              fontWeight: '600',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
            }}
            className="px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 mt-6"
            onClick={() => {
              navigate("prediction");
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};


export default Home1;
