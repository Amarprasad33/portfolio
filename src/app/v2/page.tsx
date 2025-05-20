export default function PortfolioV2() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="border border-neutral-800 mt-16 w-[50vw] max-w-[664px] px-[10px]">
        
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span>Amar Prasad</span>
            <span>Developer + Designer</span>
          </div>
          <div className="flex flex-col">
            <div>Home</div>
            <div>Craft</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </div>

        <SectionHeading heading='about' />
        
        <div className="flex flex-col gap-5 mb-10 text-sm text-[#E8E8E8] font-normal" aria-label="Self-description">
          <p>A designer turned developer with over eight years of experience. I&apos;m passionate about crafting beautiful yet functional systems and websites with a focus on accessibility, performance, and interactivity.</p>

          <p>In the past I&apos;ve worked solo, within agencies and in-house at global organisations. I&apos;m now focused on contracting with small craft-focused teams and agencies.</p>

          <p>I&apos;m currently working as a Senior Designer & Developer at MakeBuild, a London-based agency helping clients build world-class marketing websites with Webflow.</p>
        </div>

        <div className="flex flex-col mb-10">
          <SectionHeading heading='projects' />
          
          <div 
            className="py-2 px-[10px] min-h-80"
            style={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'transparent',
              background: `
                linear-gradient(90deg, #52525280 50%, transparent 50%) top left/15px 1px repeat-x,
                linear-gradient(90deg, #52525280 50%, transparent 50%) bottom left/15px 1px repeat-x,
                linear-gradient(0deg, #52525280 50%, transparent 50%) left 1px/1px 15px repeat-y,
                linear-gradient(0deg, #52525280 50%, transparent 50%) right 1px/1px 15px repeat-y
              `,
            }}
          >
           <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="6.03851" x2="13.2226" y2="6.03851" stroke="#696969"/>
            <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="12" stroke="#696969"/>
          </svg>


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