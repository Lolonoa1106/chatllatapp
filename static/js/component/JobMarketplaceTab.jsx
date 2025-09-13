import React from 'react'
import worldMap from './../assets/images/general/world-map.svg'
import postAjob from './../assets/images/icons/post-a-job.svg'
import findWork from './../assets/images/icons/find-work-and-bidding.svg'
import agreementCreation from './../assets/images/icons/agreement-creation.svg'
import SecurePayment from './../assets/images/icons/secure-payment.svg'
import comunication from './../assets/images/icons/comunication.svg'
import workDeliverCommunication from './../assets/images/icons/work-deliver-communication.svg'
import disputeResolution from './../assets/images/icons/dispute-resolution.svg'

function JobMarketplaceTab() {
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
            <p>The Freelancer's Job Portal is where Payers post new opportunities and Receivers find work by browsing and bidding on projects.  </p>
            </div>
        </div>
        <div className="py-10 lg:py-32 relative">
            <img src={worldMap} className='max-w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
            <div className="flex flex-wrap items-center justify-center gap-y-4 md:gap-y-6">
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="100">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={postAjob} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">Post a Job</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">1</div>
                    </div>
                </div>
                {/* <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div> */}
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="200">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-green bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={findWork} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">Finding Work and Bidding</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">2</div>
                    </div>
                </div>
                {/* <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div> */}
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="300">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={agreementCreation} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">Agreement Creation & Locking</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">3</div>
                    </div>
                </div>
                {/* <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div> */}
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-green bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={SecurePayment} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">Secure Payment with Escrow</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">4</div>
                    </div>
                </div>
                {/* <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div> */}
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="500">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={comunication} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">In-App Communication</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">5</div>
                    </div>
                </div>
                {/* <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div> */}
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="600">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-green bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={workDeliverCommunication} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">Work Delivery & Confirmation</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">6</div>
                    </div>
                </div>
                {/* <div className="max-w-28 w-full h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 relative -mx-8 max-md:hidden">
                    <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div> */}
                <div className="relative pt-10 w-full sm:w-1/2 md:w-1/4" data-aos="fade-up" data-aos-delay="700">
                    <div className="text-white text-center">
                        <div className="w-28 md:w-32 h-28 md:h-32 rounded-full border-2 border-dashed border-primary bg-dark-900 mx-auto flex items-center justify-center">
                            <img src={disputeResolution} className='w-10 md:w-14 invert' alt="" />
                        </div>
                        <div className="text-base text-white font-medium tracking-wider w-full h-12 px-2 mt-3">Dispute Resolution</div>
                        <div className="text-4xl md:text-6xl font-medium text-transparent bg-gradient-to-b from-[#7A8AA2] to-transparent bg-clip-text opacity-50 self-center w-full absolute -top-2 left-1/2 -translate-x-1/2">7</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space-y-8 md:space-y-11 richtext text-gray-500 tracking-wider">
            <div className="sm:space-x-6 space-y-3">
                <div className="flex items-start gap-3">
                    <svg
                        width={26}
                        height={27}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='shrink-0 w-4 md:w-6 h-4 md:h-6 mt-1'
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
                    <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">For Payers: Posting a Job</h2>
                </div>
                <ul>
                    <li><span className="text-white">Initiate Project: </span>  Once your wallet is connected, you can start by posting a new project.</li>
                    <li><span className="text-white">Provide Project Details: </span>  Fill in the necessary information for your project:  </li>
                    <ul>
                        <li><span className="text-white">1) Title: </span>  A clear and descriptive name for your project. </li>
                        <li><span className="text-white">2) Description: </span>  A detailed explanation of the scope, expectations, and deliverables. </li>
                        <li><span className="text-white">3) Deadline: </span>  The target completion date for the work. </li>
                        <li><span className="text-white">4) Budget: </span>  The approximate compensation you're offering in USDT. </li>
                        <li><span className="text-white">5) Attachments: </span>  Optionally upload files like specifications, designs, or reference materials. </li>
                    </ul>
                    <li><span className="text-white">Visibility: </span>  Your project will become publicly visible to all connected Receivers, who can then view the project details before deciding to submit a bid.</li>
                    <li><span className="text-white">Manage Bids: </span>  You will receive incoming bids on your project dashboard. Each bid will include the Receiver’s proposed price, timeline, and any optional comments.</li>
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
                        className='shrink-0 w-4 md:w-6 h-4 md:h-6 mt-1'
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
                    <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">For Receivers: Finding Work and Bidding</h2>
                </div>
                <ul>
                    <li><span className="text-white">Explore Projects: </span>  After connecting your wallet, navigate to the "Open Projects" section. You can browse projects in a scrollable list or tile view, and filter by budget, deadline, or category.</li>
                    <li><span className="text-white">Submit a Bid: </span>  On each project page, you'll find a "Place a Bid" button. Fill in your proposed amount, estimated timeline, and any optional comments or questions. </li>
                    <li><span className="text-white">Multiple Bids: </span>  You can bid on multiple projects simultaneously. Your bids are attached to your wallet address, not a personal profile.</li>
                    <li><span className="text-white">No Platform Fees for Bidding: </span>  Receivers can freely bid on unlimited projects.</li>
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
                        className='shrink-0 w-4 md:w-6 h-4 md:h-6 mt-1'
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
                    <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">Agreement Creation and Locking (for Job Portal Projects)</h2>
                </div>
                <ul>
                    <li><span className="text-white">Initiation: </span> This phase is triggered when a Payer accepts a bid from a Receiver. A structured form is presented to formalize the terms.</li>
                    <li><span className="text-white">Fields Included: </span> The form will automatically populate details from the accepted bid and allow for further refinement, including: </li>
                    <ul>
                        <li>Payer Wallet Address (automatically populated from session).</li>
                        <li>Receiver Wallet Address (from the accepted bid).</li>
                        <li>Project Title (pre-filled from the original task).</li>
                        <li>Description (clear explanation of expectations and deliverables).</li>
                        <li>Deadline (final due date for submission).</li>
                        <li>Budget (agreed USDT amount).</li>
                        <li>Attached Files (upload field for specifications, mockups, documentation, etc.).</li>
                    </ul>
                    <li><span className="text-white">Immutability: </span> Once locked, the agreement becomes immutable, stored with a unique identifier and timestamp. This acts as a smart contract-like commitment that is irreversible and auditable.</li>
                    <li><span className="text-white">Post-Locking: </span> No edits are allowed after locking. The in-platform chat is enabled, and payment becomes the next mandatory step.</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default JobMarketplaceTab