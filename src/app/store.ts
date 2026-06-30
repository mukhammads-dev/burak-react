/*
Vazifasi: 
Redux — butun loyihaning umumiy xotirasi
Hozir bo'sh (reducer: {})
Keyinroq: productSlice, memberSlice, orderSlice kiradi
*/
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
