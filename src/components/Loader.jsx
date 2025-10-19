import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // 🔹 Spin the circle infinitely while visible
    gsap.to(circleRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 1.2,
      transformOrigin: "center center",
    });

    // 🔹 Fade out after 2.5 seconds and call onComplete
    const timeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        pointerEvents: "none",
        onComplete: onComplete,
      });
    }, 2500);

    // Cleanup on unmount
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Glowing animated ring */}
      <div
        ref={circleRef}
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      ></div>
    </div>
  );
};

export default Loader;
