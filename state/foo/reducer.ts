import { createReducer } from "@reduxjs/toolkit";
import { updateTexts } from "./action";

export const initialState = {
  texts: ["", "", "", "", "", "", "", ""],
};

export default createReducer(initialState, (builder) =>
  builder.addCase(updateTexts, (state, { payload: { texts } }) => {
    state.texts = [...texts];
  })
);
