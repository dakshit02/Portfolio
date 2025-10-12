import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='nav text-amber-50 flex justify-around m-4 gap-5'>
      <div className="name flex gap-1 text-lg font-bold cursor-pointer items-center">
        <span className='text-purple-400'>&lt;</span><span >Dakshit</span><span className='text-purple-400 text-2xl'>/</span><span>Chandel</span><span className='text-purple-400'>&gt;</span>
      </div>
      <div className="list ">
        <ul className='list-none flex justify-center items-center gap-8 text-gray-300 font-normal'>
          <li className=' hover:text-purple-400'>About</li>
          <li className=' hover:text-purple-400'>Skills</li>
          <li className=' hover:text-purple-400'>Experience</li>
          <li className=' hover:text-purple-400'>Projects</li>
          <li className=' hover:text-purple-400'>Education</li>
          <li className='cursor-pointer hover:text-purple-400 text-2xl'><FaGithub /></li>
          <li className='cursor-pointer hover:text-purple-400 text-2xl'><FaLinkedin /></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
