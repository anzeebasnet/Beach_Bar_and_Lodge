"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import roomsData from "@/lib/data/rooms.json";
import { RoomDetailsModal } from "./RoomDetailsModal";

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<
    (typeof roomsData.rooms)[0] | null
  >(null);

  const handleRoomClick = (room: (typeof roomsData.rooms)[0]) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <section className="container mx-auto px-4 py-52 md:py-10 lg:py-10">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">
          {roomsData.title}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0a2342]">
          {roomsData.heading}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {roomsData.rooms.map((room) => (
          <div key={room.id} className="group relative">
            <div
              className="aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleRoomClick(room)}
            >
              <Image
                src={
                  room.images && room.images.length > 0
                    ? room.images[0]
                    : "/assets/images/room.jpg"
                }
                alt={`${room.title} - Main Image`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold">
                    {room.currency} {room.price.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /{room.priceInterval}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-100"
                  onClick={() => handleRoomClick(room)}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <RoomDetailsModal
        room={selectedRoom}
        isOpen={!!selectedRoom}
        onClose={handleCloseModal}
      />
    </section>
  );
}
