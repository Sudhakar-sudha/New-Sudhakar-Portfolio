import { useState } from "react";
import { Homec } from "./Home";
import { Github, Linkedin, Instagram, Mail, Home, User, Folder, Code, BookOpen } from 'lucide-react';
import Aboutus from "./Aboutus";
import { Education } from "./Education";
import Skills from "./Skills";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

function Navbar() {
  // State to toggle the navigation menu
  const [active, setActive] = useState(false);

  // Function to handle menu toggle
  function toggleMenu() {
    setActive(!active);
  }

  return (
    <div className="body">
      {/* Navbar container */}
      <div className="md:flex m-0 p-3">
        {/* Logo Section */}
        {/* <div className="text-6xl font-medium flex-1 p-3 text-blue-900 font-serif">
          <h1>S</h1>
        </div> */}
        {/* Logo Section */}
        <div className="flex-1 items-center p-3">
          <img
            src="https://res.cloudinary.com/dlfan4caj/image/upload/v1744599440/logo_vjfumm.png"
            alt="My Logo"
            className="w-20 h-18 md:w-40 md:h-28 object-contain"
          />
        </div>


        {/* Hamburger Menu Icon for Mobile */}
        <div
          className="md:hidden text-4xl -mt-16 text-white float-right justify-end cursor-pointer flex-1 text-end pr-6 pt-1"
          onClick={toggleMenu}
        >
          &#9776;
        </div>

        {/* Navigation Menu */}
        <div className={`${active ? "block" : "hidden"} md:block`}>
          <ol className="list-none float-end text-center text-4xl md:py-5 md:px-0 px-16">
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
      </div>

      {/* Home Component */}
      <section id="home">
        <Homec />
      </section>
      <section id="about">
        <Aboutus />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Navbar;
