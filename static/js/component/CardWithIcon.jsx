import React from 'react'

function CardWithIcon({icon, title, className=''}) {
  return (
    <>
        <div className='w-full h-full rounded-2xl p-px bg-gradient-to-b from-primary to-primary/0 relative group'>
            <div className={`w-20 md:w-24 h-20 md:h-24 bg-primary rounded-full flex items-center justify-center border-[6px] border-dark-900 mx-auto absolute -translate-y-1/2 -translate-x-1/2 left-1/2 ${className} transition-all duration-500`}>
                <img src={icon} alt="Discord" className='w-8 md:w-10' />
            </div>
            <div className='w-full h-full rounded-2xl px-4 md:px-8 pt-16 pb-8 text-base font-normal tracking-wider text-white leading-7 text-center' style={{
                background: 'linear-gradient(310.69deg, rgba(45, 51, 60, 0.8) -8.67%, rgba(153, 128, 193, 0.8) 233.95%)',
                boxShadow: '0px 6px 30px rgba(153, 128, 193, 0.14)',
                }}
            >
                <p>{title}</p>
            </div>
        </div>
    </>
  )
}

export default CardWithIcon