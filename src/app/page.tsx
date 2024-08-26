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
      <AuroraBackground id="hero" className="text-white bg-gradient-to-b from-black to-black" showRadialGradient={true} >
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
          <Link href={'#contact-footer'}>   
            <button className="bg-black border border-inherit dark:bg-white rounded-full w-fit text-white dark:text-black hover:bg-inherit hover:text-white transition-all duration-150 hover:border hover:border-gray-600 px-4 py-2">
              Contact
            </button>
          </Link>
        </motion.div>
      </AuroraBackground>

      <div className="min-h-screen w-full" id="projects">
        <h3 className="text-center text-4xl uppercase tracking-[0.5rem]">Projects</h3>
        <div id="projects-section" className="flex flex-col gap-[5rem] mt-12">
          <ProjectCard 
            projectHeading="On Walk" 
            projShortDesc="Find what you want nearby as you walk." 
            projLongDesc="An innovative platform that allows you to easily find the location of your desired products in nearby stores, ensuring a seamless shopping experience." 
            alignment='left'
            liveUrl="/not-found"
            githubUrl="https://github.com/Amarprasad33/on-walk"
          />
          <ProjectCard 
            projectHeading="Hireop"
            projShortDesc="A hiring platform for content creators"
            projLongDesc="An intuitive hiring platform for content creators, enabling creators to post job opportunities while talented individuals apply directly, fostering seamless connections and collaborations."
            liveUrl="/not-found"
            githubUrl="https://github.com/Amarprasad33/hireop-app/"
            alignment='right' 
          />
        </div>

      </div>

      <div className="border-b border-[#2b2b2b] w-[90%] mt-10"></div>

      <div id="contact-footer" className="py-12 flex  w-[90%]">
          {/* <div>
            © Copyright 2024
          </div> */}
          <Link href={'#hero'}>          
            <span className="text-white tracking-[4px] text-sm uppercase font-normal cursor-pointer flex items-center">
              Amar Prasad
            </span>
          </Link>
          <div id="contact-methods" className="ml-auto flex gap-4">
            <Link href={'https://github.com/Amarprasad33'} rel="noopener noreferrer" target="_blank">
              <span>
                <svg aria-hidden="true" className="text-2xl text-[#424249] transition-colors duration-200 hover:text-[#71717a]" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.5a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34C5.68 17.31 5.03 17 5.03 17c-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0-10-10Z" fill="currentColor"></path>
                </svg>
              </span>
            </Link>
            <Link href={'https://x.com/Amarmelops1'} rel="noopener noreferrer" target="_blank">
              <span>
                <svg aria-hidden="true" className="text-2xl text-[#424249] transition-colors duration-200 hover:text-[#71717a]" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.795 11.033 20.68 2.5h-3.073l-5.255 6.517L7.69 2.5H1l7.806 10.91L1.47 22.5h3.074l5.705-7.07 5.061 7.07H22l-8.205-11.467Zm-2.38 2.95L9.97 11.964 4.36 4.127h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" fill="currentColor"></path>
                </svg>
              </span>
            </Link>
            <Link href={'https://www.linkedin.com/in/amar-prasad-736b33227/'} rel="noopener noreferrer" target="_blank">
              <span>
                <svg aria-hidden="true" className="text-2xl text-[#424249] transition-colors duration-200 hover:text-[#71717a]" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.959 14.219v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792ZM4.421 2.526C2.958 2.526 2 3.486 2 4.749c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224-.026-1.263-.927-2.223-2.392-2.223ZM2.254 21.598h4.278V8.729H2.254v12.869Z" fill="currentColor"></path>
                </svg>
              </span>
            </Link>
            <Link href={'https://www.instagram.com/im_amar_prasad/'} rel="noopener noreferrer" target="_blank">
              <span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-xl mt-[2px] text-[#424249] transition-colors duration-200 hover:text-[#71717a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </span>
            </Link>
          </div>
      </div>
      
    </main>
  );
}