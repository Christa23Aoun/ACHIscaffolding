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
      className={`${className} !flex !items-center !justify-center !w-[44px] !h-[44px] !rounded-full !bg-white/90 !shadow-md hover:!bg-white transition`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src={`${assetBase}/assets/clients arrow right.svg`}
        alt="arrow right"
        className="w-[18px] h-[18px]"
      />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, assetBase } = props;
  return (
    <button
      type="button"
      aria-label="Previous"
      className={`${className} !flex !items-center !justify-center !w-[44px] !h-[44px] !rounded-full !bg-white/90 !shadow-md hover:!bg-white transition`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src={`${assetBase}/assets/clients arrow left.svg`}
        alt="arrow left"
        className="w-[18px] h-[18px]"
      />
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
    swipe: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    nextArrow: <SampleNextArrow assetBase={ASSET} />,
    prevArrow: <SamplePrevArrow assetBase={ASSET} />,
    rtl: direction === "rtl",
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div id="clientsSection" className="text-center pt-[80px] pb-[10px]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-[Rajdhani] text-[38px] md:text-[42px] font-[700] uppercase mb-[26px] leading-[1.15] text-[#003A80] text-center"
      >
        {t("clients.title")}
      </motion.h1>

      <div className="max-w-[1100px] mx-auto px-[14px] pt-[10px]">
        <Slider {...settings}>
          {logos.map((file, idx) => {
            const src = `${ASSET}/assets/clients/${file}`;
            const isGif = file.toLowerCase().endsWith(".gif");

            return (
              <div key={idx}>
                <div className="flex justify-center items-center w-full py-[10px]">
                  {isGif ? (
                    <img
                      src={src}
                      alt="company logo"
                      className="max-w-[210px] w-full object-contain mx-auto"
                    />
                  ) : (
                    <ImageWebp
                      srcWebp={src}
                      src={src}
                      alt="company logo"
                      className="max-w-[210px] w-full object-contain mx-auto"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
