import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import foo from "./foo/reducer";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    foo
  },
  middleware: [...getDefaultMiddleware({ thunk: true })],
});

// store.dispatch(updateVersion());

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();

export default store;
