import React from "react";
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
      color: "hover:text-white ",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sudhakar89/",
      label: "LinkedIn - Sudhakar",
      color: "hover:text-lightblue-400 ",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/7092238804",
      label: "WhatsApp - Sudhakar",
      color: "hover:text-lightblue-300 ",
    },
    {
      icon: Mail,
      href: "mailto:sudhakarsudha8672@gmail.com",
      label: "Email Sudhakar",
      color: "hover:text-lightblue-200 ",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/frds_call_me_sudha",
      label: "Instagram - Sudhakar",
      color: "hover:text-lightblue-500 ",
    },
    {
      icon: Globe,
      href: "https://sudhakar-portfolio.vercel.app",
      label: "Portfolio - Sudhakar",
      color: "hover:text-lightblue-100 ",
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
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-10 px-6 overflow-hidden border-t border-white/10">
      {/* Glowing Background Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lightblue-500/10 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-darkblue-500/20 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Main Footer Grid (left aligned on phone, same as before on laptop) */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
        {/* Section 1 - About */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-lightblue-400 to-lightblue-200 bg-clip-text text-transparent mb-4">
            Sudhakar
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Passionate <span className="text-lightblue-400 font-medium">Full Stack Developer</span> skilled in React, Node.js, and MERN Stack.
            I craft responsive, performant, and interactive digital experiences
            that bring ideas to life.
          </p>

          <a
            href="mailto:sudhakarsudha8672@gmail.com"
            className="mt-6 inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-darkblue-500 to-lightblue-500 text-white text-sm font-medium hover:from-darkblue-600 hover:to-lightblue-400 hover:scale-105 transition-all shadow-md"
          >
            Let’s Collaborate ✨
          </a>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:translate-x-2"
              >
                <a
                  href={link.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-lightblue-400 transition-all justify-start text-sm md:text-base"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Let’s Connect</h4>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
            <div className="space-y-4 text-sm md:text-base">

              <div className="flex items-center gap-3 justify-start">
                <MapPin className="text-lightblue-300 w-5 h-5 shrink-0" />
                <p>Sivakasi , Virudhunagar , Tamil Nadu, India</p>
              </div>
              <div className="flex items-center gap-3 justify-start">
                <Phone className="text-lightblue-400 w-5 h-5 shrink-0" />
                <a href="tel:+917092238804" className="hover:text-lightblue-400 transition">
                  +91 70922 38804
                </a>
              </div>

              <div className="flex items-center gap-3 justify-start">
                <Mail className="text-lightblue-500 w-5 h-5 shrink-0" />
                <a
                  href="mailto:sudhakarsudha8672@gmail.com"
                  className="hover:text-lightblue-400 transition break-words"
                >
                  sudhakarsudha8672@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons - Fully Responsive Grid */}
            <div className="mt-8 grid grid-cols-6 gap-3 w-full max-w-md mx-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`
          group flex items-center justify-center
          w-full aspect-square max-w-[56px] mx-0 md:mx-auto
          rounded-xl
          bg-white/5 border border-white/10
          text-gray-300
          ${social.color}
          transition-all duration-300 ease-in-out
          hover:bg-white/10 hover:border-white/25
          hover:-translate-y-1 hover:scale-105
          active:scale-95
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-lightblue-400
        `}
                  >
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-10"></div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-sm px-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-lightblue-400 font-medium">Sudhakar</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;