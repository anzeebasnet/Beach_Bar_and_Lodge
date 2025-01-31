"use client";

import React from "react";
import { RoomsData, RoomType } from "../../../../types/types";
import roomsData from "@/lib/data/rooms.json";
import Image from "next/image";
import { Montserrat, Poppins, Red_Hat_Display } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import RoomCarousel from "@/components/Carousel/RoomCarousel/RoomCarousel";
import Booking from "@/components/Cards/Booking";

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const monteserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const page = ({ params }: { params: { id: string } }) => {
  // Find the room that matches the id from the roomsData
  const room = (roomsData as RoomsData).rooms.find(
    (room: RoomType) => room.id.toString() === params.id
  );

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="sm:py-12 py-6 lg:px-40 md:px-20 sm:px-16 px-10 flex flex-col sm:gap-10 gap-6 items-center justify-center">
      <h1
        className={`${monteserrat.className} lg:text-4xl sm:text-3xl text-xl font-semibold`}
      >
        {room.title}
      </h1>

      {/*Main Image Carousel*/}
      <Carousel className="relative">
        <CarouselContent>
          {room.images.map((item, index: number) => (
            <CarouselItem key={index} className="pl-0">
              <Image
                src={item}
                alt="image"
                width={300}
                height={300}
                className="rounded lg:w-[80vw] sm:w-[90vw] w-[90vw] place-self-center"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>

      {/*Room Description*/}
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col sm:gap-6 gap-4">
          <div className="flex flex-col gap-3">
            <h2
              className={`${poppins.className} sm:text-2xl text-xl font-extrabold`}
            >
              About Room
            </h2>
            <p
              className={`${red_hat_display.className} sm:text-base text-sm font-medium text-justify sm:leading-8 leading-6`}
            >
              {room.detailedDescription}
            </p>
          </div>
          <div className="lg:flex lg:flex-col hidden gap-3">
            <h3
              className={`${poppins.className} sm:text-lg text-base font-medium`}
            >
              Amenities
            </h3>
            <ul className="list-disc list-inside">
              {room.amenities.map((amenity, index) => (
                <li
                  key={index}
                  className={`${red_hat_display.className} sm:text-base text-sm font-medium text-justify sm:leading-8 leading-6`}
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex sm:flex-row flex-col justify-between gap-6">
          <div className="flex flex-col lg:hidden gap-4">
            <h3
              className={`${poppins.className} sm:text-lg text-base font-medium`}
            >
              Amenities
            </h3>
            <ul className="list-disc list-inside">
              {room.amenities.map((amenity, index) => (
                <li
                  key={index}
                  className={`${red_hat_display.className} sm:text-base text-sm font-medium text-justify sm:leading-8 leading-6`}
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <Booking
            price={room.price}
            discount_price={room.discount_price}
            priceInterval={room.priceInterval}
            classname=""
          />
        </div>
      </div>

      {/*Other rooms*/}
      <div>
        <h3
          className={`${poppins.className} sm:text-4xl text-2xl font-bold text-center sm:my-12 my-6 mb-0`}
        >
          Other Rooms
        </h3>

        <div className="sm:px-0 px-6">
          <RoomCarousel currentRoomId={room.id} />
        </div>
      </div>
    </div>
  );
};

export default page;
