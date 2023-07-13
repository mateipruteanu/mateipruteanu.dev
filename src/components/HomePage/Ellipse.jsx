function Ellipse({className}) {
    return (
        <svg className={className} width="322" height="322" viewBox="0 0 322 322" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_17_16)">
                <circle cx="161" cy="161" r="161" fill="#FCFBFD"/>
            </g>
            <circle cx="161" cy="161" r="160.5" stroke="black" strokeOpacity="0.35"/>
            <defs>
                <filter id="filter0_i_17_16" x="0" y="0" width="326" height="326" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="10" dy="15"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_17_16"/>
                </filter>
            </defs>
        </svg>
    )
}

export default Ellipse;