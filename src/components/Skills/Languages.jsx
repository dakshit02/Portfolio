import C from '../../assets/C.png';
import cpp from '../../assets/cpp.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import Tilt from 'react-parallax-tilt'

const Languages = () => {
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

            <div className="frontend h-full flex flex-col items items-center border-1 border-amber-50 rounded-4xl bg-gray-900 shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] p-7">
                <div className='font-semibold text-2xl'>LANGUAGES</div>
                <div className='grid grid-cols-3 gap-10 mt-5'>
                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={C} alt="" />
                        <span>C</span>
                    </div>

                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={cpp} alt="" />
                        <span>C++</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={js} alt="" />
                        <span>JS</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={python} alt="" />
                        <span>Python</span>
                    </div>


                </div>
            </div>
        </Tilt>


    )
}

export default Languages
