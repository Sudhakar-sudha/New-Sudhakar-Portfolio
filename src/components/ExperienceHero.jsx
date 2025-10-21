import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

// const tags = [
//   { name: "React", delay: 0.2, top: "55%", left: "25%" },
//   { name: "React Native", delay: 0.4, top: "30%", left: "60%" },
//   { name: "Tailwind CSS", delay: 0.6, top: "55%", left: "70%" },
//   { name: "Next.js", delay: 0.8, top: "35%", left: "45%" },
//   { name: "Node.js", delay: 1.0, top: "75%", left: "50%" },
//   { name: "Express.js", delay: 1.2, top: "20%", left: "35%" },
//   { name: "Flask", delay: 1.2, top: "15%", left: "50%" },
//   { name: "MongoDB", delay: 1.4, top: "80%", left: "35%" },
// ];
  // Different tag layouts for responsive screens
  const tags = [
    { name: "React", delay: 0.2, top: { base: "50%", sm: "55%", md: "50%" }, left: { base: "10%", sm: "25%", md: "25%" } },
    { name: "React Native", delay: 0.4, top: { base: "35%", sm: "30%", md: "30%" }, left: { base: "70%", sm: "60%", md: "55%" } },
    { name: "Tailwind CSS", delay: 0.6, top: { base: "45%", sm: "55%", md: "50%" }, left: { base: "70%", sm: "70%", md: "70%" } },
    { name: "Next.js", delay: 0.8, top: { base: "40%", sm: "35%", md: "35%" }, left: { base: "45%", sm: "45%", md: "45%" } },
    { name: "Node.js", delay: 1.0, top: { base: "65%", sm: "75%", md: "70%" }, left: { base: "65%", sm: "50%", md: "50%" } },
    { name: "Express.js", delay: 1.2, top: { base: "25%", sm: "20%", md: "20%" }, left: { base: "35%", sm: "35%", md: "35%" } },
    { name: "Flask", delay: 1.2, top: { base: "35%", sm: "15%", md: "14%" }, left: { base: "5%", sm: "50%", md: "50%" } },
    { name: "MongoDB", delay: 1.4, top: { base: "70%", sm: "80%", md: "75%" }, left: { base: "25%", sm: "35%", md: "35%" } },
  ];

  // Helper function to choose responsive tag positions
  const getPosition = (pos) => {
    if (window.innerWidth < 640) return pos.base;
    if (window.innerWidth < 1024) return pos.sm;
    return pos.md;
  };

const ExperienceHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] sm:h-screen bg-black overflow-hidden px-4 sm:px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-[#001d3d] to-black" />

      {/* Central Glow */}
      <div className="absolute w-[400px] sm:w-[600px] md:w-[700px] h-[400px] sm:h-[600px] md:h-[700px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Animated Rings */}
      <motion.div
        className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] border border-cyan-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[200px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] md:h-[350px] border border-cyan-400/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[120px] sm:w-[180px] md:w-[200px] h-[120px] sm:h-[180px] md:h-[200px] border border-cyan-400/40 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 🌍 Globe Orbit Animation */}
      <motion.div
        className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-cyan-400">
          <Globe size={35} className="sm:w-[45px] sm:h-[45px]" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Floating Skill Tags */}
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          className="absolute bg-[#0d1b2a]/80 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/30 backdrop-blur-md shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all"
          style={{
             top: getPosition(tag.top),
            left: getPosition(tag.left),
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            delay: tag.delay,
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {tag.name}
        </motion.div>
      ))}

      {/* Centered Text */}
      <motion.div
        className="relative text-center z-10 mt-10 sm:mt-12 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          <span className="text-cyan-400">1+</span> YEAR OF <br /> EXPERIENCE IN
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mt-3">
          FULL STACK WEB & APP DEVELOPMENT
        </h2>
      </motion.div>
    </section>
  );
};

export default ExperienceHero;
