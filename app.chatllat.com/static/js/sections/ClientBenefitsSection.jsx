import React from 'react'
import benefitsForClient from '../assets/images/general/benefits-for-client.svg'
import SectionHeading from '../component/SectionHeading'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ClientBenefitsSection() {
    const { t } = useTranslation();
    const benefits = [
        t("ClientBenefits_list.benefit1"),
        t("ClientBenefits_list.benefit2"),
        t("ClientBenefits_list.benefit3"),
        t("ClientBenefits_list.benefit4"),
    ];

    return (
        <>
            <section className='chain-protection-section py-16 md:py-24 relative'>
                <div className='container'>
                    <div className='group bg-gradient-to-b from-dark-950 to-green/50 rounded-3xl p-px'> 
                        <div className='rounded-3xl p-6 lg:p-16 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full h-full' style={{background: 'radial-gradient(80% 80% at 50% -30%, rgba(153, 128, 193, 0.3) 0%, rgb(14, 18, 24) 100%)'}}></div>
                            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-end'>
                                <div className='space-y-8 md:space-y-14'>
                                    <SectionHeading
                                        title={t("ClientBenefits_title.title")} 
                                        subtitle={`${t("ClientBenefits_title.subtitle.part1")} <span className="text-primary">${t("ClientBenefits_title.subtitle.part2")}</span>`} 
                                        align='start'
                                    />
                                    <ul className='space-y-4 mt-9'>
                                        {benefits.map((point, index) => (
                                        <li key={index} className='flex items-center gap-2 text-base md:text-lg font-normal tracking-wider text-white' data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                            <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
                                                <mask id="mask0_464_7668" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={26} height={27}>
                                                <rect y="0.599609" width={26} height={26} fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_464_7668)">
                                                <path d="M11.4631 18.2085L18.7464 10.9252L17.6048 9.78368L11.4631 15.9254L8.37563 12.8379L7.23407 13.9794L11.4631 18.2085ZM13.0025 23.8919C11.579 23.8919 10.241 23.6218 8.98853 23.0816C7.73601 22.5414 6.64654 21.8082 5.72011 20.8822C4.79368 19.9561 4.06017 18.8671 3.51959 17.6151C2.97919 16.3631 2.70898 15.0255 2.70898 13.6022C2.70898 12.1787 2.9791 10.8406 3.51932 9.58813C4.05954 8.33562 4.79269 7.24615 5.71876 6.31972C6.64482 5.39329 7.73385 4.65978 8.98582 4.1192C10.2378 3.57879 11.5754 3.30859 12.9988 3.30859C14.4223 3.30859 15.7603 3.5787 17.0128 4.11893C18.2653 4.65915 19.3548 5.3923 20.2812 6.31836C21.2076 7.24443 21.9411 8.33345 22.4817 9.58543C23.0221 10.8374 23.2923 12.175 23.2923 13.5984C23.2923 15.0219 23.0222 16.3599 22.482 17.6124C21.9418 18.8649 21.2086 19.9544 20.2825 20.8808C19.3565 21.8072 18.2675 22.5407 17.0155 23.0813C15.7635 23.6217 14.4259 23.8919 13.0025 23.8919ZM13.0007 22.2669C15.4201 22.2669 17.4694 21.4273 19.1486 19.7482C20.8277 18.069 21.6673 16.0197 21.6673 13.6003C21.6673 11.1808 20.8277 9.13151 19.1486 7.45234C17.4694 5.77318 15.4201 4.93359 13.0007 4.93359C10.5812 4.93359 8.5319 5.77318 6.85273 7.45234C5.17357 9.13151 4.33398 11.1808 4.33398 13.6003C4.33398 16.0197 5.17357 18.069 6.85273 19.7482C8.5319 21.4273 10.5812 22.2669 13.0007 22.2669Z" fill="#9980C1" />
                                                </g>
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                        ))}
                                    </ul>
                                    <Link to="https://app.chatllat.com/" target='_blank' className='inline-flex mt-8 px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300' data-aos="fade-up" data-aos-delay="400">
                                        <span>Post your project</span>
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
                                <div className=''>
                                    <img src={benefitsForClient} alt="chatlat safer" className='w-full h-auto object-cover' data-aos="fade-up" data-aos-delay="500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientBenefitsSection