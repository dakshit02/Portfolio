import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    const [activeSec, setActiveSec] = useState();

    const menuItems = [


        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education " },
    ]

    const iconItems = [
        { id: "Twitter", link: "https://x.com/DakshitC", label: <FaTwitterSquare /> },
        { id: "github", link: "https://github.com/dakshit02", label: <FaGithub /> },
        { id: "LinkedIn", link: "https://www.linkedin.com/in/dakshit02/", label: <FaLinkedin /> }
    ]

    const handleOnClick = (id) => {

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView();
        }
        setActiveSec(id);

    }
    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='text-purple-400 font-semibold text-lg'>
                DAKSHIT CHANDEL
            </div>
            <ul className="list-none flex justify-center items-center gap-8 text-gray-300 font-normal ">
                {
                    menuItems.map((items) => {
                        return (

                            <li className=" hover:text-purple-400 " key={items.id}>

                                <button className="cursor-pointer" onClick={() => handleOnClick(items.id)} >{items.label}</button>

                            </li>
                        )

                    })
                }

            </ul>

            <ul className="list-none flex justify-center items-center gap-8 text-gray-300 font-normal">
                {

                    iconItems.map((items) => {
                        return (
                            <a href={items.link} target="_blank" key={items.id}>
                                <li className='cursor-pointer hover:text-purple-400 text-2xl'>{items.label}</li>
                            </a>
                        )

                    })

                }

            </ul>


            <div className='text-gray-600 text-xs font-medium'>© 2025 Dakshit Chandel. All rights reserved.</div>


        </div>

    )
}

export default Footer
