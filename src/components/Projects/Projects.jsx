import spotify from '../../assets/spotify.png';
import twitter from '../../assets/twitter.png';
import contactapp from '../../assets/contactapp.jpg';
import portfolio from '../../assets/portfolio.png';
import faceattend from '../../assets/faceattend.png';
import virtualcalculator from '../../assets/virtualcalculator.png';

import { BsBoxArrowUpRight } from "react-icons/bs";



const Projects = () => {

  const ProjectItems = [
    {

      id: spotify,
      name: "Spotify Clone",
      tech: "HTML , CSS ,JS",
      desc: "A fully responsive web application replicating the look and feel of Spotify, built using HTML, CSS, and JavaScript. This project demonstrates front-end development skills, including responsive design, interactive UI elements, and dynamic content rendering. Users can navigate through playlists, browse songs, and experience a modern music interface similar to the original Spotify platform, all optimized for desktop and mobile screens.",
      codeLink: "https://github.com/dakshit02/Spotify-Clone",
      siteLink: "https://dakshit02.github.io/Spotify-Clone/"

    },
    {

      id: twitter,
      name: "Twitter Clone",
      tech: "HTML , TailwindCSS",
      desc: "A responsive Twitter-like web application built using HTML and Tailwind CSS. This project focuses on replicating the modern Twitter interface, showcasing clean UI design, responsive layouts, and component-based styling.",
      codeLink: "https://github.com/dakshit02/Twitter-Clone",
      siteLink: "https://dakshit02.github.io/Twitter-Clone/"

    },
    {

      id: contactapp,
      name: "FireBase Contact App",
      tech: "React , Tailwind ,Firebase",
      desc: "A responsive contact management web application built using React and Tailwind CSS, with Firebase as the backend for real-time data storage. This project allows users to add, view, edit, and delete contacts seamlessly, showcasing dynamic UI updates, state management in React, and real-time database integration.",
      codeLink: "https://github.com/dakshit02/FireBase-Contact-App",
      siteLink: null

    },
    {

      id: portfolio,
      name: "Personal Portfolio Website",
      tech: "React , Tailwind ,",
      desc: "A modern and fully responsive portfolio website built using React and Tailwind CSS. It showcases projects, skills, and experience through a clean and interactive user interface. The portfolio features smooth animations, component-based structure, and responsive design.",
      codeLink: "https://github.com/dakshit02/Portfolio",
      siteLink: null

    },
    {

      id: faceattend,
      name: "Face Attendance with Real-Time-DB",
      tech: "Python , face_recognition,Supabase",
      desc: "A smart attendance management system built using Python and the face_recognition library, integrated with Supabase as a real-time cloud database. This project automatically detects and recognizes faces through a webcam feed and marks attendance in real time, eliminating the need for manual input.",
      codeLink: "https://github.com/dakshit02/Face-Attendance-with-Real-Time-Database",
      siteLink: null

    },
    {

      id: virtualcalculator,
      name: "Virtual Calculator ",
      tech: "Python , OpenCV",
      desc: "An interactive virtual calculator built using Python, designed to be controlled through finger gestures instead of physical key presses. The project utilizes OpenCV and Mediapipe for real-time hand tracking and gesture detection, allowing users to type on the keys displayed on the screen using their finger movements.",
      codeLink: "https://github.com/dakshit02/CALCSPHERE",
      siteLink: null

    },


  ]


  return (
    <>
      <div className="text-amber-50 flex flex-col mt-50 gap-15 relative items-center ">
        <div className="flex flex-col gap-8 items-center" >
          <div className="skills text-4xl font-bold">PROJECTS</div>
          <div className="text-3xl font-extrabold absolute top-4  text-purple-600">________</div>
          <div className="font-bold text-lg text-gray-400">A showcase of the projects I have worked on, highlighting my skills and experience in various technologiess</div>
        </div>

        <div className='grid grid-cols-3 gap-15'>
          {
            ProjectItems.map((items) => {
              return (

                <div className=' flex flex-col items-center justify-center w-95 max-w-95 gap-5  p-10 rounded-4xl border-1 border-amber-50 bg-gray-900 z-80  transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] ]'>
                  <div className='flex flex-col items-center justify-center gap-2'>
                    <img className='flex flex-col items-centre rounded-2xl w-80 h-50 justify-center object-contain bg-amber-50' src={items.id} alt="" />
                    <div className='font-semibold text-xl'>{items.name}</div>
                    <div className='text-gray-400'>{items.tech}</div>
                    <div className='overflow-hidden break-words w-75 max-w-75 h-50 max-h-50 overflow-y-scroll'>{items.desc}</div>
                  </div>
                  <div className="buttons flex gap-4 ">
                    <a className='bg-purple-600 p-3 rounded-lg w-30 flex items-center justify-center' href={items.codeLink} target='_blank'>View Code</a>


                    <a className={items.siteLink === null ? 'hidden' : 'bg-purple-600 p-3 rounded-lg w-30 flex items-center justify-center gap-2'} href={items.siteLink} target='_blank'>
                      <span>View Site</span>
                      <BsBoxArrowUpRight />
                    </a>

                  </div>
                </div>

              )

            })

          }


        </div>
      </div >
    </>
  )
}

export default Projects
