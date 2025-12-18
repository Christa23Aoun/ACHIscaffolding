import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = ({ decreaseMargin }) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactMessage: "",
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required("Name is Required"),
      contactEmail: Yup.string().email("Invalid email address").required("Email is Required"),
      contactPhone: Yup.string().required("Phone is Required"),
      contactMessage: Yup.string().required("Message is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className={`bg-[#28509E] w-full ${decreaseMargin ? "mt-[30px]" : "mt-[100px]"}`}
      id="contactForm"
    >
      <div className="max-w-[1450px] mx-auto px-[20px] py-[55px] lg:py-[65px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[70px] items-center">
          <div className="w-full">
            <motion.h3
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Rajdhani] text-[42px] font-[700] uppercase mb-[18px] text-white lg:hidden"
            >
              {t("contactForm.titleMobile")}
            </motion.h3>

            <form onSubmit={formik.handleSubmit} className="w-full">
              <input
                id="contactName"
                name="contactName"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                type="text"
                placeholder={t("inputs.namePlaceholder")}
                className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  formik.errors.contactName && formik.touched.contactName
                    ? "border-red-500 placeholder-red-500"
                    : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
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
                placeholder={t("inputs.emailPlaceholder")}
                className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  formik.errors.contactEmail && formik.touched.contactEmail
                    ? "border-red-500 placeholder-red-500"
                    : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              />
              {formik.errors.contactEmail && formik.touched.contactEmail ? (
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
                placeholder={t("inputs.phonePlaceholder")}
                className={`w-full my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  formik.errors.contactPhone && formik.touched.contactPhone
                    ? "border-red-500 placeholder-red-500"
                    : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              />
              {formik.errors.contactPhone && formik.touched.contactPhone ? (
                <p className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]">
                  *{formik.errors.contactPhone}
                </p>
              ) : null}

              <textarea
                id="contactMessage"
                name="contactMessage"
                value={formik.values.contactMessage}
                onChange={formik.handleChange}
                rows="4"
                placeholder={t("inputs.messagePlaceholder")}
                className={`w-full resize-none my-3 py-[10px] ltr:pl-[20px] rtl:pr-[20px] bg-transparent border-[1px] border-solid ${
                  formik.errors.contactMessage && formik.touched.contactMessage
                    ? "border-red-500 placeholder-red-500"
                    : "border-input placeholder-[#65778e]"
                } rounded-[14px] placeholder outline-none text-[#FFFFFFCC]`}
              ></textarea>
              {formik.errors.contactMessage && formik.touched.contactMessage ? (
                <p className="text-red-500 text-start w-full font-rubik font-[300] text-[12px] pl-[10px]">
                  *{formik.errors.contactMessage}
                </p>
              ) : null}

              <button
                type="submit"
                className="text-[15px] 2xl:text-[20px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-white font-rubik font-[500] leading-[29px] py-[10px] px-[20px] bg-[#FF8E26] rounded-[20px] uppercase hover:bg-transparent border-solid border-2 border-[#FF8E26] transition duration-500 mt-[18px] w-[55%] md:w-[40%] lg:hidden"
              >
                {t("contactForm.btnText")}
              </button>
            </form>
          </div>

          <div className="hidden lg:flex flex-col items-start justify-center pl-[180px]">
            <motion.h3
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Rajdhani] text-[50px] font-[700] uppercase mb-[18px] text-white pl-[0px]"
            >
              {t("contactForm.titleDesktop")}
            </motion.h3>

            <button
              type="button"
              onClick={formik.submitForm}
              className="text-[25px] text-white font-rubik font-[500] leading-[29px] py-[10px] px-[30px] bg-[#FF8E26] rounded-[20px] uppercase hover:bg-transparent border-solid border-2 border-[#FF8E26] transition duration-500 w-[150px] ml-[40px]"
            >
              {t("contactForm.btnText")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
