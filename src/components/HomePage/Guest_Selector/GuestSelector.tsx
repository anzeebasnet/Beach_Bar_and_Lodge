"use client";

import * as React from "react";
import { Minus, Plus, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
}

export function GuestSelector() {
  const [guestCount, setGuestCount] = React.useState<GuestCount>({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const updateCount = (type: keyof GuestCount, increment: boolean) => {
    setGuestCount((prev) => ({
      ...prev,
      [type]: increment
        ? Math.min(
            prev[type] + 1,
            type === "adults" ? 10 : type === "children" ? 6 : 5
          )
        : Math.max(prev[type] - 1, type === "adults" ? 1 : 0),
    }));
  };

  const getSummaryText = () => {
    const parts = [];
    parts.push(
      `${guestCount.adults} adult${guestCount.adults !== 1 ? "s" : ""}`
    );
    if (guestCount.children > 0) {
      parts.push(
        `${guestCount.children} child${guestCount.children !== 1 ? "ren" : ""}`
      );
    }
    return parts.join(", ");
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div className="bg-white p-2 rounded min-w-[320px]  cursor-pointer ">
          <div className="text-base text-gray-600">Guests</div>
          <div className="flex items-center gap-2 border border-gray-200 rounded">
            <UserRound className="h-8 ml-2 text-gray-600" />
            {getSummaryText()}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 ">
        <div className="space-y-4">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <div className="text-base">Adults</div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-green-600"
                onClick={() => updateCount("adults", false)}
                disabled={guestCount.adults <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-4 text-center">{guestCount.adults}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-green-600"
                onClick={() => updateCount("adults", true)}
                disabled={guestCount.adults >= 10}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div className="text-base">Children</div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-green-600"
                onClick={() => updateCount("children", false)}
                disabled={guestCount.children <= 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-4 text-center">{guestCount.children}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-green-600"
                onClick={() => updateCount("children", true)}
                disabled={guestCount.children >= 6}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Rooms */}
          <div className="flex items-center justify-between">
            <div className="text-base">Rooms</div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-green-600"
                onClick={() => updateCount("rooms", false)}
                disabled={guestCount.rooms <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-4 text-center">{guestCount.rooms}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-green-600"
                onClick={() => updateCount("rooms", true)}
                disabled={guestCount.rooms >= 5}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            className="w-full mt-4"
            onClick={() => setIsPopoverOpen(false)}
          >
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
