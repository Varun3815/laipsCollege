"use client";
import CarouselMain from "@/components/carousel/Carousel";
import MarqueeMain from "@/components/marquee/Marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVarisnts = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
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

export default function Home() {
  return (
    <div className="home justify-center items-center flex flex-col">
      <CarouselMain />
      <div className="container">
        <MarqueeMain />
        <motion.div
          variants={fadeInAnimationVarisnts}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{
            staggerChildren: 0.3,
          }}
          className="flex justify-center flex-col items-center my-12 "
        >
          <motion.h1
            variants={fadeInAnimationVarisnts}
            className="text-2xl uppercase mb-5 font-semibold after:border-b-2 after:border-green-700 after:w-3/4 relative after:left-7 after:-bottom-1 after:absolute"
          >
            Welcome To LAIPS
          </motion.h1>
          <motion.p
            variants={fadeInAnimationVarisnts}
            className="text-center lg:text-xl text-base font-light mb-3"
          >
            Welcome to our college located in Mhow, a serene and peaceful place
            embraced by a lush green environment. We take great pride in
            offering a safe and secure campus, ensuring that our students can
            focus on their studies and personal growth without any worries.
            Mhow&apos;s tranquil setting provides an ideal backdrop for
            learning, allowing students to concentrate and excel in their chosen
            fields.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVarisnts}
            className="text-center lg:text-xl text-base font-light"
          >
            The harmony of nature and the availability of modern amenities on
            campus create a balanced and enriching educational experience. As
            you embark on your academic journey with us, rest assured that you
            will be part of a supportive community that values your well-being
            and academic success. Join us in this beautiful and safe haven as
            you shape your future and unlock your potential.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVarisnts1}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex gap-10 my-12 flex-col-reverse md:flex-row "
        >
          <Image
            src="/img/banner-04.jpg"
            width={500}
            height={500}
            alt="What we offer"
          />
          <motion.div
            className=""
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
            <motion.h2
              variants={fadeInAnimationVarisnts1}
              className="text-xl uppercase mb-5 font-semibold "
            >
              What we Offer?
            </motion.h2>
            <motion.p
              variants={fadeInAnimationVarisnts1}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              At our college, we are proud to offer two distinguished courses -
              MBA and Law. While our admissions are currently open for MBA, we
              also extend an invitation to those aspiring to pursue Law.
            </motion.p>
            <motion.p
              variants={fadeInAnimationVarisnts1}
              className="text-left lg:text-xl text-base font-light mb-3"
            >
              Our college is located in a serene and clean environment,
              providing a peaceful atmosphere that fosters optimal learning.
              Students can study freely and immerse themselves in their academic
              pursuits. Our state-of-the-art facilities, including a
              well-equipped library and dedicated study spaces, ensure that
              students have all the resources they need to excel in their
              studies.
            </motion.p>
            <motion.p
              variants={fadeInAnimationVarisnts1}
              className="text-left lg:text-xl text-base font-light"
            >
              For those interested in pursuing Law, we welcome you to explore
              our college, where you will find a supportive and conducive
              environment to nurture your passion for the legal field.
              Admissions for both MBA and Law are open, so take this opportunity
              to join our college and embark on a rewarding educational journey.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVarisnts}
          initial="initial"
          whileInView="animate"
          transition={{
            staggerChildren: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className=" my-12  text-center bg-gray-100 p-5 "
        >
          <motion.h2
            variants={fadeInAnimationVarisnts}
            className="text-xl uppercase mb-5 font-semibold "
          >
            Our Library
          </motion.h2>
          <motion.p
            variants={fadeInAnimationVarisnts}
            className="text-center lg:text-xl text-base font-light mb-3"
          >
            We have provided the library to students as a dedicated space where
            they can study and learn. The library is equipped with a diverse
            collection of resources, including textbooks, academic journals, and
            multimedia materials, enhancing their research and academic
            projects. Our team of knowledgeable librarians is readily available
            to offer academic support and guidance, assisting students in
            information retrieval and research methodologies. Additionally, we
            have created spaces within the library to foster creativity and
            innovation, encouraging students to explore their passions and
            generate innovative ideas. Beyond academics, the library serves as a
            social hub, promoting collaboration and intellectual camaraderie
            among students from different disciplines.
          </motion.p>
          <motion.p
            variants={fadeInAnimationVarisnts}
            className="text-center lg:text-xl text-base font-light mb-3"
          >
            We have also ensured that our library embraces technology, providing
            extensive online resources for convenient access to information from
            anywhere on campus. Recognizing the importance of students&apos;
            well-being, the library offers areas for relaxation and stress
            relief, allowing them to recharge amidst their academic pursuits.
            Our goal is to empower students with knowledge and opportunities,
            making the library an indispensable part of their academic journey
            and personal growth.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
