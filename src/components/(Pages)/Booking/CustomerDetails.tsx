"use client";

import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import CustomerDetailForm from "@/components/Forms/CustomerDetailForm";

interface RoomState {
  adults: number;
  children: string[];
}

const CustomerDetails = () => {
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );

  return (
    <div className="bg-[#ecefea] flex flex-col gap-2 sm:py-0">
      <div className="flex sm:flex-row flex-col sm:gap-4 bg-[#e2e8de] sm:py-2 py-6 sm:px-6 px-3">
        <div className="flex flex-col gap-2">date picker</div>
        <div>guest selector</div>
      </div>
      <div>
        <h2 className="text-xl text-center font-normal text-gray-700 py-2">
          Details of your stay
        </h2>
      </div>
      <div>
        <Progress value={70} />
      </div>
      <CustomerDetailForm />
    </div>
  );
};

export default CustomerDetails;
