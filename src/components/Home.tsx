import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';




export const Home = () => {
  return (
    <div id='home' className='w-full h-screen'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-lime-500 font-semibold'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        Francisco Menezes
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        
        <TypeAnimation
            sequence={["I'm a Full Stack Developer.", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>
      Sou um desenvolvedor full-stack especializado em construir experiências digitais excepcionais. Atualmente, estou focado em construir aplicativos web full-stack responsivos.
      </p>
      <div>
      
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-lime-600 hover:border-lime-600'>
          <Link to='projetos' smooth={true} duration={500}>
            Projetos
          </Link>
         
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
         
     
      </div>
    </div>
  </div>
  )
}
