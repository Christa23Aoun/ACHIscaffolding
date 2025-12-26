import React from "react";

const Sectors = () => {
  const sectors = [
    {
      title: "Renovation",
      description:
        "We deliver non-invasive, adaptable access systems for renovation projects on historic buildings, museums, churches, and archaeological sites throughout Lebanon — combining safety with respect for architecture.",
    },
    {
      title: "Domes & Religious Structures",
      description:
        "Our dome scaffolding in Lebanon is trusted by architects and conservators for its structural integrity, non-invasive design, and adaptability to curved and complex forms.",
    },
    {
      title: "Construction",
      description:
        "From small residential buildings to high-rise towers and shopping centers, we support contractors with reliable scaffolding and propping services for all phases of construction.",
    },
    {
      title: "Events & Installations",
      description:
        "Temporary structures for stages, advertising billboards, exhibitions, and filming productions — with fast setup and full compliance.",
    },
    {
      title: "Industrial Facilities",
      description:
        "Tailored access systems for factories, warehouses, and production sites, including high-capacity support and elevated working platforms.",
    },
    {
      title: "Oil & Gas Sites",
      description:
        "Scaffolding for oil & gas contractors in Lebanon, designed for shutdowns, maintenance, and continuous operations in high-risk zones.",
    },
    {
      title: "Naval & Marine Projects",
      description:
        "Shoring and scaffolding systems for dry docks, ship maintenance, and offshore structures — adaptable to marine conditions and safety protocols.",
    },
  ];

  return (
    <main className="bg-[#f5f7fb] text-[#1b3155]">
      <section className="py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto text-center">
          <h1 className="text-[#214f9b] font-[900] uppercase text-[30px] md:text-[40px]">
            SECTORS
          </h1>
          <p className="mt-[10px] text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7] max-w-[820px] mx-auto">
            We provide specialized scaffolding solutions across diverse sectors, ensuring safety, reliability, and compliance for every project type.
          </p>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {sectors.map((sector, idx) => (
              <article
                key={`${sector.title}-${idx}`}
                className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[28px] flex flex-col"
              >
                <h3 className="font-[Rajdhani] text-[#214f9b] text-[22px] font-[700] mb-[12px]">
                  {sector.title}
                </h3>
                <p className="font-['Open_Sans'] text-[#4a5c7a] text-[15px] leading-[1.7] flex-1">
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[55px] bg-[#eef3fb]">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <div className="text-center md:text-left">
            <h2 className="text-[#214f9b] font-[900] uppercase text-[22px] md:text-[28px]">
              Need Scaffolding Solutions for Your Sector?
            </h2>
            <p className="mt-[8px] text-[#4a5c7a] text-[14px] leading-[1.7]">
              Share your sector-specific requirements and we'll recommend the best scaffolding system for your project.
            </p>
          </div>

          <a
            href="https://wa.me/96103322811"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-[12px] bg-[#28509E] text-white font-[900] uppercase text-[13px] border-2 border-white hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            Send us your enquiry over WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Sectors;

