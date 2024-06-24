"use client";
import Banner from "@/components/global/Banner";
import React from "react";
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
export default function LAW() {
  return (
    <>
      <Banner name="LAW" shortDesc="is an undergraduate law degree" />
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
              src="/img/banner-06.jpg"
              alt="MBA banner"
              width={445}
              height={300}
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
              className="text-3xl mb-4"
            >
              LAIPS LAW
            </motion.h2>
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              LAW is an undergraduate law degree that is generally required for
              anyone who wishes to pursue a career as a lawyer in many
              countries, including the United Kingdom, India, Australia, and
              Canada. The LLB is a four-year degree program that provides
              students with a foundational understanding of legal principles,
              concepts, and frameworks. The curriculum for an LLB course
              typically includes courses in various areas of law, such as
              constitutional law, criminal law, tort law, property law, and
              contract law, among others. Students may also take courses in
              legal writing, legal research, and other skills that are necessary
              for a career in law.
            </motion.p>
          </motion.div>
        </div>
        
      </div>
    </>
  );
}
