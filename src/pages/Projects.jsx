import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const projects = [
  {
    id: 1,
    title: "V Print Tech",
    description:
      '"V Print Tech" is a printing offset website developed using the MERN stack in collaboration with Satheeshbabu.',
    tech: ["Reactjs", "Nodejs", "Expressjs", "Mongodb"],
    github: "https://github.com/yourusername/smart-attendance-system",
    demo: "https://vprinttech.netlify.app/",
    image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426189/project6_nhqiuc.png',
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React, Tailwind CSS, and Framer Motion to showcase projects, skills, and experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://sudhakar-portfolio.vercel.app",
    image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426183/project5_yf0qlb.png',
  },
  {
    id: 3,
    title: "LocalEStartup",
    description:
      "LocalEStartup is a user-friendly e-commerce platform that connects local startups with customers to boost visibility and sales. It enables easy product browsing, secure ordering, and fast delivery through a dedicated seller and delivery system.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-app",
    demo: 'https://localestartup.vercel.app/',
    image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426185/project8_x8v9yc.png',
  },
  {
    id: 4,
    title: "Tancet Quiz",
    description:
      'The **TANCET Quiz Website** is an interactive platform designed to help students prepare for the Tamil Nadu Common Entrance Test with mock tests, instant results, and anti-cheating features. It offers a seamless, mobile-friendly experience with real-time assessments and performance analytics.',
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-app",
    demo: 'https://tancetquiz.vercel.app',
    image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426184/project7_xmkuu9.png',
  },
];

const Projects = () => {
  return (
    <div id="projects" className=" text-white py-16 px-6 md:px-12">
      <ParticlesBackground />

      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-3 glow-effect">
          Projects
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden 
                       shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col justify-between ">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 text-justify">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-all"
                >
                  <Github size={20} /> <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-all"
                >
                  <Globe size={20} /> <span>Live</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
