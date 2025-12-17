import React from 'react';
import { motion } from "framer-motion";
import ImageWebp from '../components/ImageWebp';
import { Link } from 'react-router-dom';

const BlogItem = () => {
    return (
        <div>
            <div className="bg-[#28509E] flex justify-between items-center">
                <div className='flex justify-center flex-col w-full text-center py-[40px] md:py-[0] md:text-start md:w-[50%] md:pl-[80px]'>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:text-start uppercase font-sairaStencil text-[35px] lg:text-[40px] md:text-[40px] mb-[20px] xl:mb-[30px] leading-[55px] text-white"
                    >
                        Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="font-saira text-white text-[20px] font-[700]"
                    >
                        The Evolution of Scaffolding in Lebanon: A Historical Perspective
                    </motion.p>
                </div>
                <ImageWebp
                    srcWebp='/assets/SDC12997 (1) 4.png'
                    id="switchImageAnim"
                    className="object-cover w-[50%] hidden md:block"
                    src="/assets/SDC12997 (1) 4.png"
                    alt="serviceIcon"
                />
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-around md:items-start my-[70px]'>
                <div className='m-auto w-[90%] md:w-[50%]'>
                    <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px]'>
                        <span className='font-[500] block'>Introduction:</span>
                        Lebanon's rich history and architectural heritage have significantly influenced the development of scaffolding practices in the country. From ancient construction techniques to modern-day engineering marvels, the evolution of scaffolding in Lebanon mirrors the nation's journey through time.
                    </p>
                    <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px]'>
                        <span className='font-[500] block'>Ancient Foundations:</span>
                        The roots of scaffolding in Lebanon trace back to ancient civilizations. Early structures, such as the Phoenician cities and Roman ruins, offer glimpses into the rudimentary yet innovative scaffolding methods used for monumental constructions. These historic sites stand as a testament to the ingenuity of early builders and the fundamental role of scaffolding in their endeavors.
                    </p>
                    <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px]'>
                        <span className='font-[500] block'>Medieval Innovations:</span>
                        During the medieval period, Lebanon saw the rise of innovative architectural styles that demanded more sophisticated scaffolding solutions. The influence of Islamic architecture and the construction of landmarks like the Beiteddine Palace and the Byblos Castle marked a pivotal phase in scaffolding techniques, showcasing advancements in design and construction methods.
                    </p>
                    <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px]'>
                        <span className='font-[500] block'>Colonial Influences:</span>
                        Lebanon's history of colonization by various empires also left its mark on the country's construction practices. The introduction of European building methods and materials during the Ottoman and French mandates brought new technologies, influencing scaffolding approaches and laying the groundwork for modern construction methodologies.
                    </p>
                    <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px]'>
                        <span className='font-[500] block'>Contemporary Advancements:</span>
                        In recent decades, Lebanon has witnessed a surge in construction and infrastructure development, necessitating more refined scaffolding systems. The adaptation of global standards and the incorporation of cutting-edge technology have transformed scaffolding practices, ensuring safety, efficiency, and adaptability to the diverse architectural landscape of the country.
                    </p>
                    <p className='font-saira text-[16px] font-[400] text-[#000] mb-[20px]'>
                        <span className='font-[500] block'>The Role of Scaffolding Today:</span>
                        In the present era, scaffolding stands as an indispensable component of Lebanon's construction industry. From the towering skyscrapers of Beirut to the restoration of ancient sites, scaffolding plays a pivotal role in ensuring the structural integrity of buildings while accommodating the intricacies of Lebanon's varied architectural designs.
                    </p>
                    <p className='font-saira text-[16px] font-[400] text-[#000]'>
                        <span className='font-[500] block'>Conclusion:</span>
                        The evolution of scaffolding in Lebanon reflects a dynamic journey marked by innovation, adaptation, and the fusion of traditional craftsmanship with modern engineering. Understanding this evolution is crucial in appreciating the significance of scaffolding in Lebanon's construction landscape and its role in shaping the nation's architectural identity.
                    </p>
                </div>
                <div className='w-[90%] m-auto md:m-0 mt-[25px] md:mt-[0px] md:w-[30%] 2xl:w-[20%] mr-[30px]'>
                    <div className='flex justify-center items-start'>
                        <ImageWebp
                            srcWebp='/assets/blog/sideBlogImage.png'
                            id="switchImageAnim"
                            className="object-cover mr-[15px]"
                            src="/assets/blog/sideBlogImage.png"
                            alt="serviceIcon"
                        />
                        <div className='flex justify-between items-center flex-col h-[100px]'>
                            <h3 className='text-[#003A80] font-[700] text-[13px] font-saira'>Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"</h3>
                            <div className='w-full flex justify-start items-center group/parent cursor-pointer'>
                                <span className='font-saira uppercase font-[600] text-[#003A80] text-[12px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                                <svg width="13" height="15" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start mt-[30px]'>
                        <ImageWebp
                            srcWebp='/assets/blog/sideBlogImage.png'
                            id="switchImageAnim"
                            className="object-cover mr-[15px]"
                            src="/assets/blog/sideBlogImage.png"
                            alt="serviceIcon"
                        />
                        <div className='flex justify-between items-center flex-col h-[100px]'>
                            <h3 className='text-[#003A80] font-[700] text-[13px] font-saira'>Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"</h3>
                            <div className='w-full flex justify-start items-center group/parent cursor-pointer'>
                                <span className='font-saira uppercase font-[600] text-[#003A80] text-[12px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                                <svg width="13" height="15" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start mt-[30px]'>
                        <ImageWebp
                            srcWebp='/assets/blog/sideBlogImage.png'
                            id="switchImageAnim"
                            className="object-cover mr-[15px]"
                            src="/assets/blog/sideBlogImage.png"
                            alt="serviceIcon"
                        />
                        <div className='flex justify-between items-center flex-col h-[100px]'>
                            <h3 className='text-[#003A80] font-[700] text-[13px] font-saira'>Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"</h3>
                            <div className='w-full flex justify-start items-center group/parent cursor-pointer'>
                                <span className='font-saira uppercase font-[600] text-[#003A80] text-[12px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                                <svg width="13" height="15" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-start mt-[30px]'>
                        <ImageWebp
                            srcWebp='/assets/blog/sideBlogImage.png'
                            id="switchImageAnim"
                            className="object-cover mr-[15px]"
                            src="/assets/blog/sideBlogImage.png"
                            alt="serviceIcon"
                        />
                        <div className='flex justify-between items-center flex-col h-[100px]'>
                            <h3 className='text-[#003A80] font-[700] text-[13px] font-saira'>Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon"</h3>
                            <div className='w-full flex justify-start items-center group/parent cursor-pointer'>
                                <span className='font-saira uppercase font-[600] text-[#003A80] text-[12px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                                <svg width="13" height="15" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#28509E] flex flex-col justify-center md:flex-row md:justify-around md:items-center py-[50px] md:py-[100px] px-[50px]">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-white uppercase md:block font-sairaStencil text-[35px] lg:text-[40px] md:text-[40px] leading-[55px] drop-shadow-mission text-center md:text-start"
                >
                    Subscribe to our <br /> newsletter
                </motion.h1>
                <input
                    id="contactEmail"
                    name="contactEmail"
                    type="text"
                    placeholder="Email"
                    className={`w-full md:w-[40%] mt-[15px] md:mt-[0px] py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid border-input placeholder-[#65778e] rounded-[14px]  placeholder outline-none text-[#FFFFFFCC]`}
                />
                <button
                    type="submit"
                    className="text-[15px] mt-[15px] md:mt-[0px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[500] py-[13px] px-[50px] bg-[#FF8E26] rounded-[20px] uppercase hover:bg-transparent border-solid border-2 border-[#FF8E26] transition duration-500"
                >
                    Subscribe
                </button>
            </div>
            <div id="blogSection" className="my-[70px]">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="uppercase text-center text-[#003A80] font-sairaStencil text-[35px] leading-[36.4px] font-[400] md:text-[40px] 2xl:leading-[66px] xl:leading-[66px] lg:leading-[56.4px] mb-[25px]"
                >
                    Other articles
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
                        <Link to='/blog/item' className='w-full flex justify-end items-center mt-[17px] group/parent cursor-pointer'>
                            <span className='font-saira uppercase font-[600] text-[#003A80] text-[18px] group-hover/parent:text-[#ff8e26] transition-all mr-[15px]'>READ MORE</span>
                            <svg width="16" height="22" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0004 12.1797L3.02711 24.1797L-1.22395e-07 21.3797L9.94622 12.1797L-9.26707e-07 2.97969L3.02711 0.179687L16.0004 12.1797Z" fill="#28509E" className='group-hover/parent:fill-[#ff8e26] transition-all' />
                            </svg>
                        </Link>
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
                <div className='w-full text-center mt-[30px]'>
                    <Link to='/blog' className='text-[12px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-saira font-[700] leading-[29px] py-[12px] px-[55px] bg-[#28509e] rounded-[12px] uppercase border-2 border-[#28509e] transition duration-500'>
                        Read All
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem