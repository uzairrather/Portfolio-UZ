import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] md: mt-[10vh] bg-cover bg-center">
        <Particle/>
        <div className='w-[80%] grid-cols-1 mx-auto flex lg:grid-cols-2 gap-[3rem] h-[100%] items-center '>
            <div>
            <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                Hi,I`M <span className='text-green-400'>Uzair!</span></h1>
                <TextEffect/>
                <p className='text-white text-[18px] mt-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Quis, fugiat aspernatur.
                     Provident in similique molestiae veritatis commodi aliquam <br></br>explicabo vero. Lorem ipsum,dolor sit amet consectetur 
                     adipisicing elit. <br></br>Rerum quod voluptatum quos at! Pariatur excepturi esse magnam deserunt ipsum nemo.</p>
                <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                    <button className='px-[2rem] hover:bg-blue-500 transition-all duuration-200 py-[1rem] 
                    text-[18px] font-bold uppercase bg-green-500 text-black flex items-center space-x-2 rounded-sm'>
                        <p>Download Cv</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                    </button>
                </div>
            </div>
            <div className='w-[500px] hidden bg-[green] relative lg:flex  rounded-full h-[500px]'>
                <Image src="/images/web.jpg" alt='image' layout='fill' className='object-cover rounded-full'/>
            </div>
           
        </div>
    </div>
  )
}

export default Hero