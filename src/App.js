import { useState, useEffect } from 'react'
import './App.css'
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes/AppRoutes'
import LangRouter from './routing/LangRouter'
import { getLangFromPath, prefixToLang } from './utils/langRouting'

function App() {
  const [showMenu, setshowMenu] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('English')
  const [currentCountry, setCurrentCountry] = useState('Country')
  const location = useLocation()

  const { t, i18n } = useTranslation()

  // Get current language from URL
  const urlLang = getLangFromPath(location.pathname)
  
  // Get current locale prefix from URL
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const urlPrefix = pathSegments[0] === 'fr' || pathSegments[0] === 'lb' ? pathSegments[0] : ''

  // Update currentLanguage display text based on URL language
  useEffect(() => {
    if (urlLang === 'en') setCurrentLanguage(t('langDropwn.english'))
    else if (urlLang === 'ar') setCurrentLanguage(t('langDropwn.arabic'))
    else setCurrentLanguage(t('langDropwn.french'))
  }, [urlLang, t])

  // Sync currentCountry from URL prefix
  useEffect(() => {
    if (urlPrefix === 'fr') {
      setCurrentCountry('France')
    } else if (urlPrefix === 'lb') {
      setCurrentCountry('Lebanon')
    } else {
      // Default to Lebanon if no prefix (since company is based in Lebanon)
      setCurrentCountry('Lebanon')
    }
  }, [urlPrefix])

  const handleLanguage = (lang) => {
    // This will be handled by Header component with URL navigation
    // i18n language will be synced by LangRouter from URL
    i18n.changeLanguage(lang)
    if (lang === 'en') setCurrentLanguage(t('langDropwn.english'))
    else if (lang === 'ar') setCurrentLanguage(t('langDropwn.arabic'))
    else setCurrentLanguage(t('langDropwn.french'))
  }

  const handleCountry = (country) => {
    setCurrentCountry(country)
  }

  return (
    <>
      <ScrollToTop />
      <LangRouter>
        <AppRoutes
          showMenu={showMenu}
          setshowMenu={setshowMenu}
          userLang={urlLang}
          direction={urlLang === 'ar' ? 'rtl' : 'ltr'}
          handleLanguage={handleLanguage}
          currentLanguage={currentLanguage}
          handleCountry={handleCountry}
          currentCountry={currentCountry}
        />
      </LangRouter>
    </>
  )
}

export default App
