/*
Vazifasi: 
Redux — butun loyihaning umumiy xotirasi
Hozir bo'sh (reducer: {})
Keyinroq: productSlice, memberSlice, orderSlice kiradi
*/
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer
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
