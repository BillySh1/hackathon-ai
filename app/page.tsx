"use client";
import FormLabel from "@/components/FormLabel";
import InputPanel from "@/components/InputPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <BackgroundBanner /> */}
      <div className="flex w-full gap-4 items-center justify-between p-4">
        <InputPanel />
        <FormLabel />
      </div>
    </main>
  );
}
