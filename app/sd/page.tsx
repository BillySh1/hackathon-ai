'use client'
import FormLabel from "@/components/FormLabel";
import SDGenerate from "@/components/SDGenerate";


export default function SDPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <FormLabel />
      <SDGenerate />

    </div>
  );
}
