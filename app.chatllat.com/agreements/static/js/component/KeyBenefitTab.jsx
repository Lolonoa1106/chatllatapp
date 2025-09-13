import React from 'react'
import worldMap from './../assets/images/general/world-map.svg'
import payer from './../assets/images/general/payer.png'
import receiver from './../assets/images/general/receiver.png'
import chatllatIcon from './../assets/images/logo/chatllat-icon.svg'

function KeyBenefitTab() {
  return (
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
            <p>Chatllat offers a secure and transparent environment for both payers and receivers in the Web3 freelance ecosystem. By leveraging crypto wallets for identity and escrow-backed agreements for transactions, users can engage without traditional sign-ups or profile setups.</p>
            </div>
        </div>
        <div className="pt-10 relative">
            <img src={worldMap} className='max-w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
            <div className="grid grid-cols-1 md:grid-cols-2 max-md:divide-y md:divide-x divide-gray-900">
                <div className="relative max-md:pb-10">
                    <div className="w-14 md:w-16 h-14 md:h-16 border border-gray-900 bg-dark-900 rounded-full flex items-center justify-center absolute max-md:bottom-0 md:top-[15%] max-md:right-1/2 md:right-0 max-md:translate-y-1/2 md:-translate-y-1/2 translate-x-1/2">
                        <img src={chatllatIcon} className='w-6 md:w-8' alt="" />
                    </div>
                    <div className="py-10 flex flex-col items-center justify-center gap-4">
                        <img src={payer} className='max-w-auto max-h-32' alt="" />
                        <h3 className='text-lg text-white text-center tracking-wider font-medium'>For Payer</h3>
                    </div>
                    <div className="flex flex-col items-center w-full md:text-center gap-3">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent md:to-gray-900"></div>
                         <div className="flex items-start gap-4">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='shrink-0 w-6 h-6 mt-0.5'
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
                            <div className='text-white text-base font-medium tracking-wide !leading-relaxed space-y-4 [&>span]:text-primary'>This party is usually a <span>client, buyer,</span> or <span>project owner.</span></div>
                         </div>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent md:to-gray-900"></div>
                    </div>
                    <div className="p-4 md:p-10 pl-0 text-gray-500 tracking-wider">
                        <ul className='list-checkmark space-y-4 md:space-y-8'>
                            <li><span className="text-white font-medium">No Registration:</span> Instantly access services with just a wallet. No emails, passwords, or profile setup.</li>
                            <li><span className="text-white font-medium">Full Payment Control:</span> Payment is not released until work is approved, reducing risk of scams.</li>
                            <li><span className="text-white font-medium">Escrow Safety:</span> Funds are held securely until confirmation or dispute resolution.</li>
                            <li><span className="text-white font-medium">Structured Agreements:</span> Clarity of scope, deadlines, and deliverables from the start.</li>
                            <li><span className="text-white font-medium">Dispute Protection:</span> Built-in resolution flow with admin oversight ensures fair handling of conflicts.</li>
                            <li><span className="text-white font-medium">Direct Agreement Feature:</span> Enables safe collaboration even when the Receiver was found outside Chatllat.</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="py-10 flex flex-col items-center justify-center gap-4">
                        <img src={receiver} className='max-w-auto max-h-32' alt="" />
                        <h3 className='text-lg text-white text-center tracking-wider font-medium'>For Receivers</h3>
                    </div>
                    <div className="flex flex-col items-center w-full md:text-center gap-3">
                        <div className="w-full h-px bg-gradient-to-r from-gray-900 via-gray-900 to-transparent md:to-transparent"></div>
                         <div className="flex items-start gap-4">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='shrink-0 w-6 h-6 mt-0.5'
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
                            <div className='text-white text-base font-medium tracking-wide !leading-relaxed space-y-4 [&>span]:text-primary'>This party is usually a <span>freelancer, seller,</span> or <span>service provider.</span></div>
                         </div>
                        <div className="w-full h-px bg-gradient-to-r from-gray-900 via-gray-900 to-transparent md:to-transparent"></div>
                    </div>
                    <div className="p-4 md:p-10 pl-0 text-gray-500 tracking-wider">
                        <ul className='list-checkmark space-y-4 md:space-y-8'>
                            <li><span className="text-white font-medium">Guaranteed Payment:</span> Work begins only after escrow is funded, ensuring serious Payers.</li>
                            <li><span className="text-white font-medium">No Platform Fees on Bids:</span> Submit unlimited bids without financial penalties.</li>
                            <li><span className="text-white font-medium">Trusted Workflow:</span> Agreement locking and confirmation system prevents scope creep or sudden changes.</li>
                            <li><span className="text-white font-medium">Dispute Transparency:</span> If conflicts arise, Receivers can defend their case with logged chats and timestamps.</li>
                            <li><span className="text-white font-medium">Direct Agreement Entry:</span> Monetize off-platform leads (LinkedIn or Discord) by using Chatllat as a trusted payment middleman.</li>
                            <li><span className="text-white font-medium">On-Chain Identity:</span> Wallet-based reputation system avoids fake profiles and central manipulation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default KeyBenefitTab