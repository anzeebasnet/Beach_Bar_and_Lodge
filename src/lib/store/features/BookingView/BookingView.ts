import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BookingViewState {
  currentBookingView: string;
}

const initialState: BookingViewState = {
  currentBookingView: "form",
}

export const BookingViewSlice = createSlice({
  name: 'view',
  initialState,
   reducers: {
      setBookingView: (state, action: PayloadAction<string>) => {
        state.currentBookingView = action.payload;
      },
      clearBookingView: (state) => {
        state.currentBookingView = "";
      },
    },
})

// Action creators are generated for each case reducer function
export const { setBookingView, clearBookingView } = BookingViewSlice.actions;
export default BookingViewSlice.reducer;