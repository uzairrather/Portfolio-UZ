import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react'

interface Props {
    openNav: ()=> void;
}
 const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[10vh] bg-blue-950 shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer test-[25px] text-white text-xs font-bold'>PORT
                <span className='text-green-600 text-2xl'>FOLIO</span>
            </h1>
            <Link href="/" className="nav-link">HOME</Link>
                <Link href="" className="nav-link" scroll={false}>ABOUT</Link>
                <Link href="" className="nav-link">SERVICES</Link>
                <Link href="" className="nav-link">PROJECTS</Link>
                <Link href="" className="nav-link">BLOG</Link>
                <Link href="" className="nav-link">CONTACT</Link>
            <div onClick={openNav}>
                <Bars3CenterLeftIcon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue-400'/>
            </div>
        </div>
    </div>
  )
}
export default Nav
