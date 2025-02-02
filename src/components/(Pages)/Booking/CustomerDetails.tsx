"use client";

import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import CustomerDetailForm from "@/components/Forms/CustomerDetailForm";
import { differenceInDays, format } from "date-fns";
import BookingSummaryCard from "@/components/Cards/BookingSummaryCard";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const CustomerDetails = () => {
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );
  const selectedRoom = useAppSelector(
    (state: RootState) => state.selectRoom.currentRoomDetails
  );

  const [dialogActive, setDialogActive] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const formattedCheckin = bookingDetails?.checkin
    ? format(new Date(bookingDetails.checkin), "dd MMM")
    : "N/A";
  const formattedCheckout = bookingDetails?.checkout
    ? format(new Date(bookingDetails.checkout), "dd MMM")
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

  return (
    <div className="bg-[#ecefea] flex flex-col gap-2 sm:py-0">
      <div className="flex sm:flex-row flex-col sm:gap-4 gap-1 bg-[#e2e8de] sm:py-4 py-6 sm:px-6 px-3">
        <div className="flex flex-col lg:w-[25vw] sm:w-[43vw] w-full h-14  bg-[#d0d8cf] px-4 py-2">
          <p className="text-gray-700 text-xs font-normal">
            Check-in and Check-out
          </p>
          <p>
            {formattedCheckin} - {formattedCheckout}
          </p>
        </div>
        <div className="flex flex-col lg:w-[25vw] sm:w-[43vw] w-full h-14  bg-[#d0d8cf] px-4 py-2">
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
      <div className="relative grid xl:grid-cols-4 md:grid-cols-3 sm:pt-6 md:pb-6 pt-3">
        <div className="xl:col-span-3 md:col-span-2 col-span-4">
          <CustomerDetailForm />
        </div>

        <div className="col-span-1 md:block hidden">
          <div className="sticky top-20">
            <BookingSummaryCard />
          </div>
        </div>
        <div className="md:hidden block sticky bottom-0 col-span-4 mt-6">
          <Dialog onOpenChange={(open) => setDialogActive(open)}>
            <DialogTrigger
              className="bg-white w-full p-3 px-6"
              style={{ boxShadow: "0 -4px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-between">
                <div className="flex flex-col bg-[#dce2db] p-2">
                  <p className="text-gray-700 text-xs font-normal">
                    {formattedCheckin} - {formattedCheckout}
                  </p>
                  <p className="text-gray-700 text-xs font-normal">
                    {totalRooms}
                    {totalRooms === 1
                      ? " room"
                      : totalRooms && totalRooms > 1
                      ? " rooms"
                      : ""}
                    , {totalAdults} {totalAdults === 1 ? "adult" : "adults"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl text-primary font-medium text-right ">
                    <p>
                      NRs. {calculateTotalPrice(selectedRoom?.price.OnePerson)}
                    </p>
                    <p className="text-gray-600 font-normal text-xs">
                      Taxes and Fees Included
                    </p>
                  </div>
                  <div>
                    <div className="text-primary font-thin border border-primary rounded-full p-1 flex items-center justify-center">
                      {dialogActive ? (
                        <MdOutlineKeyboardArrowDown size={28} />
                      ) : (
                        <MdOutlineKeyboardArrowUp size={28} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-sm sm:rounded-sm rounded-sm ">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription>
                  <BookingSummaryCard />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* <div className="sm:hidden block sticky bottom-0 col-span-4 mt-6 z-[300]">
          <Sheet
            open={isDrawerOpen}
            onOpenChange={(open) => setIsDrawerOpen(open)}
          >
            <button
              className="bg-white w-full p-3 px-6"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              style={{ boxShadow: "0 -4px 4px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-between">
                <div className="flex flex-col bg-[#dce2db] p-2">
                  <p className="text-gray-700 text-xs font-normal">
                    {formattedCheckin} - {formattedCheckout}
                  </p>
                  <p className="text-gray-700 text-xs font-normal">
                    {totalRooms}
                    {totalRooms === 1
                      ? " room"
                      : totalRooms && totalRooms > 1
                      ? " rooms"
                      : ""}
                    , {totalAdults} {totalAdults === 1 ? "adult" : "adults"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl text-primary font-medium text-right ">
                    <p>
                      NRs. {calculateTotalPrice(selectedRoom?.price.OnePerson)}
                    </p>
                    <p className="text-gray-600 font-normal text-xs">
                      Taxes and Fees Included
                    </p>
                  </div>
                  <div>
                    <div className="text-primary font-thin border border-primary rounded-full p-1 flex items-center justify-center">
                      {isDrawerOpen ? (
                        <MdOutlineKeyboardArrowDown size={28} />
                      ) : (
                        <MdOutlineKeyboardArrowUp size={28} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <SheetContent
              side={"bottom"}
              className={`fixed inset-x-0 bottom-0 z-[100] bg-white pb-24 ${
                isDrawerOpen ? "" : "pointer-events-none"
              }`}
            >
              <SheetHeader>
                <SheetDescription>
                  <BookingSummaryCard />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerDetails;
