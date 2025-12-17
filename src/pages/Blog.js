import React from 'react';
import { motion } from "framer-motion";
import ImageWebp from '../components/ImageWebp';

const Blog = () => {
    return (
        <div className="mt-[30px]">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="uppercase text-center text-[#003A80] font-sairaStencil text-[35px] leading-[36.4px] font-[400] md:text-[40px] 2xl:leading-[66px] xl:leading-[66px] lg:leading-[56.4px]"
            >
                Blog
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:place-items-start xl:place-items-start lg:place-items-start md:place-items-start sm:place-content-start place-items-center gap-x-8 lg:px-[50px] sm:px-[20px] px-[20px] mb-[50px] 2xl:mb-[0px] xl:mb-[0px]"
            >
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>08</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog1.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog1.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        The Evolution of Scaffolding in Lebanon: A Historical Perspective
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        This article could delve into the historical development of scaffolding in Lebanon, from traditional methods to modern structures. Highlight the significance of scaffolding in Lebanese construction, citing notable projects, technological advancements, and the role it plays in shaping the architectural landscape of the region.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>07</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog2.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog2.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        Safety is paramount in construction. This article could focus on the safety regulations, guidelines, and best practices specific to scaffolding within the Lebanese construction industry. It might cover local safety standards, equipment regulations, and steps companies take to ensure the well-being of workers and the public.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>06</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog3.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog3.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        Innovative Scaffolding Solutions for Lebanon's Unique Architectural Challenges
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        Lebanon's diverse architectural styles and terrains may pose unique challenges for construction. Discuss how innovative scaffolding solutions address these challenges. Highlight specific projects or case studies that exemplify how the company's scaffolding services adapt to the country's architectural diversity.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>08</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog1.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog1.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        The Evolution of Scaffolding in Lebanon: A Historical Perspective
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        This article could delve into the historical development of scaffolding in Lebanon, from traditional methods to modern structures. Highlight the significance of scaffolding in Lebanese construction, citing notable projects, technological advancements, and the role it plays in shaping the architectural landscape of the region.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>07</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog2.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog2.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        Safety is paramount in construction. This article could focus on the safety regulations, guidelines, and best practices specific to scaffolding within the Lebanese construction industry. It might cover local safety standards, equipment regulations, and steps companies take to ensure the well-being of workers and the public.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>06</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog3.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog3.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        Innovative Scaffolding Solutions for Lebanon's Unique Architectural Challenges
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        Lebanon's diverse architectural styles and terrains may pose unique challenges for construction. Discuss how innovative scaffolding solutions address these challenges. Highlight specific projects or case studies that exemplify how the company's scaffolding services adapt to the country's architectural diversity.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>08</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog1.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog1.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        The Evolution of Scaffolding in Lebanon: A Historical Perspective
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        This article could delve into the historical development of scaffolding in Lebanon, from traditional methods to modern structures. Highlight the significance of scaffolding in Lebanese construction, citing notable projects, technological advancements, and the role it plays in shaping the architectural landscape of the region.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>07</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog2.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog2.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        Safety is paramount in construction. This article could focus on the safety regulations, guidelines, and best practices specific to scaffolding within the Lebanese construction industry. It might cover local safety standards, equipment regulations, and steps companies take to ensure the well-being of workers and the public.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex justify-center items-start flex-col mb-[24px] lg:mb-[50px] mt-[-30px]"
                    id="PonteggiTradizionale"
                >
                    <div className='bg-[#2B529C] rounded-[10px] text-center py-[7px] px-[20px] relative top-[65px] left-[-13px]'>
                        <p className='text-[#FFF] font-saira font-[600] text-[20px]'>06</p>
                        <p className='text-[#FFF] font-saira font-[400] text-[20px]'>Nov</p>
                    </div>
                    <ImageWebp
                        srcWebp='/assets/blog/blog3.png'
                        id="switchImageAnim"
                        className="object-cover w-full h-[50%] group-hover:opacity-50 rounded-[17px]"
                        src="/assets/blog/blog3.png"
                        alt="serviceIcon"
                    />

                    <h3 className="text-[18px] font-saira font-[700] lg:leading-[28px] text-[#003A80] group-hover/parent:text-[#ff8e26] transition-colors duration-300 my-[12px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] capitalize">
                        Innovative Scaffolding Solutions for Lebanon's Unique Architectural Challenges
                    </h3>
                    <p className='text-[13px] lg:leading-[19px] text-[#003A80] font-[400] font-saira'>
                        Lebanon's diverse architectural styles and terrains may pose unique challenges for construction. Discuss how innovative scaffolding solutions address these challenges. Highlight specific projects or case studies that exemplify how the company's scaffolding services adapt to the country's architectural diversity.
                    </p>
                    <div className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                        <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                        <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Blog