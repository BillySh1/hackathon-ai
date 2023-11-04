"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="hero">
      <img className="hero-logo" src="/logo.svg" alt="" />

      <img className="hero-title" src="/title.svg" alt="" />

      </div>
      <Link href={"/chat"} className="next" style={{
        opacity: 0,
      }}>
        {"ENTER ->"}
      </Link>
    </div>
  );
}
