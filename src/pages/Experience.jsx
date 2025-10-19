import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Laptop, GraduationCap } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "AIIM Tech Software Solutions",
        duration: "9th June 2025 – Present",
        description:
            "Developing and maintaining full-stack web and mobile applications using the MERN Stack and React Native. Collaborating with teams to build scalable and user-friendly solutions.",
        icon: <Code className="text-blue-400" size={28} />,
    },
    {
        id: 2,
        role: "Freelance, Trainer & Mentor",
        company: "Self-employed",
        duration: "17th Dec 2024 – Present",
        description:
            "Freelancing as a Full Stack Developer and Technical Mentor, contributing to live and academic projects while guiding students through project development, hands-on training, and technical doubt resolution in Java, React, Node.js, MongoDB, and Python.",
        icon: <Laptop className="text-green-400" size={28} />,
    },
    {
        id: 3,
        role: "Final Year Project",
        company: "College Major Project",
        duration: "2024 - 2025 ",
        description:
            "Developed a full-stack e-commerce platform with React.js, React Native, Node.js, Express.js, and MongoDB, featuring web apps for admins and sellers and mobile apps for users and delivery personnel. Gained practical experience in API integration, authentication, and scalable architecture.",
        icon: <GraduationCap className="text-purple-400" size={28} />,
    },
    {
        id: 4,
        role: "Intern - Web Developer",
        company: "Mini Projects",
        duration: "2023",
        description:
            "Developed a live website for VPrintTech Offset during my internship using React, Node.js, Express.js, and MongoDB, gaining practical experience in full-stack web development and backend integration.",
        icon: <Briefcase className="text-yellow-400" size={28} />,
    },

];

const Experience = () => {
    return (
        <section id="experience" className="pt-10">
            <div
                className="bg-black text-white py-16 px-6 md:px-12">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-3 glow-effect">
                        Experience
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-600 h-full rounded-full opacity-60"></div>

                    {/* Timeline Items */}
                    <div className="flex flex-col space-y-12 ">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start md:pr-5" : "md:justify-end md:pl-5"
                                    }`}
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 rounded-full w-5 h-5 z-10 border-4 border-black shadow-lg"></div>

                                {/* Card */}
                                <div
                                    className={`bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full md:w-[45%] shadow-lg hover:shadow-blue-600/40 transition-all duration-300 ${index % 2 === 0
                                        ? "md:ml-10 md:text-left"
                                        : "md:mr-10 md:text-right"
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                                        {exp.icon}
                                        <h3 className="text-2xl font-semibold ">{exp.role}</h3>
                                    </div>
                                    <p className="text-blue-400 font-medium">{exp.company}</p>
                                    <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
                                    <p className="text-gray-300 text-justify leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
