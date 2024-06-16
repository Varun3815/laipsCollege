import Link from "next/link";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

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
              Activites
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Co-Curricular Activities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Blog & News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Annual Day
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  Alumni Meet
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="pt-6 md:ml-auto md:px-4 md:pt-0">
            <span className="text-md mb-4 block font-medium uppercase">
              CONTACT
            </span>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                   <span className="flex items-center"><FaLocationPin  className="mr-1"/> Jail Road, Teli Kheda, Mhow(M.P.)</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  <span className="flex items-center"><FaEnvelope  className="mr-1"/> admin@laipscollege.in</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  <span className="flex items-center"><FaPhone  className="mr-1"/> 7247282851</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                >
                  <span className="flex items-center"><FaWhatsapp className="mr-1"/> Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-full  text-white py-2 text-center"
        style={{ backgroundColor: "#28186b" }}
      >
        &copy; 2024 laipscollege.in All Rights Reserved.
      </div>
    </footer>
  );
}
