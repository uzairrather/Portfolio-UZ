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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, atque
        repellendus sequi quo cum velit molestias voluptatum obcaecati suscipit
        aliquid optio nobis odio! Maxime vel expedita qui asperiores dolores
        nostrum consequatur dolorem itaque esse, delectus nam magni dicta
        possimus doloribus?
      </p>
    </div>
  );
};

export default SkillItems;
