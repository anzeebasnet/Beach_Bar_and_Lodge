import React from "react";
import roomsData from "@/lib/data/suites.json";
import Image from "next/image";
import { HiMiniUsers } from "react-icons/hi2";
import { Expand } from "lucide-react";
import { Button } from "../ui/button";

interface AvailableRoomCard {}

const AvailableRoomCard = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {roomsData.rooms.map((room, index) => (
        <div
          key={index}
          className="flex flex-col sm:grow-0 grow bg-white border border-gray-300 transition-transform ease-in-out duration-300 hover:scale-105"
        >
          <Image
            src={room.images[0]}
            alt="room image"
            width={300}
            height={300}
            className="w-full"
          />
          <div className="flex flex-col gap-1 p-4">
            <h2 className="text-lg font-normal text-primary">{room.title}</h2>
            <div className="flex items-center gap-3 text-sm font-normal text-gray-700">
              <p className=" flex items-center gap-2">
                <HiMiniUsers size={20} /> Up to 2 guests
              </p>
              <p className=" flex items-center gap-2">
                {" "}
                <Expand size={18} />
                40 m²
              </p>
            </div>
            <div>
              <p>NRs. </p>
              <Button className="mt-4 rounded-full">Select</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableRoomCard;
