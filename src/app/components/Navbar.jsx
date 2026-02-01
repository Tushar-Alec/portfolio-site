import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'
import { useRef } from 'react'

export default function Navbar() {

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'> 
<button className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;Tushar&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Tushar&nbsp;</span>
</button>         

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
 
      <div className='flex items-center gap-4'>
        <div>
          <a className="btn" href="#contact">Contact Me</a>
        </div>
      

        <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
          <Image src={assets.menu_black} alt="menu" className='w-6' />
        </button>
      </div>

      {/*mobile view menu*/}

      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

        <div className='absolute top-6 right-6 cursor-pointer' onClick={closeMenu}>
          <Image src={assets.close_black} alt="close" className='w-5'/>
        </div>
          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About</a></li>
          <li><a onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a onClick={closeMenu} href="#projects">Projects</a></li>
          
          <a className="btn" onClick={closeMenu} href="#contact">Contact Me</a>
        
        </ul>

      </nav>
    </>
  )
}
