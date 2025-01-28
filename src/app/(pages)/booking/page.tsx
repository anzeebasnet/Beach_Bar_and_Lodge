"use client";

import AvailableRoomCard from "@/components/Cards/AvailableRoomCard";
import BookingForm from "@/components/Forms/BookingForm";
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

  const handleSubmitBooking = () => {
    setViewMode("cards");
  };

  return (
    <main
      className={`${roboto.className} container mx-auto px-4 py-8 max-w-7xl`}
    >
      <div className="flex flex-col items-center sm:mb-12 mb-6">
        <h2 className={`${imperialScript.className} custom-h2`}>Book Now</h2>
        <p className={`${montserrat.className} custom-text`}>
          Turn your dream getaway into reality!
        </p>
      </div>
      {viewMode === "form" ? (
        <BookingForm handleSubmitBooking={handleSubmitBooking} />
      ) : (
        <AvailableRoomCard />
      )}
    </main>
  );
};

export default page;
