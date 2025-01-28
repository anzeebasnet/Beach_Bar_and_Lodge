"use client";

import React, { useState } from "react";
import { DatePicker } from "@/components/(Pages)/Booking/DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Roboto_Condensed } from "next/font/google";

interface BookingProps {
  handleSubmitBooking?: () => void;
}

const roboto = Roboto_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const BookingForm: React.FC<BookingProps> = ({ handleSubmitBooking }) => {
  const [rooms, setRooms] = useState<
    { id: number; adults: string; children: string[] }[]
  >([{ id: 1, adults: "2 Adults", children: [] }]);

  const handleAddRoom = () => {
    const newRoomId = rooms.length + 1;
    setRooms((prev) => [...prev, { id: newRoomId, adults: "", children: [] }]);
  };

  const handleRemoveRoom = (roomId: number) => {
    setRooms((prev) => prev.filter((room) => room.id !== roomId));
  };

  const handleAdultChange = (roomId: number, value: string) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === roomId ? { ...room, adults: value } : room
      )
    );
  };

  const handleAddChild = (roomId: number, value: string) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === roomId && !room.children.includes(value)
          ? { ...room, children: [...room.children, value] }
          : room
      )
    );
  };

  const handleRemoveChild = (roomId: number, child: string) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === roomId
          ? { ...room, children: room.children.filter((c) => c !== child) }
          : room
      )
    );
  };

  return (
    <div className="bg-[#ecefea] ">
      <p className="border-b border-b-gray-300 text-center text-xl py-4 text-gray-600 font-semibold">
        Details of your stay
      </p>
      <form className="max-w-3xl mx-auto flex flex-col gap-4 sm:py-12 py-6 sm:px-12 px-6">
        <div className="grid sm:grid-cols-2 gap-4 border-b border-b-gray-300 pb-4">
          <div className="flex flex-col gap-2">
            <p className={` text-gray-700 text-[17px] font-normal`}>
              Check-in Date
            </p>
            <DatePicker />
          </div>
          <div className="flex flex-col gap-2">
            <p className={` text-gray-700 text-[17px] font-normal`}>
              Check-out Date
            </p>
            <DatePicker />
          </div>
        </div>

        {rooms.map((room) => (
          <div
            key={room.id}
            className="grid sm:grid-cols-2 items-end gap-4 border-b border-b-gray-300 pb-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className={` text-gray-700 text-[17px] font-normal`}>
                  Stay in room {room.id}
                </h3>
                {room.id > 1 && (
                  <Button
                    variant="outline"
                    className="h-8 px-2 py-0"
                    onClick={() => handleRemoveRoom(room.id)}
                  >
                    Remove Room
                  </Button>
                )}
              </div>
              <p className="text-xs font-medium text-gray-400">
                Guests aged 7 or above
              </p>
              <Select
                value={room.adults}
                onValueChange={(value: string) =>
                  handleAdultChange(room.id, value)
                }
              >
                <SelectTrigger className="bg-white rounded-none h-10">
                  <SelectValue placeholder="Select Adults" />
                </SelectTrigger>
                <SelectContent className={`${roboto.className}`}>
                  <ScrollArea className="h-[20vh]">
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="5">5 Adults</SelectItem>
                    <SelectItem value="6">6 Adults</SelectItem>
                    <SelectItem value="7">7 Adults</SelectItem>
                    <SelectItem value="8">8 Adults</SelectItem>
                    <SelectItem value="9">9 Adults</SelectItem>
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {room.children.map((child) => (
                  <button
                    key={child}
                    className="flex items-center bg-white px-4 py-1 my-1"
                    onClick={() => handleRemoveChild(room.id, child)}
                  >
                    <span className="mr-2 text-sm">
                      Child aged {child} year(s) old
                    </span>
                    <X color="red" size={20} />
                  </button>
                ))}
              </div>
              <Select
                value=""
                onValueChange={(value: string) =>
                  handleAddChild(room.id, value)
                }
              >
                <SelectTrigger className="bg-white rounded-none h-10">
                  <SelectValue placeholder="Add a child" />
                </SelectTrigger>
                <SelectContent className={`${roboto.className}`}>
                  <ScrollArea className="h-[20vh]">
                    <SelectItem value="under 1">
                      Child aged under 1 years old
                    </SelectItem>
                    <SelectItem value="1">Child aged 1 year old</SelectItem>
                    <SelectItem value="2">Child aged 2 years old</SelectItem>
                    <SelectItem value="3">Child aged 3 years old</SelectItem>
                    <SelectItem value="4">Child aged 4 years old</SelectItem>
                    <SelectItem value="5">Child aged 5 years old</SelectItem>
                    <SelectItem value="6">Child aged 6 years old</SelectItem>
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
        <div>
          <button
            onClick={handleAddRoom}
            className="bg-primary hover:bg-opacity-65 text-white px-6 py-[6px] rounded flex gap-2 items-center"
            type="button"
          >
            Add Room <Plus size={20} />
          </button>
        </div>
        <Button
          onClick={handleSubmitBooking}
          type="button"
          className="w-full rounded-md my-4 h-14 text-lg font-thin"
        >
          Check availability
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
