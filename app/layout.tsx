"use client";
import { Inter } from "next/font/google";
import React from "react";
import { Provider } from "react-redux";
import "./globals.css";
import store from "@/state";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>;
      </body>
    </html>
  );
}
