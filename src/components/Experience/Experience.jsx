import React from 'react'
import jio from '../../assets/jio.png';
import invidi from '../../assets/invidi.png';
import "./Experience.css"

const Experience = () => {
  return (
    <>
      <div className="text-amber-50 flex flex-col mt-50 gap-15 relative items-center ">
        <div className="flex flex-col gap-8 items-center" >
          <div className="skills text-4xl font-bold">EXPERIENCE</div>
          <div className="text-3xl font-extrabold absolute top-4  text-purple-600">________</div>
          <div className="font-bold text-lg text-gray-400 text-center">A collection of my work experience and the roles I have taken in various organizations</div>
        </div>
        <div className="experience-dec flex items-center justify-center  w-full">

          <div className=' flex flex-col items-center justify-center  w-95 max-w-95 gap-5 p-7 h-100 rounded-4xl border-1 border-amber-50 bg-blue-900 z-80 shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] transition-transform duration-300 hover:scale-105 ]'>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <div className='flex flex-col items-centre bg-amber-50 rounded-2xl w-25 h-20 justify-center'>
                  <img className='' src={jio} alt="" />
                </div>
              </div>
              <div>
                <div className='font-semibold text-xl'>Jio Private Limited</div>
                <div>AI Intern</div>
                <div className='text-gray-400'>June 2024 - August 2024</div>
              </div>
            </div>
            <div className='overflow-hidden break-words w-75 max-w-75'>
              Built an AI-driven text summarization system to enhance customer support efficiency. Developed an article recommendation engine using Elasticsearch and Kibana. Tested Jio Translation API to enable multilingual content delivery.
            </div>
          </div>

          <div className='line-sep font-extrabold'>____________</div>

          <div className=' flex flex-col items-center justify-center w-100 max-w-100 h-100 gap-5 p-7 border-1 rounded-4xl border-amber-50  bg-cyan-800 z-80 shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] transition-transform duration-300 hover:scale-105 ]'>
            <div className='flex items-center justify-center gap-5'>
              <div>
                <div className='flex flex-col items-centre bg-amber-50  rounded-2xl w-25 h-20 justify-center'>
                  <img className='' src={invidi} alt="" />
                </div>
              </div>
              <div>
                <div className='font-semibold text-xl'>Invidi Technologies</div>
                <div>Operations Intern</div>
                <div className='text-gray-400'> April 2025 - October 2025 </div>
              </div>
            </div>
            <div className='overflow-hidden break-words w-75 max-w-75'>
              Monitored ad breaks and ensured correct reception of SCTE signals for seamless ad insertion. Troubleshoot production-side issues by coordinating with DEN and Hathway teams. Supported the operations team in maintaining broadcast quality and service reliability.
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Experience
