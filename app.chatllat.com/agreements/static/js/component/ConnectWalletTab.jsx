import React from 'react'
import walletIcon from './../assets/images/icons/wallet-icon.svg'
import identityIcon from './../assets/images/icons/identity-icon.svg'
import sessionIcon from './../assets/images/icons/session-icon.svg'
import securityIcon from './../assets/images/icons/security-icon.svg'

function ConnectWalletTab() {
  const ConnectWalletCards = [
    {
      icon: walletIcon,
      title: 'Connect Wallet',
      description: 'Connect your crypto wallet (e.g., MetaMask) securely using industry-standard protocols.'
    },
    {
      icon: identityIcon,
      title: 'Identity Mapping',
      description: 'Your wallet address is your ID on Chatllat — linking activity from posts to payments.'
    },
    {
      icon: sessionIcon,
      title: 'Session Management',
      description: 'Session stays active while tab is open. Wallet auto-disconnects when closed.'
    },
    {
      icon: securityIcon,
      title: 'Security Note',
      description: 'Chatllat never stores keys. Signatures are for login; transactions need wallet approval.'
    }
  ]
  return(
    <>
      <div className="flex items-start gap-4">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='shrink-0 w-6 h-6 mt-1'
        >
          <mask
            id="mask0_933_10383"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={24}
            height={24}
          >
            <rect width={24} height={24} fill="#8A919A" />
          </mask>
          <g mask="url(#mask0_933_10383)">
            <path
              d="M11.5963 17.9135L14.5115 12.75H2.25V11.25H14.5115L11.5963 6.08655L20.8943 12L11.5963 17.9135Z"
              fill="#8A919A"
            />
          </g>
        </svg>
        <div className='text-gray-400 text-base md:text-lg font-normal tracking-wide !leading-relaxed space-y-4'>
          <p>Chatllat operates entirely on a wallet-based authentication model, meaning there are no traditional sign-ups, emails, or passwords required. Your crypto wallet address serves as your unique identifier.  </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12">
        {ConnectWalletCards.map((card)=> (
          <div className="bg-gradient-to-b from-gray-900/20 to-gray-900/60 p-px rounded-3xl group hover:-translate-y-2 transition-all duration-500 overflow-hidden" key={card}>
            <div className="bg-dark-950 rounded-3xl px-4 md:px-5 py-4 md:py-8 text-center h-full">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center border border-dashed border-primary">
                <img src={card.icon} className='w-7 md:w-9 h-7 md:h-9 group-hover:rotate-y-180 transition-all duration-500' alt={card.title} />
              </div>
              <h4 className="text-lg text-white mb-4 tracking-wider font-medium">{card.title}</h4>
              <div className='text-gray-400 text-base font-normal tracking-wide !leading-relaxed'>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ConnectWalletTab