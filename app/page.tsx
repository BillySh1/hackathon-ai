"use client";
import FormLabel from "@/components/FormLabel";
import InputPanel from "@/components/InputPanel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <BackgroundBanner /> */}
      <FormLabel />
      <InputPanel />
      <Link href={"/sd"} className="next">
        {"NEXT ->"}
      </Link>
    </main>
  );
}
