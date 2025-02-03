"use client";

import React from "react";
import roomsData from "@/lib/data/suites.json";
import Image from "next/image";
import { HiMiniUsers } from "react-icons/hi2";
import { Expand } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setBookingView } from "@/lib/store/features/BookingView/BookingView";
import { setRoom } from "@/lib/store/features/SelectRoom/SelectRoom";
import { RoomCardType } from "@/types/types";
import { RootState } from "@/lib/store/store";
import { differenceInDays } from "date-fns";

const AvailableRoomCard = () => {
  const dispatch = useAppDispatch();
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );

  const handleRoomSelect = (room: RoomCardType) => {
    dispatch(setBookingView("CustomerDetails"));
    dispatch(setRoom(room));
  };

  const calculateNumberOfDays = (): number => {
    if (!bookingDetails?.checkin || !bookingDetails.checkout) return 0;

    const checkinDate = new Date(bookingDetails.checkin);
    const checkoutDate = new Date(bookingDetails.checkout);

    console.log("Check-in:", checkinDate, "Check-out:", checkoutDate);

    return Math.max(0, differenceInDays(checkoutDate, checkinDate));
  };

  const calculateTotalPrice = (roomPrice: any): number => {
    const numberOfDays = calculateNumberOfDays();

    // Convert room price to a number
    const price = parseFloat(roomPrice);
    if (isNaN(price) || price <= 0) {
      console.log("Invalid room price:", roomPrice);
      return 0;
    }

    return numberOfDays > 0 ? price * numberOfDays : price;
  };

  return (
    <div className="flex flex-wrap gap-6">
      {roomsData.rooms.map((room: any, index) => (
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
          <div className="flex justify-between items-end p-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-normal text-primary_text">
                {room.title}
              </h2>
              <div className="flex items-center gap-3 text-sm font-normal text-gray-700">
                <p className="flex items-center gap-2">
                  <HiMiniUsers size={20} /> Up to 2 guests
                </p>
                <p className="flex items-center gap-2">
                  <Expand size={18} /> 40 m²
                </p>
              </div>
              <p>
                NRs. {calculateTotalPrice(room.price?.OnePerson ?? 0)}/
                {calculateNumberOfDays()}{" "}
                {`${calculateNumberOfDays() > 1 ? "nights" : "night"}`}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleRoomSelect(room)}
                className=" text-white bg-primary hover:bg-primary_text rounded-sm sm:text-[15px] text-xs px-8 py-2"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableRoomCard;
