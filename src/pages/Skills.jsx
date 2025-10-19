import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Code, Layers, Database, Wrench, Cloud } from "lucide-react";

// Skill data (same as provided)

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500 to-cyan-500",
    description:
      "Building modern, responsive, and dynamic interfaces using React, Next.js, and Tailwind CSS.",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Layers className="w-6 h-6 text-teal-400" />,
    color: "from-teal-400 to-lime-500",
    description:
      "Crafting APIs, business logic, and authentication systems with Node.js and Python frameworks.",
    skills: [
      { name: "Node.js / Express.js", level: 88 },
      { name: "Python / Flask / FastAPI", level: 82 },
      { name: "Redux", level: 75 },
      { name: "Next.js (API Routes)", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Layers className="w-6 h-6 text-green-400" />,
    color: "from-green-500 to-emerald-500",
    description:
      "Strong foundation in programming languages that power full-stack and backend solutions.",
    skills: [
      { name: "C", level: 88 },
      { name: "Java", level: 82 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-pink-500",
    description:
      "Designing efficient schemas, handling queries, and optimizing data operations for performance.",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQLite", level: 45 },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500 to-red-500",
    description:
      "Version control, debugging, and productivity tools that enhance development efficiency.",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code / Postman", level: 90 },
      { name: "Node / NVM", level: 90 },
      { name: "Android Studio", level: 60 },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    color: "from-sky-500 to-indigo-500",
    description:
      "Utilizing cloud tools and deployment services for hosting, media management, and scalability.",
    skills: [
      { name: "MongoDB Atlas", level: 95 },
      { name: "Cloudinary", level: 90 },
      { name: "Vercel", level: 70 },
      { name: "Docker", level: 60 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter categories for tabs
  const categories = ["All", ...skillCategories.map((cat) => cat.title)];

  // Filtered skills based on active category
  const filteredSkills =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeCategory);

      // Determine displayed skills based on screen size
  // On xl screens, use filtered skills; on smaller screens, show all skills
  const isXlScreen = typeof window !== "undefined" && window.innerWidth >= 1280;
  const displayedSkills = isXlScreen && activeCategory !== "All"
    ? skillCategories.filter((cat) => cat.title === activeCategory)
    : skillCategories;

  return (
    <section
      id="skills"
      className="relative bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Technical Expertise
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical skills, honed through years of building robust and scalable solutions.
        </p>
      </motion.div>

 {/* Category Tabs - Visible only on xl screens */}
      <div className="hidden xl:flex justify-center mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {displayedSkills.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>

            {/* Skill Circles */}
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 mb-2">
                    <CircularProgressbar
                      value={skill.level}
                      text={`${skill.level}%`}
                      styles={buildStyles({
                        pathColor: category.color,
                        textColor: "#fff",
                        trailColor: "#374151",
                        textSize: "20px",
                      })}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;