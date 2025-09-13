    import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../assets/images/logo/chatllat-logo.png"
// import menuIcon from "./../assets/images/icons/menu-icon.svg"
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [applyHeaderClass, setApplyHeaderClass] = useState(false);
    const scrollDirection = useScrollDirection();
    const navigate = useNavigate();
    const location = useLocation();
    const handleFeatures = () => {
        if (location.pathname === '/') {
        // Already on home → scroll manually
        const el = document.getElementById('features');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        } else {
            // Not on home → navigate and trigger useEffect in Home.jsx
            navigate('/', { state: { scrollTo: 'features' } });
        }
    };

    useEffect(() => {
        let timer;
        if (drawerOpen) {
            timer = setTimeout(() => setApplyHeaderClass(true), 400);
            document.body.style.overflow = 'hidden';
        } else {
            setApplyHeaderClass(false); // remove instantly on close
            document.body.style.overflow = '';
        }

        return () => clearTimeout(timer);
        }, [drawerOpen]);

    return <>
        {/* Header start */}
        <div className={`w-full sticky z-20 top-0 border-b-0 border-gray-600/80 transition-all duration-500 ${drawerOpen ? '' : scrollDirection === "down" ? "-translate-y-full" : "translate-y-0 bg-bgDark shadow-[0_4px_20px_rgba(255,255,255,0.04)]"}`}>
            <div className="container flex items-center justify-between gap-4 py-3 sm:py-6">
                <div className="max-w-72 w-full max-lg:grow max-lg:flex-1">
                    <Link to="/" className="block w-28 sm:w-40">
                        <img src={logo} alt="ChatllatLogo" className="object-cover"/>
                    </Link>
                </div>
                {/* <ul className="hidden lg:flex items-center gap-8 lg:gap-[50px] text-gray-500 font-medium text-base"> */}
                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur ${applyHeaderClass ? 'block' : 'hidden'} z-10`}
                    onClick={() => setDrawerOpen(false)}
                />
                <div className={`
                        max-lg:fixed top-0 left-0 h-full max-lg:w-72 max-lg:bg-dark-900 max-lg:h-full z-50 p-6 lg:px-0 
                        max-lg:shadow-lg lg:grow transform transition-transform duration-300 ease-in-out
                        ${applyHeaderClass  ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}
                    `}>
                    <div className="flex lg:hidden items-center justify-between mb-10 relative">
                        <button className="absolute text-gray-500 hover:text-white transition-colors duration-200 top-0 right-0" onClick={() => setDrawerOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Link to="/" className="w-36">
                            <img src={logo} alt="ChatllatLogo" className="object-cover"/>
                        </Link>
                    </div>
                    <ul className="flex w-full max-lg:flex-col lg:items-center gap-4 lg:gap-8 lg:justify-center text-gray-500 font-medium text-base">
                        <li>
                            <Link to="/" className="hover:text-white transition-colors duration-200 tracking-wide">Home</Link>
                        </li>
                        <li>
                            <button onClick={handleFeatures} className="hover:text-white transition-colors duration-200 tracking-wide">Features</button>
                        </li>
                        <li>
                            <Link to="/user-guide" className="hover:text-white transition-colors duration-200 tracking-wide">User Guide</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-white transition-colors duration-200 tracking-wide">Blog</Link>
                        </li>
                       
                        <li className="lg:hidden">
                            <Link to="https://app.chatllat.com/" className='inline-flex px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300'>
                                <span>Launch App</span>
                                <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_787_1529" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={-1} width={26} height={27}>
                                    <rect width={26} height={26} transform="matrix(-1 0 0 1 26 -0.00390625)" fill="currentColor" />
                                    </mask>
                                    <g mask="url(#mask0_787_1529)">
                                    <path d="M15.2186 19.1219L21.3438 12.997L15.2186 6.87207L14.077 8.04695L18.2145 12.1845L4.65608 12.1845V13.8095L18.2145 13.8095L14.077 17.947L15.2186 19.1219Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-end gap-4 lg:max-w-72 lg:w-full">
                    <LanguageSwitcher />
                    <Link to="https://app.chatllat.com/" target="_blank" className='inline-flex px-6 py-3 bg-primary hover:bg-green rounded-full text-white font-medium gap-2 tracking-wide transition-all duration-300 max-lg:hidden'>
                        <span>Launch App</span>
                        <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_787_1529" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={-1} width={26} height={27}>
                            <rect width={26} height={26} transform="matrix(-1 0 0 1 26 -0.00390625)" fill="currentColor" />
                            </mask>
                            <g mask="url(#mask0_787_1529)">
                            <path d="M15.2186 19.1219L21.3438 12.997L15.2186 6.87207L14.077 8.04695L18.2145 12.1845L4.65608 12.1845V13.8095L18.2145 13.8095L14.077 17.947L15.2186 19.1219Z" fill="white" />
                            </g>
                        </svg>
                    </Link>
                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-dark-800 rounded-full text-white hover:text-bg-dark-950 transition-colors duration-200 focus:outline-none focus:ring-0" onClick={() => setDrawerOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 sm:w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* Header start */}
    </>;
};

export default Header;
