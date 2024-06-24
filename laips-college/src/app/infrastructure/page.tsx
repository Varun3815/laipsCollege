"use client";
import Banner from "@/components/global/Banner";
import Image from "next/image";
import React, { useState } from "react";

interface ImgArray {
  img: string;
  alt: string;
}

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageGallery: ImgArray[] = [
    { img: "/img/gallery/IMG-20240610-WA0097.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0098.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0099.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0100.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0101.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0103.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0104.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0105.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0106.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0107.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0111.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0112.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0113.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0114.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0115.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0116.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0117.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0118.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0119.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0121.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0122.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0123.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0124.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0125.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0126.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0127.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0128.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0130.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0131.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0138.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0139.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0132.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0102.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0110.jpg", alt: "image alt" },
    { img: "/img/gallery/IMG-20240610-WA0134.jpg", alt: "image alt" },
  ];

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Banner name="Infrastructure" shortDesc="Explore our comprehensive image gallery showcasing key infrastructure projects."/>
      <div className="container my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageGallery.map((image, index) => (
            <div className="grid gap-4" key={index}>
              <div onClick={() => handleImageClick(image.img)}>
                <Image
                  className="h-auto max-w-full rounded-lg cursor-pointer"
                  width="400"
                  height="400"
                  src={image.img}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <Image
              className="h-auto max-w-full rounded-lg"
              width="800"
              height="800"
              src={selectedImage}
              alt="Selected Image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
