import React from 'react'
import worldMap from './../assets/images/general/world-map.svg'
import createAgreement from './../assets/images/icons/create-agreement-icon.svg'
import acceptTerms from './../assets/images/icons/accept-terms-icon.svg'
import chatllatIcon from './../assets/images/logo/chatllat-icon.svg'
import workDeliver from './../assets/images/icons/work-deliver-icon.svg'
import fundResease from './../assets/images/icons/fund-resease-icon.png'

function DirectAgreementTab() {
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
          <p>The Direct Agreement feature is designed for users who have already negotiated a deal outside Chatllat (e.g., via Telegram, Discord, LinkedIn, or in-person) and wish to use Chatllat for secure payment, agreement formalization, and dispute resolution. This involves a  Payer (the user initiating and funding the agreement, typically a client, buyer, or project owner) and a Receiver (the user accepting and fulfilling the agreement, typically a freelancer, seller, or service provider).</p>
        </div>
      </div>
      <div className="py-10 lg:py-32 relative">
        <img src={worldMap} className='max-w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative py-10 max-w-40 w-full">
                <div className="text-white text-center">
                    <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                        <img src={createAgreement} className='w-10 md:w-14' alt="" />
                    </div>
                    <div className="text-base text-white font-medium tracking-wider w-full absolute bottom-0 left-1/2 -translate-x-1/2">Create Agreement</div>
                </div>
            </div>
            <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative py-10 max-w-40 w-full">
                <div className="text-white text-center">
                    <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-green bg-dark-900 mx-auto flex items-center justify-center">
                        <img src={acceptTerms} className='w-10 md:w-14' alt="" />
                    </div>
                    <div className="text-base text-white font-medium tracking-wider w-full absolute bottom-0 lg:top-0 left-1/2 -translate-x-1/2">Accept Terms</div>
                </div>
            </div>
            <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative py-10 max-w-40 w-full">
                <div className="text-white text-center">
                    <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                        <img src={chatllatIcon} className='w-10 md:w-14' alt="" />
                    </div>
                    <div className="text-base text-white font-medium tracking-wider w-full absolute bottom-0 left-1/2 -translate-x-1/2">Escrow Funded</div>
                </div>
            </div>
            <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative py-10 max-w-40 w-full">
                <div className="text-white text-center">
                    <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-green bg-dark-900 mx-auto flex items-center justify-center">
                        <img src={workDeliver} className='w-10 md:w-14' alt="" />
                    </div>
                    <div className="text-base text-white font-medium tracking-wider w-full absolute bottom-0 lg:top-0 left-1/2 -translate-x-1/2">Work Deliver</div>
                </div>
            </div>
            <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative py-10 max-w-40 w-full">
                <div className="text-white text-center">
                    <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                        <img src={fundResease} className='w-10 md:w-14' alt="" />
                    </div>
                    <div className="text-base text-white font-medium tracking-wider w-full absolute bottom-0 left-1/2 -translate-x-1/2">Fund Release</div>
                </div>
            </div>
        </div>
      </div>
      <div className="space-y-8 md:space-y-11 richtext text-gray-500 tracking-wider">
        <div className="sm:space-x-6 space-y-3">
            <div className="flex items-start gap-3 mt-1">
                <svg
                    width={26}
                    height={27}
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='w-4 md:w-6 h-4 md:h-6 mt-1'
                >
                    <mask
                        id="mask0_946_9080"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={26}
                        height={27}
                    >
                        <rect y="0.5" width={26} height={26} fill="white" />
                    </mask>
                    <g mask="url(#mask0_946_9080)">
                        <path
                        d="M12.5626 19.9063L15.7208 14.3125H2.4375V12.6875H15.7208L12.5626 7.09375L22.6354 13.5L12.5626 19.9063Z"
                        fill="white"
                        />
                    </g>
                </svg>
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">Initiating a Direct Agreement</h2>
            </div>
            <ul>
                <li><span className="text-white">From an External Platform:</span>  If you've agreed on a deal on another platform and want to ensure payment security, you can directly come to Chatllat to use the Direct Agreement feature. One party (either the Payer or the Receiver) will initiate the process on Chatllat.</li>
                <li><span className="text-white">Filling and Sending the Agreement Form:</span>  The initiating party will fill out the agreement form on Chatllat with all the necessary details. Once completed, a unique shareable link to this draft agreement is generated. This link can then be sent to the second party (the other party to the agreement) for their review and approval, allowing the flow to continue securely on Chatllat.</li>
            </ul>
        </div>
        <div className="sm:space-x-6 space-y-3">
            <div className="flex items-start gap-3">
                <svg
                    width={26}
                    height={27}
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='w-4 md:w-6 h-4 md:h-6 mt-1'
                >
                    <mask
                        id="mask0_946_9080"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={26}
                        height={27}
                    >
                        <rect y="0.5" width={26} height={26} fill="white" />
                    </mask>
                    <g mask="url(#mask0_946_9080)">
                        <path
                        d="M12.5626 19.9063L15.7208 14.3125H2.4375V12.6875H15.7208L12.5626 7.09375L22.6354 13.5L12.5626 19.9063Z"
                        fill="white"
                        />
                    </g>
                </svg>
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">Agreement Creation (for Direct Agreements)</h2>
            </div>
            <div className='space-y-3'>
                <ul>
                    <li><span className="text-white">Agreement Details:</span> A structured form will guide you to input all necessary fields, including:</li>
                    <ul>
                        <li>Payer Wallet Address (auto-populated or manually entered).</li>
                        <li>Receiver Wallet Address (manually entered).</li>
                        <li>Project Title (defined by the initiator).</li>
                        <li>Description (clear explanation of expectations and deliverables).</li>
                        <li>Deadline (final due date for submission).</li>
                        <li>Budget (agreed USDT amount).</li>
                        <li>Attached Files (optional uploads for specifications, mockups, documentation, etc.)</li>
                    </ul>
                </ul>
                <ul>
                    <li><span className="text-white">Review and Response by Second Party:</span> Once the shareable agreement link is sent, the second party can review the proposed terms. At this stage, the agreement is mutable, allowing for adjustments. The second party can choose to:</li>
                    <ul>
                        <li><span className="text-white">1) Accept:</span> If the terms are satisfactory, the second party (the Receiver) can accept the agreement directly. Upon acceptance, the agreement becomes immutable, stored with a unique identifier and timestamp. This acts as a smart contract-like commitment that is irreversible and auditable. No further edits are allowed. This acceptance triggers the next mandatory step: payment. The in-platform chat is also enabled at this point. </li>
                        <li><span className="text-white">2)	Negotiate:</span> If changes are needed, the second party can initiate a negotiation. This sends a notification back to the agreement creator. The creator (the Payer) then has the right to edit the agreement details (e.g., budget, deadline, description) and resend the updated link for further review. This negotiation process can continue until both parties are satisfied and the agreement is accepted.</li>
                        <li><span className="text-white">3) Reject:</span> If the terms are unacceptable, the second party can reject the agreement, ending the process.</li>
                    </ul>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default DirectAgreementTab