import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Application",
      institution: "Alagappa University",
      location: "Karaikudi",
      year: "2025 - Present",
      description:
        "Comprehensive curriculum covering software development, algorithms, and database systems. Active in coding competitions and tech clubs.",
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      // achievements: ["First Class with Distinction"],
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "Ayya Nadar Janaki Ammal College",
      location: "Sivakasi",
      year: "2022 - 2025",
      grade: "CGPA: 7.5/10",
      description:
        "Focused on programming, data structures, and web technologies. Participated in intercollegiate hackathons and seminars.",
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      achievements: ["First Class with Distinction"],
    },
    {
      id: 3,
      degree: "Higher Secondary",
      institution: "S.H.N.V. Matriculation Higher Secondary School",
      location: "Sivakasi",
      year: "2020 - 2022",
      grade: "89%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Biology.",
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      achievements: ["District Level Football Player", "Perfect Attendance"],
    },
    {
      id: 4,
      degree: "Secondary School",
      institution: "S.H.N.V. Matriculation Higher Secondary School",
      location: "Sivakasi",
      year: "2019 - 2020",
      grade: "73%",
      description: "Science, Mathematics, and Social Science.",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      achievements: ["Perfect Attendance"],
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Education
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          My academic journey and milestones that shaped my career.
        </p>
      </motion.div>

      {/* ===== Timeline ===== */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500/60 via-cyan-400/40 to-purple-500/60 h-full rounded-full"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Connector Dot */}
              <div
                className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-900 shadow-lg shadow-blue-500/40 border-4 border-black"
              ></div>

              {/* Content Card */}
              <div
                className={`sm:w-5/12 bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  index % 2 === 0 ? "sm:ml-12 md:ml-14 lg:ml-16 xl:ml-18" : "sm:mr-12 md:mr-14 lg:mr-16 xl:mr-18"
                }`}
              >
                {/* Year */}
                {edu.year && (
                  <div className="flex items-center space-x-2 text-green-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                )}

                {/* Degree + Icon */}
                <div className="flex items-center gap-3 mb-2">
                  {edu.icon}
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-white">
                    {edu.degree}
                  </h3>
                </div>

                {/* Institution */}
                {edu.institution && (
                  <p className="text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                )}

                {/* Location & Grade */}
                {(edu.location || edu.grade) && (
                  <div className="flex items-center flex-wrap gap-2 text-purple-400 mb-2">
                    {edu.location && (
                      <>
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </>
                    )}
                    {edu.location && edu.grade && (
                      <span className="text-sm text-gray-500">•</span>
                    )}
                    {edu.grade && (
                      <span className="text-sm font-semibold">{edu.grade}</span>
                    )}
                  </div>
                )}

                {/* Description */}
                {edu.description && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    {edu.description}
                  </p>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        Achievements:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-xs text-green-300 border border-green-500/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Education;
