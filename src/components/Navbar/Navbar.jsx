import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css"

const Navbar = () => {

  const [activeSec, setActiveSec] = useState();
  const [scrolled, setScrolled] = useState(false);
  const [showMenubut, setSetshowMenuBut] = useState(true);
  const [showMenu, setshowMenu] = useState(false)

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education " },
    { id: "contact", label: "Contact Me" }
  ]

  const handleOnClick = (id) => {

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
    setActiveSec(id);

  }

  const handleMenuClick = () => {
    console.log("MENU IS SHOWING !");

    setSetshowMenuBut(!showMenubut);
    setshowMenu(!showMenu);

  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll);

  }, [])





  return (

    <>
      <div className="flex flex-col items-center justify-center w-full relative">

        <div className={`nav text-amber-50 flex w-full justify-center p-4 gap-15 fixed top-0 z-90 ${scrolled ? "backdrop-blur-lg" : ""}  `}>
          <div className="name flex gap-1 text-lg font-bold cursor-pointer items-center">
            <span className='text-purple-400'>&lt;</span><span >Dakshit</span><span className='text-purple-400 text-2xl'>/</span><span>Chandel</span><span className='text-purple-400'>&gt;</span>
          </div>
          <ul className="nav_list list-none flex justify-center items-center gap-8 text-gray-300 font-normal ">
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




          {

            showMenubut ? < IoMenu onClick={handleMenuClick} className="menu-icon text-3xl text-purple-600" /> : <RxCross1 className="menu-icon text-3xl text-purple-600" onClick={handleMenuClick} />
          }




        </div >


        <div className="mobile-menu fixed top-20 w-80  backdrop-blur-lg z-85">
          <ul className={showMenu ? "list-none flex flex-col gap-5 p-7 rounded-4xl justify-center items-center  text-amber-50 backdrop-blur-lg " : "hidden"}>
            {
              menuItems.map((items) => {
                return (
                  <li className={activeSec === items.id ? "text-purple-400" : " hover:text-purple-400 "} key={items.id}>
                    <button className="cursor-pointer" onClick={() => handleOnClick(items.id)}>
                      {items.label}
                    </button>
                  </li>
                )


              })
            }
            <div className=" flex gap-2">
              <a href="https://github.com/dakshit02" target="_blank"><li className='cursor-pointer hover:text-purple-400 text-2xl'><FaGithub /></li></a>
              <a href="https://www.linkedin.com/in/dakshit02/" target="_blank"><li className='cursor-pointer hover:text-purple-400 text-2xl'><FaLinkedin /></li></a>
            </div>
          </ul>
        </div>


      </div>


    </>
  )
}

export default Navbar
