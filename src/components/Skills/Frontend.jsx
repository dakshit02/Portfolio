import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import redux from '../../assets/redux.png';
import tailwindcss from '../../assets/tailwindcss.png';
import bootstrap from '../../assets/bootstrap.png';
import react from '../../assets/react.png';
import Tilt from 'react-parallax-tilt'

const Frontend = () => {
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

            <div className="frontend h-full flex flex-col items-center border-1 border-amber-50 p-7 rounded-4xl bg-gray-900 shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] ]">
                <div className='font-semibold text-2xl'>FRONTEND</div>
                <div className='grid grid-cols-3 gap-10 mt-5'>
                    <div className='flex flex-col items-centre'>
                        <img className='h-12 w-12' src={html} alt="" />
                        <span>HTML</span>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img className='h-12 w-12' src={css} alt="" />
                        <span>CSS</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={js} alt="" />
                        <span>JS</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={react} alt="" />
                        <span>React</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={redux} alt="" />
                        <span>Redux</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={tailwindcss} alt="" />
                        <span>Tailwind</span>
                    </div>


                    <div className='flex  flex-col items-center'>
                        <img className='h-12 w-12' src={bootstrap} alt="" />
                        <span>Bootstrap</span>
                    </div>

                </div>
            </div>
        </Tilt>
    )
}

export default Frontend
