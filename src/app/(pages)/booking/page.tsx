"use client";

import AvailableRoom from "@/components/(Pages)/Booking/AvailableRooms";
import BookingForm from "@/components/Forms/BookingForm";
import { useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import { BookingDetails } from "@/types/types";
import {
  Imperial_Script,
  Montserrat,
  Roboto_Condensed,
} from "next/font/google";
import React, { useState } from "react";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const page = () => {
  const [viewMode, setViewMode] = useState<"form" | "cards">("form");
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const bookingView = useAppSelector(
    (state: RootState) => state.bookingView.currentBookingView
  );

  const handleSubmitBooking = (values: BookingDetails) => {
    setBookingDetails(values);
    setViewMode("cards");
  };

  const handleUpdateBookingDetails = (updatedDetails: BookingDetails) => {
    setBookingDetails(updatedDetails);
    console.log(updatedDetails);
  };

  return (
    <main className={`${roboto.className} container mx-auto p-5 max-w-7xl`}>
      <div className="flex flex-col items-center mb-6">
        <h2 className={`${imperialScript.className} custom-h2`}>Book Now</h2>
        <p className={`${montserrat.className} custom-text`}>
          Turn your dream getaway into reality!
        </p>
      </div>
      {bookingView === "form" ? <BookingForm /> : <AvailableRoom />}
    </main>
  );
};

export default page;
