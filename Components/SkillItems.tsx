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
        I am a Full-Stack Developer with expertise in building modern, scalable,
        and high-performance web applications. On the frontend, I specialize in
        HTML, CSS, JavaScript (ES6+), React.js, Next.js, and TypeScript,
        creating dynamic and responsive user interfaces. I leverage server-side
        rendering (SSR), static site generation (SSG), and API routes in Next.js
        to optimize performance and SEO. My styling approach includes Tailwind
        CSS, CSS Modules, and Styled Components, ensuring visually appealing and
        responsive designs. On the backend, I work with Node.js and MongoDB,
        developing robust and efficient server-side applications. Using
        Express.js, I build RESTful APIs, handle authentication with JWT, and
        ensure secure data management. I design database schemas in MongoDB,
        utilizing Mongoose for efficient data modeling. 
      </p>
    </div>
  );
};

export default SkillItems;
