import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';

const Testimonials = ({direction}) => {

  const {t} = useTranslation();

  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    slidesToShow: 3,
    swipe: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    rtl : direction === 'rtl' ? true : false,
    afterChange: (current) => {
      document.querySelectorAll('.slick-slide').forEach((el) => {
        if (+el.getAttribute('data-index') === current) {
          el.classList.add('myslick-current');
        }else{
          el.classList.remove('myslick-current');
        }
      });
    },
  };
  return (
    <div id="testimonials" className="mt-[50px]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="uppercase text-center text-[#003A80] font-sairaStencil md:mb-[5px] text-[35px] leading-[36.4px] font-[400] md:text-[40px] 2xl:leading-[66px] xl:leading-[66px] lg:leading-[56.4px] pb-[35px]"
      >
        {t('testimonials.title')}
      </motion.h1>
      <Slider {...settings}>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  Thank you Achi group for providing us a great service of
                  installing your scaffolding at our newly purchased villa in
                  Daroun / Harissa (4 floors of steel scaffolding were
                  installed)...
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Francois Efrem
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  Best in price, always on time and offers a very professional
                  service
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Elie Aoun
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  Strong Company as Coordination / Action & Reaction.
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Aboude Tabbal
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  I have been working with Aachi group since 2005 and i have
                  been always impressed with their professionalism in terms of
                  execution quality and punctuality...
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Robert Moukarzel
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  I have worked with Achi Scaffolding several times over the
                  passed years. I have found them to be very professional with
                  their distinguished services, flexibility, and their positive
                  attitude...
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Tony Hawat
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  Working with ACHI Scaffolding owned by Engineer Barbar Achi
                  was a very good experience. All workers in this company are
                  very professional and surprisingly fast...
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Alain Eid
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  Professional and High end service
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Jihad Saad
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                Excellent service
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Mourad Achkar
          </h3>
        </div>
        <div>
          <figure className="snip1533 w-full inline-block text-[16px] mt-[35px] mx-[10px] mb-[10px] relative text-center shadow-testi">
            <figcaption>
              <blockquote className="h-[150px] flex justify-center items-center">
                <p className="text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-[400] text-center font-saira color-[#666]">
                  Professional and fast service!
                </p>
              </blockquote>
            </figcaption>
            <div className="arrowTesti"></div>
          </figure>
          <h3 className="text-[25px] text-[#28509E] text-center font-saira font-[500] mt-[20px]">
            Marissa Tawer
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
