"use client";
import store from "@/state";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
export default function Provider({ children }: { children: React.ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
