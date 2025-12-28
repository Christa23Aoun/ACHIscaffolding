import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './translations/en.json';
import translationAR from './translations/ar.json';
import translationFR from './translations/fr.json';


const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    },
    fr: {
        translation: translationFR
    }
};

// Get initial language from URL or localStorage, default to 'en'
const getInitialLanguage = () => {
    if (typeof window !== 'undefined') {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        const urlPrefix = pathSegments[0]?.toLowerCase();
        
        if (urlPrefix === 'fr') return 'fr';
        if (urlPrefix === 'lb') return 'ar';
        
        // Fallback to localStorage if no URL prefix
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && (savedLang === 'en' || savedLang === 'fr' || savedLang === 'ar')) {
            return savedLang;
        }
    }
    return 'en';
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getInitialLanguage(),
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;