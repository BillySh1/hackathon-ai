"use client";
import { AppState } from "@/state";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function SDPage() {
  const current = useSelector<AppState, any>((state) => state.foo.current);
  const mint = async () => {};
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-white gap-10">
      <div
        className="overlay"
        style={{
          backgroundImage: `url(data:image/jpeg;base64,${current.img})`,
        }}
      />

      <div className="preview">
        <img
          className="preview-img"
          src={`data:image/jpeg;base64,${current.img}`}
          alt=""
        />
      </div>
      <div className="description">{current.des}</div>
      <Link
        className="next"
        style={{
          zIndex: 10,
          color: "#000",
        }}
        onClick={(e) => {
          e.preventDefault();
        }}
        href={""}
      >
        {"Mint ->"}
      </Link>
    </div>
  );
}
