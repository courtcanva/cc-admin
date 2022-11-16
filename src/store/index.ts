import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import { adminApi } from "../redux/api/adminApi";
import { courtsApi } from "../redux/api/courtsApi";
import { quotationApi } from "../redux/api/quotationApi";
import { usersAccountApi } from "../redux/api/usersAccountApi";
export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      [adminApi.reducerPath]: adminApi.reducer,
      [courtsApi.reducerPath]: courtsApi.reducer,
      [quotationApi.reducerPath]: quotationApi.reducer,
      [usersAccountApi.reducerPath]: usersAccountApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        adminApi.middleware,
        courtsApi.middleware,
        quotationApi.middleware,
        usersAccountApi.middleware
      ),
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
