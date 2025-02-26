import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  role: string;
  image: string;
}
const Client = ({ name, role, image }: Props) => {
  return (
    <div className=" flex flex-col text-center justify-center ">
      <Image
        src={image}
        alt={name}
        width={150}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />

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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident cum
        vel esse dignissimos incidunt rem temporibus! Dignissimos excepturi
        reprehenderit voluptas quas voluptatibus eaque sit perspiciatis, iste
        quis qui mollitia ab.
      </p>
    </div>
  );
};

export default Client;
