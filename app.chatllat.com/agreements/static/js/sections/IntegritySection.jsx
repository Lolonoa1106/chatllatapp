import React from 'react'
import SectionHeading from '../component/SectionHeading'
import { useTranslation } from 'react-i18next'

function IntegritySection() {
    const { t } = useTranslation();
  return (
    <>
        <section class="py-16 md:py-24 relative overflow-hidden">
            <div class="container">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center'>
                    <div className='space-y-5'>
                        <SectionHeading
                            title={t("Integrity_title.title")} 
                            subtitle={`${t("Integrity_title.subtitle.part1")} <span className="text-primary">${t("Integrity_title.subtitle.part2")}</span>`} 
                            align='start'
                        />
                        <div className='max-md:hidden' data-aos="fade-right" data-aos-delay="200">
                            <svg width={433} height={125} viewBox="0 0 433 125" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-w-full ml-auto'>
                                <path d="M402.345 60.8645C402.616 59.1181 404.251 57.9218 405.998 58.1926C407.744 58.4634 408.94 60.0987 408.669 61.8452C408.399 63.5916 406.763 64.7879 405.017 64.5171C403.271 64.2463 402.074 62.611 402.345 60.8645ZM7.97155 11.8948L8.37993 11.4552C109.046 104.974 268.958 117.139 405.278 60.8003L405.507 61.3549L405.736 61.9094C269.11 118.375 108.663 106.256 7.56318 12.3344L7.97155 11.8948Z" fill="url(#paint0_linear_464_9330)" />
                                <circle cx={406} cy="60.999" r="13.6" stroke="url(#paint1_linear_464_9330)" strokeWidth="0.8" />
                                <circle cx={406} cy="60.999" r="26.6" stroke="url(#paint2_linear_464_9330)" strokeWidth="0.8" />
                                <defs>
                                <linearGradient id="paint0_linear_464_9330" x1="400.599" y1="93.0075" x2="4.90802" y2="31.6521" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#9980C1" />
                                    <stop offset={1} stopColor="#9980C1" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="paint1_linear_464_9330" x1="422.917" y1="53.999" x2="394.917" y2="65.0824" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#9980C1" />
                                    <stop offset={1} stopColor="#9980C1" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="paint2_linear_464_9330" x1="444.5" y1="47.999" x2="384.625" y2="68.874" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#9980C1" />
                                    <stop offset={1} stopColor="#9980C1" stopOpacity={0} />
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='space-y-8 md:space-y-16'>
                        <div className='space-y-3 md:space-y-6' data-aos="fade-up" data-aos-delay="300">
                            <div className='flex items-center gap-4'>
                                <div className='text-base text-gray-900 font-normal tracking-wider grow uppercase whitespace-pre'>{t("escrow_protected_deals")}</div>
                                <div className='w-full h-px bg-gradient-to-r from-gray-900 to-transparent grow relative'>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 bg-gray-900 rotate-45'></div>
                                </div>
                            </div>
                            <div className='text-4xl md:text-6xl font-semibold text-transparent bg-gradient-to-r from-primary to-transparent bg-clip-text self-center inline-block'>100%</div>
                        </div>
                        <div className='space-y-3 md:space-y-6' data-aos="fade-up" data-aos-delay="400">
                            <div className='flex items-center gap-4'>
                                <div className='text-base text-gray-900 font-normal tracking-wider grow uppercase whitespace-pre'>{t("platform_fees_on_direct_agreements")}</div>
                                <div className='w-full h-px bg-gradient-to-r from-gray-900 to-transparent grow relative'>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 bg-gray-900 rotate-45'></div>
                                </div>
                            </div>
                            <div className='text-4xl md:text-6xl font-semibold text-transparent bg-gradient-to-r from-yellow to-transparent bg-clip-text self-center inline-block'>0%</div>
                        </div>
                        <div className='space-y-3 md:space-y-6' data-aos="fade-up" data-aos-delay="500">
                            <div className='flex items-center gap-4'>
                                <div className='text-base text-gray-900 font-normal tracking-wider grow uppercase whitespace-pre'>{t("wallet_based_interactions")}</div>
                                <div className='w-full h-px bg-gradient-to-r from-gray-900 to-transparent grow relative'>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 bg-gray-900 rotate-45'></div>
                                </div>
                            </div>
                            <div className='text-4xl md:text-6xl font-semibold text-transparent bg-gradient-to-r from-green to-transparent bg-clip-text self-center inline-block'>100%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default IntegritySection