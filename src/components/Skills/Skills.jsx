import Frontend from "./Frontend"
import Backend from './Backend';
import Languages from "./Languages";
import Tools from "./Tools";
import "./Skills.css"


const Skills = () => {
  return (
    <>
      <div className="text-amber-50 flex flex-col mt-50 gap-15 relative items-center">
        <div className="skill-bar flex flex-col gap-8 items-center " >
          <div className="skills text-4xl font-bold">SKILLS</div>
          <div className="text-3xl font-extrabold absolute top-4  text-purple-600">________</div>
          <p className="font-bold text-lg text-gray-400 text-center">A showcase of my technical expertise and skills developed through hands-on projects and real-world experience.</p>
        </div>



        <div className="tech-cards grid grid-cols-2 gap-20 text-amber-50  ">
          <Frontend />
          <Backend />
          <Languages />
          <Tools />

        </div>
      </div >


    </>


  )
}

export default Skills
