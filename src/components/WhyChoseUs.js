import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import ImageWebp from './ImageWebp';


const WhyChoseUs = ({direction}) => {
    
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        slidesToShow: 3,
        swipe: true,
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
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
        rtl : direction === 'rtl' ? true : false,
    };

    const {t} = useTranslation();

    return (
        <div className='py-[40px] mt-[80px] sm:py-[40px] md:py-[60px] bg-bgwhychose bg-cover bg-center shadow-choseBg' id='WhychoseUs'>
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className='text-center mb-[40px] sm:mb-[40px] md:mb-[60px] text-[30px] 2xl:text-[40px] xl:text-[40px] lg:text-[35px] md:text-[40px] sm:text-[30px] font-sairaStencil font-[600px] leading-[53.3px] text-[#FFFFFF] lg:leading-[73.3px] uppercase'
            >
                {t('whychoseus.sectionTitle')}
            </motion.h1>
            <Slider {...settings}>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col w-full bg-[#00204a7a] p-[20px] md:p-[40px] xl:px-[50px] rounded-[20px] h-full' dir={direction}>
                    <ImageWebp srcWebp='/assets/shield(1)1_lossyalpha.webp' src="/assets/shield(1)1_lossyalpha.webp" alt='Expertise' className='mb-[20px] w-[60px]' />
                    <div className='flex flex-row justify-center items-start mb-[20px]'>
                        <h3 className='font-saira font-[700] text-[18px] md:text-[18px] text-white'>{t('whychoseus.firstCardtitle')}</h3>
                    </div>
                    <p className='font-saira font-[400] text-[13px] xl:text-[13px] text-white text-start'>{t('whychoseus.firstCardDescription')}</p>
                </div>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col w-full bg-[#00204a7a] p-[20px] md:p-[40px] xl:px-[50px] rounded-[20px]  h-full' dir={direction}>
                    <ImageWebp srcWebp='/assets/support1_lossyalpha.webp' src="/assets/support1_lossyalpha.webp" alt='client' className='mb-[20px] w-[60px]' />
                    <div className='flex flex-row justify-center items-start mb-[20px]'>
                         <h3 className='font-saira font-[700] text-[18px] md:text-[18px] text-white'>{t('whychoseus.secondCardtitle')}</h3>
                    </div>
                    <p className='font-saira font-[400] text-[13px] xl:text-[13px] text-white text-start'>{t('whychoseus.secondCardDescription')}</p>
                </div>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col w-full bg-[#00204a7a] p-[20px] md:p-[40px] xl:px-[50px] rounded-[20px]  h-full' dir={direction}>
                    <ImageWebp srcWebp='/assets/technical-support1_lossyalpha.webp' src="/assets/technical-support1_lossyalpha.webp" alt='Support' className='mb-[20px] w-[60px]'  />
                    <div className='flex flex-row justify-center items-start  mb-[20px]'>
                        <h3 className='font-saira font-[700] text-[18px] md:text-[18px] text-white'>{t('whychoseus.thirdCardTitle')}</h3>
                    </div>
                    <p className='font-saira font-[400] text-[13px] xl:text-[13px] text-white text-start'>{t('whychoseus.thirdCardDescription')}</p>
                </div>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col w-full bg-[#00204a7a] p-[20px] md:p-[40px] xl:px-[50px] rounded-[20px]  h-full' dir={direction}>
                    <ImageWebp srcWebp='/assets/inventory1_lossyalpha.webp' src="/assets/inventory1_lossyalpha.webp" alt='Inventory' className='mb-[20px] w-[60px]' />
                    <div className='flex flex-row justify-center items-start  mb-[20px]'>
                        <h3 className='font-saira font-[700] text-[18px] md:text-[18px] text-white'>{t('whychoseus.fourthCardTitle')}</h3>
                    </div>
                    <p className='font-saira font-[400] text-[13px] xl:text-[13px] text-white text-start'>{t('whychoseus.fourthCardDescription')}</p>
                </div>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col w-full bg-[#00204a7a] p-[20px] md:p-[40px] xl:px-[50px] rounded-[20px]  h-full' dir={direction}>
                    <ImageWebp srcWebp='/assets/design-team1.png' src="/assets/design-team1.png" alt='Engineering' className='mb-[20px] w-[60px]' />
                    <div className='flex flex-row justify-center items-start mb-[20px]'>
                        <h3 className='font-saira font-[700] text-[18px] md:text-[18px] text-white'>{t('whychoseus.fifthCardTitle')}</h3>
                    </div>
                    <p className='font-saira font-[400] text-[13px] xl:text-[13px] text-white text-start'>{t('whychoseus.fifthCardDescription')}</p>
                </div>
            </Slider>
            {/* <div className='grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-start gap-x-8 px-[20px] md:px-[45px] sm:px-[100px] mb-[20px] gap-y-6 lg:gap-y-10'>
            </div> */}
        </div>
    )
}

export default WhyChoseUs