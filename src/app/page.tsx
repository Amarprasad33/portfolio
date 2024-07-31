"use client"

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";

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
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Contact
          </button>
        </motion.div>
      </AuroraBackground>
      <div className="min-h-screen w-full border border-rose-700">
        <div id="project-group" className="flex gap-5">
          <div id="project-card" className="flex ml-9">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  On Walk
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Find what you want nearby as you walk.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div id="proj-desc">
            <div className="text-3xl font-medium">Find your desired item&apos;s location with few clicks.</div>
          </div>
        </div>

      </div>
    </main>
  );
}