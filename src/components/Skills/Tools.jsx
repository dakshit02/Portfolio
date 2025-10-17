import vscode from '../../assets/vscode.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import Postman from '../../assets/postman.png';
import compass from '../../assets/compass.png';
import vercel from '../../assets/vercel.png';
import netlify from '../../assets/netlify.png';
import figma from '../../assets/react.png';
import Tilt from 'react-parallax-tilt'


const Tools = () => {
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
      <div className="frontend h-full flex flex-col items-center border-1 border-amber-50 rounded-4xl bg-gray-900 shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] p-7">

        <div className='font-semibold text-2xl '>TOOLS</div>
        <div className='grid grid-cols-3 gap-10 mt-5'>
          <div className='flex flex-col items-centre justify-center'>
            <img className='h-10 w-10' src={vscode} alt="" />
            <span>VS Code</span>
          </div>

          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={git} alt="" />
            <span>Git</span>
          </div>


          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={github} alt="" />
            <span>GitHub</span>
          </div>


          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={Postman} alt="" />
            <span>Postman</span>
          </div>


          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={compass} alt="" />
            <span>Compass</span>
          </div>


          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={vercel} alt="" />
            <span>Vercel</span>
          </div>


          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={netlify} alt="" />
            <span>Netlify</span>
          </div>

          <div className='flex  flex-col items-center'>
            <img className='h-12 w-12' src={figma} alt="" />
            <span>Figma</span>
          </div>

        </div>
      </div>
    </Tilt>

  )
}

export default Tools
