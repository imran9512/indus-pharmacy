import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ProductCarousel({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  return (
    <Carousel className="w-full max-w-xs ml-12 mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center !p-0">
                  <div className="relative">
                    <Image
                      src={`/assets/products/${image}`}
                      alt={`${productName} preview-${index}`}
                      width={1200}
                      height={900}
                      className="h-auto w-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
