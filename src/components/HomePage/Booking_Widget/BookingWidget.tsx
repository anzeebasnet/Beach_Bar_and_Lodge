import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/daterangepicker";
import React from "react";
import { GuestSelector } from "../Guest_Selector/GuestSelector";

const BookingWidget = () => {
  return (
    <>
      <div className="bg-primary border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-xl">BOOK ONLINE</div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white p-2 rounded min-w-[200px]">
                <div className="text-base text-gray-600">Check-in</div>
                <div>
                  <DatePickerWithRange />
                </div>
              </div>
              <div className="bg-white p-2 rounded min-w-[200px]">
                <div className="text-base text-gray-600">Check-out</div>
                <div>
                  <DatePickerWithRange />
                </div>
              </div>
              {/* <div className="bg-white p-2 rounded min-w-[200px]">
                <div className="text-base text-gray-600">Guests</div>
                <div className="font-semibold">2 adults, 0 children</div>
              </div> */}
              <GuestSelector />
              <Button className="bg-secondary text-white hover:bg-[#005500] min-w-[150px]">
                FIND ROOM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingWidget;
