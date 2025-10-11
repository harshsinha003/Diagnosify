// import React from "react";
// import { Link } from "react-router-dom";
// import Headroom from "react-headroom";

// const Navbar = () => {
//   return (
//     <Headroom className="z-50">
//       <div style={{
//         background: 'linear-gradient(135deg, #070b1f, #0a0e27)',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
//         backdropFilter: 'blur(10px)',
//         borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
//       }} className="z-50">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <Link to="/user" className="flex items-center space-x-3">
//             {/* Medical Icon */}
//             <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{
//               background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
//               boxShadow: '0 4px 15px rgba(0, 212, 170, 0.3)'
//             }}>
//               <svg 
//                 width="28" 
//                 height="28" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="text-white"
//               >
//                 <path 
//                   d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" 
//                   fill="currentColor"
//                 />
//               </svg>
//             </div>
            
//             <h1 className="text-4xl font-extrabold" style={{
//               lineHeight: '1.2',
//               paddingBottom: '4px'
//             }}>
//               <span style={{
//                 background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}>Diagno</span><span style={{
//                 color: '#dc2626'
//               }}>sify</span>
//             </h1>
//           </Link>

//           <ul className="hidden md:flex space-x-6 text-lg font-medium items-center" style={{color: '#ffffff'}}>
//             <li>
//               <Link to="/user" style={{transition: 'all 0.3s ease'}} className="hover:text-[#00d4aa] px-3 py-2 rounded-lg">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/user/prediction"
//                 style={{transition: 'all 0.3s ease'}}
//                 className="hover:text-[#00d4aa] px-3 py-2 rounded-lg"
//               >
//                 Prediction
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/user/about"
//                 style={{transition: 'all 0.3s ease'}}
//                 className="hover:text-[#00d4aa] px-3 py-2 rounded-lg"
//               >
//                 About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </Headroom>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import Headroom from "react-headroom";


// const Navbar = () => {
//   return (
//     <Headroom className="z-50" style={{ zIndex: 100 }}>
//       <div style={{
//         background: 'rgba(7, 11, 31, 0.95)',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
//         backdropFilter: 'blur(15px)',
//         borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
//         position: 'relative',
//         zIndex: 100
//       }}>
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <Link to="/user" className="flex items-center space-x-3">
//             {/* Medical Icon */}
//             <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{
//               background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
//               boxShadow: '0 4px 15px rgba(0, 212, 170, 0.4)'
//             }}>
//               <svg 
//                 width="28" 
//                 height="28" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="text-white"
//               >
//                 <path 
//                   d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" 
//                   fill="currentColor"
//                 />
//               </svg>
//             </div>
            
//             <h1 className="text-4xl font-extrabold" style={{
//               lineHeight: '1.2',
//               paddingBottom: '4px'
//             }}>
//               <span style={{
//                 background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}>Diagno</span><span style={{
//                 color: '#dc2626'
//               }}>sify</span>
//             </h1>
//           </Link>


//           <ul className="hidden md:flex space-x-6 text-lg font-medium items-center" style={{color: '#ffffff'}}>
//             <li>
//               <Link 
//                 to="/user" 
//                 style={{transition: 'all 0.3s ease'}} 
//                 className="hover:text-[#00d4aa] px-3 py-2 rounded-lg hover:bg-white/5"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/user/prediction"
//                 style={{transition: 'all 0.3s ease'}}
//                 className="hover:text-[#00d4aa] px-3 py-2 rounded-lg hover:bg-white/5"
//               >
//                 Prediction
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/user/about"
//                 style={{transition: 'all 0.3s ease'}}
//                 className="hover:text-[#00d4aa] px-3 py-2 rounded-lg hover:bg-white/5"
//               >
//                 About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </Headroom>
//   );
// };


// export default Navbar;









//----------------------------------------------------------------------------------------------
//New Code
//More Brighter "Diagno"
import React from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

const Navbar = () => {
  return (
    <Headroom className="z-50" style={{ zIndex: 100 }}>
      <div style={{
        background: 'rgba(7, 11, 31, 0.15)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
        zIndex: 100
      }}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/user" className="flex items-center space-x-3">
            {/* Medical Icon */}
            <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{
              background: 'linear-gradient(135deg, #00d4aa, #0099cc)',
              boxShadow: '0 4px 15px rgba(0, 212, 170, 0.5)'
            }}>
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path 
                  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold" style={{
              lineHeight: '1.2',
              paddingBottom: '4px',
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.7)'
            }}>
              <span style={{
                //Changes for making the Diagno text more brighter
                background: 'linear-gradient(135deg, #14ffe9, #02d7ff, #0099cc)', // Bright aqua-cyan gradient
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '900',
                textShadow: '0 3px 12px rgba(0, 0, 0, 0.3)'  // subtle inner shadow for extra pop
              }}>Diagno</span><span style={{
                color: '#dc2626',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
              }}>sify</span>
            </h1>
          </Link>

          <ul className="hidden md:flex space-x-6 text-lg font-medium items-center" style={{
            color: '#ffffff',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
          }}>
            <li>
              <Link 
                to="/user" 
                style={{transition: 'all 0.3s ease'}} 
                className="hover:text-[#00d4aa] px-3 py-2 rounded-lg hover:bg-white/15"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/user/prediction"
                style={{transition: 'all 0.3s ease'}}
                className="hover:text-[#00d4aa] px-3 py-2 rounded-lg hover:bg-white/15"
              >
                Prediction
              </Link>
            </li>
            <li>
              <Link
                to="/user/about"
                style={{transition: 'all 0.3s ease'}}
                className="hover:text-[#00d4aa] px-3 py-2 rounded-lg hover:bg-white/15"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
