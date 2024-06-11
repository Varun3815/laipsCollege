import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="border-b border-gray-200 py-6">
        <div className="container sm:flex justify-between items-center">
          <div className="flex items-center justify-start">
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
            <div className="w-[300px] font-semibold">
              LITTLE ANGEL INSTITUTE OF PROFESSIONAL STUDIES
            </div>
          </div>

          <div className="hidden lg:flex gap-4 text-gray-500">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
