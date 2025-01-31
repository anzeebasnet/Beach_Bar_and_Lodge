"use client";

import { BookingDetails } from "@/types/types";
import { DateRangePicker } from "./DateRangePicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import AvailableRoomCard from "@/components/Cards/AvailableRoomCard";
import { useEffect, useState } from "react";
import { addDays, differenceInDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { MdDelete } from "react-icons/md";
import { Minus, Plus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setBooking } from "@/lib/store/features/Booking/Booking";
import { RootState } from "@/lib/store/store";

interface RoomState {
  adults: number;
  children: string[];
}

const AvailableRoom = () => {
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );

  const dispatch = useAppDispatch();

  const [rooms, setRooms] = useState<RoomState[]>([]);
  const [checkin, setCheckin] = useState<Date>(new Date());
  const [checkout, setCheckout] = useState<Date>(addDays(new Date(), 1));

  // Initialize state only if bookingDetails is available
  useEffect(() => {
    if (bookingDetails) {
      setRooms(
        bookingDetails.rooms.map((room) => ({
          adults: parseInt(room.adults, 10),
          children: room.children,
        }))
      );
      setCheckin(bookingDetails.checkin || new Date());
      setCheckout(bookingDetails.checkout || addDays(new Date(), 1));
    }
  }, [bookingDetails]);

  // Calculate totals
  const totalRooms = rooms.length;
  const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0);
  const totalChildren = rooms.reduce(
    (sum, room) => sum + room.children.length,
    0
  );

  // Handle date changes
  const handleDateChange = (range: DateRange | undefined) => {
    setCheckin(range?.from || new Date());
    setCheckout(range?.to || addDays(new Date(), 1));
  };

  // Handlers to modify rooms
  const handleAddRoom = () => {
    setRooms((prev) => [...prev, { adults: 1, children: [] }]);
  };

  const handleRemoveRoom = () => {
    if (rooms.length > 1) {
      setRooms((prev) => prev.slice(0, -1));
    }
  };

  const handleIncreaseAdults = (roomIndex: number) => {
    setRooms((prev) =>
      prev.map((room, index) =>
        index === roomIndex && room.adults < 2
          ? { ...room, adults: room.adults + 1 }
          : room
      )
    );
  };

  const handleDecreaseAdults = (roomIndex: number) => {
    setRooms((prev) =>
      prev.map((room, index) =>
        index === roomIndex
          ? { ...room, adults: Math.max(room.adults - 1, 1) }
          : room
      )
    );
  };

  const handleIncreaseChildren = (roomIndex: number) => {
    setRooms((prev) =>
      prev.map((room, index) =>
        index === roomIndex && room.children.length < 2
          ? { ...room, children: [...room.children, ""] }
          : room
      )
    );
  };

  const handleDecreaseChildren = (roomIndex: number) => {
    setRooms((prev) =>
      prev.map((room, index) =>
        index === roomIndex
          ? { ...room, children: room.children.slice(0, -1) }
          : room
      )
    );
  };

  const handleChildAgeChange = (
    roomIndex: number,
    childIndex: number,
    value: string
  ) => {
    setRooms((prev) =>
      prev.map((room, index) =>
        index === roomIndex
          ? {
              ...room,
              children: room.children.map((age, i) =>
                i === childIndex ? value : age
              ),
            }
          : room
      )
    );
  };

  // useEffect(() => {
  //   const updatedBookingDetails: BookingDetails = {
  //     ...bookingDetails,
  //     checkin,
  //     checkout,
  //     rooms: rooms.map((room) => ({
  //       adults: room.adults.toString(),
  //       children: room.children,
  //     })),
  //   };

  //   // Only call `onUpdate` if there are changes
  //   if (
  //     JSON.stringify(bookingDetails) !== JSON.stringify(updatedBookingDetails)
  //   ) {
  //     dispatch(setBooking(updatedBookingDetails));
  //   }
  // }, [rooms, checkin, checkout, bookingDetails, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        bookingDetails &&
        (bookingDetails.checkin !== checkin ||
          bookingDetails.checkout !== checkout ||
          JSON.stringify(bookingDetails.rooms) !==
            JSON.stringify(
              rooms.map((room) => ({
                adults: room.adults.toString(),
                children: room.children,
              }))
            ))
      ) {
        const updatedBookingDetails: BookingDetails = {
          ...bookingDetails,
          checkin,
          checkout,
          rooms: rooms.map((room) => ({
            adults: room.adults.toString(),
            children: room.children,
          })),
        };

        dispatch(setBooking(updatedBookingDetails));
      }
    }, 300); // Delay by 300ms

    return () => clearTimeout(timeout);
  }, [rooms, checkin, checkout, bookingDetails, dispatch]);

  return (
    <div className="bg-[#ecefea] flex flex-col gap-2 sm:py-0">
      <div className="flex sm:flex-row flex-col sm:gap-4 bg-[#e2e8de] sm:py-2 py-6 sm:px-6 px-3">
        <div className="flex flex-col gap-2">
          <DateRangePicker
            checkin={checkin}
            checkout={checkout}
            onDateChange={handleDateChange}
          />
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "relative justify-start text-left font-normal rounded-none shadow-sm shadow-gray-300 h-14 pt-6 lg:w-[25vw] sm:w-[43vw] w-full"
                )}
              >
                <p
                  className={`absolute top-2 text-gray-700 text-xs font-normal`}
                >
                  Guests
                </p>
                <span>
                  {totalRooms} {totalRooms === 1 ? "Room" : "Rooms"},{" "}
                  {totalAdults} {totalAdults === 1 ? "Adult" : "Adults"}
                  {totalChildren >= 1
                    ? `,${totalChildren} ${
                        totalChildren === 1 ? "Child" : "Children"
                      }`
                    : ""}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-6">
              {rooms.map((room, roomIndex) => (
                <div
                  key={roomIndex}
                  className="border-b border-gray-300 pb-4 mb-4"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-base font-medium text-gray-700 mb-2">
                      Room {roomIndex + 1}
                    </h4>
                    {rooms.length > 1 && roomIndex > 0 ? (
                      <button
                        onClick={handleRemoveRoom}
                        className="text-primary hover:text-secondary bg-white"
                      >
                        <MdDelete size={23} />
                      </button>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex gap-6">
                      {/* Section for adults */}
                      <div className="flex flex-col gap-2 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Adults
                        </span>
                        <div className="flex items-center gap-6">
                          <Button
                            variant="outline"
                            onClick={() => handleDecreaseAdults(roomIndex)}
                          >
                            <Minus />
                          </Button>
                          <span>{rooms[roomIndex].adults}</span>
                          <Button
                            variant="outline"
                            onClick={() => handleIncreaseAdults(roomIndex)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                      {/* Section for children */}
                      <div className="flex flex-col gap-2 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Children under 7 years old
                        </span>
                        <div className="flex items-center gap-6">
                          <Button
                            variant="outline"
                            onClick={() => handleDecreaseChildren(roomIndex)}
                          >
                            <Minus />
                          </Button>
                          <span>{rooms[roomIndex].children.length}</span>
                          <Button
                            variant="outline"
                            onClick={() => handleIncreaseChildren(roomIndex)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                    </div>
                    {/* Section to select child ages */}
                    {rooms[roomIndex].children.map((age, childIndex) => (
                      <div
                        key={childIndex}
                        className="flex items-center gap-2 py-1"
                      >
                        <span className="text-sm font-medium text-gray-600">
                          Child {childIndex + 1} Age
                        </span>
                        <select
                          className="border border-gray-300 rounded-md p-1"
                          value={age}
                          onChange={(e) =>
                            handleChildAgeChange(
                              roomIndex,
                              childIndex,
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select age</option>
                          {[...Array(7)].map((_, i) => (
                            <option key={i} value={i.toString()}>
                              {i === 0 ? "Under 1" : i}{" "}
                              {i === 0 || i === 1 ? "year" : "years"} old
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <Button onClick={handleAddRoom}>Add Room</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center font-normal text-gray-700 py-2">
          Select Your Room
        </h2>
      </div>
      <div>
        <Progress value={35} />
      </div>
      <div className="sm:px-6 px-3 sm:py-6 py-10 ">
        <AvailableRoomCard />
      </div>
    </div>
  );
};

export default AvailableRoom;
