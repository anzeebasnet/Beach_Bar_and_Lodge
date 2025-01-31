// store/menuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomCardType } from "@/types/types";

interface RoomState {
  currentRoomDetails: RoomCardType | null;
}

const initialState: RoomState = {
  currentRoomDetails: null,
};

const SelectRoomSlice = createSlice({
  name: "selectRoom",
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<RoomCardType>) => {
      state.currentRoomDetails = action.payload;
    },
    clearRoom: (state) => {
      state.currentRoomDetails = null;
    },
  },
});

export const { setRoom, clearRoom } = SelectRoomSlice.actions;
export default SelectRoomSlice.reducer;