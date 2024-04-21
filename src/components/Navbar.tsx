"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = () => {

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Lizardo Perez
          </span>
        </Link>

        <div className="w-full md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <Link href="/" className="cursor-pointer">
             Inicio
            </Link>
            <Link href="/about-me" className="cursor-pointer">
              Sobre mi
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Habilidades
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Proyectos
            </Link>
            <Link target="_blank" href="/mycv.pdf" className="cursor-pointer">
              MyCV
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name}>
              <Image src={social.src} alt={social.name} width={34} height={34} />
            </Link>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
