"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import GuestSelector from "../Guest_Selector/GuestSelector";
import Link from "next/link";

export default function HotelBookingForm() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <div className="border-t border-gray-500 bg-primary p-4 md:p-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Book Your Stay
        </h2>
        <div className="grid gap-4 md:grid-cols-4 md:gap-6">
          {/* Check-in Date */}
          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-white">
              Check-in
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start bg-white text-left font-normal hover:bg-white",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-white">
              Check-out
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start bg-white text-left font-normal hover:bg-white",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-white">
              Guests
            </label>
            <GuestSelector />
          </div>

          {/* Find Room Button */}
          <div className="flex items-end">
            <Link href="/rooms">
              <Button
                className="w-full bg-green-600 text-white hover:bg-green-700"
                size="lg"
              >
                FIND ROOM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
