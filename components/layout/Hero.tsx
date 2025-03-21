import React from "react";
// import Particle from './Particle'
import TextEffect from "../ui/TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Particle from "../ui/Particle";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] md: mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto flex lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi,I`M <span className="text-green-400">Ausif!</span>
          </h1>
          <TextEffect />
          <p className="text-white text-[18px] mt-[1rem]">
            I am a highly skilled Full-Stack Web Developer with a strong
            foundation in modern web technologies.<br></br> I specialize in
            designing, developing, and deploying scalable,high-performance web
            applications<br></br>
            that provide a seamless user experience. From crafting responsive
            frontend interfaces to building<br></br> robust backend
            architectures, I bring ideas to life with clean,<br></br> efficient,
            and maintainable cod
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              onClick={() =>
                window.open("https://your-resume-link.com", "_blank")
              }
              className="px-[2rem] hover:bg-blue-500 transition-all duration-200 py-[1rem] 
            text-[18px] font-bold uppercase bg-green-500 text-black flex items-center space-x-2 rounded-sm"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#020b02] relative lg:flex  rounded-full h-[500px] opacity-80 ">
          <Image
            src="/images/blogs.jpg"
            alt="image"
            layout="fill"
            className="object-cover rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
