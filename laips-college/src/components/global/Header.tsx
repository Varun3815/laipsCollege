import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="border-b border-gray-200 py-4 sm:py-0">
        <div className="container flex sm:flex justify-between items-center py-1">
          <div className="flex sm:flex-row items-center justify-start">
            <div className="">
              <Link
                href="/"
                className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish"
              >
                <Image
                  src="/img/logo-laips.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
            <div
              className="w-3/4 pl-2 font-semibold lg:text-base "
              style={{ color: "#28186b" }}
            >
              LITTLE ANGEL INSTITUTE OF PROFESSIONAL STUDIES
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
