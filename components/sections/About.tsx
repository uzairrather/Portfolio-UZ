import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div  id="about" className="bg-black pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-teal-500  mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white">
            tramsforming <span className="text-green-500">Vision</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Full Stack web developer with 3+ years of hands-on experience
              building scalable and responsive web applications using
              JavaScript, Next.js, React.js, Redux, TypeScript, Tailwind CSS and
              Node.js. Proficient in front-end technologies including HTML, CSS,
              and modern component-based architectures. Skilled in implementing
              RESTful APIs, Test-Driven Development (TDD), and accessibility
              standards. Experienced with backend tools and services such as
              MongoDB, Clerk for authentication, and Inngest for event-driven
              workflows.
            </p>
          </div>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1cNXCwWkZP_RyY11Cx2V7fWvY6ZNOtSq_/view?usp=drive_link",
                "_blank"
              )
            }
            className="px-[2rem] hover:bg-blue-500 transition-all duration-200 py-[1rem] 
            text-[18px] font-bold uppercase bg-green-500 text-black flex items-center space-x-2 rounded-sm"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/tramsform.jpg"
            alt="image"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100px] h-[100px] object-contain bg-blue-500 shadow-lg shadow-blue-500/50"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
