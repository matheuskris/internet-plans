import { configureStore } from "@reduxjs/toolkit";
import userAdressReducer from "./userAdressSlice/userAdressSlice";

export const store = configureStore({
  reducer: { userAdress: userAdressReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
