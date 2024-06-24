"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function Banner(props: any) {
  const pathname = usePathname();
  const validPaths = ["/course/MBA", "/course/LAW", "/course/upcomingCourse"];
  return (
    <div className="w-full h-72 flex justify-start items-center bg-gradient-to-r from-cyan-500 to-og">
      <div className="container ">
        <div className="my-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-black hover:underline">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              {validPaths.includes(pathname) && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="text-black hover:underline"
                    >
                      Course
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white" />
                </>
              )}
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white font-semibold">
                  {props.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-4xl uppercase font-light">{props.name}</h1>
        <p className="text-xl my-2"> {props.shortDesc}</p>
      </div>
    </div>
  );
}
