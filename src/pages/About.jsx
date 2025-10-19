import React from 'react';
import '../App.css';
import { motion } from "framer-motion";

const Aboutus = () => {

  return (
    <div id="about" className="">
      <div className="flex flex-col lg:flex-row bg-black p-4 pt-12 sm:p-6 md:p-8 lg:p-10 xl:p-2 md:items-center">

        {/* Mobile About Us Heading */}
        <div className="lg:hidden flex justify-center -mt-1">
          <h1 className="inline-flex text-3xl sm:text-4xl text-white font-bold border-b-4 pb-3 border-blue-500 glow-effect mt-8 mb-8">
            About
            <p className="ml-2 sm:ml-3">Me</p>
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center lg:flex-1 mb-6 md:mb-0">
          <img
            src="./sudhakar.png"
            alt="Sudhakar Profile"
            className="w-80 sm:w-80 md:w-100 lg:w-100 xl:w-100 h-auto border-2 border-blue-600 bg-black custom-dark-blue-shadow rounded-lg object-contain"
          />
        </div>

        {/* About Me Content Section */}
        <div className="lg:flex-1 md:mt-10 lg:mt-14 p-3 sm:p-5">

          {/* Desktop About Me Heading */}
          <div className="hidden lg:flex">
            <h1 className="inline-flex text-3xl lg:text-4xl text-white font-bold border-b-4 pb-3 border-blue-500 mb-5 glow-effect">
              About
              <p className="ml-2 lg:ml-3">Me</p>
            </h1>
          </div>

          <motion.div
            className="rounded-2xl shadow-lg space-y-6 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
              I’m <strong>Sudhakar</strong>, a passionate <strong>Full Stack Developer</strong> and
              <strong> Freelancer</strong> from <strong>Sivakasi</strong>, dedicated to building dynamic,
              scalable, and user-friendly web and mobile applications. I currently work at
              <strong> AIIM Tech Software Solutions</strong>, where I specialize in the
              <strong> MERN Stack</strong> and <strong> React Native</strong>, crafting modern solutions
              that deliver real-world impact.
            </p>

            <h2 className="text-2xl font-bold text-blue-600">💼 My Freelance Journey</h2>

            <p className="text-base text-gray-200 leading-relaxed text-justify">
              Alongside my professional role, I work as a <strong>freelancer</strong> providing
              hands-on guidance and solutions for <strong>college students</strong> and
              <strong> startups</strong>. I’ve successfully delivered multiple live projects,
              helped students with academic mini projects, and mentored aspiring developers
              through practical training sessions.
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>🚀 Real-time Project Development</li>
              <li>🎓 College Mini & Final-Year Projects</li>
              <li>🧑‍💻 Internship & Placement Guidance</li>
            </ul>

            <p className="text-base text-gray-200 leading-relaxed text-justify">
              To bridge the gap between learning and real-world development, I launched
              <span className="font-semibold text-blue-500"> LocalEStartup</span> — a platform
              that helps students and startups transform ideas into deployable digital solutions.
            </p>

            <motion.div
              className="text-center mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://localestartup.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all"
              >
                🌐 Visit LocalEStartup
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          <span className="text-white">⚡ My Achievements</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 p-10">
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-300">Live Projects</div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">1+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300">Students Guided</div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Aboutus;
