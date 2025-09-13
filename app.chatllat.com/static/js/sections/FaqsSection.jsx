import React, { useState } from 'react'
import SectionHeading from '../component/SectionHeading'
// import faqBg from '../assets/images/general/faq-bg.png'
import faqanimation from '../assets/images/general/FAQs-animation.svg'
import Faqs from "../datahttps://chatllat.vercel.app/faqs";
import FaqItem from '../component/FaqItem';
import { useTranslation } from 'react-i18next';

function FaqsSection() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const visibleFaqs = Faqs().slice(0, 4);
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
        <section className='testimonial-section py-16 md:py-24 relative overflow-hidden'>
            {/* <div className='w-full h-full absolute bottom-0 left-0'>
                <img src={faqBg} alt="faq-bg" className='w-full h-full object-cover' />
            </div> */}
            <div className='container relative'>
                <SectionHeading
                    title={t("Faqs_title.title")}
                    subtitle={t("Faqs_title.subtitle.part1")}
                    align='center'
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-8 md:mt-14'>
                    <div className='space-y-4 md:space-y-6'>
                        {visibleFaqs.map((faq, idx) => (
                            <FaqItem 
                                key={idx} 
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === idx}
                                onClick={() => handleClick(idx)} 
                            />
                        ))}
                    </div>
                    <div className='max-w-sm max-md:mx-auto md:ml-auto max-md:hidden'>
                        <img src={faqanimation} className='w-full h-autow-full h-auto object-cover animate-pulse' alt={'Faq'} data-aos="fade-up" data-aos-delay="400" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FaqsSection