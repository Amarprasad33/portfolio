"use client"

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <AuroraBackground className="text-white bg-gradient-to-b from-black to-black" showRadialGradient={true} >
          <Navbar />
        <motion.div 
          initial={{opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">
            Hey, I&apos;m Amar Prasad
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            I develop user interfaces and web applications.
          </div>
          <button className="bg-black border border-inherit dark:bg-white rounded-full w-fit text-white dark:text-black hover:bg-inherit hover:text-white transition-all duration-150 hover:border hover:border-gray-600 px-4 py-2">
            Contact
          </button>
        </motion.div>
      </AuroraBackground>

      <div className="min-h-screen w-full border border-rose-700">
        <h3 className="text-center text-4xl uppercase tracking-[0.5rem]">Projects</h3>
        <div id="projects-section" className="flex flex-col gap-[5rem] mt-12">
          <ProjectCard alignment='left' />
          <ProjectCard alignment='right' />
        </div>

      </div>

      <div className="border-b border-[#2b2b2b] w-[90%] mt-10"></div>

      <div id="footer" className="py-12 flex border w-[90%] border-blue-600">
          {/* <div>
            © Copyright 2024
          </div> */}
          <span className="text-white tracking-[4px] text-sm uppercase font-normal cursor-pointer">
            Amar Prasad
          </span>
          <div id="contact-methods">
            <span>
              <Image
                src="/"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </span>
          </div>
      </div>
      
    </main>
  );
}