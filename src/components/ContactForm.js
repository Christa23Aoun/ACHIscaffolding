import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactForm = ({decreaseMargin}) => {

  const {t} = useTranslation();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactMessage: "",
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required("Name is Required"),
      contactEmail: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      contactPhone: Yup.string().required("Phone is Required"),
      contactMessage: Yup.string().required("Message is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={`bg-[#28509E] h-full flex flex-row justify-between items-start ${decreaseMargin ? 'mt-[30px]' : 'mt-[100px]'}`} id="contactForm">
            <div className="flex flex-col justify-center items-start lg:items-center mx-auto py-[45px] lg:px-[10px] w-[100%] md:w-[100%] lg:w-[100%] ">
        <motion.h3
            initial={{ y: -300 , opacity: 0 }}
            transition={{duration : 1.2}}
            whileInView={{ opacity : 1 , y:0 }} 
            viewport={{once : true}} 
            className="uppercase px-[20px] pb-[20px] lg:px-[0px] font-sairaStencil text-white text-[35px] leading-[36.4px] font-[400] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[35px] 2xl:leading-[66px] xl:leading-[66px] lg:leading-[56.4px] block lg:hidden">
          {t('contactForm.titleMobile')}
        </motion.h3>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-start w-full md:w-[60%] lg:w-[100%] px-[10px] lg:p-[80px]"
        >
          <input
            id="contactName"
            name="contactName"
            value={formik.values.contactName}
            onChange={formik.handleChange}
            type="text"
            placeholder={t('inputs.namePlaceholder')}
            className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${formik.errors.contactName && formik.touched.contactName  ? 'border-red-500 placeholder-red-500' : 'border-input placeholder-[#65778e]'} rounded-[14px]  placeholder outline-none text-[#FFFFFFCC]`}
          />
          {formik.errors.contactName && formik.touched.contactName ? (
            <p className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]">
              *{formik.errors.contactName}
            </p>
          ) : null}
          <input
            id="contactEmail"
            name="contactEmail"
            value={formik.values.contactEmail}
            onChange={formik.handleChange}
            type="email"
            placeholder={t('inputs.emailPlaceholder')}
            className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${formik.errors.contactEmail && formik.touched.contactEmail  ? 'border-red-500 placeholder-red-500' : 'border-input placeholder-[#65778e]'} rounded-[14px]  placeholder outline-none text-[#FFFFFFCC]`}
          />
          {formik.errors.contactEmail && formik.touched.contactEmail  ? (
            <p className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]">
              *{formik.errors.contactEmail}
            </p>
          ) : null}
          <input
            id="contactPhone"
            name="contactPhone"
            value={formik.values.contactPhone}
            onChange={formik.handleChange}
            type="text"
            placeholder={t('inputs.phonePlaceholder')}
            className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${formik.errors.contactPhone && formik.touched.contactPhone  ? 'border-red-500 placeholder-red-500' : 'border-input placeholder-[#65778e]'} rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
          />
          {formik.errors.contactPhone && formik.touched.contactPhone  ? (
            <p className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]">
              *{formik.errors.contactPhone}
            </p>
          ) : null}
          <textarea
            id="contactMessage"
            name="contactMessage"
            value={formik.values.contactMessage}
            onChange={formik.handleChange}
            rows="5"
            placeholder={t('inputs.messagePlaceholder')}
            className={`w-full resize my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${formik.errors.contactMessage && formik.touched.contactMessage  ? 'border-red-500 placeholder-red-500' : 'border-input placeholder-[#65778e]'} rounded-[14px]  placeholder outline-none text-[#FFFFFFCC]`}
          ></textarea>
          {formik.errors.contactMessage && formik.touched.contactMessage  ? (
            <p className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]">
              *{formik.errors.contactMessage}
            </p>
          ) : null}
          <button
            type="submit"
            className="text-[15px] 2xl:text-[20px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-rubik font-[500] leading-[29px] py-[10px] px-[20px] sm:py-[10px] sm:px-[20px] md:py-[10px] md:px-[20px] lg:py-[10px] lg:px-[30px] bg-[#FF8E26] rounded-[20px] uppercase hover:bg-transparent border-solid border-2 border-[#FF8E26] transition duration-500 mt-[20px] w-[50%] xl:w-[20%] lg:w-[30%] md:w-[30%] sm:w-[50%]"
          >
            {t('contactForm.btnText')}
          </button>
        </form>
      </div>
      <div className="hidden lg:block px-[30px] pt-[125px] lg:w-[50%]">
          <motion.h3
              initial={{ y: -300 , opacity: 0 }}
              transition={{duration : 1.2}}
              whileInView={{ opacity : 1 , y:0 }} 
              viewport={{once : true}} 
              className="uppercase font-sairaStencil text-white text-[35px] leading-[36.4px] font-[400] 2xl:text-[45px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[35px] 2xl:leading-[87px] xl:leading-[53px] lg:leading-[53px] hidden lg:block">
            {t('contactForm.titleDesktop')}
          </motion.h3> 
      </div>
    </div>
  );
};

export default ContactForm;
