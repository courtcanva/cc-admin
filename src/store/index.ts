import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import { courtsApi } from "../redux/api/courtsApi";
export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      [courtsApi.reducerPath]: courtsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(courtsApi.middleware),
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
