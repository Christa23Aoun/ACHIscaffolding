import React from 'react'
import { motion } from 'framer-motion'
import Slider from "react-slick"
import { useTranslation } from 'react-i18next'
import ImageWebp from './ImageWebp'

const WhyChoseUs = ({ direction }) => {

  const { t } = useTranslation()

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    swipeToSlide: true,
    slidesToShow: 3,
    swipe: true,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 1000, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
    ],
    rtl: direction === 'rtl',
  }

  return (
    <div
      id="WhychoseUs"
      className="py-[60px] mt-[80px] bg-bgwhychose bg-cover bg-center shadow-choseBg"
    >

      {/* ✅ SECTION TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          font-[Rajdhani]
          text-[42px]
          font-[700]
          uppercase
          mb-[40px]
          text-white
          text-center
        "
      >
        {t('whychoseus.sectionTitle')}
      </motion.h1>

      <Slider {...settings}>

        {/* CARD */}
        <div className="flex flex-col items-center  bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp='/assets/shield(1)1_lossyalpha.webp' src="/assets/shield(1)1_lossyalpha.webp" alt='Expertise' className='mb-[20px] w-[60px]' />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.firstCardtitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.firstCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center  bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp='/assets/support1_lossyalpha.webp' src="/assets/support1_lossyalpha.webp" alt='Support' className='mb-[20px] w-[60px]' />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.secondCardtitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.secondCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center  bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp='/assets/technical-support1_lossyalpha.webp' src="/assets/technical-support1_lossyalpha.webp" alt='Technical' className='mb-[20px] w-[60px]' />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.thirdCardTitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.thirdCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center  bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp='/assets/inventory1_lossyalpha.webp' src="/assets/inventory1_lossyalpha.webp" alt='Inventory' className='mb-[20px] w-[60px]' />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.fourthCardTitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.fourthCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center  bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp='/assets/design-team1.png' src="/assets/design-team1.png" alt='Engineering' className='mb-[20px] w-[60px]' />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.fifthCardTitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.fifthCardDescription')}
          </p>
        </div>

      </Slider>
    </div>
  )
}

export default WhyChoseUs
