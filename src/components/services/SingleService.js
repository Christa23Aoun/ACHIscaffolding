import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ImageWebp from '../ImageWebp';
import ContactForm from '../ContactForm';

const SingleService = () => {
  return (
    <div>
    <div className="bg-[#28509E] flex flex-col md:flex-row justify-between items-center">
        <div className='flex justify-center flex-col w-full text-start py-[100px] md:py-[0] md:w-[50%] pl-[20px] md:pl-[80px]'>
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:text-start capitalize font-[300] font-saira text-[20px] lg:text-[30px] md:text-[30px] mb-[10px] leading-[55px] text-white"
            >
                Services
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-saira text-white text-[27px] font-[700] lg:pr-[100px]"
            >
                Installation and Rental of scaffolding for facades
            </motion.p>
        </div>
        <ImageWebp
            srcWebp='/assets/services/361641065_768035905323121_6701313797518833287_n 2(3).png'
            id="switchImageAnim"
            className="object-cover w-[50%] hidden md:block"
            src="/assets/services/361641065_768035905323121_6701313797518833287_n 2(3).png"
            alt="serviceIcon"
        />
        <ImageWebp
            srcWebp='/assets/services/Group 49214.png'
            id="switchImageAnim"
            className="object-cover w-full block md:hidden"
            src="/assets/services/Group 49214.png"
            alt="serviceIcon"
        />
    </div>
    <div className='flex flex-col justify-center items-center my-[70px]'>
        <div className='px-[20px] md:px-[120px]'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <ImageWebp
                    srcWebp='/assets/services/Suspended scaffolding 1 2(2).png'
                    id="switchImageAnim"
                    className="object-cover w-full md:mr-[50px]"
                    src="/assets/services/Suspended scaffolding 1 2(2).png"
                    alt="serviceIcon"
                />
                <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px] w-full mt-[20px] md:mt-[0]'>
                    <span className='font-[700] text-[25px] mb-[10px] font-saira block'>Category 1</span>
                    Lebanon's rich history and architectural heritage have significantly influenced the development of scaffolding practices in the country. From ancient construction techniques to modern-day engineering marvels, the evolution of scaffolding in Lebanon mirrors the nation's journey through time.
                    <br />
                    Lebanon's rich history and architectural heritage have significantly influenced the development of scaffolding practices in the country. From ancient construction techniques to modern-day engineering marvels, the evolution of scaffolding in Lebanon mirrors the nation's journey through time.
                </p>
            </div>
        </div>
        <div className='px-[20px] md:px-[120px] mt-[10px] md:mt-[80px]'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px] w-full md:mr-[50px] mt-[20px] md:mt-[0]'>
                    <span className='font-[700] text-[25px] mb-[10px] font-saira block'>Category 1</span>
                    Lebanon's rich history and architectural heritage have significantly influenced the development of scaffolding practices in the country. From ancient construction techniques to modern-day engineering marvels, the evolution of scaffolding in Lebanon mirrors the nation's journey through time.
                    <br />
                    Lebanon's rich history and architectural heritage have significantly influenced the development of scaffolding practices in the country. From ancient construction techniques to modern-day engineering marvels, the evolution of scaffolding in Lebanon mirrors the nation's journey through time.
                </p>
                <ImageWebp
                    srcWebp='/assets/services/Suspended scaffolding 1 2(2).png'
                    id="switchImageAnim"
                    className="object-cover w-full"
                    src="/assets/services/Suspended scaffolding 1 2(2).png"
                    alt="serviceIcon"
                />
            </div>
        </div>
    </div>
    <div id="blogSection" className="mt-[50px] mb-[0px]">
        <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="capitalize text-center text-[#003A80] font-saira text-[35px] leading-[36.4px] font-[700] md:text-[40px] 2xl:leading-[66px] xl:leading-[66px] lg:leading-[56.4px] mb-[25px]"
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
                <Link to='/services/serviceItem'>
                    <div
                        className="relative flex group/paren pb-[35px] text-start md:text-center items-start flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Installation and rental of scaffolding for Facades
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>
                    <div
                        className="relative flex group/paren pb-[35px] text-start md:text-center items-start flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Installation and rental of Suspended Scaffolding
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>                    
                    <div
                        className="flex relative group/parent pb-[35px] text-start md:text-center items-start flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Propping and shoring systems
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>
                    <div
                        className="flex relative group/parent pb-[35px] text-start md:text-center items-start flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Installation and rental of scaffolding for indoor spaces
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>
                    <div
                        className="flex relative group/parent pb-[35px] text-start md:text-center items-start flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Installation and rental of high capacity structures
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>
                    <div
                        className="flex relative group/parent pb-[35px] text-start md:text-center items-start md:items-center flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Adjustable props rental & Sales
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>
                    <div
                        className="flex group/parent pb-[35px] text-start md:text-center items-start md:items-center flex-col mb-[24px] lg:mb-[50px]"
                        id="PonteggiTradizionale"
                    >
                        <div className="group w-full">
                            <ImageWebp
                                srcWebp='/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png'
                                className="object-cover w-full h-full  "
                                src="/assets/services/stock-photo-engineers-are-helping-to-design-work-on-blueprints-and-collaborate-on-structural-analyzing-of-1724713963 1.png"
                                alt="serviceIcon"
                            />
                        </div>
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Scaffolding design
                            </h3>
                        </div>
                    </div>
                </Link>
                <Link to='/services/serviceItem'>
                    <div
                        className="flex relative group/parent pb-[35px] text-start md:text-center items-start md:items-center flex-col mb-[24px] lg:mb-[50px]"
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
                        <div className='md:px-[25px] '>
                            <h3 className="text-[20px] font-saira font-[600] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[20px] capitalize">
                                Digital Services
                            </h3>
                        </div>
                    </div>
                </Link>
            </motion.div>
    </div>
    <ContactForm decreaseMargin={true} /> 
</div>
  )
}

export default SingleService