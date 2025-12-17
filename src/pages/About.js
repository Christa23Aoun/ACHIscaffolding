import React from "react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <main className="bg-[#f5f7fb] text-[#1b3155]">
      <section id="aboutUs" className="w-full bg-[#eef3fb] py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-stretch">
            <div
              className="min-h-[320px] rounded-[18px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/assets/about.webp')" }}
              aria-label="Achi Scaffolding team and scaffolding project in Lebanon"
              role="img"
            />

            <div className="rounded-[18px] bg-white p-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col justify-center">
              <h2 className="uppercase text-[#214f9b] font-[800] text-[30px] leading-[1.1] md:text-[38px]">
                30+ YEARS OF SCAFFOLDING
                <br />
                EXPERIENCE
              </h2>

              <div className="mt-[16px] text-[15px] leading-[1.75] text-[#4a5c7a]">
                <p>
                  Since its establishment in 1993 by engineer Barbar Achi, Achi Scaffolding has evolved into a reputable provider of expert scaffolding and formwork services in Lebanon. Our professional team takes immense pride in building a solid foundation of trust by delivering reliable and high-quality scaffold structures for diverse projects, including shopping malls, towers, residential buildings, and universities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-main" className="w-full bg-[#f5f7fb] py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="uppercase text-[#214f9b] font-[900] text-[34px] md:text-[44px] leading-[1.1]">
              ABOUT ACHI SCAFFOLDING
            </h1>
            <p className="mt-[14px] text-[15px] md:text-[16px] leading-[1.8] text-[#4a5c7a]">
              Achi Scaffolding provides professional scaffolding, formwork and shoring solutions for commercial, residential and industrial projects across Lebanon and the region. We combine field experience with engineered solutions to deliver safe, reliable and cost-effective systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] mt-[32px]">
            <article className="rounded-[18px] bg-white p-[26px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="uppercase text-[#214f9b] font-[800] text-[22px]">
                OUR MISSION
              </h3>
              <p className="mt-[10px] text-[15px] leading-[1.8] text-[#4a5c7a]">
                We specialize in comprehensive scaffolding services — from rental and installation to design and export of new and used construction equipment across the Middle East and Africa. Our mission is to provide engineered, safe and timely solutions that help clients deliver their projects on schedule.
              </p>

              <div className="mt-[16px]">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-full border-[2px] border-[#214f9b] text-[#214f9b] font-[800] uppercase text-[13px] tracking-[.06em] hover:bg-[#214f9b] hover:text-white transition"
                >
                  See projects
                </Link>
              </div>
            </article>

            <article className="rounded-[18px] bg-white p-[26px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="uppercase text-[#214f9b] font-[800] text-[22px]">
                OUR VISION
              </h3>
              <p className="mt-[10px] text-[15px] leading-[1.8] text-[#4a5c7a]">
                To make scaffolding a symbol of innovation, sustainability and safety in the built environment. We aim to lead the industry by improving standards, investing in skilled crews and supplying modern systems that reduce risk and increase productivity.
              </p>

              <div className="mt-[16px]">
                <Link
                  to="/#contactForm"
                  className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-full bg-[#214f9b] text-white font-[800] uppercase text-[13px] tracking-[.06em] hover:translate-y-[-1px] transition"
                >
                  Get in touch
                </Link>
              </div>
            </article>
          </div>

          <div className="flex flex-col sm:flex-row gap-[12px] justify-center mt-[26px]">
            <Link
              to="/#contactForm"
              className="inline-flex items-center justify-center px-[26px] py-[11px] rounded-full bg-[#214f9b] text-white font-[800] uppercase text-[13px] tracking-[.06em] hover:translate-y-[-1px] transition"
            >
              Get in touch
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-[26px] py-[11px] rounded-full border-[2px] border-[#214f9b] text-[#214f9b] font-[800] uppercase text-[13px] tracking-[.06em] hover:bg-[#214f9b] hover:text-white transition"
            >
              See projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
