import React from 'react'

function SectionHeading({subtitle, title, description, align = 'center'}) {

  return (
    <>
        <div className={`section-heading text-${align}`} data-aos="fade-up" data-aos-delay="100">
            {subtitle && (
            <div className={`flex flex-col items-${align === 'start' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end'} space-y-2 mb-5`}>
                <span className='w-16 h-px bg-white'></span>
                <h4 className="text-white text-sm md:text-base font-normal tracking-[1.5px] [&>span]:text-primary leading-none uppercase" dangerouslySetInnerHTML={{__html: subtitle}} />
                <span className='w-16 h-px bg-white'></span>
            </div>
            )}
            {title && (
            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-wide md:!leading-snug mb-4">
                {title}
            </h2>
            )}
            {description && (
                <p className="text-gray-900 text-base md:text-lg xl:text-xl font-normal tracking-wide">
                    {description}
                </p>
            )}
        </div>
    </>
  )
}

export default SectionHeading