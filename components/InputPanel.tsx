"use client";
import {  useState } from "react";
import OpenAI from "openai";

export default function InputPanel() {
  const [result, setResult] = useState("");
  const fetchOpenAI = async () => {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    });
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
  };
  return <div className="input">
    
  </div>
}
