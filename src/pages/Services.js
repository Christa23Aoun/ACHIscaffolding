import React from 'react';
import { motion } from "framer-motion";
import ServiceSection from '../components/services/ServiceSection';
import WhyUsSection from '../components/services/WhyUsSection';
import Navbar from '../components/Navbar';

const Services = ({ showMenu, setshowMenu,userLang }) => {
    return (
        <div id='ServicesPage'>
            <Navbar showMenu={showMenu} setshowMenu={setshowMenu} userLang={userLang} withBg={true} />
            <div className="bg-servicePageBanner h-full bg-no-repeat bg-cover bg-center pb-[160px] pt-[160px] md:pb-[180px] md:pt-[180px]" >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pr-[10px] ltr:ml-[20px] rtl:mr-[20px] w-fit ltr:2xl:ml-[120px] ltr:xl:ml-[120px] ltr:lg:ml-[80px] ltr:md:ml-[60px] ltr:sm:ml-[60px] py-[30px] rtl:2xl:mr-[120px] rtl:xl:mr-[120px] rtl:lg:mr-[80px] rtl:md:mr-[60px] rtl:sm:mr-[60px]"
                >
                    <h1 className="uppercase font-sairaStencil text-white text-[30px] leading-[36.4px] font-[400] 2xl:text-[60px] xl:text-[55px] lg:text-[45px] md:text-[45px] sm:text-[30px] 2xl:leading-[65px] xl:leading-[65px] md:leading-[65px]">
                        Services
                    </h1>
                    <p className="pr-[10px] text-[15px] 2xl:text-[20px] xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[15px] w-fit xl:leading-[32px] lg:leading-[32px] leading-[24px] font-[400] text-white font-saira mt-[15px] sm:mt-[20px] md:mt-[30px] mb-[30px]">
                        We offer variety of services, from “x” to “y” including “z”
                    </p>
                    <a
                        href="https://wa.me/+96103322811"
                        target="_blank"
                        rel="noreferrer"
                        className="ltr:w-[inherit] rtl:w-[100%] flex justify-center px-[20px] sm:px-[30px] text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[700] leading-[29px] py-[15px] md:px-[20px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-[#28509E] rounded-[12px] uppercase hover:bg-[#25D366] border-[#FFF] hover:border-[#25D366] border-solid border-2 transition duration-500 heroBtn"
                    >
                        send enquiry over whatsapp
                    </a>
                </motion.div>
            </div>
            <ServiceSection />
            <WhyUsSection />
        </div>
    )
}

export default Services