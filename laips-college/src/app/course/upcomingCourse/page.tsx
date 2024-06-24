"use client";
import React from "react";
import Banner from "@/components/global/Banner";
import { motion } from "framer-motion";
import Image from "next/image";
const fadeInAnimationVarisnts = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
const fadeInAnimationVarisnts1 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function page() {
  return (
    <>
      <Banner
        name="Upcoming Courses"
        shortDesc="Get ready to elevate your knowledge and skills with our exciting line up of upcoming Courses"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row my-20 gap-12 justify-between">
          <motion.div
            className="basis-1/3"
            variants={fadeInAnimationVarisnts1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{
              staggerChildren: 0.3,
            }}
          >
            <Image
              src="/img/banner-07.png"
              alt="Hotel Management"
              width={445}
              height={400}
            />
          </motion.div>
          <motion.div
            className="basis-2/3"
            variants={fadeInAnimationVarisnts}
            initial="initial"
            whileInView="animate"
            transition={{
              staggerChildren: 0.3,
            }}
            viewport={{
              once: true,
            }}
          >
            <motion.h2
              variants={fadeInAnimationVarisnts}
              className="text-3xl mb-4 uppercase"
            >
              Hotel Management
            </motion.h2>
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              Hotel management is a course of study that prepares individuals
              for careers in the hospitality industry. It covers a wide range of
              topics related to the operation and management of hotels, resorts,
              and other types of lodging establishments. The course typically
              includes subjects such as hotel operations, food and beverage
              management, housekeeping management, human resources management,
              marketing and sales, finance and accounting, and customer service.
              Students learn about the different departments of a hotel, the
              roles and responsibilities of staff members, and how to provide
              high-quality service to guests.
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row my-20 gap-12 justify-between">
          <motion.div
            className="basis-2/3"
            variants={fadeInAnimationVarisnts}
            initial="initial"
            whileInView="animate"
            transition={{
              staggerChildren: 0.3,
            }}
            viewport={{
              once: true,
            }}
          >
            <motion.h2
              variants={fadeInAnimationVarisnts}
              className="text-3xl mb-4 uppercase"
            >
              Ayurveda
            </motion.h2>
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              Ayurveda is a traditional system of medicine that originated in
              India over 5,000 years ago. Ayurvedic medicine focuses on the
              promotion of health and prevention of illness through a holistic
              approach that considers the mind, body, and spirit. Ayurveda
              courses are designed to provide students with a comprehensive
              understanding of Ayurvedic principles and practices. These courses
              may cover a wide range of topics, including Ayurvedic anatomy and
              physiology, principles of diagnosis, traditional Ayurvedic
              treatments, herbal medicine, and dietary practices.
            </motion.p>
          </motion.div>
          <motion.div
            className="basis-1/3"
            variants={fadeInAnimationVarisnts1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{
              staggerChildren: 0.3,
            }}
          >
            <Image
              src="/img/banner-08.png"
              alt="About the institute"
              width={445}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
