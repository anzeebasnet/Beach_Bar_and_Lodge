import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import { differenceInDays, format } from "date-fns";
import { Minus } from "lucide-react";
import React from "react";

const BookingSummaryCard = () => {
  const dispatch = useAppDispatch();
  const selectedRoom = useAppSelector(
    (state: RootState) => state.selectRoom.currentRoomDetails
  );

  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );

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

    console.log(
      "Number of days:",
      numberOfDays,
      "Converted Room price:",
      price
    );

    return numberOfDays > 0 ? price * numberOfDays : price;
  };

  const checkinDay = bookingDetails?.checkin
    ? format(new Date(bookingDetails.checkin), "EEEE")
    : "N/A";
  const checkinDate = bookingDetails?.checkin
    ? format(new Date(bookingDetails.checkin), "dd")
    : "N/A";
  const checkinMonth = bookingDetails?.checkin
    ? format(new Date(bookingDetails.checkin), "MMMM")
    : "N/A";

  const checkoutDay = bookingDetails?.checkout
    ? format(new Date(bookingDetails.checkout), "EEEE")
    : "N/A";
  const checkoutDate = bookingDetails?.checkout
    ? format(new Date(bookingDetails.checkout), "dd")
    : "N/A";
  const checkoutMonth = bookingDetails?.checkout
    ? format(new Date(bookingDetails.checkout), "MMMM")
    : "N/A";

  return (
    <div>
      <div className="bg-white mr-6">
        <h2 className="font-normal text-2xl  text-gray-700 py-6 lg:px-6 px-3">
          My Booking
        </h2>
        <p className="border-b border-b-gray-300"></p>
        <div className="bg-[#d4ddd4] py-2 lg:px-6 px-3">
          <p className="text-base font-medium">
            {calculateNumberOfDays()}{" "}
            {`${calculateNumberOfDays() > 1 ? "nights" : "night"}`}
          </p>
        </div>
        <div className="flex gap-2 items-start py-4 lg:px-6 px-3">
          <div className="flex flex-col">
            <div className="flex gap-1 items-end">
              <p className="text-xl font-medium">{checkinDate}</p>
              <p className="text-[17px] font-normal text-gray-800">
                {checkinMonth}
              </p>
            </div>
            <p className="text-sm font-normal text-gray-700">{checkinDay}</p>
            <p className="text-sm font-normal text-gray-700">from 2 PM</p>
          </div>
          <p className="pt-1">
            <Minus size={20} />
          </p>
          <div className="flex flex-col">
            <div className="flex gap-1 items-end">
              <p className="text-xl font-medium">{checkoutDate}</p>
              <p className="text-[17px] font-normal text-gray-800">
                {checkoutMonth}
              </p>
            </div>
            <p className="text-sm font-normal text-gray-700">{checkoutDay}</p>
            <p className="text-sm font-normal text-gray-700">till 6 PM</p>
          </div>
        </div>
        <div className="bg-[#d4ddd4] py-2 lg:px-6 px-3">
          <p className="text-base font-medium">Room:</p>
          <p className="text-primary font-medium text-base">
            {selectedRoom?.title}
          </p>
        </div>
        <div className="text-2xl text-primary font-medium text-right py-6 lg:px-6 px-3">
          <p>NRs. {calculateTotalPrice(selectedRoom?.price.OnePerson)}</p>
          <p className="text-gray-600 font-normal text-base">
            Taxes and Fees Included
          </p>
        </div>
        <div className="text-primary text-[15px] bg-[#d4ddd4] py-2 text-center">
          Booking Summary
        </div>
      </div>
    </div>
  );
};

export default BookingSummaryCard;
