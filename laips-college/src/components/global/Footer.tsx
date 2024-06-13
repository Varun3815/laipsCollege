import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-300 bg-gray-100">
      <div className="container flex justify-between items-start py-3 mt-5 flex-col md:flex-row">
        <div className="">
          <h4
            className="block antialiased tracking-normal font-sans text-xl font-bold leading-snug text-inherit mb-2  "
            style={{ color: "#28186b" }}
          >
            LITTLE ANGEL INSTITUTE OF PROFESSIONAL STUDIES
          </h4>
          <p className="md:w-3/4 lg:w-full">
            One of the premier institutions for MBA and Law in India
          </p>
          <div className="flex items-center my-5 ">
            <Link href="#">
              <FaFacebook className="mr-4  text-2xl hover:text-blue-800 hover:cursor-pointer" />
            </Link>
            <Link href="#">
              <FaTwitter className="mr-4 text-2xl hover:text-blue-800 hover:cursor-pointer" />
            </Link>
            <Link href="#">
              <FaInstagram className="mr-4 text-2xl hover:text-blue-800 hover:cursor-pointer" />
            </Link>
            <Link href="#">
              <FaLinkedin className="mr-4 text-2xl hover:text-blue-800 hover:cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="">
          <div className="pt-6 md:ml-auto md:px-4 md:pt-0">
            <span className="text-md mb-4 block font-medium uppercase">
              Explore
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  About The Institute
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  About Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Admission Procedure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Affiliations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="pt-6 md:ml-auto md:px-4 md:pt-0">
            <span className="text-md mb-4 block font-medium uppercase">
              Explore
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  About The Institute
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  About Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Admission Procedure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Affiliations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="pt-6 md:ml-auto md:px-4 md:pt-0">
            <span className="text-md mb-4 block font-medium uppercase">
              Explore
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  About The Institute
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  About Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Admission Procedure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Affiliations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full  text-white py-2 text-center" style={{ backgroundColor: "#28186b" }}>
        &copy; 2024 laipscollege.in All Rights Reserved.
      </div>
    </footer>
  );
}
