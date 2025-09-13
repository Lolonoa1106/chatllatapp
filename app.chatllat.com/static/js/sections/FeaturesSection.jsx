import React, { useEffect } from 'react'
import SectionHeading from '../component/SectionHeading'
import walletAuthIcon from '../assets/images/icons/wallet-auth-icon.svg'
import escrowPaymentIcon from '../assets/images/icons/escrow-payment-icon.svg'
import privateIcon from '../assets/images/icons/private-icon.svg'
import smartContractIcon from '../assets/images/icons/smart-contract-icon.svg'
import privacyIcon from '../assets/images/icons/privacy-icon.svg'
import crossPlatformIcon from '../assets/images/icons/cross-platform-icon.svg'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'
    
function FeaturesSection() {
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
    const { t } = useTranslation();
    const features = [
        {
            title: t("features_list.feature1.title"),
            description: t("features_list.feature1.description"),
            icon: walletAuthIcon
        },
        {
            title: t("features_list.feature2.title"),
            description: t("features_list.feature2.description"),
            icon: escrowPaymentIcon
        },
        {
            title: t("features_list.feature3.title"),
            description: t("features_list.feature3.description"),
            icon: privateIcon
        },
        {
            title: t("features_list.feature4.title"),
            description: t("features_list.feature4.description"),
            icon: smartContractIcon
        },
        {
            title: t("features_list.feature5.title"),
            description: t("features_list.feature5.description"),
            icon: privacyIcon
        },
        {
            title: t("features_list.feature6.title"),
            description: t("features_list.feature6.description"),
            icon: crossPlatformIcon
        },
    ]
    return (
    <>
        <section class="py-16 md:py-24 relative overflow-hidden" id="features">
            <div className='w-80 h-80 bg-gradient-to-b from-primary to-pink rounded-full absolute top-24 -left-80 blur-3xl opacity-50'></div>
            <div class="container">
                <SectionHeading
                    title={t("features_title.title")} 
                    subtitle={`${t("features_title.subtitle.part1")} <span className="text-primary">${t("features_title.subtitle.part2")}</span>`} 
                    align='center'
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-14'>
                    {features.map((feature, index) => (
                        <div key={index} className='bg-dark-950 rounded-3xl p-6 group perspective' data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div className='w-16 md:w-20 h-16 md:h-20 rounded-2xl flex items-center justify-center gap-4 bg-bgDark'>
                                <img src={feature.icon} alt={feature.title} className='w-8 h-8 md:w-10 md:h-10 group-hover:rotate-y-180 transition-all duration-300' />
                            </div>
                            <h3 className='text-white text-xl md:text-2xl font-medium tracking-wide mt-4'>{feature.title}</h3>
                            <p className='text-gray-400 text-base md:text-lg font-normal tracking-wide mt-2'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default FeaturesSection