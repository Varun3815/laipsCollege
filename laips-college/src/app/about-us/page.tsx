import React from "react";
import type { Metadata } from "next";
import Banner from "@/components/global/Banner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About: Little Angel Institue Of professional Studies",
  description:
    "The harmony of nature and the availability of modern amenities on campus",
};

export default function About() {
  return (
    <div className="">
      <Banner
        name="About us"
        shortDesc="The harmony of nature and the availability of modern amenities on campus"
      />
      <div className="container">
        <div className="flex my-20 gap-12 justify-between">
          <div className="basis-1/3">
            <Image
              src="/img/our-vision.png"
              alt="our vision and mission"
              width={445}
              height={400}
            />
          </div>
          <div className="basis-2/3">
            <h2 className="text-3xl mb-4">OUR VISION & MISSION</h2>
            <p className="text-left lg:text-xl text-base font-light mb-3 ">
              Our mission to accomplish such an environment where the students
              thrive and not just on a curricular basis but also in the
              atmosphere. In our top notch infrastructure, not a single scope of
              compromise has been considered for even a second. We intend to
              provide our pupils with utmost comfort and facilities. This is not
              just handed to them on an entry, we make sure to make our students
              earn the values they would need to survive in this world.
            </p>
            <p className="text-left lg:text-xl text-base font-light mb-3">
              Our Institution is set up in the mere proximity of the city,
              isolating the students from the noise pollution and business of
              the city. We desire that our angels emerge into successful, valued
              and respectful people and sit on the thrones of the world and take
              it towards the road of betterment and development. My honorable
              father who had this vision and my lovely mother who carried it
              further have modified this concept to provide nothing but the best
              for our angels. Our buds will bloom gracefully and make you proud,
              that is all we envision.
            </p>
          </div>
        </div>

        <div className="flex  my-20 gap-12 justify-between">
          <div className="basis-2/3">
            <h2 className="text-3xl mb-4">ABOUT THE INSTITUTE</h2>
            <p className="text-left lg:text-xl text-base font-light mb-3 ">
              Little Angels College of Professional Studies is one of the
              premier institutions for MBA and Law in India. The college offers
              a world-class education to its students and provides them with the
              necessary skills and knowledge to succeed in their chosen field.
              The faculty at Little Angels College of Professional Studies is
              highly experienced and dedicated to their students. The college
              offers a wide range of courses and programs that are designed to
              meet the needs of its students.
            </p>
            <p className="text-left lg:text-xl text-base font-light mb-3">
              The college has a strong commitment to providing its students with
              the best possible education and has a well-established reputation
              for excellence. A no-judgement and social place; the cafeteria is
              made for the students to grow out of their zones and engage in
              activities with others around. Our faculty ensures that no ward of
              yours is left behind or alone in the race of educational and
              practical learning.
            </p>
          </div>
          <div className="basis-1/3">
            <Image
              src="/img/about-institue.jpg"
              alt="our vision and mission"
              width={445}
              height={400}
              className="justify-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
