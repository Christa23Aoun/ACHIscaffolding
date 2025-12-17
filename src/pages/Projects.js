import React, { useMemo, useState } from "react"

const Projects = () => {
  const [activeId, setActiveId] = useState(null)

  const projects = useMemo(
    () => [
      {
        id: "aishti-mall",
        title: "AISHTI Mall",
        img: "/assets/workDone/AISHTI MALL - JAL EL DIB/IMG_2189.JPG",
        desc: "Full scaffolding for interior and exterior works during construction at AISHTI Mall, one of the most iconic luxury retail developments in Lebanon.",
        tags: ["Large-Scale", "Retail", "Antelias, Lebanon"],
        gallery: ["/assets/workDone/AISHTI MALL - JAL EL DIB/IMG_2189.JPG"],
      },
      {
        id: "port-side-residential",
        title: "Port Side Residential Towers",
        img: "/assets/workDone/PORT SIDE - BEIRUT/361641065_768035905323121_6701313797518833287_n.jpg",
        desc: "Full scaffolding during structural works and façade completion at Port Side Residential Towers in the Beirut Port Area.",
        tags: ["High-Rise", "Residential", "Beirut Port, Lebanon"],
        gallery: ["/assets/workDone/PORT SIDE - BEIRUT/361641065_768035905323121_6701313797518833287_n.jpg"],
      },
      {
        id: "beirut-business-center",
        title: "Beirut Business Center",
        img: "/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17897.JPG",
        desc: "External and internal scaffolding for a commercial tower in Beirut, supporting structural works and façade completion.",
        tags: ["Commercial", "High-Rise", "Beirut, Lebanon"],
        gallery: ["/assets/workDone/BEIRUT BUSINESS CENTER - SEN EL FIL/SDC17897.JPG"],
      },
      {
        id: "hotel-le-gray",
        title: "Hotel Le Gray",
        img: "/assets/workDone/HOTEL LE GRAY/IMG_2186.JPG",
        desc: "External scaffolding for façade maintenance and restoration at Hotel Le Gray, located in downtown Beirut.",
        tags: ["Luxury", "Hotel", "Beirut, Lebanon"],
        gallery: ["/assets/workDone/HOTEL LE GRAY/IMG_2186.JPG"],
      },
      {
        id: "hotel-albergo",
        title: "Hotel Albergo",
        img: "/assets/workDone/HOTEL ALBERGO/IMG_2197.JPG",
        desc: "External scaffolding for façade restoration and architectural detailing at Hotel Albergo in Achrafieh.",
        tags: ["Heritage", "Boutique Hotel", "Achrafieh, Beirut"],
        gallery: ["/assets/workDone/HOTEL ALBERGO/IMG_2197.JPG"],
      },
      {
        id: "abc-mall",
        title: "ABC Mall",
        img: "/assets/workDone/ABC MALL/473737fb-1e48-40f4-ab29-ad87f1939d51.JPG",
        desc: "Comprehensive scaffolding solutions for façade and interior works at ABC Mall, serving retail fit-out and maintenance operations.",
        tags: ["Retail", "Large-Scale", "Lebanon"],
        gallery: ["/assets/workDone/ABC MALL/473737fb-1e48-40f4-ab29-ad87f1939d51.JPG"],
      },
      {
        id: "be-batroun",
        title: "Be Batroun",
        img: "/assets/workDone/BE BATROUN/IMG_2183.JPG",
        desc: "Scaffolding installation for residential works in Batroun, supporting façade and structural activities.",
        tags: ["Residential", "Coastal", "Batroun, Lebanon"],
        gallery: ["/assets/workDone/BE BATROUN/IMG_2183.JPG"],
      },
      {
        id: "centre-sofil",
        title: "Centre Sofil",
        img: "/assets/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 10.JPG",
        desc: "Scaffolding for multi-level works at Centre Sofil, enabling safe access for façade and maintenance operations.",
        tags: ["Commercial", "Mixed-Use", "Beirut, Lebanon"],
        gallery: ["/assets/workDone/CENTRE SOFIL - BEIRUT/18a0cebd-578e-43b6-bb54-8f27bfb2a48f 10.JPG"],
      },
      {
        id: "credit-libanais-hq",
        title: "Credit Libanais Headquarters",
        img: "/assets/workDone/CREDIT LIBANAIS HQ/62D2606F-BB19-47A1-85BA-E2B0DC8C7FCC.JPG",
        desc: "Scaffolding systems for façade works and technical interventions at Credit Libanais headquarters.",
        tags: ["Corporate", "High-Rise", "Lebanon"],
        gallery: ["/assets/workDone/CREDIT LIBANAIS HQ/62D2606F-BB19-47A1-85BA-E2B0DC8C7FCC.JPG"],
      },
      {
        id: "damac-towers",
        title: "Damac Towers",
        img: "/assets/workDone/DAMAC TOWERS/0f274807-0f97-472e-a538-ef3b51de2f96.JPG",
        desc: "High-rise scaffolding for structural construction and façade works at Damac Towers.",
        tags: ["High-Rise", "Residential", "Towers"],
        gallery: ["/assets/workDone/DAMAC TOWERS/0f274807-0f97-472e-a538-ef3b51de2f96.JPG"],
      },
      {
        id: "embassy-france",
        title: "Embassy of France",
        img: "/assets/workDone/EMBASSY OF FRANCE/IMG_2198.JPG",
        desc: "Scaffolding for restoration and maintenance works at the Embassy of France.",
        tags: ["Institutional", "Restoration", "Beirut, Lebanon"],
        gallery: ["/assets/workDone/EMBASSY OF FRANCE/IMG_2198.JPG"],
      },
      {
        id: "gema-center",
        title: "Gema Center",
        img: "/assets/workDone/GEMA CENTER/ed113f0d-c0ba-4642-b7c5-713530034d03 2.JPG",
        desc: "Scaffolding access for commercial and technical works at Gema Center.",
        tags: ["Commercial", "Access", "Lebanon"],
        gallery: ["/assets/workDone/GEMA CENTER/ed113f0d-c0ba-4642-b7c5-713530034d03 2.JPG"],
      },
      {
        id: "hopital-saint-georges",
        title: "Saint Georges Hospital",
        img: "/assets/workDone/HOPITAL SAINT GEORGES/Projet-3-Saint-George-Hospital-1024x768.jpg",
        desc: "Scaffolding systems for hospital façades and structural works at Saint Georges Hospital.",
        tags: ["Healthcare", "Institutional", "Lebanon"],
        gallery: ["/assets/workDone/HOPITAL SAINT GEORGES/Projet-3-Saint-George-Hospital-1024x768.jpg"],
      },
      {
        id: "ndu-barsa",
        title: "NDU Barsa Campus",
        img: "/assets/workDone/NDU BARSA/Centre sofil.zip - 7.PNG",
        desc: "Scaffolding for educational building works at the NDU Barsa campus.",
        tags: ["Education", "Campus", "Barsa, Lebanon"],
        gallery: ["/assets/workDone/NDU BARSA/Centre sofil.zip - 7.PNG"],
      },
      {
        id: "villa-audi",
        title: "Villa Audi",
        img: "/assets/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 4.PNG",
        desc: "Scaffolding for heritage restoration works at Villa Audi in Beirut.",
        tags: ["Heritage", "Restoration", "Beirut, Lebanon"],
        gallery: ["/assets/workDone/VILLA AUDI - BEIRUT/Centre sofil.zip - 4.PNG"],
      },
    ],
    []
  )

  const activeProject = projects.find((p) => p.id === activeId) || null

  return (
    <main className="bg-[#f5f7fb] text-[#1b3155]">
      <section
        className="relative w-full h-[60vh] min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/workDone/AISHTI MALL - JAL EL DIB/edit.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-[16px]">
          <h1 className="text-white font-[900] tracking-[.08em] text-[44px] md:text-[64px] uppercase">
            PROJECTS
          </h1>

          <a
            href="https://wa.me/96103322811"
            target="_blank"
            rel="noreferrer"
            className="mt-[16px] inline-flex items-center justify-center px-[22px] py-[12px] rounded-[12px] bg-[#28509E] text-white font-[800] uppercase text-[13px] border-2 border-white hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            SEND ENQUIRY OVER WHATSAPP
          </a>
        </div>
      </section>

      <section className="py-[60px]">
        <h2 className="text-center text-[#214f9b] font-[900] text-[28px] md:text-[34px] uppercase">
          ALL PROJECTS
        </h2>

        <div className="w-[90%] max-w-[1200px] mx-auto mt-[28px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-[16px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.10)]"
            >
              <img
                src={p.img}
                alt={`${p.title} Project Image`}
                className="w-full h-[220px] object-cover"
                loading="lazy"
              />

              <div className="p-[18px]">
                <h3 className="font-[900] text-[18px] text-[#1b3155]">
                  {p.title}
                </h3>

                <p className="mt-[8px] text-[14px] leading-[1.7] text-[#4a5c7a]">
                  {p.desc}
                </p>

                <div className="mt-[12px] flex flex-wrap gap-[8px]">
                  {p.tags.map((tag) => (
                    <span
                      key={`${p.id}-${tag}`}
                      className="text-[12px] px-[10px] py-[6px] rounded-full bg-[#eef3fb] text-[#214f9b] font-[800]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className="mt-[14px] w-full rounded-[12px] px-[14px] py-[10px] border-2 border-[#214f9b] text-[#214f9b] font-[900] uppercase text-[13px] hover:bg-[#214f9b] hover:text-white transition"
                >
                  View More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[30px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[16px] shadow-[0_12px_35px_rgba(0,0,0,0.10)] p-[18px] flex items-center gap-[14px] w-fit mx-auto">
            <img
              src="/assets/home.png"
              alt="Home Icon"
              className="w-[54px] h-[54px] object-contain"
            />
            <div>
              <div className="text-[#214f9b] font-[900] text-[30px] leading-[1]">
                1036
              </div>
              <div className="text-[#4a5c7a] font-[800] uppercase text-[13px] tracking-[.08em] mt-[4px]">
                Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="bg-[#eef3fb] rounded-[18px] p-[26px] md:p-[34px] text-center">
            <h2 className="text-[#214f9b] font-[900] uppercase text-[28px] md:text-[36px] leading-[1.1]">
              SUBSCRIBE TO OUR <br /> NEWSLETTER
            </h2>

            <form
              className="mt-[18px] flex flex-col sm:flex-row gap-[10px] justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                className="w-full sm:w-[360px] rounded-[12px] px-[14px] py-[12px] outline-none border-2 border-white focus:border-[#214f9b]"
                placeholder="Email"
              />
              <button
                type="submit"
                className="rounded-[12px] px-[18px] py-[12px] bg-[#214f9b] text-white font-[900] uppercase text-[13px] hover:translate-y-[-1px] transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-[99999999] bg-black/70 flex items-center justify-center px-[14px]"
          onClick={() => setActiveId(null)}
        >
          <div
            className="bg-white w-full max-w-[900px] rounded-[18px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-[18px] py-[14px] border-b border-[#eef3fb]">
              <h3 className="font-[900] text-[#1b3155] text-[18px]">
                {activeProject.title}
              </h3>
              <button
                type="button"
                className="text-[#214f9b] font-[900] text-[22px] leading-none px-[10px] py-[6px]"
                onClick={() => setActiveId(null)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="p-[16px] grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              {activeProject.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${activeProject.title} image`}
                  className="w-full h-[260px] object-cover rounded-[14px]"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Projects
