import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  currentAdmin: currentAdmin | null;
}

export interface currentAdmin {
  id: string;
  name: string;
  email: string;
  permission: string;
}

const initialState: UserState = {
  currentAdmin: null,
};

export const currentAdminSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    setCurrentAdmin: (state, action: PayloadAction<currentAdmin>) => {
      state.currentAdmin = action.payload;
      console.log("setCurrentAdmin", state.currentAdmin);
    },
    clearCurrentAdmin: (state) => {
      state.currentAdmin = null;
      console.log("clearCurrentAdmin", state.currentAdmin);
    },
  },
});
export const { setCurrentAdmin, clearCurrentAdmin } = currentAdminSlice.actions;

export default currentAdminSlice.reducer;
