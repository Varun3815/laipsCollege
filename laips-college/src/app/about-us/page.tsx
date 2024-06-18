import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutUs";

export const metadata: Metadata = {
  title: "About: Little Angel Institute of Professional Studies",
  description:
    "The harmony of nature and the availability of modern amenities on campus",
};

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}
