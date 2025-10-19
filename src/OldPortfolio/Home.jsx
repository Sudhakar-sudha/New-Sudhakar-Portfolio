import React, { useState, useEffect, useRef } from "react";
import myImage from "/assets/sudhakar.png";
import "../App.css";
import Typed from "typed.js";
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Homec = () => {
  // Dynamic text animation
  const el = useRef(null); // Create a reference for the element to be animated

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(el.current, {
      strings: ["Freelancer.", "Web Developer.", "App Developer.", "UI & UX Designer."], // Strings to type
      typeSpeed: 150, // Typing speed
      backSpeed: 150, // Backspacing speed
      loop: true, // Loop animation
    });
    return () => {
      // Cleanup Typed.js instance
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="md:flex items-center justify-center bg-black">
        {/* Image Section */}
        <div className="w-5/6 md:w-1/2 md:flex1 ml-10">
          <img
            src='https://res.cloudinary.com/dlfan4caj/image/upload/v1744426192/sudhakar_iw5izp.png'
            alt="My Profile"
            className="md:w-3/6 md:h-4/5 md:ml-28 md:mt-11 w-2/4 h-3/4 ml-20 custom-dark-blue-shadow"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-4 md:text-left md:mt-24 md:flex1 -mt-0 bg-black">
          {/* Intro */}
          <div className="mb-2">
            <p className="text-3xl md:text-5xl font-light text-white">
              {"\u{1F44B}"} Hi, it's{" "}
              <span className="text-blue-600 font-serif glow-effect">Sudhakar</span>
            </p>
          </div>

          {/* Dynamic Text */}
          <div className="text-3xl md:text-4xl text-white">
            <h1>
              I'm a <span className="text-orange-500" ref={el}></span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-blue-200 text-lg md:text-xl mb-6 leading-relaxed mt-3 pr-5">
            Versatile developer skilled in creating seamless web and mobile applications with a focus on user experience and performance.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
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
        </div>
      </div>
    </div>
  );
};
