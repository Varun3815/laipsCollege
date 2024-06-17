"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CarouselMain() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const images = [
    { url: "/img/banner-01.jpg" },
    { url: "/img/banner-02.jpg" },
    { url: "/img/banner-03.jpg" },
  ];

  return (

    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="">
            <div className="">
              <Image
                src={image.url}
                alt={`Banner ${index + 1}`}
                className="w-full h-[450px] object-cover"
                width={1152}
                height={520}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" left-8 rounded bg-blue-300" />
      <CarouselNext className=" right-8 rounded bg-blue-300" />
    </Carousel>
  );
}
