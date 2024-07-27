import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import WaterMark from "../watermark";
export default function ProductCarousel({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  return (
    <Carousel className="w-full ml-12 mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem className="p-0" key={index}>
            <div className="relative w-full h-full">
              <Image
                src={`/assets/products/${image}`}
                alt={`${productName} preview-${index}`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <WaterMark className="absolute bottom-0 left-2 text-gray-300/90" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
