// import React, { useState } from 'react';

// const AnimatedSubmitButton: React.FC<{ 
//   isLoading: boolean, 
//   onClick: () => void 
// }> = ({ isLoading, onClick }) => {
//   const loadingTexts = [
//     'Verifying Details...',
//     'Submitting Form...',
//     'Almost There...'
//   ];
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);

//   // Effect to cycle through loading texts
//   React.useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (isLoading) {
//       interval = setInterval(() => {
//         setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
//       }, 2000);
//     }
//     return () => clearInterval(interval);
//   }, [isLoading]);

//   return (
//     <button
//       onClick={onClick}
//       disabled={isLoading}
//       className={`
//         relative w-full py-3 bg-gradient-to-b from-green-600 to-green-700 
//         text-white rounded-md overflow-hidden
//         flex items-center justify-center
//         transition-all duration-300 ease-in-out
//         ${isLoading ? 'cursor-not-allowed opacity-80' : 'hover:brightness-110'}
//       `}
//     >
//       {isLoading ? (
//         <div className="flex items-center space-x-3 w-full justify-center">
//           {/* Spinner */}
//           <div className="w-6 h-6 border-3 border-t-3 border-white border-t-green-300 rounded-full animate-spin"></div>
          
//           {/* Animated Text Container */}
//           <div className="relative w-48 h-6 overflow-hidden">
//             {loadingTexts.map((text, index) => (
//               <div
//                 key={text}
//                 className={`
//                   absolute w-full text-left transition-all duration-500 ease-in-out
//                   ${
//                     index === currentTextIndex 
//                       ? 'translate-y-0 opacity-100' 
//                       : index > currentTextIndex 
//                         ? 'translate-y-full opacity-0' 
//                         : '-translate-y-full opacity-0'
//                   }
//                 `}
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         'Submit Details'
//       )}
//     </button>
//   );
// };

// export default AnimatedSubmitButton;