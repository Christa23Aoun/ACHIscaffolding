import React from 'react';
import { motion } from "framer-motion";
import ImageWebp from '../ImageWebp';

const WhyUsSection = () => {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-[30px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[30px] font-sairaStencil font-[700] leading-[53.3px] text-[#003A80] my-[30px] lg:mt-[30px] lg:mb-[50px] lg:leading-[73.3px]"
            >
                Why us
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 auto-rows-fr gap-x-16 lg:px-[100px] sm:px-[20px] px-[20px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px]"
            >
                <div
                    className="relative flex group/parent pb-[35px] text-center items-center flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group ">
                        <ImageWebp
                            srcWebp='/assets/services/hard-hat.png'
                            id="switchImageAnim"
                            className="object-cover w-[90px]"
                            src="/assets/services/hard-hat.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className=''>
                        <h3 className="text-[22px] font-saira font-[700] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[22px] capitalize drop-shadow-mission">
                            Elevating Safety to a Mastery
                        </h3>
                        <p className='text-justify text-[#111827] font-saira font-[400] text-[15px] drop-shadow-mission'>
                            Our unwavering vision is to set a paradigm shift in the scaffolding industry—a world where safety isn't just a priority but an art form. We aspire to design scaffolding solutions that not only meet regulatory standards but transcend them, ensuring not just project success but the well-being of every worker.
                        </p>
                    </div>
                </div>
                <div
                    className="relative flex group/parent pb-[35px] text-center items-center flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group ">
                        <ImageWebp
                            srcWebp='/assets/services/lightbulb.png'
                            id="switchImageAnim"
                            className="object-cover w-[90px]"
                            src="/assets/services/lightbulb.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className=''>
                        <h3 className="text-[22px] font-saira font-[700] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[22px] capitalize drop-shadow-mission">
                            Innovation at the Core
                        </h3>
                        <p className='text-justify text-[#111827] font-saira font-[400] text-[15px] drop-shadow-mission'>
                            We're not content with industry norms; we're driven to revolutionize them. Our vision is to lead the charge in developing cutting-edge technologies and methodologies that revolutionize scaffolding—making it more agile, sustainable, and adaptive than ever before.                        
                        </p>
                    </div>
                </div>
                <div
                    className="relative flex group/parent pb-[35px] text-center items-center flex-col mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group ">
                        <ImageWebp
                            srcWebp='/assets/services/codesandbox.png'
                            id="switchImageAnim"
                            className="object-cover w-[90px]"
                            src="/assets/services/codesandbox.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className=''>
                        <h3 className="text-[22px] font-saira font-[700] lg:leading-[32.18px] text-[#28509E] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[22px] capitalize drop-shadow-mission">
                            Crafting Timeless Quality
                        </h3>
                        <p className='text-justify text-[#111827] font-saira font-[400] text-[15px] drop-shadow-mission'>
                            Our vision isn't just to create scaffolding; it's to sculpt structures that defy time. We strive to provide scaffolding solutions that not only secure your project but elevate it to a level of craftsmanship that stands as a testament to quality.
                        </p>
                    </div>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 auto-rows-fr gap-x-6 lg:px-[80px] sm:px-[20px] px-[20px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px]"
            >
                <div
                    className="relative flex flex-row px-[20px] md:px-0 justify-start md:justify-center items-center group/parent pb-[35px] text-center mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group mr-[20px]">
                        <ImageWebp
                            srcWebp='/assets/services/users.png'
                            id="switchImageAnim"
                            className="object-cover w-full"
                            src="/assets/services/users.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='text-start'>
                        <h3 className="text-[35px] font-saira font-[700] lg:leading-[32.18px] text-[#00204A] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[25px] capitalize">
                            460
                        </h3>
                        <p className='text-justify text-[#00204A] font-saira font-[400] text-[18px] md:text-[20px]'>
                            happy Clients
                        </p>
                    </div>
                </div>
                <div
                    className="relative flex flex-row px-[20px] md:px-0 justify-start md:justify-center items-center group/parent pb-[35px] text-center mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group mr-[20px]">
                        <ImageWebp
                            srcWebp='/assets/services/home.png'
                            id="switchImageAnim"
                            className="object-cover w-full"
                            src="/assets/services/home.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='text-start'>
                        <h3 className="text-[35px] font-saira font-[700] lg:leading-[32.18px] text-[#00204A] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[25px] capitalize">
                            10
                        </h3>
                        <p className='text-justify text-[#00204A] font-saira font-[400] text-[18px] md:text-[20px]'>
                            Years of experience
                        </p>
                    </div>
                </div>
                <div
                    className="relative flex flex-row px-[20px] md:px-0 justify-start md:justify-center items-center group/parent pb-[35px] text-center mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group mr-[20px]">
                        <ImageWebp
                            srcWebp='/assets/services/trophy(2).png'
                            id="switchImageAnim"
                            className="object-cover w-full"
                            src="/assets/services/trophy(2).png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='text-start'>
                        <h3 className="text-[35px] font-saira font-[700] lg:leading-[32.18px] text-[#00204A] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[25px] capitalize">
                            13
                        </h3>
                        <p className='text-justify text-[#00204A] font-saira font-[400] text-[18px] md:text-[20px]'>
                            Awards winning
                        </p>
                    </div>
                </div>
                <div
                    className="relative flex flex-row px-[20px] md:px-0 justify-start md:justify-center items-center group/parent pb-[35px] text-center mb-[24px] lg:mb-[50px]"
                    id="PonteggiTradizionale"
                >
                    <div className="relative group mr-[20px]">
                        <ImageWebp
                            srcWebp='/assets/services/messages-square.png'
                            id="switchImageAnim"
                            className="object-cover w-full"
                            src="/assets/services/messages-square.png"
                            alt="serviceIcon"
                        />
                    </div>
                    <div className='text-start'>
                        <h3 className="text-[35px] font-saira font-[700] lg:leading-[32.18px] text-[#00204A] mt-[16px] mb-[20px] lg:mt-[22px] lg:mb-[15px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[25px] capitalize">
                            350
                        </h3>
                        <p className='text-justify text-[#00204A] font-saira font-[400] text-[18px] md:text-[20px]'>
                            Consultations
                        </p>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default WhyUsSection