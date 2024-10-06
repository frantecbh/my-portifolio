
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import imageLogo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-scroll';

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
            <li className='hover:border-b-2 hover:border-lime-600'>
             <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='hover:border-b-2 hover:border-lime-600'>
              <Link to='about' smooth={true} duration={500}>
                Sobre
              </Link>
            </li>
            <li className='hover:border-b-2 hover:border-lime-600'>
            <Link to='skills' smooth={true} duration={500}>
            skills
          </Link>
              </li>
            <li className='hover:border-b-2 hover:border-lime-600'>
            <Link to='projetos' smooth={true} duration={500}>
            Projetos
          </Link>
              </li>
            <li className='hover:border-b-2 hover:border-lime-600'>
            <Link to='contact' smooth={true} duration={500}>
            Contatos
          </Link>
              </li>
          </ul>  
    
        {/* Hamburger */}   
            <div onClick={handelClickNav} className='md:hidden z-10'>
              {!nav ? <FaBars /> : <FaTimes />  }                
            </div>
        {/* mobile */}   
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 max-w-[50%] w-full h-screen bg-slate-900 flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>
                <Link to='home' smooth={true} duration={500}>
                  Home
                </Link>
            </li>
            <li className='py-6 text-4xl'> <Link to='about' smooth={true} duration={500}>
                Sobre
              </Link></li>
            <li className='py-6 text-4xl'> <Link to='skills' smooth={true} duration={500}>
            skills
          </Link></li>
            <li className='py-6 text-4xl'> <Link to='projetos' smooth={true} duration={500}>
            Projetos
          </Link></li>
            <li className='py-6 text-4xl'>
            <Link to='contact' smooth={true} duration={500}>
            Contato
          </Link>
            </li>
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
