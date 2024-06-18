"use client";
import React from "react";
import type { Metadata } from "next";
import Banner from "@/components/global/Banner";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVarisnts = {
  initial: {
    opacity: 0,
    x: 100,
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

export const metadata: Metadata = {
  title: "About: Little Angel Institute of Professional Studies",
  description:
    "The harmony of nature and the availability of modern amenities on campus",
};

export default function AboutPage() {
  return (
    <>
      <div>
        <Banner
          name="About us"
          shortDesc="The harmony of nature and the availability of modern amenities on campus"
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
                src="/img/our-vision.png"
                alt="Our vision and mission"
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
                OUR VISION & MISSION
              </motion.h2>
              <motion.p
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-xl text-base font-light mb-3"
              >
                Our mission is to create an environment where students thrive
                not only academically but also in a nurturing atmosphere. Our
                state-of-the-art infrastructure ensures no compromise on
                quality, providing students with utmost comfort and facilities.
                We aim to instill values that prepare our students for the real
                world.
              </motion.p>
              <motion.p
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-xl text-base font-light mb-3"
              >
                Situated near the city, our institution offers a peaceful
                environment free from urban noise and distractions. We aspire
                for our students to become successful, respected individuals who
                contribute positively to society. This vision, originally
                conceived by my father and carried forward by my mother, drives
                us to offer nothing but the best for our students.
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
                className="text-3xl mb-4"
              >
                ABOUT THE INSTITUTE
              </motion.h2>
              <motion.p
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-xl text-base font-light mb-3"
              >
                Little Angels College of Professional Studies is a premier
                institution for MBA and Law in India. We offer a world-class
                education that equips students with the skills and knowledge
                needed to excel in their fields. Our highly experienced faculty
                is dedicated to student success.
              </motion.p>
              <motion.p
                variants={fadeInAnimationVarisnts}
                className="text-left lg:text-xl text-base font-light mb-3"
              >
                We are committed to providing an excellent education and
                fostering a supportive, judgment-free environment. Our cafeteria
                encourages social interaction and personal growth, while our
                faculty ensures that no student is left behind in their
                educational journey.
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
                src="/img/about-institue.jpg"
                alt="About the institute"
                width={445}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
