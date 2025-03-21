import About from '../components/sections/About';
import Blog from '../components/sections/Blog';
import Footer from '../components/layout/Footer';
import Hero from '@/components/layout/Hero';
import MobileNav from '@/components/layout/MobileNav';
import  Nav  from '../components/layout/Nav'
import Projects from '@/components/sections/Projects';
import Service from '@/components/sections/Service';
import Skill from '@/components/sections/Skill';
import Testimonial from '../components/sections/Testimonial';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Home() {
  const [nav,setNav]=useState(false);
  const openNav=()=>setNav(true);
  const closeNav =()=>setNav(false);
  // Animation set up ....
  useEffect(()=>{
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  },[])
  return (
    <div className='overflow-x-hidden'>
      {/* Navbar  */}
      <MobileNav nav={nav} closeNav= {closeNav}/>
      <Nav openNav={openNav}/>
      {/* hero section  */}
      <Hero/>
      <div className='relative z-[30]'>
        {/* about  */}
        <About/>
        <Service/>
        <Skill/>
        <Projects/>
        <Testimonial/>
        <Blog/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home