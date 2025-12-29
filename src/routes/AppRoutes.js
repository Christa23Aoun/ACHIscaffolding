// src/routes/AppRoutes.js
import Header from '../components/Header'
import Home from '../pages/Home'
import { Route, Routes } from "react-router-dom"
import { useLangRouter } from '../routing/LangRouter'

import 'glider-js/glider.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Gallery from '../pages/Gallery'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageNotFound from '../pages/PageNotFound'
import Blog from '../pages/Blog'
import BlogItem from '../pages/BlogItem'

import ServicesPage from '../pages/Services'
import SingleService from '../components/services/SingleService'

import About from '../pages/About'
import Products from '../pages/Products'
import Projects from '../pages/Projects'
import Sectors from '../pages/Sectors'

function AppRoutes({ 
  showMenu, 
  setshowMenu, 
  userLang, 
  direction, 
  handleLanguage, 
  currentLanguage, 
  handleCountry, 
  currentCountry 
}) {
  const { cleanLocation } = useLangRouter()

  return (
    <>
      <ScrollToTop />
      <div className="App" onClick={() => showMenu ? setshowMenu(false) : true}>
        <Header
          handleLanguage={handleLanguage}
          currentLanguage={currentLanguage}
          handleCountry={handleCountry}
          currentCountry={currentCountry}
        />

        <Routes location={cleanLocation}>
          <Route path="/" element={<Home showMenu={showMenu} setshowMenu={setshowMenu} direction={direction} userLang={userLang} />} />

          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sectors" element={<Sectors />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/serviceItem" element={<SingleService />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post-2" element={<BlogItem />} />
          <Route path="/blog-post-1" element={<BlogItem />} />
          <Route path="/blog-post-3" element={<BlogItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default AppRoutes
