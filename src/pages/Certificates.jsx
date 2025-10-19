import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Diploma in Computer Application",
      issuer: "Mannivel Institute",
      date: "2022",
      image: "./DCA.jpg",
      description:
        "Learned basic C and C++ programming along with Microsoft Word, Excel, and PowerPoint.",
      link: "https://drive.google.com/file/d/1UmEue6JSl7zBooJiwNnUA4k2tkRiWgkw/view",
    },
    {
      title: "Diploma in Computer Hardware and Servicing",
      issuer: "Ayya Nadar Janaki Ammal College, Sivakasi",
      date: "2023",
      image: "./ANJAC.jpg",
      description:
        "Gained practical knowledge in computer hardware and basic software servicing.",
      link: "https://drive.google.com/file/d/1_ODQjOKBf1ODgLzRgK5T-g_N0UcSVCoy/view",
    },
    {
      title: "Diploma in Desktop Publishing",
      issuer: "Easy Computers, Sivakasi",
      date: "2023",
      image: "./DTP.jpg",
      description:
        "Learned Coral Draw and Adobe Photoshop for professional graphic design projects.",
      link: "https://drive.google.com/file/d/12S8eTWqCqVX_rS9WJdxJBLvn67c8ZmRr/view",
    },
    {
      title: "Python",
      issuer: "Ayya Nadar Janaki Ammal College",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop",
      description:
        "Explored Python basics, including libraries like NumPy and Matplotlib.",
      link: "#",
    },
    {
      title: "Data Structures and Algorithms using Java",
      issuer: "NPTEL",
      date: "2024",
      image: "./DSA.jpg",
      description:
        "Learned core data structures and algorithms and applied them with Java.",
      link: "https://drive.google.com/file/d/1jfzDARPlOOqKqvzyRsgZaF03qMAl2VEA/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-[0_0_15px_#3b82f6]"
            animate={{
              textShadow: [
                "0 0 10px #3b82f6",
                "0 0 20px #3b82f6",
                "0 0 15px #60a5fa",
                "0 0 10px #3b82f6",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Certificates & Achievements
          </motion.h2>
          <div className="w-44 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_#3b82f6]" />
        </motion.div>

        {/* Certificates Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{ x: [0, -2000, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 hover:shadow-[0_0_20px_#3b82f6] transition-all duration-300 group h-[480px] flex flex-col"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Certificate Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-3 right-3 bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                      <Award className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-blue-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm mb-2 line-clamp-1">
                      {cert.issuer}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="mt-auto">
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-lg hover:from-blue-600 hover:via-cyan-600 hover:to-purple-700 transition-all text-white text-sm font-medium shadow-[0_0_10px_#3b82f6]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Certificate</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
