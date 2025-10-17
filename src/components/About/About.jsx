import { Typewriter } from "react-simple-typewriter";
import Planet from '../../assets/planet.svg';
import "./About.css"


const About = () => {
  return (
    <div className="flex justify-around items-center mt-30">
      <div className="sec-container text-amber-50 flex flex-col  space-y-3 w-2xl gap-5 ">
        <div>
          <div className="text-5xl font-bold ">Hi, I am</div>
          <div className="text-6xl font-bold ">Dakshit Chandel</div>

          <div className="typewriter-effect text-5xl font-medium text-purple-600">

            <Typewriter
              words={[
                "ex AI Intern at Jio",
                "Web Developer",
                "Coder",
                "MERN stack Developer"
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
          <p className="font-medium text-lg text-gray-200 ">Full-Stack Developer with a B.Tech in CSE (AI & ML) — skilled in building fast, scalable, and responsive web applications using the MERN stack and other modern technologies. I love solving real-world problems through clean code, smart architecture, and intuitive design.</p>

        </div>

        <div className="z-70">
          <a
            href="https://drive.google.com/file/d/1rOPfoSqHLHxJnLNuOzadnZ9umxEid2wv/view?usp=sharing "
            target="blank"
            className="mt-6 text-white font-bold py-3 px-6 rounded-lg bg-purple-600 w-[28%] text-xl shadow-[0_0_25px_5px_rgba(168,85,247,0.7)] transition-transform duration-300 hover:scale-105 "

          >
            Download CV
          </a>
        </div>


      </div>
      <div className="bg-amber-500">
        <img
          src={Planet}
          alt="planet"
          className="absolute right-20 top-28  opacity-70 pointer-events-none w-[400px] h-[400px]"
        />
      </div>


    </div>

  );
};

export default About;
