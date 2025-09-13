import React, { useEffect, useState } from 'react'
import bannerBg from './../assets/images/backgrounds/page-title-bg.png'
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import FaqItem from '../component/FaqItem'
import Faqs from "../datahttps://chatllat.vercel.app/faqs";
// import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SeoMeta from '../component/SeoMeta';
import chatllat from './../assets/images/general/chatllat.png'

function FaqsPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = Faqs();
    // console.log(Faqs);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
        AOS.refresh();
    }, []);
    
  return (
    <>
        <SeoMeta
          title="Faqs | Chatllat"
          description="Find answers to common questions about Chatllat’s Web3 freelance platform, escrow system, wallet integration, and client-freelancer agreements."
          image={chatllat}
        />
        <section className="pt-16 pb-8 md:py-32 relative overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0">
            <img src={bannerBg} className='w-full h-full object-cover' alt="Banner Background" />
          </div>
          <div className="container relative">
            <h1 className='text-4xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-white to-primary bg-clip-text self-center inline-block'>Frequently Asked Questions</h1>
            <div className="text-base text-white tracking-wider mt-3">Everything You Need to Know</div>
          </div>
        </section>

        <section className="contant-section relative py-16 md:py-24 overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0">
                <img src={bgElement} className='w-full h-auto object-cover' alt="Background Element" />
            </div>
            <div className="container relative">
                <div className='space-y-4 md:space-y-6'>
                    {faqs.map((faq, idx) => (
                        <FaqItem
                            key={idx} 
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === idx}
                            onClick={() => handleClick(idx)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default FaqsPage
