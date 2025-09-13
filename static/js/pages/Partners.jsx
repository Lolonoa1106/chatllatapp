import React, { useEffect, useRef } from 'react'
import bannerBg from './../assets/images/backgrounds/page-title-bg.png'
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import SectionHeading from '../component/SectionHeading'
import partners from './../assets/images/general/partners.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactBg from './../assets/images/backgrounds/contact-bg.png'
import PartnersForm from '../component/PartnersForm'
import floatingElements from './../assets/images/general/floating-element.png'
import chatllat from './../assets/images/general/chatllat.png'
import SeoMeta from '../component/SeoMeta'

function Partners() {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
        AOS.refresh();
    }, []);
    const partnerSectionRef = useRef(null);
  return (
    <>
        <SeoMeta
          title="Faqs | Chatllat"
          description="Join leading Web3 innovators partnering with Chatllat. Discover collaboration opportunities to reshape decentralized hiring and secure freelance work."
          image={chatllat}
        />
        <section className="pt-16 pb-8 md:py-32 relative overflow-hidden" data-aos="zoom-up" data-aos-delay="200">
            <div className="w-full h-full absolute top-0 left-0">
            <img src={bannerBg} className='w-full h-full object-cover' alt="Banner Background" />
            </div>
            <div className="container relative">
                <h1 className='text-4xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-white to-primary bg-clip-text self-center inline-block'>Partner with Chatllat</h1>
                <div className="text-base text-white tracking-wider mt-3">Let’s build the future of secure Web3 work - together</div>
            </div>
        </section> 

        <section className='py-10 pb-16 lg:py-24 relative'>
          <div className="w-full h-full absolute top-0 left-0">
            <img src={bgElement} className='w-full h-auto object-cover' alt="Background Element" />
          </div>
          <div className="container relative">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-10 lg:gap-5 items-center">
              <div className="" data-aos="fade-in" data-aos-delay="400">
                <img src={partners} className='md:max-w-md w-full mx-auto' alt="" />
              </div>
              <div className="space-y-4 md:space-y-9">
                <SectionHeading
                    title={'Smart Contracts. Real Protection.'} 
                    subtitle={`Secure Work. <span className="text-primary">on-chain</span>`} 
                    align='start'
                />
                <div className='text-gray-400 text-base md:text-lg font-normal tracking-wide !leading-relaxed space-y-4' data-aos="fade-in" data-aos-delay="500">
                  <p>At Chatllat, we’re redefining how freelancers and clients work together in Web3 — without middlemen, fraud, or fear. If you’re a Layer-1/Layer-2 chain, DAO, wallet provider, marketplace, or investor committed to decentralization and trustless collaboration, we’d love to work with you.</p>
                  <p>Let’s build together. Join our mission to make secure, smart contract–based freelancing the new standard in Web3</p>
                </div>
                <button
                    onClick={() => {
                        partnerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className='inline-flex mt-8 px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300' data-aos="fade-up" data-aos-delay="600"
                >
                    SUBMIT FORM
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 overflow-hidden" id='partners-form' ref={partnerSectionRef}>
          <div className="w-full h-full absolute top-0 left-0">
            <img src={bgElement} className='w-full h-auto object-cover' alt="Background Element" />
          </div>
          <div className="w-full h-auto absolute bottom-0 left-0">
            <img src={contactBg} className='w-full h-auto object-cover translate-y-1/3' alt="Background Element" />
          </div>
          <div className="absolute w-[345px] h-[345px] -left-[20%] top-1/2 bg-gradient-to-b from-[#9980C118] to-[#FF99C118] blur-[99px]"></div>
          <div className="absolute w-[842px] h-[222px] left-1/2 bottom-20 -translate-x-1/2 bg-gradient-to-b from-[#9980C118] to-[#FF99C018] blur-[99px]"></div>
          <div className="container relative">
            <div className="w-auto h-auto absolute top-1/3 right-14">
                <img src={floatingElements} className='w-20 h-auto object-cover animate-bounce-slow' alt="Background Element" />
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-dark-950 to-dark-950/10 p-px rounded-3xl overflow-hidden" data-aos="fade-in" data-aos-delay="400">
                <div className="w-full bg-dark-950 rounded-3xl p-4 md:p-9 backdrop-blur">
                  <h3 className="text-xl md:text-3xl text-white tracking-wider font-medium mb-4 md:mb-8">Start a Strategic Partnership with Chatllat</h3>
                  <PartnersForm />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Partners
