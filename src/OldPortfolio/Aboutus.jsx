import React from 'react';
import '../App.css';
import myImage from '/assets/about.png';

const Aboutus = () => {
  const handleOpenPdf = () => {
    // Replace with the URL or path to your PDF file
    const pdfUrl = "../assets/Resume.pdf";
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };

  return (
    <div>
      <div className="md:flex bg-black">
        {/* Mobile About Us Heading */}
        <div className="md:hidden flex -mt-1 ml-7">
          <h1 className="inline-flex text-4xl text-white font-bold border-b-4 pb-3 border-blue-500 glow-effect mt-9 mb-9">
            About
            <p className="ml-3">us</p>
          </h1>
        </div>

        {/* Image Section */}
        <div className="md:flex-1 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dlfan4caj/image/upload/v1744428961/about_j9levp.png"
              alt="My Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-100 xl:h-100 rounded-full border-4 border-blue-500 bg-black shadow-[0_0_25px_#3b82f6]/50 object-cover"
            />
          </div>
        </div>


        {/* About Us Content Section */}
        <div className="md:flex-1 md:mt-14 md:mr-28 p-4">
          {/* Desktop About Us Heading */}
          <div className="hidden md:flex">
            <h1 className="inline-flex text-4xl text-white font-bold border-b-4 pb-3 border-blue-500 mb-5 glow-effect">
              About
              <p className="ml-3">us</p>
            </h1>
          </div>

          {/* Description */}
          {/* <p className=" "> */}
          <p className=" text-justify text-xl text-white leading-relaxed">
            <span className='px-5'></span>
            I am <strong>Sudhakar</strong> from <strong>Sivakasi</strong>, a passionate and dedicated individual currently in the final semester of my <strong>B.Sc. Computer Science</strong> at <strong>Ayya Nadar Janaki Ammal College, Sivakasi</strong>. I completed my schooling at <strong>SHNV Matriculation Higher Secondary School</strong>, where I achieved <strong>89%</strong> in my higher secondary education. Throughout my academic journey, I have always shown a strong interest in learning beyond the classroom.  To enhance my technical skills, I completed diploma courses in <strong>Computer Applications</strong>, <strong>Hardware Services</strong>, and <strong>Desktop Applications</strong>. I have also earned certifications in <strong>Python programming</strong>, <strong>NPTEL Soft Skills Development</strong>, and <strong>NPTEL Data Structures and Algorithms</strong>, which have strengthened both my coding knowledge and communication skills.  Apart from academics, I have actively participated in <strong>extracurricular activities</strong>. I was a passionate <strong>football player</strong> during school, where I led my team to win <strong>zonal-level matches</strong> and finished as <strong>district-level runner-up</strong>. I am also an active <strong>NSS volunteer</strong> in college, contributing to social service and community development.  My hobbies include <strong>watching movies</strong>, <strong>playing football</strong>, and exploring new technologies. I am fluent in <strong>Tamil</strong> and possess <strong>intermediate proficiency in English</strong>. Currently, I am expanding my expertise in <strong>full-stack web development (MERN stack)</strong> and <strong>React Native app development</strong>, aiming to build innovative, real-world applications that make a positive impact.
          </p>


          {/* Resume Button */}
          <button className="btn" onClick={handleOpenPdf}>
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
