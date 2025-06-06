import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-full fixed z-[10000] top-0 h-[10vh] bg-blue-950 shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PORT
          <span className="text-green-600 text-2xl">FOLIO</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-9 text-white text-sm font-medium">
          <Link href="/" className="nav-link">HOME</Link>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#service" className="nav-link">SERVICES</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#blog" className="nav-link">BLOG</a>
          <a href="#footer" className="nav-link">CONTACT</a>
        </div>

        {/* Mobile Icon */}
        <div onClick={openNav} className="md:hidden">
          <Bars3CenterLeftIcon className="w-8 h-8 cursor-pointer text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
