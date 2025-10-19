// import React from "react";
// import { motion } from "framer-motion";

// const tags = [
//   { name: "React", delay: 0.2, top: "60%", left: "10%" },
//   { name: "React Native", delay: 0.4, top: "30%", left: "55%" },
//   { name: "Tailwind Css", delay: 0.6, top: "65%", left: "75%" },
//   { name: "NextJs", delay: 0.8, top: "45%", left: "40%" },
//   { name: "NodeJs", delay: 1.0, top: "50%", left: "75%" },
//     { name: "React", delay: 0.3, top: "40%", left: "20%" },
//   { name: "React Native", delay: 0.5, top: "80%", left: "65%" },
//   { name: "Tailwind Css", delay: 0.6, top: "25%", left: "35%" },
//   { name: "NextJs", delay: 0.8, top: "65%", left: "30%" },
//   { name: "NodeJs", delay: 1.0, top: "80%", left: "45%" },
// ];

// const ExperienceHero = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#00111f] via-[#001b33] to-black" />
//       <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />

//       {/* Concentric Circles */}
//       <div className="absolute w-[500px] h-[500px] border border-cyan-500/10 rounded-full"></div>
//       <div className="absolute w-[350px] h-[350px] border border-cyan-500/10 rounded-full"></div>
//       <div className="absolute w-[200px] h-[200px] border border-cyan-500/10 rounded-full"></div>

//       {/* Floating Tags */}
//       {tags.map((tag, index) => (
//         <motion.div
//           key={index}
//           className="absolute bg-[#0d1b2a]/80 text-white text-sm font-semibold px-4 py-2 rounded-full border border-cyan-400/20 backdrop-blur-md"
//           style={{ top: tag.top, left: tag.left }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{
//             opacity: 1,
//             y: [0, -10, 0],
//           }}
//           transition={{
//             delay: tag.delay,
//             duration: 3,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         >
//           {tag.name}
//         </motion.div>
//       ))}

//       {/* Main Text */}
//       <motion.div
//         className="relative text-center z-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
//           <span className="text-cyan-400">1+</span> YEAR OF <br /> EXPERIENCE IN
//         </h1>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
//           FULL STACK Web and App DEVELOPMENT
//         </h2>
//       </motion.div>

//       {/* Subtle Glow Behind Text */}
//       <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-3xl"></div>
//     </section>
//   );
// };

// export default ExperienceHero;


import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const tags = [
  { name: "React", delay: 0.2, top: "50%", left: "30%" },
  { name: "React Native", delay: 0.4, top: "30%", left: "55%" },
  { name: "Tailwind CSS", delay: 0.6, top: "50%", left: "65%" },
  { name: "Next.js", delay: 0.8, top: "35%", left: "45%" },
  { name: "Node.js", delay: 1.0, top: "70%", left: "50%" },
  { name: "Express.js", delay: 1.2, top: "20%", left: "35%" },
  { name: "Flask", delay: 1.2, top: "14%", left: "50%" },
  { name: "MongoDB", delay: 1.4, top: "75%", left: "35%" },
];

const ExperienceHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-[#001d3d] to-black" />

      {/* Central Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Animated Rings */}
      <motion.div
        className="absolute w-[500px] h-[500px] border border-cyan-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] border border-cyan-400/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] border border-cyan-400/40 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 🌍 Globe Orbit Animation */}
      <motion.div
        className="absolute w-[500px] h-[500px] flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-cyan-400">
          <Globe size={50} strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Floating Skill Tags */}
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          className="absolute bg-[#0d1b2a]/80 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-full border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all"
          style={{ top: tag.top, left: tag.left }}
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
        className="relative text-center z-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          <span className="text-cyan-400">1+</span> YEAR OF <br /> EXPERIENCE IN
        </h1>
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mt-3">
          FULL STACK WEB & APP DEVELOPMENT
        </h2>
      </motion.div>
    </section>
  );
};

export default ExperienceHero;
