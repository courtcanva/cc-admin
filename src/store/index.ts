import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import { adminApi } from "../redux/api/adminApi";
import { courtsApi } from "../redux/api/courtsApi";
import { quotationApi } from "../redux/api/quotationApi";
import { usersAccountApi } from "../redux/api/usersAccountApi";
import { depositApi } from "../redux/api/depositApi";
import { templateApi } from "../redux/api/templateApi";
import { ordersApi } from "../redux/api/ordersApi";
import { dashboardApi } from "../redux/api/dashboardApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      [adminApi.reducerPath]: adminApi.reducer,
      [courtsApi.reducerPath]: courtsApi.reducer,
      [quotationApi.reducerPath]: quotationApi.reducer,
      [usersAccountApi.reducerPath]: usersAccountApi.reducer,
      [templateApi.reducerPath]: templateApi.reducer,
      [depositApi.reducerPath]: depositApi.reducer,
      [ordersApi.reducerPath]: ordersApi.reducer,
      [dashboardApi.reducerPath]: dashboardApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        adminApi.middleware,
        courtsApi.middleware,
        quotationApi.middleware,
        usersAccountApi.middleware,
        templateApi.middleware,
        depositApi.middleware,
        ordersApi.middleware,
        dashboardApi.middleware
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
