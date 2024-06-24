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
export default function MBA() {
  return (
    <>
      <Banner name="MBA" shortDesc="Master of Business Administration" />
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
              src="/img/banner-05.jpg"
              alt="MBA banner"
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
              className="text-3xl mb-4"
            >
              Master of Business Administration (MBA)
            </motion.h2>
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              Is a professional graduate degree that is pursued by many
              individuals from various disciplines. A recent study in the Wall
              Street Journal states that approximately 10% of all American
              college graduates have pursued an MBA degree. It is estimated that
              more than 100,000 MBA students graduate each year in the United
              States. The MBA degree is a widely recognized credential that can
              lead to career advancement and increased earning potential.
            </motion.p>
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              MBA students will be trained to make sound business decisions by
              providing the knowledge and skills needed to analyze and interpret
              information, both qualitative and quantitative, with sound
              analytical methods
            </motion.p>
            <motion.ul className="list-disc ml-5">
              <motion.li
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-lg text-sm font-light mb-3"
              >
                The program offers management courses in key business
                disciplines such as accounting, finance, marketing, operations
                and human resources.
              </motion.li>
              <motion.li
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-lg text-sm font-light mb-3"
              >
                In addition to providing a strong understanding of the
                functional areas of business, the program develops your ability
                to work in teams, to think creatively and to communicate
                effectively.
              </motion.li>
              <motion.li
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-lg text-sm font-light mb-3"
              >
                Students will be expected to complete an internship or other
                practical experience in a business organization.
              </motion.li>
            </motion.ul>
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              The MBA course is one of the most popular among post graduates.
              This is because of the many advantages that it has compared to
              other courses. The course has been specifically designed to meet
              the needs of business organizations. The course is also flexible
              and can be adapted to suit the specific needs of individual
              organizations.
            </motion.p>{" "}
            <motion.p
              variants={fadeInAnimationVarisnts}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              The MBA degree is a highly sought after credential in the business
              world. Many employers prefer to hire individuals who have earned
              an MBA because it gives them the confidence that these individuals
              have the skills and knowledge to be successful in the business
              world.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
