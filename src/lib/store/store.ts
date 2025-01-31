import { configureStore } from '@reduxjs/toolkit'
import bookingSliceReducer from "./features/Booking/Booking"
import bookingViewSliceReducer from "./features/BookingView/BookingView"
import selectRoomSliceReducer from "./features/SelectRoom/SelectRoom"

export const makeStore = () => {
    return configureStore({
        reducer: {
          bookingDetails: bookingSliceReducer,
          bookingView: bookingViewSliceReducer,
          selectRoom: selectRoomSliceReducer,
        },
      })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']