import React from 'react';
import '../App.css';

import { Github, Linkedin, Instagram, Mail, Home, User, Folder, Code, BookOpen } from 'lucide-react';

export const Footer = () => {
  return (
    <div>
      <div className='bg-black'>
        <div className='text-5xl flex justify-center md:justify-center font-bold text-blue-500 glow-effect mb-10'>
          <h1>Get in Touch</h1>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-center space-x-6">
          <a
            href="https://www.instagram.com/frds_call_me_sudha/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
            style={{
              textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
            }}
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sudhakar89/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
            style={{
              textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
            }}
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sudhakar-sudha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
            style={{
              textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
            }}
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:sudhakarsudha8672@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
            style={{
              textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
            }}
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        <div className='bg-black flex justify-center md:justify-center space-x-6 md:pb-0 pb-5'>
          <ol className="list-none float-end text-center text-4xl md:py-5 md:px-0 px-16 bg-black">
            {/* Navigation Items */}
            {[
              { icon: Home, text: "Home", link: "#home", width: "5rem" },
              { icon: User, text: "About Us", link: "#about", width: "6rem" },
              { icon: BookOpen, text: "Education", link: "#education", width: "7rem" },
              { icon: Code, text: "Skills", link: "#skills", width: "4rem" },
              { icon: Folder, text: "Projects", link: "#projects", width: "6rem" },
              { icon: Mail, text: "Contact Us", link: "#contact", width: "7rem" },
            ].map((item, index) => (
              <li
                key={index}
                className="relative flex items-center justify-center md:inline-flex text-center text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 group"
              >
                <a
                  href={item.link}
                  className="flex items-center gap-2 py-3 px-4 transition duration-300"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-500 transition" />
                  <span>{item.text}</span>
                </a>

                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-3/4 shadow-[0_0_8px_#3b82f6]"
                ></span>
              </li>

            ))}
          </ol>
        </div>

        <div className="bg-blue-500 flex justify-center md:justify-center space-x-6 text-white text-xl p-1">
          <h1>
            Copyright © {new Date().getFullYear()}. Designed by Sudhakar
          </h1>
        </div>

      </div>
    </div>
  );
};
