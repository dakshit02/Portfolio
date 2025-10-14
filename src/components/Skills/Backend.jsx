import nodejs from '../../assets/nodejs.png';
import express from '../../assets/express.png';
import mysql from '../../assets/mysql.png';
import mongodb from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.png';
import Tilt from 'react-parallax-tilt'

const Backend = () => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#a855f7"
            glarePosition="all"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="rounded-4xl"
        >
            <div className="backend h-full flex flex-col items-center border-1 border-amber-50 rounded-4xl bg-gray-900 shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] p-7">
                <div className='font-semibold text-2xl'>BACKEND</div>
                <div className='grid grid-cols-3 gap-10 mt-5'>
                    <div className='flex  flex-col items-centre'>
                        <img className='h-12 w-12' src={nodejs} alt="" />
                        <span>NodeJS</span>
                    </div>

                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={express} alt="" />
                        <span>Express</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={mysql} alt="" />
                        <span>MySQL</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={mongodb} alt="" />
                        <span>Mongodb</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={firebase} alt="" />
                        <span>Firebase</span>
                    </div>

                </div>
            </div>
        </Tilt>

    )
}

export default Backend
