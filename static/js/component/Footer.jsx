import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../assets/images/logo/chatllat-logo.png"

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleWhyChatllat = () => {
      if (location.pathname === '/') {
      // Already on home → scroll manually
      const el = document.getElementById('why-chatllat');
      if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
      }
      } else {
          // Not on home → navigate and trigger useEffect in Home.jsx
          navigate('/', { state: { scrollTo: 'why-chatllat' } });
      }
  };
  return(
    <>
      <footer className="footer-bg bg-dark-900">
        <div className="container">
          <div className="top-footer pt-14 md:pt-24 pb-10 md:pb-16">
            <div className="flex justify-between flex-wrap gap-10 xl:gap-32">
                <div className="max-md:w-full md:max-w-sm grow">
                  <Link to="/" className="w-36 mb-4 inline-block">
                      <img src={logo} alt="ChatllatLogo" className="object-cover"/>
                  </Link>
                  <div className="text-base font-medium text-gray-900 tracking-wide leading-7 md:pr-5 mb-5 md:mb-8">
                    <p>Chatllat is a decentralized freelance platform built for the Web3 generation - just secure wallet-based collaboration.</p>
                  </div>
                  <ul className="flex items-center flex-wrap gap-4">
                    {/* Telegram */}
                    <li>
                      <Link to="https://t.me/chatllat" target="_blank" className="w-10 h-10 flex items-center justify-center text-white hover:text-white bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full transition-all duration-500">
                        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                          <path d="M6.27812 11.0523L6.01345 14.7749C6.39212 14.7749 6.55612 14.6123 6.75278 14.4169L8.52812 12.7203L12.2068 15.4143C12.8815 15.7903 13.3568 15.5923 13.5388 14.7936L15.9535 3.47892L15.9541 3.47825C16.1681 2.48092 15.5935 2.09092 14.9361 2.33559L0.742785 7.76959C-0.225881 8.14559 -0.211215 8.68559 0.578119 8.93025L4.20678 10.0589L12.6355 4.78492C13.0321 4.52225 13.3928 4.66759 13.0961 4.93025L6.27812 11.0523Z" fill="currentColor" />
                        </svg>
                      </Link>
                    </li>
                    {/* Twitter X */}
                    <li>
                      <Link to="https://x.com" target="_blank" className="w-10 h-10 flex items-center justify-center text-white hover:text-white bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full transition-all duration-500">
                      <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <g clipPath="url(#clip0_682_9454)">
                          <path d="M9.4893 7.70655L15.3176 0.931641H13.9365L8.87577 6.8142L4.8338 0.931641H0.171875L6.28412 9.82711L0.171875 16.9316H1.55307L6.8973 10.7195L11.1659 16.9316H15.8278L9.48896 7.70655H9.4893ZM7.59756 9.90548L6.97826 9.01969L2.05073 1.97138H4.17217L8.14874 7.65959L8.76804 8.54538L13.9371 15.9392H11.8157L7.59756 9.90582V9.90548Z" fill="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_682_9454">
                            <rect width={16} height={16} fill="currentColor" transform="translate(0 0.931641)" />
                          </clipPath>
                        </defs>
                      </svg>
                      </Link>
                    </li>
                    {/* Instagram */}
                    {/* <li>
                      <Link to="https://www.instagram.com/chatllat?igsh=MWhmMGV3bGlsa2Zmdg==" target="_blank" className="w-10 h-10 flex items-center justify-center text-white hover:text-white bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full transition-all duration-500">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="currentColor"
                            />
                            <path
                              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    </li> */}
                    {/* Medium */}
                    <li>
                      <Link to="https://medium.com/@chatllat.mail" target="_blank" className="w-10 h-10 flex items-center justify-center text-white hover:text-white bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full transition-all duration-500">
                        <svg
                          viewBox="0 -1.5 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="SVGRepo_iconCarrier">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-260.000000, -7520.000000)"
                                fill="currentColor"
                              >
                                
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                  
                                  <path
                                    d="M212,7365.33318 L212,7371.20376 L217.333,7373.81607 L212,7365.33318 Z M223.856,7363.13685 L217.519,7360.03908 C217.416,7359.98525 217.285,7360.02538 217.223,7360.12032 L213.56,7365.94784 L217.919,7372.8794 L223.917,7363.34532 C223.966,7363.27094 223.931,7363.17698 223.856,7363.13685 Z M218.232,7374.24868 L223.45,7376.79932 C223.752,7376.94809 224,7376.79932 224,7376.46262 L224,7365.08066 L218.232,7374.24868 Z M211,7362.95089 L211,7376.46948 C211,7376.79932 210.586,7377.11056 210.283,7376.96179 L204,7373.71721 L204,7360.34935 C204,7360.12619 204.229,7359.87269 204.635,7360.07236 L211,7362.95089 Z"
                                    id="medium-[#149]"
                                  >
                                    
                                  </path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </Link>
                    </li>
                    {/* Reddit */}
                    <li>
                      <Link to="https://www.reddit.com/r/Chatllat/" target="_blank" className="w-10 h-10 flex items-center justify-center text-white hover:text-white bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full transition-all duration-500">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15C9.55229 15 10 14.5523 10 14C10 13.4477 9.55229 13 9 13Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14Z"
                              fill="currentColor"
                            />
                            <path
                              d="M8.29289 16.7929C8.97405 16.1117 9.57505 16.7945 10.1972 17.1056C10.5749 17.2944 11.1728 17.5 12 17.5C12.8272 17.5 13.4251 17.2944 13.8028 17.1056C14.4249 16.7945 15.0259 16.1117 15.7071 16.7929C16.5738 17.6596 15.4209 18.5326 14.6972 18.8944C14.0749 19.2056 13.1728 19.5 12 19.5C10.8272 19.5 9.92507 19.2056 9.30279 18.8944C8.57552 18.5308 7.44766 17.6381 8.29289 16.7929Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.4703 1.15182C12.7232 0.993884 13.0334 0.957034 13.3162 1.05132L16.6328 2.15685C17.1818 1.45278 18.038 1 19 1C20.6569 1 22 2.34315 22 4C22 5.65686 20.6569 7 19 7C17.3613 7 16.0294 5.68608 16.0005 4.05426L13.8314 3.33121L13.0711 9.03277C14.2994 9.1083 15.4685 9.31237 16.545 9.62357C17.166 8.64754 18.2574 8 19.5 8C21.433 8 23 9.56701 23 11.5C23 12.2757 22.7477 12.9924 22.3206 13.5726C22.76 14.3288 23 15.1466 23 16C23 19.866 18.0751 23 12 23C5.92487 23 1 19.866 1 16C1 15.1466 1.23999 14.3288 1.67937 13.5726C1.25233 12.9924 1 12.2757 1 11.5C1 9.56701 2.567 8 4.5 8C5.74259 8 6.83394 8.64754 7.45501 9.62358C8.56809 9.30178 9.78028 9.09454 11.0544 9.02551L12.0088 1.86784C12.0482 1.5723 12.2174 1.30975 12.4703 1.15182ZM20 4C20 4.55229 19.5523 5 19 5C18.4477 5 18 4.55229 18 4C18 3.44772 18.4477 3 19 3C19.5523 3 20 3.44772 20 4ZM18.7044 12.7376C20.3517 13.7858 21 14.988 21 16C21 17.012 20.3517 18.2142 18.7044 19.2624C17.0809 20.2956 14.7159 21 12 21C9.28405 21 6.91908 20.2956 5.29558 19.2624C3.64835 18.2142 3 17.012 3 16C3 14.988 3.64835 13.7858 5.29558 12.7376C6.91908 11.7044 9.28405 11 12 11C14.7159 11 17.0809 11.7044 18.7044 12.7376ZM18.5221 10.3626C19.5949 9.4393 21.352 10.5086 20.9402 11.9207C20.2671 11.3244 19.4503 10.7982 18.5221 10.3626ZM3.05982 11.9207C3.73291 11.3244 4.5497 10.7982 5.47793 10.3626C4.40504 9.43929 2.64794 10.5086 3.05982 11.9207Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    </li>
                    {/* Discord */}
                    <li>
                      <Link to="https://discord.gg/H3TpSuEM" target="_blank" className="w-10 h-10 flex items-center justify-center text-white hover:text-white bg-transparent hover:bg-primary border border-white hover:border-primary rounded-full transition-all duration-500">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11 12.5C11 13.8807 10.1046 15 9 15C7.89543 15 7 13.8807 7 12.5C7 11.1193 7.89543 10 9 10C10.1046 10 11 11.1193 11 12.5ZM8.22293 12.5C8.22293 13.0365 8.57084 13.4713 9 13.4713C9.42916 13.4713 9.77707 13.0365 9.77707 12.5C9.77707 11.9635 9.42916 11.5287 9 11.5287C8.57084 11.5287 8.22293 11.9635 8.22293 12.5Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 15C16.1046 15 17 13.8807 17 12.5C17 11.1193 16.1046 10 15 10C13.8954 10 13 11.1193 13 12.5C13 13.8807 13.8954 15 15 15ZM15 13.4713C14.5708 13.4713 14.2229 13.0365 14.2229 12.5C14.2229 11.9635 14.5708 11.5287 15 11.5287C15.4292 11.5287 15.7771 11.9635 15.7771 12.5C15.7771 13.0365 15.4292 13.4713 15 13.4713Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.9864 3.33561C9.94083 3.06219 9.78382 2.81995 9.55284 2.66671C9.32186 2.51347 9.03764 2.46298 8.76801 2.52729C6.61476 3.04085 5.39826 3.471 3.47772 4.64723C3.33168 4.73668 3.21105 4.86214 3.1274 5.01158C1.9368 7.13867 1.14514 8.97344 0.657859 10.9416C0.171558 12.9058 1.51992e-05 14.9565 0 17.5C0 17.7652 0.105353 18.0196 0.292888 18.2071C1.35191 19.2661 2.45067 20.1002 3.71884 20.6638C4.99135 21.2294 6.3833 21.5 8 21.5C8.43043 21.5 8.81257 21.2246 8.94868 20.8162L9.62339 18.7921C10.3731 18.918 11.1769 19 12 19C12.8231 19 13.6269 18.918 14.3766 18.7921L15.0513 20.8162C15.1874 21.2246 15.5696 21.5 16 21.5C17.6167 21.5 19.0086 21.2294 20.2812 20.6638C21.5493 20.1002 22.6481 19.2661 23.7071 18.2071C23.8946 18.0196 24 17.7652 24 17.5C24 14.9565 23.8284 12.9058 23.3421 10.9416C22.8549 8.97344 22.0632 7.13867 20.8726 5.01158C20.789 4.86214 20.6683 4.73668 20.5223 4.64723C18.6017 3.471 17.3852 3.04085 15.232 2.52729C14.9624 2.46298 14.6781 2.51347 14.4472 2.66671C14.2162 2.81995 14.0592 3.06219 14.0136 3.33561L13.6356 5.60381C13.129 5.53843 12.5832 5.49994 12 5.49994C11.4168 5.49994 10.8709 5.53843 10.3644 5.60381L9.9864 3.33561ZM16.7135 19.4783L16.3365 18.3471C17.2221 18.0953 18.1008 17.7971 18.9331 17.4013C19.4309 17.1622 19.6405 16.5647 19.4014 16.0669C19.1622 15.5692 18.5647 15.3597 18.0669 15.5986C17.4725 15.8793 16.8456 16.1 16.2191 16.2953C15.0702 16.6535 13.5516 17 12 17C10.4484 17 8.92975 16.6535 7.78088 16.2953C7.15483 16.1001 6.53092 15.8781 5.93607 15.6C5.44219 15.3668 4.83698 15.5709 4.59864 16.0669C4.36123 16.561 4.57887 17.1681 5.0722 17.4039C5.90316 17.7978 6.77969 18.0958 7.66354 18.3471L7.28647 19.4783C6.22623 19.4118 5.33457 19.1933 4.53112 18.8362C3.65215 18.4455 2.83779 17.8709 2.00169 17.0797C2.02016 14.8272 2.19155 13.069 2.59925 11.4223C3.01458 9.74468 3.68586 8.13987 4.7452 6.2178C6.0043 5.46452 6.90106 5.0901 8.19227 4.73633L8.40706 6.02507C7.53196 6.29408 6.64115 6.64982 5.903 7.1977C5.46929 7.52129 5.37507 8.1667 5.7 8.59994C6.03024 9.04026 6.6539 9.1307 7.09547 8.80332C7.4639 8.53958 7.89071 8.34569 8.30889 8.17842C9.14624 7.84348 10.3952 7.49994 12 7.49994C13.6048 7.49994 14.8538 7.84348 15.6911 8.17842C16.1093 8.34568 16.5361 8.53955 16.9045 8.8033C17.3461 9.1307 17.9698 9.04027 18.3 8.59994C18.6241 8.16782 18.526 7.51604 18.0932 7.19491C17.3475 6.65617 16.4693 6.29447 15.5929 6.02507L15.8077 4.73633C17.0989 5.0901 17.9957 5.46452 19.2548 6.2178C20.3141 8.13987 20.9854 9.74468 21.4008 11.4223C21.8085 13.069 21.9798 14.8272 21.9983 17.0797C21.1622 17.8709 20.3479 18.4455 19.4689 18.8362C18.6654 19.1933 17.7738 19.4118 16.7135 19.4783ZM9 15C10.1046 15 11 13.8807 11 12.5C11 11.1193 10.1046 10 9 10C7.89543 10 7 11.1193 7 12.5C7 13.8807 7.89543 15 9 15ZM17 12.5C17 13.8807 16.1046 15 15 15C13.8954 15 13 13.8807 13 12.5C13 11.1193 13.8954 10 15 10C16.1046 10 17 11.1193 17 12.5ZM9 13.4713C8.57084 13.4713 8.22293 13.0365 8.22293 12.5C8.22293 11.9635 8.57084 11.5287 9 11.5287C9.42916 11.5287 9.77707 11.9635 9.77707 12.5C9.77707 13.0365 9.42916 13.4713 9 13.4713ZM15 13.4713C14.5708 13.4713 14.2229 13.0365 14.2229 12.5C14.2229 11.9635 14.5708 11.5287 15 11.5287C15.4292 11.5287 15.7771 11.9635 15.7771 12.5C15.7771 13.0365 15.4292 13.4713 15 13.4713Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="grow flex flex-wrap justify-between gap-10">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-lg font-medium tracking-wide">Users</h3>
                      <span className="w-9 h-0.5 bg-primary rounded"></span>
                    </div>
                    <ul className="space-y-2 font-normal tracking-wide">
                      <li><Link to="https://app.chatllat.com/" target="_blank" className="text-gray-900 hover:text-white transition-colors">Post a Project</Link></li>
                      <li><Link to="https://app.chatllat.com/" target="_blank" className="text-gray-900 hover:text-white transition-colors">Browse Freelancers</Link></li>
                      <li><Link to="https://app.chatllat.com/" target="_blank" className="text-gray-900 hover:text-white transition-colors">Direct Agreements</Link></li>
                      <li><Link to="https://app.chatllat.com/" target="_blank" className="text-gray-900 hover:text-white transition-colors">Dispute Resolution</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-lg font-medium tracking-wide">Quick Links</h3>
                      <span className="w-9 h-0.5 bg-primary rounded"></span>
                    </div>
                    <ul className="space-y-2 font-normal tracking-wide">
                      <li><Link to="/user-guide" className="text-gray-900 hover:text-white transition-colors">User Guide</Link></li>
                      {/* <li><Link href="#" className="text-gray-900 hover:text-white transition-colors">How It Works</Link></li> */}
                      <li><button onClick={handleWhyChatllat} className="text-gray-900 hover:text-white transition-colors">Why Chatllat</button></li>
                      <li><Link to="/blog" className="text-gray-900 hover:text-white transition-colors">Blog</Link></li>
                      <li><Link to="https://chatllat.vercel.app/faqs" className="text-gray-900 hover:text-white transition-colors">FAQs</Link></li>
                    </ul>
                  </div>                      
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-lg font-medium tracking-wide">Resources</h3>
                      <span className="w-9 h-0.5 bg-primary rounded"></span>
                    </div>
                    <ul className="space-y-2 font-normal tracking-wide">
                      <li><Link href="https://chatllat-help-guide.tawk.help/" target="_blank" className="text-gray-900 hover:text-white transition-colors">Help Guide</Link></li>
                      <li><Link to="https://chatllat.vercel.app/faqs" className="text-gray-900 hover:text-white transition-colors">FAQs</Link></li>
                      <li><Link to="/partner" className="text-gray-900 hover:text-white transition-colors">Partner</Link></li>
                      <li><Link to="https://chatllat.vercel.app/terms-and-condition" className="text-gray-900 hover:text-white transition-colors">Terms & Condition</Link></li>
                      <li><Link to="https://chatllat.vercel.app/privacy-policy" className="text-gray-900 hover:text-white transition-colors">Privacy Policy</Link></li>
                      {/* <li><Link href="#" className="text-gray-900 hover:text-white transition-colors">Smart Contracts</Link></li> */}
                    </ul>
                  </div>                      
                </div>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
          <div className="bottom-footer py-5 md:py-6">
            <div className="text-base font-normal text-gray-900 tracking-wider text-center">
              <p><span className="text-white font-medium">© {new Date().getFullYear()} Chatllat.</span> Decentralized. Wallet-Based. Escrow Protected.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
