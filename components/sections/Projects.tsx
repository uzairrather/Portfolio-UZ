import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div  id="projects" className='bg-black pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
               Pro <span className='text-blue-500'>Ject</span>
        </h1>
        <div className='w-[80%] pt-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem]'>
           <div data-aos="fade-up">
             <div className='transform cursor-pointer hover:-translate-x-6 transition-all duration-200 relative
             w-[100%] h-[200px] md:h-[300px]'>
              <a href="https://next-ecommerence.vercel.app/">
                  <Image
                    src="/images/project-1.png"
                    alt="image"
                    layout="fill"
                    className="object-contain"
                  />
                </a>
             </div>
           </div>

           <div data-aos="fade-up" data-aos-delay="300">
             <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
             w-[100%] h-[200px] md:h-[300px]'>
          
          <a href="https://react-landing-page-swart.vercel.app/">
                  <Image
                    src="/images/project2.png"
                    alt="image"
                    layout="fill"
                    className="object-contain"
                  />
                </a>

             </div>
           </div>

           <div data-aos="fade-up" data-aos-delay="600">
             <div className='transform cursor-pointer hover:-translate-x-6 transition-all duration-200 relative
             w-[100%] h-[200px] md:h-[300px]'>
                <a href="https://next-ecommerence.vercel.app/">
                  <Image
                    src="/images/project3.png"
                    alt="image"
                    layout="fill"
                    className="object-contain"
                  />
                </a>

             </div>
           </div>

           <div data-aos="fade-up" data-aos-delay="900">
             <div className='transform cursor-pointer hover:-translate-x-6 transition-all duration-200 relative
             w-[100%] h-[200px] md:h-[300px]'>
                <a href="https://next-ecommerence.vercel.app/">
                  <Image
                    src="/images/project3.png"
                    alt="image"
                    layout="fill"
                    className="object-contain"
                  />
                </a>

             </div>
           </div>
           <div data-aos="fade-up" data-aos-delay="1200">
             <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative
             w-[100%] h-[200px] md:h-[300px]'>
                <a href="https://react-landing-page-swart.vercel.app/">
                  <Image
                    src="/images/project2.png"
                    alt="image"
                    layout="fill"
                    className="object-contain"
                  />
                </a>

             </div>
           </div>

           <div data-aos="fade-up" data-aos-delay="1600">
             <div className='transform cursor-pointer hover:-translate-x-6 transition-all duration-200 relative
             w-[100%] h-[200px] md:h-[300px]'>
                <a href="https://next-ecommerence.vercel.app/">
                  <Image
                    src="/images/project-1.png"
                    alt="image"
                    layout="fill"
                    className="object-contain"
                  />
                </a>

             </div>
           </div>
        </div>
    </div>
  )
}

export default Projects