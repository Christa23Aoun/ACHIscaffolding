import React from "react";
import { Link } from "react-router-dom";
import ImageWebp from "./ImageWebp";

const Footer = () => {
  return (
    <footer className="bg-[#28509E] border-t-[#FFFFFF] border-t-[1px] border-solid py-[60px]">
      <div className="max-w-[1250px] mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-[30px] gap-x-[60px] items-start">
          <div className="flex justify-start items-start md:pt-[30px] -ml-[60px]">
            <Link to="/">
              <ImageWebp
                srcWebp="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
                src="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
                alt="Achi Scaffolding Logo"
                className="max-w-[170px] h-auto block"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="grid grid-cols-2 gap-x-[40px]">
              <ul className="space-y-[10px]">
                <li>
                  <Link
                    to="/"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Products
                  </Link>
                </li>
              </ul>

              <ul className="space-y-[10px]">
                <li>
                  <a
                    href="/#clientsSection"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="font-saira text-white/90 text-[20px] hover:text-[#FF8A00] transition duration-200"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h4 className="font-[Rajdhani] text-[30px] font-[700] uppercase mb-[12px] text-white whitespace-nowrap tracking-[1px]">
              Our Contacts
            </h4>

            <ul className="space-y-[12px]">
              <li className="flex items-center font-saira text-white/90 text-[20px]">
                <i className="fa-solid fa-phone text-[22px] w-[26px] mr-[18px] text-white"></i>
                <a
                  href="tel:+96103322811"
                  className="hover:text-[#FF8A00] transition duration-200"
                >
                  +96103322811
                </a>
              </li>

              <li className="flex items-center font-saira text-white/90 text-[20px]">
                <i className="fa-regular fa-envelope text-[22px] w-[26px] mr-[18px] text-white"></i>
                <a
                  href="mailto:achi.gr@hotmail.com"
                  className="hover:text-[#FF8A00] transition duration-200"
                >
                  achi.gr@hotmail.com
                </a>
              </li>

              <li className="flex items-center font-saira text-white/90 text-[20px]">
                <i className="fa-solid fa-location-dot text-[22px] w-[26px] mr-[18px] text-white"></i>
                <span>Lebanon</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h4 className="font-[Rajdhani] text-[30px] font-[700] uppercase mb-[12px] text-white whitespace-nowrap tracking-[1px]">
              Follow us
            </h4>

            <div className="flex gap-[20px] mt-[14px] items-center">
              <a
                href="https://www.facebook.com/ACHISCAFF"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#FF8A00] transition duration-200"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-[22px]"></i>
              </a>

              <a
                href="https://www.instagram.com/achiscaffoldinglb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#FF8A00] transition duration-200"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-[22px]"></i>
              </a>

              <a
                href="https://x.com/AchiScaffolding"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#FF8A00] transition duration-200"
                aria-label="X"
              >
                <i className="fa-brands fa-x-twitter text-[22px]"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/achi-scaffolding/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#FF8A00] transition duration-200"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-[22px]"></i>
              </a>

              <a
                href="https://www.tiktok.com/@achiscaffolding"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#FF8A00] transition duration-200"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok text-[22px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
