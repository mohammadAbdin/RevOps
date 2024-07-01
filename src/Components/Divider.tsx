// import React, { useEffect, useState } from "react";

// interface HorizontalLineWithTextProps {
//   text: string;
// }

// const Divider: React.FC<HorizontalLineWithTextProps> = ({ text }) => {
//   const [visibleText, setVisibleText] = useState("");

//   useEffect(() => {
//     const textArray = text.split("");
//     let currentIndex = 0;

//     const interval = setInterval(() => {
//       setVisibleText((prev) => prev + textArray[currentIndex]);
//       currentIndex++;

//       if (currentIndex >= textArray.length - 1) {
//         clearInterval(interval);
//       }
//     }, 3000 / textArray.length); // Calculate the interval duration based on 3 seconds and text length

//     return () => clearInterval(interval);
//   }, [text]);

//   return (
//     <div className="relative flex items-center my-8">
//       <span className="flex-grow border-t border-gray-300"></span>
//       <span className="mx-4 flex items-center text-gray-600 font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:text-blue-600 relative">
//         {visibleText.split("").map((char, index) => (
//           <span
//             key={index}
//             className={`inline-block opacity-0 animate-fade-in text-lg font-bold text-blue-600`}
//             style={{
//               animationDelay: `${(index / visibleText.length) * 3}s`,
//               animationDuration: "0.5s",
//               animationFillMode: "forwards",
//             }}
//           >
//             {char}
//           </span>
//         ))}
//       </span>
//       <span className="flex-grow border-t border-gray-300"></span>
//     </div>
//   );
// };

// export default Divider;

import React, { useEffect, useState } from "react";
// import "./Divider.css"; // Import the CSS file for keyframes

interface HorizontalLineWithTextProps {
  text: string;
}

const Divider: React.FC<HorizontalLineWithTextProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const textArray = text.split("");
    let currentIndex = 0;
    let shouldClear = false;

    const interval = setInterval(() => {
      setVisibleText((prev) => {
        if (currentIndex >= textArray.length) {
          currentIndex = 0;
          shouldClear = true;
          return "";
        } else {
          if (shouldClear) {
            shouldClear = false;
            return textArray[currentIndex++];
          } else {
            return prev + textArray[currentIndex++];
          }
        }
      });
    }, 3000 / textArray.length); // Calculate the interval duration based on 3 seconds and text length

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="relative flex items-center my-4 h-2">
      <span className="flex-grow border-t border-gray-300"></span>
      <span className="mx-4 flex items-center text-gray-600 font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:text-blue-600 relative">
        {visibleText.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 animate-fade-in text-lg font-bold text-blue-600`}
            style={{
              animationDelay: `${(index / visibleText.length) * 3}s`,
              animationDuration: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="flex-grow border-t border-gray-300"></span>
    </div>
  );
};

export default Divider;
