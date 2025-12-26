import React from 'react'
import Company from '../components/Company'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Service from '../components/Service'
import WhyChoseUs from '../components/WhyChoseUs'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import SectorsBar from '../components/SectorsBar'

const Home = ({ showMenu, setshowMenu, direction, userLang }) => {
  const ASSET = process.env.PUBLIC_URL || ""

  return (
    <div>
      <a
        href="tel:+96103322811"
        className="fixed right-[40px] bottom-[120px] md:bottom-[140px] z-[999999] rounded-full bg-[#28509E] hover:bg-[#214f9b] transition-colors duration-300 flex items-center justify-center shadow-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px] border-4 border-white callbutton"
        aria-label="Call Achi Scaffolding +96103322811"
      >
        <i className="fa-solid fa-phone text-white text-[20px] md:text-[24px]" style={{ transform: 'scaleX(-1)' }}></i>
      </a>
      <a
        href="https://wa.me/+96103322811"
        target="_blank"
        rel="noreferrer"
        className="fixed right-[40px] bottom-[40px] z-[999999] rounded-full whatsapplogo"
        aria-label="WhatsApp Achi Scaffolding"
      >
        <img
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
          src={`${ASSET}/assets/logos_whatsapp-icon.png`}
          alt="whatsapp-icon"
        />
      </a>

      <Hero showMenu={showMenu} setshowMenu={setshowMenu} direction={direction} userLang={userLang} />
      <Service direction={direction} />
      <Company />
      <Clients direction={direction} />
      <WhyChoseUs direction={direction} />
      <SectorsBar />
      <Testimonials direction={direction} />
      <BlogSection />
      <ContactForm />
    </div>
  )
}

export default Home
