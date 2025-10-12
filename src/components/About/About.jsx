import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="flex">
      <div className="text-amber-50 flex flex-col  p-10 space-y-3 w-2xl">
        <div className="text-5xl font-bold">Hi, I am</div>
        <div className="text-6xl font-bold ">Dakshit Chandel</div>


        <div className="text-5xl font-medium text-purple-400">

          <Typewriter
            words={[
              "ex AI Intern at Jio",
              "Web Developer",
              "Coder",
              "MERN stack"
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
        <p className="font-medium text-lg text-gray-200">Full-Stack Developer with a B.Tech in CSE (AI & ML) — skilled in building fast, scalable, and responsive web applications using the MERN stack and other modern technologies. I love solving real-world problems through clean code, smart architecture, and intuitive design.</p>
        <a
          href="/resume.pdf"
          download="Dakshit_Chandel_Resume.pdf"
          className="mt-6 inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Download Resume
        </a>
      </div>

      <div className="bg-amber-400">I will be an Image </div>


    </div>
  );
};

export default About;
