import React from "react";
import { Button } from "../ui/button";

interface BookingProps {
  price: number;
  discount_price: number;
  priceInterval: string;
  classname: string;
}

const Booking: React.FC<BookingProps> = ({
  price,
  discount_price,
  priceInterval,
  classname,
}) => {
  return (
    <div
      className={`bg-white flex flex-col gap-4 shadow-sm shadow-gray-400 p-8 lg:w-[20vw] sm:w-[30vw] w-[60vw] h-60 rounded ${classname}`}
    >
      <div className="flex flex-col gap-4 justify-start items-start">
        <p className="text-xl font-semibold">NPR. {price}</p>
        <p className="text-base font-medium line-through">
          NPR.{discount_price}
        </p>
      </div>
      <div>
        <p>1 {priceInterval}</p>
      </div>
      <Button variant="default" size="lg">
        Book Now
      </Button>
    </div>
  );
};

export default Booking;
