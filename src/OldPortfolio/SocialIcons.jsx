import React, { useState, useEffect, useRef } from "react";

const SocialIcons = ({ progress, label }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedWidth(progress); // Trigger animation when visible
        } else {
          setAnimatedWidth(0); // Reset to 0 when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the progress bar is visible
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [progress]);

  return (
    <div
      className="w-64 bg-gray-200 rounded-lg overflow-hidden shadow-md"
      ref={progressBarRef}
    >
      <div
        className="bg-blue-500 text-xs font-bold text-white text-center p-1 leading-none transition-all duration-1000 ease-out"
        style={{ width: `${animatedWidth}%` }}
      >
        {label ? `${animatedWidth}%` : ""}
      </div>
    </div>
  );
};

export default SocialIcons;




// git push -u origin main
// git status
// git commit -m "firstcommit"
// git remote add origin https://github.com/Sudhakar-sudha/Sudhakar-Portfolio.git
// git branch -M main
// git add .
// git init 