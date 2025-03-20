import { RocketLaunchIcon } from '@heroicons/react/20/solid'
import { CommandLineIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Service = () => {
  return (
    <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[2rem]'>
      <p className='heading'>MY-<span className='text-blue-400'>Services</span></p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] text-center mx-auto gap-[3rem] mt-[4rem] text-white'>
        <div data-aos="fade-right ">
          <div className='bg-green-600 hover:scale-75 transform tarnsition-all duration-300 hover:-rotate-6
           font-bold text-center p-[2rem] '>
              <CodeBracketSquareIcon className='w-[4rem] h-[4rem] mx-auto text-white'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.4rem] mb-[2rem] uppercase'>Frontend</h1>
              <div>
              <p className='text-[15px] text-white font-normal text-start'>
              I specialize in building interactive, responsive, and high-performance web applications
               using modern frontend technologies. My expertise includes:<br></br>
               -Languages & Core Tech: HTML, CSS, JavaScrit<br></br>
                    -Frameworks & Libraries: React.js<br></br>
                    -Styling & UI: Tailwind CSS, Bootstrap<br></br>
                    -State Management: Redux<br></br>
                    -Meta Frameworks: Next.js (React)<br></br>
               
 
              </p>
              </div>
              
          </div>
        </div>

        <div data-aos="zoom-in " data-aos-delay="300">
          <div className='bg-green-600 hover:scale-75 transform tarnsition-all duration-300 hover:-rotate-6
         font-semibold text-center p-[2rem] '>
              <RocketLaunchIcon className='w-[4rem] h-[4rem] mx-auto text-white'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.4rem] mb-[2rem] uppercase'>backend</h1>
              <p className='text-[15px] text-white font-normal text-start'>
              Backend development involves server-side programming, databases, APIs, and authentication
               to handle requests and process data. Popular languages include Node.js, PHP,
                and Go, with framework like Express.js. Databases range
                 from SQL (PostgreSQL, MySQL) to NoSQL (MongoDB). APIs are built using REST, GraphQL,
                  or gRPC, while authentication is managed with JWT, OAuth, and session-based auth. Deployment
              </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className='bg-green-600 hover:scale-75 transform tarnsition-all duration-300 hover:-rotate-6
           font-semibold text-center p-[2rem] '>
              <CommandLineIcon className='w-[4rem] h-[4rem] mx-auto text-white'/>
              <h1 className='text-[20px] md:text-[30px] mt-[1.4rem] mb-[2rem] uppercase'>Fullstack</h1>
              <p className='text-[15px] text-white font-normal text-start'>
              I specialize in building end-to-end web applications with both frontend and backend technologies includes:<br></br>
              -Frontend: React.js(UI/UX design,component-based ).<br></br>
              -Backend: Node.js (Express.js) (server-side logic, API development).<br></br>
              -Databases: MongoDB (NoSQL), MySQL (SQL).<br></br>
              -API Development: REST<br></br>
              -Deployment & DevOps: AWS, Vercel.<br></br>
                            </p>
          </div>
        </div>

      </div> 
    </div>
  )
}

export default Service