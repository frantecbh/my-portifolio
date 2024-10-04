
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import imageLogo from '../assets/logo.png'
import { useState } from 'react'

export const Navbar = () => {

const [nav, setNav] = useState(false)

const handelClickNav = () => {
  setNav(!nav)
}

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-slate-900">
        <div>
          <img src={imageLogo} alt="logo image" style={{width: '80px'}} />
        </div> 
       {/* desktop */}
   
          <ul className='hidden md:flex'>
            <li className='hover:border-b-2 hover:border-lime-600'>Home</li>
            <li className='hover:border-b-2 hover:border-lime-600'>Sobre</li>
            <li className='hover:border-b-2 hover:border-lime-600'>Skils</li>
            <li className='hover:border-b-2 hover:border-lime-600'>Projetos</li>
            <li className='hover:border-b-2 hover:border-lime-600'>Contatos</li>
          </ul>  
    
        {/* Hamburger */}   
            <div onClick={handelClickNav} className='md:hidden z-10'>
              {!nav ? <FaBars /> : <FaTimes />  }                
            </div>
        {/* mobile */}   
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Sobre</li>
            <li className='py-6 text-4xl'>Skils</li>
            <li className='py-6 text-4xl'>Projetos</li>
            <li className='py-6 text-4xl'>Contatos</li>
          </ul> 
       {/* social icons */}  
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul className=''>
          <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
           <a
              className='flex justify-between items-center w-full'
              href='https://www.linkedin.com/in/francisco-menezes-875a0a36/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full'
              href='https://github.com/frantecbh'
               target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  )
}
