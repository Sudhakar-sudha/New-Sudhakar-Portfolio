import React from 'react';

export const Education = () => {
  return (
    <div>
      <div className="education">
        {/* Section Heading */}
        <h1 className="headingeducation glow-effect">Education</h1>

        {/* Timeline Items */}
        <div className="timeline-items">
          {/* Secondary School */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020</div>
            <div className="timeline-content">
              <h2>Secondary School</h2>
              <p>
Finished secondary education at S.H.N.V. Matriculation Higher Secondary School, Sivakasi, with an average score of 72.6%, gaining a solid base for future studies.
              </p>
            </div>
          </div>

          {/* Higher Secondary School */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h2>Higher Secondary School</h2>
              <p>
              Completed higher secondary education at S.H.N.V. Matriculation Higher Secondary School, Sivakasi, in the Bio-Maths group, with an excellent average of 89%, focusing on science and mathematics.
              </p>
            </div>
          </div>

          {/* Internship */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h2>Internship</h2>
              <p>
              During my internship, I learned React and the MERN stack and gained hands-on experience in software development. Together with my friend Satheeshbabu, I developed a website for V Print Tech Printing Offset to showcase the company's services. This project helped me strengthen my full-stack development and web design skills, providing valuable practical experience.
              </p>
            </div>
          </div>

          {/* College */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h2>College</h2>
              <p>
              I am currently in my final year (6th semester) of studying for a Bachelor's degree in Computer Science at Ayya Nadar Janaki Ammal College, Sivakasi, specializing in programming and web development. My CGPA up to the 5th semester is 7.47 out of 10.
              </p>
            </div>
          </div>

             {/* College */}
             <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h2>Project</h2>
              <p>
              For my final year project, I developed **LocalEStartup**, an e-commerce platform designed to support local startups. It includes a **website for sellers** to easily add, update, and manage their products. A separate **mobile app for users** allows them to browse products, place orders, and make secure payments. Additionally, a **delivery boy app** helps track and manage deliveries, ensuring timely and efficient service. This system connects sellers, buyers, and delivery personnel in one streamlined platform to support local business growth.
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
