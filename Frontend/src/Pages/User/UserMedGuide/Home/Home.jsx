// import React, { useEffect } from "react";
// import Home1 from "./Home1";
// import Home_2 from "./Home_2";

// const Home = () => {
//   useEffect(() => {
//     // Handle hash navigation when component mounts
//     const hash = window.location.hash;
//     if (hash) {
//       const sectionId = hash.substring(1); // Remove the '#' from the hash
//       setTimeout(() => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100); // Small delay to ensure DOM is ready
//     }
//   }, []);
//   return (
//     <div style={{background: 'linear-gradient(135deg, #0a0e27, #16213e, #1a2332)'}} className="flex flex-col">
//       <Home1 />
//       <Home_2 />
//     </div>
//   );
// };

// export default Home;


















//----------------------------------------------------------------------------------------------------------
//New code because of the opacity
import React, { useEffect } from "react";
import Home1 from "./Home1";
import Home_2 from "./Home_2";


const Home = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the '#' from the hash
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Home1 />
      <Home_2 />
    </div>
  );
};


export default Home;
