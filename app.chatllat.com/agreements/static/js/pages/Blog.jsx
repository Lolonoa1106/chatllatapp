import React, { useEffect } from 'react'
import bannerBg from './../assets/images/backgrounds/page-title-bg.png'
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import blogData from "../data/blogData";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SeoMeta from '../component/SeoMeta';
import chatllat from './../assets/images/general/chatllat.png'

function Blog() {
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
          title="Blog | Chatllat"
          description="Explore insights on secure Web3 freelancing, blockchain hiring trends, and digital work solutions. Stay updated with expert-written Chatllat blogs."
          image={chatllat}
        />
        <section className="pt-16 pb-8 md:py-32 relative overflow-hidden" data-aos="zoom-up" data-aos-delay="200">
            <div className="w-full h-full absolute top-0 left-0">
            <img src={bannerBg} className='w-full h-full object-cover' alt="Banner Background" />
            </div>
            <div className="container relative">
                <h1 className='text-4xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-white to-primary bg-clip-text self-center inline-block'>Our Blog</h1>
                <div className="text-base text-white tracking-wider mt-3">Welcome to the Chatllat Blog</div>
            </div>
        </section>

        <section className='py-10 pb-16 lg:py-24 relative'>
          <div className="w-full h-full absolute top-0 left-0">
            <img src={bgElement} className='w-full h-auto object-cover' alt="Background Element" />
          </div>
          <div className="container relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...blogData].reverse().map((blog) => (
                <div key={blog.id} className="bg-dark-950 rounded-2xl border border-gray-900 p-2 md:p-4 shadow-lg group flex flex-col" data-aos="fade-up" data-aos-delay={blog.id * 200}>
                    <div className="relative">
                        <Link to={`/blog/${blog.id}`} rel="noopener noreferrer" className='block w-full h-48 md:h-56 rounded-xl overflow-hidden'>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="object-cover w-full h-full group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
                            />
                        </Link>
                        <span className="absolute top-2 right-0 bg-purple-400 text-white text-sm px-2.5 py-1.5 rounded-l-2xl font-medium">
                            {blog.dateLabel}
                        </span>
                    </div>

                    <div className="mt-2 md:mt-4 space-y-3 tracking-wider flex flex-col grow">
                        {blog.category && <p className="text-xs font-medium text-purple-400">{blog.category}</p> }
                        <Link to={`/blog/${blog.id}`} rel="noopener noreferrer" className='block flex-1'>
                            <h3 className="text-white font-medium text-lg md:text-xl line-clamp-2">
                                {blog.title}
                            </h3>
                        </Link>
                        {/* <p className="text-gray-400 text-sm">{blog.timeAgo}</p> */}

                        {/* <Link
                            to={`/blog/${blog.id}`}
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-white border border-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-700 transition"
                        >
                            Read More →
                        </Link> */}
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-base text-[#8A919A] tracking-wider font-medium">{blog.readTime}</span>
                            <Link to={`/blog/${blog.id}`} className='inline-flex px-4 py-2 bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full text-sm text-white font-medium gap-2 tracking-wide transition-all duration-300'>
                                <span>Read More</span>
                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 group-hover:translate-x-1 transition-all duration-500'>
                                    <mask id="mask0_787_1529" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={-1} width={26} height={27}>
                                    <rect width={26} height={26} transform="matrix(-1 0 0 1 26 -0.00390625)" fill="currentColor" />
                                    </mask>
                                    <g mask="url(#mask0_787_1529)">
                                    <path d="M15.2186 19.1219L21.3438 12.997L15.2186 6.87207L14.077 8.04695L18.2145 12.1845L4.65608 12.1845V13.8095L18.2145 13.8095L14.077 17.947L15.2186 19.1219Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Blog