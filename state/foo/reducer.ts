import { createReducer } from "@reduxjs/toolkit";
import { onSelect, updateTexts } from "./action";

export const initialState = {
  texts: ["", "", "", "", "", "", "", ""],
  current: { img: "", des: "" },
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateTexts, (state, { payload: { texts } }) => {
      state.texts = [...texts];
    })
    .addCase(onSelect, (state, { payload: { current } }) => {
      state.current = current;
    })
);
