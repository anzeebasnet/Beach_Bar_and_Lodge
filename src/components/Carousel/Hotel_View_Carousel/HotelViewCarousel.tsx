import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import restroView from "../../../lib/data/restroView.json";

import {
  Engagement,
  Imperial_Script,
  Red_Hat_Display,
  Tangerine,
} from "next/font/google";
import { CardType } from "../../../../types/types";
import Image from "next/image";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const tangerine = Engagement({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const HotelViewCarousel = () => {
  return (
    <div>
      <div className="flex flex-col sm:gap-6 gap-3 items-center justify-center sm:my-24 my-10">
        <h2
          className={`${imperialScript.className} font-semibold sm:text-8xl text-6xl text-black`}
        >
          Welcome
        </h2>
        <div className="flex justify-center items-center w-full">
          <Carousel className="w-[100vw]  md:pl-5">
            <CarouselContent className="container pl-0 pr-0 md:pl-8  md:pr-8 -ml-1  gap-4 2xl:gap-0 py-6">
              {restroView?.map((item: CardType) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 mr-4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 flex justify-start items-start md:static"
                >
                  <div className="flex flex-col items-center justify-center gap-6">
                    <Image
                      src={item.image}
                      alt="image"
                      width={300}
                      height={300}
                      className="w-96 h-72 rounded-3xl transition-transform duration-300 transform hover:scale-105"
                    />
                    <div className="text-center flex flex-col gap-2">
                      <h2
                        className={`${tangerine.className} text-4xl font-semibold text-primary`}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={`${red_hat_display.className} text-sm font-medium text-black sm:px-4 px-6`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HotelViewCarousel;
