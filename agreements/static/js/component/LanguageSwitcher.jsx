import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import usFlag from '../assets/images/flags/united-states.png';
import inFlag from '../assets/images/flags/india.png';
import chinaFlag from '../assets/images/flags/china.png';
import spainFlag from '../assets/images/flags/spain.png';
import uaeFlag from '../assets/images/flags/united-arab-emirates.png';
import russiaFlag from '../assets/images/flags/russia.png';

const languages = [
    { code: 'en', name: 'English', flag: usFlag },
    { code: 'hi', name: 'Hindi', flag: inFlag },
    { code: 'zh', name: 'Chinese', flag: chinaFlag },
    { code: 'es', name: 'Spanish', flag: spainFlag },
    { code: 'ar', name: 'Arabic', flag: uaeFlag },
    { code: 'ru', name: 'Russian', flag: russiaFlag },
  ];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const selectedLang = languages.find((l) => l.code === i18n.language) || languages[0];

    const handleLanguageChange = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center py-2 text-white rounded shadow font-medium"
      >
        <span><img src={selectedLang.flag} alt={selectedLang.name} className="max-sm:hidden w-6 h-4 object-cover object-center rounded mr-2" /></span>
        <span className='mr-2 max-sm:text-sm uppercase'>{selectedLang.code}</span>
        <svg className={`w-4 h-4 transition-all duration-500 ${open ? 'rotate-180 text-green' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>

    {/* {open && ( */}
        <div className={`absolute right-0 mt-2 py-1 w-36 bg-white text-black rounded-xl shadow-lg overflow-hidden transition-opacity duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-100 font-medium"
            >
              <span><img src={lang.flag} alt={lang.name} className="w-6 h-4 object-cover object-center rounded mr-2" /></span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      {/* )} */}
    </div>
  );
};

export default LanguageSwitcher;
