import React from 'react';
import project1 from '/assets/project1.png';
import project2 from '/assets/project2.png';
import project3 from '/assets/project3.png';
import project4 from '/assets/project4.png';
import project5 from '/assets/project5.png';
import project6 from '/assets/project6.png';
import project7 from '/assets/project7.png';
import project8 from '/assets/project8.png';

export const Projects = () => {
  // Dynamic data for projects
  const projectData = [
    {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426175/project1_m0wr0b.png',
      title: 'Simple Calculator',
      description:
        'A **Calculator Website** built using HTML and CSS that provides a user-friendly interface for performing basic arithmetic operations and simple calculations.',
      link: 'http://calculators.infinityfreeapp.com/',
    },
    {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426175/project2_lqrera.png',
      title: 'TNEB Bill Calculator',
      description:
        'A **TNEB Bill Calculator Website** built using HTML and CSS that helps users calculate their Tamil Nadu Electricity Board (TNEB) bill based on consumption and tariff rates.',
      link: 'http://calculators.infinityfreeapp.com/TNEB/',
    },
    {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426187/project3_go2iqo.png',
      title: 'Crackers Website',
      description:
        'A **Crackers Website** built using HTML, CSS, and JavaScript that allows users to browse, select, and purchase various firecrackers online with an interactive and responsive design.',
      link: 'http://jsscrackers.infinityfreeapp.com/',
    },
    {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426177/project4_kehepi.png',
      title: 'Expenses Tracker',
      description:
        "An expense tracker website that uses JavaScript to manage and store user data locally in the browser's local storage for easy access and tracking.",
      link: 'http://calculators.infinityfreeapp.com/ExpensesTracker',
    },
    {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426183/project5_yf0qlb.png',
      title: 'My Portfolio',
      description:
        'A **Personal Portfolio Website** built with React, Tailwind CSS, and CSS animations to showcase projects, skills, and experience in an interactive and visually appealing design.',
      link: 'https://sudhakar-portfolio.vercel.app/',
    }, 
    {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426189/project6_nhqiuc.png',
      title: 'V Print Tech',
      description:
        '"V Print Tech" is a printing offset website developed using the MERN stack in collaboration with Satheeshbabu.',
      link: 'https://vprinttech.netlify.app/',
    },
     {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426184/project7_xmkuu9.png',
      title: 'Tancet Quiz',
      description:'The **TANCET Quiz Website** is an interactive platform designed to help students prepare for the Tamil Nadu Common Entrance Test with mock tests, instant results, and anti-cheating features. It offers a seamless, mobile-friendly experience with real-time assessments and performance analytics.',
            link: 'https://tancetquiz.vercel.app/',
    },  {
      image: 'https://res.cloudinary.com/dlfan4caj/image/upload/v1744426185/project8_x8v9yc.png',
      title: 'LocalEStartup',
      description:'LocalEStartup is a user-friendly e-commerce platform that connects local startups with customers to boost visibility and sales. It enables easy product browsing, secure ordering, and fast delivery through a dedicated seller and delivery system.', 
       link: 'https://localestartup.vercel.app/',
    }
  ];

  return (
    <div className="bg-black text-white">
      <div className="projects text-center py-10">
        <h1 className="text-4xl font-bold glow-effect">Projects</h1>
      </div>

      {/* Responsive Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 pb-16 px-28">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg overflow-hidden rounded-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-[1000ms] group-hover:scale-110 group-hover:rotate-8"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-blue-600 opacity-0 transition-opacity duration-[1000ms] group-hover:opacity-100"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] text-black">
              <h1 className="text-xl font-bold text-blue-500 glow-effect">{project.title}</h1>
              <p className="text-sm mt-2 mb-4 text-center">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-black p-2 rounded-full transition-all duration-300 hover:scale-110 hover:text-black hover:bg-white hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
                style={{
                  textShadow: '0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)',
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
