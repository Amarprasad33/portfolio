import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";


export default function ProjectCard({
        alignment,
        projectHeading,
        projShortDesc,
        projLongDesc,
        liveUrl,
        githubUrl,
        imageUrl
    }: 
    {
        alignment: string
        projectHeading: string
        projShortDesc: string
        projLongDesc: string
        liveUrl: string
        githubUrl: string
        imageUrl: string
    }) {
  return (
    <>
        <div id="project-group" className={`flex gap-9 lg:gap-5 flex-col ${alignment == 'right'? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-center justify-center`}>
          <div id="project-card" className={`flex ${alignment == 'right'? 'mr-9' : 'ml-9'}`}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {projectHeading}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {projShortDesc}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={imageUrl}
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
                    href={liveUrl}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <Link href={githubUrl} target="__blank">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <svg aria-hidden="true" className="text-2xl text-[#424249] transition-colors duration-200 hover:text-[#71717a]" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.5a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34C5.68 17.31 5.03 17 5.03 17c-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0-10-10Z" fill="currentColor"></path>
                      </svg>
                    </CardItem>
                    </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div id="proj-desc" className="flex flex-col items-center justify-center">
            <div className="w-[75%] text-[2.9rem] leading-[2.9rem] font-semibold text-[#3e3e3e] text-center lg:text-left">
              {projLongDesc}
            </div>
          </div>
        </div>
    </>
  )
}