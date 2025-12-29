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
        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp="/assets/shield(1)1_lossyalpha.webp" src="/assets/shield(1)1_lossyalpha.webp" alt="Expertise" className="mb-[20px] w-[60px]" />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.firstCardtitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.firstCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp="/assets/support1_lossyalpha.webp" src="/assets/support1_lossyalpha.webp" alt="Support" className="mb-[20px] w-[60px]" />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.secondCardtitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.secondCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp="/assets/technical-support1_lossyalpha.webp" src="/assets/technical-support1_lossyalpha.webp" alt="Technical" className="mb-[20px] w-[60px]" />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.thirdCardTitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.thirdCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp="/assets/inventory1_lossyalpha.webp" src="/assets/inventory1_lossyalpha.webp" alt="Inventory" className="mb-[20px] w-[60px]" />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.fourthCardTitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.fourthCardDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp srcWebp="/assets/design-team1.png" src="/assets/design-team1.png" alt="Engineering" className="mb-[20px] w-[60px]" />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px]">
            {t('whychoseus.fifthCardTitle')}
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white">
            {t('whychoseus.fifthCardDescription')}
          </p>
        </div>

        {/* ✅ NEW WHY US CARDS — ICON + TITLE CENTERED, P LEFT */}
        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp
            srcWebp="/assets/services/hard-hat.png"
            src="/assets/services/hard-hat.png"
            alt="Safety focused scaffolding team"
            className="mb-[20px] w-[60px] brightness-0 invert"
          />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px] text-center">
            Elevating Safety To A Mastery
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white leading-[1.7] text-left w-full">
            Our unwavering vision is to set a paradigm shift in the scaffolding industry—a world where safety isn't just a priority but an art form. We aspire to design scaffolding solutions that not only meet regulatory standards but transcend them.
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp
            srcWebp="/assets/services/lightbulb.png"
            src="/assets/services/lightbulb.png"
            alt="Innovative scaffolding solutions"
            className="mb-[20px] w-[60px] brightness-0 invert"
          />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px] text-center">
            Innovation At The Core
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white leading-[1.7] text-left w-full">
            We're driven to revolutionize scaffolding by developing smarter, safer and more adaptive solutions that elevate industry standards.
          </p>
        </div>

        <div className="flex flex-col items-center bg-[#00204a7a] p-[30px] rounded-[20px] h-full">
          <ImageWebp
            srcWebp="/assets/services/codesandbox.png"
            src="/assets/services/codesandbox.png"
            alt="Quality in scaffolding execution"
            className="mb-[20px] w-[60px] brightness-0 invert"
          />
          <h3 className="font-saira font-[700] text-[18px] text-white mb-[12px] text-center">
            Crafting Timeless Quality
          </h3>
          <p className="font-saira font-[400] text-[13px] text-white leading-[1.7] text-left w-full">
            We deliver scaffolding solutions that stand the test of time through precision, experience, and uncompromising quality standards.
          </p>
        </div>
      </Slider>
    </div>
  )
}

export default WhyChoseUs
