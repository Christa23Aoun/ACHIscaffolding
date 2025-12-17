import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import ImageWebp from './ImageWebp';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/assets/clients arrow right.svg" alt="serviceIcon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/assets/clients arrow left.svg" alt="serviceIcon" />
    </div>
  );
}

const Clients = ({direction}) => {

  const {t} = useTranslation();
  
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    slidesToShow: 5,
    swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    rtl : direction === 'rtl' ? true : false,
  };
  return (
    <div id="clients" className="text-center  pb-[100px] pt-[100px]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="uppercase text-[#003A80] font-sairaStencil md:mb-[5px] text-[35px] leading-[36.4px] font-[400] md:text-[40px] 2xl:leading-[66px] xl:leading-[66px] lg:leading-[56.4px] pb-[60px]"
      >
        {t('clients.title')}
      </motion.h1>
      <Slider {...settings}>
        <ImageWebp
          srcWebp='/assets/download(1)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(1)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/download(2)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(2)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/download(3)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(3)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/download(4)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(4)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/download(5)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(5)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/download(6)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(6)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/download(7)_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/download(7)_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp srcWebp='/assets/download.webp' alt="companyLogo" src="/assets/download.webp" className="w-[50%]" />
        <ImageWebp srcWebp='/assets/download_lossyalpha.webp' alt="companyLogo" src="/assets/download_lossyalpha.webp" className="w-[50%]" />
        <ImageWebp
          srcWebp='/assets/bluelogo_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/bluelogo_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp srcWebp='/assets/logo(1)_lossyalpha.webp' alt="companyLogo" src="/assets/logo(1)_lossyalpha.webp" className="w-[50%]" />
        <img alt="companyLogo" src="/assets/logo.gif" className="w-[50%]" />
        <ImageWebp srcWebp='/assets/logo(2)_lossyalpha.webp' alt="companyLogo" src="/assets/logo(2)_lossyalpha.webp" className="w-[50%]" />
        <ImageWebp
          srcWebp='/assets/logo_black_lossyalpha.webp'
          alt="companyLogo"
          src="/assets/logo_black_lossyalpha.webp"
          className="w-[50%]"
        />
        <ImageWebp
          srcWebp='/assets/Logo_confirm-04_ydgnbu.webp'
          alt="companyLogo"
          src="/assets/Logo_confirm-04_ydgnbu.webp"
          className="w-[50%]"
        />
      </Slider>
    </div>
  );
};

export default Clients;
