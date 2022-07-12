import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userTokenReducer from "./reducer/userTokenSlice";
import counterReducer from "./reducer/counterSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      userToken: userTokenReducer,
    },
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
