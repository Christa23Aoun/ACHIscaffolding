import React, { useState } from 'react';
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";
import { useTranslation } from 'react-i18next';
// import MetaTags from 'react-meta-tags';

const Gallery = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    const { t } = useTranslation();

    return (
        <div id='gallery'>
            {/* <MetaTags>
                <title>Explore Scaffold Gallery | Achi Scaffolding</title>
                <meta name="description" content="Browse through our scaffold gallery, featuring images of our scaffolding installations, designs, and completed projects." />
                <meta property="og:title" content="Explore Scaffold Gallery | Achi Scaffolding" />
            </MetaTags> */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-[30px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[30px] font-saira font-[700] leading-[53.3px] text-[#003A80] my-[30px] lg:mt-[30px] lg:mb-[50px] lg:leading-[73.3px]"
            >
                {t('nav.gallery')}
            </motion.h1>
            <div
                className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:place-items-start xl:place-items-start lg:place-items-start md:place-items-start sm:place-content-start place-items-center gap-x-8 gap-y-8 px-[30px] sm:px-[30px] md:px-[45px] mb-[50px]"
            >
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(1)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/20230912_165441000_iOS.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(2)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/20230918_132318003_iOS.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(3)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/277806325_1024566231485943_3578252931848770518_n.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(4)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/21366849_140088179933757_8163962528685330959_o.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(5)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/DBAYEH.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(6)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC10232.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(7)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/131335709_745181546091081_9030796893974946614_n.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(8)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/253213619_932964847312749_3737623131019213491_n.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(9)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/259513852_941702983105602_5165317443361113593_n.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(10)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC10782.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(11)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC10964.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(12)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC14885.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(13)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC15653.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(14)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC16292.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(15)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC18801.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(16)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC19252.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(17)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/SDC19889.webp"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(18)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/WhatsApp Image 2023-01-05 at 8.25.30 AM.jpeg"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(19)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/WhatsApp Image 2023-01-05 at 9.28.18 AM (5) (1).jpeg"
                        alt="serviceIcon"
                    />
                </div>
                <div
                    className="flex group/parent justify-center items-start flex-col mb-[24px] lg:mb-[50px] cursor-pointer h-full"
                    id="PonteggiTradizionale"
                    onClick={() => openLightboxOnSlide(20)}
                >
                    <img
                        loading="lazy"
                        id="switchImageAnim"
                        className="object-cover w-full h-full group-hover:opacity-50 rounded-[11px]"
                        src="/assets/gallery/WhatsApp Image 2023-01-05 at 9.28.22 AM.jpeg"
                        alt="serviceIcon"
                    />
                </div>
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    '/assets/gallery/20230912_165441000_iOS.webp',
                    '/assets/gallery/20230918_132318003_iOS.webp',
                    '/assets/gallery/277806325_1024566231485943_3578252931848770518_n.webp',
                    '/assets/gallery/21366849_140088179933757_8163962528685330959_o.webp',
                    '/assets/gallery/DBAYEH.webp',
                    '/assets/gallery/SDC10232.webp',
                    '/assets/gallery/131335709_745181546091081_9030796893974946614_n.webp',
                    '/assets/gallery/253213619_932964847312749_3737623131019213491_n.webp',
                    '/assets/gallery/259513852_941702983105602_5165317443361113593_n.webp',
                    '/assets/gallery/SDC10782.webp',
                    '/assets/gallery/SDC10964.webp',
                    '/assets/gallery/SDC14885.webp',
                    '/assets/gallery/SDC15653.webp',
                    '/assets/gallery/SDC16292.webp',
                    '/assets/gallery/SDC18801.webp',
                    '/assets/gallery/SDC19252.webp',
                    '/assets/gallery/SDC19889.webp',
                    '/assets/gallery/WhatsApp Image 2023-01-05 at 8.25.30 AM.jpeg',
                    '/assets/gallery/WhatsApp Image 2023-01-05 at 9.28.18 AM (5) (1).jpeg',
                    '/assets/gallery/WhatsApp Image 2023-01-05 at 9.28.22 AM.jpeg',
                ]}
                slide={lightboxController.slide}
            />
        </div>
    )
}

export default Gallery