"use client";

import RoomCard from "./RoomCard";
import { Imperial_Script, Montserrat, Red_Hat_Display } from "next/font/google";
import { useState } from "react";
import { RoomModal } from "./RoomModal";
import roomData from "@/lib/data/suites.json";
import { RoomCardType } from "../../../types/types";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<RoomCardType | null>(null);

  const handleRoomClick = (room: RoomCardType) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center "
        style={{
          backgroundImage: "url('/assets/images/rooms/frontDoorView.jpg')",
        }}
      >
        <p
          className={`${imperialScript.className} font-semibold sm:text-6xl text-4xl text-white text-center`}
        >
          Serene escapes
          <br /> with <br /> Opulent comfort
        </p>
        <Link
          href={"/booking"}
          className={`${red_hat_display.className} custom-button`}
        >
          Book Now
        </Link>
      </div>
      <div className="flex flex-col sm:gap-16 gap-7 items-center justify-center sm:my-16 my-10 px-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className={`${imperialScript.className} custom-h2`}>Our Rooms</h2>
          <p className={`${montserrat.className} custom-text`}>
            Elegant and Sophisticated Retreats
          </p>
        </div>
        {roomData.rooms.map((room: any, index) => (
          <RoomCard
            key={index}
            {...room}
            onDetailsClick={() => handleRoomClick(room)}
          />
        ))}
      </div>
      <RoomModal
        room={selectedRoom}
        isOpen={!!selectedRoom}
        onClose={handleCloseModal}
      />
    </div>
  );
}
