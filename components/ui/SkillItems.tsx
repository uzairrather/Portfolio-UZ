import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillItems = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span
        className="px-[2rem] text-green-400 py-[1rem] font-bold text-[18px] border-[2px]
       border-y-green-300"
      >
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-white font-normal w-[80%] text-[17px]  opacity-80">
        Full Stack web developer with 2+ years of hands-on experience building
        scalable and responsive web applications using JavaScript, Next.js,
        React.js, Redux, TypeScript, Tailwind CSS and Node.js. Proficient in
        front-end technologies including HTML, CSS, and modern component-based
        architectures. Skilled in implementing RESTful APIs, Test-Driven
        Development (TDD), and accessibility standards. Experienced with backend
        tools and services such as MongoDB, Clerk for authentication, and
        Inngest for event-driven workflows.
      </p>
    </div>
  );
};

export default SkillItems;
