import { createAction } from "@reduxjs/toolkit";

export const updateTexts = createAction<{ texts: string[] }>(
  "foo/texts"
);
