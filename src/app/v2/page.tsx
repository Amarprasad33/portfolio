import NavMenu from "@/components/custom/nav-menu";
import ProjectCard from "@/components/custom/project-card";


export default function PortfolioV2() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="border border-neutral-800 mt-16 w-[50vw] max-w-[664px] px-[10px]">
        
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-zinc-100 text-base">Amar Prasad</span>
            <span className="font-light text-sm text-[#A3A3A3]">Design Engineer</span>
          </div>
         
            <NavMenu />
        </div>

        <SectionHeading heading='about' />
        
        <div className="flex flex-col gap-5 mb-10 text-sm text-[#E8E8E8] font-normal" aria-label="Self-description">
          <p className="text-zinc-400">You know that weird, chaotic space between a stunning design mockup and a fully-functioning product? Yeah, I live there. I&apos;m a 
            <span className="text-zinc-100 font-medium"> Full Stack Developer</span> who loves to get his hands dirty with <span className="text-zinc-100 font-medium">UI/UX</span> design.</p>

          <p>My passion is the sweet spot between Design & Development. It&apos;s where I get to build experiences that feel as good as they look, and I&apos;m always hungry for the next challenge that pushes me further.</p>
        </div>

        <div className="flex flex-col mb-10">
          <SectionHeading heading='projects' />
          
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard />
            <ProjectCard />
          </div>

         

        </div>

      </div>
    </main>      
  );
}


const SectionHeading = ({ heading }: {
  heading: string
}) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="text-white/60 text-[13px] font-medium">{heading.toLocaleUpperCase()}</div>
      <div className="mt-[10px] h-px w-full bg-neutral-800"></div>
    </div>
  )
}