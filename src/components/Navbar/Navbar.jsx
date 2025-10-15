import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const [activeSec, setActiveSec] = useState();

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "eduction", label: "Education " },
  ]

  const handleOnClick = (id) => {
    
    const section  = document.getElementById(id)
    setIsActive(true);
    setActiveSec(id);

  }


  return (
    <div className='nav text-amber-50 flex justify-around m-4 gap-5'>
      <div className="name flex gap-1 text-lg font-bold cursor-pointer items-center">
        <span className='text-purple-400'>&lt;</span><span >Dakshit</span><span className='text-purple-400 text-2xl'>/</span><span>Chandel</span><span className='text-purple-400'>&gt;</span>
      </div>
      <ul className="list-none flex justify-center items-center gap-8 text-gray-300 font-normal ">
        {
          menuItems.map((items) => {
            return (

              <li className={activeSec === items.id ? "text-purple-400" : " hover:text-purple-400 "} key={items.id}>

                <button className="cursor-pointer" onClick={() => handleOnClick(items.id)} >{items.label}</button>

              </li>
            )

          })
        }
        <li className='cursor-pointer hover:text-purple-400 text-2xl'><FaGithub /></li>
        <li className='cursor-pointer hover:text-purple-400 text-2xl'><FaLinkedin /></li>
      </ul>

    </div>
  )
}

export default Navbar
