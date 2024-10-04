
import { FaBars, FaTimes } from 'react-icons/fa'
import imageLogo from '../assets/logo.png'
import { useState } from 'react'



export const Navbar = () => {

const [nav, setNav] = useState(false)

const handelClickNav = () => {
  setNav(!nav)
}

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900">
        <div>
          <img src={imageLogo} alt="logo image" style={{width: '80px'}} />
        </div> 
       {/* desktop */}
   
          <ul className='hidden md:flex gap-4'>
            <li>Home</li>
            <li>Sobre</li>
            <li>Skils</li>
            <li>Projetos</li>
            <li>Contatos</li>
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
        <div className='hidden'>

        </div>
    </div>
  )
}
