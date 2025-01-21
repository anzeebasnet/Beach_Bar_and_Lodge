import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/daterangepicker";
import React from "react";

const BookingWidget = () => {
  return (
    <>
      <div className="bg-primary border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-xl">BOOK ONLINE</div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white p-2 rounded min-w-[200px]">
                <div className="text-sm text-gray-600">Check-in</div>
                <div className="font-semibold">
                  <DatePickerWithRange />
                </div>
              </div>
              <div className="bg-white p-2 rounded min-w-[200px]">
                <div className="text-sm text-gray-600">Check-out</div>
                <div className="font-semibold">
                  <DatePickerWithRange />
                </div>
              </div>
              <div className="bg-white p-2 rounded min-w-[200px]">
                <div className="text-sm text-gray-600">Guests</div>
                <div className="font-semibold">2 adults, 0 children</div>
              </div>
              <Button className="bg-[#006600] text-white hover:bg-[#005500] min-w-[150px]">
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
