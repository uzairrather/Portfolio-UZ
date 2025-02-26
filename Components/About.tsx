import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='bg-black pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
              <h1 className='text-[20px] font-bold uppercase text-teal-500  mb-[1rem]'>ABOUT ME</h1>
              <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>
                tramsforming <span className='text-green-500'>Vision</span>
              </h2>
              <div className='mb-[3rem] flex items-center md:space-x-10'>
                <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                <p className='text-[19px] text-slate-300 w-[80%]'>Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Possimus enim, tempora, unde esse ipsum sapiente
                     suscipit quae eos, distinctio ex dolores aspernatur reprehenderit. In voluptatum 
                     fugit mollitia labore, libero provident!</p>
              </div>
              <button className='px-[2rem] hover:bg-blue-500 transition-all duuration-200 py-[1rem] 
                    text-[18px] font-bold uppercase bg-green-500 text-black flex items-center space-x-2 rounded-sm'>
                        <p>Download Cv</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>
            </div>
            <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
               <Image src="/images/futuristic_globe.jpg" alt='image' layout='fill'  objectFit='contain'
               className="relative z-[11] w-[100px] h-[100px] object-contain bg-blue-500 shadow-lg shadow-blue-500/50"/>
            </div>
        </div>
    </div>
  )
}

export default About