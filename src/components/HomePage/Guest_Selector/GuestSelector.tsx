import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const GuestSelector = () => {
  const [guests, setGuests] = useState(1);
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start bg-white text-left font-normal hover:bg-white rounded"
          >
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {guests} {guests === 1 ? "adult" : "adults"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-3" align="start">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Adults</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                disabled={guests <= 1}
              >
                -
              </Button>
              <span className="w-8 text-center">{guests}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default GuestSelector;
