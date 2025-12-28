import { useLocation } from 'react-router-dom'
import { buildPathWithLang, getLangFromPath } from '../utils/langRouting'

/**
 * Hook to get language-aware path builder
 * Returns a function that builds paths with the current language prefix
 */
export const useLangPath = () => {
  const location = useLocation()
  const currentLang = getLangFromPath(location.pathname)
  
  return (path) => buildPathWithLang(currentLang, path)
}

