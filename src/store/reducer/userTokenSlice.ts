import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAccessTokenState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: IAccessTokenState = {
  accessToken: null,
  refreshToken: null,
};

export const userTokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    saveUserToken: (state: IAccessTokenState, action: PayloadAction<object>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
