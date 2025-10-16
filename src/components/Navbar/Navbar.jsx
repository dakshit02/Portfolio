import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [activeSec, setActiveSec] = useState();
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education " },
  ]

  const handleOnClick = (id) => {

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
    setActiveSec(id);

  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll);

  }, [])






  return (

    <div className={`nav text-amber-50 justify-center flex p-4 gap-30 w-full fixed top-0 z-90 ${scrolled ? "backdrop-blur-lg" : ""}  `}>
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
        <a href="https://github.com/dakshit02" target="_blank"><li className='cursor-pointer hover:text-purple-400 text-2xl'><FaGithub /></li></a>
        <a href="https://www.linkedin.com/in/dakshit02/" target="_blank"><li className='cursor-pointer hover:text-purple-400 text-2xl'><FaLinkedin /></li></a>
      </ul>

    </div>
  )
}

export default Navbar
