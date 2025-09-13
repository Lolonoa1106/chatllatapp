import React from 'react'
import SectionHeading from './../component/SectionHeading'
import discord from '../assets/images/icons/discord.svg'
import twitter from '../assets/images/icons/twitter.svg'
import telegram from '../assets/images/icons/telegram.svg'
import linkedin from '../assets/images/icons/linkedin.svg'
import middlearrows from '../assets/images/general/middle-arrows.svg'
import CardWithIcon from '../component/CardWithIcon'
import bgElements from '../assets/images/general/solution-bg-elements.png'
import chatllatIcon from '../assets/images/logo/chatllat-icon.svg'
import safeGuardIcon from '../assets/images/icons/safeguards-icon.svg'
import directAgreementIcon from '../assets/images/icons/direct-agreement-icon.svg'
import disputeMechanismIcon from '../assets/images/icons/dispute-mechanism-icon.svg'
import walletBasedIdentityIcon from '../assets/images/icons/wallet-identity-icon.svg'
import { useTranslation } from 'react-i18next'

function SolutionSection() {
  const { t } = useTranslation();
  const features = [
    {
      icon: safeGuardIcon,
      title: t("chatllat_solution_features.feature1.title"),
      description: t("chatllat_solution_features.feature1.description")
    },
    {
      icon: directAgreementIcon,
      title: t("chatllat_solution_features.feature2.title"),
      description: t("chatllat_solution_features.feature2.description")
    },
    {
      icon: disputeMechanismIcon,
      title: t("chatllat_solution_features.feature3.title"),
      description: t("chatllat_solution_features.feature3.description")
    },
    {
      icon: walletBasedIdentityIcon,
      title: t("chatllat_solution_features.feature4.title"),
      description: t("chatllat_solution_features.feature4.description")
    }
  ];

  return (
    <>
        <section className="solution-section py-12 md:py-16 relative" id="solution">
          <div className='w-full h-full absolute top-1/2 left-0 -translate-y-1/2'>
            <img src={bgElements} alt="solution" className='w-full h-auto object-cover' />
          </div>
          <div className="container relative">
              <SectionHeading 
                subtitle={`${t("solution.subtitle.part1")} <span className='text-primary'>${t("solution.subtitle.part2")}</span>`} 
                title={t("solution.title")} 
                description={t("solution.description")} 
                align="center"
              />
              
              <div className='mt-20 md:mt-28 relative'>
                <div className='flex max-sm:flex-col max-sm:items-center justify-center gap-14 sm:gap-6 lg:gap-20 2xl:gap-32'>
                  <div className='max-w-80 w-full' data-aos="fade-up" data-aos-delay="100">
                    <CardWithIcon icon={discord} title={t("features.feature1")} className='group-hover:bg-discord' />
                  </div>
                  <div className='max-w-80 w-full' data-aos="fade-up" data-aos-delay="200">
                    <CardWithIcon icon={twitter} title={t("features.feature2")} className='group-hover:bg-twitter' />                      
                  </div>
                </div>
                <div className='flex max-sm:flex-col max-sm:items-center justify-center lg:justify-between gap-14 sm:gap-6 mt-16 lg:mt-28'>
                  <div className='max-w-80 w-full' data-aos="fade-up" data-aos-delay="300">
                    <CardWithIcon icon={telegram} title={t("features.feature3")} className='group-hover:bg-telegram' />
                  </div>
                  <div className='max-lg:hidden w-full grow lg:-translate-y-20 relative'>
                    <img src={middlearrows} alt="solution" className='w-full absolute top-0 left-0' data-aos="fade-up" data-aos-delay="1000" />
                  </div>
                  <div className='max-w-80 w-full' data-aos="fade-up" data-aos-delay="400">
                    <CardWithIcon icon={linkedin} title={t("features.feature4")} className='group-hover:bg-linkedin' />
                  </div>
                </div>
              </div>
          </div>
          <div className='relative pt-12 md:pb-10'>
            <div className='container space-y-5 relative'>
              <div className='w-full max-w-5xl mx-auto'>
                <div className='section-heading text-center space-y-4' data-aos="fade-up" data-aos-delay="500">
                  <h2 className="text-white text-2xl md:text-3xl font-medium tracking-wide mb-4">
                    {t("real_world_freelance_risks.title")}
                  </h2>
                  <dib className="text-gray-900 text-base md:text-lg xl:text-xl font-normal tracking-wide space-y-1">
                    <p><span className='text-green'>{t("real_world_freelance_risks.description.part1")}</span> {t("real_world_freelance_risks.description.part2")} <span className='text-green'>{t("real_world_freelance_risks.description.part3")}</span></p>
                    <p>{t("real_world_freelance_risks.description2.part1")} <span className='text-green'>{t("real_world_freelance_risks.description2.part2")}</span> {t("real_world_freelance_risks.description2.part3")}</p>
                  </dib>
                </div>
              </div>

              <div className='relative w-px h-40 md:h-60 mx-auto bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900/0' data-aos="zoom-in" data-aos-delay="400">
                <div className='w-3 h-3 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
              </div>

              <div className='space-y-5' data-aos="fade-up" data-aos-delay="400">
                <div className='w-20 md:w-28 h-20 md:h-28 softPurple bg-dark-950 rounded-full mx-auto flex items-center justify-center'>
                  <img src={chatllatIcon} alt="solution" className='w-10 md:w-12' />
                </div>
                <h3 className='text-white text-2xl md:text-4xl font-medium tracking-wide text-center'>{t("chatllat_solution")}</h3>
              </div>
                      
              <div className='relative'>
                <div className='w-0.5 h-16 bg-gray-900/50 mx-auto max-lg:hidden' data-aos="fade-up" data-aos-delay="500"></div>
                <div className='max-w-[80%] w-full h-12 mx-auto relative border-2 border-gray-900/50 border-b-0 rounded-t-2xl max-lg:hidden' data-aos="fade-up" data-aos-delay="500">
                  {/* Connection Lines */}
                  <div className='absolute top-full -left-0.5 w-0.5 h-28 bg-gray-900/50'>
                    <div className='w-2 h-2 bg-dark-800 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2'></div>
                  </div>
                  <div className='absolute top-0 left-1/3 transform -translate-x-1/2 w-0.5 h-12 bg-gray-900/50'>
                    <div className='w-2 h-2 bg-dark-800 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2'></div>
                  </div>
                  <div className='absolute top-0 left-2/3 transform -translate-x-1/2 w-0.5 h-40 bg-gray-900/50'>
                    <div className='w-2 h-2 bg-dark-800 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2'></div>
                  </div>
                  <div className='absolute top-full -right-0.5 transform w-0.5 h-1 bg-gray-900/50'>
                    <div className='w-2 h-2 bg-dark-800 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2'></div>
                  </div>
                </div>
                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-4'>
                  {features.map((feature, index) => (
                    <div key={index} className='relative lg:odd:mt-28' data-aos="fade-up" data-aos-delay={`${index * 100 + 600}`}>
                      <div className='group bg-gradient-to-b from-dark-950/0 to-dark-950/40 rounded-3xl p-px'>
                        <div className='rounded-3xl p-6 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden'>
                          <div className='absolute top-0 left-0 w-full h-full' style={{background: 'radial-gradient(80% 80% at 50% -30%, rgba(153, 128, 193, 0.3) 0%, rgb(14, 18, 24) 100%)'}}></div>
                          {/* Icon */}
                          <div className='flex justify-center mb-4 relative'>
                            <img src={feature.icon} alt="solution" className='max-w-32 mx-auto' />
                          </div>
                          
                          {/* Title */}
                          <h3 className='text-white font-semibold text-lg md:text-xl text-center mb-2 relative'>
                            {feature.title}
                          </h3>
                          
                          {/* Description */}
                          <p className='text-gray-500 text-sm md:text-base text-center leading-relaxed relative'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default SolutionSection;