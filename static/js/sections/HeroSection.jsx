import startVector from "./../assets/images/icons/star-icon.svg"
import arrowDown from "./../assets/images/icons/arrow-icon.svg"
// import backgroundImage from "./../assets/images/general/bg-image.png"
// import bgElements from "./../assets/images/general/hero-bg-elements.png"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import heroThumb from './../assets/images/general/hero-thumb.jpg'
import heroThumb2 from './../assets/images/general/hero-thumb-2.jpg'
import heroThumb3 from './../assets/images/general/hero-thumb-3.jpg'
import heroThumb4 from './../assets/images/general/hero-thumb-4.jpg'
import heroStartupThumb from './../assets/images/general/hero-startup-thumb.png'
import smartAgreement from './../assets/images/icons/smart-agreement.svg'
import onePlatform from './../assets/images/icons/one-platform.svg'
import ScammerSimulator from "../component/ScammerSimulator";

const HeroSection = () => {
    // const [open, setOpen] = useState(false);
    // const [showGame, setShowGame] = useState(false);
    const [isGameOpen, setIsGameOpen] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const location = useLocation();

    useEffect(() => {
    const params = new URLSearchParams(location.search);
    const targetId = params.get('scrollTo');

    if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // optional delay
        }
    }
    }, [location]);

    const handleSolution = () => {
        if (location.pathname === '/') {
          // Already on home → scroll manually
          const el = document.getElementById('solution');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Not on home → navigate and trigger useEffect in Home.jsx
          navigate('/?scrollTo=solution');
        }
    };

    const heroSettings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

  return(
    <>
    {/* Hero section start */}
    <div className="relative min-h-[calc(100vh-120px)] bg-bgDark flex flex-col items-center justify-center bg-cover bg-center overflow-hidden md:pb-28 py-5" 
        // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-[#0E1218dd] to-dark-900">
            <div className="w-full h-full flex justify-around">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent relative">
                    <div className="absolute -top-full left-0 w-px h-16 bg-gradient-to-b from-transparent to-white animate-toptobottom flex items-end justify-center opacity-60" style={{animationDelay: '1200ms'}}>
                        <div className="w-1 h-1 bg-[#BBBCBE] rounded-full absolute bottom-0 -left-[1.5px]"></div>
                    </div>
                </div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent relative">
                    <div className="absolute -top-full left-0 w-px h-16 bg-gradient-to-b from-transparent to-white animate-toptobottom flex items-end justify-center opacity-60">
                        <div className="w-1 h-1 bg-[#BBBCBE] rounded-full absolute bottom-0 -left-[1.5px]"></div>
                    </div>
                </div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent relative">
                    <div className="absolute -top-full left-0 w-px h-16 bg-gradient-to-b from-transparent to-white animate-toptobottom flex items-end justify-center opacity-60" style={{animationDelay: '2000ms'}}>
                        <div className="w-1 h-1 bg-[#BBBCBE] rounded-full absolute bottom-0 -left-[1.5px]"></div>
                    </div>
                </div>
                <div className="w-px h-full bg-gradient-to-b from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-900/10 to-transparent"></div>
            </div>
            <div className="w-full h-full flex flex-col justify-around -translate-y-full">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"></div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"></div>
                <div className="w-full h-px bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-full h-px bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-transparent"></div>
                {/* <div className="w-full h-px bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-transparent"></div> */}
                <div className="w-full h-px bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-full h-px bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-transparent"></div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"></div>
            </div>
        </div>

        <div className="absolute left-1/3 bottom-10 md:bottom-16 animate-pulse">
            <svg
                width={62}
                height={32}
                viewBox="0 0 62 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
                >
                <g filter="url(#filter0_d_1346_18483)">
                    <path
                    d="M7 16.8279L17.9185 19.8088L25.3827 11.2977L36.3013 14.2787L43.7689 5.76652L54.6936 8.74563"
                    stroke="#C6C6C6"
                    strokeWidth={4}
                    strokeMiterlimit={10}
                    shapeRendering="crispEdges"
                    />
                </g>
                <defs>
                    <filter
                    id="filter0_d_1346_18483"
                    x="0.473633"
                    y="0.50824"
                    width="60.7461"
                    height="30.5593"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                    >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={3} />
                    <feGaussianBlur stdDeviation={3} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1346_18483"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1346_18483"
                        result="shape"
                    />
                    </filter>
                </defs>
            </svg>
        </div>

        <div className="container">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4">
                <div className="flex flex-col items-start max-lg:items-center col-span-1 lg:col-span-7 space-y-6 max-lg:text-center">
                    <div className="inline-flex gap-1.5 items-center px-4 py-1.5 rounded-full bg-gradient-to-b from-gray-1000 to-gray-1000 text-white text-sm font-medium shadow-inner" data-aos="fade-up">
                        <img src={startVector} alt="" />
                        <p className="tracking-[4%]">{t("trusted_platform")}</p>
                    </div>

                    <div className="lg:text-left mt-5 max-w-5xl mx-auto">
                        <h1 className="md:text-[54px] text-4xl font-semibold text-white md:leading-[72px] leading-[52px]" data-aos="fade-up">
                            {/* Your Work, Your Terms <span className="text-green">Freelance</span> or 
                            <span className="text-green"> Direct</span>, Seamlessly <span className="text-primary">Secured</span> */}
                            {t("hero.part1")}{' '}
                            <span className="text-green">{t("hero.freelance")}</span>{' '}
                            {t("hero.or")}{' '}
                            <span className="text-green">{t("hero.direct")}</span>,{' '}
                            <span>{t("hero.seamlessly")}</span>{' '}
                            <span className="text-primary">{t("hero.secured")}</span>
                        </h1>
                    </div>

                    <div className="lg:text-left max-w-xl" data-aos="fade-up">
                        <p className="text-white md:text-lg text-base md:leading-7 tracking-wider font-normal leading-6">{t('description')}</p>
                    </div>

                    <button 
                        onClick={handleSolution} 
                        // onClick={() => setIsGameOpen(true)}
                        className='inline-flex px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300'
                    >
                        <span>Get Started</span>
                    </button>
                </div>
                <div className="col-span-1 lg:col-span-5">
                    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                        <div className="md:h-[526px] rounded-full relative overflow-hidden" data-aos="zoom-in" data-aos-delay="500">
                            <Slider {...heroSettings} className="hero-slider slick-h-full h-full">
                                <div className="w-full h-full">
                                    <img src={heroThumb} className="w-full h-full object-cover object-bottom rounded-full" alt="" />
                                </div>
                                <div className="w-full h-full">
                                    <img src={heroThumb2} className="w-full h-full object-cover object-bottom rounded-full" alt="" />
                                </div>
                                <div className="w-full h-full">
                                    <img src={heroThumb3} className="w-full h-full object-cover object-bottom rounded-full" alt="" />
                                </div>
                                <div className="w-full h-full">
                                    <img src={heroThumb4} className="w-full h-full object-cover object-bottom rounded-full" alt="" />
                                </div>
                            </Slider>
                            <div className="w-full px-4 md:px-11 pb-8 pt-6 md:py-12 bg-white rounded-full space-y-2.5 absolute bottom-0 left-0">
                                <img src={smartAgreement} className="max-w-12 md:max-w-16" alt="" />
                                <div className="text-base font-medium">Smart Agreements. Real Trust.</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="w-full px-4 md:px-11 py-8 md:py-5 bg-white rounded-full space-y-2.5 shrink-0" data-aos="zoom-in" data-aos-delay="700">
                                <img src={onePlatform} className="max-w-12 md:max-w-16" alt="" />
                                <div className="text-base font-medium">One Platform, Zero Hassle Agreements</div>
                            </div>
                            <div className="w-full px-4 pt-5 md:pt-12 bg-primary rounded-full space-y-2.5 grow overflow-hidden flex items-end" data-aos="zoom-in" data-aos-delay="800">
                                <img src={heroStartupThumb} className="max-w-full w-full mt-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <div class="absolute bottom-0 md:bottom-10 left-1/2 -translate-x-1/2">
            <button type="button" class="w-14 h-14 rounded-full bg-gradient-to-b from-white/40 to-white/10 p-[1px] animate-bounce-slow" onClick={handleSolution}>
                <div class="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                    <img src={arrowDown} alt="arrowDownIcon" />
                </div>
            </button>
        </div>
    </div>
    
    {/* Hero section end */}
    <button onClick={() => setIsGameOpen(true)} className="w-14 h-14 cursor-pointer bg-primary hover:bg-green text-black rounded-full flex items-center justify-center animate-bounce-slow transition-all duration-500 fixed left-4 bottom-4 z-10">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path
                d="M10.1309 15.0099L9.10094 13.9799L10.0909 12.9899C10.3809 12.6999 10.3809 12.2199 10.0909 11.9299C9.80094 11.6399 9.32094 11.6399 9.03094 11.9299L8.04094 12.9199L7.08094 11.9599C6.79094 11.6699 6.31094 11.6699 6.02094 11.9599C5.73094 12.2499 5.73094 12.7299 6.02094 13.0199L6.98094 13.9799L5.99094 14.9699C5.70094 15.2599 5.70094 15.7399 5.99094 16.0299C6.14094 16.1799 6.33094 16.2499 6.52094 16.2499C6.71094 16.2499 6.90094 16.1799 7.05094 16.0299L8.04094 15.0399L9.07094 16.0699C9.22094 16.2199 9.41094 16.2899 9.60094 16.2899C9.79094 16.2899 9.98094 16.2199 10.1309 16.0699C10.4209 15.7799 10.4209 15.2999 10.1309 15.0099Z"
                fill="currentColor"
                />
                <path
                d="M13.5393 15C12.9893 15 12.5293 14.55 12.5293 14C12.5293 13.45 12.9693 13 13.5193 13H13.5393C14.0893 13 14.5393 13.45 14.5393 14C14.5393 14.55 14.0993 15 13.5393 15Z"
                fill="currentColor"
                />
                <path
                d="M17.4807 15C16.9307 15 16.4707 14.55 16.4707 14C16.4707 13.45 16.9107 13 17.4607 13H17.4807C18.0307 13 18.4807 13.45 18.4807 14C18.4807 14.55 18.0407 15 17.4807 15Z"
                fill="currentColor"
                />
                <path
                d="M15.5 16.97C14.95 16.97 14.5 16.53 14.5 15.98V15.96C14.5 15.41 14.95 14.96 15.5 14.96C16.05 14.96 16.5 15.41 16.5 15.96C16.5 16.51 16.06 16.97 15.5 16.97Z"
                fill="currentColor"
                />
                <path
                d="M15.5 13.03C14.95 13.03 14.5 12.59 14.5 12.04V12.02C14.5 11.47 14.95 11.02 15.5 11.02C16.05 11.02 16.5 11.47 16.5 12.02C16.5 12.57 16.06 13.03 15.5 13.03Z"
                fill="currentColor"
                />
                <path
                opacity="0.4"
                d="M22 11.07V16.65C22 19.6 19.6 22 16.65 22H7.35C4.4 22 2 19.6 2 16.65V11.07C2 8.11997 4.4 5.71997 7.35 5.71997H16.65C19.6 5.71997 22 8.11997 22 11.07Z"
                fill="currentColor"
                />
                <path
                d="M13.6394 2.71L13.6294 3.65C13.6194 4.53 12.8894 5.26 11.9994 5.26C11.8494 5.26 11.7594 5.36 11.7594 5.49C11.7594 5.62 11.8594 5.72 11.9894 5.72H10.3794C10.3694 5.65 10.3594 5.57 10.3594 5.49C10.3594 4.59 11.0894 3.86 11.9794 3.86C12.1294 3.86 12.2294 3.76 12.2294 3.63L12.2394 2.69C12.2494 2.31 12.5594 2 12.9394 2H12.9494C13.3394 2 13.6394 2.32 13.6394 2.71Z"
                fill="currentColor"
                />
            </g>
        </svg>
    </button>
    <ScammerSimulator isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};

export default HeroSection;