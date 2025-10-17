import muj from '../../assets/muj.png';
import mayo from '../../assets/mayo.png';
import ryan from '../../assets/ryan.png';

const Education = () => {

  const EducationItems = [
    { id: muj, degree: "Btech CSE(AI&ML)", name: "Manipal University Jaipur", duration: "2021-2025", grade: "8.13", desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning from Manipal University Jaipur (MUJ). During my time at MUJ, I developed a solid understanding of core computer science concepts and modern AI technologies. My coursework included subjects such as Data Structures and Algorithms, Machine Learning, Artificial Intelligence, Database Management Systems, Operating Systems, Computer Networks, and Web Development. I also participated in various workshops, hackathons, and technical events that helped me strengthen my practical and problem-solving skills. My academic journey at MUJ has played a key role in building my technical foundation and preparing me for real-world challenges in the field of technology." },
    { id: mayo, degree: "CBSE(XII) - PCM", name: "Mayo International School", duration: "2020-2021", grade: "82%", desc: "I completed my class 12 education from Mayo International School, Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education." },
    { id: ryan, degree: "CBSE(X)", name: "Ryan International School", duration: "2018-2019", grade: "82%", desc: "I completed my class 10 education from Ryan International School, Noida, under the CBSE board, where I studied Science, Maths, English, Social Studies, Hindi." },

  ] 

  return (
    <div className="text-amber-50 flex flex-col mt-50 gap-15 relative items-center ">
      <div className="flex flex-col gap-8 items-center" >
        <div className="skills text-4xl font-bold">EDUCATION</div>
        <div className="text-3xl font-extrabold absolute top-4  text-purple-600">________</div>
        <div className="font-bold text-lg text-gray-400">My education has been a journey of learning and development. Here are the details of my academic background</div>
      </div>

      <div className='grid grid-cols-3 gap-15'>
        {
          EducationItems.map((items) => {
            return (

              <div key={items.id} className='flex flex-col gap-5 items-center h-100 w-95 max-w-95 p-5 rounded-4xl border-1 border-amber-50 bg-gray-900  z-80  transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(168,85,247,0.7)] ]'>
                <div className=' flex justify-center gap-5 '>
                  <img className='rounded-2xl w-25 h-25 bg-amber-50' src={items.id} alt="" />
                  <div>
                    <div className='font-semibold text-xl'>{items.degree}</div>
                    <div className='text-gray-400'>{items.name}</div>
                    <div >{items.duration}</div>
                    <div className='text-gray-400 font-bold'>GRADE-{items.grade}</div>
                  </div>
                  
                </div>
                <div className='h-60 overflow-y-scroll'>
                  {items.desc}
                </div>
              </div>
            )
          })
        }
      </div>

    </div >
  )
}

export default Education
