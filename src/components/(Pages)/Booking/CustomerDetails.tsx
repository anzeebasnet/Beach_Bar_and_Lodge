"use client";

import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import CustomerDetailForm from "@/components/Forms/CustomerDetailForm";
import { format } from "date-fns";
import BookingSummaryCard from "@/components/Cards/BookingSummaryCard";

const CustomerDetails = () => {
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );

  // Format the dates if available
  const formattedCheckin = bookingDetails?.checkin
    ? format(new Date(bookingDetails.checkin), "dd MMMM")
    : "N/A";
  const formattedCheckout = bookingDetails?.checkout
    ? format(new Date(bookingDetails.checkout), "dd MMMM")
    : "N/A";

  const totalRooms = bookingDetails?.rooms.length;
  const totalAdults = bookingDetails?.rooms.reduce(
    (sum, room) => sum + parseInt(room.adults, 10),
    0
  );
  const totalChildren = bookingDetails?.rooms.reduce(
    (sum, room) => sum + room.children.length,
    0
  );

  return (
    <div className="bg-[#ecefea] flex flex-col gap-2 sm:py-0">
      <div className="flex sm:flex-row flex-col sm:gap-4 bg-[#e2e8de] sm:py-2 py-6 sm:px-6 px-3">
        <div className="flex flex-col lg:w-[25vw] sm:w-[43vw] w-full h-14  bg-white px-4 py-2">
          <p className="text-gray-700 text-xs font-normal">
            Check-in and Check-out
          </p>
          <p>
            {formattedCheckin} - {formattedCheckout}
          </p>
        </div>
        <div className="flex flex-col lg:w-[25vw] sm:w-[43vw] w-full h-14  bg-white px-4 py-2">
          <p className="text-gray-700 text-xs font-normal">Guests</p>
          <p>
            {totalAdults} {totalAdults === 1 ? "adult" : "adults"}
            {totalChildren && totalChildren > 0 ? (
              <>
                , {totalChildren} {totalChildren === 1 ? "child" : "children"}
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center font-normal text-gray-700 py-2">
          Details of your stay
        </h2>
      </div>
      <div>
        <Progress value={70} />
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:py-6 py-3">
        <div className="xl:col-span-3 col-span-2">
          <CustomerDetailForm />
        </div>

        <div className="col-span-1 md:block hidden">
          <div className="sticky top-20">
            <BookingSummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
