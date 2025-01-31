// store/menuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingDetails } from "@/types/types";

interface BookingState {
  currentBookingDetails: BookingDetails | null;
}

const initialState: BookingState = {
  currentBookingDetails: null,
};

const bookingSlice = createSlice({
  name: "bookingDetails",
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<BookingDetails>) => {
      state.currentBookingDetails = action.payload;
    },
    clearBooking: (state) => {
      state.currentBookingDetails = null;
    },
  },
});

export const { setBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;