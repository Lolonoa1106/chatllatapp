import React from 'react'
import bannerBg from './../assets/images/backgrounds/page-title-bg.png'
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import SeoMeta from '../component/SeoMeta'
import chatllat from './../assets/images/general/chatllat.png'
import { Link } from 'react-router-dom'

function TermsCondition() {
  return (
    <>
        <SeoMeta
          title="Terms and Conditions | Chatllat"
          description="Review Chatllat’s official terms of service, including user responsibilities, agreement policies, and Web3 escrow contract conditions."
          image={chatllat}
        />
        <section className="pt-16 pb-8 md:py-32 relative overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0">
            <img src={bannerBg} className='w-full h-full object-cover' alt="Banner Background" />
          </div>
          <div className="container relative">
            <h1 className='text-4xl md:text-5xl font-semibold text-transparent bg-gradient-to-r from-white to-primary bg-clip-text self-center inline-block'>Terms & Conditions</h1>
            <div className="text-base text-white tracking-wider mt-3">Published and effective on: April 30, 2024</div>
          </div>
        </section>

        <section className="contant-section relative py-16 md:py-24 overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0">
            <img src={bgElement} className='w-full h-auto object-cover' alt="Background Element" />
          </div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto richtext text-base text-gray-500 text-left leading-relaxed tracking-wider space-y-6 md:space-y-10">

              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative pb-2.5 after:content-[''] after:block after:w-24 after:h-px after:bg-white after:absolute after:left-0 after:bottom-0">Welcome to Chatllat</h2>
                <p>Welcome to Chatllat, a decentralized Web3 platform designed to facilitate secure, transparent, and wallet-based interactions for freelance work, direct agreements, and token swaps. These Terms & Conditions ("Terms") govern your access to and use of the Chatllat platform and its services.</p>
                <p>By accessing or using Chatllat, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our platform.</p>
              </div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">1. About Chatllat</h2>
                <ul>
                  <li>Chatllat is a pioneering Web3-native freelance platform that enables individuals to hire or be hired without traditional personal identifiers like email or banking details, operating solely through cryptocurrency wallets.1 Our mission is to formalize informal crypto freelance deals, which are often exposed to risks such as scams, lack of formal contracts, and absence of recourse for fraud.1 We achieve this by providing a wallet-first, escrow-backed, and no-profile-needed infrastructure, where every step is designed to be on-chain, irreversible, and verifiable.</li>
                  <li>Chatllat offers a multi-functional Web3 platform that includes: </li>
                  <li> <span className="text-white">a) Direct Agreement System:</span> Facilitating secure, formal agreements between two blockchain-identified users (Payer and Receiver) for off-platform deals.</li>
                  <li> <span className="text-white"> b) Freelance Job Marketplace:</span> A platform where users can post jobs, place bids, and engage in wallet-secured contracts.</li>
                  <li> <span className="text-white"> c) Token Swapping Module: </span>A smart contract interface enabling real-time on-chain swaps between USDT and CLAT tokens directly between wallets.</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">2. User Eligibility and Wallet-Based Identity</h2>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">2.1 Eligibility:</h3>
                  <ul>
                    <li>Chatllat is not intended for individuals under 18 years of age. By using the platform, you affirm that you are at least 18 years old.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">2.2 Wallet-Based Identity:</h3>
                  <ul>
                    <li>Chatllat replaces traditional login systems with a wallet-based authentication model. Your crypto wallet address (e.g. MetaMask) serves as your sole unique identifier across all Chatllat services.</li>
                    <ul>
                      <li> <span className="text-white"> a) No Traditional Accounts: </span>No email, phone, or password is required for general platform access.</li>
                      <li> <span className="text-white"> b) Wallet Connection: </span>You must connect your crypto wallet to access and interact with the platform. Wallet signatures are used for authentication, not for transactions.</li>
                      <li> <span className="text-white"> c) Security: </span>Chatllat never stores your private keys or seed phrases.1 Your session remains active as long as your browser tab is open, and your wallet is automatically disconnected upon closing the browser or tab for security</li>
                      <li> <span className="text-white"> d) KYC/AML Compliance: </span>While Chatllat aims for a pseudonymous experience, certain regulatory requirements, particularly for financial transactions and fraud prevention, necessitate identity verification. For specific activities, Chatllat may require users, particularly freelancers, to undergo Know Your Customer (KYC) verification through third-party providers.1 This is to comply with anti-money laundering (AML) regulations, which mandate that entities involved in virtual digital assets verify user identities and maintain records for a period of five years.</li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">3. Platform Services</h2>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.1 Project Posting and Bidding:</h3>
                  <ul>
                    <li>Clients can post new projects by providing details such as title, description, deadline, budget (in USDT), and optional attachments.1 Developers can browse open projects and submit bids, including proposed amounts, estimated timelines, and optional comments.1 Bids are visible only to the client.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.2 Direct Agreement System:</h3>
                  <ul>
                    <li>This feature allows users who have negotiated outside Chatllat (e.g., via Telegram, Discord, LinkedIn) to formalize their deals on the platform. Both parties manually input agreement details and use Chatllat for agreement generation, payment holding, dispute resolution, and work verification.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.3 Agreement Creation and Locking:</h3>
                  <ul>
                    <li>Once a client accepts a bid or a direct agreement is initiated, a structured agreement is generated. This agreement includes wallet addresses of both parties, project title, description, deadline, budget, and attached files.</li>
                    <ul>
                      <li> <span className="text-white">a) Mutual Consent: </span> Both the client and developer must explicitly agree to "lock" the agreement.</li>
                      <li> <span className="text-white">b) Immutability: </span> Once locked, the agreement becomes immutable, stored with a unique identifier and timestamp, acting as a smart contract-like commitment that is irreversible and auditable.</li>
                      <li> <span className="text-white">c) Post-Locking: </span> After locking, no edits are allowed, the in-platform chat is enabled, and payment becomes the next mandatory step.</li>
                    </ul>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.4 Payment and Escrow System:</h3>
                  <ul>
                    <li>Chatllat employs a secure USDT escrow system to protect both clients and developers.</li>
                    <ul>
                      <li> <span className="text-white">a) Escrow Funding: </span> After an agreement is locked, the client initiates payment, transferring the agreed USDT amount to Chatllat’s secure, multi-signature protected escrow wallet.1 Funds do not go directly to the developer at this stage.</li>
                      <li> <span className="text-white">b) Fund Release: </span> Funds remain securely held in escrow until the project is completed and approved by the client, or a resolution is reached through the dispute resolution system.</li>
                      <li> <span className="text-white">c) Transaction Verification: </span> All payments are confirmed on-chain, and Chatllat updates its backend with payment timestamps, wallet addresses, amounts, and transaction hashes for auditability.</li>
                    </ul>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.5 Chat and Communication:</h3>
                  <ul>
                    <li>A dedicated in-platform chat system is activated only after an agreement is locked and escrow is funded.</li>
                    <ul>
                      <li> <span className="text-white">a) Private Messaging: </span> Only the client and developer associated with a specific agreement can chat. Messages are bound to the agreement ID and wallet addresses.</li>
                      <li> <span className="text-white">b) Message History: </span> All communication is securely stored and tied to the agreement, serving as evidence in case of disputes.</li>
                      <li> <span className="text-white">c) Privacy: </span> No external parties can access chat logs. Support/Admin can only view messages if a dispute is raised or a support ticket is filed.</li>
                    </ul>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.6 Work Delivery and Confirmation:</h3>
                  <ul>
                    <li>Developers submit completed work, including final files and optional notes, through the agreement interface.1 Clients review the delivered work and, if satisfied, confirm completion, which triggers the withdrawal function for the developer.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">3.7 Token Swapping Module:</h3>
                  <ul>
                    <li>Chatllat includes a built-in token swap interface to facilitate exchanges between USDT and CLAT tokens.1 This module aims to increase liquidity and reduce onboarding friction for users.</li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">4. Payments and Fees</h2>
                <ul>
                  <li>Chatllat operates with a transparent fee structure to ensure sustainable growth and value capture within the Web3 freelance ecosystem.</li>
                  <li> <span className="text-white">a) Escrow Commission Fee: </span> A commission (typically 2-5%) is charged on each agreement facilitated through Chatllat. This fee is automatically deducted before funds are released from escrow.</li>
                  <li> <span className="text-white">b) Job Posting Fee: </span> After a free threshold, a fee may be introduced for posting jobs to deter spam.</li>
                  <li> <span className="text-white">c) Bidding Slot Fees: </span> A small fee in CLAT may be required to unlock additional bidding slots beyond a free quota, aimed at reducing spam and ensuring quality bids.</li>
                  <li> <span className="text-white">d) Swap Fees: </span> A fee (0.5% to 1%) is collected on each USDT CLAT token swap performed through the platform's built-in interface.</li>
                  <li> <span className="text-white">e) CLAT Token Utility: </span> The native CLAT token powers various platform transactions, including agreement creation, bidding, staking, and future premium services. Users may have the option to pay fees in CLAT for discounts or rebates.</li>
                </ul>
              </div>
              
              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">5. Intellectual Property Rights</h2>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">5.1 Ownership of Work</h3>
                  <ul>
                    <li>Unless otherwise explicitly agreed upon within the specific agreement terms, the intellectual property rights (including copyright) in the work created by a freelancer for a client on Chatllat will be determined by the terms of the individual agreement. It is crucial for both parties to clearly define IP ownership (e.g., "work-for-hire" where the client owns, or "licensing" where the freelancer retains ownership and grants a license to the client) within the agreement to prevent future disputes.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">5.2 Portfolio Rights</h3>
                  <ul>
                    <li>Freelancers may wish to retain the right to showcase completed projects or client logos in their freelance portfolios. This should be explicitly agreed upon within the individual agreement, especially if the work involves confidential information or ghostwriting.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">5.3 Confidentiality</h3>
                  <ul>
                    <li>Both clients and freelancers agree not to disclose each other's confidential information and documentation to third parties while an agreement is in place and, where specified, beyond the contract term. Any information deemed confidential by either party and shared within the platform's agreement context (e.g., chat messages, attached files) is protected under this clause.</li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">6. User Responsibilities and Conduct</h2>
                <ul>
                  <li>You agree to use Chatllat in a lawful and responsible manner. You shall not:</li>
                  <li>Engage in any fraudulent, deceptive, or illegal activities.</li>
                  <li>Upload or transmit any malicious code, viruses, or harmful content.</li>
                  <li>Attempt to gain unauthorized access to any part of the platform or other users' data.</li>
                  <li>Interfere with the proper functioning of the platform.</li>
                  <li>Use the platform for any purpose other than its intended use for freelance work and related transactions.</li>
                  <li>Misrepresent your identity or qualifications.</li>
                </ul>
              </div>
              
              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">7. Dispute Resolution</h2>
                <ul>
                  <li>Chatllat provides a transparent and structured dispute resolution system to handle disagreements that may arise during freelance projects.</li>
                  <li> <span className="text-white">a) Initiation: </span> A client can raise a dispute if work was not delivered as agreed, or a developer can raise concerns via support if a client becomes unresponsive after work completion.</li>
                  <li> <span className="text-white">b) Negotiation: </span> A dispute thread opens for both parties to negotiate a resolution, including revisions, re-submissions, or partial payment splits.</li>
                  <li> <span className="text-white">c) Admin Intervention:  </span> If parties cannot reach an agreement, a support ticket is created, and Chatllat's Admin Panel reviews the case, including agreement details, chat history, submitted work, and payment proof. The Admin issues a final ruling, which may include a full refund, full release to the developer, or a partial payout.</li>
                  <li> <span className="text-white">d) Audit Trail: </span> Every dispute is recorded with timestamps, negotiation messages, and admin decision details for transparency and platform oversight.</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">8. Disclaimers and Limitation of Liability</h2>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">8.1 No Guarantees</h3>
                  <ul>
                    <li>Chatllat operates on a decentralized network, and while it strives for security and reliability, it cannot guarantee uninterrupted access or error-free operation. The platform does not store private keys or manage user wallets; users are solely responsible for the security of their own wallets and private keys.</li>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">8.2 Risks of Web3 and Decentralized Applications (dApps)</h3>
                  <ul>
                    <li>You acknowledge and accept the inherent risks associated with Web3 technologies and decentralized applications (dApps), including but not limited to:</li>
                    <ul>
                      <li> <span className="text-white">a)Technical Complexity: </span>   Interacting with dApps often requires technical knowledge, including understanding cryptocurrency wallets and managing private keys.</li>
                      <li> <span className="text-white">b) Scalability Limitations: </span> Blockchain networks can experience scalability issues, leading to slower transaction times and higher fees during high transaction volumes.</li>
                      <li> <span className="text-white">c) Regulatory Uncertainty: </span> The decentralized and global nature of dApps means they operate without a single, comprehensive legal framework, which can create regulatory uncertainties regarding data protection, financial regulation, and intellectual property.</li>
                      <li> <span className="text-white">d) Security Risks: </span> While blockchain offers enhanced security, dApps can still be vulnerable to phishing attacks, malware, or exploits if programming is not robust. Users should exercise caution and conduct due diligence.</li>
                      <li> <span className="text-white">e) Immutability: </span> Data recorded on a blockchain is immutable, meaning it is extremely difficult to alter or delete once written.11 While this enhances transparency and auditability, it conflicts with the "right to erasure" in some data protection laws. Chatllat addresses this by storing sensitive personal data off-chain where possible and using cryptographic methods for on-chain verification.</li>
                      <li> <span className="text-white">f) Pseudonymity vs. Anonymity: </span> Blockchain networks are pseudonymous rather than truly private. While transactions do not inherently carry personal identification information, metadata like wallet IDs, timestamps, and IP information can still be exposed and potentially linked to real identities without additional privacy layers.</li>
                    </ul>
                  </ul>
                </div>
                <div className="space-y-3 pl-4">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">8.3 Limitation of Liability</h3>
                  <ul>
                    <li>To the fullest extent permitted by applicable law, Chatllat (operated by Quillix Ventures Pvt. Ltd.) and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the platform; (b) any conduct or content of any third party on the platform; (c) any content obtained from the platform; or (d) unauthorized access, use, or alteration of your transmissions or content.</li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">9. Indemnification</h2>
                <ul>
                  <li>You agree to indemnify, defend, and hold harmless Chatllat, Quillix Ventures Pvt. Ltd., its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your (or anyone using your wallet) violation of these Terms or your use of the platform.</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">10. Termination</h2>
                <ul>
                  <li>Chatllat reserves the right to suspend or terminate your access to the platform, in whole or in part, at its sole discretion, without notice or liability, for any reason, including but not limited to breach of these Terms, engagement in fraudulent activity, or non-compliance with legal obligations (e.g., KYC/AML requirements).</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">11. Governing Law and Jurisdiction</h2>
                <ul>
                  <li>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or your use of the Chatllat platform shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">12. Changes to Terms</h2>
                <ul>
                  <li>Chatllat reserves the right to modify or revise these Terms at any time. We will notify you of any significant changes by posting the updated Terms on this page with an updated "Last Updated" date. Your continued use of the platform after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms regularly.</li>
                </ul>
              </div>

              <div className="w-full h-px bg-gray-900/20"></div>

              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl md:text-2xl text-white font-medium tracking-wider relative">13. Contact Us</h2>
                <ul>
                  <li>If you have any questions or concerns regarding these Terms, please contact us:</li>
                   <li> <span className="text-white">Email: </span> <a href="mailto:support@chatllat.com">support@chatllat.com</a></li>
                   <li> <span className="text-white">Website: </span> <Link to="https://chatllat.com/privacy" target='_blank'>https://chatllat.com/privacy</Link></li>
                   <li> <span className="text-white">Operated by: </span> Quillix Ventures Pvt. Ltd., Ahmedabad, Gujarat, India</li>
                </ul>
                <div className="space-y-3">
                  <h3 className="text-lg text-white font-medium tracking-wider relative">Works cited</h3>
                  <ul>
                    <li><span className="text-white font-medium"> 1) Chatllat Document.docx</span></li>
                    <li><span className="text-white font-medium"> 2) Blockchain 2025 - India - Global Practice Guides, accessed July 28, 2025, </span> <Link to={'https://practiceguides.chambers.com/practice-guides/blockchain-2025/india'} target='_blank'>https://practiceguides.chambers.com/practice-guides/blockchain-2025/india</Link></li>
                    <li><span className="text-white font-medium"> 3) Freelancers guide to protecting your intellectual property rights - Harper James Solicitors, accessed July 28, 2025, </span> <Link to={'https://harperjames.co.uk/article/freelancers-guide-to-ip/'} target='_blank'>https://harperjames.co.uk/article/freelancers-guide-to-ip/</Link></li>
                    <li><span className="text-white font-medium"> 4) Client vs. Agency Intellectual Property Rights: Who Owns the Work in a Creative Services Agreement? - Legal GPS, accessed July 28, 2025, </span> <Link to={'https://www.legalgps.com/creative-services-agreement/client-vs-agency-intellectual-property-rights-ownership'} target='_blank'>https://www.legalgps.com/creative-services-agreement/client-vs-agency-intellectual-property-rights-ownership</Link></li>
                    <li><span className="text-white font-medium"> 5) 9 Terms and Conditions to Include in Your Freelance Contract - Wethos, accessed July 28, 2025,</span> <Link to={'https://www.wethos.co/blog/freelance-contract-terms-and-conditions'} target='_blank'>https://www.wethos.co/blog/freelance-contract-terms-and-conditions</Link></li>
                    <li><span className="text-white font-medium"> 6) Privacy Challenges in Web3 and Their Solutions - Neptune Mutual, accessed July 28, 2025,</span> <Link to={'https://neptunemutual.com/blog/privacy-challenges-in-web3-and-their-solutions/'} target='_blank'>https://neptunemutual.com/blog/privacy-challenges-in-web3-and-their-solutions/</Link></li>
                    <li><span className="text-white font-medium"> 7) What are Decentralized Applications (dApps)? Characteristics & Use Cases - Fireblocks, accessed July 28, 2025,</span> <Link to={'https://www.fireblocks.com/glossary/decentralized-applications/'} target='_blank'>https://www.fireblocks.com/glossary/decentralized-applications/</Link></li>
                    <li><span className="text-white font-medium"> 8) How Web3 and Decentralization Impact Upwork-Like Platforms? - Oyelabs, accessed July 28, 2025,</span> <Link to={'https://oyelabs.com/web3-and-decentralization-impact-upwork-like-platforms/'} target='_blank'>https://oyelabs.com/web3-and-decentralization-impact-upwork-like-platforms/</Link></li>
                    <li><span className="text-white font-medium"> 9) What Are Decentralized Applications (dApps)? - Bulldog Law, accessed July 28, 2025,</span> <Link to={'https://www.thebulldog.law/what-are-decentralized-applications-dapps'} target='_blank'>https://www.thebulldog.law/what-are-decentralized-applications-dapps</Link></li>
                    <li><span className="text-white font-medium"> 10) Decentralized Applications (dApps): Definition, Uses, Pros and Cons - Investopedia, accessed July 28, 2025,</span> <Link to={'https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp'} target='_blank'>https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp</Link></li>
                    <li><span className="text-white font-medium"> 11) GDPR and Crypto Privacy | Support Center - Telcoin, accessed July 28, 2025,</span> <Link to={'https://www.telco.in/support-center/privacy-and-data/gdpr-and-crypto-privacy'} target='_blank'>https://www.telco.in/support-center/privacy-and-data/gdpr-and-crypto-privacy</Link></li>
                    <li><span className="text-white font-medium"> 12) Can You Store Private Data on a Blockchain? - Blog - ArDrive, accessed July 28, 2025,</span> <Link to={'https://ardrive.io/can-you-store-private-data-on-a-blockchain'} target='_blank'>https://ardrive.io/can-you-store-private-data-on-a-blockchain</Link></li>
                    <li><span className="text-white font-medium"> 13) Off-Chain vs. On-Chain: Striking the Perfect Balance for Your Blockchain Data - CoinsBench, accessed July 28, 2025,</span> <Link to={'https://coinsbench.com/off-chain-vs-on-chain-striking-the-perfect-balance-for-your-blockchain-data-fb3052248133'} target='_blank'>https://coinsbench.com/off-chain-vs-on-chain-striking-the-perfect-balance-for-your-blockchain-data-fb3052248133</Link></li>
                    <li><span className="text-white font-medium"> 14) What Are dApps & How They Enable a Private Web3 - Nym, accessed July 28, 2025,</span> <Link to={'https://nym.com/blog/what-are-decentralized-apps'} target='_blank'>https://nym.com/blog/what-are-decentralized-apps</Link></li>
                    <li><span className="text-white font-medium"> 15) Can there be better privacy for Ethereum ecosystem? A look at Base - Aleph Zero, accessed July 28, 2025,</span> <Link to={'https://alephzero.org/blog/privacy-for-ethereum-ecosystem-base/'} target='_blank'>https://alephzero.org/blog/privacy-for-ethereum-ecosystem-base/</Link></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default TermsCondition