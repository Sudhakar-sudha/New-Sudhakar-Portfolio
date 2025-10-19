import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Globe } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sudhakar-sudha",
      color: "hover:text-gray-400",
      glow: "hover:shadow-[0_0_15px_#9ca3af]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sudhakar89/",
      color: "hover:text-blue-500",
      glow: "hover:shadow-[0_0_15px_#3b82f6]",
    },
    {
      icon: Mail,
      href: "mailto:sudhakarsudha8672@gmail.com",
      color: "hover:text-red-500",
      glow: "hover:shadow-[0_0_15px_#ef4444]",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/frds_call_me_sudha",
      color: "hover:text-pink-500",
      glow: "hover:shadow-[0_0_15px_#ec4899]",
    },
    {
      icon: Globe,
      href: "https://yourportfolio.com",
      color: "hover:text-green-400",
      glow: "hover:shadow-[0_0_15px_#10b981]",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-16 px-6 overflow-hidden">
      {/* Glowing Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Branding Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Sudhakar
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Full Stack Developer crafting seamless and interactive digital
            experiences using React, Node.js, and the MERN stack.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h4>
          <div className="flex justify-center md:justify-start gap-4 mb-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-white/10 border border-white/10 text-gray-300 transition-all duration-300 ${social.color} ${social.glow}`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <motion.a
            href="mailto:sudhakarsudha8672@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
          >
            Let’s Collaborate ✨
          </motion.a>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-10"></div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-medium">Sudhakar</span>. All rights
        reserved. <br className="md:hidden" /> Designed with 💙 using{" "}
        <span className="text-cyan-400">React & Tailwind</span>.
      </motion.div>
    </footer>
  );
};

export default Footer;
