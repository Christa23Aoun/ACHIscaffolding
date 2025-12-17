import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import ImageWebp from "./ImageWebp";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/assets/clients arrow right.svg" alt="arrow right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/assets/clients arrow left.svg" alt="arrow left" />
    </div>
  );
}

const Clients = ({ direction }) => {
  const { t } = useTranslation();

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
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: direction === "rtl",
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
      },
    ],
  };

  return (
    <div id="clients" className="text-center pb-[100px] pt-[100px]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[40px] leading-[1.15] text-[#003A80] text-center"
      >
        {t("clients.title")}
      </motion.h1>

      <Slider {...settings}>
        {logos.map((file, idx) => {
          const src = `/assets/clients/${file}`;
          const isGif = file.toLowerCase().endsWith(".gif");

          return (
            <div key={idx} className="flex items-center justify-center">
              {isGif ? (
                <img
                  src={src}
                  alt="companyLogo"
                  className="w-[50%] object-contain"
                />
              ) : (
                <ImageWebp
                  srcWebp={src}
                  src={src}
                  alt="companyLogo"
                  className="w-[50%] object-contain"
                />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Clients;
