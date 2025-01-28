"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import restroView from "../../../lib/data/restroView.json";

import {
  Engagement,
  Imperial_Script,
  Montserrat,
  Red_Hat_Display,
} from "next/font/google";
import { CardType } from "../../../../types/types";
import Image from "next/image";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const engagement = Engagement({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const HotelViewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Default for xl screens
  const totalItems = restroView.length;

  // Duplicate the slides for seamless looping
  const slides = [...restroView, ...restroView];

  // Dynamically calculate itemsToShow based on screen width
  useEffect(() => {
    const calculateItemsToShow = () => {
      if (window.innerWidth >= 1280) {
        setItemsToShow(4); // xl:basis-1/4
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3); // md:basis-1/3
      } else if (window.innerWidth >= 640) {
        setItemsToShow(2); // sm:basis-1/2
      } else {
        setItemsToShow(1); // Full width for smaller screens
      }
    };

    calculateItemsToShow(); // Initial calculation
    window.addEventListener("resize", calculateItemsToShow);

    return () => window.removeEventListener("resize", calculateItemsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle seamless loop
  useEffect(() => {
    if (currentIndex === totalItems) {
      setTimeout(() => {
        setCurrentIndex(0); // Reset to the original slide
      }, 1000); // Sync with transition duration
    }
  }, [currentIndex, totalItems]);

  // Center the clicked card
  const centerCard = (index: any) => {
    setCurrentIndex(index);
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="flex flex-col sm:gap-16 gap-7 items-center justify-center my-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className={`${imperialScript.className} custom-h2`}>Welcome</h2>
          <p className={`${montserrat.className} custom-text`}>
            Tropical Vibes to Unwind and Relax
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex justify-center items-center w-full overflow-hidden">
            <Carousel className="w-[100vw] md:pl-5 overflow-hidden">
              <CarouselContent
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / itemsToShow
                  }%)`, // Slide one card at a time
                }}
              >
                {slides.map((item: CardType, index) => (
                  <CarouselItem
                    key={`${item.id}-${index}`}
                    onClick={() => centerCard(index % totalItems)} // Center card on click
                    className="pl-1 mr-1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 flex justify-start items-start md:static"
                  >
                    <div className="flex flex-col items-center justify-center gap-6">
                      <Image
                        src={item.image}
                        alt="image"
                        width={300}
                        height={300}
                        className="w-96 h-72 rounded-3xl "
                      />
                      <div className="text-center flex flex-col gap-2">
                        <h2
                          className={`${engagement.className} text-4xl font-medium text-primary`}
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
          {/* Dots Section */}
          <div className="flex justify-center items-center mt-6 gap-2">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex % totalItems === index
                    ? "bg-primary"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelViewCarousel;
