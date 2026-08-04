/*
Vazifasi: 
Redux — butun loyihaning umumiy xotirasi
Hozir bo'sh (reducer: {})
Keyinroq: productSlice, memberSlice, orderSlice kiradi
*/
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import ProductsPageReducer from "./screens/productsPage/slice";
import OrdersPageReducer from "./screens/ordersPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
