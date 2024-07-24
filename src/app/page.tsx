"use client"

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    // border border-rose-700
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
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Contact
          </button>
        </motion.div>
      </AuroraBackground>
      {/* <div className="min-h-[58vh] w-[40%] border border-blue-700">
       
      </div> */}
    </main>
  );
}