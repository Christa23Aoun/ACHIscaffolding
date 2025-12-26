import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import ImageWebp from "./ImageWebp";

function SampleNextArrow(props) {
  const { className, style, onClick, assetBase } = props;
  return (
    <button
      type="button"
      aria-label="Next"
      onClick={onClick}
      className={`${className} clients-arrow clients-next`}
      style={{ ...style }}
    >
      <img src={`${assetBase}/assets/clients arrow right.svg`} alt="arrow right" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, assetBase } = props;
  return (
    <button
      type="button"
      aria-label="Previous"
      onClick={onClick}
      className={`${className} clients-arrow clients-prev`}
      style={{ ...style }}
    >
      <img src={`${assetBase}/assets/clients arrow left.svg`} alt="arrow left" />
    </button>
  );
}

const Clients = ({ direction }) => {
  const { t } = useTranslation();
  const ASSET = process.env.PUBLIC_URL || "";

  const logos = [
    "abc.png",
    "aishti.webp",
    "algeco.webp",
    "ambassade.png",
    "aub.png",
    "bankaudi.png",
    "bloc.png",
    "chaddad.webp",
    "croix.webp",
    "damac.png",
    "dos-logo-light.webp",
    "general.webp",
    "hicon.png",
    "imar.png",
    "jesh.webp",
    "ka.webp",
    "kbuild.png",
    "kfoury.webp",
    "mac.webp",
    "Man.webp",
    "modec.png",
    "parissis.webp",
    "solidere.png",
    "spinneys.webp",
    "vaccum.webp",
    "zerock.gif",
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    swipeToSlide: true,
    swipe: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    rtl: direction === "rtl",
    nextArrow: <SampleNextArrow assetBase={ASSET} />,
    prevArrow: <SamplePrevArrow assetBase={ASSET} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          arrows: true,
        },
      },
      { breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  };

  return (
    <div id="clientsSection" className="text-center pb-[100px] pt-[100px]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[40px] leading-[1.15] text-[#003A80] text-center"
      >
        {t("clients.title")}
      </motion.h1>

      <div className="relative max-w-[1250px] mx-auto px-[40px] md:px-[20px]">
        <Slider {...settings}>
          {logos.map((file, idx) => {
            const src = `${ASSET}/assets/clients/${file}`;
            const isGif = file.toLowerCase().endsWith(".gif");

            return (
              <div key={idx}>
                <div className="flex items-center justify-center w-full">
                  <div className="w-full max-w-[220px] h-[120px] flex items-center justify-center mx-auto">
                    {isGif ? (
                      <img
                        src={src}
                        alt="company logo"
                        className="max-h-[110px] max-w-[200px] w-auto h-auto object-contain"
                      />
                    ) : (
                      <ImageWebp
                        srcWebp={src}
                        src={src}
                        alt="company logo"
                        className="max-h-[110px] max-w-[200px] w-auto h-auto object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        <style>{`
          #clients .slick-prev, 
          #clients .slick-next {
            width: 44px !important;
            height: 44px !important;
            z-index: 50 !important;
          }

          #clients .clients-arrow {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
          }

          #clients .clients-arrow img {
            width: 28px !important;
            height: 28px !important;
            display: block !important;
          }

          /* keep desktop arrows visible & aligned */
          #clients .slick-prev { left: 10px !important; }
          #clients .slick-next { right: 10px !important; }

          /* mobile: ensure arrows fully visible (no clipping) */
          @media (max-width: 767px) {
            #clients .slick-prev { left: -8px !important; }
            #clients .slick-next { right: -8px !important; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Clients;
