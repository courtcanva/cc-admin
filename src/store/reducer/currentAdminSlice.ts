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
      localStorage.setItem("adminInfo", JSON.stringify(state.currentAdmin));
    },
    clearCurrentAdmin: (state) => {
      state.currentAdmin = null;
      localStorage.removeItem("adminInfo");
    },
  },
});
export const { setCurrentAdmin, clearCurrentAdmin } = currentAdminSlice.actions;

export default currentAdminSlice.reducer;
