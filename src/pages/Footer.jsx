import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Globe,
  Phone,
  MapPin,
  MessageCircle,
  Home,
  User,
  Briefcase,
  Folder,
  Code,
  BookOpen,
  Award,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sudhakar-sudha",
      label: "GitHub - Sudhakar",
      color: "hover:text-gray-400 hover:shadow-[0_0_10px_#6b7280]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sudhakar89/",
      label: "LinkedIn - Sudhakar",
      color: "hover:text-blue-500 hover:shadow-[0_0_10px_#3b82f6]",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/7092238804",
      label: "WhatsApp - Sudhakar",
      color: "hover:text-green-500 hover:shadow-[0_0_10px_#22c55e]",
    },
    {
      icon: Mail,
      href: "mailto:sudhakarsudha8672@gmail.com",
      label: "Email Sudhakar",
      color: "hover:text-red-400 hover:shadow-[0_0_10px_#ef4444]",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/frds_call_me_sudha",
      label: "Instagram - Sudhakar",
      color: "hover:text-pink-500 hover:shadow-[0_0_10px_#ec4899]",
    },
    {
      icon: Globe,
      href: "https://sudhakar-portfolio.vercel.app",
      label: "Portfolio - Sudhakar",
      color: "hover:text-cyan-400 hover:shadow-[0_0_10px_#22d3ee]",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Education", href: "#education", icon: BookOpen },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 py-16 px-6 overflow-hidden border-t border-white/10">
      {/* Glowing Background Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
        {/* Section 1 - About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Sudhakar
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Passionate <span className="text-blue-400 font-medium">Full Stack Developer</span> skilled in React, Node.js, and MERN Stack.
            I craft responsive, performant, and interactive digital experiences
            that bring ideas to life.
          </p>

          <motion.a
            href="mailto:sudhakarsudha8672@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
          >
            Let’s Collaborate ✨
          </motion.a>
        </motion.div>

        {/* Section 2 - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all justify-center md:justify-start text-sm md:text-base"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Section 3 - Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Let’s Connect</h4>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="text-blue-400 w-5 h-5" />
                <a
                  href="mailto:sudhakarsudha8672@gmail.com"
                  className="hover:text-blue-400 transition break-words"
                >
                  sudhakarsudha8672@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="text-green-400 w-5 h-5" />
                <a href="tel:+917092238804" className="hover:text-green-400 transition">
                  +91 70922 38804
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="text-red-400 w-5 h-5" />
                <p>Sivakasi , Virudhunagar , Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Icons - responsive, touch-friendly */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, rotate: 12 }}
                    whileTap={{ scale: 0.98, rotate: 0 }}
                    className={`flex items-center justify-center ${social.color} transition-all duration-300`}
                    // ensure minimum accessible touch size and nice rounded background
                    style={{ minWidth: 44, minHeight: 44 }}
                  >
                    <span className="p-2 rounded-full bg-white/10 border border-white/20
                                     flex items-center justify-center
                                     min-w-[44px] min-h-[44px]">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-current" />
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-10"></div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 text-sm px-4"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-medium">Sudhakar</span>. All rights
        reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
