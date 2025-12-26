import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sectors } from "../data/sectors";

const SectorsBar = () => {
  // Map sectors to FontAwesome icons
  const sectorIcons = {
    "Renovation": "fa-hammer",
    "Domes & Religious Structures": "fa-church",
    "Construction": "fa-building",
    "Events & Installations": "fa-calendar-check",
    "Industrial Facilities": "fa-industry",
    "Oil & Gas Sites": "fa-fire-flame-simple",
    "Naval & Marine Projects": "fa-ship",
  };

  return (
    <section
      id="sectors-bar"
      className="py-[70px] bg-[#f5f7fb]"
      aria-label="Sectors navigation"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[40px] text-[#003A80] text-center"
        >
          SECTORS
        </motion.h2>

        {/* Horizontal Card Bar */}
        <div className="relative">
          {/* Desktop/Tablet: Single Horizontal Row - All Equal Size */}
          <div className="hidden md:flex flex-nowrap gap-[16px] lg:gap-[20px]">
            {sectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 min-w-0"
              >
                <Link
                  to="/sectors"
                  className="group block bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[28px] h-full flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-[4px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#214f9b] focus:ring-offset-2"
                  aria-label={`View ${sector.title} sector`}
                >
                  {/* Icon */}
                  <div className="mb-[16px] w-[64px] h-[64px] flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fa-solid ${sectorIcons[sector.title] || "fa-building"} text-[#214f9b] text-[40px] group-hover:text-[#ff8e26] group-hover:scale-110 transition-all duration-300`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-[Rajdhani] text-[#214f9b] text-[16px] md:text-[17px] font-[600] uppercase leading-[1.3] group-hover:text-[#ff8e26] transition-colors duration-300">
                    {sector.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll - All Equal Size */}
          <div className="md:hidden overflow-x-auto scrollbar-hide pb-[10px] -mx-[20px] px-[20px]">
            <div className="flex flex-nowrap gap-[16px]">
              {sectors.map((sector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[160px]"
                >
                  <Link
                    to="/sectors"
                    className="group block bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-[24px] h-full flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#214f9b] focus:ring-offset-2"
                    aria-label={`View ${sector.title} sector`}
                  >
                    {/* Icon */}
                    <div className="mb-[12px] w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <i
                        className={`fa-solid ${sectorIcons[sector.title] || "fa-building"} text-[#214f9b] text-[36px] group-hover:text-[#ff8e26] group-hover:scale-110 transition-all duration-300`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-[Rajdhani] text-[#214f9b] text-[14px] font-[600] uppercase leading-[1.3] group-hover:text-[#ff8e26] transition-colors duration-300">
                      {sector.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsBar;
