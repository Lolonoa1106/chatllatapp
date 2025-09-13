import React from 'react'
import SectionHeading from '../component/SectionHeading'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function FreelancerBenefitsSection() {
    const { t } = useTranslation();
    const slider1 = [
        {
            title: t('freelancer_cards.card1.title'),
            description: t('freelancer_cards.card1.description'),
            ratting: 4.5,
            price: 190,
        },   
        {
            title: t('freelancer_cards.card2.title'),
            description: t('freelancer_cards.card2.description'),
            ratting: 4.5,
            price: 140,
        },   
        {
            title: t('freelancer_cards.card3.title'),
            description: t('freelancer_cards.card3.description'),
            ratting: 4.8,
            price: 120,
        },   
        {
            title: t('freelancer_cards.card4.title'),
            description: t('freelancer_cards.card4.description'),
            ratting: 4.5,
            price: 190,
        },   
        {
            title: t('freelancer_cards.card5.title'),
            description: t('freelancer_cards.card5.description'),
            ratting: 4.5,
            price: 190,
        },   
        {
            title: t('freelancer_cards.card6.title'),
            description: t('freelancer_cards.card6.description'),
            ratting: 4.5,
            price: 190,
        },   
        {
            title: t('freelancer_cards.card7.title'),
            description: t('freelancer_cards.card7.description'),
            ratting: 4.5,
            price: 140,
        },   
        {
            title: t('freelancer_cards.card8.title'),
            description: t('freelancer_cards.card8.description'),
            ratting: 4.8,
            price: 120,
        },   
        {
            title: t('freelancer_cards.card9.title'),
            description: t('freelancer_cards.card9.description'),
            ratting: 4.5,
            price: 190,
        },   
        {
            title: t('freelancer_cards.card10.title'),
            description: t('freelancer_cards.card10.description'),
            ratting: 4.5,
            price: 190,
        },   
    ]
  return (
    <>
        <section class="py-16 md:py-24 relative overflow-hidden">
            <div class="container">
                <div className='grid grid-cols-12 gap-8 items-center'>
                    <div className='col-span-12 md:col-span-5'>
                        <SectionHeading
                            title={t("FreelancerBenefits_title.title")} 
                            subtitle={`${t("FreelancerBenefits_title.subtitle.part1")} <span className="text-primary">${t("FreelancerBenefits_title.subtitle.part2")}</span>`} 
                            align='start'
                        />
                        <ul className='space-y-4 md:space-y-6 relative py-6 before:content-[""] before:w-0.5 before:h-full before:bg-primary before:block before:absolute before:top-0 before:left-6 before:z-[1]'>
                            <li className='flex items-center gap-3 text-base md:text-lg font-normal tracking-wider text-white relative z-[2]' data-aos="fade-up" data-aos-delay="200">
                                <div className='w-12 h-12 border-2 border-primary bg-dark-900 rounded-full flex items-center justify-center'>
                                    <svg width={24} height={21} viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
                                        <path d="M20.0195 17.1042H15.0692L12.5976 20.0956C12.2237 20.5482 11.5263 20.5365 11.1678 20.0716L8.87957 17.1042H3.98048C1.78211 17.1042 0 15.3221 0 13.1237V4.75245C0 2.55409 1.78211 0.771973 3.98048 0.771973H20.0195C22.2179 0.771973 24 2.55409 24 4.75245V13.1237C24 15.3221 22.2179 17.1042 20.0195 17.1042Z" fill="white" />
                                        <path d="M14.2263 8.77497C15.4563 7.54497 15.4563 5.55074 14.2263 4.32073C12.9963 3.09073 11.002 3.09073 9.77204 4.32073C8.54204 5.55074 8.54204 7.54497 9.77204 8.77497C11.002 10.005 12.9963 10.005 14.2263 8.77497Z" fill="#9980C1" />
                                        <path d="M17.4123 13.512C17.1067 11.5477 15.408 10.0444 13.358 10.0444H10.6422C8.59226 10.0444 6.89353 11.5477 6.58789 13.512H17.4123Z" fill="#9980C1" />
                                    </svg>
                                </div>
                                <span>{t("FreelancerBenefits_list.benefit1")}</span>
                            </li>
                            <li className='flex items-center gap-3 text-base md:text-lg font-normal tracking-wider text-white relative z-[2]' data-aos="fade-up" data-aos-delay="300">
                                <div className='w-12 h-12 border-2 border-primary bg-dark-900 rounded-full flex items-center justify-center'>
                                    <svg width={24} height={27} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
                                        <path d="M12.4968 26.8584L14.9724 25.5109C20.5326 22.4844 24 16.6162 24 10.2326V3.7878C24 3.28609 23.6067 2.86966 23.1106 2.85604C17.2604 2.69579 13.6311 0.988735 12.4365 0.327985C12.165 0.177781 11.835 0.177781 11.5635 0.327985C10.3689 0.988735 6.73962 2.69572 0.889415 2.85604C0.393303 2.86966 0 3.28609 0 3.7878V10.2326C0 16.6162 3.46739 22.4844 9.02764 25.5109L11.5032 26.8584C11.8133 27.0272 12.1867 27.0272 12.4968 26.8584Z" fill="white" />
                                        <path d="M22.8125 4.54724V10.0163C22.8125 16.1044 19.5217 21.6766 14.2249 24.5604L12.4688 25.5158C12.3228 25.5952 12.1609 25.6356 11.999 25.6356C11.8372 25.6356 11.6753 25.5952 11.5293 25.5158L9.77316 24.5604C4.47638 21.6766 1.18555 16.1044 1.18555 10.0163V4.54724C1.18555 4.28856 1.39029 4.07668 1.64815 4.05841C6.63152 3.71957 10.0532 2.39908 11.7847 1.55321C11.8537 1.51909 11.926 1.50244 11.999 1.50244C12.072 1.50244 12.1442 1.51909 12.2132 1.55321C13.9447 2.39915 17.3672 3.71957 22.3498 4.05841C22.6078 4.07668 22.8125 4.28856 22.8125 4.54724Z" fill="#9980C1" fillOpacity="0.8" />
                                        <path d="M22.8135 4.54724V10.0163C22.8135 16.1044 19.5227 21.6766 14.2259 24.5604L12.4698 25.5158C12.3237 25.5952 12.1619 25.6356 12 25.6356V1.50244C12.073 1.50244 12.1452 1.51909 12.2142 1.55321C13.9458 2.39915 17.3682 3.71957 22.3508 4.05841C22.6087 4.07668 22.8135 4.28856 22.8135 4.54724Z" fill="#9980C1" />
                                        <path d="M16.1133 11.4033H7.88914C7.3995 11.4033 7.00195 11.8009 7.00195 12.2905V18.8483C7.00195 19.338 7.3995 19.7355 7.88914 19.7355H16.1133C16.603 19.7355 17.0005 19.338 17.0005 18.8483V12.2905C17.0004 11.8009 16.6029 11.4033 16.1133 11.4033ZM12.7948 15.9852V16.6407C12.7948 17.0787 12.4393 17.4343 12.0012 17.4343C11.5632 17.4343 11.2077 17.0788 11.2077 16.6407V15.9852C10.8704 15.7408 10.6522 15.3432 10.6522 14.8949C10.6522 14.1497 11.2561 13.5459 12.0012 13.5459C12.7462 13.5459 13.3502 14.1497 13.3502 14.8949C13.3502 15.3433 13.132 15.7408 12.7948 15.9852Z" fill="white" />
                                        <path d="M14.9366 8.94681V9.97525C14.9366 10.3259 14.6524 10.6101 14.3018 10.6101C13.9511 10.6101 13.6669 10.3259 13.6669 9.97525V8.98773C13.6669 8.08529 12.9665 7.31567 12.0647 7.28162C11.1167 7.24582 10.3341 8.00662 10.3341 8.94688V10.7689H9.06445V8.99468C9.06445 7.39454 10.3252 6.05194 11.9248 6.0117C12.7658 5.99053 13.5282 6.32276 14.0764 6.87092C14.6081 7.40257 14.9366 8.13579 14.9366 8.94681Z" fill="white" />
                                    </svg>
                                </div>
                                <span>{t("FreelancerBenefits_list.benefit2")}</span>
                            </li>
                            <li className='flex items-center gap-3 text-base md:text-lg font-normal tracking-wider text-white relative z-[2]' data-aos="fade-up" data-aos-delay="400">
                                <div className='w-12 h-12 border-2 border-primary bg-dark-900 rounded-full flex items-center justify-center'>
                                    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
                                        <path d="M14.2456 20.1065C11.6404 20.1065 9.19108 19.092 7.34892 17.2498C5.50671 15.4076 4.49219 12.9583 4.49219 10.3531C4.49219 7.74782 5.50671 5.29853 7.34892 3.45634C9.19108 1.61415 11.6404 0.599609 14.2456 0.599609C16.8509 0.599609 19.3002 1.61415 21.1423 3.45632C22.9845 5.29851 23.9991 7.74781 23.9991 10.353C23.9991 12.9583 22.9845 15.4076 21.1423 17.2497C19.3002 19.0919 16.8509 20.1065 14.2456 20.1065ZM14.2456 2.37567C12.1148 2.37567 10.1115 3.20546 8.60477 4.71219C7.09803 6.21893 6.26823 8.22222 6.26823 10.3531C6.26823 12.4839 7.09803 14.4872 8.60477 15.9939C10.1115 17.5006 12.1148 18.3304 14.2456 18.3304C16.3764 18.3304 18.3798 17.5006 19.8865 15.9939C21.3932 14.4872 22.223 12.4839 22.223 10.3531C22.223 8.22223 21.3932 6.21893 19.8865 4.71219C18.3798 3.20545 16.3765 2.37567 14.2456 2.37567Z" fill="white" />
                                        <path d="M7.5859 18.549L1.70542 24.4291C1.47855 24.6564 1.10982 24.6564 0.882561 24.4291L0.170431 23.717C-0.0568102 23.4898 -0.0568102 23.121 0.170431 22.8941L6.05055 17.0137C6.27744 17.2934 6.52059 17.563 6.77859 17.821C7.03662 18.079 7.30619 18.3221 7.5859 18.549Z" fill="#9980C1" />
                                        <path d="M19.6198 15.2668C19.5471 15.3462 19.4722 15.4245 19.3956 15.5011C18.0205 16.8761 16.1922 17.6335 14.2474 17.6335C12.3026 17.6335 10.4743 16.8761 9.09909 15.5011C9.02244 15.4245 8.94755 15.3462 8.875 15.2668C8.99909 14.0103 9.52726 13.0655 10.0487 12.6744C11.2439 11.7782 12.7811 11.3848 12.7811 11.3848L13.4931 13.1021L14.0506 12.0465L13.7422 11.557C13.7487 11.5608 13.9591 11.6367 14.2474 11.6367C14.5356 11.6367 14.7461 11.5608 14.7527 11.557L14.4442 12.0465L15.0017 13.1021L15.7137 11.3848C15.7137 11.3848 17.2509 11.7782 18.4461 12.6744C18.9674 13.0655 19.4957 14.0103 19.6198 15.2668Z" fill="#9980C1" />
                                        <path d="M17.2659 7.81955C17.2659 8.02717 17.0094 8.7657 16.6993 8.96997C16.6027 9.88307 16.0272 10.6573 15.2942 11.0483C15.2942 11.0483 14.8788 11.2693 14.2462 11.2693C13.5292 11.2693 13.1998 11.0375 13.1998 11.0375C12.479 10.6433 11.8935 9.87505 11.794 8.97014C11.4834 8.76635 11.2266 8.02751 11.2266 7.81955C11.2266 7.57755 11.4228 7.38145 11.6648 7.38145C11.6885 7.38145 11.7117 7.38329 11.7344 7.38713C11.6396 6.84738 11.5664 6.29495 11.6653 5.75722C11.7698 5.18861 12.0903 4.60529 12.6307 4.39935C13.1474 4.20258 13.6803 4.14867 14.1409 4.13748C14.8202 4.1208 15.5801 4.2221 16.0811 4.52769C16.6736 4.88901 17.0638 5.40923 16.7135 7.39665C16.7498 7.38681 16.7882 7.38147 16.8276 7.38147C17.0696 7.38145 17.2659 7.57755 17.2659 7.81955Z" fill="#9980C1" />
                                    </svg>
                                </div>
                                <span>{t("FreelancerBenefits_list.benefit3")}</span>
                            </li>
                            <li className='flex items-center gap-3 text-base md:text-lg font-normal tracking-wider text-white relative z-[2]' data-aos="fade-up" data-aos-delay="500">
                                <div className='w-12 h-12 border-2 border-primary bg-dark-900 rounded-full flex items-center justify-center'>
                                    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
                                        <path d="M23.2762 10.6668L21.8742 10.427C21.6154 9.24564 21.1501 8.14133 20.5177 7.15441L21.3402 5.99273C21.5851 5.6466 21.5451 5.17425 21.2452 4.8743L19.7253 3.35442C19.4253 3.05447 18.953 3.01447 18.6069 3.2594L17.4452 4.08185C16.4581 3.44944 15.3539 2.98417 14.1725 2.7254L13.9328 1.32336C13.8613 0.905286 13.4988 0.599609 13.0747 0.599609H10.9252C10.5011 0.599609 10.1387 0.905286 10.0672 1.32336L9.82741 2.72542C8.64602 2.98418 7.54171 3.44946 6.55479 4.08186L5.39311 3.25941C5.04697 3.01448 4.57463 3.0545 4.27468 3.35444L2.75481 4.87431C2.45486 5.17425 2.41486 5.64661 2.65979 5.99274L3.48224 7.15443C2.84983 8.14135 2.38456 9.24566 2.1258 10.427L0.723748 10.6668C0.305677 10.7383 0 11.1008 0 11.5249V13.6744C0 14.0985 0.305677 14.4609 0.723748 14.5324L2.1258 14.772C2.38456 15.9536 2.84983 17.0579 3.48224 18.0448L2.65979 19.2065C2.41486 19.5526 2.45488 20.025 2.75481 20.3249L4.27469 21.8448C4.57463 22.1447 5.04699 22.1847 5.39312 21.9398L6.5548 21.1174C7.54172 21.7498 8.64603 22.215 9.82743 22.4738L10.0672 23.8758C10.1387 24.2939 10.5012 24.5996 10.9253 24.5996H13.0747C13.4988 24.5996 13.8613 24.2939 13.9328 23.8758L14.1726 22.4738C15.354 22.215 16.4581 21.7497 17.4452 21.1174L18.6069 21.9398C18.953 22.1847 19.4254 22.1447 19.7253 21.8448L21.2452 20.3249C21.5451 20.025 21.5851 19.5526 21.3402 19.2065L20.5178 18.0448C21.1502 17.0579 21.6154 15.9536 21.8742 14.772L23.2763 14.5324C23.6943 14.4609 24 14.0984 24 13.6744V11.5249C24 11.1008 23.6943 10.7383 23.2762 10.6668ZM12 20.1365C7.83754 20.1365 4.46312 16.7621 4.46312 12.5996C4.46312 8.43715 7.83754 5.06274 12 5.06274C16.1624 5.06274 19.5369 8.43716 19.5369 12.5996C19.5369 16.7621 16.1624 20.1365 12 20.1365Z" fill="white" />
                                        <path d="M16.5262 9.54922C16.5262 9.54922 16.5262 11.4261 16.5262 11.7781C16.5262 16.8616 12.0014 17.8784 12.0014 17.8784C12.0014 17.8784 7.47656 16.8616 7.47656 11.7781C7.47656 11.4261 7.47656 9.54922 7.47656 9.54922C9.79734 8.76708 12.0014 7.32031 12.0014 7.32031C12.0014 7.32031 14.2054 8.76708 16.5262 9.54922Z" fill="#9980C1" />
                                        <path d="M12.4796 13.0904L12.5545 14.2111C12.5759 14.532 12.3214 14.8041 11.9997 14.8041C11.678 14.8041 11.4236 14.532 11.4449 14.2111L11.5198 13.0904C11.0524 12.9009 10.7227 12.4423 10.7227 11.9068C10.7227 11.2015 11.2945 10.6299 11.9997 10.6299C12.7049 10.6299 13.2767 11.2015 13.2767 11.9068C13.2768 12.4423 12.947 12.9009 12.4796 13.0904Z" fill="white" />
                                    </svg>
                                </div>
                                <span>Guaranteed Payment via Escrow</span>
                            </li>
                        </ul>
                        <Link to="https://app.chatllat.com/" target='_blank' className='inline-flex mt-8 px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300' data-aos="fade-up" data-aos-delay="600">
                            <span>Earn money as Freelancer</span>
                            <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_787_1529" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={-1} width={26} height={27}>
                                <rect width={26} height={26} transform="matrix(-1 0 0 1 26 -0.00390625)" fill="currentColor" />
                                </mask>
                                <g mask="url(#mask0_787_1529)">
                                <path d="M15.2186 19.1219L21.3438 12.997L15.2186 6.87207L14.077 8.04695L18.2145 12.1845L4.65608 12.1845V13.8095L18.2145 13.8095L14.077 17.947L15.2186 19.1219Z" fill="white" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className='col-span-12 md:col-span-7 relative' data-aos="zoom-in" data-aos-delay="200">
                        <div className='grid grid-cols-2 gap-4 max-h-[520px] md:max-h-[715px] overflow-hidden relative z-10'>
                            <div className='absolute top-0 left-0 w-full h-60 md:h-72 bg-gradient-to-b from-dark-900 to-transparent z-10'></div>
                            <div className='absolute bottom-0 left-0 w-full h-60 md:h-72 bg-gradient-to-b from-transparent to-dark-900 z-10'></div>
                            <div className='flex flex-col gap-4 animate-marquee-up'>
                                {[...slider1, ...slider1].map((item, index) => (
                                    <div key={index} className='bg-dark-950 rounded-3xl p-5 space-y-4'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-9 h-8 md:w-14 md:h-14 bg-primary/20 rounded-full flex items-center justify-center max-sm:hidden shrink-0'>
                                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 md:w-6 h-5 md:h-6'>
                                                    <path d="M20.6004 25.6123L26.002 6.91748L13.3375 3.25773L7.93591 21.9525L20.6004 25.6123Z" fill="white" />
                                                    <path d="M23.5324 8.89181L14.377 6.24609L14.292 6.54021L23.4474 9.18592L23.5324 8.89181Z" fill="#414042" />
                                                    <path d="M23.1398 10.2356L13.9844 7.58984L13.8994 7.88396L23.0548 10.5297L23.1398 10.2356Z" fill="#414042" />
                                                    <path d="M22.7531 11.5783L13.5977 8.93262L13.5127 9.22674L22.6681 11.8724L22.7531 11.5783Z" fill="#414042" />
                                                    <path d="M22.3664 12.9221L13.2109 10.2764L13.126 10.5705L22.2814 13.2162L22.3664 12.9221Z" fill="#414042" />
                                                    <path d="M21.9758 14.2654L12.8203 11.6196L12.7353 11.9137L21.8908 14.5595L21.9758 14.2654Z" fill="#414042" />
                                                    <path d="M21.5852 15.6091L12.4297 12.9634L12.3447 13.2575L21.5002 15.9032L21.5852 15.6091Z" fill="#414042" />
                                                    <path d="M21.2023 16.9524L12.0469 14.3066L11.9619 14.6008L21.1173 17.2465L21.2023 16.9524Z" fill="#414042" />
                                                    <path d="M20.8156 18.2961L11.6602 15.6504L11.5752 15.9445L20.7306 18.5902L20.8156 18.2961Z" fill="#414042" />
                                                    <path d="M20.423 19.6394L11.2676 16.9937L11.1826 17.2878L20.338 19.9335L20.423 19.6394Z" fill="#414042" />
                                                    <path d="M20.0363 20.9831L10.8809 18.3374L10.7959 18.6315L19.9514 21.2773L20.0363 20.9831Z" fill="#414042" />
                                                    <path d="M19.6496 22.3264L10.4941 19.6807L10.4092 19.9748L19.5646 22.6205L19.6496 22.3264Z" fill="#414042" />
                                                    <path d="M14.5155 2.75439H2.06717C0.925522 2.75439 0 3.67999 0 4.82165V23.5469C0 24.6886 0.925522 25.6142 2.06717 25.6142H14.5155C15.6572 25.6142 16.5827 24.6886 16.5827 23.5469V4.82165C16.5827 3.67992 15.6572 2.75439 14.5155 2.75439Z" fill="#9980C1" />
                                                    <path d="M14.8828 23.9136L14.8828 4.4541L1.70019 4.4541L1.70019 23.9136L14.8828 23.9136Z" fill="white" />
                                                    <path d="M10.45 1.92822H6.13268C5.32698 1.92822 4.67383 2.58143 4.67383 3.38718C4.67383 4.19294 5.32698 4.84614 6.13268 4.84614H10.45C11.2557 4.84614 11.9089 4.19294 11.9089 3.38718C11.9089 2.58143 11.2557 1.92822 10.45 1.92822Z" fill="#1A1A1A" />
                                                    <path d="M8.05815 0.409685C7.52462 0.516477 7.16016 1.01674 7.16016 1.56086V2.8478C7.16016 3.39198 7.52462 3.89218 8.05815 3.99897C8.78577 4.14464 9.42391 3.592 9.42391 2.89034V1.51831C9.42391 0.81666 8.7857 0.264018 8.05815 0.409685ZM8.39495 1.90005C8.08705 1.97426 7.81665 1.70397 7.89086 1.39605C7.92573 1.2513 8.04438 1.13258 8.18912 1.09764C8.49708 1.02329 8.76755 1.29391 8.69321 1.6019C8.65834 1.74658 8.53962 1.86524 8.39495 1.90005Z" fill="#414042" />
                                                    <path d="M12.6948 6.66211H3.88867V15.0564H12.6948V6.66211Z" fill="#6D9985" />
                                                    <path d="M8.0735 8.92984L8.29218 9.15293L8.51099 8.92984L8.72973 9.15293L8.94848 8.92984L9.15765 9.14329V6.66211H7.42578V9.14382L7.63588 8.92984L7.85475 9.15293L8.0735 8.92984Z" fill="#F9D441" />
                                                    <path d="M7.29359 13.8042H6.51562V14.539H7.29359V13.8042Z" fill="#F9D441" />
                                                    <path d="M6.23695 13.8042H5.45898V14.539H6.23695V13.8042Z" fill="#F9D441" />
                                                    <path d="M5.17836 13.8042H4.40039V14.539H5.17836V13.8042Z" fill="#F9D441" />
                                                    <path d="M10.5263 17.835H3.3125V18.1411H10.5263V17.835Z" fill="#414042" />
                                                    <path d="M13.8364 15.9883L12.2674 18.8246L10.9043 17.2167L12.1758 17.8586L13.8364 15.9883Z" fill="#414042" />
                                                    <path d="M10.5263 20.9673H3.3125V21.2734H10.5263V20.9673Z" fill="#414042" />
                                                    <path d="M13.8364 19.1211L12.2674 21.9573L10.9043 20.3495L12.1758 20.9914L13.8364 19.1211Z" fill="#414042" />
                                                </svg>
                                            </div>
                                            <div className='space-y-1'>
                                                <h4 className='text-base md:text-lg font-medium text-white'>{item.title}</h4>
                                                <p className='text-sm md:text-base font-normal text-white/50'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-between'>
                                            <div className='flex items-center gap-1'>
                                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_810_5305" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                                    <rect width={20} height={20} fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_810_5305)">
                                                    <path d="M5.48034 16.6345L6.6743 11.4935L2.68555 8.0368L7.94826 7.58013L10.0012 2.73242L12.0541 7.58013L17.3168 8.0368L13.328 11.4935L14.522 16.6345L10.0012 13.907L5.48034 16.6345Z" fill="#F8D442" />
                                                    </g>
                                                </svg>
                                                <span className='text-sm md:text-base font-normal text-white'>{item.ratting}</span>
                                            </div>
                                            <span className='text-sm md:text-base font-normal text-white'>${item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col gap-4 animate-marquee-down'>
                                {[...slider1, ...slider1].map((item, index) => (
                                    <div key={index} className='bg-dark-950 rounded-3xl p-5 space-y-4'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-9 h-8 md:w-14 md:h-14 bg-primary/20 rounded-full flex items-center justify-center max-sm:hidden shrink-0'>
                                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 md:w-6 h-5 md:h-6'>
                                                    <path d="M20.6004 25.6123L26.002 6.91748L13.3375 3.25773L7.93591 21.9525L20.6004 25.6123Z" fill="white" />
                                                    <path d="M23.5324 8.89181L14.377 6.24609L14.292 6.54021L23.4474 9.18592L23.5324 8.89181Z" fill="#414042" />
                                                    <path d="M23.1398 10.2356L13.9844 7.58984L13.8994 7.88396L23.0548 10.5297L23.1398 10.2356Z" fill="#414042" />
                                                    <path d="M22.7531 11.5783L13.5977 8.93262L13.5127 9.22674L22.6681 11.8724L22.7531 11.5783Z" fill="#414042" />
                                                    <path d="M22.3664 12.9221L13.2109 10.2764L13.126 10.5705L22.2814 13.2162L22.3664 12.9221Z" fill="#414042" />
                                                    <path d="M21.9758 14.2654L12.8203 11.6196L12.7353 11.9137L21.8908 14.5595L21.9758 14.2654Z" fill="#414042" />
                                                    <path d="M21.5852 15.6091L12.4297 12.9634L12.3447 13.2575L21.5002 15.9032L21.5852 15.6091Z" fill="#414042" />
                                                    <path d="M21.2023 16.9524L12.0469 14.3066L11.9619 14.6008L21.1173 17.2465L21.2023 16.9524Z" fill="#414042" />
                                                    <path d="M20.8156 18.2961L11.6602 15.6504L11.5752 15.9445L20.7306 18.5902L20.8156 18.2961Z" fill="#414042" />
                                                    <path d="M20.423 19.6394L11.2676 16.9937L11.1826 17.2878L20.338 19.9335L20.423 19.6394Z" fill="#414042" />
                                                    <path d="M20.0363 20.9831L10.8809 18.3374L10.7959 18.6315L19.9514 21.2773L20.0363 20.9831Z" fill="#414042" />
                                                    <path d="M19.6496 22.3264L10.4941 19.6807L10.4092 19.9748L19.5646 22.6205L19.6496 22.3264Z" fill="#414042" />
                                                    <path d="M14.5155 2.75439H2.06717C0.925522 2.75439 0 3.67999 0 4.82165V23.5469C0 24.6886 0.925522 25.6142 2.06717 25.6142H14.5155C15.6572 25.6142 16.5827 24.6886 16.5827 23.5469V4.82165C16.5827 3.67992 15.6572 2.75439 14.5155 2.75439Z" fill="#9980C1" />
                                                    <path d="M14.8828 23.9136L14.8828 4.4541L1.70019 4.4541L1.70019 23.9136L14.8828 23.9136Z" fill="white" />
                                                    <path d="M10.45 1.92822H6.13268C5.32698 1.92822 4.67383 2.58143 4.67383 3.38718C4.67383 4.19294 5.32698 4.84614 6.13268 4.84614H10.45C11.2557 4.84614 11.9089 4.19294 11.9089 3.38718C11.9089 2.58143 11.2557 1.92822 10.45 1.92822Z" fill="#1A1A1A" />
                                                    <path d="M8.05815 0.409685C7.52462 0.516477 7.16016 1.01674 7.16016 1.56086V2.8478C7.16016 3.39198 7.52462 3.89218 8.05815 3.99897C8.78577 4.14464 9.42391 3.592 9.42391 2.89034V1.51831C9.42391 0.81666 8.7857 0.264018 8.05815 0.409685ZM8.39495 1.90005C8.08705 1.97426 7.81665 1.70397 7.89086 1.39605C7.92573 1.2513 8.04438 1.13258 8.18912 1.09764C8.49708 1.02329 8.76755 1.29391 8.69321 1.6019C8.65834 1.74658 8.53962 1.86524 8.39495 1.90005Z" fill="#414042" />
                                                    <path d="M12.6948 6.66211H3.88867V15.0564H12.6948V6.66211Z" fill="#6D9985" />
                                                    <path d="M8.0735 8.92984L8.29218 9.15293L8.51099 8.92984L8.72973 9.15293L8.94848 8.92984L9.15765 9.14329V6.66211H7.42578V9.14382L7.63588 8.92984L7.85475 9.15293L8.0735 8.92984Z" fill="#F9D441" />
                                                    <path d="M7.29359 13.8042H6.51562V14.539H7.29359V13.8042Z" fill="#F9D441" />
                                                    <path d="M6.23695 13.8042H5.45898V14.539H6.23695V13.8042Z" fill="#F9D441" />
                                                    <path d="M5.17836 13.8042H4.40039V14.539H5.17836V13.8042Z" fill="#F9D441" />
                                                    <path d="M10.5263 17.835H3.3125V18.1411H10.5263V17.835Z" fill="#414042" />
                                                    <path d="M13.8364 15.9883L12.2674 18.8246L10.9043 17.2167L12.1758 17.8586L13.8364 15.9883Z" fill="#414042" />
                                                    <path d="M10.5263 20.9673H3.3125V21.2734H10.5263V20.9673Z" fill="#414042" />
                                                    <path d="M13.8364 19.1211L12.2674 21.9573L10.9043 20.3495L12.1758 20.9914L13.8364 19.1211Z" fill="#414042" />
                                                </svg>
                                            </div>
                                            <div className='space-y-1'>
                                                <h4 className='text-base md:text-lg font-medium text-white'>{item.title}</h4>
                                                <p className='text-sm md:text-base font-normal text-white/50'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 justify-between'>
                                            <div className='flex items-center gap-1'>
                                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_810_5305" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                                    <rect width={20} height={20} fill="#D9D9D9" />
                                                    </mask>
                                                    <g mask="url(#mask0_810_5305)">
                                                    <path d="M5.48034 16.6345L6.6743 11.4935L2.68555 8.0368L7.94826 7.58013L10.0012 2.73242L12.0541 7.58013L17.3168 8.0368L13.328 11.4935L14.522 16.6345L10.0012 13.907L5.48034 16.6345Z" fill="#F8D442" />
                                                    </g>
                                                </svg>
                                                <span className='text-sm md:text-base font-normal text-white'>{item.ratting}</span>
                                            </div>
                                            <span className='text-sm md:text-base font-normal text-white'>${item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FreelancerBenefitsSection