"use client";
import { useEffect, useState } from "react";
import FormLabel from "./FormLabel";

export default function SDGenerate() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchSD = async () => {
      const payload = {
        prompt: "maltese puppy women sexy",
        batch_size: "1",
        sampler_index: "UniPC",
        steps: 15,
        width: 512,
        height: 512,
      };
      const res = await fetch("/proxy/sdapi/v1/txt2img", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((r) => r.json());

      setResult(res.images);
      setLoading(false);
    };
    fetchSD();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FormLabel />
      {(loading && <h1>Loading...</h1>) || null}
      {result.map((x, idx) => {
        return <img key={idx} src={`data:image/jpeg;base64, ${x}`} alt="" />;
      })}
    </main>
  );
}
