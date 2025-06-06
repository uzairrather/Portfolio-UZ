import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Link from 'next/link';

interface Props{
    nav:boolean;
    closeNav:()=> void;
}

const MobileNav = ({nav,closeNav}:Props) => {
    const navAnimation =nav ? "translate-x-0" : " translate-x-[-100%]";
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000]
     bg-[#05071efa] `}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <Link href="/" className="nav-link">HOME</Link>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#service" className="nav-link">SERVICES</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#blog" className="nav-link">BLOG</a>
          <a href="#footer" className="nav-link">CONTACT</a>
        </div>
        <div onClick={closeNav}>
           <XMarkIcon className='absolute z-[100000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue-400'/>
        </div>
     </div>
  )
}

export default MobileNav