"use client";

import BackgroundBanner from "@/components/BackgroundBanner";

export default function Home() {
  const fetchPOST = async () => {
    console.log("kkkk");
    const res = await fetch("/proxy/sdapi/v1/loras").then((r) => r.json());
    console.log(res, "result");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundBanner />
    </main>
  );
}
