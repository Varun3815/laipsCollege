"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxArrowRight, RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-medium py-4 text-blackish">
      <ul className="gap-6 hidden lg:flex">
        <li className="navbar__link">
          <Link className="relative w-max group" href="/">
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="navbar__link">
          <Link className="relative w-max group" href="/about-us">
            <span>About Us</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="navbar__link">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <span className="flex items-center relative w-max group">
                <span>Admission</span>
                <FaAngleDown />
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Admission Brochure</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Fee Structure</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="navbar__link">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
            <span className="flex items-center relative w-max group">
                <span>Course</span>
                <FaAngleDown />
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>MBA</DropdownMenuItem>
              <DropdownMenuItem>LAW</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Upcoming Course</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="navbar__link">
        <Link className="relative w-max group" href="/infrastructure">
            <span>Infrasturcture</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="navbar__link">
          <Link className="relative w-max group" href="/faculty">
            <span>Faculty</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="navbar__link">
          <Link className="relative w-max group" href="/contact">
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
          </Link>
          
        </li>
      </ul>
      <div className="lg:hidden  sm:block">
        <button onClick={toggleNavbar}>
          {isOpen ? (
            <RxArrowRight className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col absolute top-[125px] bg-white px-3 left-0 basis-full items-start w-full h-[235px] md:top-[81px]">
          <li className="navbar__link border-b border-gray-200 w-full my-2">
            <Link className="relative" href="/" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li className="navbar__link border-b border-gray-200 w-full my-1">
            <Link className="relative" href="/about-us" onClick={toggleNavbar}>
              About Us
            </Link>
          </li>
          <li className="navbar__link border-b border-gray-200 w-full my-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <span className="flex items-center">
                  Admission
                  <FaAngleDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Admission Brochure</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Fee Structure</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="navbar__link border-b border-gray-200 w-full my-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <span className="flex items-center">
                  Course
                  <FaAngleDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>MBA</DropdownMenuItem>
                <DropdownMenuItem>LAW</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Upcoming Course</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="navbar__link border-b border-gray-200 w-full my-1">
            <Link className="relative" href="/infrastructure" onClick={toggleNavbar}>
              Infrastructure
            </Link>
          </li>
          <li className="navbar__link border-b border-gray-200 w-full my-1">
            <Link className="relative" href="/faculty" onClick={toggleNavbar}>
              Faculty
            </Link>
          </li>
          <li className="navbar__link border-b border-gray-200 w-full my-1">
            <Link className="relative" href="/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
