import { RocketLaunchIcon } from '@heroicons/react/20/solid'
import { CommandLineIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Service = () => {
  return (
    <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[5rem]'>
      <p className='heading'>MY-<span className='text-blue-400'>Services</span></p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] text-center mx-auto gap-[3rem] mt-[4rem] text-white'>
        <div data-aos="fade-right">
          <div className='bg-green-600 hover:scale-75 transform tarnsition-all duration-300 hover:-rotate-6
          uppercase font-semibold text-center p-[2rem] '>
              <CodeBracketSquareIcon className='w-[4rem] h-[4rem] mx-auto text-white'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.4rem] mb-[2rem]'>Frontend</h1>
              <p className='text-[15px] text-white font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet, officiis dolorum 
                excepturi, odio asperiores distinctio non quis quasi consequatur qui eaque quia? Tempora
                ipsam voluptates facilis et culpa iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Rerum obcaecati vitae repudiandae quam accusantium commodi odio cupiditate eveniet, quia natus?
              </p>
          </div>
        </div>

        <div data-aos="zoom-in " data-aos-delay="300">
          <div className='bg-green-600 hover:scale-75 transform tarnsition-all duration-300 hover:-rotate-6
          uppercase font-semibold text-center p-[2rem] '>
              <RocketLaunchIcon className='w-[4rem] h-[4rem] mx-auto text-white'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.4rem] mb-[2rem]'>backend</h1>
              <p className='text-[15px] text-white font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet, officiis dolorum 
                excepturi, odio asperiores distinctio non quis quasi consequatur qui eaque quia? Tempora
                ipsam voluptates facilis et culpa iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Rerum obcaecati vitae repudiandae quam accusantium commodi odio cupiditate eveniet, quia natus?
              </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className='bg-green-600 hover:scale-75 transform tarnsition-all duration-300 hover:-rotate-6
          uppercase font-semibold text-center p-[2rem] '>
              <CommandLineIcon className='w-[4rem] h-[4rem] mx-auto text-white'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.4rem] mb-[2rem]'>Fullstack</h1>
              <p className='text-[15px] text-white font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet, officiis dolorum 
                excepturi, odio asperiores distinctio non quis quasi consequatur qui eaque quia? Tempora
                ipsam voluptates facilis et culpa iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Rerum obcaecati vitae repudiandae quam accusantium commodi odio cupiditate eveniet, quia natus?
              </p>
          </div>
        </div>

      </div> 
    </div>
  )
}

export default Service