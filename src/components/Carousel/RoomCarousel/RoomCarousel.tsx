import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import roomsDataJson from "@/lib/data/rooms.json";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { RoomsData } from "../../../types/types";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface RoomCarouselProps {
  currentRoomId: number;
}
const roomsData = roomsDataJson as RoomsData;

const RoomCarousel = ({ currentRoomId }: RoomCarouselProps) => {
  // Filter rooms excluding the current one
  const otherRooms = roomsData.rooms.filter(
    (room) => room.id !== currentRoomId
  );

  return (
    <div>
      <Carousel className="sm:w-[75vw] w-[60vw]  md:pl-5">
        <CarouselContent className="container pl-0 pr-0 md:pl-8  md:pr-8 -ml-1  gap-4 2xl:gap-0 py-6">
          {otherRooms.map((room) => (
            <CarouselItem
              key={room.id}
              className="group relative pl-4 mr-4 sm:basis-1/2 md:basis-1/3 flex justify-center items-center md:static  flex-col gap-6"
            >
              <Image
                src={room.images[0]}
                alt="room image"
                width={500}
                height={500}
                className="rounded"
              />
              <div className="flex justify-between items-end w-full">
                <div className="flex flex-col gap-2">
                  <h2 className="text-base font-semibold line-clamp-1">
                    {room.title}
                  </h2>
                  <p className={`${poppins.className} text-sm font-light`}>
                    NRs. {room.price} per {room.priceInterval}
                  </p>
                </div>
                <Link
                  href={`/rooms/${room.id}`}
                  className="rounded-full hover:bg-slate-100 p-2 border border-black"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RoomCarousel;
