import React from 'react'
import Company from '../components/Company'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Service from '../components/Service'
import WhyChoseUs from '../components/WhyChoseUs'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'

const Home = ({ showMenu, setshowMenu, direction, userLang }) => {
  const ASSET = process.env.PUBLIC_URL || ""

  return (
    <div>
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
      <Testimonials direction={direction} />
      <BlogSection />
      <ContactForm />
    </div>
  )
}

export default Home
