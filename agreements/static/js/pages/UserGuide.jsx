import React, { useEffect, useState } from 'react'
import bannerBg from './../assets/images/backgrounds/page-title-bg.png'
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import security from './../assets/images/general/security.svg'
import smartContract from './../assets/images/general/smart-contract.svg'
import freelancer from './../assets/images/icons/freelancer.svg'
import directAgreement from './../assets/images/icons/direct-agreement.svg'
import tokenSwap from './../assets/images/icons/token-swap.svg'
import SectionHeading from '../component/SectionHeading'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ConnectWalletTab from '../component/ConnectWalletTab'
import DirectAgreementTab from '../component/DirectAgreementTab'
import JobMarketplaceTab from '../component/JobMarketplaceTab'
import KeyBenefitTab from '../component/KeyBenefitTab'
import SeoMeta from '../component/SeoMeta'
import chatllat from './../assets/images/general/chatllat.png'

const tabs = [
  { label: "Connect Wallet", component: <ConnectWalletTab /> },
  { label: "Direct Agreement", component: <DirectAgreementTab /> },
  { label: "Job Marketplace", component: <JobMarketplaceTab /> },
  { label: "Key Benefits", component: <KeyBenefitTab /> }
];

function UserGuide() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
      AOS.refresh();
  }, []);

  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const activeComponent = tabs.find((tab) => tab.label === activeTab)?.component;
  return (
    <>
        <SeoMeta
          title="User Guide | Chatllat"
          description="Step-by-step guide to using Chatllat’s Web3 freelance platform. Learn how to create agreements, connect wallets, use escrow, and manage secure hiring."
          image={chatllat}
        />
        <section className="pt-16 pb-8 md:py-32 relative overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-full h-full absolute top-0 left-0">
              <img src={bannerBg} className='w-full h-full object-cover' alt="Banner Background" />
            </div>
            <div className="container relative">
                <h1 className='text-4xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-white to-primary bg-clip-text self-center inline-block'>Chatllat User Guide</h1>
                <div className="text-base text-white tracking-wider mt-3">Your Gateway to Decentralized Freelancing</div>
            </div>
        </section>

        <section className='py-10 pb-16 lg:py-24 relative'>
          <div className="w-full h-full absolute top-0 left-0" data-aos="fade-in" data-aos-delay="200">
            <img src={bgElement} className='w-full h-auto object-cover' alt="Background Element" />
          </div>
          <div className="container relative">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-10 lg:gap-5 items-center">
              <div className="">
                <img src={security} className='md:max-w-xl w-full mx-auto' alt="" />
              </div>
              <div className="space-y-4 md:space-y-9">
                <SectionHeading
                    title={'What is Chatllat?'} 
                    subtitle={`On Chain <span className="text-primary">'security'</span>`} 
                    align='start'
                />
                <div className='text-gray-400 text-base md:text-lg font-normal tracking-wide !leading-relaxed space-y-4' data-aos="fade-in" data-aos-delay="300">
                  <p>Welcome to Chatllat, the Web3-native platform designed to revolutionize how you work and hire. We've built a secure, transparent, and trustless environment where Payers and Receivers connect directly, powered by your crypto wallet. Say goodbye to traditional logins, scams, and middlemen – with Chatllat, it's just wallets, work, and wins. </p>
                  <p>This guide will walk you through the essential features and workflows of the Chatllat platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden" data-aos="fade-in" data-aos-delay="400">
          <div className='relative text-transparent font-extrabold text-5xl md:text-9xl whitespace-pre animate-marquee-right-to-left opacity-40 flex items-center gap-10 w-full'>
            <span className='text-stroke-gradient'>Chatllat  Is Game Changer</span>
            <span className='text-stroke-gradient'>Chatllat  Is Game Changer</span>
            <span className='text-stroke-gradient'>Chatllat  Is Game Changer</span>
          </div>
        </div>

        <section className='py-10 pb-16 lg:py-24 relative'>
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 lg:col-span-7">
                <SectionHeading
                    title={'What is Chatllat?'} 
                    subtitle={`On Chain <span className="text-primary">'security'</span>`} 
                    align='start'
                />
                <div className='text-gray-400 text-base md:text-lg font-normal tracking-wide !leading-relaxed space-y-4' data-aos="fade-in" data-aos-delay="200">
                  <p>Chatllat operates entirely on a wallet-based authentication model, meaning there are no traditional sign-ups, emails, or passwords required. Your crypto wallet address serves as your unique identifier.  </p>
                </div>
                <div className="mt-5 md:mt-8 border-t border-b border-gray-500/30 grid grid-cols-3 max-sm:divide-y sm:divide-x divide-gray-500/30">
                  <div className="max-sm:col-span-3 space-y-2 max-sm:space-y-4 text-base text-white text-center px-4 py-3 md:py-6" data-aos="fade-in" data-aos-delay="400">
                    <img src={freelancer} className='w-12 md:w-14 mx-auto' alt="" />
                    <h3>Direct Agreement <br /> System</h3>
                  </div>
                  <div className="max-sm:col-span-3 space-y-2 max-sm:space-y-4 text-base text-white text-center px-4 py-3 md:py-6" data-aos="fade-in" data-aos-delay="500">
                    <img src={directAgreement} className='w-12 md:w-14 mx-auto' alt="" />
                    <h3>Freelance Job <br /> Marketplace</h3>
                  </div>
                  <div className="max-sm:col-span-3 space-y-2 max-sm:space-y-4 text-base text-white text-center px-4 py-3 md:py-6" data-aos="fade-in" data-aos-delay="600">
                    <img src={tokenSwap} className='w-12 md:w-14 mx-auto' alt="" />
                    <h3>Token Swapping <br /> Module</h3>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 text-center" data-aos="fade-in" data-aos-delay="700">
                <img src={smartContract} className='w-full mx-auto' alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className='py-10 pb-16 lg:py-24 relative'>
          <div className="container">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 space-x-6 px-4 overflow-x-auto scroll-hidden" data-aos="fade-in" data-aos-delay="200">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`relative pb-4 text-base font-medium tracking-wider whitespace-pre transition-all duration-300 ease-in-out
                    ${activeTab === tab.label ? "text-white" : "text-gray-400"}
                  `}
                >
                  {tab.label}
                  {activeTab === tab.label && (
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow transition-all duration-300" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="py-6 text-gray-300 text-sm md:text-base animate-fadeIn" data-aos="fade-in" data-aos-delay="400">
              {activeComponent}
            </div>
          </div>
        </section>
    </>
  )
}

export default UserGuide