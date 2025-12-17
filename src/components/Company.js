import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ImageWebp from './ImageWebp';

const Company = () => {

  const {t} = useTranslation();
  return (
    <div
      className="mt-[40px] h-full flex flex-col md:flex-row bg-[#FAFAFA] px-[0px]"
      id="aboutUs"
    >
      <div className="w-full hidden md:block">
        <ImageWebp
          srcWebp='/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp'
          src="/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp"
          alt="Chi siamo"
          className="2xl:block hidden h-full"
        />
        <ImageWebp
          srcWebp='/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp'
          src="/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp"
          alt="Chi siamo"
          className="2xl:hidden block h-full"
        />
      </div>
      <div className="block md:hidden relative group bg-gray-900 sm:bg-gray-900">
        <ImageWebp
          srcWebp='/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp'
          src="/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp"
          alt="Chi siamo"
          className="sm:hidden opacity-50"
        />
        <ImageWebp
          srcWebp='/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp'
          src="/assets/35629365_219471271995447_497227010943221760_n2_lossyalpha.webp"
          alt="Chi siamo"
          className=" opacity-50 hidden sm:block"
        />
        {/* <img className="object-cover w-full h-full group-hover:opacity-50 rounded-[6px]" src="/assets/service1.png" alt='serviceIcon' /> */}
        <a className="block w-full h-fit" href="##">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden p-2 flex items-start">
            <div className="p-2 pt-[25px]">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-sairaStencil text-[35px] md:text-[40px] uppercase mb-[20px] text-white leading-[45px]"
              >
                {t('aboutUs.title')}
              </motion.h1>
            </div>
          </div>
        </a>
      </div>
      <div className="bg-[#28509E] pt-[30px] pb-[70px] md:py-[30px] md:pt-[45px] lg:px-[40px] md:px-[20px] px-[20px] sm:px-[30px] flex flex-col justify-start items-center  text-white text-start w-full 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] ">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden w-full text-start uppercase md:block font-sairaStencil text-[35px] lg:text-[40px] md:text-[40px] mb-[20px] xl:mb-[30px] leading-[55px]"
        >
          {t('aboutUs.titleMultiLine')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-saira text-[15px] lg:text-[17px] font-[400]"
        >
          {t('aboutUs.description')}
        </motion.p>
      </div>
    </div>
  );
};

export default Company;
