import React from "react";
import ContactInfos from "./contactInfos";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ImageWebp from './ImageWebp';

const Footer = () => {

  let navigate = useNavigate();

  const handleScrollToElement = (elementId) => {
    let element = document.getElementById(elementId);
    if (element == null) {
      window.scrollTo(0, 0);
      navigate('/');
    }else{
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    // element.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    //   inline: "nearest",
    // });
  };

  const {t} = useTranslation();

  return (
    <div className="bg-[#28509E] h-full border-t-[#FFFFFF] border-t-[1px] border-solid pt-[2rem] pb-[2rem] md:pb-[3rem] md:pt-[6rem]">
      <div className="hidden md:flex lg:hidden flex-col justify-start items-start mb-[40px] ltr:ml-[15px] rtl:mr-[15px]">
        <div>
          <Link to={`/`}>
            <ImageWebp
              srcWebp='/assets/ArchiScaffoldinglogo_lossyalpha.webp'
              src="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
              alt="companyLogo"
              className="h-[60px] w-[150px] ltr:ml-[40px] rtl:mr-[40px]"
            />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row justify-evenly items-start">
        <div className="hidden lg:flex flex-col justify-start items-start">
          <div>
            <Link to={`/`}>
              <ImageWebp
                srcWebp='/assets/ArchiScaffoldinglogo_lossyalpha.webp'
                src="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
                alt="companyLogo"
                className="h-[60px] w-[150px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-center items-start mt-[25px] md:mt-[0px]">
          <Link to={`/`}>
            <p
              className={`font-[500] text-[15px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-2 px-5 md:px-0 pt-0`}
            >
              {t('nav.home')}
            </p>
          </Link>
          <p
            className={`font-[500] text-[15px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-2 px-5 md:px-0`}
            onClick={() => handleScrollToElement("aboutUs")}
          >
            {t('nav.about')}
          </p>
          <p
            className={`font-[500] text-[15px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-2 px-5 md:px-0`}
            onClick={() => handleScrollToElement("service")}
          >
            {t('nav.services')}
          </p>
          {/* <Link to={`/marketplace`}>
            <p
              className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
            >
              {t('nav.marketplace')}
            </p>
          </Link> */}
          <Link to={`/gallery`}>
            <p
              className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
            >
              {t('nav.gallery')}
            </p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="mt-[20px] md:mt-[0px]">
            <h2 className="font-sairaStencil text-white font-[600] text-[20px] uppercase tracking-[1.1px]">
              {t('footer.ourcontacts')}
            </h2>
          </div>
          <div>
            <ContactInfos />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="mt-[20px] md:mt-[0px]">
            <h2 className="font-sairaStencil text-white font-[600] text-[20px] uppercase tracking-[1.1px]">
            {t('footer.contactus')}
            </h2>
          </div>
          <div className="">
            <form>
              <div className="relative">
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  placeholder={t('inputs.emailPlaceholder')}
                  className={`w-[300px] my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid border-[##bed0ff] placeholder-[#FFFFFFCC] rounded-[5px]  placeholder outline-none text-[#FFFFFFCC]`}
                />
                <button
                  type="submit"
                  className="absolute ltr:right-2.5 rtl:left-2.5 bottom-[22px]"
                >
                  <img src="/assets/ic_baseline-send.svg" alt="serviceIcon" />
                </button>
              </div>
            </form>
          </div>
          <div className="mt-[20px] md:mt-[0px]">
            <h2 className="font-sairaStencil text-white font-[600] text-[20px] uppercase tracking-[1.1px]">
            {t('footer.followus')}
            </h2>
          </div>
          <div className="flex justify-center items-center mt-[10px]">
            <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://facebook.com/ACHISCAFF' target='_blank' rel="noreferrer">
              <img
                src="/assets/iconoir_facebook.svg"
                alt="Facebook Logo"
                className="w-[20px] h-[20px]"
              />
            </a>
            <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://www.instagram.com/achiscaffolding/' target='_blank' rel="noreferrer">
              <img
                src="/assets/mdi_instagram.svg"
                alt="Instagram Logo"
                className="w-[20px] h-[20px]"
              />
            </a>
            <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://twitter.com/AchiScaffolding' target='_blank' rel="noreferrer">
              <img
                src="/assets/ri_twitter-x-fill.svg"
                alt="Twitter Logo"
                className="w-[20px] h-[20px]"
              />
            </a>
            <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://www.linkedin.com/company/achi-scaffolding/' target='_blank' rel="noreferrer">
              <img
                src="/assets/basil_linkedin-outline.svg"
                alt="LinkedIn Logo"
                className="w-[20px] h-[20px]"
              />
            </a>
            <a className="cursor-pointer" href='https://www.tiktok.com/@achiscaffolding' target='_blank' rel="noreferrer">
              <img
                src="/assets/ph_tiktok-logo.svg"
                alt="TikTok Logo"
                className="w-[20px] h-[20px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#28509E] h-full flex md:hidden flex-col md:flex-row justify-evenly items-start pt-[2rem] pb-[2rem] md:pb-[4rem]">
        <div className="flex flex-col justify-center items-start w-full">
          <div>
            <ImageWebp
              srcWebp='/assets/ArchiScaffoldinglogo_lossyalpha.webp'
              src="/assets/ArchiScaffoldinglogo_lossyalpha.webp"
              alt="companyLogo"
              className="h-full w-[150px] ltr:pl-[20px] rtl:pr-[20px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start md:items-start px-[20px] w-full">
          <div className="flex flex-row justify-between items-start w-full py-[30px]">
            <div>
              <div className="mb-[25px] mt-[10px]">
                <h2 className="font-sairaStencil text-[#FFFFFF] font-[600] text-[20px] md:text-[30px] uppercase tracking-[1.1px]">
                  {t('footer.ourcontacts')}
                </h2>
              </div>
              <div>
                <ContactInfos />
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between items-end w-full">
                <Link to={`/`}>
                  <p
                    className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
                    
                  >
                    {t('nav.home')}
                  </p>
                </Link>
                <p
                  className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
                  onClick={() => handleScrollToElement("aboutUs")}
                >
                  {t('nav.about')}
                </p>
                <p
                  className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
                  onClick={() => handleScrollToElement("service")}
                >
                  {t('nav.services')}
                </p>
                {/* <Link to={`/marketplace`}>
                  <p
                    className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
                  >
                    {t('nav.marketplace')}
                  </p>
                </Link> */}
                <Link to={`/gallery`}>
                  <p
                    className={`font-[500] text-[18px] md:text-[18px] 2xl:text-[25px] cursor-pointer text-white hover:text-[#FA7800] transition duration-500 font-saira py-3  md:px-0`}
                  >
                    {t('nav.gallery')}
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full">
            <div className="mt-[20px] md:mt-[0px]">
              <h2 className="font-sairaStencil text-white font-[600] text-[20px] uppercase tracking-[1.1px]">
                {t('footer.contactus')}
              </h2>
            </div>
            <div className="w-full mb-[30px]">
              <form>
                <div className="relative">
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder={t('inputs.emailPlaceholder')}
                    className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid border-[#bed0ff] placeholder-[#FFFFFFCC] rounded-[5px]  placeholder outline-none text-[#FFFFFFCC]`}
                  />
                  <button
                    type="submit"
                    className="absolute ltr:right-2.5 rtl:left-2.5 bottom-[22px]"
                  >
                    <img src="/assets/ic_baseline-send.svg" alt="serviceIcon" />
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-[20px] md:mt-[0px]">
              <h2 className="font-sairaStencil text-white font-[600] text-[20px] uppercase tracking-[1.1px]">
                {t('footer.followus')}
              </h2>
            </div>
            <div className="flex justify-center items-center mt-[10px]">
              <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://facebook.com/ACHISCAFF' target='_blank' rel="noreferrer">
                <img
                  src="/assets/iconoir_facebook.svg"
                  alt="Facebook Logo"
                  className="w-[20px] h-[20px]"
                />
              </a>
              <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://www.instagram.com/achiscaffolding/' target='_blank' rel="noreferrer">
                <img
                  src="/assets/mdi_instagram.svg"
                  alt="Instagram Logo"
                  className="w-[20px] h-[20px]"
                />
              </a>
              <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://twitter.com/AchiScaffolding' target='_blank' rel="noreferrer">
                <img
                  src="/assets/ri_twitter-x-fill.svg"
                  alt="Twitter Logo"
                  className="w-[20px] h-[20px]"
                />
              </a>
              <a className="ltr:mr-[20px] rtl:ml-[20px] cursor-pointer" href='https://www.linkedin.com/company/achi-scaffolding/' target='_blank' rel="noreferrer">
                <img
                  src="/assets/basil_linkedin-outline.svg"
                  alt="LinkedIn Logo"
                  className="w-[20px] h-[20px]"
                />
              </a>
              <a className="cursor-pointer" href='https://www.tiktok.com/@achiscaffolding' target='_blank' rel="noreferrer">
                <img
                  src="/assets/ph_tiktok-logo.svg"
                  alt="TikTok Logo"
                  className="w-[20px] h-[20px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
          <p
              className={`font-[500] text-[15px] md:text-[18px] 2xl:text-[25px] text-white text-center mt-[20px] transition duration-500 font-saira py-2 px-5 md:px-0 pt-0`}
            >
              {t('nav.openTime')}
          </p>
          <p className="text-white text-[13px] text-center mt-[20px]">
          {t('nav.copyright')}
        </p>
      </div>
    </div>
  );
};

export default Footer;
