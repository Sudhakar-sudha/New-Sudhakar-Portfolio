import React from 'react';
import '../App.css';
import { motion } from "framer-motion";

const Aboutus = () => {

  return (
    <div id="about" className="bg-black text-white pt-8">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">

        {/* Mobile Heading */}
        <div className="lg:hidden flex justify-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold border-b-4 border-blue-500 pb-2 glow-effect">
            About <span className="ml-2">Me</span>
          </h1>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="./sudhakar.png"
              alt="Sudhakar Profile"
              className="w-64 sm:w-72 md:w-80 lg:w-[380px] 
                         rounded-xl border-2 border-blue-600 
                         object-contain shadow-lg custom-dark-blue-shadow"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">

            {/* Desktop Heading */}
            <div className="hidden lg:block mb-6">
              <h1 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2 glow-effect">
                About <span className="ml-2">Me</span>
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
                className="text-center pt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://localestartup.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
                >
                  🌐 Visit LocalEStartup
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">⚡ My Achievements</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-blue-400">5+</h3>
              <p className="text-gray-300">Live Projects</p>
            </div>

            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-green-400">1+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>

            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-300">Students Guided</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Aboutus;
