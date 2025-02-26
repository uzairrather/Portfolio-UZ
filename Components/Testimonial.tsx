import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div className='bg-black pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Client <span className='text-blue-400 '>Reviews</span>
        </h1>
        <div className='pt-[5rem] pb-[1rem] w-[80%] mx-auto'>
            
          <TestimonialSlider/>   
        </div>
    </div>
  )
}

export default Testimonial