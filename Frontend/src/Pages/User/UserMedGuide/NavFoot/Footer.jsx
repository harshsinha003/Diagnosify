// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const scrollToSection = (sectionId) => {
//     if (location.pathname === '/user' || location.pathname === '/user/') {
//       // If already on home page, scroll to section
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       // If on different page, navigate to home and then scroll
//       navigate('/user');
//       setTimeout(() => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     }
//   };

//   const handleHomeClick = () => {
//     if (location.pathname === '/user' || location.pathname === '/user/') {
//       // If already on home page, scroll to top
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       // If on different page, navigate to home using React Router
//       navigate('/user');
//     }
//   };
//   return (
//     <div style={{
//       background: 'linear-gradient(135deg, #070b1f, #0a0e27)',
//       borderTop: '1px solid rgba(255, 255, 255, 0.1)'
//     }} className="text-white py-10">
//       <div className="mx-auto px-6 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
//           {/* About Section */}
//           <div className="space-y-4">
//             <h3 style={{
//               background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               lineHeight: '1.2',
//               paddingBottom: '2px'
//             }} className="text-xl font-bold">
//               Diagnosify
//             </h3>
//             <p style={{ color: 'var(--text-muted)' }} className="text-sm leading-relaxed">
//               Your trusted companion for personalized health predictions and expert medical insights using advanced AI technology.
//             </p>
//             <p style={{ color: 'var(--text-muted)' }} className="text-xs italic">
//               Developed by Harshvardhan Sinha
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 style={{ color: 'var(--primary-color)' }} className="text-lg font-semibold">
//               Quick Links
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <button 
//                   onClick={handleHomeClick}
//                   style={{ color: 'var(--text-muted)' }} 
//                   className="hover:text-[#00d4aa] transition-colors duration-300 text-left"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <Link to="/user/prediction" style={{ color: 'var(--text-muted)' }} className="hover:text-[#00d4aa] transition-colors duration-300">
//                   Health Prediction
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/user/about" style={{ color: 'var(--text-muted)' }} className="hover:text-[#00d4aa] transition-colors duration-300">
//                   About Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact & Support */}
//           <div className="space-y-4">
//             <h4 style={{ color: 'var(--primary-color)' }} className="text-lg font-semibold">
//               Support
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <button 
//                   onClick={() => scrollToSection('how-it-works')}
//                   style={{ color: 'var(--text-muted)' }} 
//                   className="cursor-pointer hover:text-[#00d4aa] transition-colors duration-300 text-left"
//                 >
//                   How It Works
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => scrollToSection('faq')}
//                   style={{ color: 'var(--text-muted)' }} 
//                   className="cursor-pointer hover:text-[#00d4aa] transition-colors duration-300 text-left"
//                 >
//                   FAQ
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Medical Disclaimer */}
//         <div style={{
//           background: 'rgba(255, 107, 107, 0.1)',
//           border: '1px solid rgba(255, 107, 107, 0.3)',
//           borderRadius: '8px'
//         }} className="p-4 mb-6">
//           <p style={{ color: 'var(--accent-color)' }} className="text-xs font-semibold mb-2">
//             ⚠️ Medical Disclaimer
//           </p>
//           <p style={{ color: 'var(--text-muted)' }} className="text-xs leading-relaxed">
//             This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
//             Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
//           </p>
//         </div>

//         {/* Footer Bottom */}
//         <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} className="pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="text-center md:text-left">
//             <p style={{ color: 'var(--text-muted)' }} className="text-sm">
//               Copyright © 2025 Harshvardhan Sinha. All Rights Reserved.
//             </p>
//           </div>
//           <div className="flex space-x-6 text-sm">
//             <span style={{ color: 'var(--text-muted)' }} className="hover:text-[#00d4aa] transition-colors duration-300 cursor-pointer">
//               Built with ❤️ for better health
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;













//---------------------------------------------------------------------------------
//New code for the 70% opacity
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const scrollToSection = (sectionId) => {
    if (location.pathname === '/user' || location.pathname === '/user/') {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home and then scroll
      navigate('/user');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };


  const handleHomeClick = () => {
    if (location.pathname === '/user' || location.pathname === '/user/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on different page, navigate to home using React Router
      navigate('/user');
    }
  };

  return (
    <div 
      style={{
        background: 'rgba(7, 11, 31, 0.7)',  // 70% opacity
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'relative',
        zIndex: 10
      }} 
      className="text-white py-10"
    >
      <div className="mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 style={{
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
              paddingBottom: '2px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }} className="text-xl font-bold">
              Diagnosify
            </h3>
            <p style={{ 
              color: '#ffffff',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }} className="text-sm leading-relaxed">
              Your trusted companion for personalized health predictions and expert medical insights using advanced AI technology.
            </p>
            <p style={{ 
              color: '#d0d0d0',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }} className="text-xs italic">
              Developed by Harshvardhan Sinha
            </p>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <h4 style={{ 
              color: 'var(--primary-color)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }} className="text-lg font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={handleHomeClick}
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                  }} 
                  className="hover:text-[#00d4aa] transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <Link 
                  to="/user/prediction" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                  }} 
                  className="hover:text-[#00d4aa] transition-colors duration-300"
                >
                  Health Prediction
                </Link>
              </li>
              <li>
                <Link 
                  to="/user/about" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                  }} 
                  className="hover:text-[#00d4aa] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 style={{ 
              color: 'var(--primary-color)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }} className="text-lg font-semibold">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                  }} 
                  className="cursor-pointer hover:text-[#00d4aa] transition-colors duration-300 text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                  }} 
                  className="cursor-pointer hover:text-[#00d4aa] transition-colors duration-300 text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>


        {/* Medical Disclaimer */}
        <div style={{
          background: 'rgba(255, 107, 107, 0.2)',
          border: '1px solid rgba(255, 107, 107, 0.5)',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)'
        }} className="p-4 mb-6">
          <p style={{ 
            color: 'var(--accent-color)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
          }} className="text-xs font-semibold mb-2">
            ⚠️ Medical Disclaimer
          </p>
          <p style={{ 
            color: '#ffffff',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
          }} className="text-xs leading-relaxed">
            This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>


        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} className="pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p style={{ 
              color: '#ffffff',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }} className="text-sm">
              Copyright © 2025 Harshvardhan Sinha. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <span style={{ 
              color: '#ffffff',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }} className="hover:text-[#00d4aa] transition-colors duration-300 cursor-pointer">
              Built with ❤️ for better health
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;


