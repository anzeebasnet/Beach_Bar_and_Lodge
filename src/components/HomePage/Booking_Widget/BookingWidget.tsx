import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/daterangepicker";
import React from "react";
import { GuestSelector } from "../Guest_Selector/GuestSelector";

const BookingWidget = () => {
  return (
    <>
      <div className="bg-primary border-t border-gray-500 py-4">
        <div className="px-8  mx-auto">
          <div className="items-center justify-between gap-4">
            <div className="text-white text-xl text-center mt-4">
              BOOK ONLINE
            </div>
            <h1 className=" text-center text-sm text-gray-300">
              Find Your Perfect Room
            </h1>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
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
              <Button className="bg-secondary text-white hover:bg-[#005500] ">
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
