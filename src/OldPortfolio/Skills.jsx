import React from "react";
import ProgressBar from "./SocialIcons";

const Skills = () => {
  return (
    <div>
      <div className="skills items-center justify-center">
        <h1 className="headingskills glow-effect">Skills</h1>
      </div>

      <div className="bg-black text-white md:flex md:px-28 px-16 pb-1 items-center justify-center">
        {/* First Column */}
        <div className="md:flex-1">
          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">
              Programming Language
            </h1>
            <h1 className="text-2xl font-bold mb-3">C</h1>
            <ProgressBar progress={60} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">JAVA</h1>
            <ProgressBar progress={60} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">
              Database
            </h1>
            <h1 className="text-2xl font-bold mb-3">Mysql</h1>
            <ProgressBar progress={50} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">Mongodb</h1>
            <ProgressBar progress={60} label={true} />
          </div>
        </div>

        {/* Second Column */}
        <div className="md:flex-1">
          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">
              Web Development
            </h1>
            <h1 className="text-2xl font-bold mb-3">HTML</h1>
            <ProgressBar progress={90} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">CSS</h1>
            <ProgressBar progress={70} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">JavaScript</h1>
            <ProgressBar progress={80} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">
              App Development
            </h1>
            <h1 className="text-2xl font-bold mb-3">React Native</h1>
            <ProgressBar progress={50} label={true} />
          </div>
        </div>

        {/* Third Column */}
        <div className="md:flex-1">
          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3 glow-effect text-blue-500">
              Web Development <span>Frameworks & Libraries</span>
            </h1>
            <h1 className="text-2xl font-bold mb-3">React</h1>
            <ProgressBar progress={70} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">Express</h1>
            <ProgressBar progress={60} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">Node</h1>
            <ProgressBar progress={70} label={true} />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold mb-3">Tailwind CSS</h1>
            <ProgressBar progress={80} label={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
