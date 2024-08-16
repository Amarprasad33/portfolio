import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.div
        initial={{opacity: 0, y: -40}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="mr-auto ml-auto w-[80%] z-50  fixed top-6"
    > 
        <nav className="pl-[32px] pt-[12px] pb-[12px] pr-[32px] border border-[rgba(255,255,255,.1)] bg-[rgba(17,17,17,.35)] backdrop-blur-[5px] flex rounded-full">
            <div id="nav-logo-block" className="flex items-center justify-start">
                <span className="text-white tracking-[4px] text-sm uppercase font-normal">
                    Amar Prasad
                </span>
            </div>
            <div id="nav-btns" className="ml-auto flex gap-2">
                <div>Home</div>
                <div>Stats</div>
                <div>projects</div>
                <div>contact</div>
            </div>
        </nav>
    </motion.div>
    
  )
}