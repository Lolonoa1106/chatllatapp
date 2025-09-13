// import { useState } from "react";

const FaqItem = ({ question, answer, isOpen, onClick, key }) => {
//   const [open, setOpen] = useState(false);

  return (
    <div className={`group bg-gradient-to-b rounded-3xl p-px transition-all duration-300 ${isOpen ? "from-primary to-primary" : "from-primary to-green/50"}`} onClick={onClick}>
        <div className="rounded-3xl p-4 lg:p-6 bg-dark-900 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden">
            {isOpen &&
            <div className="absolute top-0 left-0 w-full h-full" style={{background: "radial-gradient(80% 80% at 50% -30%, rgba(153, 128, 193, 0.3) 0%, rgb(14, 18, 24) 100%)"}}></div>
            }
            <div
                className="flex justify-between items-center cursor-pointer relative"
            >
                <h3 className="text-white font-normal text-lg md:text-xl tracking-wider">{question}</h3>
                <span className="text-white">{isOpen ? 
                    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.75 12.8496H4V11.3496H11.75H13.25H21V12.8496H13.25H11.75Z" fill="white" />
                    </svg>
                 : 
                    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_497_9657" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={25}>
                        <rect y="0.599609" width={24} height={24} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_497_9657)">
                        <path d="M11.25 21.0996V13.3496H3.5V11.8496H11.25V4.09961H12.75V11.8496H20.5V13.3496H12.75V21.0996H11.25Z" fill="white" />
                        </g>
                    </svg>
                 }</span>
            </div>
            <div className={`relative transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
                {/* {open && ( */}
                        <div className="text-gray-300 text-opacity-90 text-base tracking-wider transition-all duration-300">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900/40 to-transparent my-4"></div>
                            {answer}
                        </div>
                {/* )} */}
            </div>
        </div>
    </div>
  );
};

export default FaqItem;