

export default function ProjectCard() {
    return (
        <div 
            className="proj-card py-2 relative px-[10px] min-h-80 [--dashColor:rgba(82,82,82,0.5)] hover:[--dashColor:rgba(163,163,163,0.85)] transition-colors duration-200 hover:shadow-[0_0_22px_#A3A3A333]"
            style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'transparent',
            background: `
                linear-gradient(90deg, var(--dashColor) 50%, transparent 50%) top left/15px 1px repeat-x,
                linear-gradient(90deg, var(--dashColor) 50%, transparent 50%) bottom left/15px 1px repeat-x,
                linear-gradient(0deg, var(--dashColor) 50%, transparent 50%) left 1px/1px 15px repeat-y,
                linear-gradient(0deg, var(--dashColor) 50%, transparent 50%) right 1px/1px 15px repeat-y
            `,
            }}
        >
            {/* frame decorator */}
            <svg className="absolute -top-[6px] -left-[6px]" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="6.03851" x2="13.2226" y2="6.03851" stroke="#696969"/>
            <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="12" stroke="#696969"/>
            </svg>

            <svg className="absolute -top-[5.6px] -right-[7px]" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="6.03851" x2="13.2226" y2="6.03851" stroke="#696969"/>
            <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="12" stroke="#696969"/>
            </svg>

            <svg className="absolute -bottom-[5px] -left-[6px]" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="6.03851" x2="13.2226" y2="6.03851" stroke="#696969"/>
            <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="12" stroke="#696969"/>
            </svg>

            <svg className="absolute -bottom-[5px] -right-[7px]" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="6.03851" x2="13.2226" y2="6.03851" stroke="#696969"/>
            <line x1="6.5" y1="2.18557e-08" x2="6.5" y2="12" stroke="#696969"/>
            </svg>
            {/* frame decorator */}



        </div>
    )
}