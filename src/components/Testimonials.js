import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function SampleNextArrow({ className, style, onClick }) {
  return (
    <button
      type="button"
      aria-label="Next testimonial"
      className={`${className} !right-[10px] md:!right-[24px] !z-[30]`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#10095;
    </button>
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <button
      type="button"
      aria-label="Previous testimonial"
      className={`${className} !left-[10px] md:!left-[24px] !z-[30]`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#10094;
    </button>
  );
}

const Testimonials = ({ direction }) => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeReviewKey, setActiveReviewKey] = useState(null);

  const testimonials = [
    {
      key: "karim",
      name: "Karim Radi",
      rating: "★★★★★",
      text:
        "After our experience with Aashi Group on several projects — including Le Grey Hotel in Downtown Beirut and numerous private villas — we can confidently say they are among the best and most professional scaffolding contractors.",
      thumb: "/assets/reviews/karim1.jpg",
      images: ["/assets/reviews/karim1.jpg", "/assets/reviews/karim2.jpg", "/assets/reviews/karim3.jpg"],
    },
    {
      key: "kevin",
      name: "Kevin Gemayel",
      rating: "★★★★★",
      text: "Excellent work and support on the PORTSIDE project.",
      thumb: "/assets/reviews/kevin1.jpg",
      images: ["/assets/reviews/kevin1.jpg", "/assets/reviews/kevin2.jpg", "/assets/reviews/kevin3.jpg"],
    },
    {
      key: "mohammad",
      name: "Mohammad Sabbagh",
      rating: "★★★★★",
      text: "ACHI Scaffolding exceeded my expectations!",
      thumb: "/assets/reviews/mohammad1.jpg",
      images: ["/assets/reviews/mohammad1.jpg", "/assets/reviews/mohammad2.jpg", "/assets/reviews/mohammad3.jpg"],
    },
    {
      key: "michael",
      name: "Michael Jibrine",
      rating: "★★★★★",
      text:
        "We recently collaborated with Achi Scaffolding on a highly complex project that involved constructing a 33-meter high steel cross.",
      thumb: "/assets/reviews/michael1.jpg",
      images: [
        "/assets/reviews/michael1.jpg",
        "/assets/reviews/michael2.jpg",
        "/assets/reviews/michael3.jpg",
        "/assets/reviews/michael4.jpg",
      ],
    },
    {
      key: "wadih",
      name: "Wadih Karkabi",
      rating: "★★★★★",
      text:
        "Dear Mr. Barbar Achi (Achi Group), I am writing to express my heartfelt appreciation for your team's outstanding job in completing the project we entrusted to you.",
      thumb: "/assets/reviews/wadih1.jpg",
      images: ["/assets/reviews/wadih1.jpg", "/assets/reviews/wadih2.jpg", "/assets/reviews/wadih3.jpg", "/assets/reviews/wadih4.png"],
    },
    {
      key: "georges",
      name: "Georges Homsi",
      rating: "★★★★★",
      text:
        "Accurate service! Clean workers! Professional attitude! We barely recall having an experience in scaffolding with such a professional team.",
      thumb: "/assets/reviews/georges1.jpg",
      images: [
        "/assets/reviews/georges1.jpg",
        "/assets/reviews/georges2.jpg",
        "/assets/reviews/georges3.jpg",
        "/assets/reviews/georges4.jpg",
        "/assets/reviews/georges5.jpg",
      ],
    },
    {
      key: "francois",
      name: "Francois Efrem",
      rating: "★★★★★",
      text:
        "Thank you Achi group for providing us a great service of installing your scaffolding at our newly purchased villa in Daroun / Harissa (4 floors of steel scaffolding were installed) Amazing service of professionalism and skilled technical team.",
      thumb: "/assets/reviews/Francois1.jpg",
      images: [
        "/assets/reviews/Francois1.jpg",
        "/assets/reviews/Francois2.jpg",
        "/assets/reviews/Francois3.jpg",
        "/assets/reviews/Francois4.jpg",
      ],
    },
    {
      key: "ziad",
      name: "Ziad Bou Dagher",
      rating: "★★★★★",
      text: "Really appreciate the way u manage your business.",
      thumb: "/assets/reviews/ziad1.jpg",
      images: ["/assets/reviews/ziad1.jpg", "/assets/reviews/ziad2.jpg", "/assets/reviews/ziad3.jpg", "/assets/reviews/ziad4.jpg"],
    },
    {
      key: "jad",
      name: "Jad Issa",
      rating: "★★★★★",
      text: "Very professional and respectful team.",
      thumb: "/assets/reviews/jad1.jpg",
      images: ["/assets/reviews/jad1.jpg"],
    },
    {
      key: "mourad",
      name: "Mourad Achkar",
      rating: "★★★★★",
      text: "Excellent service",
      thumb: "/assets/reviews/mourad1.jpg",
      images: ["/assets/reviews/mourad1.jpg"],
    },
  ];

  const openModal = (key) => {
    setActiveReviewKey(key);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveReviewKey(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const activeReview = testimonials.find((x) => x.key === activeReviewKey);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: direction === "rtl",
    afterChange: (current) => setActiveIndex(current),
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
      { breakpoint: 900, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <>
      <section id="testimonials" className="mt-[50px] pb-[40px]">
        <div className="max-w-[1200px] mx-auto px-[16px]">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[12px] text-[#003A80] text-center"
          >
            {t("testimonials.title")}
          </motion.h2>

          <div className="relative mt-[35px]">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((r) => (
                <div key={r.key}>
                  <article className="px-[18px]">
                    <div className="bg-white rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-[34px] pt-[30px] pb-[34px] h-[610px] flex flex-col items-center text-center">
                      <div className="text-[#FFB000] text-[18px] tracking-[3px] mb-[14px]">
                        {r.rating}
                      </div>

                      <div className="h-[132px] w-full flex items-center justify-center mb-[22px]">
                        <p
                          className="font-saira text-[16px] font-[400] text-[#64748b] leading-[26px] w-full"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 4,
                            overflow: "hidden",
                          }}
                        >
                          {r.text}
                        </p>
                      </div>

                      <div className="w-full flex justify-center mt-auto">
                        <div className="group relative w-[340px] aspect-square rounded-[18px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                          <img
                            src={r.thumb}
                            alt={`Project photo by ${r.name}`}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-[1.04]"
                          />

                          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/35" />

                          <button
                            type="button"
                            onClick={() => openModal(r.key)}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-[#214f9b] font-saira font-[700] uppercase text-[12px] px-[18px] py-[10px] rounded-[12px]"
                          >
                            View More
                          </button>
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-[18px] text-[26px] text-[#214f9b] text-center font-saira font-[700]">
                      {r.name}
                    </h3>
                  </article>
                </div>
              ))}
            </Slider>

            <ul className="flex justify-center gap-[10px] mt-[28px]">
              {testimonials.map((_, idx) => (
                <li
                  key={idx}
                  className={`w-[10px] h-[10px] rounded-full cursor-pointer transition duration-300 ${
                    idx === activeIndex ? "bg-[#f59e0b]" : "bg-[#cbd5e1]"
                  }`}
                  onClick={() => sliderRef.current?.slickGoTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {modalOpen && activeReview && (
        <div
          className="fixed inset-0 bg-black/70 z-[999999] flex items-center justify-center px-[16px]"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-[980px] rounded-[18px] p-[22px] md:p-[30px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-[12px] right-[14px] text-[28px] leading-[28px] text-[#0f172a]"
              onClick={closeModal}
            >
              &times;
            </button>

            <h3 className="font-[Rajdhani] text-[28px] font-[700] uppercase text-[#003A80] mb-[8px]">
              {activeReview.name}
            </h3>

            <div className="text-[#FFB000] text-[18px] tracking-[3px] mb-[14px]">
              {activeReview.rating}
            </div>

            <p className="font-saira text-[#334155] text-[15px] leading-[26px] mb-[18px]">
              {activeReview.text}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px]">
              {activeReview.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${activeReview.name} review ${i + 1}`}
                  className="w-full h-[190px] rounded-[14px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
