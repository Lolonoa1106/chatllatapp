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
    

    </div>
  );
};

export default LanguageSwitcher;
