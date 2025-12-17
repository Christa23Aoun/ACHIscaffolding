import React from 'react';
import { motion } from "framer-motion";
import ImageWebp from '../ImageWebp';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-[30px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[30px] font-sairaStencil font-[700] leading-[53.3px] text-[#003A80] my-[30px] lg:mt-[30px] lg:mb-[50px] lg:leading-[73.3px]"
            >
                All Sevices
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 auto-rows-fr gap-x-8 lg:px-[50px] sm:px-[20px] px-[20px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px]"
            >
                <div
                    className="relative flex group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png'
                            id="switchImageAnim"
                            className="object-cover w-full"
                            src="/assets/services/361641065_768035905323121_6701313797518833287_n 2(2).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Installation and rental of scaffolding for Facades
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[60px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="relative flex group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/Suspended scaffolding 1 2(1).png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/Suspended scaffolding 1 2(1).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Installation and rental of Suspended Scaffolding
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[60px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="flex group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px] relative"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/SDC14429(1).png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/SDC14429(1).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Propping and shoring systems
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[60px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="flex relative group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/Home Banner 4 2(1).png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/Home Banner 4 2(1).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Installation and rental of scaffolding for indoor spaces
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[60px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="flex relative group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/Home Banner 1 2(1).png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/Home Banner 1 2(1).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Installation and rental of high capacity structures
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[60px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="flex relative group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/20819369_135108873765021_8187137705964148355_o (1) 2(1).png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/20819369_135108873765021_8187137705964148355_o (1) 2(1).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Adjustable props rental & Sales
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[60px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full  text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="flex relative group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Scaffolding design
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[30px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div
                    className="flex relative group/parent bg-white shadow-servicesCard pb-[35px] text-center items-start flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group w-full">
                        <ImageWebp
                            srcWebp='/assets/services/stock-photo-young-woman-using-smart-phone-social-media-concept-1573945981(1).png'
                            className="object-cover w-full h-full  "
                            src="/assets/services/stock-photo-young-woman-using-smart-phone-social-media-concept-1573945981(1).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='px-[25px] '>
                        <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                            Digital Services
                        </h3>
                        <p className='text-justify font-saira font-[400] text-[15px] pb-[30px]'>
                            Specializing in installation and rental services, we provide tailored, high-quality scaffolding systems designed for optimum safety and efficiency. Partner with us for a seamless experience in reaching new heights in your construction or renovation endeavors.
                        </p>
                    </div>
                    <div className='w-full text-center mt-[50px] absolute bottom-[30px]'>
                        <Link to='/services/serviceItem' className='text-[12px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-white font-saira font-[700] leading-[29px] py-[10px] px-[40px] bg-[#003A80] rounded-[12px] uppercase border-2 border-[#003A80] transition duration-500'>
                            Read More
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ServiceSection