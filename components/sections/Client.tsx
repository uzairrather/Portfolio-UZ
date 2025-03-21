import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  role: string;
  image: string;
  review: string;
}
const Client = ({ name, role, image, review }: Props) => {
  return (
    <div className=" flex flex-col text-center justify-center ">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-blue-500 mx-auto">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>



      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-blue-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-blue-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-blue-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-blue-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-blue-400" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75  mb-[1.5rem] ">
        {role}
      </p>
      <p className="text-[16px] text-white opacity-75 w-[90%] md:w-[50%] mx-auto">
        {review}
      </p>
    </div>
  );
};

export default Client;
