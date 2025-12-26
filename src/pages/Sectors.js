import React from "react";
import { motion } from "framer-motion";

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
      {/* Hero Section */}
      <section className="py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#214f9b] font-[900] uppercase text-[30px] md:text-[40px]"
          >
            SECTORS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-[10px] text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7] max-w-[820px] mx-auto"
          >
            We provide specialized scaffolding solutions across diverse sectors, ensuring safety, reliability, and compliance for every project type.
          </motion.p>
        </div>
      </section>

      {/* Sectors Grid Section */}
      <section className="pb-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {sectors.map((sector, idx) => (
              <motion.article
                key={`${sector.title}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[32px] flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <h2 className="font-[Rajdhani] text-[#214f9b] text-[24px] md:text-[26px] font-[700] uppercase mb-[16px]">
                  {sector.title}
                </h2>
                <p className="font-['Open_Sans'] text-[#4a5c7a] text-[15px] leading-[1.7] flex-1">
                  {sector.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[55px] bg-[#eef3fb]">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-[#214f9b] font-[900] uppercase text-[22px] md:text-[28px]">
              Need Scaffolding Solutions for Your Sector?
            </h2>
            <p className="mt-[8px] text-[#4a5c7a] text-[14px] leading-[1.7]">
              Share your sector-specific requirements and we'll recommend the best scaffolding system for your project.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            href="https://wa.me/96103322811"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-[12px] bg-[#28509E] text-white font-[900] uppercase text-[13px] border-2 border-white hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            Send us your enquiry over WhatsApp
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default Sectors;
