import React, { useEffect } from 'react'
import bannerBg from './../assets/images/backgrounds/page-title-bg.png'
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import contactBg from './../assets/images/backgrounds/contact-bg.png'
import SectionHeading from '../component/SectionHeading';
import { Link } from 'react-router-dom';
import ContactForm from '../component/ContactForm';
import floatingElements from './../assets/images/general/floating-element.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SeoMeta from '../component/SeoMeta';
import chatllat from './../assets/images/general/chatllat.png'

const Contact = () => {
  useEffect(() => {
      AOS.init({
          duration: 1000,
          once: true,
      });
      AOS.refresh();
  }, []);
  return(
    <>
        <SeoMeta
          title="Contact | Chatllat"
          description="Get in touch with the Chatllat team for support, inquiries, or partnership opportunities. We're here to help with secure Web3 hiring, escrow services, and platform assistance."
          image={chatllat}
        />
        <section className="pt-16 pb-8 md:py-32 relative overflow-hidden" data-aos="zoom-up" data-aos-delay="200">
            <div className="w-full h-full absolute top-0 left-0">
              <img src={bannerBg} className='w-full h-full object-cover' alt="Banner Background" />
            </div>
            <div className="container relative">
                <h1 className='text-4xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-white to-primary bg-clip-text self-center inline-block'>Contact Us</h1>
                {/* <div className="text-base text-white tracking-wider mt-3">Welcome to the Chatllat Blog</div> */}
            </div>
        </section>

        <section className="relative py-16 md:py-24 overflow-hidden">
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
              <SectionHeading
                title={'Let’s Get In Touch'}
                align='start'
              />
              <div className="flex max-sm:flex-col gap-10 xl:gap-28">
                <div className="space-y-4 md:max-w-52 w-full" data-aos="fade-in" data-aos-delay="300">
                  <div className="w-12 h-12 border border-primary text-primary rounded-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 512 512"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="currentColor"
                      className='w-6 h-6'
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <title>support</title>
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <g
                            id="support"
                            fill="currentColor"
                            transform="translate(42.666667, 42.666667)"
                          >
                            <path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>

                  </div>
                  <div className="flex flex-col text-gray-600 gap-1 text-base font-medium tracking-wider">
                    <h4 className="text-white">Support</h4>
                    <Link to="mailto:support@chatllat.com" className='hover:text-primary'>support@chatllat.com</Link>
                    {/* <Link to="tel:+1234567890" className='hover:text-primary'>+123 45 678 009</Link> */}
                  </div>
                </div>
                <div className="max-sm:w-full sm:w-px max-sm:h-px sm:h-auto max-sm:bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-900 to-transparent shrink-0" data-aos="fade-in" data-aos-delay="400"></div>
                <div className="space-y-4 md:max-w-52 w-full" data-aos="fade-in" data-aos-delay="500">
                  <Link to={'/partner'} className="w-12 h-12 border border-primary text-primary rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'>
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <circle cx={9} cy={6} r={4} stroke="currentColor" strokeWidth="1.5" />
                        <path
                          opacity="0.5"
                          d="M12.5 4.3411C13.0375 3.53275 13.9565 3 15 3C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9C13.9565 9 13.0375 8.46725 12.5 7.6589"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <ellipse cx={9} cy={17} rx={7} ry={4} stroke="currentColor" strokeWidth="1.5" />
                        <path
                          opacity="0.5"
                          d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <div className="w-full flex items-end justify-between gap-6">
                    <div className="flex flex-col text-gray-600 gap-1 text-base font-medium tracking-wider">
                      <Link to={'/partner'} className="text-white">Partner with Chatllat</Link>
                      <Link to="mailto:partner@chatllat.com" className='hover:text-primary'>partner@chatllat.com</Link>
                    </div>
                    <Link to={'/partner'} className="w-10 h-10 bg-primary hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center shrink-0 transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-900/30 my-8 md:my-16" data-aos="fade-in" data-aos-delay="200"></div>
              <div className="bg-gradient-to-b from-dark-950 to-dark-950/10 p-px rounded-3xl overflow-hidden" data-aos="fade-in" data-aos-delay="400">
                <div className="w-full bg-dark-950 rounded-3xl p-4 md:p-9 backdrop-blur">
                  <h3 className="text-xl md:text-3xl text-white tracking-wider font-medium mb-4 md:mb-8">We’d love to hear from you!</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Contact;
