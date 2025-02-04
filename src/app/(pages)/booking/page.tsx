"use client";

import AvailableRoom from "@/components/(Pages)/Booking/AvailableRooms";
import CustomerDetails from "@/components/(Pages)/Booking/CustomerDetails";
import BookingForm from "@/components/Forms/BookingForm";
import { useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import {
  Imperial_Script,
  Montserrat,
  Roboto_Condensed,
} from "next/font/google";
import React, { useEffect, useRef } from "react";

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

const Page = () => {
  const bookingView = useAppSelector(
    (state: RootState) => state.bookingView.currentBookingView
  );

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bookingView) {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // setTimeout(() => {
        //   window.scrollBy(0, -64); // Adjust based on your navbar height
        // }, 300); // Ensure it runs after the smooth scroll finishes
      }
    }
  }, [bookingView]);

  return (
    <main
      ref={sectionRef}
      className={`${roboto.className} container mx-auto p-5 max-w-7xl`}
    >
      <div className="flex flex-col items-center mb-6">
        <h2 className={`${imperialScript.className} custom-h2`}>Book Now</h2>
        <p className={`${montserrat.className} custom-text`}>
          Turn your dream getaway into reality!
        </p>
      </div>
      {bookingView === "form" ? (
        <BookingForm />
      ) : bookingView === "cards" ? (
        <AvailableRoom />
      ) : bookingView === "CustomerDetails" ? (
        <CustomerDetails />
      ) : (
        ""
      )}
    </main>
  );
};

export default Page;
